import React from 'react';
import './AppLogo.css';
import { ReactComponent as Logo } from '@assets/logo.svg';

const AppLogo = () => (
    <div className="flex items-center">
        <Logo className="w-16"/>
        <h1 className="font-semibold text-2xl font-semibold pl-2 text-red-600 tracking-tight">Uam Pizza App</h1>
    </div>
);

export default AppLogo;
