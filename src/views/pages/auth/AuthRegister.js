import React from "react";

const AuthRegister = ({socket}) => {
  const [ username, setUsername] = useState("")
  const [ password, setPassword] = useState("")
  return (
    <div>
      <h1>Formulario de registro para autenticación</h1>
      <hr></hr>
      <input type="text" value={username} onChange={(e) => {setUsername(e.target.value)}} placeholder="Ingrese el nombre del usuario"></input>
      <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="Contraseña"></input>
      <button>Enviar</button>
    </div>
  );
};

export default AuthRegister;