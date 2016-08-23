"use strict";

// Here we can specify all available songs
var songs = [
    {
        url: "842f2a113bcca03a76674ca671f658c2",
        title: "Dj Baxi Mit 01/16",
        date: "1601",
        duration: "482"
    },
    {
        url: "f04eb1146544fdf786fe23255f338e20",
        title: "Dj Baxi Mix 11/15",
        date: "1511",
        duration: "331"
    },
    {
        url: "a08abf2dcbc3d9921f9adabf24e7f463",
        title: "Dj ChrizzD Mix 11/15",
        date: "1511",
        duration: "480"
    },
    {
        url: "8c589530ba327aabee63597a6e593e9a",
        title: "Geiles Leben",
        date: "1511",
        duration: "212"
    },
    {
        url: "ea7284b51751fb16b547d4c0c4bc5a36",
        title: "Dj A-Style Mix 09/15",
        date: "1509",
        duration: "318"
    },
    {
        url: "6c8068aa69b460746a0e1d5e0f708fb4",
        title: "Dj Marques Mix 09/15",
        date: "1509",
        duration: "380"
    },
    {
        url: "613c26a65142e3ddcc467492543c4332",
        title: "Chris Brown - Five More Hours",
        date: "1507",
        duration: "210"
    },
    {
        url: "4b73ecd627515ab391257e3d2c50e281",
        title: "Dj Marques Mix 06/2015",
        date: "1506",
        duration: "344"
    },
    {
        url: "c24ebbd64440ae6066c877bb98fd0553",
        title: "Dj A-Style Mix 05/2015",
        date: "1505",
        duration: "297"
    },
    {
        url: "72fe79b8bb970821f589302b89e28c72",
        title: "Dj Marques Mix 04/2015",
        date: "1504",
        duration: "413"
    },
    {
        url: "f1396af5d2c23ee1635702b73bf938a5",
        title: "Dj A-Style Mix 03/2015",
        date: "1503",
        duration: "245"
    },
    {
        url: "d7671ab0f82898b437eb9145ee7ea545",
        title: "Dj Marques Mix 03/2015",
        date: "1503",
        duration: "395"
    },
    {
        url: "e052c11ad67e36dabf043350d358a8b2",
        title: "Dj A-Style Mix 02/2015",
        date: "1502",
        duration: "242"
    },
    {
        url: "aaa4ada382d68585cfc343e70acb73f8",
        title: "Dj Double B Mix 02/2015",
        date: "1502",
        duration: "352"
    },
    {
        url: "4b6f77406fef840bc5a50d405b995ceb",
        title: "Dj Marques Mix 02/2015",
        date: "1502",
        duration: "375"
    },
    {
        url: "fdacbe03c87b032cee84fbcc6c3c0af2",
        title: "Dj Tibby Mix 02/15",
        date: "1502",
        duration: "327"
    },
    {
        url: "5c2fae0ff1a0a1088ab5959b65eb7a4e",
        title: "07.11.15 live -> KC Rebell",
        date: "1511",
        duration: "179"
    },
    {
        url: "7cbf4c2409a2b084bbeaf6845e0d5c97",
        title: "Dj Marques Mix 08/15",
        date: "1508",
        duration: "378"
    },
    {
        url: "d19dc9e232c77cc7d1a51d6b4df2aa3b",
        title: "Dj Tibby Mix 12/14",
        date: "1412",
        duration: "312"
    },
    {
        url: "a27ddbe1d498ae6589a758d1ab17bab8",
        title: "Dj Tibby Mix 11/14",
        date: "1411",
        duration: "256"
    },
    {
        url: "8e32be3d24c069bd3a40f828e2a5744b",
        title: "Dj Marques Mix 11/2014",
        date: "1411",
        duration: "400"
    },
    {
        url: "238f003389e75db055fb79ce01841790",
        title: "Dj A-Style Mix 11/2014",
        date: "1411",
        duration: "373"
    },
    {
        url: "202fbc90ca37cbe33fcfdb2147bb8b73",
        title: "Dj MAXX Mix 11/14",
        date: "1411",
        duration: "366"
    },
    {
        url: "3565aa4967956062d27d51d5c36e454f",
        title: "Dj Tibby Mix 09/14",
        date: "1409",
        duration: "246"
    },
    {
        url: "0345020f4839dc17dc5baa7cdc48015e",
        title: "Dj A-Style Mix 09/2014",
        date: "1409",
        duration: "289"
    },
    {
        url: "1ec70e57a2e4813a687ef333b17d0445",
        title: "Dj Double-B Mix 09/14",
        date: "1409",
        duration: "344"
    },
    {
        url: "8d451cab7555b4de582badccd88ff446",
        title: "Dj MAXX Mix 08/14",
        date: "1408",
        duration: "520"
    },
    {
        url: "5296847a6075acd693d298bd5e51574d",
        title: "Dj TIBBY Mix 08/14",
        date: "1408",
        duration: "373"
    },
    {
        url: "d3d00973137115957df48fe99af3f503",
        title: "Dj Double-B Mix 08/14",
        date: "1408",
        duration: "244"
    },
    {
        url: "c6c7b78f9e391986a1f096d3711d953a",
        title: "Dj Double-B Mix 06/14",
        date: "1406",
        duration: "307"
    },
    {
        url: "5ed854f53696b281dee3f80ae8b1b727",
        title: "ChrizzD. Mix 06/2014",
        date: "1406",
        duration: "249"
    },
    {
        url: "2f1ea798ae526c19b73a50c529f34ee6",
        title: "DJ A-Style Mix 04/2014",
        date: "1404",
        duration: "367"
    },
    {
        url: "7dbade141488e4023f21a9ac22df6fff",
        title: "ChrizzD. Mix 04/2014",
        date: "1404",
        duration: "480"
    },
    {
        url: "497909af5707c88a1e235ae9b5919b64",
        title: "Little Luke Mix 03/2014",
        date: "1403",
        duration: "281"
    },
    {
        url: "c06f1696fe523898a4b20ca939ae5681",
        title: "DJ Lukas Mix 01/2014",
        date: "1401",
        duration: "316"
    },
    {
        url: "26413c08917b4fa010721dbd5bfc9276",
        title: "ChrizzD. Mix 01/2014",
        date: "1401",
        duration: "480"
    },
    {
        url: "37f70c5b5b9539a556e842363ae57295",
        title: "DJ Lukas Mix 12/2013",
        date: "1312",
        duration: "292"
    },
    {
        url: "0e41caee5a29dcb2540ecb2317a589db",
        title: "Dj A-Style Mix 12/2013",
        date: "1312",
        duration: "460"
    },
    {
        url: "45711d68e9a92e02d3360835fa0ee03b",
        title: "ChrizzD. Mix 12/2013",
        date: "1312",
        duration: "480"
    },
    {
        url: "9d2f4ffa00d01048b4b2fd8bef8a616d",
        title: "DJ Marques Mix 10/2013",
        date: "1310",
        duration: "466"
    },
    {
        url: "90c8e2a55325d9271d0450dd8fb34b12",
        title: "ChrizzD. Mix 10/2013",
        date: "1310",
        duration: "480"
    },
    {
        url: "c970427ed763d9ef2698fda8bfa0e58f",
        title: "Dj A-Style Mix 09/2013",
        date: "1309",
        duration: "311"
    },
    {
        url: "fa992ae7bc5569f52e3c4491e14cca5f",
        title: "DJ Marques Mix 08/2013",
        date: "1308",
        duration: "419"
    },
    {
        url: "ff2a2039c4b57da996d0c50f3135606b",
        title: "DJ Lukas Mix 08/2013",
        date: "1308",
        duration: "343"
    },
    {
        url: "3d4b55a1a87728118c27f0c299f32504",
        title: "ChrizzD. Mix 08/2013",
        date: "1308",
        duration: "480"
    },
    {
        url: "124ca5e579a7fdd5a5251b739b0f3fcf",
        title: "ChrizzD. Mix Juli 2013",
        date: "1307",
        duration: "480"
    },
    {
        url: "72cb48ff942c4333d2c181044d287f0e",
        title: "DJ LuKi Mix Juni 2013",
        date: "1306",
        duration: "315"
    },
    {
        url: "9c0ce8b004ecd6d6ead63207fbecc355",
        title: "ChrizzD. Mix Juni 2013",
        date: "1306",
        duration: "360"
    },
    {
        url: "e26f745495dbca7d32a47992e43b685a",
        title: "Dj Marques Mix Mai 2013",
        date: "1305",
        duration: "344"
    },
    {
        url: "c448d5ca6b9943036e699872c05bfb9c",
        title: "DJ LuKi Mix Mai 2013",
        date: "1305",
        duration: "249"
    },
    {
        url: "85df9c024cff1145d456b18f94e35197",
        title: "DJ A-Style Mix Mai 2013",
        date: "1305",
        duration: "234"
    },
    {
        url: "50473494cac50da13e03a2bd0c233ed6",
        title: "ChrizzD. Mix Mai 2013",
        date: "1305",
        duration: "480"
    },
    {
        url: "9b48add9348a0a08c6f3a7b912977d2e",
        title: "Dj A-Style Mix April",
        date: "1304",
        duration: "290"
    },
    {
        url: "7663f9f119de5ab77850e82819a05734",
        title: "ChrizzD. Mix März",
        date: "1303",
        duration: "480"
    },
    {
        url: "74e0a4d5358cdb47d7a02d28eb7f4418",
        title: "Dj Marques Mix",
        date: "1302",
        duration: "498"
    },
    {
        url: "6e67279db0e0382dbf2f3a6f5ab789ee",
        title: "Dj A-Style Mix Februar",
        date: "1302",
        duration: "164"
    },
    {
        url: "2a4c74d24138337c1d8bdd513d3a9cc7",
        title: "Dj OneThirty Mix Januar",
        date: "1301",
        duration: "251"
    },
    {
        url: "c40c638a64c31e45f08f6d41ab76f519",
        title: "Dj A-Style Mix",
        date: "1301",
        duration: "227"
    },
    {
        url: "58822dbad84921fbba80682a5dd38b65",
        title: "ChrizzD. Mix Januar",
        date: "1301",
        duration: "480"
    },
    {
        url: "bf2ee2a79556290eb4b4ae923866f305",
        title: "Dj Luky Mix Dezember",
        date: "1212",
        duration: "300"
    },
    {
        url: "b0a848db27721b80dd31d1982738d62a",
        title: "ChrizzD. Mix Dezember",
        date: "1212",
        duration: "480"
    },
    {
        url: "26fecdca249570e66c5a6032f3bc264e",
        title: "Chris Kensington Mix Dezember",
        date: "1212",
        duration: "480"
    },
    {
        url: "e600050c71c9099c8db14671d9bf443a",
        title: "ChrizzD. Mix November",
        date: "1211",
        duration: "480"
    },
    {
        url: "503a0d81dfe561be06b4ccddbae54a90",
        title: "Psychonautn Oktober Mix",
        date: "1210",
        duration: "280"
    },
    {
        url: "ad44ef970d4a0b6e2f6d7dab8acdfc37",
        title: "Dj A-Style Oktober Mix",
        date: "1210",
        duration: "232"
    },
    {
        url: "16628f55cb254346ca00677d64b07588",
        title: "ChrizzD. Mix September",
        date: "1209",
        duration: "483"
    },
    {
        url: "db997a6b46f713c517e6739bbd7a7eaf",
        title: "PSYCHONAUTN Mix August",
        date: "1208",
        duration: "373"
    },
    {
        url: "80aabab52f0cbe5e8faf75c6d7e2bb8a",
        title: "Dj Urben Mix August",
        date: "1208",
        duration: "180"
    },
    {
        url: "eef3984e1de5c7c786a1b034e3584dd2",
        title: "ChrizzD MIX August",
        date: "1208",
        duration: "505"
    },
    {
        url: "9d7b1642a38182aa9ef1d5a90a2f95e4",
        title: "ChrizzD Juli Mix",
        date: "1207",
        duration: "480"
    },
    {
        url: "6e88aec2db58f5f5bda3f9fad58aa3bf",
        title: "Psychonautn Juni Mix",
        date: "1206",
        duration: "334"
    },
    {
        url: "6c12fafa07266a562474077ae51ec3df",
        title: "Dj A-Style Mix Juni",
        date: "1206",
        duration: "237"
    },
    {
        url: "71d3d7efa99e2bca070f60ab4b4e199d",
        title: "30.6 Re Opening",
        date: "1206",
        duration: "89"
    },
    {
        url: "062605b31c689bafb5fd0043e084f8d5",
        title: "Rhythm Of the Night",
        date: "1205",
        duration: "234"
    },
    {
        url: "12ffa76578451de5a3766128eaea6ce2",
        title: "Mike Candys - If The World Would End",
        date: "1205",
        duration: "195"
    },
    {
        url: "0974f16dc4bd20914b51be678a0a5f0b",
        title: "I Just Had Sex - Akon",
        date: "1205",
        duration: "175"
    },
    {
        url: "729b9dc6219c16050febfcafaa734b78",
        title: " Dj Antoine  - SHAKE 3X",
        date: "1205",
        duration: "182"
    },
    {
        url: "8a661c3db06facfaa461d4926a0dba74",
        title: "ChrizzD Mai Mix",
        date: "1205",
        duration: "480"
    },
    {
        url: "606b799525611147891da430ff66462a",
        title: "Bring Em Out",
        date: "1205",
        duration: "216"
    },
    {
        date: "1204",
        title: "J LuKi Mix April 12",
        url: "36ac207799fa6186bd6bfd0540c77157",
        duration: "257"
    },
    {
        date: "1204",
        title: "ChrizzD. Mix April 12",
        url: "7de7a6006e1b30d3466fbfd884290973",
        duration: "360"
    },
    {
        url: "34d7a007248a631e48c8b5b6cc047e8e",
        title: "Turn All The Lights On",
        date: "1204",
        duration: "224"
    },
    {
        url: "ab6f17eae50de0ed20d9a2727a86dd22",
        title: "PSYCHONAUTN Mix",
        date: "1204",
        duration: "332"
    },
    {
        url: "71ce9db76b7214fb4a3cc1fc7c8839bf",
        title: " David Guetta - Down Down Down ",
        date: "1204",
        duration: "190"
    },
    {
        url: "4acde69bb55aaa92fe8bad8dbe0e69b1",
        title: "07.04 Black Easter Yam",
        date: "1204",
        duration: "72"
    },
    {
        url: "45623a469f0bf663826a921a8c89a96d",
        title: "Turn All The Lights On",
        date: "1203",
        duration: "224"
    },
    {
        url: "927a88f54b7b43db8514c5c05baebaff",
        title: "Taio Cruz Troublemaker ",
        date: "1203",
        duration: "198"
    },
    {
        url: "98ff90e17ec7b74ee2d192d7aa86498d",
        title: "David Guetta Turn Me On",
        date: "1203",
        duration: "200"
    },
    {
        url: "5d5385f4082ce2b56c5ebed99847f7ad",
        title: "ChrizzD mix",
        date: "1203",
        duration: "482"
    },
    {
        url: "69d9860014255564d234df3acbaddb1f",
        title: "G G   Endless",
        date: "1202",
        duration: "210"
    },
    {
        url: "d30588517892aaa993ac8acd8db5a8cd",
        title: "Frank Raven Rmx",
        date: "1202",
        duration: "256"
    },
    {
        url: "326c4638e414de8a798fb1a46bc67647",
        title: "ChrizzD mix",
        date: "1202",
        duration: "480"
    },
    {
        url: "65d1c5ddbf3b592946deeea2e20ed515",
        title: "04.02. Black Mammut Jam",
        date: "1202",
        duration: "110"
    },
    {
        url: "d74573b460c72481b4378c0918803392",
        title: "Sean Paul - She Doesnt Mind",
        date: "1201",
        duration: "225"
    },
    {
        url: "290e8741cf360dba906360bd3768180d",
        title: "G G   Endless ",
        date: "1201",
        duration: "210"
    },
    {
        url: "92213d192819c9777eb7c25659042329",
        title: "Akon Snoop Dogg - I am Day Dreaming",
        date: "1201",
        duration: "236"
    },
    {
        url: "4e8cb256f7617f07eb102644aec7a010",
        title: "Taio Cruz feat. Flo Rida -Hangover",
        date: "1110",
        duration: "238"
    },
    {
        url: "f822c1bac970f4f9653093b8ba867b80",
        title: "Klaas & Bodybangers - I Like ",
        date: "1110",
        duration: "177"
    },
    {
        url: "01ae7ddb062d49867f13d6599bd85b38",
        title: "Turn This Club Around - R.I.O",
        date: "1108",
        duration: "199"
    },
    {
        url: "df6025aca497cf0cdb8ff141d9b1275e",
        title: "Sak Noel - Loca People",
        date: "1108",
        duration: "187"
    },
    {
        url: "be36f687e17641ffa1092d4f7d531bc5",
        title: "Sean paul - Got to love you",
        date: "1107",
        duration: "176"
    },
    {
        url: "83a10543ef5e5dd25c5760d7242eb80f",
        title: "Mike Candys - One Night In Ibiza",
        date: "1107",
        duration: "214"
    },
    {
        url: "2bc6470926f58f245a18cc7b49c7f8a8",
        title: "Don Omar - Danza Kuduro",
        date: "1107",
        duration: "199"
    },
    {
        url: "5a6a24295aafd7f9379257d23082648a",
        title: "Pitbull Chris Brown - International Love",
        date: "1106",
        duration: "223"
    },
    {
        url: "99410b52e96a170b8110657a13039370",
        title: "Don Omar - Danza Kuduro ",
        date: "1106",
        duration: "199"
    },
    {
        url: "03a2a6bc1ad7446b974803a32cc8da47",
        title: "INNA feat. Flo Rida - Club Rocker",
        date: "1105",
        duration: "214"
    },
    {
        url: "3c2f7eb417dc9ccaf5eddd678502255b",
        title: "Flo Rida - Kiss The Sky",
        date: "1105",
        duration: "162"
    },
    {
        url: "801d49b842aceb4768d01a0078d866f1",
        title: "Avicii - Levels ",
        date: "1105",
        duration: "237"
    },
    {
        url: "424cd8849af9c770192c2fd186a40449",
        title: "Pitbull Feat. Ne-Yo - Give Me Everything",
        date: "1104",
        duration: "249"
    },
    {
        url: "736f1b8f00823160b6accd7aefb345a1",
        title: "LMFAO - Party Rock Anthem",
        date: "1104",
        duration: "219"
    },
    {
        url: "27d29aa4faea3bc1fb34cf36a12b1b15",
        title: "Chris Brown- Beautiful People",
        date: "1104",
        duration: "227"
    },
    {
        url: "f21893d505ef2fec0670497871e3f362",
        title: "Alexandra Stan - Mr. Saxo Beat",
        date: "1104",
        duration: "193"
    }
];

if (typeof console === "undefined") {
    window.console = {
        log: function () {}
    };
}

function setItem(key, value) {
    localStorage.setItem(key, value);
}

function getItem(key) {
    return localStorage.getItem(key);
}


// Adds a listener independent of browser
function addListener(object, event, callback) {
    if (object.addEventListener) {
        object.addEventListener(event, callback, false); //W3C
    } else {
        object.attachEvent('on' + event, callback); //IE
    }
}


// Iterates through all elements of this class
function forEachOfClass(classname, callback) {
    var item, iterator, elements = document.getElementsByClassName(classname);
    for (iterator = 0; iterator < elements.length; iterator += 1) {
        callback(elements[iterator]);
    }
}

// load the volume from the slider and change the volume to this value.
// the slider outputs a value between 0 and 100 while the songs need a
// value between 0 and 1, so just divide by 100
function changeVolume() {
    var player = document.getElementById("player");

    setItem("volume", document.getElementById("player").volume * 100);
}

function getURL(id) {

    
    //return "res/" + songs[id].url + ".mp3";
    return "http://images.disco-atrium.de/audio/" + songs[id].url + ".mp3";
}

// play a specific id
function play(song) {
    var player = document.getElementById("player");

    if (song >= songs.length) {
        song = 0;
        window.location.hash = "1-0";
    }

    forEachOfClass("song", function (element) {
        if (element.classList.contains("selected")) {
            element.classList.remove("selected");
        }
    });

    document.getElementById("song-" + (song + 1).toString()).classList.add("selected");

    player.pause();
    player.src = getURL(song);
    player.play();
    window.location.hash = (song + 1).toString();
}

function getNiceDate(id) {
    var raw = songs[id].date, month = raw.substr(2), year = raw.substr(0, 2), months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return months[month - 1] + " '" + year;
}

function getNiceDuration(id) {
    var raw = songs[id].duration, min = Math.floor(raw / 60).toString(), sec = (raw % 60);

    if (sec < 10) {
        sec = "0" + sec;
    }

    return min + ":" + sec;
}

function jumpToSong(event) {
    location.hash = event.target.parentNode.id.substr(5);
}

// This creates the buttons and the audio elements for our songs
function createSongs() {
    var parent = document.getElementById("songs"), i, song, mutebtn;
    // for each song out of our list we create each one button and one audio element
    for (i = 0; i < songs.length; i += 1) {
        song = document.createElement("tr");
        song.id = "song-" + (i + 1).toString();
        song.className = "song";
        song.innerHTML = '<td></td><td>' + songs[i].title + '</td><td>' + getNiceDuration(i) + '</td><td>' + getNiceDate(i) + '</td>';
        // we append these now to the main parent
        parent.appendChild(song);
        addListener(song, "click", jumpToSong);
    }
}

// Determines which song to play, uses the URL
function getInitialSong() {
    var song = 0, urlsong = window.location.hash.substr(1);

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
    var player = document.getElementById("player"), volume = 50;
    if (getItem("volume") !== null && getItem("volume") !== undefined) {
        volume = getItem("volume");
    }

    player.volume = volume * 0.01;
}

function init() {
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
