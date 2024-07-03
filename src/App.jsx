import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import AddList from './AddList.jsx';
import EditList from './EditList.jsx';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-list" element={<AddList />} />
        <Route path="/edit-list/:id" element={<EditList/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
