import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

 import LoginPage from "../Pages/LoginPage";
 import LandingPage from "../Pages/LandingPage";
 import RegisterPage from "../Pages/RegisterPage";
 import ProfilePage from "../Pages/ProfilePage"



const Route = createStackNavigator(
  {
     LoginPage:LoginPage,
     LandingPage:LandingPage,
     RegisterPage:RegisterPage,
     ProfilePage:ProfilePage,
        
  },
  {
    initialRouteName: "LandingPage"
  }
  
);
const RouterConfig = createAppContainer(Route);

export default RouterConfig;
