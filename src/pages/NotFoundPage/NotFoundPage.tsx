import React from 'react';
import './NotFoundPage.css';
import { ReactComponent as Logo } from '@assets/logo.svg';

const NotFoundPage = () => {

    return (
        <div className="NotFoundPage">
            <div className="flex flex-col justify-center items-center">
                <Logo className="w-16"/>
                <br/>
                <h1 className="text-center text-red-500 font-semibold text-3xl">404 Not Found</h1>
            </div>
        </div>
    )
};

NotFoundPage.propTypes = {};

NotFoundPage.defaultProps = {};

export default NotFoundPage;
