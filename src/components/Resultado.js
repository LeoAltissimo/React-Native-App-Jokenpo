import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import styles from '../styles/main-stayles';

export default class Resultado extends Component {
    render() {
      if (this.props.result !== '') {
        if (this.props.result === 'ganhou') {
          return (
            <View style={styles.escolhaContainer}>
              <Image source={require('../../imgs/ganhou.png')} />
              <Text style={styles.medText}>Ganhou!!</Text>
            </View>
          );
        }
        if (this.props.result === 'perdeu') {
          return (
            <View style={styles.escolhaContainer}>
              <Image source={require('../../imgs/perdeu.png')} />
              <Text style={styles.medText}>Perdeu</Text>
            </View>
          );
        }
        if (this.props.result === 'empate') {
          return (
            <View style={styles.escolhaContainer}>
              <Image source={require('../../imgs/empate.png')} />
              <Text style={styles.medText}>Empatou</Text>
            </View>
          );
        }
      }
  
      return null;
    }
}
