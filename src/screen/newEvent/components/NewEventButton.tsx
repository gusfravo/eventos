import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { HAPPY_BLUE, OLD_GRAY } from '../../../shared/constants';

interface Props {
  onPress: () => void,
  disabled: () => boolean
}

function NewEventButton({ onPress, disabled }: Props): React.JSX.Element {

  const isValid = disabled();

  return (
    <Pressable style={isValid ? buttonStyle.button : buttonStyle.disabledButton} onPress={onPress} disabled={!isValid}>
      <Text style={buttonStyle.text}>Guardar</Text>
    </Pressable>
  );

}

const buttonStyle = StyleSheet.create({
  button: {
    height: 42,
    width: '100%',
    backgroundColor: HAPPY_BLUE,
    borderRadius: 16,
    marginVertical: 16,
  },
  disabledButton: {
    height: 42,
    width: '100%',
    backgroundColor: OLD_GRAY,
    borderRadius: 16,
    marginVertical: 16,
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    margin: 'auto',
    fontFamily: 'Nunito Bold',
  },
});

export default NewEventButton;
