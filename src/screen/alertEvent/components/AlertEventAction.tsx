import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { HAPPY_BLUE } from '../../../shared/constants';

function AlertEventAction(): React.JSX.Element {
  return (
    <Pressable style={styleAlertEvent.button}>
      <Text style={styleAlertEvent.text}>
        Volver al inicio
      </Text>
    </Pressable>
  )
}


const styleAlertEvent = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    height: 42,
    width: '90%',
    backgroundColor: HAPPY_BLUE,
    borderRadius: 16,
  },
  text: {
    color: 'white',
    fontSize: 16,
    margin: 'auto',
    fontFamily: 'Nunito Bold'

  }
})

export default AlertEventAction;

