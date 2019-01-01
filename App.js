import React from 'react'
import { View, Text } from 'react-native'
import { Card, Button } from 'react-native-elements'
import Deck from './src/Deck'

export default class App extends React.Component {
  renderCard(item) {
    return (
      <Card
        title={item.text}
        image={{ uri: item.uri }}
      >
        <Text style={{ marginBottom: 10 }}>
          a heckin c h o n k e r
        </Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor='#03A9F4'
          title="View Now!"
        />
      </Card>
    )
  }

  renderNoMoreCards() {
    return (
      <Card title="All Done!">
        <Text style={{ marginBottom: 10 }}>
          There's no more content here!
        </Text>
        <Button
          backgroundColor="#03A9F4"
          title="Get more!"
        />
      </Card>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          data={DATA}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
}

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://ec2-52-55-149-172.compute-1.amazonaws.com' },
  { id: 2, text: 'Card #2', uri: 'http://ec2-52-55-149-172.compute-1.amazonaws.com' },
  { id: 3, text: 'Card #3', uri: 'http://ec2-52-55-149-172.compute-1.amazonaws.com' },
  { id: 4, text: 'Card #4', uri: 'http://ec2-52-55-149-172.compute-1.amazonaws.com' },
  { id: 5, text: 'Card #5', uri: 'http://ec2-52-55-149-172.compute-1.amazonaws.com' },
  { id: 6, text: 'Card #6', uri: 'http://ec2-52-55-149-172.compute-1.amazonaws.com' },
  { id: 7, text: 'Card #7', uri: 'http://ec2-52-55-149-172.compute-1.amazonaws.com' },
  { id: 8, text: 'Card #8', uri: 'http://ec2-52-55-149-172.compute-1.amazonaws.com' },
]