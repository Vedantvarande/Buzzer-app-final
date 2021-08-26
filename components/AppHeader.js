import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Quiz Buzzer App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'lightgreen',
  },
  text:{
    color: 'black',
    padding: 20,
    fontSize: 22,
    fontFamily:'Century Gothic',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;