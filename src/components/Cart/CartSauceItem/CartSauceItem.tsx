import React from 'react';
import './CartSauceItem.css';
import {Sauce} from "../../../api/services/SauceService";
import { MdAdd, MdRemove } from "react-icons/md";
import Button from "../../Shared/Button/Button";
import {bindActionCreators} from "redux";
import {actionCreators} from "../../../store";
import {useDispatch} from "react-redux";

const CartSauceItem = ({sauce, count} : {sauce: Sauce, count: number}) => {

    const { addSauceToCart } = bindActionCreators(actionCreators.cartActions, useDispatch())
    const { removeSauceFromCart } = bindActionCreators(actionCreators.cartActions, useDispatch())

    return (
        <li className="bg-white shadow-2xl rounded-xl p-3 my-2 flex justify-between items-center">
            <div className="flex flex-col">
                <span className="text-lg font-semibold">{ sauce.name }</span>
                <span>Cena: { sauce.price }</span>
            </div>
            <div className="flex-col flex-col items-center">
                <span>Ilość: { count }</span>
                <div className="flex justify-around gap-x-1">
                    <Button onClick={() => addSauceToCart(sauce)}>
                        <MdAdd />
                    </Button>
                    <Button onClick={() => removeSauceFromCart(sauce)}>
                        <MdRemove />
                    </Button>
                </div>
            </div>
        </li>
    )
};

CartSauceItem.propTypes = {};

CartSauceItem.defaultProps = {};

export default CartSauceItem;
