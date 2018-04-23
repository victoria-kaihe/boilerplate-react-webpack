import React from 'react'
import {Link} from 'react-router-dom'

const BottomNav = () => {
  return (
    <div className='bottomnav'>
      <a className="button" href="#">Why?</a>
      <Link to={`/usersignup`}>
      <a className="button" href="#">Sign me up!</a>
      </ Link>
      <a className="button" href="#">Share</a>
    </div>
  )
}

export default BottomNav
