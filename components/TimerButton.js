import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const TimerButton = ({ paused, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {paused ? (
        <Feather name="play-circle" size={35} color="#FA7E7E" />
      ) : (
        <Feather name="pause-circle" size={35} color="#FA7E7E" />
      )}
    </TouchableOpacity>
  );
};

export default TimerButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#FEE4E4',
    borderRadius: 40,
    alignSelf: 'center',
  },
});
