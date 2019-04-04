import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='App'>

        <div className="container">
          <div className="jumbotron jumbotron-fluid padding-top-4">
            <h1 className="display-4">San Diego Top Spots</h1>
            <p className="lead">A list of the Top 30 places to see in San Diego, California.</p>
          </div>
          {
            this.state.topspots.map(topspot => (
              <TopSpot
                key={topspot.id}
                name={topspot.name}
                description={topspot.description}
                location={topspot.location} />

            ))
          }
          {/* Below commented out code was to initially check that data was coming in from api */}
          {/*<pre>{ JSON.stringify(this.state.topspots, null, 2) }</pre>*/}
        </div>


      </div >

    );
  }
}

export default App;
