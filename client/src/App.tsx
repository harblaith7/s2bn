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
import Nav from './components/Nav/Nav';
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import keys from "./config/dev"

const stripePromise = loadStripe(keys.PUBLISHABLE_KEY)

function App() {

  useEffect(() => {
    store.dispatch(loadUser())
    store.dispatch(fetchEvent())
  }, [])

  return (
    <Elements
      stripe={stripePromise}
    >
      <Provider store={store}>
          <BrowserRouter>
            <Nav/>
            <Switch>
              <Route path='/events/:id' component={EventPage} />
              <Route path="/about" component={AboutPage} />
              <PrivateRoute path='/dashboard' component={DashboardPage}/>
              <PrivateRoute path='/messages' component={MessagePage}/>
              <PrivateRoute path="/create-events" component={EventDashboardPage}/>
              <Route path="/chapters/:city" component={ChaptersPage} />
              <Route exact strict path="/events" component={EventsPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/" component={LandingPage} />
              
            </Switch>
          </BrowserRouter>
      </Provider>
    </Elements>
  );
}

export default App;
