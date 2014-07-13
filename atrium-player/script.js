"use strict";

// Here we can specify all available songs
var songs = [{
    "date": "1406",
    "title": "Dj Double-B Mix 06/14",
    "url": "c6c7b78f9e391986a1f096d3711d953a",
    "duration":307
}, {
    "date": "1406",
    "title": "ChrizzD. Mix 06/2014",
    "url": "5ed854f53696b281dee3f80ae8b1b727",
    "duration":249
}, {
    "date": "1404",
    "title": "DJ A-Style Mix 04/2014",
    "url": "2f1ea798ae526c19b73a50c529f34ee6",
    "duration":367
}, {
    "date": "1404",
    "title": "ChrizzD. Mix 04/2014",
    "url": "7dbade141488e4023f21a9ac22df6fff",
    "duration":480
}, {
    "date": "1403",
    "title": "Little Luke Mix 03/2014",
    "url": "497909af5707c88a1e235ae9b5919b64",
    "duration":281
}, {
    "date": "1401",
    "title": "DJ Lukas Mix 01/2014",
    "url": "c06f1696fe523898a4b20ca939ae5681",
    "duration":316
}, {
    "date": "1401",
    "title": "ChrizzD. Mix 01/2014",
    "url": "26413c08917b4fa010721dbd5bfc9276",
    "duration":480
}, {
    "date": "1312",
    "title": "DJ Lukas Mix 12/2013",
    "url": "37f70c5b5b9539a556e842363ae57295",
    "duration":292
}, {
    "date": "1312",
    "title": "Dj A-Style Mix 12/2013",
    "url": "0e41caee5a29dcb2540ecb2317a589db",
    "duration":460
}, {
    "date": "1312",
    "title": "ChrizzD. Mix 12/2013",
    "url": "45711d68e9a92e02d3360835fa0ee03b",
    "duration":480
}, {
    "date": "1310",
    "title": "DJ Marques Mix 10/2013",
    "url": "9d2f4ffa00d01048b4b2fd8bef8a616d",
    "duration":466
}, {
    "date": "1310",
    "title": "ChrizzD. Mix 10/2013",
    "url": "90c8e2a55325d9271d0450dd8fb34b12",
    "duration":480
}, {
    "date": "1309",
    "title": "Dj A-Style Mix 09/2013",
    "url": "c970427ed763d9ef2698fda8bfa0e58f",
    "duration":311
}, {
    "date": "1308",
    "title": "DJ Marques Mix 08/2013",
    "url": "fa992ae7bc5569f52e3c4491e14cca5f",
    "duration":419
}, {
    "date": "1308",
    "title": "DJ Lukas Mix 08/2013",
    "url": "ff2a2039c4b57da996d0c50f3135606b",
    "duration":343
}, {
    "date": "1308",
    "title": "ChrizzD. Mix 08/2013",
    "url": "3d4b55a1a87728118c27f0c299f32504",
    "duration":480
}, {
    "date": "1307",
    "title": "ChrizzD. Mix Juli 2013",
    "url": "124ca5e579a7fdd5a5251b739b0f3fcf",
    "duration":480
}, {
    "date": "1306",
    "title": "DJ LuKi Mix Juni 2013",
    "url": "72cb48ff942c4333d2c181044d287f0e",
    "duration":315
}, {
    "date": "1306",
    "title": "ChrizzD. Mix Juni 2013",
    "url": "9c0ce8b004ecd6d6ead63207fbecc355",
    "duration":360
}, {
    "date": "1305",
    "title": "Dj Marques Mix Mai 2013",
    "url": "e26f745495dbca7d32a47992e43b685a",
    "duration":344
}, {
    "date": "1305",
    "title": "DJ LuKi Mix Mai 2013",
    "url": "c448d5ca6b9943036e699872c05bfb9c",
    "duration":249
}, {
    "date": "1305",
    "title": "DJ A-Style Mix Mai 2013",
    "url": "85df9c024cff1145d456b18f94e35197",
    "duration":234
}, {
    "date": "1305",
    "title": "ChrizzD. Mix Mai 2013",
    "url": "50473494cac50da13e03a2bd0c233ed6",
    "duration":480
}, {
    "date": "1304",
    "title": "J LuKi Mix April 12",
    "url": "36ac207799fa6186bd6bfd0540c77157",
    "duration":257
}, {
    "date": "1304",
    "title": "Dj A-Style Mix April",
    "url": "9b48add9348a0a08c6f3a7b912977d2e",
    "duration":290
}, {
    "date": "1304",
    "title": "ChrizzD. Mix April 12",
    "url": "7de7a6006e1b30d3466fbfd884290973",
    "duration":360
}, {
    "date": "1303",
    "title": "ChrizzD. Mix März",
    "url": "7663f9f119de5ab77850e82819a05734",
    "duration":480
}, {
    "date": "1303",
    "title": "ChrizzD. Mix März",
    "url": "2eb85655d2ce197b2e599c32354f6706",
    "duration":480
}, {
    "date": "1302",
    "title": "Dj Marques Mix",
    "url": "74e0a4d5358cdb47d7a02d28eb7f4418",
    "duration":498
}, {
    "date": "1302",
    "title": "Dj A-Style Mix Februar",
    "url": "6e67279db0e0382dbf2f3a6f5ab789ee",
    "duration":164
}, {
    "date": "1302",
    "title": "Dj A-Style Mix Februar",
    "url": "5ef90c6f7973441a1ebfda1fc352fd9c",
    "duration":164
}, {
    "date": "1301",
    "title": "Dj OneThirty Mix Januar",
    "url": "2a4c74d24138337c1d8bdd513d3a9cc7",
    "duration":251
}, {
    "date": "1301",
    "title": "Dj A-Style Mix Januar",
    "url": "39f3c32877a63043b6f0afe1f4f632a3",
    "duration":221
}, {
    "date": "1301",
    "title": "Dj A-Style Mix",
    "url": "c40c638a64c31e45f08f6d41ab76f519",
    "duration":227
}, {
    "date": "1301",
    "title": "ChrizzD. Mix Januar",
    "url": "58822dbad84921fbba80682a5dd38b65",
    "duration":480
}, {
    "date": "1212",
    "title": "Dj Luky Mix Dezember",
    "url": "bf2ee2a79556290eb4b4ae923866f305",
    "duration":300
}];

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

// load the volume from the slider and change the volume to this value.
// the slider outputs a value between 0 and 100 while the songs need a
// value between 0 and 1, so just divide by 100
function changeVolume() {
    console.log("changeVolume();");
    
    var player = document.getElementById("player");

    setItem("volume", document.getElementById("player").volume*100);
}

function getURL(id) {
    return "res/" + songs[id].url + ".mp3";
}

// play a specific id
function play(song) {    
    console.log("play(" + song.toString() + ");");
    
    var player = document.getElementById("player");

    if (song >= songs.length) {
        song = 0;
        window.location.hash = "1-0";
    }
    
    forEachOfClass("song",function(element) {
        if (element.classList.contains("selected")) {
            element.classList.remove("selected");
        }
    });
    
    document.getElementById("song-"+(song+1).toString()).classList.add("selected");

    player.pause();
    player.src=getURL(song);
    player.play();
    window.location.hash = (song + 1).toString();
}

function getNiceDate(id) {
    var raw = songs[id].date;
    var month = raw.substr(2);
    var year = raw.substr(0,2);
    
    var months = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    
    return months[month-1] + " '" + year;
}

function getNiceDuration(id) {
    var raw = songs[id].duration;
    var min = Math.floor(raw/60).toString();
    var sec = (raw % 60);
    
    if (sec<10) {
        sec = "0" + sec;
    }
    
    return min + ":" + sec;
}

// This creates the buttons and the audio elements for our songs
function createSongs() {
    console.log("createSongs();");

    var parent = document.getElementById("songs"), i, song, mutebtn;
    // for each song out of our list we create each one button and one audio element
    for (i = 0; i < songs.length; i += 1) {
        song = document.createElement("tr");
        song.id = "song-" + (i + 1).toString();
        song.className = "song";
        song.innerHTML = '<td></td><td>' + songs[i].title + '</td><td>' + getNiceDuration(i) + '</td><td>' + getNiceDate(i) + '</td>';
        addListener(song, "click", function () {
            console.log("location.hash = " + this.id.substr(5));
            location.hash = this.id.substr(5);
        });
        // we append these now to the main parent
        parent.appendChild(song);
    }
}

// Determines which song to play, uses local data of last song and the URL
function getInitialSong() {
    console.log("getInitialSong();");

    var song = 0;
    var urlsong = window.location.hash.substr(1);

    if (urlsong > 0 && urlsong < songs.length + 1) {
        song = urlsong - 1;
    }
    return song;
}

function playPause() {
    var player = document.getElementById("player");
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}

function initVolume() {
    var player = document.getElementById("player");
    
    var volume = 50;
    if (getItem("volume") !== null && getItem("volume") !== undefined) {
        volume = getItem("volume");
    }

    player.volume = volume * 0.01;
}

function init() {
    console.log("init();");

    // We create buttons and audio objects for each song
    createSongs();

    // Load volume from localstorage
    initVolume();

    // Add a listener for a URL change
    addListener(window, "hashchange", function () {
        play(getInitialSong());
    });
    
    addListener(document.getElementById("player"), "ended", function () {
        location.hash = getInitialSong() + 2;
    });
        
    addListener(document.getElementById("player"), "volumechange", changeVolume);        
    
    // now we start the first song
    play(getInitialSong());
}

addListener(window, "load", init);