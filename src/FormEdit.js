import React,{Component} from 'react';

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
   let results;
   event.preventDefault();
   fetch('http://ctp-zip-api.herokuapp.com/zip/'+this.state.zip)
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       results = JSON.parse(JSON.stringify(json));
       console.log(results);
     })
     .catch(function(err) {
       console.log(err);
     });
 }


 onModZip = (event) => {
   this.setState({zip:event.target.value})
   console.log(this.state.zip);
 }


render(){
  {console.log(this.state.results)}
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
