import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import MyView from '../CustomElements/MyView';

export default class FactorialExplain extends Component {
  constructor(){
    super()
    this.state = { isHidden: true, }
  }

  render() {
    handleOnPress = () => {
      if (this.state.isHidden === true) {
        this.setState({ isHidden: false })
      }
      else if (this.state.isHidden === false) {
        this.setState({ isHidden: true })
      }
    }
    return (
      <MyView>
        <Button onPress={() => handleOnPress()}
        value = {this.state.isHidden} title="Example"></Button>
        <MyView hide={this.state.isHidden}>
        <Text style={styles.text}>
        5! = 5*4*3*2*1 = 120
        </Text>
        </MyView>
      </MyView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginLeft: 55,
    marginRight: 55,
    alignSelf: 'center',
    alignContent: 'flex-start',
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
