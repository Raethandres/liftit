import React, { Component } from 'react';

import {Switch,Route,Link} from "react-router-dom"
import Home from './home'
import Log from './log'
import { withRouter } from 'react-router-dom'
import {connect} from "react-redux"

class Layer extends Component {
  render() {
    return (
      
    	<div>
        <ul className="navigation">
             <li ><Link to="/">Home</Link></li>
             <li ><Link to="/login">{this.props.log}</Link></li>
        </ul>
    	<Switch>
       
    	<Route exact path="/" render={props => <Home {...this.props} />}/>
     	<Route path="/login" render={props => <Log {...this.props}/>}/>
     	</Switch>
     	
     
     	</div>
        
    );
  }
}
export default withRouter(connect((store)=>{return{map:store.map,user:store.user.user,log:store.user.log}})(Layer))
