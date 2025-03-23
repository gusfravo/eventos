import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import IconView from '../../../shared/components/IconView/IconView';
import { InputsForm } from '../hooks/newEventHook';
import { DEEP_GRAY, OLD_GRAY, SMOKE } from '../../../shared/constants';

//TODO- Aceptar envio de cambio de icono y cambio de background
function NewEventIcon({ inputs }: { inputs: InputsForm }): React.JSX.Element {
  return (
    <View style={eventIconsStyle.iconEventForm}>

      <View style={eventIconsStyle.container}>
        <View style={eventIconsStyle.mainContainer}>
          <IconView icon={inputs.icon ? inputs.icon : 'solar:clipboard-list-bold'} iconViewOptions={{ background: inputs.color ? inputs.color : '#B4DE60' }} />
          <View style={[eventIconsStyle.box, eventIconsStyle.detailBox]}>
            <Text style={eventIconsStyle.detailsBoxMainText}>{inputs.name}</Text>
            <Text style={eventIconsStyle.detailsSoftText}>22/04/2024</Text>
          </View>
          <Text style={[eventIconsStyle.box, eventIconsStyle.titleDays]}>x días</Text>
        </View>

        <Text style={[eventIconsStyle.detailsSoftText]}>Ocurrencias: 1</Text>
      </View>

    </View>
  );
}

const eventIconsStyle = StyleSheet.create({
  iconEventForm: {
    marginVertical: 32,
    marginHorizontal: 'auto',
    width: '95%',
  },
  container: {
    padding: 8,
    height: 70,
    marginVertical: 16,
    borderColor: SMOKE,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  mainContainer: {
    height: 56,
    alignContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: 10,
    width: '100%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#F6F6F6',
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  box: {
    width: '25%',
  },
  detailBox: {
    width: '55%',
  },
  detailsBoxMainText: {
    width: '100%',
    fontFamily: 'Nunito Bold',
    fontSize: 14,
  },
  detailsSoftText: {
    width: '100%',
    fontFamily: 'Nunito Regular',
    fontSize: 10,
    color: '#8E8E8E',
    verticalAlign: 'bottom',
    marginTop: 4,
  },
  titleDays: {
    textAlign: 'right',
    fontFamily: 'Nunito Bold',
    fontSize: 14,
  },
});

export default NewEventIcon;
