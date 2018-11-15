'use strict';

import React, {Component} from 'react';
import {Dimensions, View, Text, StyleSheet, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {Rating} from 'react-native-ratings';

var deviceWidth = Dimensions.get ('window').width;

export default class Card extends Component {
  constructor (props) {
    super (props);

    this.state = {
      item: this.props.data,
    };
  }

  render () {
    return (
      <View
        style={{
          height: 250,
          width: deviceWidth * 0.8,
          marginTop: 12,
          marginBottom: 48,
        }}
      >
        <Image
          source={{uri: this.state.item.image}}
          style={{
            flex: 1,
            width: null,
            height: null,
            borderRadius: 10,
          }}
        />
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: '#5D74F4',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: 12,
            top: 12,
          }}
        >
          <Icon name="md-navigate" size={20} style={{color: '#ffffff'}} />
        </View>

        <View style={{position: 'absolute', justifyContent: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: '#514F5D',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 12,
              }}
            >
              <Icon name="ios-home" size={20} style={{color: '#8C899A'}} />
            </View>

            <View style={{marginTop: 12}}>
              <Text
                style={{fontSize: 18, fontWeight: '300', color: '#fff'}}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {this.state.item.name}
              </Text>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{marginRight: 8, fontSize: 14, color: '#fff'}}>
                  {this.state.item.rating}
                </Text>

                <Rating
                  ratingColor="#3498db"
                  ratingCount={5}
                  imageSize={14}
                  ratingBackgroundColor="#242132"
                  style={{paddingVertical: 10, marginRight: 8}}
                />

                <Text style={{fontSize: 14, color: '#fff'}}>
                  ({this.state.item.reviews_count})
                </Text>
              </View>
            </View>

          </View>

          <View>
            <Text style={{marginLeft: 62, fontSize: 14, color: '#fff'}}>
              {this.state.item.description}
            </Text>
          </View>
        </View>

        <View
          style={{
            position: 'absolute',
            alignSelf: 'center',
            bottom: '-5%',
          }}
        >
          <View
            style={{
              width: deviceWidth/3,
              height: 30,
              borderRadius: 15,
              backgroundColor: '#484757',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{color: '#fff'}}>Click Here</Text>
            <Icon
              name="ios-arrow-forward"
              size={14}
              style={{marginLeft: 8, padding: 4, color: '#8C899A'}}
            />
          </View>
        </View>

      </View>
    );
  }
}
