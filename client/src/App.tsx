import React, {useEffect} from 'react';
import './App.scss';
import PrivateRoute from './utils/PrivateRoutes/PrivateRoutes'
import LandingPage from "./pages/LandingPage/LandingPage"
import ChaptersPage from "./pages/ChaptersPage/ChaptersPage";
import EventDashboardPage from "./pages/EventDashboardPage/EventDashboardPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import EventsPage from "./pages/EventsPage/EventsPage"
import ContactPage from "./pages/ContactPage/ContactPage";
import EventPage from './pages/EventPage/EventPage'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import MessagePage from './pages/MessagesPage/MessagePage'
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom"
import {Provider} from 'react-redux'
import {loadUser} from "./redux/actions/auth"
import {fetchEvent} from "./redux/actions/events"
import store from './redux/store'
import Nav from './components/Nav/Nav'
import {Elements} from '@stripe/react-stripe-js'

import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51H46KAGdCnRnTHHAXrZNwGqvnwuwnSK7z5LRZpitsGnL4f2tgiWBgS8bvl3BjbNl4eYwnx0HAndlOS3Fa3KP0Q4w00N6G7GHJn')

function App() {


  useEffect(() => {
    store.dispatch(loadUser())
    store.dispatch(fetchEvent())
  }, [])

  return (
    <Provider store={store}>
      <Elements stripe={stripePromise}>
        <BrowserRouter>
          <Nav/>
          <Switch>
            <Route path='/events/:id' component={EventPage} />
            <Route path="/about" component={AboutPage} />
            <PrivateRoute path='/dashboard' component={DashboardPage}/>
            <PrivateRoute path='/messages' component={MessagePage}/>
            <PrivateRoute path="/create-events" component={EventDashboardPage}/>
            <Route path="/chapters" component={ChaptersPage} />
            <Route exact strict path="/events" component={EventsPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/" component={LandingPage} />
            
          </Switch>
        </BrowserRouter>
      </Elements>
    </Provider>
  );
}

export default App;
