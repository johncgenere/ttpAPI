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
      <div className="ui card">
        <div className="content">
          <div className="header">{this.state.locationText}</div>
        </div>
        <div className="content">
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <div className="summary">
                   State: {this.state.state}
                </div>
              </div>
            </div>
            <div className="event">
              <div className="content">
                <div className="summary">
                   Location: ({this.state.lat}, {this.state.long})
                </div>
              </div>
            </div>
            <div className="event">
              <div className="content">
                <div className="summary">
                   Population(estimated): {this.state.population}
                </div>
              </div>
            </div>
            <div className="event">
              <div className="content">
                <div className="summary">
                   Total Wages: {this.state.wages}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
