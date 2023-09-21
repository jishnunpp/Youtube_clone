import React from 'react'
import Siderbar from './Siderbar'
import Maincontainer from './Maincontainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex '>
      <Siderbar/>
      <Outlet/>
      {/* <Maincontainer/> */}
    </div>
  )
}

export default Body
