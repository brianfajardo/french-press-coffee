import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import LibraryList from '../components/LibraryList'

class LibraryContainer extends Component {
  render() {
    return <LibraryList {...this.props} />
  }
}

const mapStateToProps = ({ library }) => ({
  library
})

LibraryContainer.propTypes = {
  library: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  ).isRequired
}

export default connect(mapStateToProps)(LibraryContainer)
