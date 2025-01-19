import { useEffect, useState } from 'react'
import MenuPage from './components/menuPage';
import Header from './components/Header';
import './App.css'
import axios from 'axios'

function App() {
  const [dishes, setDish] = useState([])

  useEffect(() => {
    axios.get('/api/dishes')
      .then((response) => {
        setDish(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
      
  })

  return (
    <>
      <div style={{ margin: 0, padding: 0 }}>
      <Header />
      <MenuPage dishes={dishes}/>
      
    </div>
      
    </>
  )
}

export default App
