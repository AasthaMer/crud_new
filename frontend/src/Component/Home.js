import React, { useContext } from 'react'
import data from '../ContextApi'
import CreateEmp from './CreateEmp'
import Emps from './Emps'

const Home = () => {
  const {userdata,setUserData} = useContext(data)
  console.log(userdata.firstName)


  const logout = ()=>{
    setUserData({})
  }
  return (
    <div className='container container-home'>
        <h1>Home page</h1>
        <h2 className="username-home">Hii 👋 {userdata.firstName} {userdata.lastName}</h2>
        <button className='btn' onClick={logout}>Logout</button>
        <Emps/>
    </div>
  )
}

export default Home