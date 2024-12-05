import React from 'react'
import Car from './T01Car'

export default function Garage(props) {
  const v_marcaCarro2 = "Mercedes";
  const v_colorCarro2 = "Violet"

  return (
    <div>
      <h3>Who lives in my {props.tamanioGarage} garage?</h3>
      <Car marcaCarro={ v_marcaCarro2 } colorCarro={v_colorCarro2}>::Car One::</Car>            
    </div>
  )
}
