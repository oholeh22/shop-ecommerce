// src/App.js
import React, { Component } from 'react';
import Header from './components/Header';
import Items  from './components/Items';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, title: 'Стул серый',         img: 'chair-grey.jpg',      desc: 'Удобный современный стул с мягкой обивкой в сером цвете.',         category: 'chairs',  price: '49.99' },
        { id: 2, title: 'Журнальный столик',   img: 'table.jpg',desc: 'Компактный журнальный столик из натурального дерева.',              category: 'tables',  price: '79.50' },
        { id: 3, title: 'Настольная лампа',    img: 'lamp.jpg',  desc: 'Регулируемая настольная лампа в черном матовом корпусе.',          category: 'lighting',price: '29.90' },
        { id: 4, title: 'Диван двухместный',   img: 'sofa.jpg',        desc: 'Комфортный диван на двоих с прочным каркасом и синим велюром.',      category: 'sofas',   price: '299.00' },
        { id: 5, title: 'Письменный стол',     img: 'office-table.jpg',desc: 'Минималистичный белый письменный стол с ящиком для хранения.',     category: 'desks',   price: '159.99' },
        { id: 6, title: 'Книжная полка',       img: 'book-shelf.jpg',   desc: 'Высокая открытая книжная полка из бука для вашего интерьера.',     category: 'shelves', price: '199.75' }
      ]
    };
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
