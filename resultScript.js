const main = document.querySelector('main');

var params = location.search.split('?')[1];
var result = params.split('=')[1];

main.textContent = "Correct: " + result.split('/')[0] + " out of " + result.split('/')[1];


