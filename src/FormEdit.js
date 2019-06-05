import React,{Component} from 'react';
import axios from 'axios';

class FormEdit extends Component {
 constructor(props) {
   super(props);
   this.state = {
     zip: '',
     results: []
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
  return(
    <form>
      Zip Code:
      <input type="text" onChange={this.onModZip}></input>
      <button onClick={this.onSubmit}>Submit</button>
    </form>
  );
 }
};

export default FormEdit;
