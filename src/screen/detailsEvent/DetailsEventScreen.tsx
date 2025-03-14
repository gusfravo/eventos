
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
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { selectEventsById } from "../../redux/events/eventsSelector";
import { deleteEvent, updataEvent } from "../../redux/events/eventsSlice";
import ModalNewEvent from "../modalNewEvent/ModalNewEvent";
import { useState } from "react";
import { addEvent } from "../../redux/events/eventsSlice";
import EventService from "../../database/services/events.service";

function DetailsEventScreen({ route, navigation }: NativeStackScreenProps<RootStackParamList, 'details'>): React.JSX.Element {
  const id: string = route.params.event.id;
  const dispatch = useAppDispatch();
  const event: ItemEventInterface | undefined = useAppSelector(state => selectEventsById(state, id));
  const [visibleModal, setVisibleModal] = useState(false);
  let datePicker: string = '';


  const deleteEventAndGoHome = async () => {
    await EventService.deleteEvent(id)
    dispatch(deleteEvent(id));
    navigation.navigate('main')
  }

  const openModal = () => {
    setVisibleModal(true);

  }

  const AddChildToEvent = async () => {
    if (event) {

      const newChild: ItemEventInterface = {
        id: new Date().getTime().toString(),
        icon: event.icon,
        color: event.color,
        title: event.title,
        lastDate: datePicker,
        repeats: event.repeats,
        lastDays: event.lastDays,
        parantId: event.id,
      }
      const eventCreate = await EventService.createEvent(newChild);
      newChild.id = eventCreate.id;

      const fatherEvent = { ...event };
      fatherEvent.repeats++;
      await EventService.updateEvent(fatherEvent);


      dispatch(updataEvent(fatherEvent));
      dispatch(addEvent(newChild));
    }
    setVisibleModal(false);
  }

  if (!event)
    return (<Text>with out events</Text>)

  return (
    <SafeAreaView style={styleDetails.container} edges={EDGES}>
      {
        visibleModal && (
          <ModalNewEvent

            onPress={AddChildToEvent}

            handleInputDate={input => {
              datePicker = input;
            }}

          ></ModalNewEvent>
        )
      }
      <DetailsEventStatistics itemEvent={event}></DetailsEventStatistics>
      <DetailsEventWidgets itemEvent={event}></DetailsEventWidgets>
      <DetailsEventTopButtons onPress={deleteEventAndGoHome} onPressNew={openModal}></DetailsEventTopButtons>
      <DetailsEventList event={event}></DetailsEventList>
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
