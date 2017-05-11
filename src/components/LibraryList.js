import React, { Component } from 'react'
import { ListView } from 'react-native'
import PropTypes from 'prop-types'

import LibraryListItem from './LibraryListItem'

export default class LibraryList extends Component {
  componentWillMount() {
    // Initializing a dataSource for ListView
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    this.dataSource = ds.cloneWithRows(this.props.library)
  }

  renderRow(library) {
    // renderRow renders all items in the library dataSource
    return <LibraryListItem {...library} />
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

LibraryList.propTypes = {
  library: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string
    })
  ).isRequired
}