/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Green extends Component {
  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'green'
  }
});
