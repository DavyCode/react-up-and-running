var Greeter = React.createClass({
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


ReactDOM.render(
      // <h1> Hello Reacting</h1>,
      <Greeter name="David"/>,
      document.getElementById('app')
     );


