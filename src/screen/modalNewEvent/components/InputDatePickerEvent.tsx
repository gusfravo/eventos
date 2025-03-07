import { JSX } from "react";
import { StyleSheet, View } from "react-native";
import DatePicker from "react-native-date-picker";

const InputDatePickerEvent = (): JSX.Element => {
  const formDateInput: Date = new Date();
  const maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 1));

  return (
    <View style={StyleFormDate.container}>
      <DatePicker date={formDateInput}
        onDateChange={(test_) => {
          //inputs.date = test_.toISOString();
          //handleChange('date', inputs.date);
        }}
        mode="date"
        locale="es-MX"
        maximumDate={maxDate}></DatePicker>
    </View>
  )
}

const StyleFormDate = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
})

export default InputDatePickerEvent;
