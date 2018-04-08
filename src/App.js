import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store/index';
import Navbar from './Navbar/Navbar';
import Home from './Pages/Home/Home';
import Omdb from './Pages/Omdb/Omdb';
import Weather from './Pages/Weather/Weather';
import Github from './Pages/Github/Github';
import WeatherForecast from './Pages/WeatherForecast/WeatherForecast';

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Navbar />
            <Route exact path ="/" component={Home} />
            <Route exact path ="/omdb" component={Omdb} />
            <Route exact path ="/weather" component={Weather} />
            <Route exact path ="/github" component={Github} />
            <Route exact path ="/weather-forecast" component={WeatherForecast} />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
