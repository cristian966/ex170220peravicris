import React,  { Component } from "react";
import './css/hojaestilos1.css';
import './css/hojaestilos2.css';
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Distribucion1peravicris from "./Distribucion1peravicris";
import Distribucion2peravicris from "./Distribucion2peravicris.js";
import Distribucion3peravicris from "./Distribucion3peravicris.js";
import Pruebasperavicris from "./Pruebasperavicris.js";

class Aplicacionperavicris extends Component {
render(){
    return(
        <div>
           
        
        <div className="contenedorgridEnlaces">
            <div className="contenedorgridEnlaces__elementohijo">
            <Link to="/Distribucion1peravicris">Distribucion1</Link>
            </div>  

            <div className="contenedorgridEnlaces__elementohijo">
            <Link to="/Distribucion2peravicris">Distribucion2</Link>
            </div>   

            <div className="contenedorgridEnlaces__elementohijo">
            <Link to="/Distribucion3peravicris">Distribucion3</Link>
            </div>     

            <div className="contenedorgridEnlaces__elementohijo">
            <Link to="/Pruebasperavicris">Pruebas</Link>
            </div>  

            <Router>
                <Distribucion1peravicris path="/Distribucion1peravicris.js"/>
                
                <Distribucion2peravicris path="/Distribucion2peravicris.js"/>
                <Distribucion3peravicris path="/Distribucion3peravicris.js"/>
                <Pruebasperavicris path="/Pruebasperavicris.js"/>
            </Router>

            

        </div>
        <br></br>
        <Distribucion1peravicris />

        <Distribucion2peravicris />
        
        </div>
        
    )
}
    
}


export default Aplicacionperavicris;