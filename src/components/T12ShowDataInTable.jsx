import React, { useEffect, useState } from 'react';
import { getList } from '../services/list';

export default function ShowDataInTable() {
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
    <div className="wrapper">
     <h1>My Comment Table</h1>
     <table className='table'>
        {
          list.map(item => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.body}</td>
              </tr>
            )
          }
          )
        }
     </table>
   </div>
  )
}