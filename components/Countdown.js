import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { timestampMinute } from '../utils/timer';

class Countdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			secondsRemaining: 0,
		};
		this.countdownId = {};
	}

	componentDidMount() {
		this.setState({
			...this.state,
			secondsRemaining: this.props.duration,
		});
	}

	something() {
		return 'From something';
	}

	createCountdownInterval() {
		return setInterval(() => {
			if (this.state.secondsRemaining !== 0) {
				this.setState({
					...this.setState,
					secondsRemaining: this.state.secondsRemaining - 1,
				});
			} else {
				clearInterval(this.countdownId);
			}
		}, 1000);
	}

	toggleCountdown() {
		if (this.props.playing) {
			clearInterval(this.countdownId);
		} else {
			this.countdownId = this.createCountdownInterval();
		}
	}

	render() {
		return (
			<View>
				<Text style={styles.timestamp}>
					{timestampMinute(this.state.secondsRemaining)}
				</Text>
			</View>
		);
	}
}

export default Countdown;

const styles = StyleSheet.create({
	timestamp: {
		fontSize: 40,
		fontFamily: 'spartanmb-eb',
	},
});
