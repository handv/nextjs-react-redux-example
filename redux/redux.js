// lib/redux.js
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'
import reducer from './reducers/rootReducer'

const makeConfiguredStore = (reducer, initialState) =>
  createStore(reducer, initialState, applyMiddleware(thunk))

export const makeStore = (initialState, {isServer, req, debug, storeKey}) => {
  if (isServer) {
    initialState = initialState

    return makeConfiguredStore(reducer, initialState)
  } else {
    // we need it only on client side
    const {persistStore, persistReducer} = require('redux-persist')
    const storage = require('redux-persist/lib/storage').default

    const persistConfig = {
      key: 'nextjs',
      whitelist: ['fromClient'], // make sure it does not clash with server keys
      storage,
    }

    const persistedReducer = persistReducer(persistConfig, reducer)
    const store = makeConfiguredStore(persistedReducer, initialState)

    store.__persistor = persistStore(store) // Nasty hack

    return store
  }
}
