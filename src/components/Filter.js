import React, { useState } from 'react'
import "../styles/Filters.css";
import Data from "../data/heliverse_mock_data.json";

function Filter({setdata}) {
  // const [array,setarray]= useState([]);
  const genders=[{gender:"Male"},{gender:"Female"},{gender:"Agender"},{gender:"Bigender"},{gender:"Polygender"},{gender:"Genderqueer"}]
  const domains=[{domain:"Sales"},{domain:"Finance"},{domain:"Marketing"},{domain:"IT"},{domain:"UI Designing"},{domain:"Manamegent"},{domain:"Business Development"}]
  const [values,setvalues]= useState({Male:false,Female:false,Agender:false,Bigender:false,Genderqueer:false,Polygender:false,'Sales':false,'Finance':false,'Marketing':false,'IT':false,'UIDesigning':false,'Management':false,'BusinessDevelopment':false,Available:false,NotAvailable:false})
  const handleclick=(value, field)=>{
    const item=value.replace(/ +/g,'');
    values[item]= !values[item];
    const array=[]
    // if(values[item]===true){
    //   if(array.length>0){
    //     array.map((obj)=>{
    //       for(const key in obj){
    //         if(key===field && obj[key]===item){
    //           temp.push(obj);
    //         }
    //       }
    //     })
    //   }
    //   else{
    //     Data.map((obj)=>{
    //       for(const key in obj){
    //         if(key==field && obj[key]==item){
    //           temp.push(obj);
    //         }
    //       }
    //     })
    //   }
    //   setarray(temp);
    //   setdata(temp);
    // }
    for(const key in values){
      if(key==="Male" && values[key]===true){
        Data.map((obj)=>{
          if(obj.gender==='Male'){
            array.push(obj);
          }
        })
      }
      if(key==="Female" && values[key]===true){
        Data.map((obj)=>{
          if(obj.gender==='Female'){
            array.push(obj);
          }
        })
      }
      if(key==="Agender" && values[key]===true){
        Data.map((obj)=>{
          if(obj.gender==='Agender'){
            array.push(obj);
          }
        })
      }
      if(key==="Bigender" && values[key]===true){
        Data.map((obj)=>{
          if(obj.gender===key){
            array.push(obj);
          }
        })
      }
      if(key==="Polygender" && values[key]===true){
        Data.map((obj)=>{
          if(obj.gender===key){
            array.push(obj);
          }
        })
      }
      if(key==="Genderqueer" && values[key]===true){
        Data.map((obj)=>{
          if(obj.gender===key){
            array.push(obj);
          }
        })
      }
      if(key==="Sales" && values[key]===true){
        Data.map((obj)=>{
          if(obj.domain===key){
            array.push(obj);
          }
        })
      }
      if(key==="Finance" && values[key]===true){
        Data.map((obj)=>{
          if(obj.domain===key){
            array.push(obj);
          }
        })
      }
      if(key==="IT" && values[key]===true){
        Data.map((obj)=>{
          if(obj.domain===key){
            array.push(obj);
          }
        })
      }
      if(key==="Marketing" && values[key]===true){
        Data.map((obj)=>{
          if(obj.domain===key){
            array.push(obj);
          }
        })
      }
      if(key==="Management" && values[key]===true){
        Data.map((obj)=>{
          if(obj.domain===key){
            array.push(obj);
          }
        })
      }
      if(key==="UIDesigning" && values[key]===true){
        Data.map((obj)=>{
          if(obj.domain.replace(/ +/g,'')===key){
            array.push(obj);
          }
        })
      }
      if(key==="BusinessDevelopment" && values[key]===true){
        Data.map((obj)=>{
          if(obj.domain.replace(/ +/g,'')===key){
            array.push(obj);
          }
        })
      }
      if(key==="Available" && values[key]===true){
        Data.map((obj)=>{
          if(obj.available===true){
            array.push(obj);
          }
        })
      }
      if(key==="NotAvailable" && values[key]===true){
        Data.map((obj)=>{
          if(obj.available===false){
            array.push(obj);
          }
        })
      }
    }
    if(array.length>0){
      setdata(array);
    }
    else{
      setdata(Data);
    }
}
  
  return (
    <div className="filters">
      <ul>
        <div className='domain'>
          <li>
            Domain
          </li>
          <div className='domain-dropdown dropdown'>
            {domains.map((item)=>(
              <div>
                <div className='filter'>
                  <label for={`${item.domain}`}>{item.domain}</label>
                  <input type="checkbox" name={`${item.domain}`} onClick={()=>handleclick(item.domain,"domain")}/>
                </div>
                <hr/>
              </div>
            ))}
          </div>
        </div>
        <div className='gender'>
          <li>Gender</li>
          <div className='gender-dropdown dropdown'>
            {genders.map((item)=>(
              <div>
                <div className='filter'>
                  <label for={`${item.gender}`}>{item.gender}</label>
                  <input type="checkbox" name={`${item.gender}`} onClick={()=>handleclick(item.gender,"gender")}/>
                </div>
                <hr/>
              </div>
            ))}
          </div>
        </div>
        <div className='available'>
          <li>Availability</li>
          <div className='available-dropdown dropdown'>
            <div className='filter'>
            <label for="Available">Available</label>
            <input type="checkbox" name="Available" onClick={()=>handleclick("Available", "available")}></input>
            </div>
            <hr/>
            <div className='filter'>
            <label for="Not Available">Not Available</label>
            <input type="checkbox" name="Not Available" onClick={()=>{handleclick("Not Available", "available")}}></input>
            </div>
            </div>
        </div>
      </ul>
    </div>
  )
}

export default Filter