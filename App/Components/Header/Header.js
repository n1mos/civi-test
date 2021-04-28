import React from 'react';
import { View, Image } from 'react-native';

import Touchable from 'App/Components/Touchable/Touchable'
import NavigationService from 'App/Services/NavigationService'
import { Images } from 'App/Theme'

import Styles from './Header.style'

const Header = ({ showRefreshButton, showBackButton, onRefreshPress }) => {
  const renderRefreshButton = () => {
    if (!showRefreshButton) return

    return (
      <Touchable onPress={onRefreshPress}>
        <View style={Styles.buttonContainer}>
          <Image source={Images.refresh} resizeMode={'contain'} />
        </View>
      </Touchable>
    )
  }

  const renderBackButton = () => {
    if (!showBackButton) return

    return (
      <Touchable onPress={() => NavigationService.navigateBack()}>
        <View style={Styles.buttonContainer}>
          <Image source={Images.back} resizeMode={'contain'} />
        </View>
      </Touchable>
    )
  }

  return (
    <View styles={Styles.container}>
      {renderRefreshButton()}
      {renderBackButton()}
    </View>
  )
}

export default Header