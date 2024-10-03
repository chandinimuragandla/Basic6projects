import React,{useState} from 'react'

const Toogle = () => {
    const[toogled,settoogled]= useState(false)
  return (
    <div className='switch'>
        <h2>Toogle button</h2>
      
      <button
      className={`toogle-btn ${toogled ? "toogled":""}`}
      onClick={()=> settoogled(!toogled)}
      >
        <div className='thumb'></div>
        </button>
    </div>
  )
}

export default Toogle