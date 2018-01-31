import React, { Component } from 'react';
import { auth} from '../FirebaseUtils';
import {Send} from  "../redux/actions/userAction.js"

export default class Log extends Component {

	constructor(props){
	super(props)
    this.state={user:"",pass:""}
    this.handleChange = this.handleChange.bind(this)
    this.redirect= this.redirect.bind(this)
	}
   componentWillMount(){
		if (this.props.log==="logout") {
      auth.signOut()
    }
	}
	handleChange(event) {
	this.setState({[event.target.name]:event.target.value})
  	}

  componentWillReceiveProps(){
    
  }
  componentDidUpdate(){
    if (this.props.user.isAuth) {
      this.props.history.push("/")
      console.log("redire")
    }
  }
  	send(){
  		let functionOption = auth.signInWithEmailAndPassword(this.state.user,this.state.pass).catch((error)=> {
          if (error.code="auth/user-not-found") {
            auth.createUserWithEmailAndPassword(this.state.user,this.state.pass)

          }
});

  	}

  redirect(){
    if (this.props.log==="logout") {
      auth.signOut()
    }else if (this.props.user.isAuth) {
      this.props.history.push("/")
      console.log("redire")
    }
  }
  

  render() {
    return (
      <div>
      <div className="add">
      <h1 className="navigation">LOGIN</h1>
      </div>
      <div className="add">
     <p>introdusca un correo electronico</p>
     </div>
     <div className="add">
      <input className="form-control" type="text"  name="user" value={this.state.user} onChange={this.handleChange}/>
      
      </div>
      <div className="add">
      <p>introdusca una contraseña mayor a 8 caracteres </p>
      </div>
      <div className="add">
      <input className="form-control" type="password" name="pass" value={this.state.pass} onChange={this.handleChange}/>
      
      </div>
      <div className="add">
      <p className="btn btn-default" onClick={this.send.bind(this)}>SEND</p>
      </div>

      <div className="add">
      <p>la autentificacion funciona con firebase, si ud no esta registrado esta lo registrara</p>
      </div>
      	
      </div>
    );
  }
}

