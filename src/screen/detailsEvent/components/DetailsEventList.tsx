import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { WHITE_SMOKE } from "../../../shared/constants";
import { LIST_EVENTS } from "../../home/constants/listevents.constant";
import DetailsEventItem from "./DetailsEventItem";
import { useAppSelector } from "../../../redux/hook";
import { selectEventsByParentId } from "../../../redux/events/eventsSelector";
import { ItemEventInterface } from "../../home/interface/itemEvent.interface";

interface Props {
  event: ItemEventInterface
}

function DetailsEventList({ event }: Props): React.JSX.Element {
  console.log("event:", event);
  const events = useAppSelector(state => selectEventsByParentId(state, event.id));
  console.log("childEvents", events);

  return (
    <View style={DetailsEventListStyle.container}>
      <FlatList
        data={LIST_EVENTS}
        renderItem={({ item }) => <DetailsEventItem item={item} onPress={() => {
          //console.log("Send To edit")
        }}></DetailsEventItem>}
        keyExtractor={item => item.icon}
      ></FlatList>
    </View>
  )
}

export default DetailsEventList;


const DetailsEventListStyle = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: WHITE_SMOKE
  }
});
