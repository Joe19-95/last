import React from 'react'
import cs from './cardlis.module.css'
import Card from '../card/card'

const cardlis=(props)=>{
return(
    <div className={cs.car}>
    {props.mons.map( item => (
        <Card key={item.id} car={item}/>
      )
      )}
    </div>
    )
};
export default cardlis