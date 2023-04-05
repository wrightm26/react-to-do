import React from 'react';

export default function PokemonForm({ updatePokemon }) {
    const handleFormSubmit = event => {
        event.preventDefault();
        let names = event.target.names.value;
        updatePokemon(names);
        event.target.names.value = "";
    };

    return (
        <form action="" className='row my-3' onSubmit={handleFormSubmit}>
            <div className="col-12 col-md-5">
                <input type="text" name="names"
                className="form-control" placeholder="Enter name of Pokemon"/>
            </div>
            <div className="col">
                <input type="submit" value="Search" className="btn btn-success w-100"/>
            </div>
        </form>
    )

}
