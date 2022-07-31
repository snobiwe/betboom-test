import React from 'react'
import { View, Text, Button, StyleSheet, LogBox } from 'react-native'
import { Navigation } from 'react-native-navigation'

import navigationMap from './src/Routes'
import RegisterScreens from './src/navigation'

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#000',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTab: {
    fontSize: 20,
    selectedFontSize: 34,
  },
})

LogBox.ignoreLogs(['Require cycle: node_modules/victory'])

RegisterScreens()
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(navigationMap)
})
