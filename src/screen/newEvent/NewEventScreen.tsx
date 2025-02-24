import { StyleSheet } from "react-native";
import { WHITE_SMOKE } from "../../shared/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import NewEventIcon from './components/NewEventIcon';
import NewEventInputForm from "./components/NewEventInputForm";
import NewEventDateInputForm from "./components/NewEventDateInputForm";
import NewEventSelectColorForm from "./components/NewEventSelectColorForm";
import NewEventSelectIconForm from "./components/NewEventSelectIconForm";
import NewEventButton from "./components/NewEventButton";
import { EDGES } from "../../shared/constants";
import useForm from "./hooks/newEventHook";
import { useAppDispatch } from "../../redux/hook";
import { addEvent } from "../../redux/events/eventsSlice";
import { ItemEventInterface } from "../home/interface/itemEvent.interface";

function NewEventScreen() {

  //Declaramos el dispatch para enviar los datos al store global
  const dispatch = useAppDispatch();

  //Obtenemos las referencia del hook para gestionar los datos
  const { inputs, handleFormChange } = useForm();

  return (
    <SafeAreaView style={styleHome.container} edges={EDGES}>
      <NewEventIcon inputs={inputs}></NewEventIcon>
      <NewEventInputForm inputs={inputs} handleChange={handleFormChange}></NewEventInputForm>
      <NewEventDateInputForm inputs={inputs} handleChange={handleFormChange} ></NewEventDateInputForm>
      <NewEventSelectColorForm inputs={inputs} handleChange={handleFormChange} ></NewEventSelectColorForm>
      <NewEventSelectIconForm inputs={inputs} handleChange={handleFormChange} ></NewEventSelectIconForm>
      <NewEventButton onPress={() => {
        console.log("Inputs:::", inputs);
        const event: ItemEventInterface = {
          id: new Date().getTime().toString(),
          color: inputs.color,
          title: inputs.name,
          icon: inputs.icon,
          lastDate: inputs.date,
          repeats: 0,
          lastDays: 0
        }
        dispatch(addEvent(event));
      }}></NewEventButton>
    </SafeAreaView>
  );
}

export default NewEventScreen;


const styleHome = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: WHITE_SMOKE,
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 16
  }
});
