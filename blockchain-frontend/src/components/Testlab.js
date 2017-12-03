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
  "$class": "org.acme.workvalidation.DrugTestCenter",
  "dtcId": x.name+"."+x.location,
  "dtcName": x.name,
  "dtcLocation": x.location
};

  API.newlab(z)
      .then((output) => {
          //console.log("OUTPUT: "+output.CompanyName);
          this.setState({message:'Comapny added.'});
          ReactDOM.findDOMNode(this.refs.nm).value = "";
          ReactDOM.findDOMNode(this.refs.loc).value = "";
      });
  };


  addReport = (x) => {
    var z=  {
        "$class": "org.acme.workvalid.DrugTestReport",
        "dtrId": x.labid+"."+x.candidateid,
        "dtrDate": x.date,
        "dtrType": x.type,
        "dtrResult": "null",
        "candidate": x.candidateid,
        "dtc": x.labid
      };

  API.addDrugReport(z)
      .then((output) => {
          //console.log("OUTPUT: "+output.CompanyName);
          this.setState({message1:'Report added.'});
          ReactDOM.findDOMNode(this.refs.nm).value = "";
          ReactDOM.findDOMNode(this.refs.loc).value = "";
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
  <h3>Sign up - New Test Lab</h3>
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
  <button type="button" className="w3-button w3-dark-grey" onClick={() => this.addLab(this.state)}>Submit</button>
  </div>
  </div>
  </form>
<font color="red">{this.state.message}</font>
         </div>
        );
    }
}

export default Testlab;
