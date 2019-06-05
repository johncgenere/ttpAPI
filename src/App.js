import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class FormEdit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			zip:this.props.zip,
			results:this.props.results
		}	

		this.Submit=this.Submit.bind(this);
		this.modZip=this.modZip.bind(this);
	}


	Submit(event){
		event.preventDefault();
		fetch('http://ctp-zip-api.herokuapp.com/zip/'+this.state.zip)
			.then(function(response){
				return response.json();
			})
			.then(function(json){
				console.log(JSON.stringify(json))
			})
			.catch(function(err) {
				console.log(err);
			});
	}


	modZip(event){
		this.setState({zip:event.target.value})
		console.log(this.state.zip);
	}
	

    render() {
				return(<form>
				  Zip Code:
				  <input type="text" onChange={this.modZip}></input>
				  <button onClick={this.Submit}>Submit</button>
				</form> )
	}
}


class App extends Component {
	render() {
		return <div className="container">
		<FormEdit/>
		</div>
	}
}

export default App;
