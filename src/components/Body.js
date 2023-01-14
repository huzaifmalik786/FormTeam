import React,{useState,useEffect} from 'react'
import "../styles/Body.css";
import Card from './Card'
import Pagination from './Pagination';
import SearchBar from './SearchBar';
import Filter from "./Filter";
import Data from "../data/heliverse_mock_data.json"
import {Link} from "react-router-dom";
function Body() {

    const [currentpage, setcurrentpage]= useState(1);
    const [cardsperpage, setcardsperpage]= useState(20);
    const [data,setdata]= useState(Data);
    const [filters,setfilters]= useState(false);
    const [teamdata, setteamdata]= useState([]);


    const indexoflastcard= currentpage*cardsperpage;
    const indexoffirstcard= indexoflastcard-cardsperpage;
    const currentdata= data.slice(indexoffirstcard, indexoflastcard);
    useEffect(()=>{
        setdata(Data);
    },[])
  return (
    <div className="body">
        <div className='menu'>
            <SearchBar setsearchdata={setdata}/>
            <div style={{display:"flex",alignItems:"center", justifyContent:"flex-end",width:"50%"}}>
            {filters?(
                <Filter setdata={setdata} data={data}/>
            ):(
                <div></div>
            )}
            <button onClick={()=>setfilters(!filters)}>Filters</button>
            <Link  className="button" to="/team" state={{data:`${JSON.stringify(teamdata)}`}}>Show Team</Link>
            </div>
        </div>
        <Card cards={currentdata} setdata={setteamdata} teamdata={teamdata}/>
        <Pagination currentpage={currentpage} setpage={setcurrentpage} data={data}/>
    </div>
  )
}

export default Body