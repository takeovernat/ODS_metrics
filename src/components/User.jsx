import React from 'react'

const User = ({message}) => {
  return (
    <div className='user'>
        <img className='userim' src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" alt="" />
        <p className='message'>{message}</p>
    </div>
  )
}

export default User