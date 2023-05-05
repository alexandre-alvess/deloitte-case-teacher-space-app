import React from "react";
import { useState } from "react";

import AppRoutes from "../../routes/AppRoutes";
import Header from "../Header/Header";
import Navbar from "../Navbar.js/Navbar";

export default function Main() {

    const [navVisible, showNavbar] = useState(true);

    return (
        <div className="main">
            {/* <Header /> */}
            <Navbar visible={ navVisible } show={ showNavbar }/>
            <AppRoutes visible={ navVisible } classChildren={!navVisible ? "page" : "page page-with-navbar"} />
        </div>
    )
}
