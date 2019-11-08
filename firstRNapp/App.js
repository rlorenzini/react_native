import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Factorial from './components/Factorial';

export default class App extends Component {
  constructor(){
    super()
  }

  render() {

    return (
      <Factorial />
    );
  }
}

const styles = StyleSheet.create({

});
