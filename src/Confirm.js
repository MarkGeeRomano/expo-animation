import React from 'react'
import { Text, Modal, View } from 'react-native'
import { CardSection } from './CardSection'
import { Button } from './Button'
import styles from '../../styles/confirm'

const Confirm = (props) => {
  return (
    <Modal
      animationType="slide"
      onRequestClose={() => { }}
      transparent
      visible={props.visible}
    >
      <View style={styles.containerStyle}>
        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.textStyle}>
            This is a heckin' chonker. All chonkers are good. You can't swipe left.
          </Text>
        </CardSection>

        <CardSection>
          <Button onPress={props.onAccept}>I see the light</Button>
        </CardSection>
      </View>
    </Modal>
  )
}

const styles = {
  cardSectionStyle: { justifyContent: 'center' },

  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },

  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, .75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
}

export { Confirm }