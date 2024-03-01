import React from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";

function Layout() {
    return (
        <>
            <Navbar />
            <h1>Hii I am layout</h1>
                <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
