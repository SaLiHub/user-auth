import React from 'react';

import './App.css';

import {Navigate, Route, Routes} from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from './auth/SignUp';
import Profile from "./components/Profile";

// const SignUp = React.lazy(() => import('./auth/SignUp'));
// const SignIn = React.lazy(() => import('./auth/SignIn'));

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route
          path="/"
          element={<Navigate to="/sign-in" replace />}
          />
        </Routes>
      </div>
  );
}
export default App;