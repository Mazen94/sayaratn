import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, useHistory } from "react-router-dom"
// import Footer from './Footer/Footer';
import Navbar from './components/Navbar';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import OurCars from './pages/OurCars';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import { Redirect, Switch } from 'react-router';
import axios from "axios";
import Dashboard from './pages/Dashboard';
// import SlideTop from './components/SlideTop'
// import CardCar from './components/CardCar'

function App() {
  const [isConnected, setIsConnected] = useState(false);
  let history = useHistory()

  const toggleIsConnected = (value) => {
    setIsConnected(value)
    history.push('/home')
  }

  const logout = async () => {
    await axios.post("http://localhost:5000/user/logout", { email: 'zfv@dd.dcom' });
    history.push('/home')
  }

  return (
    
    <BrowserRouter>
    <Navbar/>
      {/* <Navbar isConnected={isConnected} logout={logout} /> */}
      <Route exact path="/home" component={Home} />
      <Route exact path="/contactUs" component={ContactUs} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/aboutus" component={AboutUs} />
      <Route exact path="/ourcars" component={OurCars} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/dashboard" component={Dashboard} />

    </BrowserRouter>
  );
}
export default App;
