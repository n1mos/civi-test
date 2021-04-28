import axios from 'axios'

import { Config } from 'App/Config'

const messagesApiClient = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

function fetchMessages() {
  const url = `messages`

  return messagesApiClient.get(url).then((response) => {
    if (response.status == 200) {
      return response.data
    }

    return null
  }).catch((e) => console.log(e))
}

export const messagesService = {
  fetchMessages,
}
