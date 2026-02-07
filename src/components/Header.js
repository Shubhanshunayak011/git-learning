import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className='main_Header_div'>
        IT'S ME
        <div className='Header_flex'>
          <Link to='/'>Home</Link>
          <Link to='/service'>Services</Link>
          <Link to='/contact'>Contact</Link>
        </div>

      </div>


    </div>
  )
}

export default Header