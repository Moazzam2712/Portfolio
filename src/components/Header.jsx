import React, { useState } from 'react'
import {AiOutlineMenu} from "react-icons/ai"

const Header = ({menuOpen,setMenuOpen}) => {
  return <>
  <nav>
    <NavContent />
  </nav>

    <button className='navBtn' onClick={()=>setMenuOpen(!menuOpen)}>
      <AiOutlineMenu/>
    </button>
  </>
} 

export const NavContent=({setMenuOpen})=>(
  <>
  <h2>Moazzam</h2>
  <div>
    <a href="#home" onClick={()=>setMenuOpen(false)}>Home</a>
    <a href="#work" onClick={()=>setMenuOpen(false)}>Work</a>
    <a href="#timeline" onClick={()=>setMenuOpen(false)}>Experience</a>
    <a href="#testimonial" onClick={()=>setMenuOpen(false)}>Testimonial</a>
    <a href="#services" onClick={()=>setMenuOpen(false)}>Services</a>
    <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
  </div>

  <a href="mailto:moazzamkazi1227@gmail.com">
    <button>Email</button>
  </a>
  </>
)

export default Header