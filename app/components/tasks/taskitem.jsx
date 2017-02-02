var React = require('react');

var TaskItem = React.createClass({  
  render: function(){
    return (
      <div className="row">
      <div className="col-sm-3">        
          <div>
          <span><b>{this.props.name}</b></span> <br/>
          <span>{this.props.description}</span>
          </div>
      </div>
      <div className="col-sm-3" >        
         {this.props.priority}                 
      </div>
      <div className="col-sm-3">        
          {this.props.status}                                
      </div>
      </div>
    )
  }
});



module.exports = TaskItem;