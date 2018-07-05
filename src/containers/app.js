import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from './home/home-index'
import About from './about/about-index'
import Events from './events/events-index'
import Event from './event/event-index'
import FourOhFour from './home/four-oh-four'
import '../scss/app.scss'

const App = () => (
  <div className="col-md-12">
    <header className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav nav-pills">
          <li role="presentation" className="active"><Link to="/">Home</Link></li>
          <li role="presentation"><Link to="/about-us">About</Link></li>
          <li role="presentation"><Link to="/events">Event List</Link></li>
        </ul>
      </div>
    </header>

    <main className="col-md-11 col-md-offset-1">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/event/:id?" component={Event} />
        <Route component={FourOhFour} />
      </Switch>
    </main>
  </div>
)

export default App
