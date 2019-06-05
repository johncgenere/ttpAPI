import React,{Component} from 'react';
import Results from './Results';
import axios from 'axios';
import './FormEdit.css'

class FormEdit extends Component {
 constructor(props) {
   super(props);
   this.state = {
     zip: '',
     results: [],
   };

   this.onSubmit = this.onSubmit.bind(this);
   this.onModZip = this.onModZip.bind(this);
 }

 onSubmit = (event) => {
   let results = {};
   this.setState({results});
   event.preventDefault();
   axios.get('http://ctp-zip-api.herokuapp.com/zip/'+this.state.zip)
     .then(response => {
       let results = response.data;
       this.setState({results})
     })
     .catch(err => {
       console.log(err);
     });
 }


 onModZip = (event) => {
   this.setState({zip:event.target.value})
 }


  render(){
    let res = []
    for (var i = 0; i < this.state.results.length; i++) {
      let currState = this.state.results[i];
      res.push(
                <Results
                  locationText={currState.LocationText}
                  state={currState.State}
                  lat={currState.Lat}
                  long={currState.Long}
                  population={currState.EstimatedPopulation}
                  wages={currState.TotalWages}
                />
              );
    }

    return(
      <div>
          Zip Code:
          <div className="ui input" style={{margin: '3%', height: '30px', width: '200px'}}>
            <input type="text" placeholder="Search..." onChange={this.onModZip} style={{fontSize: '15px'}}/>
          </div>
          <button className="ui button" onClick={this.onSubmit}>Submit</button>

        <div className="res" style={{marginTop: '3%', marginLeft: '12.5%', marginBottom: '3%'}}>
          {res}
        </div>
      </div>
    );
   }
};

export default FormEdit;
