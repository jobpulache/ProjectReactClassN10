import { useState } from 'react'
import React from 'react'

function MyFormTextArea() {
  const [textarea, setTextarea] = useState(
    'The context of a textarea goes in the value attribute'
  );

  const handleChange = (event) => {
    setTextarea(event.target.value);
    console.log(textarea);
  }
  
  return (
    <form>
      <textarea value={textarea} onChange={handleChange}></textarea>
    </form>
  )
}

export default MyFormTextArea