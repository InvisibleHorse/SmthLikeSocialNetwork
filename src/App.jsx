import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/partials/Header';
import Nav from './components/Nav';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/ProfileContainer';
import Footer from './components/partials/Footer';
import Messages from './components/Messages/Messages';
import AuthContainer from './components/Authorisation/Authorisation-container';
import Register from './components/Authorisation/Register';

function App() {
  return (
    <div className="App">
      <div className="grid">
        <Header />
        <Nav />
        <Routes>
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/messages" element={<Messages />}>
            <Route path="/messages/:id" element={<Messages />} />
          </Route>
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/auth" element={<AuthContainer />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users/profile/:id" element={<ProfileContainer />} />
          <Route path="/settings" element={<Messages />} />
          <Route path="/governmentsecrets" element={<Messages />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
