import React from 'react'

const categories = [
  { key: 'all',     name: 'Всё'      },
  { key: 'chairs',  name: 'Стулья'   },
  { key: 'table',   name: 'Столы'    },
  { key: 'sofa',    name: 'Диваны'   },
  { key: 'light',   name: 'Свет'     },
  { key: 'shelves', name: 'Полки'    }
]

const Categories = React.memo(({ chooseCategory }) => (
  <div className='categories'>
    {categories.map(el => (
      <div key={el.key} onClick={() => chooseCategory(el.key)}>
        {el.name}
      </div>
    ))}
  </div>
))

export default Categories
