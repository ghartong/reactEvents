import {filter} from 'lodash'

export const SET_LOADING = 'event/SET_LOADING'
export const GET_EVENTS = 'event/GET_EVENTS'
export const LOAD_EVENT = 'event/LOAD_EVENT'
export const RESET_EVENT = 'event/RESET_EVENT'

const initialState = {
    eventTitle: '',
    eventDate: '',
    id: null,
    eventList: [],
    isLoadingEvents: false
}

const fakeEventList = [
    {eventTitle: 'Bob', eventDate: 'tomorrow', id: 1},
    {eventTitle: 'Foo', eventDate: 'yesterday', id: 2},
    {eventTitle: 'Bar', eventDate: 'today', id: 3}
]


export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoadingEvents: action.message
    }

    case GET_EVENTS:
      return {
        ...state,
        eventList: action.message
    }

    case LOAD_EVENT:
        return {
            ...state,
            id: action.message.id,
            eventTitle: action.message.eventTitle,
            eventDate: action.message.eventDate
    }

    case RESET_EVENT:
        return {
            ...state,
            id: null,
            eventTitle: '',
            eventDate: ''
    }

    default:
      return state
  }
}

export const getEvents = () => {
  return dispatch => {
    dispatch({
        type: SET_LOADING,
        message: true
    })

    // GET EVENTS FROM SOMEWHERE

    dispatch({
      type: GET_EVENTS,
      message: fakeEventList
    })

    dispatch({
        type: SET_LOADING,
        message: false
    })
  }
}

export const loadEvent = (e_id) => {
    return dispatch => {
      dispatch({
          type: SET_LOADING,
          message: true
      })
  
      // Load EVENT FROM SOMEWHERE
      console.log('X<<<<<< ,', fakeEventList)
      let evt = filter(fakeEventList, {'id': e_id * 1})
      console.log('X<<<<<< ,', evt)
      if (evt.length) {
        dispatch({
            type: LOAD_EVENT,
            message: evt[0]
        })    
      } else {
        dispatch({
            type: RESET_EVENT
        })
      }
  
      dispatch({
          type: SET_LOADING,
          message: false
      })
    }
  }
  