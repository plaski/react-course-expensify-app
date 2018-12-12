import { createStore } from 'redux'

const incrementCount = ({ incermentBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incermentBy
})

const decrementCount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incermentBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case "SET":
      return {
        count: action.count
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCount({ incermentBy: 3 }))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 6 }))

store.dispatch(setCount({ count: 150 }))