import React, { useEffect, useState } from 'react';
import PokemonComponents from '../components/PokemonComponents';
import PokemonForm from '../components/PokemonForm';

export default function PokemonDisplay() {
    const [names, setNames] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${names}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNames((lastPokemon) => {
                    const nextPokemon = [...lastPokemon];
                    const index = nextPokemon.findIndex((p) => p.name === data.name);
                    nextPokemon.push({
                        names: data.names,
                        height: data.height,
                        weight: data.weight,
                    })
                    return nextPokemon;
                });
            })
    })

    const updatePokemon = (nextPokemon) => {
        setNames((lastPokemon) => [...lastPokemon, { name: nextPokemon }]);


    return (
        <div>
            <h1 className="text-center">Information on {names}</h1>
            <PokemonForm updatePokemon={updatePokemon}/>
            <PokemonComponents names={names}/>
        </div>
    )};
};
