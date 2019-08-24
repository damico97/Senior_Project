import React from "react";
import ReactDOM from "react-dom";
import MainLine from './components/MainLine.jsx';
import Suscon from './components/Suscon.jsx';
import Mill from './components/Mill.jsx';

const hW1 = <h1>Hello World</h1>;
ReactDOM.render(<div> <MainLine /> <Suscon /> <Mill /> </div>, document.getElementById('app')); 
//ReactDOM.render(<Mill />, document.getElementById('app'));