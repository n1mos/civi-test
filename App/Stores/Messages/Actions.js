import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchMessages: [],
  fetchMessagesLoading: null,
  fetchMessagesSuccess: ['messages'],
  fetchMessagesFailure: ['errorMessage'],
  fetchReadMessages: [],
  addReadMessages: ['id'],
  removeReadMessages: ['id']
})

export const MessagesTypes = Types
export default Creators
