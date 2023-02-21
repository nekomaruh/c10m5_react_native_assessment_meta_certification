import * as React from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';

const SubscribeScreen = () => {

  // Add subscribe screen code here
  return <View style={styles.body}>
    <Image
      source={require("../assets/little-lemon-logo-grey.png")}
      resizeMode="contain"
      style={styles.image}
    />

    <Text style={styles.text}>Subscribe to our Newsletter for our{"\n"}latest delicious recipes!</Text>

    <TextInput style={styles.input}>hello@example.com</TextInput>

    <TouchableOpacity
      style={styles.button}>
      <Text style={styles.buttonText}>Subscribe</Text>
    </TouchableOpacity>
  </View>;
};


const styles = StyleSheet.create({
  body: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  image: {
    height: 100,
    margin: 20
  },
  text: {
    fontSize: 18,
    textAlign: 'center'
  },
  input: {
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: "#fff"
  },
  button: {
    backgroundColor: '#1E6738',
    color: 'white',
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
    alignSelf: 'stretch',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});

export default SubscribeScreen;
