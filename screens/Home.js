import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';
import Timer from '../components/Timer';

import PomodoroContext from '../context/pomodoroContext';

import { TIMER_STROKE_WIDTH as strokeWidth } from '../constants';

const Home = () => {
  const { timeboxes, activeTimebox, setActiveTimebox } = useContext(PomodoroContext);

  const moveToNextTimebox = () => {
    setActiveTimebox(activeTimebox + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.main}>
        <Timer
          strokeWidth={strokeWidth}
          moveToNextTimebox={moveToNextTimebox}
          duration={timeboxes[activeTimebox] * 60000}
          activeTimebox={activeTimebox}
        />
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
  },
  header: {
    marginTop: 33,
  },
});
