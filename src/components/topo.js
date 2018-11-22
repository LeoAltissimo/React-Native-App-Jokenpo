import React, { Component } from 'react';
import { View, Image } from 'react-native';

const imgJokenpo = require('../../imgs/jokenpo.png');

export default class Topo extends Component {
    render() {
      return (
        <View>
          <Image source={imgJokenpo} />
        </View>
      );
    }
}
