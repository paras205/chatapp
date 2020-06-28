import React from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet,
	Dimensions,
	ImageBackground,
	TextInput
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const Login = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<ImageBackground
					source={require('../assets/asset/images/header.png')}
					style={{
						width: '100%',
						height: '100%',
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center'
					}}
					resizeMode={'stretch'}
				>
					<View style={styles.logo}>
						<Image
							source={require('../assets/asset/images/logo.png')}
							style={{ width: '100%', height: '100%' }}
							resizeMode={'stretch'}
						/>
					</View>
				</ImageBackground>
			</View>
			<View style={styles.footer}>
				<TextInput
					placeholder="enter your name"
					style={styles.textInput}
				/>
				<TextInput placeholder="Password" style={styles.textInput} />
				<TouchableOpacity
					onPress={() => navigation.navigate('Home')}
					style={{ width: '100%', alignItems: 'center' }}
				>
					<LinearGradient
						start={{ x: 0, y: 0 }}
						colors={[ '#39b54a', '#006837' ]}
						style={styles.login}
					>
						<Text style={styles.loginText}>Login</Text>
					</LinearGradient>
				</TouchableOpacity>
			</View>
		</View>
	);
};
const { height, width } = Dimensions.get('window');
const logo_width = width * 0.5;
const logo_height = logo_width * 1.2;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	header: {
		width: '100%',
		height: '55%'
	},
	logo: {
		width: logo_width,
		height: logo_height
	},
	footer: {
		width: '100%',
		height: '45%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	textInput: {
		width: '90%',
		borderWidth: 1,
		borderColor: '#ddd',
		paddingHorizontal: 20,
		borderRadius: 50,
		paddingVertical: 20,
		marginBottom: 10,
		backgroundColor: '#f2f2f2'
	},
	login: {
		width: '90%',
		paddingVertical: 20,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	loginText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20
	}
});
