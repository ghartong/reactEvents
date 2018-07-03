import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    getEvents
} from '../../modules/event'
import EventListItem from '../../components/event-list-item'

class Events extends React.Component {
    componentDidMount() {
        this.props.getEvents()
    }

    handleEventClick(item) {
        console.log('CLICKED ON ME, EVENT ID: ', item)
        this.props.history.push(`/event/${item}`)
    }

    constructor(props) {
        super(props)

        this.getEvents = this.props.getEvents.bind(this)
        this.handleEventClick = this.handleEventClick.bind(this)
    }

    render() {
        const eventList = this.props.eventList

        return(
            <div>
                <h1>Event List</h1>
                <p>Count: {eventList.length}</p>
        
                <button onClick={this.getEvents}>Load Events</button>

                <hr />
                <div id="event-list">
                    {eventList.map(event => {
                        return <EventListItem e_id={event.id} e_title={event.eventTitle} e_date={event.eventDate} handleEventClick={this.handleEventClick} key={event.id} />
                    })}
                </div>
          </div>        
        )
    }
}

const mapStateToProps = state => ({
  eventList: state.event.eventList,
  isLoadingEvents: state.event.isLoadingEvents,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getEvents
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events)
