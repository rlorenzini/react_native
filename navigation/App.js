import React, { Component } from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
  },{
    initialRouteName: 'Profile'
  }
);

const AppNavigator = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  };
};
