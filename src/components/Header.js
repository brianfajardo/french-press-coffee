import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default ({ text }) => {
  const { viewStytle, textStyle } = styles

  return (
    <View style={viewStytle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStytle: {
    backgroundColor: '#62CAC3',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 16,
    color: 'white'
  }
})