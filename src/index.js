import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/reset-css/reset.css';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';

const Container = styled.div`
	display: flex;
`;

class App extends React.Component {
	constructor(props){
		super(props);

		const initialData = {
			tasks: {
				'task-1': {id: 'task-1', content: "take out the trash"},
				'task-2': {id: 'task-2', content: "watch a movie"},
				'task-3': {id: 'task-3', content: "do my homework"},
				'task-4': {id: 'task-4', content: "clean the sink"},
				'task-5': {id: 'task-5', content: "charge my phone"},
				'task-6': {id: 'task-6', content: "cook dinner"},
			},
			columns: {
				'column-1':{
					id: 'column-1',
					title: 'To do',
					taskIds: ['task-1','task-2'],
				},
				'column-2':{
					id: 'column-2',
					title: 'In Progress',
					taskIds: ['task-3','task-4'],
				},
				'column-3':{
					id: 'column-3',
					title: 'Done',
					taskIds: ['task-5','task-6'],
				},
			},
			columnOrder: ['column-1','column-2','column-3'],
		};

		this.state = initialData;

		this.onDragEnd = this.onDragEnd.bind(this);	// because ES6 does not autobind
	}

	onDragEnd(result){
		const {destination, source, draggableId} = result;

		if (!destination){
			return;
		}

		if (destination.droppableId === source.droppableId && destination.index === source.index){
			return;
		}

		const column = this.state.columns[source.droppableId];
		const newTaskIds = Array.from(column.taskIds);
		newTaskIds.splice(source.index, 1);
		newTaskIds.splice(destination.index, 0, draggableId);

		const newColumn = {
			...column,
			taskIds: newTaskIds,
		};

		const newState = {
			...this.state,
			columns:{
				...this.state.columns,
				[newColumn.id]: newColumn,
			},
		};

		this.setState(newState);
	}

	render(){
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<Container>
				{this.state.columnOrder.map((columnId) => {
					const column = this.state.columns[columnId];
					const tasks = column.taskIds.map((taskId)=> this.state.tasks[taskId]);

					return <Column key={column.id} column={column} tasks={tasks} />;
				})}
				</Container>
			</DragDropContext>
		);
	}

}

ReactDOM.render(<App />, document.getElementById('root'));
