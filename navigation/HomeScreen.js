import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

class HomeScreen extends React.Component {
  //sets title on page
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    //deconstructing navigate function from navigation 
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Button
          title="Go to Dick's profile"
          onPress={() => navigate('Profile', {name: 'Dick', message: 'Welcome, '})}
        />
        <Text>Tons of stuff going on here! Yeehaw!</Text>
      </View>
    );
  };
};

//title = button text
//navigate to 'Profile', pass params as 'name' and 'message'

export default HomeScreen;
