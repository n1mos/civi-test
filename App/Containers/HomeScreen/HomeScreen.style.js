import { StyleSheet, StatusBar } from 'react-native'

import { Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  loadingWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100
  }
})
