import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import env from "react-dotenv";
import Login from './LoginForm'
import Signup from "./SignupForm"
import './css/form.css';

const buttons = {
  padding: '5px', 
  borderRadius: '10px', 
  margin: '.5rem',
  borderColor: '#054a91',
  color:'#ffffff',
}

function HeaderLinks (){
  return(<div><Link style={buttons} to="/Login">Login</Link> <Link  style={buttons} to="/signup">Signup</Link></div>)
}

export default HeaderLinks
