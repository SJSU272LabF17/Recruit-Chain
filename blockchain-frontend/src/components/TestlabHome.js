import React, {Component} from 'react';
import { Route, Link,Switch } from 'react-router-dom';
import * as API from '../api/API';
import ReactDOM from 'react-dom';

class TestlabHome extends Component {
  state={
    name:'',location:'',id:'',dtcId:'',
    message:'',username:'',password:'',newresult:'',
    message1:'',candidateID:'',showForm:false,
    listall:[], newdate:'',allHistory:[],rid:'',
    candHistory:[]
  };


    addReport = (x) => {
      var z=  {
          "$class": "org.acme.workvalid.DrugTestReport",
          "dtrId": this.props.user+"."+x.candidateid+Math.floor((Math.random()*20)),
          "dtrDate": x.date,
          "dtrType": x.type,
          "dtrResult": "Awaiting",
          "candidate": x.candidateid,
          "dtc": this.props.user,
          "drugCenterName": x.labname
        };
    API.addDrugReport(z)
        .then((output) => {
            //console.log("OUTPUT: "+output.CompanyName);
            this.setState({message1:'Report added.'});
            ReactDOM.findDOMNode(this.refs.ref1).value = "";
            ReactDOM.findDOMNode(this.refs.ref2).value = "";
            ReactDOM.findDOMNode(this.refs.ref3).value = "";
            ReactDOM.findDOMNode(this.refs.ref4).value = "";
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
              ReactDOM.findDOMNode(this.refs.ref6).value = "";
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

    viewCandidateLabHistory = (x) => {
      var z={
        candidateID : x.candidateid
      };
      API.viewDrugTestReports(z)
          .then((output) => {
              console.log("OUTPUT: "+output);
              this.setState({message:'View Candidate History'});
              ReactDOM.findDOMNode(this.refs.ref5).value = "";
              var temp=[];
              for(var i=0;i<output.length;i++)
              {
              temp=this.state.candHistory.concat(output[i]);
              this.setState({candHistory:temp});
              }
          });
    };

    updatedData=(d)=>{
      var z={
  "$class": "org.acme.workvalid.ChangeDrugTestReport",
  "dtrDate": d.newdate,
  "dtrResult": d.newresult,
  "newDtRecord": d.rid,
  "transactionId": "",
  "timestamp": Date.now()
};
      API.updateTestRecord(z)
          .then((output) => {
              console.log("OUTPUT: ");
              this.setState({message:'View Candidate History'});
              ReactDOM.findDOMNode(this.refs.ref7).value = "";
              ReactDOM.findDOMNode(this.refs.ref8).value = "";
              ReactDOM.findDOMNode(this.refs.ref9).value = "";
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
           <input type="text" ref="ref1" onChange={(event)=>{
                                        this.setState({date: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Type:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="text" ref="ref2" onChange={(event)=>{
                                        this.setState({type: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Candidate ID:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="text" ref="ref3" onChange={(event)=>{
                                        this.setState({candidateid: event.target.value});}} /></div>
          </div>

          <div className="form-group row">
          <div className="col-sm-2 col-md-2 col-lg-2">Lab Name:</div>
           <div className="col-sm-10 col-md-10 col-lg-10">
           <input type="text" ref="ref4" onChange={(event)=>{
                                        this.setState({labname: event.target.value});}} /></div>
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
            <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="ref5" onChange={(event)=>{this.setState({candidateid: event.target.value});}} /></div>
          </div>
          <div className="form-group row">
            <div className="col-sm-2 col-md-2 col-lg-2"><button type="button" className="w3-button w3-dark-grey" onClick={() => this.viewCandidateLabHistory(this.state)}>Submit</button></div>
              </div>
              </form>

              {this.state.candHistory.map(f => {
                     return ( <div  key={Math.random()}>
                     <div >
                     <ul className="w3-ul w3-border w3-right-blue">
                            <li>{f.dtrId}</li>
                            <li>{f.dtrDate}</li>
                            <li>{f.dtrType}</li>
                            <li>{f.dtrResult}</li>
                            <li>{f.drugCenterName}</li></ul>
                              </div>
                              </div>
                            )
          })
          }


         <h3>Modify Lab History</h3>
         <form>
         <div className="form-group row">
         <div className="col-sm-2 col-md-2 col-lg-2">Enter Candidate ID:</div>
         <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="ref6" onChange={(event)=>{this.setState({candidateid: event.target.value});}} /></div>
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
                               <li>{f.drugCenterName}</li>
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
             <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="ref7" onChange={(event)=>{this.setState({rid: event.target.value});}} /></div>
           </div>
             <div className="col-sm-2 col-md-2 col-lg-2">Results:</div>
           <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="ref8" onChange={(event)=>{this.setState({newresult: event.target.value});}} /></div>

             <div className="col-sm-2 col-md-2 col-lg-2">Date:</div>
           <div className="col-sm-2 col-md-2 col-lg-2"><input type="text" ref="ref9" onChange={(event)=>{this.setState({newdate: event.target.value});}} /></div>

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
