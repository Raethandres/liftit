import React, { Component } from 'react';

import {Provider} from "react-redux"
import Store from "./redux/store"
import Layer from './components/layer'
import {BrowserRouter} from "react-router-dom"


export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
      	<BrowserRouter>
        	 <Layer/>
         </BrowserRouter>
      </Provider>
     
    );
  }
}