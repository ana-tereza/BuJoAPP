import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>BuJo</Text>
        <TextInput style={styles.textinput}>User</TextInput>
        <TextInput style={styles.textinput}>Password</TextInput>
        <TouchableOpacity
         style={styles.login}
         onPress={this.onPress}
       >
         <Text style={styles.log}> Log in </Text>
       </TouchableOpacity>
        <Text style={styles.obs}>Hello, this is us, Nadia and Ana Tereza, creators of this BuJo.
        We're very sorry to say it, but it's impossible to actually end this on time, we tried. Please, have mercy on our poor souls.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5F9EA0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color: 'white',
    fontSize:'48px',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  textinput:{
    height: 40,
    width: 300, 
    borderColor: 'white', 
    borderWidth: 1,
    color: 'white',
    paddingLeft: 10,
    marginBottom: 10,
  },
  login:{
    backgroundColor: '#0B3B17',
    width: 300, 
    height: 40,
    paddingTop: 10,
    alignItems: 'center',
  },
  log:{
    color: 'white',
  },
  obs:{
    color:'white',
    margin: 50,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
  }
});
