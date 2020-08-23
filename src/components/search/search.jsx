import React from 'react'
import cla from './search.module.css'

const Ser=({plahol,updater})=>{ 
   return (<input className={cla.ser} type="search" placeholder={plahol} onChange={updater}/>);
}

export default Ser