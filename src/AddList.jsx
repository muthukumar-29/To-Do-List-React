import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddList = () => {

    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    
    const navigate = useNavigate();

    const handleData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/add', { title, content })
            .then(result => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <div className='form'>
            <h1>Add List</h1>

            <form method='post' onSubmit={handleData}>
                <input type="text" name="title" id="" placeholder='Title' onChange={(e) => setTitle(e.target.value)} /><br /><br />
                <textarea name="message" id="" rows="5" cols="25" placeholder='Content' onChange={(e) => setContent(e.target.value)}></textarea><br /><br />
                <button type='submit' name='submit'>submit</button>
            </form>
        </div>
    )
}

export default AddList
