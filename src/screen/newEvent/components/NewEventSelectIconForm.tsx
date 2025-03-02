import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { ICON_INPUT } from "../constants/NewEventSelectIconData.constant";
import IconView from "../../../shared/components/IconView/IconView";
import { OLD_GRAY } from "../../../shared/constants";
import { FormProps } from "../interfaces/formProps";

interface ColorItemProps {
  item: {
    value: string
  },
  onPress: () => void
}

function NewEventSelectIconForm({ inputs, handleChange }: FormProps): React.JSX.Element {
  return <View style={selectIconFormStyle.card}>
    <FlatList
      data={ICON_INPUT}
      renderItem={({ item }) => (<IconItem item={item} onPress={() => {
        inputs.icon = item.value;
        handleChange('icon', inputs.icon)
      }} ></IconItem>)}
      nestedScrollEnabled={true}
      horizontal
    />
  </View>
}

const IconItem = ({ item, onPress }: ColorItemProps): React.JSX.Element => {
  return (
    <Pressable style={[iconItemStyle.container]} onPress={onPress}>
      <IconView icon={item.value} iconViewOptions={{ background: '#F2F2F2', color: OLD_GRAY, width: 28, height: 28 }}></IconView>
    </Pressable>
  )

}

export default NewEventSelectIconForm;

const selectIconFormStyle = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 80,
    paddingVertical: 8,
    borderColor: '#F6F6F6',
    borderWidth: 1
  }
});

const iconItemStyle = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    padding: 2,
    borderRadius: '50%',
    margin: 8,
    backgroundColor: '#F2F2F2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  selected: {
    borderWidth: 2,
    borderColor: '#B6B6B6',
    boxShadow: ' 0px 0px 3px',
    shadowColor: '#B6B6B6',
    shadowOpacity: 25
  }
});
