const React = require('react')
const Link = require('react-router-dom').Link
const UnorderedList = require('./UnorderedList')

const eventsArray = [
  'MLC 2018 - blah blah blah',
  'INC 2018 - blah blah blad',
  'MLC 2019 - addd'
]

/* the main page for the index route of this app */
const EventsContainer = function() {
  return (
    <div>
      <h1>Events (Holla)</h1>

      <Link to='/about'>Read about and Rate this app!</Link>


      <UnorderedList items={eventsArray} />

    </div>
  )
}

module.exports = EventsContainer
