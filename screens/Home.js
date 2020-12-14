import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';
import Timer from '../components/Timer';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.main}>
        <Timer color="#f45858" strokeWidth={20} duration={15000} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    marginTop: 140,
    // justifyContent: 'center',
  },
  header: {
    marginTop: 33,
  },
});
