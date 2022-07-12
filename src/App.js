import './App.css';
import { useState } from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import NoteState from './context/notes/NoteState';
import  Alert  from './components/Alert';
import Login from './components/Login';
import Sinup from './components/Sinup';
import Footer from './components/Footer';
import Fetch from './components/Fetch';
function App() {
  const[alert,setAlert] = useState(null);
  const ShowAlert =(message,type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000);
  }
  return (
    <>
    <NoteState>
      <BrowserRouter>
        <Navbar/>
        <Alert alert={alert}/>
                <Routes>
                  <Route exact path='/' element={<Home ShowAlert={ShowAlert}/>}></Route>
                  <Route exact path='/about' element={<About/>}></Route>
                  <Route exact path='/login' element={<Login ShowAlert={ShowAlert}/>}></Route>
                  <Route exact path='/sinup' element={<Sinup ShowAlert={ShowAlert}/>}></Route>
                  <Route exact path='/fetch' element={<Fetch ShowAlert={ShowAlert}/>}></Route>
                </Routes>
                <Footer/>
      </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
