import { put } from 'redux-saga/effects'

import MessagesActions from 'App/Stores/Messages/Actions'
import NavigationService from 'App/Services/NavigationService'

export function* startup(action) {
  yield put(MessagesActions.fetchMessages())

  NavigationService.navigateAndReset('MainScreen')
}
