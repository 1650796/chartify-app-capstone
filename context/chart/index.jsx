import {useContext, createContext, useReducer} from 'react'
import initialState from './state'
import reducer from './reducer'

export const chartContext = createContext()

export const useChartContext = () => {
  const context = useContext(chartContext)
  if (context === undefined)
    throw new Error('useChartContext must be used within ChartProvider')
  return context
}

export const ChartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <chartContext.Provider {...props} value={[state, dispatch]} />
}