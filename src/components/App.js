import React, {useEffect, useState } from "react";
import Scoket from './../utils/Socket'
import Modal from "./utils/Modal";

let socket;

const App = () => {
  
  const [username, setUsername ] = useState("");
  const [closeModal, setCloseModal ] = useState(false);

  useEffect(()=>{
    socket = Scoket

    socket.on("disconnect-client-reception", (data)=> {
      console.log(data)
      setUsername(data.io)
    })

  },[])

  const handlerSendData = (event) =>{
    socket.emit("join-client", username)
    console.log(socket.connected)
  }
  const handlerDesconnectionSocket = (event) => {
    console.log(socket.connected)
    socket.emit("force-disconnect")
    console.log("desconectado")
    console.log(socket.connected)
  }

  const handlerInputUsername = (event) => {
    setUsername(event.target.value)
  }

  return (
    <div>
      <label> Username: {username} </label>
      <br></br>
      <hr></hr>
      <input type="text" value={username} onChange={(e)=>{handlerInputUsername(e)} }></input>
      <button onClick={(e)=>{handlerSendData(e)}}>Enviar username</button>
      <button onClick={(e)=>{handlerDesconnectionSocket(e)}}>Desconectar</button>
      <button onClick={(e)=> {setCloseModal(true)}}>Abir modal</button>
      <Modal 
        isVisible={closeModal}
        title={"Title: "+username}
        body={ (<div>Body:</div> )}
        footer={"Footer: "+username}
        close={(e)=> {setCloseModal(!closeModal)}}/>
    </div>
  );
};

export default App;