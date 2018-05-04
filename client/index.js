import React, { Component } from 'react';
import {
	Platform,
	StatusBar,
	NativeModules,
	View,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import ScreenLogin from './components/ScreenLogin';
import ScreenMain from './components/ScreenMain';
import ScreenRegister from './components/ScreenRegister';
import ScreenColorPicker from './components/ScreenColorPicker';
import './global.js';

export default Luciole = StackNavigator(
	{
		Login: {screen: ScreenLogin},
		Register: {screen: ScreenRegister},
		Main: {screen: ScreenMain},
		ColorPicker: {screen: ScreenColorPicker},
	},
	{
		headerMode: 'screen',
		navigationOptions: {
			header: (
				<View>
					<View
						style={{
							zIndex: 99,
							height: Platform.OS === 'ios' ? 20 : 0,
							backgroundColor: 'black',
						}}
						/>
					<StatusBar
						barStyle='light-content'
						/>
				</View>
			),
		},
	}
);