import React, {Component} from 'react';
import { Route, Link,Switch } from 'react-router-dom';
import * as API from '../api/API';
import ReactDOM from 'react-dom';

class Certification extends Component {
  state={
    provider:'',name:'',id:'',
    message:'',
    listall:[]
  };

  addCertificate = (x) => {
    var z={
  "$class": "org.acme.workvalidation.Certification",
  "certId": x.provider+"."+x.name,
  "certName": x.name,
  "certProvider": x.provider
};

  API.newcertificate(z)
      .then((output) => {
          //console.log("OUTPUT: "+output.CompanyName);
          this.setState({message:'Certification added.'});
          ReactDOM.findDOMNode(this.refs.nm).value = "";
          ReactDOM.findDOMNode(this.refs.pr).value = "";
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
  <h3>Add Certification</h3>
  <form>
  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Provider:</div>
   <div className="col-sm-10 col-md-10 col-lg-10">
   <input type="text" ref="pr" onChange={(event)=>{
                                this.setState({provider: event.target.value});}} /></div>
  </div>

 <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Name:</div>
   <div className="col-sm-10 col-md-10 col-lg-10">
   <input type="text" ref="nm" onChange={(event)=>{
                                this.setState({name: event.target.value});}} /></div>
  </div>

  <div className="form-group row">
  <div className="col-sm-4 col-md-4 col-lg-4">
  <button type="button" className="w3-button w3-dark-grey" onClick={() => this.addCertificate(this.state)}>Submit</button>
  </div>
  </div>
  </form>
<font color="red">{this.state.message}</font>

<br/>
  <h3>View Candidate History</h3>
  <form>
  <div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2">Enter Candidate ID:</div>
  <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="id" onChange={(event)=>{this.setState({id: event.target.value});}} /></div>
</div>
<div className="form-group row">
  <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.addCertificate(this.state)}>Submit</button></div>
    </div>
    </form>
         </div>
        );
    }
}

export default Certification;
