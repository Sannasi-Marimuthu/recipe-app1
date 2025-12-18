import React from 'react'
import './header.scss'
import Search from '../search/Search'
const Header = ({title = "My App"}) => {
  return (
    <div className='header'>
        
        <div className='title' > {title}</div>
        <Search />
         </div>
  )
}

export default Header