import React from 'react'

function Item({ item, onShowItem, onAdd }) {
  return (
    <div className='item'>
      <img
        src={'./img/' + item.img}
        onClick={() => onShowItem(item)}
        alt={item.title}
      />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}$</b>
      <div className='add-to-cart' onClick={() => onAdd(item)}>
        +
      </div>
    </div>
  )
}

export default React.memo(Item)