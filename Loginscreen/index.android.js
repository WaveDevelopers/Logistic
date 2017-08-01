/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

export default class Loginscreen extends Component {
  render() {
    return (
      <View style={styles.container}>
		<View style={styles.content}>
			<Text style={styles.logo}></Text>
			<Image source={require('./logo.png')} style={{width: 80, height: 80, marginBottom : 50}} />
				<TextInput underlineColorAndroid='transparent' style={styles.input} placeholder='Email Id'>
				</TextInput>
				<TextInput secureTextEntry={true} underlineColorAndroid='transparent' style={styles.input} placeholder='Password'>
				</TextInput>
		
			<TouchableOpacity onPress={this.showAlert} style={styles.buttonContainer}>
					<Text style={styles.buttonText}>LOGIN</Text>
			</TouchableOpacity>
			
			<Text onPress={this.showAlert} style={styles.signUp}>Sign up as Client</Text>
			<Text onPress={this.showAlert} style={styles.signUp}>Sign up as Delivery Boy</Text>
			
		</View>
	  </View>
    );
  }
  
  showAlert(){
	  
  Alert.alert(
  'Alert Title',
  'My Alert Msg',
		[
			{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
			{text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			{text: 'OK', onPress: () => console.log('OK Pressed')},
		],
		{ cancelable: false }
	)
	
  }
  
  
}

const styles = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor : '#ecf0f1',
		paddingTop : 60,
	},
	content : {
		alignItems : 'center',
	},
	logo : {
		color : 'white',
		fontSize : 40,
		fontStyle : 'italic',
		fontWeight : 'bold',
		textShadowColor : '#252525',
		textShadowOffset : {width : 2, height : 2},
		textShadowRadius : 15,
		marginBottom : 20,
	},
	input : {
		borderRadius : 10,
		margin : 20,
		paddingBottom : 10,
		alignSelf : 'stretch',
		fontSize : 16,
		height : 40,
		padding : 10,
		marginBottom : 5,
		backgroundColor : 'rgba(255, 255, 255, 1)',
	},
	buttonContainer : {
		borderRadius : 10,
		alignSelf : 'stretch',
		margin : 20,
		padding : 10,
		backgroundColor : 'blue',
		borderWidth : 1,
		borderColor : '#3498db',
		backgroundColor : '#3498db',
	},
	buttonText : {
		fontSize : 16,
		fontWeight : 'bold',
		textAlign : 'center',
		color : 'white'
	},
	signUp : {
		color : '#e67e22',
		padding : 10,
	}
});



AppRegistry.registerComponent('Loginscreen', () => Loginscreen);
