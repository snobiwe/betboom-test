import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  picker: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    right: 0,
    left: 0,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  pickerHeader: {
    width: '100%',
    paddingTop: 16,
    paddingRight: 16,
  },
  pickerCloseButton: {
    textAlign: 'right',
    color: '#0eb5ef',
    marginBottom: 20,
  },
  dateSpinnerPicker: {
    alignSelf: 'center',
    width: '100%',
    height: 216,
  },
})
