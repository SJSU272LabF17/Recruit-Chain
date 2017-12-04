import React, {Component} from 'react';
import { Route, Link,Switch } from 'react-router-dom';
import * as API from '../api/API';
import ReactDOM from 'react-dom';

class EduInstHome extends Component {
  state={
    name:'',location:'',id:'',
    message:'',username:'',password:'',
    message1:'',
    listall:[], candidateid:''
  };


  addRecord = (x) => {
    var z={
  "$class": "org.acme.workvalid.EducationRecord",
  "eduId": x.instid+"."+x.candidateid,
  "institutionId": x.instid,
  "EduLevel": x.level,
  "graduateDate": "null",
  "grade": "null",
  "candidate": x.candidateid,
  "edu":x.instid
};
  API.addEduReport(z)
      .then((output) => {
          //console.log("OUTPUT: "+output.CompanyName);
          this.setState({message:'Edu record added.'});
          ReactDOM.findDOMNode(this.refs.nm).value = "";
          ReactDOM.findDOMNode(this.refs.loc).value = "";
      });
  };

updateEducationHistory = (x) => {
  var z={
    candidateID : x.candidateid,
    education_instituteID : this.props.user
  };

  API.updateEducationHistory(z)
      .then((output) => {
          console.log("OUTPUT: "+output.CompanyName);
          this.setState({message:'View Candidate History'});
      });


};


    render() {
        return (
          <div className="w3-container w3-panel">



          <h3>Add Education Recoed</h3>
          <form>
          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Institute ID:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="text" ref="nm" onChange={(event)=>{
                                        this.setState({instid: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Education Level:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="text" ref="loc" onChange={(event)=>{
                                        this.setState({level: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Candidate ID:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="text" ref="loc" onChange={(event)=>{
                                        this.setState({candidateid: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-4 col-md-4 col-lg-4">
          <button type="button" className="w3-button w3-dark-grey" onClick={() => this.addRecord(this.state)}>Submit</button>
          </div>
          </div>
          </form>
          <font color="red">{this.state.message1}</font>

          <br />
            <h3>View Candidate History</h3>
              <form>
              <div className="form-group row">
              <div className="col-sm-2 col-md-2 col-lg-2">Enter Candidate ID:</div>
              <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="id" onChange={(event)=>{this.setState({candidateid: event.target.value});}} /></div>
          </div>
          <div className="form-group row">
              <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.viewCandidateEducationHistory(this.state)}>Submit</button></div>
                </div>
                </form>

                <h3>Modify Education History</h3>
                <form>
                <div className="form-group row">
                <div className="col-sm-2 col-md-2 col-lg-2">Enter Candidate ID:</div>
                <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="id" onChange={(event)=>{this.setState({candidateid: event.target.value});}} /></div>
              </div>
              <div className="form-group row">
                <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.updateEducationHistory(this.state)}>Submit</button></div>
                  </div>
                  </form>


         </div>
        );
    }
}

export default EduInstHome;
