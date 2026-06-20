import React from 'react'
import "../css/Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>


      <div className="navbar-brand">

        <Link to="/"><h1>FindMovie</h1></Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className='nav-link'>Home</Link>
        <Link to="/favorites" className='nav-link'>Favorites</Link>
      </div>


    </>
  )
}

export default Navbar