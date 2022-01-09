const btncontainer = document.getElementsByClassName("btncontainer");

let requestURL = 'https://github.com/seikhchilli/IndianPolity/blob/master/data.json';

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
            location.href = 'chapter1.html';
        };
        btn.textContent = chps[i]['name'];
    
        btncontainer.appendChild(btn);
    }

}
  


