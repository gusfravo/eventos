import React from "react";
import { StyleSheet, View } from "react-native";
import IconView from "../../../shared/components/IconView/IconView";
import { InputsForm } from "../hooks/newEventHook";

//TODO- Aceptar envio de cambio de icono y cambio de background
function NewEventIcon({ inputs }: { inputs: InputsForm }): React.JSX.Element {
  return (
    <View style={eventIconsStyle.iconEventForm}>
      <IconView
        icon={inputs.icon ? inputs.icon : 'solar:clipboard-list-bold'}
        iconViewOptions={{ background: inputs.color ? inputs.color : '#B4DE60', width: 96, height: 96, color: 'white' }}></IconView>
    </View>
  );
}

const eventIconsStyle = StyleSheet.create({
  iconEventForm: {
    marginVertical: 32,
    marginHorizontal: 'auto'
  }
})

export default NewEventIcon;
