import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconView from '../../../shared/components/IconView/IconView';

function AlertEventContain(): React.JSX.Element {
  return (
    <View style={styleAlertEventContain.container}>
      <Text style={styleAlertEventContain.title}>
        Error
      </Text>
      <View style={styleAlertEventContain.iconBoxAlert}>
        <View style={styleAlertEventContain.iconOnThebox}>
          <IconView
            icon={'solar:clipboard-list-bold'}
            iconViewOptions={{ background: '#F64646', width: 70, height: 70, color: 'white' }} ></IconView>
        </View>
      </View>
      <Text style={styleAlertEventContain.message}>Hey! hubo un error inesperado</Text>
    </View >
  )
};

const styleAlertEventContain = StyleSheet.create({
  container: {
    width: '100%',
    padding: 16
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Nunito Black',
    fontSize: 32
  },
  iconBoxAlert: {
    paddingVertical: 32,
    margin: 'auto',
    width: 0,
    height: 0,
    borderLeftWidth: 135,
    borderRightWidth: 135,
    borderBottomWidth: 275,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#F64646', // Color del triángulo
    position: 'relative',
  },
  iconOnThebox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 275,
    marginTop: 197
  },
  message: {
    textAlign: 'center',
    fontFamily: 'Nunito',
    marginVertical: 48,
    fontSize: 20
  }
})

export default AlertEventContain;
