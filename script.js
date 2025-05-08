
import fetch from 'node-fetch';


const API_URL = 'https://pokeapi.co/api/v2';


async function buscarPokemon(nomePokemon) {
  try {
    const response = await fetch(`${API_URL}/pokemon/${nomePokemon.toLowerCase()}`);

   
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
    }

    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ocorreu um erro ao buscar os dados do Pokémon:', error.message);
    return null;
  }
}


function exibirInformacoesPokemon(pokemon) {
  if (pokemon) {
    console.log(`\n--- Informações do Pokémon: ${pokemon.name.toUpperCase()} ---`);
    console.log(`ID: ${pokemon.id}`);
    console.log(`Altura: ${pokemon.height / 10} m`); 
    console.log(`Peso: ${pokemon.weight / 10} kg`);   
    console.log('Tipos:');
    pokemon.types.forEach(typeInfo => {
      console.log(`- ${typeInfo.type.name}`);
    });
    console.log('\nHabilidades:');
    pokemon.abilities.forEach(abilityInfo => {
      console.log(`- ${abilityInfo.ability.name}`);
    });
    console.log('-------------------------------------------\n');
  } else {
    console.log('Pokémon não encontrado.');
  }
}


const nomeDoPokemon = 'pikachu';

async function main() {
  console.log(`Buscando informações do Pokémon: ${nomeDoPokemon}...`);
  const pokemonData = await buscarPokemon(nomeDoPokemon);
  exibirInformacoesPokemon(pokemonData);

  
}


main();