import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { MessagesTypes } from './Actions'

export const fetchMessagesLoading = (state) => ({
  ...state,
  messagesIsLoading: true,
  messagesErrorMessage: null,
})

export const fetchMessagesSuccess = (state, { messages }) => {
  return {
    ...state,
    messages,
    messagesIsLoading: false,
    messagesErrorMessage: null,
  }
}

export const fetchMessagesFailure = (state, { errorMessage }) => ({
  ...state,
  messages: {},
  messagesIsLoading: false,
  messagesErrorMessage: errorMessage,
})

export const addReadMessages = (state, { id }) => {
  const newReadMessages = [...state.readMessages]

  if (newReadMessages.indexOf(id) === -1) {
    newReadMessages.push(id)
  }

  return {
    ...state,
    readMessages: newReadMessages
  }
}

export const removeReadMessages = (state, { id }) => {
  const newReadMessages = state.readMessages.filter(n => n != id)

  return {
    ...state,
    readMessages: newReadMessages
  }
}

export const reducer = createReducer(INITIAL_STATE, {
  [MessagesTypes.FETCH_MESSAGES_LOADING]: fetchMessagesLoading,
  [MessagesTypes.FETCH_MESSAGES_SUCCESS]: fetchMessagesSuccess,
  [MessagesTypes.FETCH_MESSAGES_FAILURE]: fetchMessagesFailure,
  [MessagesTypes.ADD_READ_MESSAGES]: addReadMessages,
  [MessagesTypes.REMOVE_READ_MESSAGES]: removeReadMessages,
})
