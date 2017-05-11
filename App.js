import React from 'react'
import { Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './src/reducers'

const store = createStore(rootReducer)

export default () =>
  <Provider store={store}>
    <Text>REDUX ONLINE ⚡️ </Text>
  </Provider>