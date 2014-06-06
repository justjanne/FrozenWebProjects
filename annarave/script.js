"use strict";

// Here we can specify all available songs
var songs = [
    {
        "name": "1",
        "url": "http://frozen.kuschku.de/annarave/res/fysb.mp3"
    },
    {
        "name": "2",
        "url": "http://frozen.kuschku.de/annarave/res/lig.mp3"
    },
    {
        "name": "3",
        "url": "http://frozen.kuschku.de/annarave/res/harlemshake.mp3"
    },
    {
        "name": "4",
        "url": "http://frozen.kuschku.de/annarave/res/giraffes.mp3"
    },
    {
        "name": "5",
        "url": "http://frozen.kuschku.de/annarave/res/atomicink.mp3"
    },
    {
        "name": "6",
        "url": "http://frozen.kuschku.de/annarave/res/butterfly.mp3"
    },
    {
        "name": "7",
        "url": "http://frozen.kuschku.de/annarave/res/caramell.mp3"
    }
];

var videos = [
    {
        "name": "1",
        "url": {
            "webm" : "http://frozen.kuschku.de/annarave/res/annarave.webm",
            "mp4" : "http://frozen.kuschku.de/annarave/res/annarave.mp4"
        }
    },
    {
        "name": "2",
        "url": {
            "webm" : "http://frozen.kuschku.de/annarave/res/caramell.webm",
            "mp4" : "http://frozen.kuschku.de/annarave/res/caramell.mp4"
        }
    }
];

if (typeof console === "undefined") {
    window.console = {
        log: function () {}
    };
}

function setItem(key, value) {
    document.cookie = key.toString() + "=" + value.toString();
}

function getItem(key) {
    try {
        var val = document.cookie.match(key + "=[0-9]*")[0];
        return val.substring(key.length + 1, val.length);
    } catch (e) {
        console.log(e.name + ":" + e.message);
        return undefined;
    }
}

function selectVideo(id) {
    var video = document.querySelectorAll("#video")[0], type = video.currentSrc.substr(video.currentSrc.lastIndexOf("."));
    if (type !== "mp4" && type !== "webm") {
        type = "webm";
    }
    video.src = videos[id].url[type];
    video.play();
}

    
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

// stops all songs at once
function pauseAll() {
    console.log("pauseAll();");

    forEachOfClass("song", function (entry) {
        // pause the song
        entry.pause();
        try {
            // reset current position to start
            entry.currentTime = 0;
        } catch (e) {}
    });
}

// set volume to a value between 0 and 1 by setting it for each song
function setVolume(value) {
    console.log("setVolume(" + value.toString() + ");");

    forEachOfClass("song", function (entry) {
        entry.volume = value;
    });
}

// load the volume from the slider and change the volume to this value.
// the slider outputs a value between 0 and 100 while the songs need a
// value between 0 and 1, so just divide by 100
function changeVolume() {
    console.log("changeVolume();");

    setVolume(document.getElementById("volume").value * 0.01);
    setItem("volume", document.getElementById("volume").value);
}

// play a specific id
function play(song) {
    console.log("play(" + song.toString + ");");
    
    if (song >= songs.length) {
        song = 0;
        window.location.hash = "1";
    }

    // at first we pause all songs
    pauseAll();
    // then we play the song object with the corresponding id
    document.getElementById(song.toString()).play();
    // Then change the url accordingly
    window.location.hash = (song + 1).toString();

    if (song == 7) {
        selectVideo(2);
    } else {
        selectVideo(1);
    }
}

// This creates the buttons and the audio elements for our songs
function createSongs() {
    console.log("createSongs();");

    var parent = document.getElementById("songs"), i, song, mutebtn;
    // for each song out of our list we create each one button and one audio element
    for (i = 0; i < songs.length; i += 1) {
        song = document.createElement("span");
        song.innerHTML = '<a class="button" href="#' + (i + 1).toString() + '">' + songs[i].name + '</a>';
        song.innerHTML += '<audio loop id="' + i.toString() + '" volume="0.5" class="song" src="' + songs[i].url + '"></audio>';
        // we append these now to the main parent
        parent.appendChild(song);
    }
}

// Determines which song to play, uses local data of last song and the URL
function getInitialSong() {
    console.log("getInitialSong();");

    var song = 0, urlsong = window.location.hash.substring(1);

    if (urlsong > 0 && urlsong < songs.length + 1) {
        song = urlsong - 1;
    }
    return song;
}

function initVolume() {
    var volume = 50;
    if (getItem("volume") !== null && getItem("volume") !== undefined) {
        volume = getItem("volume");
    }
    
    setVolume(volume * 0.01);
    document.getElementById("volume").value = volume;
}

function init() {
    console.log("init();");

    // We create buttons and audio objects for each song
    createSongs();

    // we load the volume from the slider and apply it (some browsers store slider values)
    addListener(document.getElementById("volume"), "change", changeVolume);
    
    // Load volume from localstorage
    initVolume();
    
    // now we start the first song
    play(getInitialSong());
    
    // Add a listener for a URL change
    addListener(window, "hashchange", function () { play(getInitialSong()); });
}

addListener(window, "load", init);
