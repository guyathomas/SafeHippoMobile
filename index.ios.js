/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import RouteFinder from './App/Components/RouteFinder';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'black',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
});

class SafeHippoMobile extends React.Component {

  render() {
    return (<RouteFinder />);
  }
}

AppRegistry.registerComponent('SafeHippoMobile', () => SafeHippoMobile);
