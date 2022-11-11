import React from 'react'

export default function Explore({url,title}) {
  return (
    <div style={{ display:'flex', flexDirection:'column', justifyContent:'center' ,alignItems:'center'}}>
        <img style={{borderRadius:'50px'}} width='200px' height='250px' src={`https://www.reliancedigital.in${url}`} alt="" />
        <br />
        <br />
        <br />
        <p>{title.substr(0, 20)}</p>
    </div>
  )
}
