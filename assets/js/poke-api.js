
const pokeApi = {}

pokeApi.getpokemonDetalhes = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
    
}

pokeApi.getPokemons = (offset = 0, limit = 5) =>  {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)                     // Interfase de comunicação de uma promese
    .then((response) => response.json())  // Aero function // Assicrono retorno se sucesso
    .then((jsonBoby) => jsonBoby.results)
    .then((pokemons) => pokemons.map(pokeApi.getpokemonDetalhes))
    .then((requisicaoDetalhes) => Promise.all(requisicaoDetalhes))
    .then((pokemonsDetalhes) => {
    debugger
     console.log(pokemonsDetalhes)
    
    })
    //.catch((error) => console.log(error))  // Tratamento de error, mostra o erro no console
    
}


