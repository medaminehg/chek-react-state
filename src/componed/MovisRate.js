import React from 'react'

function MovisRate(props) {
    let stars=[]
    for (let i=0 ;i<5 ;i++){
        if (i<props.Mrate) {
            stars.push(<span className='sta'>★</span>)
            
        } else {
            stars.push(<span className='star'>★</span>)
            
        }
    }
  return (
    <div>
      <div>{stars}</div>
    </div>
  )
}

export default MovisRate


