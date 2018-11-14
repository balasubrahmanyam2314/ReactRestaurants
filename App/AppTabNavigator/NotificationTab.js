'use strict';

import React, {Component} from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import DetailCard from './components/DetailCard';

var deviceHeight = Dimensions.get ('window').height;

export default class NotificationTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-notifications" size={25} style={{color: tintColor}} />
    ),
  };

  constructor (props) {
    super (props);
    this.state = {
      data: {},
    };
  }
  render () {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#242132'}}>
          <View
            style={{
              height: '50%',
              width: '100%',
            }}
          >
            <Image
              source={{uri: 'https://picsum.photos/400/300/?image=8'}}
              style={{
                flex: 1,
                width: null,
                height: null,
              }}
            />
          </View>

          <DetailCard
            style={{
              width: '80%',
              backgroundColor: '#373347',
              borderRadius: 10,
              alignSelf: 'center',
              top: -50,
            }}
          />

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {},
});
