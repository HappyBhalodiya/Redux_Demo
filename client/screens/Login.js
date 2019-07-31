import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ImageBackground
} from "react-native";
import Config from "../config";
import axios from "axios";
import { connect } from "react-redux";
import Toast from "react-native-simple-toast";
import Api from "../service"

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
     
    };

  }
  componentDidMount(){
    console.log("in componentDidMount====", this.props.email)
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <ImageBackground
        source={require("../assets/wallpaper.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "column",
              flex: 4
            }}
          />
          <View
            style={{
              flexDirection: "column",
              flex: 7,
              justifyContent:'center',
              alignItems:'center'
            }}
          >
           <Text style={{fontSize:20, fontWeight:'bold', marginBottom:20}}>Log in </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid="transparent"
                onChangeText={text => this.setState({ email: text })}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputs}
                ref={input => {
                  this.password = input;
                }}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid="transparent"
                onChangeText={text => this.setState({ password: text })}
              />
            </View>

            <View style={styles.inputContainer1}>
              <TouchableHighlight
                style={[styles.buttonContainer, styles.loginButton]}
                onPress={() => this.props.login(this.state)}
              >
                <Text style={styles.signUpText}>Log in</Text>
              </TouchableHighlight>

             
            </View>
            <View style={styles.inputContainer1}>
            <Text style={{fontWeight:'bold',fontSize:15, color:'silver'}}>New hear ?   </Text>
            <TouchableHighlight
                onPress={() => navigate("Signup")}
              >
                <Text style={{ fontSize:15, fontWeight:'bold'}}>Create an Account </Text>
              </TouchableHighlight>
              </View>
          </View>
          <View
            style={{
              flexDirection: "column",
              flex: 4
            }}
          />
        </View>
      </ImageBackground>
    </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.email,
    password: state.password,
    _id:state._id
  };
}
function mapDispatchToProps(dispatch, onProps) {
    return {
        login: text => {
        var body = {
          email: text.email,
          password: text.password
        };
        Api.login(body)
       .then(
          res => {
            dispatch({ type: "LOGIN", payload: [body,res.data._id] });
            onProps.navigation.navigate("Display");
            Toast.show("successfully Login.");
          },
         
        ).catch((err) => {
            console.log("Error========", err)
        })
      }
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login)



const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000"
  },

  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#e7e7e7",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 280,
    height: 45,
    marginBottom: 20,
   
  },
  inputContainer1: {
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'center'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 150,
    borderRadius: 30
  },
  loginButton: {
    backgroundColor: "#372e5f",
   
  },
  signupButton: {
    backgroundColor: "#372e5f",
    marginLeft: 10
  },
  signUpText: {
    color: "white"
  },
  text: {
    fontSize: 20,
    color: "white",
    justifyContent: "center",
    marginTop: 40
  },
  
});
