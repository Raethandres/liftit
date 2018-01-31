import React, { Component } from 'react';

export default class Report extends Component {
    

	constructor(props){
		super(props)
	}

  render() {

    if(this.props.map.error){
      return(
        <div>
        <div className="add">
        ocurrio algun error con las direcciones,recuerde usar bien google maps: pueblo,cuidad,pais
        </div>
        <div className="add">
        recuerde darle al logout
        </div>
        </div>
      )
    }else if (this.props.map.auth) {
      return (
    <div>
     <div className="add">
     distancia:
     {this.props.map.map.rows[0].elements[0].distance.text}
    </div>
    <div className="add">
    tiempo:
     {this.props.map.map.rows[0].elements[0].duration.text}
    </div>
      <div className="add">
        recuerde darle al logout
        </div>

        
      </div>
    );
    }else{
      return(
        <div>
        <div className="add">
        Bienvenido. recuerde usar bien google maps: pueblo,cuidad,pais
        </div>
        <div className="add">
        recuerde darle al logout
        </div>
        </div>
      )
    }
   
  }

  
}




