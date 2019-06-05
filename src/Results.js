import React, {Component} from 'react';

class Results extends Component{
  constructor(props){
    super(props);

    this.state = {
      locationText: this.props.locationText,
      state: this.props.state,
      lat: this.props.lat,
      long: this.props.long,
      population: this.props.population,
      wages: this.props.wages
    }
  }

  render(){
    return(
      <div>
        <h1>{this.state.locationText}</h1>
        <h1>{this.state.state}</h1>
        <h1>{this.state.lat}</h1>
        <h1>{this.state.long}</h1>
        <h1>{this.state.population}</h1>
        <h1>{this.state.wages}</h1>
      </div>
    );
  }
}

export default Results;
