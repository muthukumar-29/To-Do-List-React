import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import './App.css';

const Home = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, [])

  const deleteItem = (id) => {
    axios.post(`http://localhost:8080/delete-item/${id}`)
      .then(response => fetchData())
      .catch(err => console.log(err))
  }

  const fetchData = () => {
    // useEffect(() => {
      axios.get('http://localhost:8080/get-items')
        .then(response => { setItems(response.data); })
        .catch(error => console.log(error))
    // }, []);
  }

  return (
    <div>
      <h1>Home</h1>
      <h2>Add Your Own Notes</h2>
      <Link className='add-list' to='/add-list'>Add List</Link><br />

      <div style={{ display: 'flex', marginTop: 60, flexWrap: 'wrap' }}>
        {items.map(item => (
          <div style={{ backgroundColor: 'grey', border: '1px solid black', marginLeft: 80, marginBottom: 50, borderRadius: 20, padding: 30, width: 300 }}>
            <h3 key={item._id}>Title :{item.title} <br />Task : {item.content}</h3>
            <Link style={{ backgroundColor: 'black', padding: 7, borderRadius: 10, color: 'white', textDecoration: 'none' }} to={`/edit-list/${item._id}`}>Edit</Link>
            {/* <Link style={{ backgroundColor: 'black', padding: 7, borderRadius: 10, color: 'white', textDecoration: 'none' }} to={`/edit-list/${item._id}`}>Delete</Link> */}
            <button className='delete' onClick={() => deleteItem(item._id)} value={item._id}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
