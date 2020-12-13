import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
	return (
		<View>
			<Text style={styles.headerText}>Pomodoro</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	headerText: {
		textAlign: 'center',
		textTransform: 'capitalize',
		fontFamily: 'ubuntu-md',
		fontSize: 30,
		color: '#F95656',
		letterSpacing: -1,
	},
});
