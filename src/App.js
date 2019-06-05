import React , {Component} from 'react';
import FormEdit from './FormEdit';
import './App.css';

class App extends Component {
	render() {
		return(
			<div className="App">
				<div className="App-header">
					<FormEdit/>
				</div>
			</div>
		);
	}
}

export default App;
