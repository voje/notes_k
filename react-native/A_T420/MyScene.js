import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Button from 'react-native-button';

export default class MyScene extends Component {
	static propTypes = {
		title: PropTypes.string.isRequired,
		onForward: PropTypes.func.isRequired,
		onBack: PropTypes.func.isRequired,
	}	
	render() {
		return (
			<View style={styles.myView}>
				<Text style={styles.myText}>Current title: {this.props.title}.</Text>
				<Button containerStyle={styles.myButtonContainer} style={styles.myButton} onPress={this.props.onForward} >Go Forward!</Button>
				<TouchableHighlight onPress={this.props.onForward}>
					<View style={styles.button}>
						<Text style={styles.myText}>Touch me, to go forward.</Text>
					</View>
				</TouchableHighlight>
				<TouchableHighlight onPress={this.props.onBack}>
					<Text style={styles.myText}>Touch me, to go back.</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    myView: {
    	flex: 1,
        backgroundColor: 'purple',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    myText: {
    	fontSize: 20,
    	fontWeight: 'bold',
    },
    myButton: {
    	fontSize: 20,
    	color: 'yellow',
    },
    myButtonContainer: {
    	padding:10,
    	height:45,
    	overflow:'hidden',
    	borderRadius:4,
    	backgroundColor: 'gray',
    },
});