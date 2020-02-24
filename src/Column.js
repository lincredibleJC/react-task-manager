import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Container = styled.div`
	margin: 8px;
	border: 1px solid lightgrey;
	border-radius: 2px;
`;

const Title = styled.h3`
	padding:8px;
`;

const TaskList = styled.div`
	padding:8px;
`;

class Column extends React.Component {
	//{innerRef}					//https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md
	//{...provided.droppableProps}	//props to apply to component to make it droppable
	//{provided.placeholder}			//increase available space in droppable during drag
	render() {
		return(
			<Container>
				<Title>{this.props.column.title}</Title>
				<Droppable droppableId={this.props.column.id}>
					{(provided) =>(
						<TaskList
							ref={provided.innerRef}
							innerRef={provided.innerRef}
							{...provided.droppableProps}
						>
							{this.props.tasks.map((task,index) => <Task key={task.id} task={task} index={index} />)}
							{provided.placeholder}
						</TaskList>
					)}
				</Droppable>
			</Container>
		);
	}
}

export default Column;