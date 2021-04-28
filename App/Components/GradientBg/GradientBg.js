import React from 'react';
import Gradient from 'react-native-linear-gradient';

const GradientBg = ({ style, children }) => (
  <Gradient colors={['#1E90FF', '#FF00FF']} style={style}>
    {children}
  </Gradient>
)

export default GradientBg