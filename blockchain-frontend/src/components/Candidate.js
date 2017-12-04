import React, {Component} from 'react';
import { Route, Link,Switch } from 'react-router-dom';
import * as API from '../api/API';
import * as APInode from '../api/APInode';
import ReactDOM from 'react-dom';

class Candidate extends Component {
  state={
    fname:'',lname:'',email:'',dob:'',passport:'',addr:'',
    message:'',id:'',username:'',password:''
  };

  addCandidate = (x) => {
    var z={
  "$class": "org.acme.workvalid.Candidate",
  "candidateId": x.fname+"."+x.lname,
  "email": x.email,
  "firstName": x.fname,
  "lastName": x.lname,
  "address": x.addr,
  "passportNumber": x.passport,
  "dob": x.dob
};
var u={username:x.fname+"."+x.lname, password: x.password, type:1}
API.newcandidate(z)
      .then((output) => {
          //console.log("OUTPUT: "+output.CompanyName);
          this.setState({message:'Candidate added.'});
          ReactDOM.findDOMNode(this.refs.fn).value = "";
          ReactDOM.findDOMNode(this.refs.ln).value = "";
          ReactDOM.findDOMNode(this.refs.dob).value = "";
          ReactDOM.findDOMNode(this.refs.em).value = "";
          ReactDOM.findDOMNode(this.refs.prt).value = "";
          ReactDOM.findDOMNode(this.refs.adr).value = "";
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
          <div className="w3-container w3-panel">
  <h3>Sign up - New Candidate</h3>
  <form>
  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">First Name:</div>
   <div className="col-sm-10 col-md-10 col-lg-10">
   <input type="text" ref="fn" onChange={(event)=>{
                                this.setState({fname: event.target.value});}} /></div>
  </div>

  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Last Name:</div>
   <div className="col-sm-10 col-md-10 col-lg-10">
   <input type="text" ref="ln" onChange={(event)=>{
                                this.setState({lname: event.target.value});}} /></div>
  </div>

  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Date of Birth:</div>
   <div className="col-sm-10 col-md-10 col-lg-10">
   <input type="text" ref="dob" onChange={(event)=>{
                                this.setState({dob: event.target.value});}} /></div>
  </div>

  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Email:</div>
   <div className="col-sm-10 col-md-10 col-lg-10">
   <input type="text" ref="em" onChange={(event)=>{
                                this.setState({email: event.target.value});}} /></div>
  </div>

  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Passport:</div>
   <div className="col-sm-10 col-md-10 col-lg-10">
   <input type="text" ref="prt" onChange={(event)=>{
                                this.setState({passport: event.target.value});}} /></div>
  </div>

  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Address:</div>
   <div className="col-sm-10 col-md-10 col-lg-10">
   <input type="text" ref="adr" onChange={(event)=>{
                                this.setState({addr: event.target.value});}} /></div>
  </div>

  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Password:</div>
   <div className="col-sm-10 col-md-10 col-lg-10">
   <input type="password" ref="ln" onChange={(event)=>{
                                this.setState({password: event.target.value});}} /></div>
  </div>

  <div className="form-group row">
  <div className="col-sm-4 col-md-4 col-lg-4">
  <button type="button" className="w3-button w3-dark-grey" onClick={() => this.addCandidate(this.state)}>Submit</button>
  </div>
  </div>
  </form>
<font color="red">{this.state.message}</font>

         </div>
        );
    }
}

export default Candidate;
