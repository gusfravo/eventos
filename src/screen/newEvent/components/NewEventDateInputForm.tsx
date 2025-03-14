import React from "react";
import { View, TextInput, Text } from "react-native";
import { STYLE_FORM_INPUT } from '../styles/inputForm.style';
import { FormProps } from "../interfaces/formProps";
import DatePicker from "react-native-date-picker";


function NewEventDateInputForm({ inputs, handleChange }: FormProps): React.JSX.Element {
  const formDateInput: Date = inputs.date ? new Date(inputs.date) : new Date();
  const maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 1));
  inputs.date = formDateInput.toISOString();

  return (
    <View style={STYLE_FORM_INPUT.container}>
      <DatePicker date={formDateInput}
        onDateChange={(test_) => {
          inputs.date = test_.toISOString();
          handleChange('date', inputs.date);
        }}
        mode="date"
        locale="es-MX"
        maximumDate={maxDate}></DatePicker>
    </View>
  );
}

export default NewEventDateInputForm;
