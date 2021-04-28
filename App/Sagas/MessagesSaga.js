import { put, call } from "redux-saga/effects";

import MessagesActions from 'App/Stores/Messages/Actions'
import { messagesService } from 'App/Services/MessagesService'

export function* fetchMessages(action) {
  yield put(MessagesActions.fetchMessagesLoading())

  const messages = yield call(messagesService.fetchMessages, action)

  if (messages) {
    yield put(MessagesActions.fetchMessagesSuccess(messages))
  } else {
    yield put(MessagesActions.fetchMessagesFailure('There was an error. Please try again later.'))
  }
}