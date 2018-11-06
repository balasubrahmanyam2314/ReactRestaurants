/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React ,{ Component } from 'react';
import {View, Text,StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';
import DashBoardScreen from './App/DashBoardScreen'

export default class App extends Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator= StackNavigator({
  Main:{
    screen: DashBoardScreen
  }
})

const styles=StyleSheet.create({
  container:{

  }
})
