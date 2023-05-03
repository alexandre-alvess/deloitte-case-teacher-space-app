import React from "react";

import AppRoutes from "../../routes/AppRoutes";
import Header from "../Header/Header";

export default function Main({children}) {
    return (
        <div className="main">
            <Header />
            <AppRoutes />
        </div>
    )
}
