import React from 'react'

const List = () => {
   let lang=['HTML','CSS','JAVASCRIPT','REACT','WORDPRESS']
  return (
    <div className='cmp'>
        <h1>Hello World!</h1>
        <h2>List</h2>
        <div className='List'>
        {
         lang.map(
            (l) =><li>{l}</li>
         )
        }
        </div>
    </div>
  )
}

export default List