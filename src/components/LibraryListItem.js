import React, { Component } from 'react'
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { connect } from 'react-redux'
import { Card, Divider } from 'react-native-elements'
import PropTypes from 'prop-types'
import * as actions from '../actions/'

class LibraryListItem extends Component {

  renderDescription() {
    const { selectedLibraryID, id, description } = this.props

    return (
      selectedLibraryID === id
        ? <View>
            <Divider style={style.dividerStyle} />
            <Text>{description}</Text>
          </View>
        : null
    )
  }

  render() {
    const { id, title, selectLibrary } = this.props

    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <Card>
            <Text style={style.titleStyle}>{title}</Text>
            {this.renderDescription()}
          </Card>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const mapStateToProps = state => ({
  selectedLibraryID: state.selectedLibraryID
})

LibraryListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  selectLibrary: PropTypes.func.isRequired,
  selectedLibraryID: PropTypes.number
}

const style = StyleSheet.create({
  titleStyle: {
    fontSize: 18
  },
  dividerStyle: {
    marginBottom: 10
  }
})

export default connect(mapStateToProps, actions)(LibraryListItem)