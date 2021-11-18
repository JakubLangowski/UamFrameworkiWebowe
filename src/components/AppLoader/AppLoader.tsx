import React, {FC} from 'react';
import './AppLoader.css';
import AppLogo from "../AppLogo/AppLogo";

const AppLoader:FC = () => {

    return (
        <div className="AppLoader flex flex-col">
            <div className="pulse-wrapper">
                <div className="flex items-center pulse">
                    <AppLogo />
                </div>
            </div>
        </div>
    )

};

export default AppLoader;
