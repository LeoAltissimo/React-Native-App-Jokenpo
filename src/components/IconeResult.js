import React, { Component } from 'react';
import { Image } from 'react-native';

export default class IconeResult extends Component {
    render() {
        if (this.props.opc === 'pedra') {
          return (<Image source={require('../../imgs/pedra.png')} />);
        } else if (this.props.opc === 'papel') {
          return (<Image source={require('../../imgs/papel.png')} />);
        } else if (this.props.opc === 'tesoura') {
          return (<Image source={require('../../imgs/tesoura.png')} />);
        }
  
        return null;
    }
}
