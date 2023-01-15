import React from 'react'
import "../styles/Card.css";

function Card({cards,teamdata,setdata}) {

  const toggleteam= (item)=>{
    console.log(item);
    if(!item.available){
      window.alert("User is not Available!");
      return;
    }
    if(teamdata.length===0){
      setdata([...teamdata,item]);
      console.log(teamdata);
    }
    else{
      if(item.domain!==teamdata[0].domain){
        window.alert("Please select users from same domain.");
        return;
      }
      for(let i=0;i<teamdata.length;i++){
        if(item.id===teamdata[i].id){
          window.alert("User already added to team.")
          return;
        }
      }
      setdata([...teamdata,item]);
      console.log(teamdata);
    }
  }

  return (
    <div className="cards">
      {cards.length>0?(
        <div className='wrapper'>
        {cards.map(item=>(
          <div className='card'>
            <div className='image'>
              <img src={item.avatar} alt=""></img>
            </div>
            <div className='info'>
              <h3>{item.first_name} {item.last_name}</h3>
              <p><span>Email:</span> {item.email}</p>
              <p><span>Gender:</span> {item.gender}</p>
              <p><span>Domain:</span> {item.domain}</p>
              <p style={item.available? {color: '#0390fc',fontWeight:"500"}: { color: "#fc0303",fontWeight:"500"}}>{item.available? "Available": "Not Available"}</p>
              <button style={teamdata.indexOf(item)!==-1?{backgroundColor:"green"}:{}} onClick={()=>toggleteam(item)}>{teamdata.indexOf(item)!==-1?"Added":"Add to Team +"}</button>
            </div>
          </div>
        ))} 
      </div>
      ):(
        <div className='wrapper'>
          <p>No data Found!!</p>
        </div>
      )}
    </div>
  )
}

export default Card