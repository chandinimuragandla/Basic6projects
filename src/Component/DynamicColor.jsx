import React, { useState } from 'react'

const DynamicColor = () => {
    const [color ,setColor]=useState("")
  return (
    <div>
        <div className='flexw-12'>
            <input type='text' value={color}
             onChange={(e)=>setColor(e.target.value)}/>
        </div>
        <div className='color-box'
        style={{
            width:'200px',
            height:'200px',
            backgroundColor:color,
            marginTop:'20px',
            border:'1px solid #000' 
        }}> 
         <p style={{color:'#fff',textAlign:'center'}}></p>
        </div>
    </div>
  )
}

export default DynamicColor