import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './src/reducers'

import Header from './src/components/Header'
import LibraryContainer from './src/containers/LibraryContainer'

export default () =>
  <Provider store={createStore(rootReducer)}>
    <View style={{ flex: 1 }}>
      <Header text="What's your STACK? 🤖" />
      <LibraryContainer />
    </View>
  </Provider>