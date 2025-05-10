import React, { useState, useMemo } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Order from "./Order";

export default React.memo(function Header({ orders, onDelete }) {
  const [cartOpen, setCartOpen] = useState(false);
  const summa = useMemo(
    () => orders.reduce((sum, { price }) => sum + parseFloat(price), 0),
    [orders]
  );

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaCartShopping
          onClick={() => setCartOpen(!cartOpen)}
          className={`shop-cart-button${cartOpen ? " active" : ""}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? (
              <>
                {orders.map(item => (
                  <Order onDelete={onDelete} key={item.id} item={item} />
                ))}
                <p className="summa">
                  Сумма: {new Intl.NumberFormat().format(summa)}$
                </p>
              </>
            ) : (
              <div className="empty">
                <h2>Товаров нет</h2>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="presentation" />
    </header>
  );
});
