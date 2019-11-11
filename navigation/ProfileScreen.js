import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

class ProfileScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'stranger',
      message: 'Login to access your account, '
    }
  };
  //sets title on page
  static navigationOptions = {
    title: 'Profile',
  };
  //REALLY FINNICKY WHERE PASSING PARAMS BACK AND FORTH TO PUSH AND POP
  componentDidMount() {
    if (!this.props.navigation.state.params) {
      console.log(this.state.message)
    } else if (this.props.navigation.state.params.name !== undefined) {
      this.setState({
        name: this.props.navigation.state.params.name,
        message: this.props.navigation.state.params.message
      });
    }
  };
  //CONSIDER SWITCHING TO HOOKS TO AVOID INFINITE UPDATE LOOP VIA PARAMS
  componentDidUpdate() {
    if (this.state.name === 'stranger' && this.props.navigation.state.params.name) {
      this.setState({
        name: this.props.navigation.state.params.name,
        message: 'Welcome, '
      });
    }
  };

  render() {
    //navigate = goes to page or adds to top of stack if page is not in stack already
    //navigate cannot go to a page it is already on; must use push

    //push = render page and add to stack; used to update pages you are already on; can push infinitely

    //goBack = go down one in the stack

    //popToTop = go to beginning of stack (first page in stack)

    //deconstructing the navigation functions we will be using
    const {navigate, push, goBack, popToTop} = this.props.navigation;

    return (
      <View>
        <Button
          title="Go Home"
          onPress={() => navigate('Home')}
        />
        <Button
          title="Push Profile"
          onPress={() => push('Profile')}
        />
        <Button
          title="Go Back"
          onPress={() => goBack()}
        />
        <Button
          title="Go To Top Of Stack"
          onPress={() => popToTop()}
        />
        <Text>{this.state.message}{this.state.name}!</Text>
      </View>
    );
  };
};

export default ProfileScreen;
