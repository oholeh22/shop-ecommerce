// src/App.js
import React, { Component } from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул серый",
          img: "chair-grey.jpg",
          desc: "Удобный современный стул с мягкой обивкой в сером цвете.",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Журнальный столик",
          img: "table.jpg",
          desc: "Компактный журнальный столик из натурального дерева.",
          category: "table",
          price: "79.50",
        },
        {
          id: 3,
          title: "Настольная лампа",
          img: "lamp.jpg",
          desc: "Регулируемая настольная лампа в черном матовом корпусе.",
          category: "light",
          price: "29.90",
        },
        {
          id: 4,
          title: "Диван двухместный",
          img: "sofa.jpg",
          desc: "Комфортный диван на двоих с прочным каркасом и синим велюром.",
          category: "sofa",
          price: "299.00",
        },
        {
          id: 5,
          title: "Письменный стол",
          img: "office-table.jpg",
          desc: "Минималистичный белый письменный стол с ящиком для хранения.",
          category: "table",
          price: "159.99",
        },
        {
          id: 6,
          title: "Книжная полка",
          img: "book-shelf.jpg",
          desc: "Высокая открытая книжная полка из бука для вашего интерьера.",
          category: "shelves",
          price: "199.75",
        },
        {
          id: 7,
          title: "Кожаный стул",
          img: "leather-chair.jpg",
          desc: "Элегантный стул из натуральной кожи с прочным металлическим основанием.",
          category: "chairs",
          price: "89.99",
        },
        {
          id: 8,
          title: "Обеденный стол",
          img: "dining-table.jpg",
          desc: "Просторный обеденный стол из дубового массива на шестерых.",
          category: "table",
          price: "249.90",
        },
        {
          id: 9,
          title: "Напольный светильник",
          img: "floor-lamp.jpg",
          desc: "Высокий напольный светильник с мягким рассеянным светом и функцией диммера.",
          category: "light",
          price: "59.95",
        },
        {
          id: 10,
          title: "Угловой диван",
          img: "corner-sofa.jpg",
          desc: "Большой угловой диван с раскладным механизмом и встроенным ящиком для белья.",
          category: "sofa",
          price: "499.00",
        },
        {
          id: 11,
          title: "Настенная полка",
          img: "wall-shelf.jpg",
          desc: "Минималистичная настенная полка из массива ясеня для книг и декора.",
          category: "shelves",
          price: "89.50",
        },
        {
          id: 12,
          title: "Барный стул",
          img: "bar-chair.jpg",
          desc: "Современный барный стул с мягким сиденьем и удобной подножкой.",
          category: "chairs",
          price: "69.99",
        },
      ],
      ShowFullItem: false
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem />}
        <Footer />
      </div>
    );
  }

  onShowItem() {
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
      return;
    }
    this.setState({
      currentItems: this.state.items.filter((el) => el.category === category),
    });
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
