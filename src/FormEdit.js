import React,{Component} from 'react';
import Results from './Results';
import axios from 'axios';

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
   console.log(this.state.zip);
 }


  render(){
    let res = []
    for (var i = 0; i < this.state.results.length; i++) {
      console.log(this.state.results[i]);
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
        <form>
          Zip Code:
          <input type="text" onChange={this.onModZip}></input>
          <button onClick={this.onSubmit}>Submit</button>
        </form>
        {res}
      </div>
    );
   }
};

export default FormEdit;
