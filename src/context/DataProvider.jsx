import React, { useState } from 'react'
import { createContext } from 'react'

const mainContext =  createContext();


 
export default function DataProvider({children}) {

    const [ name ,setName ] = useState("Sufyan");


  return (

    <mainContext.Provider  value={{name,setName}}  >

        {children}

    </mainContext.Provider>
  

  )
}
export {mainContext}
