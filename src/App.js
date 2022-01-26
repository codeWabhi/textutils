import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  
  Route,
  Link,
  Switch
} from "react-router-dom";


function App() {
  const [mode, setMode]=useState('light');
  const[alert, setAlert] = useState(null);
  
  const showAlert=(msg,type)=>{
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='White'
      showAlert("Light mode activated","success")
      document.title="TextUtils-Light"
      
       
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode activated","success")
      document.title="TextUtils-Dark"
    }
  }
  return (
    
    <>
     <Router>
      <Navbar title='New title' mode={mode} toggle={toggleMode}/>
      <Alert alert={alert}/>
      <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
          <div className='container'><TextForm heading='Text Area' mode={mode}/></div>
          </Route>
      </Switch>

      
      {/* <About/>; */}
      </Router>
    </>
    
  );
}

export default App;
