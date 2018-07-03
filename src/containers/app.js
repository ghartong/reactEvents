import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './home'
import About from './about'
import Events from './events'
import Event from './event'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
      <Link to="/events">Event List</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/event/:id?" component={Event} />
    </main>
  </div>
)

export default App
