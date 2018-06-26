/* @flow */

import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.headerbg}
        source={require('../img/headerbg.jpeg')}
      >
        <View style={styles.headercontainer}>
          <View style={styles.profilepiccontainer}>
            <Image
              style={styles.mypic}
              source={require('../img/profilepic.jpeg')}
            />
          </View>
          <Text style={styles.name}>Hello, name</Text>
          <Text style={styles.liner}>Hello, name</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerbg: {
    flex: 1,
    width: null,
    alignSelf: 'stretch'
  },
  headercontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  profilepiccontainer: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderWidth: 15,
    borderColor: 'rgba(0,0,0,0.4)'
  },
  mypic: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 90,
    borderWidth: 3,
    borderColor: '#fff'
  },
  name: {
    marginTop: 18,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  liner: {
    color: '#fff',
    marginTop: 5,
    fontSize: 15,
    fontStyle: 'italic'
  }
});
