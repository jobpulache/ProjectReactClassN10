import React from 'react'

export default function Football() {
  const shoot = (a) => {
    alert(a)
  }

  return (
    <button onClick={()=>shoot("Se ha marcado un gol!")}>Football button!</button>
  )
}

