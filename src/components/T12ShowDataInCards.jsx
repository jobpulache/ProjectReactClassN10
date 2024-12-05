import React, { useEffect, useState } from 'react';
import { getList } from '../services/characters';

export default function ShowDataCharacters() {
  const [arregloDeObjetos, setArregloDeObjetos] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setArregloDeObjetos(items)
        }
      })
    return () => mounted = false;
  }, [])

  return(
    <div>
     <h1>My List of Cards</h1>
     <ul>
        {          
          arregloDeObjetos.map(item => {
            return (
              <div key={item.id} className="card" style={{width: "18rem"}}>
                <img src={item.image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.species}</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            )
          }
          )
        }
     </ul>
   </div>
  )
}