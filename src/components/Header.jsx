import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import AppContext from './../context/AppContext';
import '../styles/components/Header.css';
const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  const quantityCartProducts = useMemo(() => {
    return cart.length;
  }, [cart]);

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket" />
        </Link>
        {quantityCartProducts > 0 && (
          <div className="Header-alert"> {quantityCartProducts} </div>
        )}
      </div>
    </div>
  );
};

export default Header;
