import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/reset-css/reset.css';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import TaskForm from './TaskForm';
import TaskCounter from './TaskCounter';

const TaskManagerApp = styled.div`
  	background-color: grey;
  	min-height: 100vh;
  	display: flex;
  	flex-direction: column;
  	align-items: center;
  	justify-content: center;
  	color: black;
`;

const TaskManagerTitle = styled.h1`
	border:solid;
	font-size: 32px;
	margin:15px;
	padding:15px;
`;

const TaskManagerBody = styled.div`
	border: 2px solid;
	border-radius: 5px
	margin: 15px;
	
	width: 80%;	

	display: flex;
	flex-direction: column;
`;

const LoaderAndCounter= styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const ColumnContainer = styled.div`
	display: flex;
	flex: 1;
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
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.onDragEnd = this.onDragEnd.bind(this);
	}

	onFormSubmit(e){
		var newIndex = Date.now().toString();
		var newTask = {
			id: newIndex,
			content: e,
		};

		const newColumn = this.state.columns['column-1'];
		newColumn.taskIds = Array.from(newColumn.taskIds).concat(newIndex);

		const newState = {
			...this.state,
			tasks:{
				...this.state.tasks,
				[newIndex]:newTask,
			},
			columns:{
				...this.state.columns,
				[newColumn.id]: newColumn,
			},
		};

		this.setState(newState);		
	}


	onDragEnd(result){
		const {destination, source, draggableId} = result;

		if (!destination){
			return;
		}

		if (destination.droppableId === source.droppableId && destination.index === source.index){
			return;
		}

		const sourceColumn = this.state.columns[source.droppableId];
		const destinationColumn = this.state.columns[destination.droppableId];

		if (sourceColumn === destinationColumn){
			const newTaskIds = Array.from(sourceColumn.taskIds);
			newTaskIds.splice(source.index, 1);
			newTaskIds.splice(destination.index, 0, draggableId);

			const newColumn = {
				...sourceColumn,
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
		} else {
			const newSourceTaskIds = Array.from(sourceColumn.taskIds);
			newSourceTaskIds.splice(source.index,1);
			const newDestinationTaskIds = Array.from(destinationColumn.taskIds);
			newDestinationTaskIds.splice(destination.index,0,draggableId);

			const newSourceColumn = {
				...sourceColumn,
				taskIds: newSourceTaskIds,
			};

			const newDestinationColumn = {
				...destinationColumn,
				taskIds: newDestinationTaskIds,
			};

			const newState = {
				...this.state,
				columns:{
					...this.state.columns,
					[newSourceColumn.id]: newSourceColumn,
					[newDestinationColumn.id]: newDestinationColumn,
				},
			};

			this.setState(newState);
		}
	}

	render(){
		return (
			<TaskManagerApp>
				<TaskManagerTitle>React Task Manager App</TaskManagerTitle>
			    <TaskManagerBody>
					<LoaderAndCounter>
						<TaskForm onFormSubmit={this.onFormSubmit}></TaskForm>
						<TaskCounter count={Object.values(this.state.tasks).length}></TaskCounter>
					</LoaderAndCounter>
					
					<DragDropContext onDragEnd={this.onDragEnd}>
						<ColumnContainer>
						{this.state.columnOrder.map((columnId) => {
							const column = this.state.columns[columnId];
							const tasks = column.taskIds.map((taskId)=> this.state.tasks[taskId]);

							return <Column key={column.id} column={column} tasks={tasks} />;
						})}
						</ColumnContainer>
					</DragDropContext>
				</TaskManagerBody>
			</TaskManagerApp>
		);
	}

}

ReactDOM.render(<App />, document.getElementById('root'));
