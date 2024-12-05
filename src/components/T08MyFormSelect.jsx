import { useState } from 'react'
import React from 'react'

function MyFormSelect() {
  const [ music, setMusic] = useState("Folk");

  const handleChange = (event) => {
    setMusic(event.target.value);
    console.log(music)
  }

  return (
    <form>
      <select value={music} onChange={handleChange}>
        <option value="Folk">Folk</option>
        <option value="Pop">Pop</option>
        <option value="Rock">Rock</option>
      </select>
    </form>
  )
}

export default MyFormSelect