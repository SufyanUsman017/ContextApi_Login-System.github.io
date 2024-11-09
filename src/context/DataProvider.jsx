import React, { useState } from 'react'
import { createContext } from 'react'

const mainContext =  createContext();


 
export default function DataProvider({children}) {

    const [ users ,setUsers ] = useState([{
      name:'Sufyan',
      userName:'Sufyan1',
      password:'11111',
      profileURL :'https://images.pexels.com/photos/28918121/pexels-photo-28918121/free-photo-of-hiker-admiring-the-dolomites-in-cortina-d-ampezzo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

  }]);
  const [loginUser, setLoginUser] = useState('');
  const [login, setLogin] = useState(false);


  return (

    <mainContext.Provider  value={{users,setUsers,loginUser, setLoginUser,login, setLogin}}  >

        {children}

    </mainContext.Provider>
  

  )
}
export {mainContext}
