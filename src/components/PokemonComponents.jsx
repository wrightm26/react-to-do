import React from 'react';

export default function PokemonComponents({names}) {

    return (
        <div className="card" style="width: 18rem;">
            {names.map( name => (
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> {name}</li>
                    <li className="list-group-item">{height}</li>
                    <li className="list-group-item">{weight} </li>
                </ul>
            ))}
        </div>
    )
}
