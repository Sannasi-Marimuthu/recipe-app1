import React, { useState } from 'react'
import './search.scss'

const Search = () => {
    const [searchBar, setSearchBar] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(searchBar)
        setSearchBar(" ")
    }

  return (
    <div className='searchBar' >
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Search Recipes' value={searchBar} onChange={e=>setSearchBar(e.target.value)} />
            <button type='submit' >Search</button>
        </form>
    </div>
  )
}

export default Search