import React from 'react'
import Body from '../components/Body';


function Home() {
  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "column", width:"fit-content"}}>
        <h1>User Details</h1>
        <Body/>
    </div>
  )
}

export default Home