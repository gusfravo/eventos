import React from "react";
import { View, TextInput, Text } from "react-native";
import { STYLE_FORM_INPUT } from '../styles/inputForm.style';
import { FormProps } from "../interfaces/formProps";


function NewEventInputForm({ inputs, handleChange }: FormProps): React.JSX.Element {


  return (
    <View style={STYLE_FORM_INPUT.container}>
      <Text style={[STYLE_FORM_INPUT.inputBase, STYLE_FORM_INPUT.label]}>Nombre</Text>
      <TextInput
        style={[STYLE_FORM_INPUT.inputBase, STYLE_FORM_INPUT.input]}
        value={inputs.name}
        onChangeText={(text) => handleChange('name', text)}
        placeholder={'Nombre'}
        keyboardType={'default'}
      />
    </View>
  );
}

export default NewEventInputForm;
