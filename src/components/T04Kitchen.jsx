import React from 'react'

export default function Kitchen(props) {
  const v_utensilios = props.utensilios;
  return (
      <div>
          <h3>Kitchen</h3>
          {
              v_utensilios.length > 0 &&
              <h4>
                  You Have { v_utensilios.length } utensils in your kitchen.
              </h4>
          }
      </div>
  )
}

// Ojo con esta forma de IF en JSX.