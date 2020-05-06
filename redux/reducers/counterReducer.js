import {
  DECREMENT_COUNTER,
  INCREMENT_COUNTER,
  FETCH_PRACTICE_DATA,
} from '../actions/counterActions'

const counterReducer = (state = {value: 0}, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {...state, value: state.value + 1};
        case DECREMENT_COUNTER:
            return {...state, value: state.value - 1};
        case FETCH_PRACTICE_DATA:
            return {...state, data: action.data}
        default:
            return {...state};
    }
};

export default counterReducer;
