import React, { Component } from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

//create navigation stack; ({Variable: Component,})
//screen is used to specify displaying the component; not required if component is only for display

//initialRouteName sets first screen on load

const MainNavigator = createStackNavigator({
    Home: {screen: HomeScreen},
    Profile: {screen: ProfileScreen},
  },{
    initialRouteName: 'Profile'
  }
);

//navigation must be contained inside a const and can be passed as a component

const AppNavigator = createAppContainer(MainNavigator);

//App renders with our navigator loading the initial page, 'Profile'

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  };
};
