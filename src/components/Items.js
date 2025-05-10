import React from 'react'
import Item from './Item'

function Items({ items, onShowItem, onAdd }) {
  return (
    <main>
      {items.map(el => (
        <Item
          key={el.id}
          item={el}
          onShowItem={onShowItem}
          onAdd={onAdd}
        />
      ))}
    </main>
  )
}

export default React.memo(Items)