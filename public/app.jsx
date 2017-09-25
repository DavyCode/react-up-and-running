var Greeter = React.createClass({
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

     // prevent page refresh for submit button
   onButtonClick: function (e) {
      e.preventDefault();  

      var name = this.refs.name.value;

      this.refs.name.value = "";

      this.setState({
            name : name
      });
      // alert(name);
   },

   render : function () {
     var name = this.state.name;
     var message = this.props.message;

      return (
           <div>
               <h1> Hello {name} Reacting...</h1>    
               <p> {message} </p>
                
                
               <form onSubmit={this.onButtonClick}>
                 <input type="text" ref="name"/>
                 <button>Submit</button>
                </form>
            </div>      
      );
   }
});


var firstName = "Davido";
var messageParagraph = " This is the paragraph reacting to react..."

ReactDOM.render(
      // <h1> Hello Reacting</h1>,
      <Greeter name={firstName} message ={messageParagraph}/>,
      document.getElementById('app')
     );


