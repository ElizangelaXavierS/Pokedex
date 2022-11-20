

function convertePokemonEmLista(pokemon){
    return `
         <li class="pokemon ${pokemon.type}" >
            <span class="number">#${pokemon.number}</span>
             <span class="name">${pokemon.name}</span>

             <div class="detail">
                 <ol class="types">
                     ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                  </ol>
                  <img src="${pokemon.photo}"
                  alt="${pokemon.name}">
             </div>                        
        </li>
     `
}
 const pokemonList = document.getElementById('pokemonList')

  /*Versão passo a passo 
  pokeApi.getPokemons().then((pokemons = []) => {

   const newList = pokemons.map((pokemon) => {
        return convertePokemonEmLista(pokemon)
    })   //Função Tranformadora 
    
    const newHTML = newList.join('') //Converte os elementos da lista em uma string
    pokemonList.innerHTML += newHTML
    
    }) */

    // versão simplificada
    pokeApi.getPokemons().then((pokemons = []) => {
        pokemonList.innerHTML = pokemons.map(convertePokemonEmLista).join('')
    })
   
