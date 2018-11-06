'use strict';

import React, {Component} from 'react';
import {Dimensions, View, Text, StyleSheet, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Rating} from 'react-native-ratings';

export default class Example extends Component {
  render () {
    return (
        <View style={{postion: 'absolute', alignItems: 'center',marginTop:48}}>
        {this.renderData ()}
      </View>
    );
  }
}
