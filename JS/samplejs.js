function changetitle() {
    let b = document.getElementById("none");
    console.log(b);
    const d = new Date();
    let dd = d.getMinutes();
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
    let sterm=document.getElementById("searchterm").value;
    let url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" +sterm;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let wikiobj= JSON.parse(this.response)
        console.log(wikiobj)
        let txt = "";
        pages=wikiobj.query.pages
        console.log(wikiobj.query.pages)
        for(var i in pages) {
            let title = pages[i].title;
            let link = "https://en.wikipedia.org/?curid=" + pages[i].pageid;
            txt += "<a href='" + link + "'>" + title + "</a><br>";
        }
        document.getElementById("demo").innerHTML = txt;
    }
        xhttp.open("GET",url );
        xhttp.send();
}

function mapLoad(){
    //Define the lat lon coordinate
    let latLng = [41.789649, -87.599702];

    let mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW90ZW5jeSIsImEiOiJjbGhjZWc1MjgxMGJrM2VzMDBzaHJsZjB6In0.DPvZ0JNoi66eTtFEQzw2Ug';

    let grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});

    let map = L.map('map', {
      center: latLng,
      zoom: 16,
      layers: [streets]
    });

    let baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };

    L.control.layers(baseLayers).addTo(map);

    L.marker(latLng).addTo(map)
    .bindPopup("<b>UChicago<br>Campus</b>").openPopup();

    //Click event
    let popup = L.popup();

    function onMapClick(e) {
      popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
    }
    map.on('click', onMapClick);
}

//Ochre functions
function loadXMLDoc() {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("demo").innerHTML =this.responseText;
            console.log(this.responseXML)
            // myFunction(this.responseXML);
            myFunction2(this.responseXML);
        }
    };
    xmlhttp.open("GET", "https://ochre.lib.uchicago.edu/ochre?uuid=24fdf4f5-0426-4715-86f2-5ba7331ff093", true);
    xmlhttp.send();

}

function myFunction2(xml) {
    let txt = "";
    let i;
    let x = xml.getElementsByTagName("ochre");
    for (i = 0; i< x.length; i++) {
        txt += x[i].children[0].innerHTML + "---<br>";
    }
    document.getElementById("demo").innerHTML = txt;
}

function myFunction3(xml) {
    document.getElementById("demo").innerHTML =
    xml.getElementsByTagName("metadata")[0].children[1].innerHTML;
}

displayWord();
