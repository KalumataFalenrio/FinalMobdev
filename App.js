import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Greeting from './component/Greeting';
import Header from './component/Header';
import Global from './component/Global';
import CovidIndonesia from './component/Indonesia';
import TextSubBody from './component/TextBody';
const App = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxHeader}>
          <Header/>
        </View>
        <View style={styles.boxSub}>
            <Greeting/>
            <Global/>
        </View>
        <View style={styles.boxBody}>
          <TextSubBody/>
          <CovidIndonesia/>
        </View>
    </View>
)
}
const styles = StyleSheet.create({
  container: {
      flex: 3,
      flexDirection: 'column',
      backgroundColor:'#EBEBEB',
      alignItems: 'stretch',
      justifyContent: 'center'
  },
  boxHeader: {
      flex: 2,
      alignItems: 'center',
      backgroundColor: 'silver'
  },
  boxSub: {
      flex: 3,
      alignItems: 'center',
      backgroundColor: 'silver'
  },
  boxBody: {
      flex: 10,
  }
})

export default App;