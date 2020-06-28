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

export const Contact = () => {
	const [ data, setData ] = useState([
		{
			id: 'Rc0LjZ54yj',
			user_id: 'trongtinh_Rc0LjZ54yj',
			user_name: 'TRONG TINH',
			user_avatar: require('../assets/asset/images/avatar_default.png'),
			user_phonenumber: '+84 93456788'
		},
		{
			id: 'MhiUfuWzr2',
			user_id: 'tranthanh_MhiUfuWzr2',
			user_name: 'TRAN THANH',
			user_avatar: require('../assets/asset/images/avatar_default.png'),
			user_phonenumber: '+84 78346789'
		},
		{
			id: 'R3J4WUoWXJ',
			user_id: 'huynhnhu_R3J4WUoWXJ',
			user_name: 'HUYNH NHU',
			user_avatar: require('../assets/asset/images/avatar_default.png'),
			user_phonenumber: '+84 95661237'
		},
		{
			id: 'ucPA0NXweB',
			user_id: 'dinhtrong_ucPA0NXweB',
			user_name: 'DINH TRONG',
			user_avatar: require('../assets/asset/images/avatar_default.png'),
			user_phonenumber: '+84 33674824'
		},

		{
			id: 'wfbMalbY9l',
			user_id: 'truonggiang_wfbMalbY9l',
			user_name: 'TRUONG GIANG',
			user_avatar: require('../assets/asset/images/avatar_default.png'),
			user_phonenumber: '+84 78346789'
		},
		{
			id: 'IlpBApYmye',
			user_id: 'trongthat_IlpBApYmye',
			user_name: 'TRONG THAT',
			user_avatar: require('../assets/asset/images/avatar_default.png'),
			user_phonenumber: '+84 4532012'
		}
	]);
	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity style={styles.item_container}>
				<Image
					source={item.user_avatar}
					style={{ height: 80, width: 80 }}
				/>
				<View style={styles.user}>
					<View>
						<Text style={styles.textName}>{item.user_name}</Text>
						<Text style={styles.textNumber}>
							{item.user_phonenumber}
						</Text>
					</View>
					<TouchableOpacity style={styles.call}>
						<MaterialIcons name="call" color="green" size={25} />
					</TouchableOpacity>
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
				<Text style={styles.textHeader}>Contact</Text>
				<TouchableOpacity style={styles.add}>
					<AntDesign name="pluscircle" size={24} color="white" />
					{/* <AntDesign name={pluscircle} color="white" size={25} /> */}
				</TouchableOpacity>
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
