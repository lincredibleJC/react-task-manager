import React from 'react';
import ReactDOM from 'react-dom';
@import '/path/to/reset-css/reset.css';
import Column from './Column';

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
	}

	render(){
		return this.state.columnOrder.map((columnId) => {
			const column = this.state.columns[columnId];
			const tasks = column.taskIds.map((taskId)=> this.state.tasks[taskId]);

			return <Column key={column.id} column={column} tasks={tasks} />
		})
	}

}

ReactDOM.render(<App />, document.getElementById('root'));
