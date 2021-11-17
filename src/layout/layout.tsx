import React from "react";
import Header from "./Header/Header";

const Layout = ({ children } : any) => (
    <div>
        <Header/>
        <main className="m-5">
            { children }
        </main>
    </div>
)

export default Layout;