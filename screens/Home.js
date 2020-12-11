import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Timer from '../components/Timer';

const Home = () => {
	return (
		<View style={styles.container}>
			<Timer color="tomato" strokeWidth={20} duration={60000} />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
