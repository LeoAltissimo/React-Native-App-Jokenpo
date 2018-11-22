import React, { Component } from 'react';
import { Image } from 'react-native';

const imgPedra = require('../../imgs/pedra.png');
const imgPapel = require('../../imgs/papel.png');
const imgTesoura = require('../../imgs/tesoura.png');

export default class IconeResult extends Component {
    render() {
        if (this.props.opc === 'pedra') {
          return (<Image source={imgPedra} />);
        } else if (this.props.opc === 'papel') {
          return (<Image source={imgPapel} />);
        } else if (this.props.opc === 'tesoura') {
          return (<Image source={imgTesoura} />);
        }
  
        return null;
    }
}
