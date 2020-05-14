import axios from 'axios'
//Action Types
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const FETCH_PRACTICE_DATA = 'FETCH_PRACTICE_DATA'

//Action Creator
export const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
})

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER,
})

export const fetchPracticeDataEnd = (data) => ({
  type: FETCH_PRACTICE_DATA,
  data,
})

export const fetchPracticeData = () => async (dispatch) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users')
  return dispatch(fetchPracticeDataEnd(res && res.data))
}
