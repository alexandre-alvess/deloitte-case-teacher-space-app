import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

import PageBoletimForm from "./Form/BoletimForm";
import Login from './Login/Login';
import Home from './Home/Home';
import NoPage from "./NoPage/NoPage";
import Auth from "../components/Auth/Auth";

export default function Root() {
    return (
        <main role="main" >
            <Route path="/boletim/cadastro" element={<PageBoletimForm />} />
        </main>
    );
  };
