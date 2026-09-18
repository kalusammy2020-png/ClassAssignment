import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <section className='flex justify-between items-center bg-white'>
      <div>
        <img src="public/Logo Oath Removedbg.png" alt="Otha logo" />
        <h1>OTHA</h1>
      </div>
      <div>
        <nav className='flex justify-center items-center gap-4'>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
        </nav>
      </div>
      <div>
        <nav className='flex justify-center items-center gap-3'>
          <button className='border p-2 border-amber-600 text-amber-600 rounded-lg'><a href="">Login</a></button>
          <button className='bg-amber-600 text-white rounded-lg'><a href="">Create Account</a></button>
        </nav>
      </div>
        
    </section>
  )
}

export default Header