import React, {Component} from 'react';
import { Route, Link,Switch } from 'react-router-dom';
import * as API from '../api/API';
import ReactDOM from 'react-dom';

class TestlabHome extends Component {
  state={
    name:'',location:'',id:'',
    message:'',username:'',password:'',
    message1:'',
    listall:[], candidateid:''
  };



    addReport = (x) => {
      var z=  {
          "$class": "org.acme.workvalid.DrugTestReport",
          "dtrId": x.labid+"."+x.candidateid+Math.floor((Math.random()*20)),
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

updateLabHistory = (x) => {
  var z={
    candidateID : x.candidateid,
    dtcId : this.props.user
  };

  API.updateLabHistory(z)
      .then((output) => {
          console.log("OUTPUT: "+output.CompanyName);
          this.setState({message:'View Candidate History'});
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
            <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="id" onChange={(event)=>{this.setState({candidateid: event.target.value});}} /></div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.viewCandidateLabHistory(this.state)}>Submit</button></div>
              </div>
              </form>


         <h3>Modify Lab History</h3>
         <form>
         <div className="form-group row">
         <div className="col-sm-2 col-md-2 col-lg-2">Enter Candidate ID:</div>
         <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="id" onChange={(event)=>{this.setState({candidateid: event.target.value});}} /></div>
       </div>
       <div className="form-group row">
         <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.updateLabHistory(this.state)}>Submit</button></div>
           </div>
           </form>
                    </div>
        );
    }
}

export default TestlabHome;
