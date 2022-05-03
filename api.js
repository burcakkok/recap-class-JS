// function getPoke() {
//   return fetch("https://pokeapi.co/api/v2/pokemon");
// }

// getPoke()
//   .then((data) => data.json())
//   .then((data) => console.log(data))
//   .catch(err 0> console.log(err));

// // fetch is undefined because its a browser api


async function getPokemon() {
  return fetch("https://pokeapi.co/api/v2/pokemon");
}

getPokemon()
  .then((response) => {
    return response.json();
  })
  .then((pokemons) => {
    // here you do something with the pokemons
    console.log(pokemons);
  })
  .catch((error) => console.log(error));
  

