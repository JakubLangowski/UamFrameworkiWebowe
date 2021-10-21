import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { ReactComponent as Logo } from '@assets/logo.svg';

const Header = () => (
  <header className="Header">
      <nav className="flex items-center  justify-between flex-wrap  p-6">
          <div className="flex items-center flex-no-shrink text-white mr-6">
              <Logo />
              <span className="font-semibold text-xl tracking-tight">Uam Pizza App</span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                  <a href="#responsive-header"
                     className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                      Docs
                  </a>
                  <a href="#responsive-header"
                     className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white mr-4">
                      Examples
                  </a>
                  <a href="#responsive-header"
                     className="block mt-4 lg:inline-block lg:mt-0 text-teal-lighter hover:text-white">
                      Blog
                  </a>
              </div>
          </div>
      </nav>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
