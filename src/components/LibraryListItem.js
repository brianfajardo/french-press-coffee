import React, { Component } from 'react'
import { Text } from 'react-native'
import { Card, Divider } from 'react-native-elements'

export default class LibraryListItem extends Component {
  render() {
    const { title, description } = this.props
    return (
      <Card>
        <Text>{title}</Text>
        <Divider />
        <Text>{description}</Text>
      </Card>
    )
  }
}