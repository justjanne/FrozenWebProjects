"use strict";

var container = document.getElementById("jkcontainer");
var video = document.getElementById("jkvideo");
var controls = document.getElementById("jkcontrols");
var progresswrapper = document.getElementById("jkprogresswrapper");
var bar = document.getElementById("jkprogressbar");
var progress = document.getElementById("jkprogress");
var buffered = document.getElementById("jkbuffered");
var seeker = document.getElementById("jkseeker");
var playbtn = document.getElementById("jkplay");
var maxbtn = document.getElementById("jkmax");
var timeDisplay = document.getElementById("jktime");
var subcontainer = document.getElementById("jksubtitles");
var subdisplay = document.getElementById("jksubtitledisplay");
var ccbtn = document.getElementById("jkcc");
var stsicon = document.getElementById("jkstatus-icon");
var volumebtn = document.getElementById("jkvolume");
var volumeprogress = document.getElementById("jkvolumeprogress");
var volumewrapper = document.getElementById("jkvolumewrapper");
var volumeseeker = document.getElementById("jkvolumeseeker");

/////////////////////////////////

var subtitles = [],
    subcount,
    subenabled = false,
    subselect = 0,
    progressdrag = false,
    volumedrag = false,
    volumeHideTimeout,
    hideTimeout;

var underElement = function (elem, e) {
    return (e.clientX >= elem.offsetLeft && e.clientX <= elem.offsetLeft + elem.offsetWidth) &&
         (e.clientY >= elem.offsetTop && e.clientY <= elem.offsetTop + elem.offsetHeight);
};

var getParameterByName = function (name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

var getAJAXFile = function (url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.onreadystatechange = function () {
        if (request.readyState == 4 && request.status == 200) {
            callback(request.responseText);
        } else {
            console.log("Error " + request.status + " loading ressource " + url);
        }
    };
    request.send();
};

var initSources = function () {
    var src = document.createElement("source"),
        sub = document.createElement("track");
    src.setAttribute("src", getParameterByName("src"));
    sub.setAttribute("src", getParameterByName("sub"));
    sub.setAttribute("kind", "subtitle");
    video.appendChild(src);
    video.appendChild(sub);
};

var videosub_tcsecs = function (tc) {
    var sp = tc.split(":"),
        h = sp[0],
        m = sp[1],
        spl = sp[2].split(","),
        s = spl[0],
        ms = spl[1];
    return (3600 * h) + (60 * m) + (s * 1) + (ms * 0.001);
};

var videosub_timecode_min = function (tc) {
    var tcpair = tc.split(' --> ');
    return videosub_tcsecs(tcpair[0]);
};

var videosub_timecode_max = function (tc) {
    var tcpair = tc.split(' --> ');
    return videosub_tcsecs(tcpair[1]);
};

var timeFormat = function (value) {
    if (0 < value) {
        var comment = Math.floor(value / 3600),
            n = Math.floor((value - 3600 * comment) / 60);

        value = Math.floor(value % 60);
        return (comment ? comment + ":" : "") + (10 > n ? "0" : "") + n + ":" + (10 > value ? "0" : "") + value;
    } else {
        return "00:00";
    }
};

var isFullScreen = function (element) {
    return element === (document.fullScreenElement || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.msFullScreenElement);
};

var updateBuffered = function () {
    var i, bufferStart, bufferEnd;
    for (i = 0; i < video.buffered.length; i += 1) {
        if (video.buffered.start(i) <= video.currentTime && video.buffered.end(i) >= video.currentTime) {
            bufferStart = video.buffered.start(i) / video.duration * 100;
            bufferEnd = video.buffered.end(i) / video.duration * 100;
            buffered.style.left = Math.max(bufferStart, 0) +  '%';
            buffered.style.width = Math.min(bufferEnd - bufferStart, 100) +  '%';
            break;
        }
    }
};

var getBufferedSections = function () {
    var buffered = [], i;
    for (i = 0; i < video.buffered.length; i += 1) {
        buffered.push({from: video.buffered.start(i),
                       to: video.buffered.end(i)});
    }
    return buffered;
};

var updateProgress = function () {
    var progressCount = (video.currentTime / video.duration) * 100 + '%';
    progress.style.width = progressCount;
    seeker.style.left = progressCount;
    
    if (video.buffered.length === 1) {
        updateBuffered();
    }
    
    timeDisplay.innerHTML = timeFormat(video.currentTime) + " / " + timeFormat(video.duration);
};

var updateSubtitleSize = function () {
    subdisplay.style.fontSize = Math.max(video.offsetHeight / 20, 16) + "pt";
};

var updateVolume = function () {
    var vol = (video.muted) ? 0 : video.volume;
    
    if (vol === 0) {
        volumebtn.setAttribute("data-status", "off");
    } else if (vol <= 0.333) {
        volumebtn.setAttribute("data-status", "min");
    } else if (vol <= 0.667) {
        volumebtn.setAttribute("data-status", "mid");
    } else {
        volumebtn.setAttribute("data-status", "max");
    }
    volumeseeker.style.bottom = vol * 100 + "%";
    volumeprogress.style.height = vol * 100 + "%";
};

var getOffsetX = function (el) {
    var sum = 0;
    while (el !== null) {
        sum += el.offsetLeft;
        el = el.offsetParent;
    }
    return sum;
};

var getOffsetY = function (el) {
    var sum = 0;
    while (el !== null) {
        sum += el.offsetTop;
        el = el.offsetParent;
    }
    return sum;
};

var extractSubtitles = function (str) {
    return str.split("\n").map(function (s) {return s.trim(); }).join("\n").trim().split("\n\n").map(function (el) {
        return {
            id: el.trim().split('\n')[0],
            time: el.trim().split('\n')[1],
            start: videosub_timecode_min(el.trim().split('\n')[1]),
            end: videosub_timecode_max(el.trim().split('\n')[1]),
            text: el.trim().split('\n').splice(2).join("<br>")
        };
    });
};

var loadSubtitles = function () {
    var tracks = [].slice.call(video.querySelectorAll("track[kind=subtitle]")),
        subcount = 0;
    tracks.forEach(function (tr) {
        var meta = {
            label: tr.getAttribute("label"),
            src: tr.getAttribute("src"),
            data: []
        };
        if (meta.src.trim() !== "") {
            getAJAXFile(meta.src, function (str) {
                meta.data = extractSubtitles(str);
                subtitles.push(meta);
            });
            subcount += 1;
        }
    });
    if (subcount === 0) {
        ccbtn.setAttribute("data-status", "none");
    }
};

var showControls = function (b) {
    if (b) {
        controls.style.opacity = 1;
        container.removeAttribute("nopointer");
    } else {
        controls.style.opacity = 0;
        if (isFullScreen(container)) {
            container.setAttribute("nopointer", "");
        }
    }
};

var resetVolumeTimout = function (event) {
    clearTimeout(volumeHideTimeout);
    volumewrapper.style.opacity = 1;
    volumeHideTimeout = setTimeout(function () {
        volumewrapper.style.opacity = 0;
    }, 800);
};

var timeoutFunc = function (event) {
    showControls(1);
    clearTimeout(hideTimeout);
    if (!video.paused && !underElement(controls, event)  && !progressdrag && !volumedrag) {
        hideTimeout = setTimeout(function () {
            showControls(0);
        }, 1000);
    }
};

var playFunc = function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
};

var maxFunc = function () {
    var requestFullScreen = container.requestFullScreen || container.webkitRequestFullScreen || container.mozRequestFullScreen || container.msRequestFullscreen,
        cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msCancelFullScreen;
    
    if (isFullScreen(container)) {
        cancelFullScreen.call(document);
    } else {
        requestFullScreen.call(container);
    }
};

////////////////////////////////

progresswrapper.addEventListener("mousedown", function (event) {
    video.pause();
    progressdrag = true;
});

seeker.addEventListener("mousedown", function (event) {
    video.pause();
    progressdrag = true;
});

volumewrapper.addEventListener("mousedown", function (event) {
    volumedrag = true;
});

volumeseeker.addEventListener("mousedown", function (event) {
    volumedrag = true;
});

window.addEventListener("mouseup", function (event) {
    if (progressdrag) {
        video.play();
        progressdrag = false;
    } else if (volumedrag) {
        volumedrag = false;
    }
});

progresswrapper.addEventListener("click", function (event) {
    var offset = (event.clientX - getOffsetX(progress)) / progress.offsetParent.offsetWidth;
    video.currentTime = video.duration * offset;
    updateProgress();
});

volumewrapper.addEventListener("click", function (event) {
    var offset = (event.clientY - getOffsetY(volumeseeker.offsetParent - volumeseeker.offsetParent.offsetHeight)) / volumeseeker.offsetParent.offsetHeight;
    if (offset > 1) {
        offset = 1;
    } else if (offset < 0) {
        offset = 0;
    }
    video.volume = offset;
});

volumebtn.addEventListener("mousemove", resetVolumeTimout);
volumebtn.addEventListener("click", function () {
    video.muted = !video.muted;
    updateVolume();
});

volumewrapper.addEventListener("mousemove", resetVolumeTimout);
window.addEventListener("mousemove", function (event) {
    var offset;
    if (progressdrag) {
        offset = (event.clientX - getOffsetX(progress)) / progress.offsetParent.offsetWidth;
        video.currentTime = video.duration * offset;
        updateProgress();
    } else if (volumedrag) {
        offset =  -(event.clientY - getOffsetY(volumeseeker.offsetParent) - volumeseeker.offsetParent.offsetHeight) / volumeseeker.offsetParent.offsetHeight;
        if (offset > 1) {
            offset = 1;
        } else if (offset < 0) {
            offset = 0;
        }
        video.volume = offset;
        resetVolumeTimout();
    }
});

window.addEventListener("resize", function (event) {
    updateSubtitleSize();
    if (!isFullScreen(container)) {
        container.removeAttribute("nopointer");
        maxbtn.setAttribute("data-status", "collapsed");
    } else {
        maxbtn.setAttribute("data-status", "expanded");
    }
});

var init = false;

video.addEventListener("play", function () {
    playbtn.setAttribute("data-status", "play");
    stsicon.setAttribute("data-status", "");
    if (!init && document.location.hash && NaN!=document.location.hash.substring(document.location.hash.indexOf("#t")+2)) {
      video.currentTime = document.location.hash.substring(document.location.hash.indexOf("#t")+2);
    }
    init = true;
});

video.addEventListener("pause", function () {
    playbtn.setAttribute("data-status", "pause");
    stsicon.setAttribute("data-status", "pause");
    
    document.location.hash = "#t"+video.currentTime.toFixed(0);
});

video.addEventListener("loadeddata", function () {
    video.play();
    updateVolume();
});

video.addEventListener("volumechange", updateVolume);

playbtn.addEventListener("click", playFunc);
video.addEventListener("click", playFunc);
subcontainer.addEventListener("click", playFunc);
stsicon.addEventListener("click", playFunc);
container.addEventListener("keypress", function (evt) {
    if (evt.key === " " || evt.keyCode === 32) {
        playFunc();
    }
});

ccbtn.addEventListener("click", function (event) {
    if (subenabled) {
        subenabled = false;
        subdisplay.style.visibility = "hidden";
        ccbtn.setAttribute("data-status", "off");
    } else {
        subenabled = true;
        subdisplay.style.visibility = "visible";
        ccbtn.setAttribute("data-status", "on");
    }
});


container.addEventListener("dblclick", maxFunc);
maxbtn.addEventListener("click", maxFunc);

container.addEventListener("mousemove", timeoutFunc);
container.addEventListener("click", timeoutFunc);

video.addEventListener("progress", updateProgress);
video.addEventListener("playing", updateProgress);
video.addEventListener("timeupdate", updateProgress);
video.addEventListener("seeked", updateProgress);
video.addEventListener("pause", function () {
    showControls(1);
    clearTimeout(hideTimeout);
});

video.addEventListener('play', function (an_event) {
    subcount = 0;
});

// add event handler to be called when video is done
video.addEventListener('ended', function (an_event) {
    subcount = 0;
});

// add event handler to be called when the video timecode has jumped
video.addEventListener('seeked', function (an_event) {
    subcount = 0;
    if (subtitles.length > 0) {
        while (videosub_timecode_max(subtitles[subselect].data[subcount].time) < video.currentTime.toFixed(1)) {
            subcount += 1;
            if (subcount > subtitles[subselect].data.length - 1) {
                subcount = subtitles[subselect].data.length - 1;
                break;
            }
        }
    }
});

// add event handler to be called while video is playing
video.addEventListener('timeupdate', function (an_event) {
    var subtitle = '', event, subs, pos, subhtml;
    if (subtitles.length > 0) {
        pos = video.currentTime;
        subs = subtitles[subselect].data.filter(function (t) {return t.start <= pos && t.end >= pos; });
        subhtml = subs.map(function (t) { return t.text; }).reduce(function (a, b) { return a + "<br>" + b; }, "");

        if (subdisplay.innerHTML !== subhtml) {
            subdisplay.innerHTML = subhtml;

            //create and dispatch a subtitlechanged event
            if (window.CustomEvent) {//only dispatch the event if the browser supports it
                event = new CustomEvent("subtitlechanged", {
                    detail: {
                        target: subdisplay,
                        video: video,
                        content: subhtml,
                        atTime: video.currentTime
                    },
                    bubbles: true,
                    cancelable: true
                });

                video.dispatchEvent(event);
            }
        }
    }
});

////////////////////////////////

initSources();
loadSubtitles();
updateVolume();
updateBuffered();
updateProgress();
updateSubtitleSize();

console.log(location.search);

container.focus();