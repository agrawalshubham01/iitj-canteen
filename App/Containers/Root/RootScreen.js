import React, { Component } from 'react';
import NavigationService from '../../Services/NavigationService';
import AppNavigator from '../../Navigators/AppNavigator';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Helpers } from '../../Theme';

class RootScreen extends Component {
	render() {
		return (
			<View style={Helpers.fill}>
				<AppNavigator
					ref={(navigatorRef) => {
						NavigationService.setTopLevelNavigator(navigatorRef);
					}}
				/>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RootScreen);
