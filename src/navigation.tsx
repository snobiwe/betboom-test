import React from 'react'

import { Navigation } from 'react-native-navigation'
import { withNavigationProvider } from 'react-native-navigation-hooks'

import AppProvider from '../App'
import store from './AppState'

import OverviewScreen from '../src/screens/Overview'
import PlayersScreen from '../src/screens/Players'
import CreateScreen from '../src/screens/Create'

const WrapScreen = (Screen: any) => (props: {}) =>
  (
    <AppProvider store={store}>
      <Screen {...props} />
    </AppProvider>
  )

const RegisterScreens = () => {
  Navigation.registerComponent(
    'Overview',
    () => withNavigationProvider(WrapScreen(OverviewScreen)),
    () => OverviewScreen
  )
  Navigation.registerComponent(
    'Players',
    () => withNavigationProvider(WrapScreen(PlayersScreen)),
    () => PlayersScreen
  )
  Navigation.registerComponent(
    'Create',
    () => withNavigationProvider(WrapScreen(CreateScreen)),
    () => CreateScreen
  )
}

export default RegisterScreens
