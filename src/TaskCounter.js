import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	border-style: ridge;
	border: 1px solid lightgrey;
	border-radius: 2px;
	background-color: white;
	margin: 15px;
	padding: 15px;
	text-align: center;
`;

class TaskCounter extends React.Component{
	render(){
		return (
			<Container>
				<p>{this.props.count}</p>
				<p>Projects</p>
			</Container>
		);
	}
} 

export default TaskCounter;
