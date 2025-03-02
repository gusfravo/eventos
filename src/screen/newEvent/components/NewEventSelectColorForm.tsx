import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { COLOR_INPUT } from "../constants/NewEventSelectColorData.constants";
import { FormProps } from "../interfaces/formProps";

interface ColorItemProps {
  item: {
    value: string
  },
  onPress: () => void
}

function NewEventSelectColorForm({ inputs, handleChange }: FormProps): React.JSX.Element {
  return <View style={selectColorFormStyle.card}>
    <FlatList
      data={COLOR_INPUT}
      renderItem={({ item }) => (<ColorItem item={item} onPress={() => {
        // Se ejecuta función para enviar el valor al estado de formulario.
        inputs.color = item.value;
        handleChange('color', inputs.color);
      }}></ColorItem>)

      }
      horizontal
      nestedScrollEnabled={true}
    />
  </View>
}

const ColorItem = ({ item, onPress }: ColorItemProps): React.JSX.Element => {
  return (
    <Pressable
      style={[colorItemStyle.container, { backgroundColor: item.value }]}
      onPress={onPress} />
  )

}

export default NewEventSelectColorForm;

const selectColorFormStyle = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 80,
    paddingVertical: 8,
    borderColor: '#F6F6F6',
    borderWidth: 1
  }
});

const colorItemStyle = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    padding: 2,
    borderRadius: '50%',
    margin: 8
  },
  selected: {
    borderWidth: 2,
    borderColor: '#B6B6B6',
    boxShadow: ' 0px 0px 3px',
    shadowColor: '#B6B6B6',
    shadowOpacity: 25
  }
});
