"use strict";

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

    
// Adds a listener independent of browser
function addListener(object, event, callback) {
    console.log("addListener(" + object + "," + event + "," + callback.name + ");");

    if (window.addEventListener) {
        window.addEventListener(event, callback, false); //W3C
    } else {
        window.attachEvent('on' + event, callback); //IE
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

    // we load the volume from the slider and apply it (some browsers store slider values)
    addListener(document.getElementById("volume"), "change", changeVolume);
    
    // Load volume from localstorage
    initVolume();
}

addListener(window, "load", init);
