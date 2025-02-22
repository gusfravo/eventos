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

function NewEventScreen() {
  return (
    <SafeAreaView style={styleHome.container} edges={EDGES}>
      <NewEventIcon></NewEventIcon>
      <NewEventInputForm></NewEventInputForm>
      <NewEventDateInputForm></NewEventDateInputForm>
      <NewEventSelectColorForm></NewEventSelectColorForm>
      <NewEventSelectIconForm></NewEventSelectIconForm>
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
