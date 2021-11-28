import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import logo from './brooke-cagle-g1Kr4Ozfoac-unsplash.jpg'

import { Link } from "react-router-dom";
const divStyle = {
  width: '100%',
  height: '800px',
  backgroundImage: `url(${logo})`,
  backgroundSize: 'cover' ,
  
};
const hStyle = {
  color: 'white'
};
const pStyle = {
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: 18
};

class Landing extends Component {
  
  render() {
    return (
      <div className="cComponent" style={divStyle} >
        <h1 align="center" style={hStyle}>The Best Study Notes</h1>
        <p style={pStyle}>The best study notes shared by your fellow students, organized in one place</p>
      </div>
    );
  }
}
export default Landing;