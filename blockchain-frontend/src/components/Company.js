import React, {Component} from 'react';
import { Route, Link,Switch } from 'react-router-dom';
import * as API from '../api/API';
import * as APInode from '../api/APInode';
import ReactDOM from 'react-dom';
import Home from './CompanyHome';

class Company extends Component {
  state={
    name:'',location:'',id:'',
    message:'',username:'',password:'',
    isLogged:false,message1:'',
    listall:[]
  };

addCompany = (x) => {
  var z={
  "$class": "org.acme.workvalid.Company",
  "companyId": x.name+"."+x.location,
  "companyName": x.name,
  "companyLocation": x.location
};
var u={username:x.name+"."+x.location, password: x.password, type:1}
API.newcompany(z)
    .then((output) => {
        console.log("OUTPUT: "+output.CompanyName);
        this.setState({message:'Comapny added.'});
        // ReactDOM.findDOMNode(this.refs.cn).value = "";
        // ReactDOM.findDOMNode(this.refs.cl).value = "";
    });
APInode.newUser(u)
        .then((output) => {
            console.log("OUTPUT: "+output.CompanyName);
        });
};


    render() {
        return (
          <div className="w3-container w3-panel  w3-border box" style={{width: '38%'}}>
          <div className="w3-panel w3-green">
          <h3 style={{textAlign:'center'}}>SIGN UP - Company</h3>
          </div>
  <form>
  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Name:</div>
   <div className="col-sm-10 col-md-10 col-lg-10">
   <input type="text" className="w3-input" ref="cn" onChange={(event)=>{
                                this.setState({name: event.target.value});}} /></div>
  </div>

  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Location:</div>
   <div className="col-sm-10 col-md-10 col-lg-10">
   <input type="text" className="w3-input" ref="cl" onChange={(event)=>{
                                this.setState({location: event.target.value});}} /></div>
  </div>

  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Password:</div>
   <div className="col-sm-10 col-md-10 col-lg-10">
   <input type="password" className="w3-input" ref="ln" onChange={(event)=>{
                                this.setState({password: event.target.value});}} /></div>
  </div>

  <div className="form-group row">
  <div className="col-sm-4 col-md-4 col-lg-4">
  <button type="button" className="w3-button w3-green w3-border w3-border-white w3-round-large" onClick={() => this.addCompany(this.state)}>Submit</button>
  </div>
  </div>
  </form>
<font color="red">{this.state.message}</font>


</div>

        );
    }
}

export default Company;
