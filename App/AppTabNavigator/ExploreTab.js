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

import Icon from 'react-native-vector-icons/Ionicons';

export default class ExploreTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-compass" size={25} style={{color: tintColor}} />
    ),
  };
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center',
            alignSelf:'auto',
            top: '-10%',
            left: '-5%',
          }}
        >

          <View
            style={{
              height: 240,
              width: 240,
              borderRadius: 120,
              backgroundColor: '#6B7FF8',
              justifyContent: 'center',
            }}
          >
            <Text style={{fontSize: 28, color: '#fff', textAlign: 'center'}}>
              {'Discover Restaurants'}
            </Text>
          </View>
          <View>
            <Icon
              name="ios-search"
              size={20}
              style={{padding: 12, color: '#8C899A'}}
            />
          </View>

        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});
