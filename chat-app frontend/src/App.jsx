import { useState } from 'react'
import { Routes, Route } from 'react-router-dom' 
import Home from './pages/Home'
import Chat from './pages/Chat'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/chat' element={<Chat/>}></Route>
    </Routes>
    </>
  )
}

export default App
