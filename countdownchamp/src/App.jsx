import React from "react";
import "./App.css";
import Clock from './Clock'

class App extends React.Component{
	constructor(props) {
		super();
		this.state = {
			deadline: 'December 25, 2017',
			newDeadline: ''
		}
	}

	changeDeadline(){
		this.setState({deadline: this.state.newDeadline});
	}

	render() {
		return (
			<div className="App">
				<div className="App-title">CountDown to {this.state.deadline}</div>
				<Clock deadline={this.state.deadline}/>
				<div>
					<input placeholder="new date" onChange={event => this.setState({newDeadline: event.target.value})}/>
					<button onClick={this.changeDeadline.bind(this)}>Submit</button>
				</div>
			</div>
			);
		
	}
}

export default App;