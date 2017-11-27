import React, { Component } from 'react';
import * as API from '../api/API';
import { Route} from 'react-router-dom';
import ReactDOM from 'react-dom';

class Home extends Component {
  state={
    companyname:"",
    companylocation:"",
    message:'',
    listall:[]
  };

addCompany = (x) => {
  var z={
  "$class": "org.acme.biznet.Employer",
  "CompanyName": x.companyname,
  "LocationName": x.companylocation
};
API.newcompany(z)
    .then((output) => {
        console.log("OUTPUT: "+output.CompanyName);
        this.setState({message:'Comapny added.'});
        ReactDOM.findDOMNode(this.refs.cn).value = "";
        ReactDOM.findDOMNode(this.refs.cl).value = "";
    });
};

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
}

  render() {
    return (
      <div>
      <h1>Add Company</h1>
      <form>
      <div className="form-group row">
      <div className="col-sm-2 col-md-2 col-lg-2">Company Name:</div>
       <div className="col-sm-10 col-md-10 col-lg-10">
       <input type="text" ref="cn" id="fname" onChange={(event)=>{
                                    this.setState({companyname: event.target.value});}} /></div>
      </div>

      <div className="form-group row">
      <div className="col-sm-2 col-md-2 col-lg-2">Company Location:</div>
       <div className="col-sm-10 col-md-10 col-lg-10">
       <input type="text" ref="cl" id="lname" onChange={(event)=>{
                                    this.setState({companylocation: event.target.value});}} /></div>
      </div>

      <div className="form-group row">
      <div className="col-sm-4 col-md-4 col-lg-4">
      <button type="button" onClick={() => this.addCompany(this.state)}>Submit</button>
      </div>
      </div>

      </form>
<font color="red">{this.state.message}</font>



{this.state.listall.map(f => {
       return ( <div key={Math.random()}>{f}</div>
              )
})
}

      </div>
    );
  }
}


export default Home;
