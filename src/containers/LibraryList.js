import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class LibraryList extends Component {
  render() {
    return (
      <View />
    )
  }
}

const mapStateToProps = ({ library }) => ({
  library
})

LibraryList.propTypes = {
  library: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
    })
  ).isRequired
}

export default connect(mapStateToProps)(LibraryList)
