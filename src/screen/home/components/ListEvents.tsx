import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { WHITE_SMOKE } from "../../../shared/constants";
import { LIST_EVENTS } from "../constants/listevents.constant";
import ItemEvent from './ItemEvent';
import { TabNavigatorScreenProps } from "../../../router/interfaces";
import { ItemEventInterface } from "../interface/itemEvent.interface";

function ListEvents({ navigation, data }: { navigation: any, data: ItemEventInterface[] }): React.JSX.Element {
  return (
    <View
      style={ListEventStyle.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ItemEvent item={item} onPress={() => {
          console.log("Send To edit", navigation)
          navigation.navigate('error')
        }}></ItemEvent>}
        keyExtractor={item => item.icon}
      ></FlatList>
    </View>
  )
}

const ListEventStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: WHITE_SMOKE
  }
});

export default ListEvents;
