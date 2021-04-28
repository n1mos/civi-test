import { StyleSheet } from 'react-native'

import { Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  messageContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 5
  },
  readMessageContainer: {
    opacity: 0.5
  },
  messageSubject: {
    ...Fonts.QuicksandMedium,
    color: Colors.black,
  },
  messageInfoWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  messageInfoText: {
    ...Fonts.QuicksandMedium,
    color: Colors.black
  },
})
