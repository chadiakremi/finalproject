import * as React from "react";
import "./HomeScreen.css";

import { BrowserRouter, Switch } from "react-router-dom/cjs/react-router-dom.min";

import Button from '@mui/material/Button';

import { Link } from "react-router-dom";



// <Button variant="text">Text</Button>
// <Button variant="contained">Contained</Button>
// <Button variant="outlined">Outlined</Button>



function HomeScreen(props) {
  return (
    <React.Fragment>

          <div className="banner">
            <div className="overlay"></div>
            <div className="banner-content">
              <h1>Assignment Project done by the Elites!</h1>
              <div><p>4 Elite FULL Stack Developers got together to create the best technology that currently exists. <br />Payal, Chadi, Soheil and ChatGPT advanced technology to new heights </p></div>
              <div className="button-container">
                <Link to= '/directory'>
                <Button variant="contained">Access Employee Directory</Button>
                </Link>
                <div className="login-signup" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Link to="/login">
                    <Button variant="outlined" style={{ color: "white", borderColor: "white", margin: "20px", marginRight: "20px" }}>Login</Button>
                  </Link>
                  <Link to="/signup">
                    <Button variant="text" style={{ color: "white", margin: "20px", marginLeft: "20px" }}>Sign up</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <main> {props.children} </main>
    </React.Fragment>
  );
}

export default HomeScreen;
