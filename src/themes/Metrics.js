import { Dimensions, Platform } from 'react-native';
// import { isIphoneX } from 'react-native-iphone-x-helper'

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  heightHeader: 48,

  paddingContent: 14,
  paddingContentHome: 20,
  
  buttonMedium: 40,

  radiusExtra: 24,
  radius: 8,
  radiusLight: 3,
  borderWidth: .5,
};

export default metrics;
