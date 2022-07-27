import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

const PlayersScreen = () => (
  <View style={styles.root}>
    <Text>Settings Screen</Text>
  </View>
)

PlayersScreen.options = {
  topBar: {
    title: {
      text: 'Players',
    },
  },
  bottomTab: {
    text: 'Players',
  },
}

export default PlayersScreen
