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

function NewEventScreen() {

  //Obtenemos las referencia del hook para gestionar los datos
  const { inputs, handleFormChange } = useForm();

  return (
    <SafeAreaView style={styleHome.container} edges={EDGES}>
      <NewEventIcon inputs={inputs}></NewEventIcon>
      <NewEventInputForm inputs={inputs} handleChange={handleFormChange}></NewEventInputForm>
      <NewEventDateInputForm inputs={inputs} handleChange={handleFormChange} ></NewEventDateInputForm>
      <NewEventSelectColorForm inputs={inputs} handleChange={handleFormChange} ></NewEventSelectColorForm>
      <NewEventSelectIconForm inputs={inputs} handleChange={handleFormChange} ></NewEventSelectIconForm>
      <NewEventButton></NewEventButton>
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
