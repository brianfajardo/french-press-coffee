import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default Header = ({ text }) => {
  const { viewStytle, textStyle } = styles

  return (
    <View style={viewStytle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  )
}

Header.propTypes = {
  text: PropTypes.string.isRequired
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
    elevation: 1
  },
  textStyle: {
    fontSize: 16,
    color: 'white'
  }
})