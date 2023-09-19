import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Siderbar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)

  if(!isMenuOpen)return null; 
  return (
    <div className='w-50 shadow-lg p-4'>
     
      <ul className='font-bold'>
        <li><Link to='/'>Home</Link></li>
        <li>Shorts</li>
        <li>Video</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>Gaming</li>
        <li>movies</li>
      </ul>
      <h1 className='font-bold pt-5'>watch later</h1>
      <ul>
        <li>movie</li>
        <li>movie</li>
        <li>movie</li>
      </ul>

    </div>
  )
}

export default Siderbar
