import React, {Component} from 'react';
import { Route, Link,Switch } from 'react-router-dom';
import * as API from '../api/API';
import ReactDOM from 'react-dom';

class CandidateHome extends Component {
  state={
    name:'',location:'',id:'',
    message:'',username:'',password:'',
    message1:'',flag:'',
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
        listall:[];
        this.setState({flag:1});
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
        listall:[];
        this.setState({flag:2});
        for(var i=0;i<output.length;i++)
        {
        temp=this.state.listall.concat(output[i]);
        this.setState({listall:temp});
        }
    });
};

edu = (x) => {
  var z={5
    candidateID:this.props.user
  }
API.viewEdHistory(z)
    .then((output) => {
        console.log("OUTPUT: "+output);
        var temp=[];
        listall:[];
        this.setState({flag:3});
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
<<<<<<< HEAD
          <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.work(1)}>work</button></div>
          <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.lab(2)}>lab</button></div>
          <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.edu(3)}>edu</button></div>

=======
          <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.work(this.state)}>work</button></div>
          <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.lab(this.state)}>lab</button></div>
>>>>>>> a84241ebcdf6bdf744addb3ee480396b381d50fe
            </div>
            </form>
         </div>
         {this.state.flag===1 ? (
           {this.state.listall.map(f => {
                         return ( <div  key={Math.random()}>
                         <div >
                         <ul className="w3-ul w3-border w3-right-blue">
                                <li>{f.jobId}</li>
                                <li>{f.role}</li>
                                <li>{f.skillSet}</li>
                                <li>{f.joiningDate}</li>
                                <li>{f.leavingDate}</li>
                                <li>{f.currEmployment}</li></ul>
                                  </div>
                                  </div>
                                )})
              }): (this.state.flag===2 ?
                (
                  {this.state.listall.map(f => {
                                return ( <div  key={Math.random()}>
                                <div >
                                <ul className="w3-ul w3-border w3-right-blue">
                                       <li>{f.dtrId}</li>
                                       <li>{f.dtrDate}</li>
                                       <li>{f.dtrType}</li>
                                       <li>{f.dtrResult}</li>
                                       <li>{f.dtc}</li></ul>
                                         </div>
                                         </div>
                                       )})
                     }): (this.state.flag===3 ?
                  (
                    {this.state.listall.map(f => {
                                  return ( <div  key={Math.random()}>
                                  <div >
                                  <ul className="w3-ul w3-border w3-right-blue">
                                         <li>{f.eduId}</li>
                                         <li>{f.institutionId}</li>
                                         <li>{f.EduLevel}</li>
                                         <li>{f.graduateDate}</li>
                                         <li>{f.grade}</li>
                                           </div>
                                           </div>
                                         )})
                       }): (null)))}

        );
    }
}

export default CandidateHome;
