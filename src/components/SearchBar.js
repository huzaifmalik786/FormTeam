import React, { useState } from 'react'
import "../styles/SearchBar.css"
import Data from "../data/heliverse_mock_data.json"

function SearchBar({setsearchdata}) {
    const [value,setvalue]=useState('');
    const handlechange=(event)=>{
        setvalue(event.target.value);
    }
    const handlesearch=()=>{
        const truedata=[];
        for(let i=0;i<1000;i++){
            const a= value.replace(/ +/g,'');
            const b= Data[i].first_name.trim() + Data[i].last_name.trim();
            const name= b.toLowerCase();
            const v= a.toLowerCase();
            console.log(name.indexOf(v));
            if(name.indexOf(v)===0){
                truedata.push(Data[i]);
            }
            // if(Data[i].first_name.toLowerCase()===v.toLowerCase()){
            //     truedata.push(Data[i]);
            // }
            // else if(Data[i].last_name.toLowerCase()===v.toLowerCase()){
            //     truedata.push(Data[i]);
            // }
            // else if(name.toLowerCase()===v.toLowerCase()){
            //     truedata.push(Data[i]);
            // }
        }
        if(truedata.length){
            setsearchdata(truedata);
        }
        else{
            setsearchdata(Data);
            window.alert("No Results Found!")
        }
    }

  return (
    <div className='search'>
        <input className='searchbar' placeholder='Search for name here' value={value} onChange={handlechange}></input>
        <button onClick={handlesearch}>Search</button>
    </div>
  )
}

export default SearchBar