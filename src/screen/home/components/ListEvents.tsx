import { JSX } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { WHITE_SMOKE } from "../../../shared/constants";
import ItemEvent from './ItemEvent';
import { ItemEventInterface } from "../interface/itemEvent.interface";

function ListEvents({ navigation, data }: { navigation: any, data: ItemEventInterface[] }): JSX.Element {
  return (
    <View
      style={ListEventStyle.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ItemEvent item={item} onPress={() => {
          //console.log("Send To edit", navigation)
          navigation.navigate(`details`, { event: { id: item.id } })
        }}></ItemEvent>}
        keyExtractor={item => item.id}
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
