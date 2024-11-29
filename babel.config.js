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
          'solar:home-wifi-angle-line-duotone',
          'solar:donut-bitten-bold',
          'solar:pallete-2-bold',
          'solar:telescope-bold',
          'solar:armchair-2-bold',
          'solar:bicycling-bold',
          'solar:link-square-bold',
          'solar:clipboard-list-bold',
          'solar:add-circle-broken',
          'solar:settings-bold'
          // Add more icons here
        ],
      },
    ],
  ]
};
