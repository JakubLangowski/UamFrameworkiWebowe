import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { ReactComponent as Logo } from '@assets/logo.svg';
import {Link} from "react-router-dom";

const Header = () => (
  <header className="Header bg-white shadow-2xl">
      <nav className="grid grid-cols-12 items-center p-2">
          <Link to="/" className="col-span-6 md:col-span-3 flex justify-center items-center">
              <Logo className="w-16"/>
              <span className="font-semibold text-xl font-semibold pl-3 text-red-600 tracking-tight">Uam Pizza App</span>
          </Link>
          <div className="col-span-6 md:col-span-9 flex justify-center space-x-6">
              <div className="text-center">
                  <Link to="/pizza" className="text-lg font-semibold">Menu</Link>
              </div>
              <div className="text-center">
                  <Link to="/about-us" className="text-lg font-semibold">AboutUs</Link>
              </div>
          </div>
      </nav>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
