import React, {useEffect} from 'react';
import './App.scss';
import LandingPage from "./pages/LandingPage/LandingPage"
import ChaptersPage from "./pages/ChaptersPage/ChaptersPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import EventsPage from "./pages/EventsPage/EventsPage"
import ContactPage from "./pages/ContactPage/ContactPage";
import EventPage from './pages/EventPage/EventPage'
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom"
import {Provider} from 'react-redux'
import {loadUser} from "./redux/actions/auth"
import store from './redux/store'
import {connect} from 'react-redux'

function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/events/:id' component={EventPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/chapters" component={ChaptersPage} />
          <Route exact strict path="/events" component={EventsPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/" component={LandingPage} />
          
        </Switch>
      </BrowserRouter>
      
    </Provider>
  );
}

export default App;
