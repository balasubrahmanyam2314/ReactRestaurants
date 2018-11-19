'use strict';

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeTab from './AppTabNavigator/HomeTab';
import ExploreTab from './AppTabNavigator/ExploreTab';
import CameraTab from './AppTabNavigator/CameraTab';
import NotificationTab from './AppTabNavigator/NotificationTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

export default class DashBoardScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render () {
    return <AppTabNavigator />;
  }
}

const AppTabNavigator = createBottomTabNavigator (
  {
    Home: {
      screen: HomeTab,
    },
    Explore: {
      screen: ExploreTab,
    },
    Camera: {
      screen: CameraTab,
    },
    Notification: {
      screen: NotificationTab,
    },
    Profile: {
      screen: ProfileTab,
    },
  },
  {
    initialRouteName: 'Profile',
    animationEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#5E76F6',
      inActiveTintColor: '#504E5B',
      showLabel: false,
      showIcon: true,

      style: {
        backgroundColor: '#242132',
      },
    },
  }
);

const styles = StyleSheet.create ({
  container: {},
});
