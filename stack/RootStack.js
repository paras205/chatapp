import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../components/Login';
import { Contact } from '../components/Contact';
import { Messages } from '../components/Messages';
import Notification from '../components/Notification';

const Stack = createStackNavigator();

const RootStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Home" component={Notification} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootStack;
