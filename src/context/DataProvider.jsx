import React, { useState } from 'react'
import { createContext } from 'react'

const mainContext =  createContext();


 
export default function DataProvider({children}) {

    const [ users ,setUsers ] = useState([{
      name:'Sufyan',
      userName:'Sufyan1',
      password:'11111'
  }]);


  return (

    <mainContext.Provider  value={{users,setUsers}}  >

        {children}

    </mainContext.Provider>
  

  )
}
export {mainContext}
