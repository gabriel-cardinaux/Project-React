import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemlistContainer from './Components/ItemListContainer/ItemListContainer'
import NavBar from './Components/NavBar/NavBar'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/'element={<ItemlistContainer greeting="Welcome to the Store!!" />}/>
      <Route path='/category/:categoryId' element={<ItemlistContainer/>}/>
      <Route path='/item/:itemId' element={ <ItemlistContainer/>}/>
      <Route path='*' element={<h1>Error 404 Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
