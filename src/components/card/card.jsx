import React from 'react'
import car from'./card.module.css'

const Card=(props)=>{
return(
    <>
    <div className={car.car} >
    <h1>{props.car.name}</h1>
    <img alt="robo" src={`https://robohash.org/${props.car.id}?set=set2&size=180x180`} ></img>
    <h2>{props.car.email}</h2>
    </div>

    </>
)
}

export default Card