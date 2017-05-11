import React, { Component } from 'react'
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { Card, Divider } from 'react-native-elements'
import PropTypes from 'prop-types'
import { selectLibrary } from '../actions'

class LibraryListItem extends Component {

  render() {
    const { id, title, description, selectLibrary } = this.props
    const { titleStyle, dividerStyle } = style

    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <Card>
            <Text style={titleStyle}>{title}</Text>
            <Divider style={dividerStyle} />
            <Text>{description}</Text>
          </Card>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default connect(null, { selectLibrary })(LibraryListItem)

LibraryListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  selectLibrary: PropTypes.func.isRequired
}

const style = StyleSheet.create({
  titleStyle: {
    fontSize: 18
  },
  dividerStyle: {
    marginBottom: 10
  }
})