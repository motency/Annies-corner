function changetitle() {
    let b = document.getElementById("none");
    console.log(b);
    const d = new Date();
    var dd = d.getMinutes();
    b.innerText = dd;
}

function disappear() {
    let e = document.getElementById("erase");
    e.style.display = "none";
}

function countdownTen() {
    let countdownList = document.getElementById("countdown-list")
    countdownList.innerHTML = "";
    for (let i = 10; i >= 1; i--) {
        let listItem = document.createElement("li");
        listItem.innerText = i;
        countdownList.appendChild(listItem);
    }
}

function displayWord() {
    const words = ["pie", "diplomat", "compound", "punish", "precede"];
    const selectedWord = words[Math.floor(Math.random() * words.length)];
    const display = [];
    for (let i=0; i < selectedWord.length; i++) {
      display[i] = "_";
    }

    document.getElementById("selectedWord").textContent = "_".repeat(selectedWord.length);
    document.getElementById("selectedWord").dataset.word = selectedWord;
}

function checkGuess() {
    const guess = document.getElementById("guess").value.toLowerCase();
    const selectedWord = document.getElementById("selectedWord").dataset.word;
    const display = document.getElementById("selectedWord").textContent.split(" ");
    let correctGuess = false;
    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord.includes(guess)) {
            if (guess === selectedWord[i]) {
                display[i] = guess;
                correctGuess = true;
            }
        }
    }
    document.getElementById("selectedWord").textContent = display.join(" ");
    if (correctGuess) {
        document.getElementById("result").textContent = "Correct!";
    } else {
        document.getElementById("result").textContent = "Incorrect. Try again.";
    }
}

function parseArray(arrImPirate) {
    return arrImPirate.sort();
}

function sortUserInput() {
    let userInput = document.getElementById("userInput").value;
    let numberArray = userInput.split(",").map(Number);
    console.log(numberArray);
    let sortedArray = parseArray(numberArray);
    document.getElementById("output").innerHTML = sortedArray;
}


function loadDoc() {
    var sterm=document.getElementById("searchterm").value;
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" +sterm;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        var wikiobj= JSON.parse(this.response)
        console.log(wikiobj)
        txt = "";
        pages=wikiobj.query.pages
        console.log(wikiobj.query.pages)
        for(var i in pages) {
            txt += pages[i].title + "<br>";
        }
        document.getElementById("demo").innerHTML = txt;
    }
        xhttp.open("GET",url );
        xhttp.send();
}

function mapLoad(){
    //Define the lat lon coordinate
    var latLng = [41.789649, -87.599702];

    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

    var map = L.map('map', {
      center: latLng,
      zoom: 16,
      layers: [streets]
    });

    var baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };

    L.control.layers(baseLayers).addTo(map);

    L.marker(latLng).addTo(map)
    .bindPopup("<b>UChicago<br>Campus</b>").openPopup();

    //Click event
    var popup = L.popup();

    function onMapClick(e) {
      popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
    }
    map.on('click', onMapClick);
}

displayWord();
