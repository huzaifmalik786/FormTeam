import React from 'react'
import "../styles/Pagination.css";

function Pagination({currentpage, setpage, data}) {
    const page= Math.floor(data.length/20);
    
    const decrease= ()=>{
        if(currentpage>1){
            setpage(currentpage-1);
        }
    }
    const increase=()=>{
        if(currentpage<page){
            setpage(currentpage+1)
        }
    }
  return (
    <div className='pagination'>
        <div className='togglepage'>
            <button onClick={decrease}>Prev</button>
            <p>{currentpage} of {data.length<20? "1": `${page}`}</p>
            <button onClick={increase}>Next</button>
        </div>

    </div>
  )
}

export default Pagination