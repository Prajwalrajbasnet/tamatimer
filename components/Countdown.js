import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { timestampMinute } from '../utils/timer';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msRemaining: 0,
    };
    this.countdownId = {};
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      msRemaining: this.props.duration,
    });
  }

  createCountdownInterval() {
    return setInterval(() => {
      if (this.state.msRemaining >= 1000) {
        const d = this.state.msRemaining - 1000;
        this.setState({
          msRemaining: d,
        });
      } else {
        clearInterval(this.countdownId);
        // this.props.setPlaying(!this.props.playing);
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
        <Text style={styles.timestamp}>{timestampMinute(this.state.msRemaining)}</Text>
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
