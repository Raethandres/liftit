import React, { Component } from 'react';
import { auth} from '../FirebaseUtils';
import {Send} from  "../redux/actions/userAction.js"

export default class Log extends Component {

	constructor(props){
	super(props)
    this.state={user:"",pass:"",ema:"email",pw:"contraseña"}
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
      
    }
  }
  	send(){
  		let functionOption = auth.signInWithEmailAndPassword(this.state.user,this.state.pass).catch((error)=> {
        
          if (error.code==="auth/user-not-found") {
            auth.createUserWithEmailAndPassword(this.state.user,this.state.pass).catch((err)=>{
             
              if(err.code==="auth/weak-password"){
              this.setState({pass:"",pw:"error en la contraseña para crear usuario"})

          }
            })

          }else if(error.code==="auth/invalid-email"){
            this.setState({user:"",pass:""})
            this.setState({ema:"error en la direccion"})

          }else if (error.code==="auth/wrong-password") {
            this.setState({user:"",pass:""})
            this.setState({ema:"error en la direccion",pw:"error en la contraseña"})
          }
});

  	}

  redirect(){
    if (this.props.log==="logout") {
      auth.signOut()
    }else if (this.props.user.isAuth) {
      this.props.history.push("/")
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
      <input className="form-control" type="text"  name="user" placeholder={this.state.ema} value={this.state.user} onChange={this.handleChange}/>
      
      </div>
      <div className="add">
      <p>introdusca una contraseña mayor a 8 caracteres </p>
      </div>
      <div className="add">
      <input className="form-control" type="password" name="pass" placeholder={this.state.pw} value={this.state.pass} onChange={this.handleChange}/>
      
      </div>
      <div className="add">
      <p className="btn btn-default" onClick={this.send.bind(this)}>SEND</p>
      </div>

      <div className="add">
      <p>la autentificacion funciona con firebase, si ud no esta registrado esta lo registrara,solo introdusca un correo y una contraseña</p>
      </div>
      	
      </div>
    );
  }
}

