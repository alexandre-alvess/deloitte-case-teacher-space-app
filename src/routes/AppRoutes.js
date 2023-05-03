import React from "react";
import { Routes, Route } from 'react-router-dom';

import PageBoletimForm from "../pages/Form/BoletimForm";
import Home from "../pages/Home/Home";

export default function AppRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={ <Home />} />
            <Route exact path="/boletim/cadastro" element={ < PageBoletimForm />} />
        </Routes>
    )
}