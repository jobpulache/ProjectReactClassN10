import React from 'react'
import Car from './T01Car';

export default function Baseball() {
  const shoot = (a, b) => {
    alert(a.type + b.type);
  }
  return (
    <>
      <button onClick={(event) => shoot("Home run!", event)}>Baseball button!</button>
    </>
  )
}
