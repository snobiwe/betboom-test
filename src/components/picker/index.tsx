import React, { memo } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { Picker } from '@react-native-picker/picker'

import styles from './styles'

const PickerComponent = memo(() => {
  console.log('123')
  return (
    <View>
      <View style={styles.pickerHeader}>
        <TouchableOpacity>
          <Text style={styles.pickerCloseButton}>Готово</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.picker}>
        <Picker>
          <Picker.Item label='132' />
        </Picker>
      </View>
    </View>
  )
})

export default PickerComponent
