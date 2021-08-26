import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import SoundButton from '../components/SoundButton';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <SoundButton color={this.props.navigation.getParam('color')} />

        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            width: 85,
            height: 40,
            left: 20,
            top: -280,
            padding:10,
            borderRadius:5,
          }}
          onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Century Gothic',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
