import {
    useColorScheme,
  } from 'react-native';
import { WHITE_SMOKE, DEEP_GRAY } from '../constants'

const isDarkMode = useColorScheme() === 'dark';

export const backgroundStyle = {
  backgroundColor: isDarkMode ? DEEP_GRAY : WHITE_SMOKE
};