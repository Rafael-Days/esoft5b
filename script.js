const h1 = document.querySelector('h1')
h1.style.color = 'red'

let queryString = window.location.search;

if (queryString.hasOwnProperty('wartortle')) {
    replaceHeaderText(queryString['wartortle']);
}

let url = document.queryString()

fetch("https://pokeapi.co/api/v2/pokemon/wartortle");