var React = require('react');
var GreeterForm = require('./GreeterForm');
var GreeterMessage = require('./GreeterMessage');





var Greeter =React.createClass({
  //  Default Props
getDefaultProps : function () {
     return {
           name : "React Default",
           message: "Default message displaying"
     }  
},

getInitialState: function () {
    return {
          name : this.props.name
    };
},

handleNewName : function(name){
  this.setState({
        name : name
  });
},


render : function () {
 var name = this.state.name;
 var message = this.props.message;

  return (
       <div>
           {/* <h1> Hello {name} Reacting from Greeter...</h1>    
           <p> {message} </p> */}

           <GreeterMessage name={name} message={message}/> 
    
           <GreeterForm onNewName={this.handleNewName}/>
        </div>      
  );
}
});


module.exports = Greeter;
