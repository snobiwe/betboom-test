import React, { useCallback, useState } from 'react'
import { View, Button, SafeAreaView, ScrollView, Text } from 'react-native'
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory-native'

import styles from './styles'
import ApiService from '../../lib/Api'

enum DAYS_TYPE {
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thursday',
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday',
}

type DateValueType = {
  day: DAYS_TYPE
  value: number
}

export type GlobalDataType = {
  name: string
  win: [DateValueType]
  loose: [DateValueType]
  bets: [DateValueType]
  id: string
}

const OverviewScreen = (props: Props) => {
  const daysValue = {
    [DAYS_TYPE.MONDAY]: 0,
    [DAYS_TYPE.TUESDAY]: 0,
    [DAYS_TYPE.WEDNESDAY]: 0,
    [DAYS_TYPE.THURSDAY]: 0,
    [DAYS_TYPE.FRIDAY]: 0,
    [DAYS_TYPE.SATURDAY]: 0,
    [DAYS_TYPE.SUNDAY]: 0,
  }

  console.log('props', props)
  const api = new ApiService()
  const getOverviewData = useCallback(async () => {
    try {
      const { data } = await api.getOverview()
      console.log('data', data)
      data.map((i) => {
        const winArray: [DateValueType] = i.win
        winArray.map((item) => {
          daysValue[item.day] = parseInt(daysValue[item.day], 10) + parseInt(item.value, 10)
        })
      })
      console.log('daysValue', daysValue)
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
