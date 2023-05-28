import { Text, StyleSheet, View, Image } from 'react-native';

import Icon from './assets/icon.png'


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.meuTexto}>Olá Mundo</Text>
      <Text style={styles.meuTexto}>Olá Mundo</Text>

      <Image
        style={styles.logo}
        source={
          { uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }}
      />
      <Image
        source={Icon}
        style={styles.logo}
      />

      <View style={styles.images}>
        <Image
          source={Icon}
          style={styles.logo}
        />
        <Image
          source={Icon}
          style={styles.logo}
        />
        <Image
          source={Icon}
          style={styles.logo}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  meuTexto: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold'
  },
  container: {
    // flexDirection: 'row',
  
    backgroundColor: '#CCC',
    flex: 1,
    height: 200
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  images: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  }
})

