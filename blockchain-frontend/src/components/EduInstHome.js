import React, {Component} from 'react';
import { Route, Link,Switch } from 'react-router-dom';
import * as API from '../api/API';
import ReactDOM from 'react-dom';

class EduInstHome extends Component {
  state={
    name:'',location:'',id:'',allHistory:[],grade:[],
    message:'',username:'',password:'',eduid:[],
    message1:'',candidateID:'',instId:'',gradDate:'',
    listall:[], candidateid:'',showForm:false,
    candHistory:[]
  };

  addRecord = (x) => {
    var z={
  "$class": "org.acme.workvalid.EducationRecord",
  "eduId":this.props.user+"."+x.candidateid+Math.floor((Math.random()*20)),
  "EduLevel": x.level,
  "graduateDate": "N/A",
  "grade": "N/A",
  "candidate": x.candidateid,
  "edu":this.props.user,
  "eduName": x.eduname
};
  API.addEduReport(z)
      .then((output) => {
          //console.log("OUTPUT: "+output.CompanyName);
          this.setState({message:'Edu record added.'});
      
      });
  };

  viewCandidateEducationHistory = (x) => {
    var z={
      candidateID : x.candidateid
    };
    API.viewEdHistory(z)
        .then((output) => {
            console.log("OUTPUT: "+output);
            ReactDOM.findDOMNode(this.refs.ref4).value = "";
            this.setState({message:'View Candidate History'});

            var temp=[];
            for(var i=0;i<output.length;i++)
            {
            temp=this.state.candHistory.concat(output[i]);
            this.setState({candHistory:temp});
            }
        });
  };

  updateEducationHistory = (x) => {
    var z={
      candidateID : x.candidateid,
      education_instituteID : this.props.user
    };
    API.updateEducationHistory(z)
        .then((output) => {
            this.setState({message:'View Candidate History'});
            ReactDOM.findDOMNode(this.refs.ref5).value = "";
            var temp=[];
            this.state.showForm=true;
            for(var i=0;i<output.length;i++)
            {
            temp=this.state.allHistory.concat(output[i]);
            this.setState({allHistory:temp});
            }
        });
  };

  updatedData=(d)=>{
    var z={
  "$class": "org.acme.workvalid.ChangeEducationRecords",
  "graduateDate": d.gradDate,
  "grade": d.grade,
  "newEduRecord": d.eduid,
  "transactionId": "",
  "timestamp": Date.now()
};
    API.updateEduRecord(z)
        .then((output) => {
            console.log("SUCCESS: ");
            //this.setState({message:'View Candidate History'});


        });
  };

    render() {
        return (
          <div className="w3-container w3-panel">
<button type="button" style={{color:"#F78536",background:"white"}} className="btn btn-primary" data-toggle="modal" data-target="#newModal">Add Record</button>

          <div className="modal fade" id="newModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header">
                          <button type="button" ref="closeLogin" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div className="modal-body">
                      <h3>Add Education Record</h3>
                      <form>
                      <div className="form-group row">
                      <div className="col-sm-2 col-md-2 col-lg-2">Institution Name:</div>
                       <div className="col-sm-10 col-md-10 col-lg-10">
                       <input type="text" ref="ref1" onChange={(event)=>{
                                                    this.setState({eduname: event.target.value});}} /></div>
                      </div>

                      <div className="form-group row">
                      <div className="col-sm-2 col-md-2 col-lg-2">Education Level:</div>
                       <div className="col-sm-10 col-md-10 col-lg-10">
                       <input type="text" ref="ref2" onChange={(event)=>{
                                                    this.setState({level: event.target.value});}} /></div>
                      </div>

                      <div className="form-group row">
                      <div className="col-sm-2 col-md-2 col-lg-2">Candidate ID:</div>
                       <div className="col-sm-10 col-md-10 col-lg-10">
                       <input type="text" ref="ref3" onChange={(event)=>{
                                                    this.setState({candidateid: event.target.value});}} /></div>
                      </div>

                      <div className="form-group row">
                      <div className="col-sm-4 col-md-4 col-lg-4">
                      <button type="button" className="w3-button w3-dark-grey" onClick={() => this.addRecord(this.state)}>Submit</button>
                      </div>
                      </div>
                      </form>
                      <font color="red">{this.state.message1}</font>
                      </div>
                  </div>
              </div>
          </div>

          <div class="container">
          <div class="col col-lg-6">
            <h3>View Candidate History</h3>
              <form>
              <div className="form-group row">
              <div className="col-sm-2 col-md-2 col-lg-2">Enter Candidate ID:</div>
              <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="ref4" onChange={(event)=>{this.setState({candidateid: event.target.value});}} /></div>
          </div>
          <div className="form-group row">
              <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.viewCandidateEducationHistory(this.state)}>Submit</button></div>
                </div>
                </form>

                {this.state.candHistory.map(f => {
                       return ( <div  key={Math.random()}>
                       <div >
                       <ul className="w3-ul w3-border w3-right-blue">
                              <li>RECORD ID: {f.eduId}</li>
                              <li>LEVEL: {f.EduLevel}</li>
                              <li>GRADUATION DATE: {f.graduateDate}</li>
                              <li>GRADE: {f.grade}</li>
                              <li>NAME: {f.eduName}</li>
                              </ul>
                                </div>
                                </div>
                              )
            })
            }
</div>
<div class="col col-lg-6">
                <h3>Modify Education History</h3>
                <form>
                <div className="form-group row">
                <div className="col-sm-2 col-md-2 col-lg-2">Enter Candidate ID:</div>
                <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="ref5" onChange={(event)=>{this.setState({candidateid: event.target.value});}} /></div>
              </div>
              <div className="form-group row">
                <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.updateEducationHistory(this.state)}>Submit</button></div>
                  </div>
                  </form>




                  <div>
                        {this.state.allHistory.map(f => {
                               return ( <div  key={Math.random()}>
                               <div >
                               <ul className="w3-ul w3-border w3-right-blue">
                                      <li>RECORD ID: {f.eduId}</li>
                                      <li>LEVEL: {f.EduLevel}</li>
                                      <li>GRADUATION DATE: {f.graduateDate}</li>
                                      <li>GRADE: {f.grade}</li>
                                      <li>NAME: {f.eduName}</li></ul>
                                        </div>
                                        </div>
                                      )
                    })
                    }

                  </div></div></div>
                  {this.state.showForm ? (
                    <div>
                  <form>
                                     <div className="form-group row">
                                       <div className="col-sm-2 col-md-2 col-lg-2">Record ID:</div>
                                       <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="id" onChange={(event)=>{this.setState({eduid: event.target.value});}} /></div>
                                     </div>
                                   <div className="form-group row">
                                     <div className="col-sm-2 col-md-2 col-lg-2">Graduation Date:</div>
                                     <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="id" onChange={(event)=>{this.setState({gradDate: event.target.value});}} /></div>
                                   </div>
                                   <div className="form-group row">
                                     <div className="col-sm-2 col-md-2 col-lg-2">Grade:</div>
                                     <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="id" onChange={(event)=>{this.setState({grade: event.target.value});}} /></div>
                                   </div>
                                   <div className="form-group row">
                                     <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.updatedData(this.state)}>Submit</button></div>
                                   </div>
                                 </form>
                    </div>
                  ) : (null)}


         </div>
        );
    }
}

export default EduInstHome;
