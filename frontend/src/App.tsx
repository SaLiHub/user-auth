import React from 'react';

import './App.css';

import {Route, Routes} from "react-router-dom";
import SignIn from "./auth/SignIn";
import SignUp from './auth/SignUp';

// const SignUp = React.lazy(() => import('./auth/SignUp'));
// const SignIn = React.lazy(() => import('./auth/SignIn'));

console.log('lukisadfasd')
function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </div>
  );
}
export default App;