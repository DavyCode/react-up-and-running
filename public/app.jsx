var Greeter = React.createClass({
//    Default Props
   getDefaultProps : function () {
         return {
               name : "React Default"
         }  
   },


   render : function () {
     var name = this.props.name;

      return (
           <div>
               <h1> Hello {name} Reacting...</h1>    
               <p> This is the paragraph reacting to react... </p>
           </div>      
      );
   }
});

// var firstName = "Davido";

ReactDOM.render(
      // <h1> Hello Reacting</h1>,
      <Greeter />,
      document.getElementById('app')
     );


