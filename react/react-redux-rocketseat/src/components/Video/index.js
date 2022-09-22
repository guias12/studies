import React, { Component } from 'react';
import { connect } from 'react-redux';

const Video = ({ activeLesson, activeModule}) => (
	<div>
		<strong>Modulo { activeModule.title }</strong>
		<br />
		<span>Aula { activeLesson.title }</span>
	</div>
)

export default connect(state => ({
	activeModule: state.activeModule,
	activeLesson: state.activeLesson,
}))(Video);