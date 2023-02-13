import React from 'react'
import './navbarInshorts.css'
import HamburgerDrawer from './hamburgerDrawer';

const navbarInshorts = ({setCategory}) => {
  return (
    <div className='nav'>
        <div className='icon'>
            <HamburgerDrawer setCategory={setCategory}/>
        </div>
        <img 
            className='image'
            src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' 
            height='80%'
            alt='Inshorts Logo'/>
    </div>
  )
}

export default navbarInshorts