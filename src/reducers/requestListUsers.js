import {
  INVALIDATE_DATA,
  REQUEST_DATA,
  RECEIVE_DATA,
  SET_USERS_DATA,
} from './../actions/getListUsers'

function requestData(state = {
  isFetching: false,
  didInvalidate: false,
  data: {}
}, action) {
  switch (action.type) {
    case INVALIDATE_DATA:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        data: action.data
      })
    case SET_USERS_DATA:
      return Object.assign({}, state, {
        usersData: action.data
      })
    default:
      return state
  }
}

export default requestData