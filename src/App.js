import React from 'react';
import Navbar from './components/Navbar';
import ToDo from './views/ToDo';
import Pokemon from './views/Pokemon';
import { Routes, Route } from 'react-router-dom';



export default function App() {
    return (
        <div className="App">
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='/todo' element={<ToDo />} />
                    <Route path='/pokemon' element={<Pokemon />} />
                </Routes>
            </div>
        </div>
    )
}
