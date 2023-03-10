import React from 'react';

// import './App.scss';

import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import { Home } from './Pages/home/home';
import { Login } from './Pages/login/login';
import { List } from './Pages/list/list';
import { Single } from './Pages/single/single';
import { New } from './Pages/new/new';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='user'>    //user data
              <Route index element={<List />} />
              <Route path=':userId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>
            <Route path='product'>  //product data
              <Route index element={<List />} />
              <Route path=':productId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
