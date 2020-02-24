import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';


const Container = styled.div`
	border: 1px solid lightgrey;
	border-radius: 2px;
	padding: 8px;
	margin-bottom: 8px;
`;

class Column extends React.Component {
	//{...provided.draggableProps}	//makes component draggable
	//{...provided.dragHandleProps}	//makes draggable when clicking anywhere on component 
	render(){
		return (
			<Draggable draggableId={this.props.task.id} index={this.props.index}>
			{(provided) => (
				<Container
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					innerRef={provided.innerRef}
				>
					{this.props.task.content}
				</Container>
			)}				
			</Draggable>
		);
	}
}

export default Column;