/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

export default class Myform extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput
          secureTextEntry
          placeholder="Password"
          style={styles.input}
        />
        <TouchableOpacity style={styles.buttoncontainer}>
          <Text style={styles.buttontext}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.8)',
    paddingLeft: 12,
    marginBottom: 15
  },
  buttoncontainer: {
    backgroundColor: '#27ae60',
    paddingVertical: 15,
    paddingBottom: 10
  },
  buttontext: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  }
});
