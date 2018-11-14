'use strict';

import React, {Component} from 'react';
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class DetailCard extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <View style={this.props.style}>
        <ScrollView scrollEventThrottle={16}>
          <View style={{padding: 24}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 24,
              }}
            >
              <Text
                style={{
                  color: 'white',
                  fontSize: 28,
                  fontWeight: 'bold',
                  width: 200,
                }}
              >
                Pickle, jam and chutney
              </Text>

              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: '#5D74F4',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon name="md-navigate" size={20} style={{color: '#ffffff'}} />
              </View>
            </View>

            <View>
              <Text
                style={{
                  color: '#636071',
                  fontSize: 12,
                  textAlign: 'justify',
                  marginBottom: 12,
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,

              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: '#514F5D',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 12,
                  }}
                >
                  <Icon name="ios-home" size={20} style={{color: '#8C899A'}} />
                </View>

                <View>
                  <Text style={{color: 'white', fontSize: 12}}>
                    10am-10pm
                  </Text>
                </View>
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: '#514F5D',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 12,
                  }}
                >
                  <Icon name="ios-home" size={20} style={{color: '#8C899A'}} />
                </View>

                <View>
                  <Text style={{color: 'white', fontSize: 12}}>
                    10am-10pm
                  </Text>
                </View>
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: '#514F5D',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 12,
                  }}
                >
                  <Icon name="ios-home" size={20} style={{color: '#8C899A'}} />
                </View>

                <View>
                  <Text style={{color: 'white', fontSize: 12}}>
                    10am-10pm
                  </Text>
                </View>
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: '#514F5D',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 12,
                  }}
                >
                  <Icon name="ios-home" size={20} style={{color: '#8C899A'}} />
                </View>

                <View>
                  <Text style={{color: 'white', fontSize: 12}}>
                    10am-10pm
                  </Text>
                </View>
              </View>
            </View>

          </View>
        </ScrollView>

      </View>
    );
  }
}
