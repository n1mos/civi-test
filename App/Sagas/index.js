import { takeLatest, all } from 'redux-saga/effects'
import { MessagesTypes } from 'App/Stores/Messages/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchMessages } from './MessagesSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(MessagesTypes.FETCH_MESSAGES, fetchMessages)
  ])
}
