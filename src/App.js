import React , {Component} from 'react';
import logo from './logo.svg';
import FormEdit from './FormEdit';
import './App.css';

class App extends Component {
	render() {
		return(
			<div className="container">
				<FormEdit/>
			</div>
		);
	}
}

export default App;
