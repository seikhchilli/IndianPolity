const btncontainer = document.querySelector('div');

let requestURL = 'https://seikhchilli.github.io/indainPolitydb/';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    const chapters = request.response;
    populateButtons(chapters);
}

function populateButtons(obj){
    const chps = obj['chapters'];
    for (let i = 0; i < chps.length; i++){
        const btn = document.createElement('button');
        btn.className = "chapter";
        btn.onclick = function(){
            location.href = 'chapter.html?id=' + i.toString();
        };
        btn.textContent = chps[i]['name'];
    
        btncontainer.appendChild(btn);
    }

}
  


