const main = document.querySelector('main');

var params = location.search.split('?')[1];
var result = params.split('=')[1];

main.textContent = "Result: " + result;


