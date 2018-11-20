'use strict';

import React, {Component} from 'react';
import {
  Dimensions,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Animated,
  StatusBar,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import LinearGradient from 'react-native-linear-gradient';

import Card from './components/Card';

var deviceWidth = Dimensions.get ('window').width;

const MAX_SEARCH_BOX_HEIGHT = 60;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[{height: STATUSBAR_HEIGHT}, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="ios-person" size={25} style={{color: tintColor}} />
    ),
  };

  constructor () {
    super ();
    this.state = {
      scrollY: new Animated.Value (0),
      data: [],
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
    const moveHeader = this.state.scrollY.interpolate ({
      inputRange: [0, 200],
      outputRange: [-deviceWidth * 0.2, -deviceWidth * 0.6],
    });

    const searboxHeight = this.state.scrollY.interpolate ({
      inputRange: [0, 150],
      outputRange: [0, MAX_SEARCH_BOX_HEIGHT],
      extrapolate: 'clamp',
    });

    const moveSearchIcon = this.state.scrollY.interpolate ({
      inputRange: [0, 150],
      outputRange: [0, -24],
      extrapolate: 'clamp',
    });

    const moveIconLeft = this.state.scrollY.interpolate ({
      inputRange: [0, 150],
      outputRange: [0, -deviceWidth + 54],
      extrapolate: 'clamp',
    });

    const borderColor = this.state.scrollY.interpolate ({
      inputRange: [0, 100, 150],
      outputRange: ['transparent', '#ffffff', '#ffffff'],
    });

    return (
      <View style={{flex: 1}}>
        <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />;

        <SafeAreaView style={{flex: 1}}>
          <View
            style={{flex: 1, backgroundColor: '#242132', position: 'relative'}}
          >

            <Animated.View
              style={{left: '-5%', transform: [{translateY: moveHeader}]}}
            >
              <LinearGradient
                colors={['#756AFF', '#55D5E2']}
                start={{x: 0.0, y: 1.0}}
                end={{x: 1.0, y: 0.0}}
                locations={[0.3, 0.9]}
                style={{
                  height: deviceWidth * 0.7,
                  width: deviceWidth * 0.7,
                  borderRadius: deviceWidth * 0.7 / 2,
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 28,
                    color: '#fff',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    marginLeft: 50,
                  }}
                >
                  {'Discover Restaurants'}
                </Text>
              </LinearGradient>
            </Animated.View>

            <View
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                flex: 1,
              }}
            >
              <ScrollView
                ref="myScrollView"
                contentContainerStyle={{paddingTop: 100}}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                onMomentumScrollEnd={event => {
                  this.yOffset = event.nativeEvent.contentOffset.y;
                  console.log (this.yOffset);
                }}
                onScroll={Animated.event ([
                  {
                    nativeEvent: {contentOffset: {y: this.state.scrollY}},
                  },
                ])}
              >
                {this.renderData ()}
              </ScrollView>

              <Animated.View
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: searboxHeight,
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  borderRadius: 6,
                  borderColor: borderColor,
                  borderWidth: 2,
                }}
              />

              <Animated.View
                style={{
                  position: 'absolute',
                  color: '#8C899A',
                  alignSelf: 'flex-end',
                  padding: 12,
                  marginTop: 24,
                  marginRight: 12,
                  transform: [
                    {translateX: moveIconLeft},
                    {translateY: moveSearchIcon},
                  ],
                }}
              >
                <Icon name="ios-search" size={30} style={{color: '#8C899A'}} />
              </Animated.View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}
