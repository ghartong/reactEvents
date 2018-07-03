import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    loadEvent
} from '../../modules/event'

class Events extends React.Component {
    componentDidMount() {
        this.param_id = this.props.match.params.id ? this.props.match.params.id : 0
        this.props.loadEvent(this.param_id)
    }

    constructor(props) {
        super(props)

        this.loadEvent = this.props.loadEvent.bind(this)
    }

    render() {
        const event = this.props.event

        return(
            <div>
                <h1>Event</h1>
                <hr />
                { event.id ?
                    <div id="event">
                        <h2>{event.eventTitle}</h2>
                        <p>{event.eventDate}</p>
                        <span className="eventId">{event.id}</span>
                    </div>
                :
                    <div id="event-empty">
                        Sorry, that event seems to not exist.
                    </div>
                }
          </div>        
        )
    }
}

const mapStateToProps = state => ({
  event: {
      id: state.event.id,
      eventTitle: state.event.eventTitle,
      eventDate: state.event.eventDate
  },
  isLoadingEvents: state.event.isLoadingEvents,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadEvent
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Events)
