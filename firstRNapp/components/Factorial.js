import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import FactorialExplain from './FactorialExplain';

// function factorialize(num) {
//   if (num < 0)
//         return -1;
//   else if (num == 0)
//       return 1;
//   else {
//       return (num * factorialize(num - 1));
//   }
// }
// factorialize(5);

// function factorialize(num) {
//   if (num === 0 || num === 1)
//     return 1;
//   for (var i = num - 1; i >= 1; i--) {
//     num *= i;
//   }
//   return num;
// }
// factorialize(5);


export default class Factorial extends Component {
  constructor(){
    super()
    this.state = {num: '',}
  }

  render() {

    factorial = (num) => {
      let result = num
      if (num === 0 || num === 1) {
        return 1
      };
      while (num > 1) {
        num--;
        result = num * result;
      }
      return result
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Find the Factorial!</Text>
        <TextInput style={styles.input}
        placeholder="Enter Integer"
        onChangeText={(num) => this.setState({num})}
        value={this.state.num}
        ></TextInput>
        <Text style={styles.answer}>{factorial(this.state.num)}</Text>
        <FactorialExplain />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 250,
  },
  title: {
    fontSize: 42,
  },
  input: {
    height: 40,
    width: 200,
    textAlign: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'blue',
    fontSize: 30,
  },
  answer: {
    fontSize: 30,
    height: 35,
    marginTop: 10,
  }
});
