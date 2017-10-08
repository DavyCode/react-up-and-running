var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');


var firstName = "Jenny";
var messageParagraph = " GREETEr main props..."

ReactDOM.render(
      <Greeter name={firstName} message ={messageParagraph}/>,
      document.getElementById('app')
     );


