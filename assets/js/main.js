
const offset = 0;
const limit =10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertePokemonEmLista(pokemon){
    return `
         <li class="pokemon">
            <span class="number">#001</span>
             <span class="name">${pokemon.name}</span>

             <div class="detail">
                 <ol class="types">
                     <li class="type">grass</li>
                     <li class="type">poison</li>
                  </ol>
                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
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
        pokemonList.innerHTML += pokemons.map(convertePokemonEmLista).join('')
    })
   
