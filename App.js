import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import Header from './apps/components/Header'
import HeroImage from './apps/components/HeroImage'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Header />
        <HeroImage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
