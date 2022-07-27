import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

const CreateScreen = () => (
  <View style={styles.root}>
    <Text>Settings Screen</Text>
  </View>
)

CreateScreen.options = {
  topBar: {
    title: {
      text: 'Create',
    },
  },
  bottomTab: {
    text: 'Create',
  },
}

export default CreateScreen
