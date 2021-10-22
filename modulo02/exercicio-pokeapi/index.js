// Exercício

// Pegue as informações dos seguintes pokemons e agrupe-os por seus tipos:
// ['Charmander', 'Charizard', 'Pikachu', 'Raichu', 'Squirtle', 'Blastoise', 'Bulbasaur', 'Venusaur']

// {
//   fire: ['Charmander'],
//   electric: ['Pikachu', 'Zapdos'],
//   water: ['Squirtle', 'Blastoise'],
//   poison: ['Bulbasaur']
// }

const pokemons = ['Charmander', 'Charizard', 'Pikachu', 'Raichu', 'Squirtle', 'Blastoise', 'Bulbasaur', 'Venusaur']

const getPokemonsInformations = (pokemons) => {
    const pokemonsInformations = []

    pokemons.map((pokemon) => {
        const response = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        response
            .then((pokemonData) => pokemonData.json())
            .then((result) => pokemonsInformations.push({name: result.name, type: result.types[0].type.name}))
            .catch((error) => console.log(error))
    })

    return pokemonsInformations
}

const getUniquePokemonTypes = (pokemonsInformations) => {
    const uniqueTypes = new Set()
    pokemonsInformations.map(({type}) => uniqueTypes.add(type))
    return [...uniqueTypes]
}

const getPokemonsPerType = (uniqueType, pokemonsInformations) => {
    const pokemonsPerType = pokemonsInformations.filter(({type}) => type === uniqueType)
    return pokemonsPerType.map(({name}) => name)
}

const buildPerTypeObject = (uniqueType, pokemonsInformations) => {
    return Object({
        [`${uniqueType}`]: getPokemonsPerType(uniqueType, pokemonsInformations)
    })
}

const buildResultObject = (pokemonsInformations) => {
    const uniqueTypes = getUniquePokemonTypes(pokemonsInformations)
    const resultArray = []

    for (let uniqueType of uniqueTypes) {
        resultArray.push(buildPerTypeObject(uniqueType, pokemonsInformations))
    }

    const resultObject = resultArray.reduce((resultObject, value) => {
        return {...resultObject, ...value}
    }, {})

    console.log(resultObject)
}

const lowerCasePokemons = pokemons.map((pokemon) => pokemon.toLowerCase())
const pokemonsInformations = getPokemonsInformations(lowerCasePokemons)
setTimeout(() => buildResultObject(pokemonsInformations), 1000)