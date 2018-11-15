'use strict';

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

var deviceWidth = Dimensions.get ('window').width;

import Icon from 'react-native-vector-icons/Ionicons';

export default class ExploreTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-compass" size={25} style={{color: tintColor}} />
    ),
  };
  render () {
    console.log (deviceWidth);
    return (
      <SafeAreaView style={styles.container}>

        <View
          style={{
            height: 250,
            width: 250,
            borderRadius: 250 / 2,
            backgroundColor: '#6B7FF8',
            justifyContent: 'center',
            top: '-10%',
            left: '-5%',
          }}
        >
          <Text style={{fontSize: 28, color: '#fff', textAlign: 'center'}}>
            {'Discover Restaurants'}
          </Text>
        </View>

        <View style={{position: 'absolute',alignSelf:'flex-end',marginTop:32}}>
          <Icon
            name="ios-search"
            size={29}
            style={{padding: 12, color: '#8C899A'}}
          />
        </View>

      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    position: 'relative',
  },
});
