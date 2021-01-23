import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator color={'#6C63FF'} size="large" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default Loading;