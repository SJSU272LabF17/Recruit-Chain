import React, {Component} from 'react';
import { Route, Link,Switch } from 'react-router-dom';
import * as API from '../api/API';
import ReactDOM from 'react-dom';

class CandidateHome extends Component {
  state={
    name:'',location:'',id:'',
    message:'',username:'',password:'',
    message1:'',
    listall:[]
  };


//http://localhost:3000/api/queries/selectJobHistory?candidateID=resource%3Aorg.acme.workvalid.Candidate%23+this.props.user

work = (x) => {
  var z=
API.getWork(z)
    .then((output) => {
        console.log("OUTPUT: "+output.CompanyName);
        this.setState({message:'Comapny added.'});
        ReactDOM.findDOMNode(this.refs.cn).value = "";
        ReactDOM.findDOMNode(this.refs.cl).value = "";
    });
};

lab = (x) => {
  var z=
API.getLab(z)
    .then((output) => {
        console.log("OUTPUT: "+output.CompanyName);
        this.setState({message:'Comapny added.'});
        ReactDOM.findDOMNode(this.refs.cn).value = "";
        ReactDOM.findDOMNode(this.refs.cl).value = "";
    });
};

certificate = (x) => {
  var z=
API.getCertificate(z)
    .then((output) => {
        console.log("OUTPUT: "+output.CompanyName);
        this.setState({message:'Comapny added.'});
        ReactDOM.findDOMNode(this.refs.cn).value = "";
        ReactDOM.findDOMNode(this.refs.cl).value = "";
    });
};

police = (x) => {
  var z=
API.getPolice(z)
    .then((output) => {
        console.log("OUTPUT: ");
        this.setState({message:'Comapny added.'});
        ReactDOM.findDOMNode(this.refs.cn).value = "";
        ReactDOM.findDOMNode(this.refs.cl).value = "";
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
          <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.work(this.state)}>work</button></div>
          <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.lab(this.state)}>lab</button></div>
            </div>
            </form>
         </div>
        );
    }
}

export default CandidateHome;
