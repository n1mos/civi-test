import React from 'react'
import { ScrollView, View, Text } from 'react-native'

import GradientBg from 'App/Components/GradientBg/GradientBg'
import Header from 'App/Components/Header/Header'

import Styles from './DetailsScreen.style'

const DetailsScreen = ({ navigation: { state: { params: { message }, }, } }) => {
  return (
    <GradientBg style={Styles.container}>
      <Header showBackButton />

      <ScrollView style={Styles.messageContainer}>
        <Text style={Styles.messageLabel}>Subject:</Text>
        <Text style={Styles.messageSubjectText}>{message.subject}</Text>
        <Text style={Styles.messageLabel}>Detail:</Text>
        <Text style={Styles.messageDetailText}>{message.detail}</Text>
      </ScrollView>
    </GradientBg>
  )
}

export default DetailsScreen
