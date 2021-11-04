import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children } : any) => (
    <div>
        <Header/>
        <main className="m-5">
            { children }
        </main>
        <Footer/>
    </div>
)

export default Layout;