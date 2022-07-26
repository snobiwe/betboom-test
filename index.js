import React from 'react'
import { View, Text, Button, StyleSheet, LogBox } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native'

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
]

const HomeScreen = (props) => {
  console.log(props)
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x='quarter' y='earnings' />
        </VictoryChart>
      </View>
      <Button
        title='Push Settings Screen'
        color='#710ce3'
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Settings',
            },
          })
        }
      />
    </View>
  )
}
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
    },
  },
  bottomTab: {
    text: 'Home',
  },
}

const SettingsScreen = () => (
  <View style={styles.root}>
    <Text>Settings Screen</Text>
  </View>
)
SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Settings',
    },
  },
  bottomTab: {
    text: 'Settings',
  },
}

Navigation.registerComponent('Home', () => HomeScreen)
Navigation.registerComponent('Settings', () => SettingsScreen)

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
    dotIndicator: {
      color: '#000',
      visible: true,
    },
    fontSize: 14,
    selectedFontSize: 34,
  },
})

LogBox.ignoreLogs(['Require cycle: node_modules/victory'])

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
                    name: 'Home',
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
                    name: 'Settings',
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

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
})
