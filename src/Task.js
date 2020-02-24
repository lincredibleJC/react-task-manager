import React from 'react';


class Column extends React.Component {
	render(){
		return this.props.task.content
	}
}

export default Column;