import React, { useState } from 'react'
import "../styles/SearchBar.css"


function SearchBar({setsearchvalue}) {
    const [value,setvalue]=useState('');
    const handlesearch=(event)=>{
        setvalue(event.target.value);
        setsearchvalue(event.target.value);
    }
    const handlesearchbutton=()=>{
        setsearchvalue(value);
    }
  return (
    <div className='search'>
        <input className='searchbar' placeholder='Search for name here' value={value} onChange={handlesearch}></input>
        <button onClick={handlesearchbutton}>Search</button>
    </div>
  )
}

export default SearchBar