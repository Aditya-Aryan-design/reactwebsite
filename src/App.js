//import { Router } from 'express';
import React, { useState } from 'react'
// import {BrowserRouter as Router,
  // Route,Routes} from "react-router-dom"
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
document.body.style.backgroundColor = "#ced7ff";
function App() {
  const [Myalert,setAlert] = useState(null)
  const alertFun = (message,type) => {
      setAlert({
        msg: message,
        tp: type
      })
     const myInterval = setInterval(() => {
        setAlert(null);
        clearInterval(myInterval)
      }, 2000);
    }
  const [mode,setMode] = useState("light")
   const darkfun=()=>{
      if(mode === "dark"){
        setMode("light")
        document.body.style.backgroundColor = "#ced7ff";
        alertFun("Light Mode","success")
        document.title="Light"
      }
      else{
        setMode("dark")
        document.body.style.backgroundColor = "#031733"
        alertFun("Dark Mode","success")
        document.title="Dark"
       }
 }
      return (
    <>
    {/* <Router> */}
    <Navbar home= "My-Home" title="My-Site" about="My-About" contact="My-Contact" textarea="Enter anything" mode={mode} darkfun={darkfun}/>
    {/* <Navbar/> */}
    <Alert alert={Myalert}/>
    <TextForm title="Aditya" rows="10" mode={mode} alertFun={alertFun}/>
    {/* <Routes> */}
      {/* use exact for exact maching */}
      {/* <Route exact path="/about" element={<About />}> */}
    {/* </Route> */}
    {/* <Route exact path="/" element={<TextForm title="Aditya" rows="10" mode={mode} alertFun={alertFun}/>}> */}
    {/* </Route> */}
    {/* </Routes> */}

    {/* </Router> */}
    </>
  );
}

export default App;
