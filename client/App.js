import React, { Fragment } from "react";
import { StyleSheet, View, Text } from "react-native";
import Routes from "./screens/Routes";
import Login from './screens/Login'
import Signup from './screens/Signup'
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const initialState = {
  email: '',
  password:'',
  _id:''
}
const reducer = (state=initialState,action) => {
  switch (action.type) {
    
    case 'LOGIN' :
    
      return { email:state.email=action.payload[0].email,
        password:state.password= action.payload[0].password,
      _id:state._id = action.payload[1] }             
  
    case 'SIGNUP':
     
      return { email:action.payload[0].email,
        password: action.payload[0].password ,
        _id:state._id = action.payload[1]}             
    }
   
    

    return state
  }
  const store = createStore(reducer)

export default class App extends React.Component {

  render() {
  
    return(
      <>
      <Provider store={store}>
      <Routes />
      </Provider>
      </>
    )
     
    
  }
}


