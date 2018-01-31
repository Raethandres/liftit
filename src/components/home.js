import React, { Component } from 'react';
import {Maps} from "../redux/actions/mapActions"
import Report from './report'

export default class Home extends Component {
    
  componentWillMount(){
    if (!this.props.user.isAuth) {
      this.props.history.push("/login")
    }
  }
	constructor(props){
		super(props)
    this.state={origen:"",destino:"",redirect:false}
    this.handleChange = this.handleChange.bind(this)
	}

	add(){
    if (this.props.origen !== "" && this.props.destinations !== "") {
      this.props.dispatch(Maps({origen:this.state.origen,destinations:this.state.destino}))
      this.setState({value:""});
    }
    
  }
  
  handleChange(event) {
  this.setState({[event.target.name]:event.target.value})
  }

  mapa(){
    if(!this.props.map.auth){
      return (<div className="add"> <Report map={this.props.map} />  </div>)
    }
  }

  render() {
   return (
    <div>
     <div className="add">
      <input className="form-control" type="text" placeholder="direccion de origen" name="origen" value={this.state.origen} onChange={this.handleChange}/>
      <input className="form-control" type="text" placeholder="direccion de destino" name="destino" value={this.state.destino} onChange={this.handleChange}/>
      </div>
      <div className="add">
      <p className="btn btn-default" onClick={this.add.bind(this)}>enviar</p>
      </div>
      <div className="add">
         <Report map={this.props.map.map} />  
      </div>
     
      	
      </div>
    );
  }

  
}




