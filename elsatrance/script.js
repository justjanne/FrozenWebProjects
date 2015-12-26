"use strict";

if (typeof console === "undefined") {
    window.console = {
        log: function () {}
    };
}

var quality = 1;

var widget;

var srcList = [
    "lq",
    "mq",
    "hq"
];

// Adds a listener independent of browser
function addListener(object, event, callback) {
    console.log("addListener(" + object + "," + event + "," + callback.name + ");");

    if (object.addEventListener) {
        object.addEventListener(event, callback, false); //W3C
    } else {
        object.attachEvent('on' + event, callback); //IE
    }
}


// Iterates through all elements of this class
function forEachOfClass(classname, callback) {
    console.log("forEachOfClass(" + classname + "," + callback.name + ");");

    var item, iterator, elements = document.getElementsByClassName(classname);
    for (iterator = 0; iterator < elements.length; iterator += 1) {
        callback(elements[iterator]);
    }
}

// updates the video element based on the quality in the global state
function updateQuality() {
    var video = document.querySelectorAll("video.video")[0], type = video.currentSrc.substr(video.currentSrc.lastIndexOf("."));
    if (type !== "mp4" && type !== "webm") {
        type = "webm";
    }
    video.src = "res/" + srcList[quality] + "." + type;
    video.play();
    document.getElementById("quality").selectedIndex = quality;
}

// does a speedtest and calls the callback afterwards with the resulting value in mbps
function speedtest(callback) {
    var imageAddr = "res/speedtest.png" + "?n=" + Math.random(), startTime, endTime, downloadSize = 138760, download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        var duration = (endTime - startTime) / 1000, bitsLoaded = downloadSize * 8, speedBps = (bitsLoaded / duration).toFixed(2), speedKbps = (speedBps / 1024).toFixed(2), speedMbps = (speedKbps / 1024).toFixed(2);
        callback(speedMbps);
    };
    startTime = (new Date()).getTime();
    download.src = imageAddr;
}

// This function gets the speed in Mbps as input and changes the quality on the video accordingly.
function selectQualityBySpeed(speed) {
    if (speed < 2) {
        quality = 0;
    } else if (speed > 8) {
        quality = 2;
    }
    updateQuality();
}

// This takes the URL and returns the first integer after the hash
function getSongFromURL() {
    var urlsong = 1;
    urlsong = window.location.hash.substring(1);
    return (urlsong > 0) ? urlsong - 1 : 0;
}

// This function is called on init.
function init() {
    // Binding the Soundcloud widget
    widget = SC.Widget(document.getElementById('soundcloud_widget'));

    // Execute as soon as widget is loaded
    widget.bind(SC.Widget.Events.READY, function () {
        console.log("READY");

        widget.skip(getSongFromURL());
        widget.setVolume(document.getElementById("volume").value*0.01);
    });

    // Execute as soon as a song is played
    widget.bind(SC.Widget.Events.PLAY_PROGRESS, function () {
        widget.setVolume(document.getElementById("volume").value*0.01);
    });

    // Execute as soon as URL changes
    addListener(window, "hashchange", function () {
        widget.skip(getSongFromURL());
        widget.setVolume(document.getElementById("volume").value*0.01);
    });

    addListener(document.getElementById("play"), "click", function () {
        widget.toggle();
    });

    addListener(document.getElementById("volume"), "click", function () {
        widget.setVolume(document.getElementById("volume").value*0.01);
    });

    addListener(document.getElementById("volume"), "change", function () {
        widget.setVolume(document.getElementById("volume").value*0.01);
    });

    addListener(document.getElementById("scloud"), "click", function () {
        document.getElementById("soundcloud_widget").classList.toggle("visible");
    });

    addListener(document.getElementById("quality"), "change", function () {
        // Stores the selected value into a global variable
        quality = this.value;
        // Updates the Quality on the object according to the global state
        updateQuality();
    });

    // Start with medium quality
    document.getElementById("quality").selectedIndex = 1;
    updateQuality();

    // Start Speedtest
    speedtest(selectQualityBySpeed);
}

addListener(window, "load", init);
