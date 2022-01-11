const header = document.querySelector('header');
const ol = document.querySelector('ol');
const form = document.querySelector('form');
const title = document.querySelector('title');

var params = location.search.split('?')[1];
var chpnum = parseInt(params.split('=')[1]);

let requestURL = 'https://seikhchilli.github.io/indainPolitydb/';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    const chapters = request.response;
    populateHeader(chapters);
    populateOl(chapters);
    title.innerText = chapters['chapters'][chpnum]['name'];
}

function populateHeader(obj){
    const h1 = document.createElement('h1');
    h1.textContent = obj['chapters'][chpnum]['name'];

    header.appendChild(h1);
}

function populateOl(obj){
    const chp = obj['chapters'][chpnum]['questions'];
    for (let i = 0; i < chp.length; i++){
        const li = document.createElement('li');

        const p = document.createElement('p');
        p.innerHTML = chp[i]['q'].join('<br><br>');

        li.appendChild(p);
        for(let j = 0; j < 4; j++){
            var chr = String.fromCharCode(97 + j);

            const inp = document.createElement('input');
            const label = document.createElement('label');

            inp.type = 'radio';
            inp.id = chr;
            inp.value = chr;
            inp.name = i.toString();

            label.for = chr;
            label.innerHTML = chp[i][chr] + '<br>';

            li.appendChild(inp);
            li.appendChild(label);

        }

        ol.appendChild(li);
    }

}
var section = document.querySelector('section');
var btn1 = document.querySelector('button');

form.addEventListener("submit", function(event) {
    const db = request.response;
    var ques = db['chapters'][chpnum]['questions'];
    var data = new FormData(form);
    var result = 0;
    for (const entry of data) {
        if(entry[1] == ques[entry[0]]['ra']){
            result += 1;
        }
    };
    btn1.remove();
    var div2 = document.createElement('div');
    div2.innerText = "Result: " + result.toString();
    div2.className = "res";

    section.appendChild(div2);
    
    event.preventDefault();
}, false);

  


