import React, {Component} from 'react';
import * as API from '../api/API';
import { Route} from 'react-router-dom';
import ReactDOM from 'react-dom';

class Signup extends Component {
  state={
    fname:'',
    lname:'',
    email:'',
    password:'',
    status:'',
    type:''
  };

  componentWillMount(){
    this.setState({status:''});
  }

  handleSubmit = (user) => {
      API.signup(user)
          .then((output) => {
              if (output === 0) {
                  console.log("Failed signup");
                  this.setState({status: "Sign up failed."});
              } else {
                  console.log("Success signup");
                  ReactDOM.findDOMNode(this.refs.fn).value = "";
                  ReactDOM.findDOMNode(this.refs.ln).value = "";
                  ReactDOM.findDOMNode(this.refs.em).value = "";
                  ReactDOM.findDOMNode(this.refs.pwd).value = "";
                  this.setState({status: "Sign up successful."});
              }
          });
  };


    render() {
        return (
          <div>
          <form>
          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">First Name:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="text" ref="fn" id="fname" className="w3-input" onChange={(event)=>{
                                        this.setState({fname: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Last Name:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="text" ref="ln" id="lname" className="w3-input" onChange={(event)=>{
                                        this.setState({lname: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Email:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="text" ref="em" id="email" className="w3-input" onChange={(event)=>{
                                        this.setState({email: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Password:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="password" ref="pwd" id="pswd" className="w3-input" onChange={(event)=>{
                                        this.setState({password: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Type:</div>
            <div className="col-sm-3 col-md-3 col-lg-3">
            <select className="w3-select" onChange={(event)=>{
                                          this.setState({type: event.target.value});}}>
            <option value="" disabled selected>Select</option>
            <option value="1">Employer</option>
            <option value="0">Employee</option>
            </select>
            </div>
          </div>

          <div className="form-group row">
          <div className="col-sm-4 col-md-4 col-lg-4">
          <button type="button" className="w3-button w3-green w3-border w3-border-white w3-round-large" onClick={() => this.handleSubmit(this.state)}>Submit</button>
          </div>
          </div>

          <div className="form-group row">
          <div className="col-sm-4 col-md-4 col-lg-4">
          <font color="red">{this.state.status}</font>
          </div>
          </div>

          </form>

          </div>
        );
    }
}

export default Signup;
