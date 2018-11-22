import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import Topo from './src/components/topo';
import Oponente from './src/components/Oponente';
import Resultado from './src/components/Resultado';

import styles from './src/styles/main-stayles';

export default class jokenpo extends Component {

  constructor(props) {
    super(props);

    this.state = { escolhaUsuauio: '', escolhaNPC: '', resultado: '' };
  }

  escolhaPc() {
    const escolhaNum = Math.floor(Math.random() * 3);
    let escolha;
    switch (escolhaNum) {
      case 0:
        escolha = 'pedra';
        break;
      case 1:
        escolha = 'papel';
        break;
      case 2:
        escolha = 'tesoura';
        break;
      default:
        escolha = 'tesoura';
        break;
    }

    this.setState({ escolhaNPC: escolha });
    return escolha;
  }

  escolhaUser(escolha) {
    this.setState({ escolhaUsuauio: escolha });
    const escolhanpc = this.escolhaPc();
    this.resultado(escolha, escolhanpc);
  }

  resultado(player, npc) {
    if (player === npc) {
        this.setState({ resultado: 'empate' });
        return;
    }
    if (((player === 'pedra') && (npc === 'tesoura')) ||  
        ((player === 'papel') && (npc === 'pedra')) || 
        ((player === 'tesoura') && (npc === 'papel'))) {
      this.setState({ resultado: 'ganhou' });
    } else {
      this.setState({ resultado: 'perdeu' });
    }
  }

  render() {
    return (
      <View >
        <Topo />
        <View style={styles.escolhaContainer}>
          <TouchableOpacity 
          style={styles.botaoEscolha} 
          onPress={() => { this.escolhaUser('pedra'); }}
          >
            <Image source={require('./imgs/pedra.png')} />
            <Text style={styles.textoEscolha}>pedra</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.botaoEscolha} 
          onPress={() => { this.escolhaUser('papel'); }}
          >
            <Image source={require('./imgs/papel.png')} />
            <Text style={styles.textoEscolha}>papel</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.botaoEscolha} 
          onPress={() => { this.escolhaUser('tesoura'); }}
          >
            <Image source={require('./imgs/tesoura.png')} />
            <Text style={styles.textoEscolha}>tesoura</Text>
          </TouchableOpacity>
        </View>
        <Oponente opc={this.state.escolhaNPC} />
        <Resultado result={this.state.resultado} />
      </View>
    );
  }
}

AppRegistry.registerComponent('jokenpo', () => jokenpo);
