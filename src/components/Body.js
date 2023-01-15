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
    const [searchvalue, setsearchvalue]= useState("");
    const [filtervalues,setfiltervalues]= useState([
        {name:"Male",value:false},{name:"Female",value:false},{name:"Agender",value:false},
        {name:"Bigender",balue:false},{name:"Genderqueer",value:false},{name:"Polygender",value:false},
        {name:"Sales",value:false},{name:"Finance",value:false},{name:"Marketing",value:false},
        {name:"IT",value:false},{name:"UIDesigning",value:false},{name:"Management",value:false},
        {name:"BusinessDevelopment",value:false},{name:"Available",value:false},{name:"NotAvailable",value:false}
    ])
    
    const indexoflastcard= currentpage*cardsperpage;
    const indexoffirstcard= indexoflastcard-cardsperpage;
    const currentdata= data.slice(indexoffirstcard, indexoflastcard);

    const filterdata= ()=>{
        console.log(searchvalue);
    }

    useEffect(()=>{
        let truedata= Data;
        if(searchvalue.length>0){
            const tempdata=[];
            const a= searchvalue.replace(/ +/g,'');
            const v= a.toLowerCase();
            for(let i=0;i<Data.length;i++){
                const b= Data[i].first_name.trim() + Data[i].last_name.trim();
                const name= b.toLowerCase();
                if(name.indexOf(v)===0){
                    tempdata.push(Data[i]);
                }
            }
            truedata= tempdata;
        }
        const genderfilter= [];
        let gender=false;
        for(let i=0;i<6;i++){
            if(filtervalues[i].value===true){
                gender=true;
                truedata.map((obj)=>{
                    if(obj.gender===filtervalues[i].name){
                        genderfilter.push(obj);

                    }
                })
            }
        }
        if(gender===true){
            if(genderfilter.length>0){truedata=genderfilter;}
            else{truedata=[]}
        }
        const domainfilter= [];
        let domain=false;
        for(let i=6;i<13;i++){
            if(filtervalues[i].value===true){
                domain=true;
                truedata.map((obj)=>{
                    if(obj.domain.replace(/ +/g,'')===filtervalues[i].name){
                        domainfilter.push(obj);
                    }
                })
            }
        }
        if(domain===true){
            if(domainfilter.length>0){truedata=domainfilter;}
            else{truedata=[]}
        }
        const availablefilter= [];
        let available=false;
        for(let i=13;i<15;i++){
            if(filtervalues[i].value===true){
                available=true;
                if(filtervalues[i].name==="Available"){
                    truedata.map((obj)=>{
                        if(obj.available===true){
                            availablefilter.push(obj);
                        }
                    })
                }
                else{
                    truedata.map((obj)=>{
                        if(obj.available===false){
                            availablefilter.push(obj);
                        }
                    })
                }     
            }
        }
        if(available===true){
            if(availablefilter.length>0){truedata=availablefilter;}
            else{truedata=[]}
        }
        if(truedata.length){
            setdata(truedata);
        }
        else{
            setdata([]);
        }
    },[searchvalue,filtervalues])

    useEffect(()=>{
        setdata(Data);
    },[])
  return (
    <div className="body">
        <div className='menu'>
            <SearchBar setsearchvalue={setsearchvalue}/>
            <div style={{display:"flex",alignItems:"center", justifyContent:"flex-end",width:"50%"}}>
            {filters?(
                <Filter values={filtervalues} setvalues={setfiltervalues}/>
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