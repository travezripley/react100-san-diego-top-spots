import React, { Component } from 'react';

  class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        topspots: []
      };
    }
  }


  

  render() {
    return (
   
      <div className='App'>

        <div className="container">
          <div className="jumbotron jumbotron-fluid padding-top-4">
            <h1 className="display-4">San Diego Top Spots</h1>
            <p className="lead">A list of the Top 30 places to see in San Diego, California.</p>
          </div>
        </div>
       
      </div >
    
    );
  }
}

export default App;
