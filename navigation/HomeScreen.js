import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button
          title="Go to Dick's profile"
          onPress={() => navigate('Profile', {name: 'Dick'})}
        />
        <Text>Tons of stuff going on here! Yeehaw!</Text>
      </View>
    );
  }
}

export default HomeScreen;
