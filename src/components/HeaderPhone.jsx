import React from 'react'
import { NavContent } from './Header'

const HeaderPhone = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={`navPhone ${menuOpen? "navPhoneComes": ""}`}>
        <NavContent setMenuOpen={setMenuOpen}/>
    </div>
  )
}

export default HeaderPhone