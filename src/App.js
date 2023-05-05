import React from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Login from './pages/Login/Login';
import Main from '../src/components/Main/Main';
import NoPage from './pages/NoPage/NoPage';

function App() {

  //toast.error('sucesso!', {toastId:'1',});

  return (
    <BrowserRouter history={history}>
      <GlobalStyles />
      <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route path="*" element={ <Main />} />
          {/* <Route path="*" element={ <NoPage />} /> */}
      </Routes>
      <ToastContainer autoClose={2000} className='toast-container'/>
    </BrowserRouter>
  )
}

export default App;
