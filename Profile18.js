//Routing
//routhing is nothing but give path (link)
//We first install routing packege
//Command - npm install react-router-dom
//Then we import in our file
//Them router dib maghe file impport karayachi

import React from "react";
import About from "./About";
import Form from "./Form";
import Home1 from "./Home1";
import "./profile17.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Profile18 extends React.Component {
  render() {
    return (
      <div className=" chalase">
        <h1>We using Routting</h1>
        <Router>
          <Link to="">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/form">Form </Link>

          <Route exact path="/" component={Home1}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/form" component={Form}></Route>
          {/* <Home1 />
          <About />
          <Form /> */}
        </Router>
      </div>
    );
  }
}
export default Profile18;
