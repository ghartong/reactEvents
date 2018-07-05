import React from 'react'
import PropTypes from 'prop-types'

const EventListItem = props => (
  <div className="eventListItem">
    <h2>{props.e_title}</h2>
    <p>{props.e_date}</p>
    <button className="btn btn-primary" onClick={() => props.handleEventClick(props.e_id)}>view details</button>
  </div>
)

EventListItem.propTypes = {
    e_id: PropTypes.number,
    e_title: PropTypes.string,
    e_date: PropTypes.string,
    handleEventClick: PropTypes.func
}

EventListItem.defaultProps = {
    e_id: 0,
    e_title: 'Not Found',
    e_date: 'Unknown',
    handleEventClick: () => true
}

export default EventListItem
