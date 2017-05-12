import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import { Card, Divider } from 'react-native-elements'
import PropTypes from 'prop-types'
import * as actions from '../actions/'

class LibraryListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  renderDescription() {
    const { shouldExpandRow, description } = this.props
    return (
      shouldExpandRow
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

const mapStateToProps = ({ selectedLibraryID }, { id }) => {
  // Boolean flag used to render selected library
  const shouldExpandRow = selectedLibraryID === id
  return { shouldExpandRow }
}

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