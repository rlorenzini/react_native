import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

class ProfileScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'stranger'
    }
  }
  static navigationOptions = {
    title: 'Profile',
  };
  componentDidMount() {
    if (!this.props.navigation.state.params) {
      console.log("stranger")
    } else if (this.props.navigation.state.params.name) {
      this.setState({
        name: this.props.navigation.state.params.name,
      })
    }
  }

  componentDidUpdate(e) {
    if (this.state.name === 'stranger' && this.props.navigation.state.params.name) {
      this.setState({
        name: this.props.navigation.state.params.name
      })
    }
  }
  render() {
    const {navigate} = this.props.navigation;

    return (
      <View>
        <Button
          title="Go Home"
          onPress={() => navigate('Home')}
        />
        <Text>Welcome, {this.state.name}!</Text>
      </View>
    );
  }
}

export default ProfileScreen;
