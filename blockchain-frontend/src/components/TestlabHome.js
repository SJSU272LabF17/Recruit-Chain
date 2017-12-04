import React, {Component} from 'react';
import { Route, Link,Switch } from 'react-router-dom';
import * as API from '../api/API';
import ReactDOM from 'react-dom';

class TestlabHome extends Component {
  state={
    name:'',location:'',id:'',dtcId:'',
    message:'',username:'',password:'',newresult:'',
    message1:'',candidateID:'',showForm:false,
    listall:[], newdate:'',allHistory:[],rid:''
  };


    addReport = (x) => {
      var z=  {
          "$class": "org.acme.workvalid.DrugTestReport",
          "dtrId": x.labid+"."+x.candidateid+Math.floor((Math.random()*20)),
          "dtrDate": x.date,
          "dtrType": x.type,
          "dtrResult": "null",
          "candidate": x.candidateid,
          "dtc": x.labid
        };
    API.addDrugReport(z)
        .then((output) => {
            //console.log("OUTPUT: "+output.CompanyName);
            this.setState({message1:'Report added.'});
            ReactDOM.findDOMNode(this.refs.nm).value = "";
            ReactDOM.findDOMNode(this.refs.loc).value = "";
        });
    };

    updateLabHistory = (x) => {
      var z={
        candidateID : x.candidateid,
        dtcId : this.props.user
      };
      API.updateLabHistory(z)
          .then((output) => {
              console.log("OUTPUT: ");
              this.setState({message:'View Candidate History'});

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
  "$class": "org.acme.workvalid.ChangeDrugTestReport",
  "dtrDate": d.newdate,
  "dtrResult": d.newresult,
  "newDtRecord": d.rid,
  "transactionId": "string",
  "timestamp": "2017-12-04T16:55:13.490Z"
};
      API.updateTestRecord(z)
          .then((output) => {
              console.log("OUTPUT: ");
              this.setState({message:'View Candidate History'});
              // ReactDOM.findDOMNode(this.refs.cn).value = "";
              // ReactDOM.findDOMNode(this.refs.cl).value = "";
          });
    };

    render() {
        return (
          <div className="w3-container w3-panel">
          <h3>Add Report</h3>
          <form>
          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Date:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="text" ref="nm" onChange={(event)=>{
                                        this.setState({date: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Type:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="text" ref="loc" onChange={(event)=>{
                                        this.setState({type: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Candidate ID:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="text" ref="loc" onChange={(event)=>{
                                        this.setState({candidateid: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Lab ID:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="text" ref="loc" onChange={(event)=>{
                                        this.setState({labid: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-4 col-md-4 col-lg-4">
          <button type="button" className="w3-button w3-dark-grey" onClick={() => this.addReport(this.state)}>Submit</button>
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
            <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.viewCandidateLabHistory(this.state)}>Submit</button></div>
              </div>
              </form>


         <h3>Modify Lab History</h3>
         <form>
         <div className="form-group row">
         <div className="col-sm-2 col-md-2 col-lg-2">Enter Candidate ID:</div>
         <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="id" onChange={(event)=>{this.setState({candidateid: event.target.value});}} /></div>
       </div>
       <div className="form-group row">
         <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.updateLabHistory(this.state)}>Submit</button></div>
           </div>
           </form>

           <div>
                 {this.state.allHistory.map(f => {
                        return ( <div  key={Math.random()}>
                        <div >
                        <ul className="w3-ul w3-border w3-right-blue">
                               <li>{f.dtrId}</li>
                               <li>{f.dtrDate}</li>
                               <li>{f.dtrType}</li>
                               <li>{f.dtrResult}</li>
                               <li>{f.candidate}</li>
                        </ul>
                                 </div>
                                 </div>
                               )
             })
             }
           </div>
           {this.state.showForm ? (
             <div>
             <form>
             <div className="form-group row">
             <div className="col-sm-2 col-md-2 col-lg-2">Record ID:</div>
             <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="id" onChange={(event)=>{this.setState({rid: event.target.value});}} /></div>
           </div>
             <div className="col-sm-2 col-md-2 col-lg-2">Results:</div>
           <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="id" onChange={(event)=>{this.setState({newresult: event.target.value});}} /></div>

             <div className="col-sm-2 col-md-2 col-lg-2">Date:</div>
           <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="id" onChange={(event)=>{this.setState({newdate: event.target.value});}} /></div>

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

export default TestlabHome;
