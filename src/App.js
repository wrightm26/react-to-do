import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

export default function App() {

    const [toDos, setToDos] = useState([]);

    function addToList(task){
        console.log(task);
        setToDos([...toDos, task]);
    };


    return (
        <>
            <Navbar />
            <div className='container'>
                <ToDoForm addToList={addToList} />
                <ToDoList taskList={toDos} />
            </div>
        </>
    )
}
