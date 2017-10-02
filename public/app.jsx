var GreeterMessage =React.createClass({
      render : function () {
            var name = this.props.name;
            var message = this.props.message;
           return (
                 <div>
                  <h1> some {name}!!! GreeterMESSAGE says hi</h1>
                  <p>  {message} from GreeterMESSAGE</p>
                 </div>
           ) 
      }
})


var GreeterForm =React.createClass({
     onFormSubmit: function (e){
       e.preventDefault();

       var name = this.refs.name.value;
        
       if( name.length > 0){
           this.refs.name.value = '';
           this.props.onNewName(name);
       }
     },

      render : function () {
           return (
                        <form onSubmit={this.onFormSubmit}>
                              <input type="text" ref="name"/>
                              <button>Submit</button>
                        </form>
           ) 
      }
})






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


var firstName = "Davido";
var messageParagraph = "This is the paragraph reacting to react form GREETEr main props..."

ReactDOM.render(
      // <h1> Hello Reacting</h1>,
      <Greeter name={firstName} message ={messageParagraph}/>,
      document.getElementById('app')
     );


