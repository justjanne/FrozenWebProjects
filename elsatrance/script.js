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

var qualSelector;

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

function updateQuality() {
    var video = document.querySelectorAll("video.video")[0], type = video.currentSrc.substr(video.currentSrc.lastIndexOf("."));
    if (type !== "mp4" && type !== "webm") {
        type = "webm";
    }
    video.src = "res/" + srcList[quality] + "." + type;
    video.play();
    document.getElementById("quality").selectedIndex = quality;
}

function speedtest(callback) {
    var imageAddr = "res/speedtest.png" + "?n=" + Math.random(), startTime, endTime, downloadSize = 20383, download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        var duration = (endTime - startTime) / 1000, bitsLoaded = downloadSize * 8, speedBps = (bitsLoaded / duration).toFixed(2), speedKbps = (speedBps / 1024).toFixed(2), speedMbps = (speedKbps / 1024).toFixed(2);
        callback(speedMbps);
    };
    startTime = (new Date()).getTime();
    download.src = imageAddr;
}

function selectQualityBySpeed(speed) {
    if (speed < 2) {
        quality = 0;
    } else if (speed > 8) {
        quality = 2;
    }
    updateQuality();
}

function skipToSong(number) {
    widget.skip(number);
}

function getInitialSong() {
    var urlsong = 1;
    urlsong = window.location.hash.substring(1);
    return urlsong - 1;
}

function init() {
    widget = SC.Widget(document.getElementById('soundcloud_widget'));
    widget.bind(SC.Widget.Events.READY, function () {
        skipToSong(getInitialSong());
    });

    addListener(document.getElementById("play"), "click", function () {
        widget.toggle();
    });

    addListener(document.getElementById("volume"), "click", function () {
        widget.setVolume(document.getElementById("volume").value);
    });

    addListener(document.getElementById("volume"), "change", function () {
        widget.setVolume(document.getElementById("volume").value);
    });

    addListener(document.getElementById("scloud"), "click", function () {
        document.getElementById("soundcloud_widget").classList.toggle("visible");
    });

    addListener(document.getElementById("quality"), "change", function () {
        quality = this.value;
        updateQuality();
    });

    document.getElementById("quality").selectedIndex = 1;
    widget.setVolume(document.getElementById("volume").value);
    speedtest(selectQualityBySpeed);
    updateQuality();

    addListener(window, "hashchange", function () { skipToSong(getInitialSong()); });
}

addListener(window, "load", init);
