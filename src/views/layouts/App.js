import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Scoket from '../../utils/Socket'
import NotFound from './../pages/errors/NotFound'
import AuthLogin from './../pages/auth/AuthLogin'
import AuthRegister from './../pages/auth/AuthRegister'
import PrivateRoute from "./../../utils/PrivateRoute"
import { veryToken } from './../../utils/VerifyUserLocalEnv'
const App = () => {

  const [socket, setSocket] = useState(Scoket)
  const [auth, setAuth] = useState(false)

  useEffect(()=>{
    setAuth(veryToken())
  }, [auth])
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`/user/login`}>Autenticarse</Link>
            </li>
            <li>
              <Link to={`/user/register`}>Registrar</Link>
            </li>
            {
              auth && <li>
                <Link to={`/user/home`}>Home</Link>
              </li>
            }
            {
              auth && <li> 
                  <a href="javascript:void" onClick={(e)=> {
                    setAuth(false)
                    localStorage.setItem("token-auth-user","")
                    localStorage.setItem("token-auth-user-verify","")}}
                  >
                    Cerrar session
                  </a>
              </li>
            }
            
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
           <AuthLogin socket={socket} setAuth={(state)=>{setAuth(state)}}/>
          </Route>
          <Route path={`/user/login`}>
            <AuthLogin socket={socket} setAuth={(state)=>{setAuth(state)}}/>
          </Route>
          <Route path={`/user/register`}>
            <AuthRegister socket={socket} setAuth={(state)=>{setAuth(state)}}/>
          </Route>
          <Route path={`/user/home`}>
            <PrivateRoute authed={auth}>
              <h1>Bienvenido al home</h1>
            </PrivateRoute>
          </Route>
          <Route path='*' component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;