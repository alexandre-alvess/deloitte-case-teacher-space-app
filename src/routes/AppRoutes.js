import React from "react";
import { Routes, Route } from 'react-router-dom';

import PageBoletimForm from "../pages/Form/BoletimForm";
import Home from "../pages/Home/Home";
import AlunoPage from "../pages/Aluno/AlunoPage";
import BoletimPage from "../pages/Boletim/BoletimPage";
import DisciplinaPage from "../pages/Disciplina/DisciplinaPage";
import ProfessorPage from "../pages/Professor/ProfessorPage";
import TurmaPage from "../pages/Turma/TurmaPage";

import { PrivateRoute } from "./PrivateRoute";

export default function AppRoutes({ navVisible, classChildren }) {
    return (
        <Routes>
            <Route exact path="/" element={ 
                <PrivateRoute>
                    <div className={classChildren}> 
                        <Home/>
                    </div>
                </PrivateRoute>
            } />
            <Route path="/boletim/cadastro" element={ 
                <PrivateRoute>
                    <PageBoletimForm />
                </PrivateRoute>
            } />
            <Route path="/alunos" element={
                <PrivateRoute>
                    <div className={classChildren}> 
                        <AlunoPage/>
                    </div>
                </PrivateRoute>
            }/>
            <Route path="/boletins" element={
                <PrivateRoute>
                    <div className={classChildren}> 
                        <BoletimPage/>
                    </div>
                </PrivateRoute>
            }/>
            <Route path="/disciplinas" element={
                <PrivateRoute>
                    <div className={classChildren}> 
                        <DisciplinaPage/>
                    </div>
                </PrivateRoute>
            }/>
            <Route path="/professores" element={
                <PrivateRoute>
                    <div className={classChildren}> 
                        <ProfessorPage/>
                    </div>
                </PrivateRoute>
            }/>
            <Route path="/turmas" element={
                <PrivateRoute>
                    <div className={classChildren}> 
                        <TurmaPage/>
                    </div>
                </PrivateRoute>
            }/>
        </Routes>
    )
}