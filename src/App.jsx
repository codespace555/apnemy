import { useState } from 'react'
import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="text-3xl h-screen  text-slate-800 font-bold bg-white dark:text-white dark:bg-black">
        <Navbar/>
      </div>
    </>
  )
}

export default App
