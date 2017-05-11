import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './src/reducers'

import Header from './src/components/Header'
import LibraryList from './src/containers/LibraryList'

const store = createStore(rootReducer)

export default () =>
  <Provider store={store} style={{ flex: 1 }}>
    <View>
      <Header text="What's your STACK? 🤖" />
      <LibraryList />
    </View>
  </Provider>