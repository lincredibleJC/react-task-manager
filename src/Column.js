import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import TaskCounter from './TaskCounter';
import Task from './Task';

const Container = styled.div`
	margin: 15px;
	border: 1px solid lightgrey;
	border-radius: 2px;
	width: 200px;

	display: flex;
	flex-direction: column;
	flex: 1;
`;

const ColumnHeader = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.h3`
	font-size: 32px;
	font-style: bold;
	margin: 15px;
	padding: 15px;
	text-align: center;
`;

const TaskList = styled.div`
	padding: 15px;
	flex-grow: 1;
	min-height: 100px;
`;

class Column extends React.Component {
	//{innerRef}					//https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md
	//{...provided.droppableProps}	//props to apply to component to make it droppable
	//{provided.placeholder}			//increase available space in droppable during drag
	render() {
		return(
			<Container>
				<ColumnHeader>
					<Title>{this.props.column.title}</Title>
					<TaskCounter count={this.props.tasks.length}></TaskCounter>
				</ColumnHeader>
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