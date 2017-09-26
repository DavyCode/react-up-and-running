var GreeterMessage =React.createClass({
      render : function () {
           return (
                 <div>
                  <h1> some heading</h1>
                  <p>  hey some paragraph this time</p>
                 </div>
           ) 
      }
})


var GreeterForm =React.createClass({
      render : function () {
           return (
                 <div>
                        <form >
                              <input type="text" ref="name"/>
                              <button>Submit</button>
                        </form>
                 </div>
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

     // prevent page refresh for submit button
   onButtonClick: function (e) {
      e.preventDefault();  

      var nameRef = this.refs.name;
      var name = nameRef.value;
      nameRef.value = "";
      console.log(name);
      console.log(typeof name)
      if ( typeof name === 'string' && name.length > 0){
          
           this.setState({
                  name : name
            });
            // alert(name);
      }

   },

   render : function () {
     var name = this.state.name;
     var message = this.props.message;

      return (
           <div>
               <h1> Hello {name} Reacting...</h1>    
               <p> {message} </p>

               < GreeterMessage/> 
                
               <form onSubmit={this.onButtonClick}>
                 <input type="text" ref="name"/>
                 <button>Submit</button>
                </form>

                <GreeterForm/>
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


