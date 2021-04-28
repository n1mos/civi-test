import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import moment from 'moment';

import Touchable from 'App/Components/Touchable/Touchable';
import Header from 'App/Components/Header/Header';

import Styles from './MessageList.style';

const MessageList = ({ messages, readMessages, onMessagePress, onRefreshPress }) => {
  const renderMessages = () => {
    const sortedMessages = messages.sort((a, b) => b.timestamp - a.timestamp)

    return sortedMessages.map((message) => {
      const isRead = readMessages.includes(message.id)
      const formattedDate = moment.unix(message.timestamp).format('ddd, MMM Do YYYY, HH:mm')

      return (
        <Touchable key={message.id} onPress={() => onMessagePress(message.id)}>
          <View style={[Styles.messageContainer, isRead && Styles.readMessageContainer]}>
            <View>
              <Text style={Styles.messageSubject} numberOfLines={1}>{message?.subject}</Text>
            </View>
            <View style={Styles.messageInfoWrapper}>
              <Text style={Styles.messageInfoText}>{isRead ? 'Read' : 'Unread'}</Text>
              <Text style={Styles.messageInfoText}>{formattedDate}</Text>
            </View>
          </View>
        </Touchable>
      )
    })
  }

  return (
    <ScrollView contentContainerStyle={Styles.contentContainer}>
      <Header showRefreshButton onRefreshPress={onRefreshPress} />

      {renderMessages()}
    </ScrollView>
  )
}

export default MessageList