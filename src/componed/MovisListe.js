import React from 'react'
import MovisCard from './MovisCard'

function MovisListe(props) {
  return (
    <div className='grid-container'>
        {props.movis.map((el, i) => <MovisCard film={el} key={i} />)}

    </div>
  )
}

export default MovisListe
