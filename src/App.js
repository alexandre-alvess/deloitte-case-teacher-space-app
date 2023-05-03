import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Login from './pages/Login/Login';
import Main from '../src/components/Main/Main';
import NoPage from './pages/NoPage/NoPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path="/Login" element={<Login />} />
            {/* <Route path="*" element={ <NoPage />} /> */}
            <Route path="*" element={ <Main />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </>
  )
}

export default App;
