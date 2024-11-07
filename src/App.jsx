import React from 'react'
import useData from './hooks/useData'
import user from './components/user'





function App() {

const {name , setName} = useData();

function chng(){
  setName("Danish")
}



  return (
    
      <div className="App">
        <h1>This is my App</h1>
        <h1>{name}</h1>
        <button onClick={chng}>Click Me</button>
      

         <user />
      
    </div>
  )
}

export default App
