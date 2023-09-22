
import { useState } from 'react'
import './App.css'

function App() {
  const [increment, setIncrement] = useState(0)
 
  return(
   
    <div className='container'>
      <h1>{increment}</h1>
      <button onClick={()=>setIncrement(increment+1)}>Increment</button>
      
      <button onClick={()=>setIncrement(increment-1)}>Decrement</button>

    </div>
   
  )
 

 
}

export default App
