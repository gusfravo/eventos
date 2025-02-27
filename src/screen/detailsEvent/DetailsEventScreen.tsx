
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EDGES, WHITE_SMOKE } from "../../shared/constants";
import { StyleSheet, Text } from "react-native";
import DetailsEventStatistics from "./components/DetailsEventStatistics";
import DetailsEventWidgets from "./components/DetailsEventWidgets";
import DetailsEventTopButtons from "./components/DetailsEventTopButtons";
import DetailsEventList from "./components/DetailsEventList";
import { RootStackParamList } from "../../router/interfaces";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ItemEventInterface } from "../home/interface/itemEvent.interface";
import { useAppSelector } from "../../redux/hook";
import { selectEventsById } from "../../redux/events/eventsSelector";

function DetailsEventScreen({ route }: NativeStackScreenProps<RootStackParamList, 'details'>): React.JSX.Element {
  const id: string = route.params.event.id;
  const event: ItemEventInterface | undefined = useAppSelector(state => selectEventsById(state, id));


  if (!event)
    return (<Text>with out events</Text>)

  return (
    <SafeAreaView style={styleDetails.container} edges={EDGES}>
      <DetailsEventStatistics itemEvent={event}></DetailsEventStatistics>
      <DetailsEventWidgets></DetailsEventWidgets>
      <DetailsEventTopButtons></DetailsEventTopButtons>
      <DetailsEventList></DetailsEventList>
    </SafeAreaView>
  )
}

export default DetailsEventScreen;


const styleDetails = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16,
    backgroundColor: WHITE_SMOKE,
    flexDirection: 'column',
    alignItems: 'center',
  }
});
