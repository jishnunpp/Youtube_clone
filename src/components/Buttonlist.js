import React from 'react'
import Button from './Button'

const Buttonlist = () => {

  const List=['all','game','cricket','cooking']
  return (
    <div className='flex  sticky  top-16  bg-white mt-0  z-0'>
      <Button name="All" />
      <Button name="Game"/>
      <Button name="Cricket" />
      <Button name="Cooking"/>
      <Button name="Music" />
      <Button name="Live"/>
      <Button name="Cricket" />
      <Button name="Cooking"/>
      <Button name="Music" />
      <Button name="Live"/>
    </div>
  )
}

export default Buttonlist
