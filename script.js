function fetchData() {
    const pokemonName = document.getElementById("pokemonNameInput").value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Couldn't find the Pokémon you looked for.");
            }
            return response.json();
        })
        .then(data => {
            displayPokemonInfo(data);
        })
        .catch(error => {
            console.error(error);
        });
}

function displayPokemonInfo(pokemonData) {
    const pokemonNameElement = document.getElementById("pokemonName");
    const pokemonIDElement = document.getElementById("pokemonID");
    const pokemonSpriteElement1 = document.getElementById("pokemonSprite1");
    // const pokemonSpriteElement2 = document.getElementById("pokemonSprite2");

    pokemonNameElement.textContent = pokemonData.name;
    pokemonIDElement.textContent = pokemonData.id;
    pokemonSpriteElement1.src = pokemonData.sprites.front_default;
    // pokemonSpriteElement2.src = pokemonData.sprites.front_shiny;
}
