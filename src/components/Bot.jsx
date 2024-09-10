import React from 'react'

const Bot = ({message}) => {
  return (
    <div className='bot'>
        <img className='im' src="https://cdn-icons-png.flaticon.com/512/4711/4711987.png" alt="" />
        <p className='message'>{message}</p>
    </div>
  )
}

export default Bot