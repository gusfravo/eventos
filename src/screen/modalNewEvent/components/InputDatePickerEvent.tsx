import { JSX } from "react";
import { StyleSheet, View } from "react-native";
import DatePicker from "react-native-date-picker";

interface Props {
  handleDate: (input: string) => void
}

const InputDatePickerEvent = ({ handleDate }: Props): JSX.Element => {
  const formDateInput: Date = new Date();
  const maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 1));

  return (
    <View style={StyleFormDate.container}>
      <DatePicker date={formDateInput}
        onDateChange={(test_) => {
          handleDate(test_.toISOString())
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
    paddingHorizontal: 10,
  },
})

export default InputDatePickerEvent;
