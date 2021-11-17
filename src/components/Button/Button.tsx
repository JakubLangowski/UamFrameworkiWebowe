import React from 'react';
import './Button.css';

interface Props {
    onClick: () => void;
    body?: React.ReactNode | string,
}

const Button = (props: Props) => {

    return (
        <button className="Button" onClick={props.onClick}>
            { props.body }
        </button>
    )
}
export default Button;
