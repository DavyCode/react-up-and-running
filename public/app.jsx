var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter')



var firstName = "Davido";
var messageParagraph = "This is the paragraph reacting to react form GREETEr main props..."

ReactDOM.render(
      <Greeter name={firstName} message ={messageParagraph}/>,
      document.getElementById('app')
     );


