import React, { useRef, useState } from 'react';
import { Easing, Animated, View, StyleSheet, Button } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';

import { getRemainingTimeByProgress } from '../utils/timer';

import Countdown from './Countdown';
import TimerButton from './TimerButton';

import { TIMER_RADIUS as radius } from '../constants';

const Timer = ({ strokeWidth, duration, color }) => {
  const [playing, setPlaying] = useState(false);

  const circleRef = useRef();
  const countdownRef = useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const createAnimation = (animated, durationMilis) => {
    return Animated.timing(animated, {
      toValue: 100,
      duration: durationMilis,
      useNativeDriver: true,
      easing: Easing.linear,
    });
  };

  const initiateListener = animatedVal => {
    animatedVal.addListener(v => {
      const strokeDashoffset = circumference * (v.value / 100);
      if (circleRef?.current) {
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  };

  let animated = useRef(new Animated.Value(0)).current;
  let animationRef = createAnimation(animated, duration);

  function toggleTimer() {
    countdownRef.current.toggleCountdown();
    if (!playing) {
      if (animated._value > 0) {
        animationRef = createAnimation(animated, getRemainingTimeByProgress(duration, animated._value));
      }
      animationRef.start();
      initiateListener(animated);
    } else {
      animationRef.stop();
      animated.removeAllListeners();
    }
    setPlaying(!playing);
  }

  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg height={radius * 2} width={radius * 2} viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={0}
            strokeDasharray={circumference}
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".1"
          />
        </G>
      </Svg>
      <View style={[StyleSheet.absoluteFillObject, { top: 105, left: 80 }]}>
        <Countdown duration={duration} playing={playing} setPlaying={setPlaying} ref={countdownRef} />
      </View>
      <View style={styles.timerButton}>
        <TimerButton paused={!playing} onPress={toggleTimer} />
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timerButton: {
    marginTop: 33,
  },
});
