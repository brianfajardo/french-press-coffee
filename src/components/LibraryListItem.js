import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Card, Divider } from 'react-native-elements'
import PropTypes from 'prop-types'

export default LibraryListItem = ({ id, title, description }) => {
  const { titleStyle, dividerStyle } = style

  return (
    <Card>
      <Text style={titleStyle}>{title}</Text>
      <Divider style={dividerStyle} />
      <Text>{description}</Text>
    </Card>
  )
}

LibraryListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}

const style = StyleSheet.create({
  titleStyle: {
    fontSize: 18
  },
  dividerStyle: {
    marginBottom: 10
  }
})