import React, {Component} from 'react';
import { Route, Link,Switch } from 'react-router-dom';
import * as API from '../api/API';
import ReactDOM from 'react-dom';

class PolicedeptHome extends Component {
  state={
    name:'',location:'',id:'',
    message:'',username:'',password:'',
    message1:'',
    listall:[], candidateid:''
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

updatePoliceHistory = (x) => {
  var z={
    candidateID : x.candidateid,
    pvId : this.props.user
  };

  API.updatePoliceHistory(z)
      .then((output) => {
          console.log("OUTPUT: "+output.CompanyName);
          this.setState({message:'View Candidate History'});
      });


};

    render() {
        return (
          <div className="w3-container w3-panel">
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
          <div className="col-sm-2 col-md-2 col-lg-2">Police Dept:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="text" ref="loc" onChange={(event)=>{
                                        this.setState({policeid: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-4 col-md-4 col-lg-4">
          <button type="button" className="w3-button w3-dark-grey" onClick={() => this.addRecord(this.state)}>Submit</button>
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
            <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.viewCandidatePoliceHistory(this.state)}>Submit</button></div>
              </div>
              </form>


         <h3>Modify Police History</h3>
         <form>
         <div className="form-group row">
         <div className="col-sm-2 col-md-2 col-lg-2">Enter Candidate ID:</div>
         <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="id" onChange={(event)=>{this.setState({candidateid: event.target.value});}} /></div>
       </div>
       <div className="form-group row">
         <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.updatePoliceHistory(this.state)}>Submit</button></div>
           </div>
           </form>
                  </div>

        );
    }
}

export default PolicedeptHome;
