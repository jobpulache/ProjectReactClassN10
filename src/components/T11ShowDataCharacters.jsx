import React, { useEffect, useState } from 'react';
import { getList } from '../services/characters';

export default function ShowDataCharacters() {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
    return () => mounted = false;
  }, [])

  return(
    <div>
      <h1>My Comment Table</h1>
      <table className="table">
      <thead>
        <tr>
          <td>Name</td>
          <td>Species</td>
          <td>Gender</td>
          <td>Origin</td>
          <td>Location</td>
        </tr>
      </thead>
      <tbody>
        {          
          list.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.species}</td>
                <td>{item.gender}</td>
                <td>{item.origin.name}</td>
                <td>{item.location.name}</td>
              </tr>
            )
          }
          )
        }
      </tbody>
      </table>
   </div>
  )
}