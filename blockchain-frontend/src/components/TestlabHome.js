import React, {Component} from 'react';
import { Route, Link,Switch } from 'react-router-dom';
import * as API from '../api/API';
import ReactDOM from 'react-dom';

class TestlabHome extends Component {
  state={
    name:'',location:'',id:'',
    message:'',username:'',password:'',
    message1:'',
    listall:[]
  };



addJobProfile = (x) => {
  var z={
  "$class": "org.acme.workvalid.JobProfile",
  "jobId": x.candidateid+"."+x.companyid,
  "role": x.role,
  "skillSet": x.skills,
  "joiningDate": x.joining,
  "leavingDate": "null",
  "currEmployment": "yes",
  "candidate": x.candidateid,
  "company": x.companyid
};
API.newjob(z)
    .then((output) => {
        console.log("OUTPUT: "+output.CompanyName);
        this.setState({message:'Comapny added.'});
        ReactDOM.findDOMNode(this.refs.cn).value = "";
        ReactDOM.findDOMNode(this.refs.cl).value = "";
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
          <h3>Add Report</h3>
          <form>
          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Date:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="text" ref="nm" onChange={(event)=>{
                                        this.setState({date: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Type:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="text" ref="loc" onChange={(event)=>{
                                        this.setState({type: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Candidate ID:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="text" ref="loc" onChange={(event)=>{
                                        this.setState({candidateid: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Lab ID:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="text" ref="loc" onChange={(event)=>{
                                        this.setState({labid: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-4 col-md-4 col-lg-4">
          <button type="button" className="w3-button w3-dark-grey" onClick={() => this.addReport(this.state)}>Submit</button>
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
            <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.addLab(this.state)}>Submit</button></div>
              </div>
              </form>
         </div>
        );
    }
}

export default TestlabHome;
