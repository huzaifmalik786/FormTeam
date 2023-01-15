import React from 'react'
import "../styles/Filters.css";

function Filter({values,setvalues}) {
  const genders=[{gender:"Male"},{gender:"Female"},{gender:"Agender"},{gender:"Bigender"},{gender:"Polygender"},{gender:"Genderqueer"}]
  const domains=[{domain:"Sales"},{domain:"Finance"},{domain:"Marketing"},{domain:"IT"},{domain:"UI Designing"},{domain:"Management"},{domain:"Business Development"}]
  const handleclick=(value)=>{
    const item=value.replace(/ +/g,'');
    const index= values.findIndex((obj=>obj.name===item));
    let temp= values.slice();
    temp[index].value= !temp[index].value;
    setvalues(temp);
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