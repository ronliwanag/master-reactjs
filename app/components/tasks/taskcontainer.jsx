'use strict';

var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var TaskList = require('../../../app/components/tasks/tasklist.jsx');

if (localStorage.getItem('reactjs-data') != null) {
    localStorage.clear();
}
var data1 = '[{"taskid": "1", "name":"Finish Week 1 Deck", "description":"Introduction, React, Component, JSX, Virtual DOM", "priority":"Medium", "status":"Done"},'
var data2 =  ' {"taskid": "2", "name":"Finish Week 1 Quiz", "description":"Introduction to MMR", "priority":"Medium", "status":"Done"},'
var data3 =  ' {"taskid": "3", "name":"Finish Week 3 Deck", "description":"props and states", "priority":"Medium", "status":"in progress"},'
var data4 =  ' {"taskid": "4", "name":"Finish Week 3 Quiz", "description":"Introduction to MMR", "priority":"Medium", "status":"Done"}]';

var data = data1.concat(data2, data3, data4);

  localStorage.setItem('taskData', data);

var Panel = ReactBootstrap.Panel;

 var TaskContainer = React.createClass( {  
   getInitialState: function(){
        return {data:[]};
    },
    loadData: function (){
        var taskData = JSON.parse(localStorage.getItem('taskData'));
        this.setState({data: taskData});
    },
    componentDidMount: function () {
    this.loadData();        
    },
   render: function() {
     return (
         <div>
            <Panel header='Task Master List'>
                  <div  className="row">
                    <div className="col-sm-3">Task Details</div>
                    <div className="col-sm-3">Priority</div>
                    <div className="col-sm-3">Status</div>        
                    </div>
                    <TaskList data = {this.state.data} />                    
            </Panel>                                
         </div>                  
         )
   }
 });


module.exports = TaskContainer;