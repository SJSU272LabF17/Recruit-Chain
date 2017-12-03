import React, {Component} from 'react';
import { Route, Link,Switch } from 'react-router-dom';
import * as API from '../api/API';
import ReactDOM from 'react-dom';

class Policedept extends Component {
  state={
name:'',location:'',candidateid:'',date:'',details:'',
    message:'',message1:'',username:'',password:'',
    listall:[]
  };

  addDept = (x) => {
    var z={
  "$class": "org.acme.workvalidation.PoliceVerification",
  "pvId": x.name+"."+x.location,
  "pvName": x.name,
  "pvLocation": x.location
};
  API.newdept(z)
      .then((output) => {
          //console.log("OUTPUT: "+output.CompanyName);
          this.setState({message:'Police dept added.'});
          ReactDOM.findDOMNode(this.refs.nm).value = "";
          ReactDOM.findDOMNode(this.refs.loc).value = "";
      });
  };

  addRecord = (x) => {
    var z={
  "$class": "org.acme.workvalid.PoliceverificationReport",
  "pvrId": x.policeid+"."+x.candidateid,
  "pvrDate": x.date,
  "pvrDetails": x.details,
  "candidate": x.candidateid,
  "policeVer":x.policeid
};
  API.addPoliceReport(z)
      .then((output) => {
          //console.log("OUTPUT: "+output.CompanyName);
          this.setState({message1:'Police record added.'});
          ReactDOM.findDOMNode(this.refs.nm).value = "";
          ReactDOM.findDOMNode(this.refs.loc).value = "";
      });
  };

/*componentWillMount(){
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
  <h3>Sign up</h3>

  <form>
  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Name:</div>
   <div className="col-sm-10 col-md-10 col-lg-10">
   <input type="text" ref="nm" onChange={(event)=>{
                                this.setState({name: event.target.value});}} /></div>
  </div>

  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Location:</div>
   <div className="col-sm-10 col-md-10 col-lg-10">
   <input type="text" ref="loc" onChange={(event)=>{
                                this.setState({location: event.target.value});}} /></div>
  </div>

  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Password:</div>
   <div className="col-sm-10 col-md-10 col-lg-10">
   <input type="password" ref="ln" onChange={(event)=>{
                                this.setState({password: event.target.value});}} /></div>
  </div>

  <div className="form-group row">
  <div className="col-sm-4 col-md-4 col-lg-4">
  <button type="button" className="w3-button w3-dark-grey" onClick={() => this.addDept(this.state)}>Submit</button>
  </div>
  </div>
  </form>
<font color="red">{this.state.message}</font>

<h3>Login</h3>
<form>
<div className="form-group row">
<div className="col-sm-2 col-md-2 col-lg-2">Username:</div>
 <div className="col-sm-10 col-md-10 col-lg-10">
 <input type="text" ref="fn" onChange={(event)=>{
                              this.setState({username: event.target.value});}} /></div></div>
<div className="form-group row">
<div className="col-sm-2 col-md-2 col-lg-2">Password:</div>
 <div className="col-sm-10 col-md-10 col-lg-10">
 <input type="password" ref="ln" onChange={(event)=>{
                              this.setState({password: event.target.value});}} /></div></div>
<div className="form-group row">
<div className="col-sm-4 col-md-4 col-lg-4">
<button type="button" className="w3-button w3-dark-grey" onClick={() => this.checkUser(this.state)}>Submit</button>
</div>
</div>
</form>

<h3>Add new record</h3>

<form>
<div className="form-group row">
<div className="col-sm-2 col-md-2 col-lg-2">Date:</div>
 <div className="col-sm-10 col-md-10 col-lg-10">
 <input type="text" ref="nm" onChange={(event)=>{
                              this.setState({date: event.target.value});}} /></div>
</div>

<div className="form-group row">
<div className="col-sm-2 col-md-2 col-lg-2">Details:</div>
 <div className="col-sm-10 col-md-10 col-lg-10">
 <input type="text" ref="loc" onChange={(event)=>{
                              this.setState({details: event.target.value});}} /></div>
</div>

<div className="form-group row">
<div className="col-sm-2 col-md-2 col-lg-2">Candidate:</div>
 <div className="col-sm-10 col-md-10 col-lg-10">
 <input type="text" ref="loc" onChange={(event)=>{
                              this.setState({candidateid: event.target.value});}} /></div>
</div>

<div className="form-group row">
<div className="col-sm-4 col-md-4 col-lg-4">
<button type="button" className="w3-button w3-dark-grey" onClick={() => this.addDept(this.state)}>Submit</button>
</div>
</div>
</form>
<font color="red">{this.state.message1}</font>



<br/>
  <h3>View Candidate History</h3>
  <form>
  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Enter Candidate ID:</div>
  <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="id" onChange={(event)=>{this.setState({id: event.target.value});}} /></div>
</div>
<div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.addDept(this.state)}>Submit</button></div>
    </div>
    </form>
         </div>
        );
    }
}

export default Policedept;
