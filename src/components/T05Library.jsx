import React from 'react'

export default function Library(props) {

  return (
    <>
      <h3>What genres have I got in my library?</h3>
      <ul>
        {props.genres.map((genre) => <Genre key={genre.id} description={genre.description} />)}
      </ul>
    </>
  )
}

function Genre(props) {
  return <li>I have {props.description} books.</li>
}
