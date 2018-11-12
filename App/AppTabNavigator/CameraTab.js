'use strict';

import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Card from './components/Card';

export default class CameraTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-camera" size={25} style={{color: tintColor}} />
    ),
  };

  constructor () {
    super ();
    this.state = {
      data: {},
    };

    // Set dummy data for result
    this.state.data = [
      {
        id: '1',
        image: 'https://picsum.photos/400/300/?image=786',
        name: 'Little Things',
        rating: 4.3,
        reviews_count: 100,
        description: 'Madhapur, Hyderabad•Costs ₹800.00 for two',
      },
      {
        id: '2',
        image: 'https://picsum.photos/400/300/?image=32',
        name: 'Eagle Boys Pizza',
        rating: 4.0,
        reviews_count: 10,
        description: 'Manikonda, Hyderabad•Costs ₹500.00 for two',
      },
      {
        id: '3',
        image: 'https://picsum.photos/400/300/?image=76',
        name: 'Green Bawarchi Restaurant',
        rating: 3.3,
        reviews_count: 130,
        description: 'Madhapur, Hyderabad•Costs ₹800.00 for two',
      },
      {
        id: '4',
        image: 'https://picsum.photos/400/300/?image=6',
        name: 'Burger King',
        rating: 4.5,
        reviews_count: 200,
        description: 'Manikonda, Hyderabad•Costs ₹500.00 for two',
      },
      {
        id: '5',
        image: 'https://picsum.photos/400/300/?image=7',
        name: 'Dominos',
        rating: 4.1,
        reviews_count: 60,
        description: 'Madhapur, Hyderabad•Costs ₹800.00 for two',
      },
      {
        id: '6',
        image: 'https://picsum.photos/400/300/?image=8',
        name: 'KFC',
        rating: 3.8,
        reviews_count: 189,
        description: 'Manikonda, Hyderabad•Costs ₹500.00 for two',
      },
    ];
  }

  _renderItem = ({item}) => <Card data={item} />;
  _getkeyIndex = (item, index) => index.toString ();

  render () {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1,alignItems:'center'}}>
          <Text>HEADER</Text>
        </View>
        <View style={{flex: 6}}>

          <ScrollView
            style={{
              backgroundColor: '#f3f3f3',
              width: '100%',
              height: '100%',
            }}
            contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
          >
            <FlatList
              data={this.state.data}
              keyExtractor={this._getkeyIndex}
              renderItem={this._renderItem}
              style={{flexGrow: 0}}
            />
          </ScrollView>
        </View>
        <View style={{flex: 1}}>
          <Text>FOOTER</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {},
});
