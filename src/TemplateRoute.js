import React from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";



function TemplateRoute(props) {

  return (
    <React.Fragment>
    <Header/>
    <Route
    path={props.path}
    exact= {props.exact}
    component={props.component}
    />
    <Footer/>
    </React.Fragment>
      );}
  


export default TemplateRoute;
