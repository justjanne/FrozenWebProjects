var quality = 1;

var srcList = [
    "lq",
    "mq",
    "hq"
];

var qualSelector;

function changeQuality() {
    var video = document.querySelectorAll("video.video")[0];
    var type = video.currentSrc.substr(video.currentSrc.lastIndexOf("."));
    if (type!="mp4" && type != "webm") {
        type = "webm"
    }
    video.src = "res/" + srcList[quality] + "." + type;
    video.play();
    document.getElementById("quality").selectedIndex = quality;
}

function speedtest() {
    var imageAddr = "res/speedtest.png" + "?n=" + Math.random(), startTime, endTime, downloadSize = 20383, download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        var duration = (endTime - startTime) / 1000, bitsLoaded = downloadSize * 8, speedBps = (bitsLoaded / duration).toFixed(2), speedKbps = (speedBps / 1024).toFixed(2), speedMbps = (speedKbps / 1024).toFixed(2);
        if (speedMbps < 2) {
            quality = 0;
        } else if (speedMbps > 8) {
            quality = 2;
        }
        changeQuality();
    };
    startTime = (new Date()).getTime();
    download.src = imageAddr;
}   

$(document).ready(function () {
    var widget = SC.Widget(document.getElementById('soundcloud_widget'));
    widget.bind(SC.Widget.Events.READY, function () {
        console.log('Ready...');
    });
    $("#play").click(function () {
        widget.toggle();
    });
    $("#volume").click(function () {
        widget.setVolume(document.getElementById("volume").value);
    });
    $("#volume").change(function () {
        widget.setVolume(document.getElementById("volume").value);
    });
    $("#scloud").click(function () {
        $("#soundcloud_widget").toggleClass("visible");
    });
    $("#quality").change(function () {
        quality = this.value;
        changeQuality();
    });
    document.getElementById("quality").selectedIndex = 1;
    widget.setVolume(document.getElementById("volume").value);
    speedtest();
    changeQuality();
});