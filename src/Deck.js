import React from 'react'
import {
  View,
  PanResponder,
  Animated,
  Dimensions
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

class Deck extends React.Component {
  constructor() {
    super()

    const position = new Animated.ValueXY()
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gesture) =>
        position.setValue({ x: gesture.dx, y: gesture.dy }),
      onPanResponderRelease: () => this.resetPosition()
    })

    this.state = { panResponder, position }
  }

  getCardStyle() {
    const { position } = this.state

    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    })

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    }
  }

  resetPosition() {
    const toValue = { toValue: { x: 0, y: 0 } }
    Animated.spring(this.state.position, toValue).start()
  }

  renderCards() {
    return this.props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={item.id}
            style={this.getCardStyle()}
            {...this.state.panResponder.panHandlers}
          >
            {this.props.renderCard(item)}
          </ Animated.View>
        )
      } else {
        return this.props.renderCard(item)
      }
    })
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    )
  }
}

export default Deck