import React from 'react'
import Siderbar from './Siderbar'
import Maincontainer from './Maincontainer'

const Body = () => {
  return (
    <div className='flex'>
      <Siderbar/>
      <Maincontainer/>
    </div>
  )
}

export default Body
