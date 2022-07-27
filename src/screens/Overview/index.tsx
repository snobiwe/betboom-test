import React, { useCallback, useState } from 'react'
import { View, Button, SafeAreaView, ScrollView, Text } from 'react-native'
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory-native'

import styles from './styles'
import ApiService from '../../lib/Api'

const OverviewScreen = (props: Props) => {
  const [overviewData, setOverviewData] = useState<[{}]>([{}])

  console.log('props', props)
  const api = new ApiService()
  const getOverviewData = useCallback(async () => {
    try {
      const { data } = await api.getOverview()
      setOverviewData(data)
      console.log('data', data.length)
      return data
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <ScrollView>
      <View style={styles.root}>
        <View style={styles.container}>
          <Text style={styles.chartLabel}>Win</Text>
          <VictoryChart width={350} theme={VictoryTheme.material}>
            <VictoryLine
              style={{
                data: { stroke: '#00ff51' },
                parent: { border: '1px solid #ccc' },
              }}
              // data={overviewData}
            />
          </VictoryChart>
        </View>
        <View style={styles.container}>
          <Text style={styles.chartLabel}>Lose</Text>
          <VictoryChart width={350} theme={VictoryTheme.material}>
            <VictoryLine
              style={{
                data: { stroke: '#c43a31' },
                parent: { border: '1px solid #ccc' },
              }}
              // data={overviewData}
            />
          </VictoryChart>
        </View>
        <Button title='Push Settings Screen' color='#710ce3' onPress={() => getOverviewData()} />
      </View>
    </ScrollView>
  )
}
OverviewScreen.options = {
  topBar: {
    title: {
      text: 'Overview',
    },
  },
  bottomTab: {
    text: 'Overview',
  },
}

export default OverviewScreen

interface Props {
  componentId: string
}
