import React, { useEffect, useState } from 'react';
import { getList } from '../services/list';

export default function ShowData() {
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
      <h1>My Comment list</h1>
      <ul>
        {list.map(item => <li key={item.id}>    {item.name} , {item.email}     </li>)}
      </ul>
    </div>
  )
}