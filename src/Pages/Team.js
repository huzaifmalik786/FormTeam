import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import "../styles/Team.css";

function Team() {
    const location= useLocation();
    const data= JSON.parse(location.state.data)
    const [teamdata,setteamdata]= useState(data);
    const toggleteamdata= (item)=>{
        const array= [...teamdata];
        const index= array.indexOf(item);
        array.splice(index,1);
        setteamdata(array);
    }
  return (
    <div className='team' style={data.length>0? {width: "fit-content"}: {}}>
        <div style={{display: "flex", alignItems: "center",justifyContent:"center" ,marginTop:"1rem",width:"100%"}}><h1>Team Details</h1></div>
        {data.length>0?(
            <div className='teamdetails'>
                <h3><span>Domain: </span>{data[0].domain} </h3>
                <div className="teamuser">
                    <h2>User Details</h2>
                    <div className='wrapper'>
                        {teamdata.map(item=>(
                            <div className='card' style={{height: "12rem" }}>
                                <div className='image'>
                                    <img src={item.avatar} alt=""></img>
                                </div>
                                <div className='info'>
                                    <h3>{item.first_name} {item.last_name}</h3>
                                    <p><span>Email:</span> {item.email}</p>
                                    <p><span>Gender:</span> {item.gender}</p>
                                    <button onClick={()=>toggleteamdata(item)}>Remove </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ):(
            <div className='message'>
                <h3>Oops!</h3>
                <p>Looks like you have not selected any users yet. Please Select from the available Users.</p>
            </div>
        )}
    </div>
  )
}

export default Team