import React, {Component} from 'react';
import { Route, Link,Switch } from 'react-router-dom';
import * as API from '../api/API';
import ReactDOM from 'react-dom';

class CandidateHome extends Component {
  state={
    name:'',location:'',id:'',
    message:'',username:'',password:'',
    message1:'',flag1:false,flag2:false,flag2:false,
    listall:[]
  };

work = (x) => {
  var z={
    candidateID:this.props.user
  }
API.viewJobHistory(z)
    .then((output) => {
        //ReactDOM.findDOMNode(this.refs.candi1).value = "";
        console.log("OUTPUT: "+output);
        var temp=[];
        this.setState({flag1:true,flag2:false,flag3:false});
        for(var i=0;i<output.length;i++)
        {
        temp=this.state.listall.concat(output[i]);
        this.setState({listall:temp});
        }
    });
};

lab = (x) => {
  var z={
    candidateID:this.props.user
  }
API.viewDrugTestReports(z)
    .then((output) => {
        ReactDOM.findDOMNode(this.refs.candi1).value = "";
        console.log("OUTPUT: "+output);
        var temp=[];
        //listall:[];
        this.setState({flag1:false,flag2:true,flag3:false});
        for(var i=0;i<output.length;i++)
        {
        temp=this.state.listall.concat(output[i]);
        this.setState({listall:temp});
        }
    });
};

edu = (x) => {
  var z={
    candidateID:this.props.user
  }
API.viewEdHistory(z)
    .then((output) => {
        ReactDOM.findDOMNode(this.refs.candi1).value = "";
        console.log("OUTPUT: "+output);
        var temp=[];
        //listall:[];
        this.setState({flag1:false,flag2:false,flag3:true});
        for(var i=0;i<output.length;i++)
        {
        temp=this.state.listall.concat(output[i]);
        this.setState({listall:temp});
        }
    });
};


    render() {
        return (
          <div className="w3-container w3-panel">

          <center><h3>View Candidate History</h3></center>
<div className="col-sm-12 col-md-12 col-lg-12"><br/></div>
          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2"></div>
          <div className="col-sm-3 col-md-3 col-lg-3"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.work(1)}>Work History</button></div>
          <div className="col-sm-3 col-md-3 col-lg-3"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.lab(2)}>Lab Reports</button></div>
          <div className="col-sm-3 col-md-3 col-lg-3"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.edu(3)}>Education Records</button></div>
          </div>

{
this.state.flag1 ?
    (this.state.listall.map(f => {
                  return ( <div  key={Math.random()}>
                  <div >
                  <br />
                  <br />
                  <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="col-sm-2 col-md-2 col-lg-2"><b>Role</b></div>
                  <div className="col-sm-2 col-md-2 col-lg-2"><b>Skills</b></div>
                  <div className="col-sm-2 col-md-2 col-lg-2"><b>Joining Date</b></div>
                  <div className="col-sm-2 col-md-2 col-lg-2"><b>Leaving Date</b></div>
                  <div className="col-sm-2 col-md-2 col-lg-2"><b>Employement</b></div>
                  <div className="col-sm-2 col-md-2 col-lg-2"><b>Company</b></div>
                  </div >
                  <div className="col-sm-12 col-md-12 col-lg-12">
                  <br />
                         <div className="col-sm-2 col-md-2 col-lg-2">{f.role}</div>
                         <div className="col-sm-2 col-md-2 col-lg-2">{f.skillSet}</div>
                         <div className="col-sm-2 col-md-2 col-lg-2">{f.joiningDate}</div>
                         <div className="col-sm-2 col-md-2 col-lg-2">{f.leavingDate}</div>
                         <div className="col-sm-2 col-md-2 col-lg-2">{f.currEmployment}</div>
                         <div className="col-sm-2 col-md-2 col-lg-2">{f.companyName}</div>
                         </div >
                          </div>
                           </div>)})) : (this.state.flag2 ?
                               (this.state.listall.map(f => {
                                             return ( <div  key={Math.random()}>
                                             <div >
                                             <br />
                                             <br />
                                             <div className="col-sm-12 col-md-12 col-lg-12">
                                             <div className="col-sm-2 col-md-2 col-lg-2"><b>Test ID</b></div>
                                             <div className="col-sm-2 col-md-2 col-lg-2"><b>Test Date</b></div>
                                             <div className="col-sm-2 col-md-2 col-lg-2"><b>Test Type</b></div>
                                             <div className="col-sm-2 col-md-2 col-lg-2"><b>Results</b></div>
                                             </div >
                                             <div className="col-sm-12 col-md-12 col-lg-12">
                                             <br />

                                             <div className="col-sm-2 col-md-2 col-lg-2">{f.dtrId}</div>
                                            <div className="col-sm-2 col-md-2 col-lg-2">{f.dtrDate}</div>
                                             <div className="col-sm-2 col-md-2 col-lg-2">{f.dtrType}</div>
                                             <div className="col-sm-2 col-md-2 col-lg-2">{f.dtrResult}</div>
                                                     </div></div>
                                                      </div>)})) : (this.state.flag3 ?
                                                          (this.state.listall.map(f => {
                                                                        return ( <div  key={Math.random()}>
                                                                        <div >
                                                                        <br />
                                                                        <br />
                                                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                                                        <div className="col-sm-2 col-md-2 col-lg-2"><b>Record ID</b></div>
                                                                        <div className="col-sm-2 col-md-2 col-lg-2"><b>Education Level</b></div>
                                                                        <div className="col-sm-2 col-md-2 col-lg-2"><b>Graduate Date</b></div>
                                                                        <div className="col-sm-2 col-md-2 col-lg-2"><b>Grade</b></div>
                                                                        </div >
                                                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                                                        <br />
                                                                        <div className="col-sm-2 col-md-2 col-lg-2">{f.eduId}</div>

                                                                        <div className="col-sm-2 col-md-2 col-lg-2">{f.EduLevel}</div>
                                                                        <div className="col-sm-2 col-md-2 col-lg-2">{f.graduateDate}</div>
                                                                        <div className="col-sm-2 col-md-2 col-lg-2">{f.grade}</div>
                                                                                </div></div>
                                                                                 </div>)})) : (null)))
                         }
                      </div>

        );}
}

export default CandidateHome;
