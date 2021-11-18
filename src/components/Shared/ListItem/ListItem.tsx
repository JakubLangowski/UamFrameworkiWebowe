import React, {FC} from 'react';
import './ListItem.css';
import {Link} from "react-router-dom";

interface Props {
    linkTo?: string
    onClick?: () => void
}

const ListItem:FC<Props> = (props) => {

    if (typeof props.linkTo !== "undefined"){
        return (
            <Link to={props.linkTo}>
                <li className="ListItem">
                    { props.children }
                </li>
            </Link>
        )
    }

    return (
        <li className="ListItem">
            { props.children }
        </li>
    )

};

export default ListItem;
