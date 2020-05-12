import React from 'react';
import './App.scss';
import LandingPage from "./pages/LandingPage/LandingPage"
import ChaptersPage from "./pages/ChaptersPage/ChaptersPage";
import {Route, BrowserRouter, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/chapters" component={ChaptersPage} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
