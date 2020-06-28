import React, { useState } from 'react';
import {
	View,
	Text,
	StatusBar,
	Image,
	StyleSheet,
	ImageBackground,
	TouchableOpacity,
	FlatList
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const Messages = () => {
	const [ data, setData ] = useState([
		{
			id: 'rwBa06nqlR',
			user_id: 'trongtinh_Rc0LjZ54yj',
			user_name: 'TRONG TINH',
			user_avatar: require('../assets/asset/images/avatar_default.png'),
			sender_id: 'trongtinh_Rc0LjZ54yj',
			messages: 'Hello',
			readed: false,
			num_messages_readed: 6,
			created_at: 'Few seconds'
		},
		{
			id: 'qKwgXmIoN0',
			user_id: 'huynhnhu_R3J4WUoWXJ',
			user_name: 'HUYNH NHU',
			user_avatar: require('../assets/asset/images/avatar_default.png'),
			sender_id: 'trongthanh_O7xyqYRvo1',
			messages: 'What are you doing?',
			readed: true,
			num_messages_readed: 0,
			created_at: '1 minute'
		},
		{
			id: 'ucPA0NXweB',
			user_id: 'trongthat_IlpBApYmye',
			user_name: 'TRONG THAT',
			user_avatar: require('../assets/asset/images/avatar_default.png'),
			sender_id: 'trongthat_IlpBApYmye',
			messages: 'Why?',
			readed: false,
			num_messages_readed: 3,
			created_at: '1 day ago'
		}
	]);
	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity style={styles.item_container}>
				<Image
					source={item.user_avatar}
					style={{ width: 50, height: 50 }}
					resizeMode={'stretch'}
				/>
				<View style={styles.item_message}>
					<View style={{ flex: 1 }}>
						<Text
							style={{
								color: 'black',
								fontWeight: item.readed ? null : 'bold'
							}}
						>
							{item.user_name}
						</Text>
						<Text
							style={{
								color: 'black',
								fontSize: 12,
								fontWeight: item.readed ? null : 'bold'
							}}
						>
							{' '}
							{item.messages}
						</Text>
					</View>
					<View style={{ alignItems: 'flex-end' }}>
						<Text
							style={{
								color: 'black',
								fontSize: 12,
								fontStyle: 'italic',
								textAlign: 'right',
								fontWeight: item.readed ? null : 'bold'
							}}
						>
							{item.created_at}
						</Text>
						{item.readed ? null : (
							<View style={styles.num_readed}>
								<Text
									style={{
										color: 'white',
										fontWeight: 'bold',
										fontSize: 12
									}}
								>
									{item.num_messages_readed > 5 ? (
										'5+'
									) : (
										item.num_messages_readed
									)}
								</Text>
							</View>
						)}
					</View>
				</View>
			</TouchableOpacity>
		);
	};
	const ItemSeparatorComponent = () => {
		return <View style={{ height: 1, paddingVertical: 10 }} />;
	};
	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" />
			<View style={styles.header}>
				<View style={{ height: '65%' }}>
					<ImageBackground
						source={require('../assets/asset/images/header_message.png')}
						style={styles.backgroundImage}
						resizeMode={'stretch'}
					>
						<View style={styles.ImageBackgroundContainer}>
							<View style={styles.logo}>
								<Image
									source={require('../assets/asset/images/avatar_default.png')}
									style={{ width: 80, height: 80 }}
								/>
							</View>
							<View style={styles.user}>
								<Text
									numberOfLines={1}
									style={styles.user_name}
								>
									Hello
								</Text>
								<View style={styles.action}>
									<TouchableOpacity style={styles.icon}>
										<AntDesign
											name="scan1"
											color="white"
											size={20}
										/>
									</TouchableOpacity>
									<TouchableOpacity style={styles.icon}>
										<AntDesign
											name="scan1"
											color="white"
											size={20}
										/>
									</TouchableOpacity>
									<TouchableOpacity style={styles.icon}>
										<AntDesign
											name="scan1"
											color="white"
											size={20}
										/>
									</TouchableOpacity>
									<TouchableOpacity style={styles.icon}>
										<AntDesign
											name="scan1"
											color="white"
											size={20}
										/>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</ImageBackground>
				</View>
			</View>
			<View style={styles.footer}>
				<FlatList
					data={data}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
					ItemSeparatorComponent={ItemSeparatorComponent}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	header: {
		height: '35%'
	},
	footer: {
		height: '65%'
	},
	backgroundImage: {
		flex: 1,
		width: '100%',
		height: '100%'
	},
	ImageBackgroundContainer: {
		flex: 1,
		flexDirection: 'row',
		marginTop: '8%'
	},
	logo: {
		flex: 1,
		marginLeft: '1%',
		alignItems: 'center'
	},
	user: {
		flex: 2,
		alignItems: 'center'
	},
	user_name: {
		color: 'yellow',
		fontWeight: 'bold',
		fontSize: 18
	},
	action: {
		flexDirection: 'row',
		marginTop: 5
	},
	icon: {
		marginRight: 10
	},
	item_container: {
		flexDirection: 'row',
		paddingHorizontal: 20
	},
	item_message: {
		flex: 1,
		flexDirection: 'row',
		paddingLeft: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#f2f2f2'
	},
	num_readed: {
		height: 20,
		backgroundColor: 'red',
		paddingHorizontal: 5,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 50,
		marginTop: 3
	}
});
