import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function EditList() {

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { id } = useParams();

    // const [editTitle, setEditTitle] = useState('');
    // const [editContent,setEditContent] = useState('');

    const handleEditData = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8080/update-item/${id}`,{title,content})
            .then(response => navigate('/'))
            .catch(error => console.log(error))
    }


    useEffect(() => {
        axios.get(`http://localhost:8080/get-item/${id}`)
            .then(result => {
                setTitle(result.data.title)
                setContent(result.data.content)
            })
            .catch(error => console.log(error))
    }, [id])

    return (
        <div className='form'>
            <h1>Edit Interface</h1>
            <form method='post' onSubmit={handleEditData}>
                <input type="text" id="" value={title} onChange={(e) => setTitle(e.target.value)} /><br /><br />
                <textarea type="text" id="" rows='5' cols='25' onChange={(e) => setContent(e.target.value)} value={content}></textarea><br /><br />
                <button type='submit' name='submit'>Update</button>
            </form>
        </div>
    )
}

export default EditList