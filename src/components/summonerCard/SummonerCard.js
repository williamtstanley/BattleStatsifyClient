import React from 'react';
import { connect } from 'react-redux';

@connect(
	(state) => {
		return {
			summoner: state.summoner,
		};
	}
)
export default class TabPage extends React.Component {
	render() {
		return (
			<div>
        Summoner card goes here
			</div>
		);
	}
}
