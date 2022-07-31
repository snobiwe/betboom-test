import React from 'react'
import { Text, View } from 'react-native'

import styles from './styles'
import PickerComponent from '../../components/picker'

const PlayersScreen = () => (
  <View style={styles.root}>
    <PickerComponent />
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
