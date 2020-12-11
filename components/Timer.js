import React, { useRef, useState } from 'react';
import { Easing, Animated, View, StyleSheet, Button } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';

import { TIMER_RADIUS as radius } from '../constants';

const Timer = ({ strokeWidth, duration, color }) => {
	const [playing, setPlaying] = useState(false);

	let progressPercentage = 0;

	const circleRef = useRef();
	const circumference = 2 * Math.PI * radius;
	const halfCircle = radius + strokeWidth;

	const createAnimation = (animated) => {
		return Animated.timing(animated, {
			delay: 0,
			toValue: 100,
			duration,
			useNativeDriver: true,
			easing: Easing.linear,
		});
	};

	const initiateListener = (animatedVal) => {
		animatedVal.addListener((v) => {
			progressPercentage = v.value;
			const strokeDashoffset = circumference * (progressPercentage / 100);
			if (circleRef?.current) {
				circleRef.current.setNativeProps({
					strokeDashoffset,
				});
			}
		});
	};

	let animated = useRef(new Animated.Value(0)).current;
	let animationRef = createAnimation(animated);

	const toggleTimer = () => {
		if (!playing) {
			if (progressPercentage !== 0) {
				animated = useRef(new Animated.Value(progressPercentage)).current;
				animationRef = createAnimation(animated);
			}
			animationRef.start();
			initiateListener(animated);
		} else {
			animationRef.stop();
			animated.removeAllListeners();
		}
		setPlaying(!playing);
	};

	return (
		<View style={{ width: radius * 2, height: radius * 2 }}>
			<Svg
				height={radius * 2}
				width={radius * 2}
				viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
			>
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
			<View style={{ marginTop: 30 }}>
				<Button title="Play/Pause" onPress={toggleTimer} />
			</View>
		</View>
	);
};

export default Timer;

const styles = StyleSheet.create({});
