import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Tabbar from './src/components/Tabbar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'flex-end',
    position: 'relative',
  },
  header: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'red',
    width: '100%',
    padding: 20,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default () => (
  <View style={styles.container}>
    <Text style={styles.header}>Tabbar</Text>
    <Text>This is Body</Text>
    <Tabbar />
  </View>
);
