const h1T = document.querySelector('h1')
//h1.style.color = 'red'
h1T.textContent = 'Wartortle'

let params = new URLSearchParams(queryString);
let nameParam = parseInt(params.get("name")); 

window.alert(nameParam);

document.querySelector('h1').remove()
///////////////////////
/*
const h1T = document.createElement('h1')

h1T.textContent = 'Wartortle'
*/

////////////////////////////////////
let queryString = window.location.search;

if (queryString.hasOwnProperty('wartortle')) {
    replaceHeaderText(queryString['wartortle']);
}

let url = document.queryString()

fetch("https://pokeapi.co/api/v2/pokemon/wartortle");