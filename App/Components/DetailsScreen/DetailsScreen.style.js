import { StyleSheet, StatusBar } from 'react-native'

import { Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight + 20,
  },
  messageContainer: {
    flexGrow: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  messageLabel: {
    ...Fonts.QuicksandBold,
    color: Colors.black
  },
  messageSubjectText: {
    ...Fonts.QuicksandMedium,
    color: Colors.black,
    marginBottom: 20
  },
  messageDetailText: {
    ...Fonts.QuicksandMedium,
    color: Colors.black
  },
})
