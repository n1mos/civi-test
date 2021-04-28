import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'

import MessagesActions from 'App/Stores/Messages/Actions'
import GradientBg from 'App/Components/GradientBg/GradientBg'
import MessageList from 'App/Components/MessageList/MessageList'
import NavigationService from 'App/Services/NavigationService'

import Styles from './HomeScreen.style'

class HomeScreen extends React.Component {
  handleMessagePress = (id) => {
    const { messages } = this.props
    const message = messages.find(m => m.id === id)

    this.props.addReadMessages(id)

    NavigationService.navigate('DetailsScreen', { message })
  }

  handleOnRefreshPress = () => {
    this.props.fetchMessages()
  }

  render() {
    const { messages, messagesIsLoading, readMessages } = this.props

    return (
      <GradientBg style={Styles.container}>
        {messages === null || messagesIsLoading ? (
          <View style={Styles.loadingWrapper}>
            <ActivityIndicator size={100} color="#FFF" />
          </View>
        ) : (
          <MessageList messages={messages} readMessages={readMessages} onMessagePress={this.handleMessagePress} onRefreshPress={this.handleOnRefreshPress} />
        )}
      </GradientBg>
    )
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  messagesIsLoading: state.messages.messagesIsLoading,
  messagesErrorMessage: state.messages.messagesErrorMessage,
  readMessages: state.messages.readMessages,
})

const mapDispatchToProps = (dispatch) => ({
  fetchMessages: () => dispatch(MessagesActions.fetchMessages()),
  addReadMessages: (id) => dispatch(MessagesActions.addReadMessages(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
