import * as actions from './actions'

export default function reducer(state, {action, payload}) {
  switch(action) {
    case actions.CREATE_CHART:
      return {...state, userCharts: payload}
    default:
      return state
  }
}