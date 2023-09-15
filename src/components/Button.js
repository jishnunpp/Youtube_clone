import React from 'react'
import PropTypes from 'prop-types'

const Button = ( {name} ) => {
  return (
    <div>
        <button className='bg-gray-200 rounded-lg px-5 m-2'>{name} </button>
      
    </div>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired
}

export default Button
