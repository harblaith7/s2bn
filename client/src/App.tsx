import React from 'react';
import './App.scss';
import LandingPage from "./pages/LandingPage/LandingPage"
import ChaptersPage from "./pages/ChaptersPage/ChaptersPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import EventPage from "./pages/EventsPage/EventsPage"
import {Route, BrowserRouter, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/chapters" component={ChaptersPage} />
          <Route path="/events" component={EventPage} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
