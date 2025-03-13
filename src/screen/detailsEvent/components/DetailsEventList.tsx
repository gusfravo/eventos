import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { OLD_GRAY, WHITE_SMOKE } from "../../../shared/constants";
import { LIST_EVENTS } from "../../home/constants/listevents.constant";
import DetailsEventItem from "./DetailsEventItem";
import { useAppSelector } from "../../../redux/hook";
import { selectEventsByParentId } from "../../../redux/events/eventsSelector";
import { ItemEventInterface } from "../../home/interface/itemEvent.interface";

interface Props {
  event: ItemEventInterface
}

function DetailsEventList({ event }: Props): React.JSX.Element {
  const events = useAppSelector(state => selectEventsByParentId(state, event.id));

  if (events.length > 0) {
    return (
      <View style={DetailsEventListStyle.container}>
        <FlatList
          data={events}
          renderItem={({ item }) => <DetailsEventItem item={item} onPress={() => {
            //console.log("Send To edit")
          }}></DetailsEventItem>}
          keyExtractor={item => item.id}
        ></FlatList>
      </View>
    )

  }

  return (
    <View style={DetailsEventListStyle.container}>
      <Text style={DetailsEventListStyle.text}>
        No tenemos eventos registrados
      </Text>
    </View>
  );

}

export default DetailsEventList;


const DetailsEventListStyle = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: WHITE_SMOKE
  },
  text: {
    marginVertical: 32,
    textAlign: 'center',
    fontFamily: 'Nunito Regular',
    fontSize: 20,
    color: OLD_GRAY
  }
});
