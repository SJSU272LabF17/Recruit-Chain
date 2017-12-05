import React, {Component} from 'react';
import { Route, Link,Switch } from 'react-router-dom';
import * as API from '../api/API';
import * as APInode from '../api/APInode';
import ReactDOM from 'react-dom';

class Testlab extends Component {
  state={
    name:'',location:'',id:'',candidateid:'',
    message:'',message1:'',labid:'',date:'',
    listall:[],type:'',username:'',password:''
  };

  addLab = (x) => {
    var z={
  "$class": "org.acme.workvalid.DrugTestCenter",
  "dtcId": x.name+"."+x.location,
  "dtcName": x.name,
  "dtcLocation": x.location
};
var u={username:x.name+"."+x.location, password: x.password, type:3}
  API.newlab(z)
      .then((output) => {
          this.setState({message:'Comapny added.'});
          ReactDOM.findDOMNode(this.refs.ref1).value = "";
          ReactDOM.findDOMNode(this.refs.ref2).value = "";
          ReactDOM.findDOMNode(this.refs.ref3).value = "";
      });
      APInode.newUser(u)
                          .then((output) => {
                              console.log("OUTPUT: ");
                          });
  };



/*
componentWillMount(){
  this.setState({companyname:'',companylocation:'',message:''});
 var list=[]
  API.allcompanies()
      .then((output) => {
        for(var i=0;i<output.length;i++){
          list.push(output[i].CompanyName);
          console.log("OUTPUT: "+output[i].CompanyName);
        }
        this.setState({listall:list});
      });
}*/

    render() {
        return (
          <div className="w3-container w3-panel  w3-border box" style={{width: '38%'}}>
          <div className="w3-panel w3-blue">
          <h3 style={{textAlign:'center'}}>SIGN UP - Test Lab</h3>
          </div>

  <form>
  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Name:</div>
   <div className="col-sm-10 col-md-10 col-lg-10">
   <input type="text" className="w3-input" ref="ref1" onChange={(event)=>{
                                this.setState({name: event.target.value});}} /></div>
  </div>

  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Location:</div>
   <div className="col-sm-10 col-md-10 col-lg-10">
   <input type="text" className="w3-input" ref="ref2" onChange={(event)=>{
                                this.setState({location: event.target.value});}} /></div>
  </div>

  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Password:</div>
   <div className="col-sm-10 col-md-10 col-lg-10">
   <input type="password" className="w3-input" ref="ref3" onChange={(event)=>{
                                this.setState({password: event.target.value});}} /></div>
  </div>

  <div className="form-group row">
  <div className="col-sm-4 col-md-4 col-lg-4">
  <button type="button" className="w3-input" className="w3-button w3-blue w3-border w3-border-white w3-round-large" onClick={() => this.addLab(this.state)}>Submit</button>
  </div>
  </div>
  </form>
<font color="red">{this.state.message}</font>

         </div>
        );
    }
}

export default Testlab;
