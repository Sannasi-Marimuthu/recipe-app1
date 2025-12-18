import React from 'react'
import './style.scss'

const Loader = ({name = "Loading"}) => {
  return (
    <div className='loader'>
        <div className='animation'>
            <div className='title'> {name} </div>
        </div>
        
    </div>
  )
}

export default Loader