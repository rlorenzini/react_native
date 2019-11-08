import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

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
    this.state = {num: ''}
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
      </View>
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
  }
});
