'use strict'

import React ,{Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ProfileTab extends Component {
    static navigationOptions = {
       
        tabBarIcon: ({tintColor}) => (
            <Icon name="ios-person" size={25} style={{color: tintColor}} />
          ),
    };
    render () {
      return (
          <Text> Profile Tab</Text>
      );
    };
  }
  
  const styles = StyleSheet.create ({
    container: {},
  });