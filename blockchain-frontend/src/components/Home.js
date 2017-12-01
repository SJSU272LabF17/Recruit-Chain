import React, { Component } from 'react';
import * as API from '../api/API';
import ReactDOM from 'react-dom';
import { Route, Link,Switch } from 'react-router-dom';
import Candidate from './Candidate';
import Company from './Company';
import EducationInst from './EducationInst';
import Testlab from './Testlab';
import Policedept from './Policedept';
import Certification from './Certification';
import 'w3-css/w3.css';
import '../styles.css';

class Home extends Component {

  render() {
    return (
      <div>

            <div className="btitle col-sm-12 col-md-12 col-lg-12">
            <h1 className="w3-text-white" style={{margin:"25px", fontWeight:"bold"}}>Employee Verification</h1>
            </div>
            <br/><br/><br/><br/><br/>


      <div calssName="w3-container w3-panel">
      <div className="row">
      <div className="col-sm-3 col-md-3 col-lg-3"><Link to='/'></Link></div>
      <div className="col-sm-1 col-md-1 col-lg-1"><Link to='/company' className="links">Company</Link></div>
      <div className="col-sm-2 col-md-2 col-lg-2"><Link to='/eduinstitute' className="links">Education Institute</Link></div>
      <div className="col-sm-1 col-md-1 col-lg-1"><Link to='/testlab' className="links">Test Lab</Link></div>
      <div className="col-sm-1 col-md-1 col-lg-1">  <Link to='/policedept' className="links">Police Dept</Link></div>
      <div className="col-sm-1 col-md-1 col-lg-1"><Link to='/certification' className="links">Certification</Link></div>
      <div className="col-sm-1 col-md-1 col-lg-1"><Link to='/candidate' className="links">Candidate</Link></div>
      <div className="col-sm-1 col-md-1 col-lg-1"></div>
        </div>

      <Switch>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/company" component={() => <Company/>}/>
      <Route exact path="/eduinstitute" component={() => <EducationInst/>}/>
      <Route exact path="/testlab" component={() => <Testlab/>}/>
      <Route exact path="/policedept" component={() => <Policedept/>}/>
      <Route exact path="/certification" component={() => <Certification/>}/>
      <Route exact path="/candidate" component={() => <Candidate/>}/>
      </Switch>

     </div>


{/*this.state.listall.map(f => {
       return ( <div key={Math.random()}>{f}</div>
              )
})
*/}

      </div>
    );
  }
}


export default Home;
