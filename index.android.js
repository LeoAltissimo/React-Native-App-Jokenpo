// System imports
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

// Components import
import Topo from './src/components/topo';
import Oponente from './src/components/Oponente';
import Resultado from './src/components/Resultado';

// syles import
import styles from './src/styles/main-stayles';

const imgPedra = require('./imgs/pedra.png');
const imgPapel = require('./imgs/papel.png');
const imgTesoura = require('./imgs/tesoura.png');

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
            <Image source={imgPedra} />
            <Text style={styles.textoEscolha}>pedra</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.botaoEscolha} 
          onPress={() => { this.escolhaUser('papel'); }}
          >
            <Image source={imgPapel} />
            <Text style={styles.textoEscolha}>papel</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.botaoEscolha} 
          onPress={() => { this.escolhaUser('tesoura'); }}
          >
            <Image source={imgTesoura} />
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
