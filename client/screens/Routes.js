import React from "react";

import Login from "../screens/Login";
import Signup from '../screens/Signup'
import Display from '../screens/Display'
import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";



const MainNavigator = createStackNavigator({
  Login: {
  screen: Login,
  navigationOptions: {
    header:null
  }
},
  Signup: {
    screen: Signup,
    navigationOptions: {
       header:null
    }
  },
  Display: {
    screen: Display,
    navigationOptions: {
        title:'Display'
    }
  },

});

const Routes = createAppContainer(MainNavigator);
export default Routes;
