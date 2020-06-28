import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	FlatList
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';

const Notification = () => {
	const [ data, setData ] = useState([
		{
			id: 'x1fie5vhFr',
			user_id: 'trongtinh_Rc0LjZ54yj',
			user_name: 'TRONG TINH',
			user_avatar: require('../assets/asset/images/avatar_default.png'),
			notificaton: 'like your avatar.',
			readed: false,
			created_at: 'Few seconds'
		},
		{
			id: 'gjYQQVjxTD',
			user_id: 'huynhnhu_R3J4WUoWXJ',
			user_name: 'HUYNH NHU',
			user_avatar: require('../assets/asset/images/avatar_default.png'),
			notificaton: 'comment your avatar.',
			readed: true,
			created_at: '1 day ago'
		}
	]);
	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity
				style={[
					styles.item_container,
					{
						backgroundColor: item.readed ? null : '#e1ffed'
					}
				]}
			>
				<Image
					source={item.user_avatar}
					style={{ height: 80, width: 80 }}
				/>
				<View style={styles.user}>
					<View>
						<Text style={styles.textName}>{item.user_name}</Text>
						<Text style={styles.textNumber}>
							{item.notificaton}
						</Text>
					</View>
					{/* <View style={styles.textNumber}>
						<Text>{item.created_at}</Text>
					</View> */}
				</View>
			</TouchableOpacity>
		);
	};
	return (
		<View style={styles.container}>
			<LinearGradient
				colors={[ '#39b54a', '#006837' ]}
				style={styles.header}
			>
				<Text style={styles.textHeader}>Notification</Text>
			</LinearGradient>
			<View style={styles.flatList}>
				<FlatList
					data={data}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	header: {
		height: 70,
		paddingTop: 15,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textHeader: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 25
	},
	add: {
		position: 'absolute',
		right: 0,
		top: 0,
		bottom: 0,
		left: 0,
		paddingTop: 15,
		justifyContent: 'center',
		alignItems: 'flex-end',
		paddingRight: 15
	},
	item_container: {
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: 15,
		paddingVertical: 15
	},
	user: {
		flex: 1,
		flexDirection: 'row',
		paddingLeft: 15,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#f2f2f2'
	},
	textName: {
		color: 'black',
		fontWeight: 'bold'
	},
	textNumber: {
		color: 'gray',
		marginTop: 5
	},
	flatList: {
		flex: 1
	},
	call: {
		position: 'absolute',
		right: 0
	}
});
export default Notification;
