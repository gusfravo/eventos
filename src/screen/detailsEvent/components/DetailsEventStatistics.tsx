import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ItemEventInterface } from "../../home/interface/itemEvent.interface";

interface Props {
  itemEvent: ItemEventInterface
}

function DetailsEventStatistics({ itemEvent }: Props): React.JSX.Element {
  return (
    <View style={[detailsEventTitle.container, {
      backgroundColor: itemEvent.color
    }]}>
      <Text style={detailsEventTitle.title}>{itemEvent.title}</Text>
    </View>
  )
}

export default DetailsEventStatistics;

const detailsEventTitle = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 16
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'Nunito Black',
    color: 'white'
  }
});
