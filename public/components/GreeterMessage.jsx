var React = require('react');


var GreeterMessage =React.createClass({
  render : function () {
        var name = this.props.name;
        var message = this.props.message;
       return (
             <div>
              <h1> some {name}!!! GreeterMESSAGE says hi</h1>
              <p>  {message} from GreeterMESSAGE</p>
             </div>
       );
  }
});

module.exports = GreeterMessage;
