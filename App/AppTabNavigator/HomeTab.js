'use strict';

import React, {Component} from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import Card from './components/Card';

var deviceWidth = Dimensions.get ('window').width;
var deviceHeight = Dimensions.get ('window').height;

export default class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-aperture" size={25} style={{color: tintColor}} />
    ),
  };

  constructor () {
    super ();
    this.state = {
      data: [],
      scrollY: new Animated.Value (0),
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

  renderData () {
    return this.state.data.map (data => <Card key={data.id} data={data} />);
  }

  render () {
    return (
      <SafeAreaView style={{flex: 1}}>

        <View style={styles.container}>

          <LinearGradient
            colors={['#756AFF', '#55D5E2']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 0.0}}
            locations={[0.3, 0.9]}
            style={{
              height: deviceWidth * 0.6,
              width: deviceWidth * 0.6,
              borderRadius: deviceWidth * 0.6 / 2,
              justifyContent: 'center',
              top: '-10%',
              left: '-5%',
            }}
          >

            <Text
              style={{
                fontSize: 28,
                color: '#fff',
                textAlign: 'left',
                fontWeight: 'bold',
                marginLeft:50
              }}
            >
              {'Discover Restaurants'}
            </Text>

          </LinearGradient>
          
          <View
            style={{
              position: 'absolute',
              flex: 1,
              width: '100%',
              height: '100%',
            }}
          >
            <Animated.View
              style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              <Icon
                name="ios-search"
                size={30}
                style={{
                  padding: 12,
                  color: '#8C899A',
                  marginRight: 12,
                }}
              />
            </Animated.View>

            <View
              style={{
                alignSelf: 'center',
                flex: 6,
              }}
            >
              <ScrollView
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event ([
                  {nativeEvent: {contentOffset: {y: this.state.scrollY}}},
                ])}
              >
                {this.renderData ()}
              </ScrollView>
            </View>

          </View>

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#242132',
  },
});
