import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin: 15px;
`;

class TaskForm extends React.Component{
	constructor(props){
		super(props);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e){
		if (this.input.value !== ""){
			this.props.onFormSubmit(this.input.value)
		}

		this.input.value = "";
		e.preventDefault();
	}


	render(){
		return (
			<Container>
				<form onSubmit={this.handleSubmit}>
	    			<label>
	    				Add Project
	    				<input ref={(a) => this.input = a}
	    					placeholder="Enter Item">
	    				</input>
	    			</label>
	    			<button type="submit">add</button>
	    		</form>
    		</Container>			
		)
	}

}

export default TaskForm;