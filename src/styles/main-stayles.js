import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    escolhaContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
  
    oponenteContainer: {
      justifyContent: 'center',
      alignItems: 'center'
    }, 
  
    botaoEscolha: {
      margin: 25
    },
  
    textoEscolha: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 12
    },
  
    bigText: {
      fontSize: 50,
      fontWeight: 'bold'
    },
  
    medText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'lightblue'
    }
});

export default styles;
