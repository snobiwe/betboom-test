import React from 'react'
import { View, Text, Button, StyleSheet, LogBox } from 'react-native'
import { Navigation } from 'react-native-navigation'

import OverviewScreen from './src/screens/Overview'
import PlayersScreen from './src/screens/Players'
import CreateScreen from './src/screens/Create'

Navigation.registerComponent('Overview', () => OverviewScreen)
Navigation.registerComponent('Players', () => PlayersScreen)
Navigation.registerComponent('Create', () => CreateScreen)

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

// console.log(props)

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Overview',
                  },
                },
              ],
              options: {
                bottomTab: {
                  text: 'Tab 1',
                  // icon: require('../images/one.png'),
                  testID: 'FIRST_TAB_BAR_BUTTON',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Players',
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Create',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  })
})
