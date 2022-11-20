
const pokeApi = {}

function convertPokeApiDetalhesEmPokemnon(pokeDetalhes){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetalhes.order
    pokemon.name = pokeDetalhes.name

    const types = pokeDetalhes.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetalhes.sprites.other.dream_world.front_default
    
    return pokemon
}

pokeApi.getpokemonDetalhes = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetalhesEmPokemnon) 

}
    

pokeApi.getPokemons = (offset = 0, limit = 5) =>  {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)                     // Interfase de comunicação de uma promese
    .then((response) => response.json())  // Aero function // Assicrono retorno se sucesso
    .then((jsonBoby) => jsonBoby.results)
    .then((pokemons) => pokemons.map(pokeApi.getpokemonDetalhes))
    .then((requisicaoDetalhes) => Promise.all(requisicaoDetalhes))
    .then((pokemonsDetalhes) => pokemonsDetalhes)
    
    
    //.catch((error) => console.log(error))  // Tratamento de error, mostra o erro no console
    
}


