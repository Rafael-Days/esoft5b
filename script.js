const urlParams = new URLSearchParams(window.location.search);

const evolucao= urlParams.get('name');

getChangeTitle();

function getChangeTitle(){
    const urlSearch = new URLSearchParams(location.search);
    const pokemonName = urlSearch.get('name');
    changeTitle(pokemonName);
    console.log({pokemonName})
}


function changeTitle(pokemonName){
    document.title = 'Pagina do ' + pokemonName;
}

if (evolucao) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${evolucao}`)
        .then(response => response.json())
        .then(data => {
            

            const header = document.getElementById('header');
            header.querySelector('h1').textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);

            const pokemonImage = document.getElementById('pokemonImage');
            pokemonImage.innerHTML = `<img src="${data.sprites.front_default}" alt="${evolucao}">`;

            novaImagem.src = data.sprites.front_default; 
            novaImagem.alt = evolucao; 
            document.body.appendChild(novaImagem);
        })
        .catch(error => console.error('Erro ao recuperar  dados:', error));
}