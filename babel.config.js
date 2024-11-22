module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins:[
    [
      'react-native-iconify/babel',
      {
        icons: [
          'mdi:heart',
          'mdi:home',
          'mdi:account',
          'feather:activity',
          'solar:4k-bold',
          'solar:wi-fi-router-bold',
          'solar:home-wifi-angle-line-duotone'
          // Add more icons here
        ],
      },
    ],
  ]
};
