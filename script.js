const urlParams = new URLSearchParams(window.location.search);

const evolucao= urlParams.get('name');

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