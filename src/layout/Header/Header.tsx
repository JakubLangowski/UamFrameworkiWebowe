import React, {useEffect} from 'react';
import './Header.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {State} from "../../store";
import AppLogo from "../../components/AppLogo/AppLogo";
import { ReactComponent as ShoppingCartLogo } from '@assets/shopping_cart.svg';

const Header = () => {

    const cart = useSelector((state: State) => state.cart)

    useEffect(() => {

    }, [cart.pizzas])

    return (
        <header className="Header bg-white shadow-2xl">
            <nav className="grid grid-cols-12 items-center p-2">
                <Link to="/" className="col-span-6 md:col-span-3 flex justify-center items-center">
                    <AppLogo />
                </Link>
                <div className="col-span-3 md:col-span-6 flex justify-center space-x-6">
                    <div className="text-center">
                        <Link to="/pizza" className="text-lg font-semibold">Menu</Link>
                    </div>
                </div>
                <div className="col-span-3 md:col-span-3 flex justify-center space-x-6">
                    <Link to="/checkout" className="relative inline-block">
                        <ShoppingCartLogo className="w-8 h-8 text-gray-700 fill-current" />
                        <span
                            className="absolute top-0 right-0 inline-flex items-center justify-center
                            px-2 py-1 text-xs font-bold leading-none
                            text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                            { Object.keys(cart.pizzas).length }
                        </span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
