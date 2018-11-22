import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import styles from '../styles/main-stayles';

const ganhou = require('../../imgs/ganhou.png');
const perdeu = require('../../imgs/perdeu.png');
const empate = require('../../imgs/empate.png');

export default class Resultado extends Component {
    render() {
      if (this.props.result !== '') {
        if (this.props.result === 'ganhou') {
          return (
            <View style={styles.escolhaContainer}>
              <Image source={ganhou} />
              <Text style={styles.medText}>Ganhou!!</Text>
            </View>
          );
        }
        if (this.props.result === 'perdeu') {
          return (
            <View style={styles.escolhaContainer}>
              <Image source={perdeu} />
              <Text style={styles.medText}>Perdeu</Text>
            </View>
          );
        }
        if (this.props.result === 'empate') {
          return (
            <View style={styles.escolhaContainer}>
              <Image source={empate} />
              <Text style={styles.medText}>Empatou</Text>
            </View>
          );
        }
      }
  
      return null;
    }
}
