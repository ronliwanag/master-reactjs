'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
import Header from "./components/header";
import Hero from "./components/hero";
import Section from "./components/section";
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import Card3 from "./components/card3";
import Footer from "./components/footer";

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

var Board = React.createClass({
  render: function() {
 
  return (
            <div className="container text-center"> 
                <div className="panel panel-default">
                    <div className="panel-heading"><Header name="Header" /></div>
                    <div className="panel panel-body"><Hero name="Hero" /></div>
                    
                    
                    <div className="panel panel-body"><Section name="Section" /></div>
                    
                        <div className="row">
                            <div className="col-sm-3"><Card1 name="Card" /></div>
                            <div className="col-sm-3"><Card2 name="Card" /></div>
                            <div className="col-sm-3"><Card3 name="Card" /></div>
                        </div>
                    
                    <div className="panel-footer"><Footer name="Footer" /></div>
                </div>
            </div>
   );
   }
});

ReactDOM.render(
  <Board/>,
   document.getElementById('root')
);