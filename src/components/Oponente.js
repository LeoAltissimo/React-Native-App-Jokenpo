import React, { Component } from 'react';
import { Text, View } from 'react-native';
import IconeResult from './IconeResult';

import styles from '../styles/main-stayles';

export default class Oponente extends Component {
    render() {
      if (this.props.opc !== '') {
        return (
          <View>
          <View style={styles.escolhaContainer}>
            <Text style={styles.bigText}>VS</Text>
          </View>
          <View style={styles.oponenteContainer}>
            <IconeResult opc={this.props.opc} />
            <Text style={styles.textoEscolha}>Escolha do Opoente: </Text>
          </View>
        </View>
        );
      }
  
      return null;
    }
}
