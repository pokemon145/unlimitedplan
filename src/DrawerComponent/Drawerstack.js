import React, { Component } from 'react';
import { createAppContainer,DrawerNavigator} from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";


import Login from './src/Pages/Login';
import Register from './src/Pages/Register';
import Dashbaord from './src/Pages/Dashboard';


//Navigation_All_Screens
const DrawerStack = createStackNavigator({
  Home: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  Profile: {
    screen: Register,
    navigationOptions :{
      header :null,
    }
 },
 MainHome :{
   screen :Dashbaord,
   navigationOptions :{
    header :null,
  }
  },
});

const App = createAppContainer(DrawerStack);

export default App;