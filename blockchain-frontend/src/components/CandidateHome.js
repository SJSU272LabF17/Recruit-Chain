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
        console.log("OUTPUT: "+output);
        var temp=[];
        //listall:[];
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
          <h3>View Candidate History</h3>
          <form>
          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Enter Candidate ID:</div>
          <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="id" onChange={(event)=>{this.setState({id: event.target.value});}} /></div>
          </div>
          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.work(1)}>work</button></div>
          <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.lab(2)}>lab</button></div>
          <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.edu(3)}>edu</button></div>

            </div>
            </form>



{
this.state.flag1 ?
    (this.state.listall.map(f => {
                  return ( <div  key={Math.random()}>
                  <div >
                  <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="col-sm-2 col-md-2 col-lg-2">Role</div>
                  <div className="col-sm-2 col-md-2 col-lg-2"></div>
                  <div className="col-sm-2 col-md-2 col-lg-2"></div>
                  <div className="col-sm-2 col-md-2 col-lg-2"></div>
                  </div >
                  <div className="col-sm-12 col-md-12 col-lg-12">
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
                                             {f.dtrId}
                                             {f.dtrDate}
                                             {f.dtrType}
                                             {f.dtrResult}
                                                     </div>
                                                      </div>)})) : (this.state.flag3 ?
                                                          (this.state.listall.map(f => {
                                                                        return ( <div  key={Math.random()}>
                                                                        <div >
                                                                        {f.eduId}
                                                                        {f.institutionId}
                                                                        {f.EduLevel}
                                                                        {f.graduateDate}
                                                                        {f.grade}
                                                                                </div>
                                                                                 </div>)})) : (null)))
                         }
                      </div>

        );}
}

export default CandidateHome;
