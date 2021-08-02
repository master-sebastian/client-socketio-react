import React , {useState}from "react";
import VerifyUserLocalEnv from './../../../utils/VerifyUserLocalEnv'
import { cipherText }  from './../../../utils/Crypto'

const AuthLogin = ({socket, setAuth}) => {

  const [ username, setUsername] = useState("")
  const [ password, setPassword] = useState("")
  
  const login = (event) => {
    if(VerifyUserLocalEnv(username, password) === true){
      setAuth(true)
      localStorage.setItem("token-auth-user", cipherText(JSON.stringify({
        "username": username
      })))
      localStorage.setItem("token-auth-user-verify", cipherText(JSON.stringify({
        "verify": username
      })))
      console.log("Autenticacion exitosa")
    }else{
      setAuth(false)
      localStorage.setItem("token-auth-user","")
      localStorage.setItem("token-auth-user-verify","")
      console.log("Autenticacion incorrecta")
    }
  }

  return (
    <div>
      <h1>Panel de autenticación</h1>
      <hr></hr>
      <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}} placeholder="Ingrese el nombre del usuario"></input>
      <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Contraseña"></input>
      <button onClick={(e)=>{login(e)}}>Enviar</button>
    </div>
  );
  
};

export default AuthLogin;