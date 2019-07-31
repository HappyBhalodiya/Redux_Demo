import React, { Component } from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

class Display extends React.Component {
  componentDidMount() {
    console.log("hiii Display component", this.props.email);
  }

  render() {
    return (
      <View>
        <Text> id : {this.props._id}</Text>
        <Text> Email : {this.props.email}</Text>
        <Text> password : {this.props.password}</Text>
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

export default connect(
  mapStateToProps
)(Display)

