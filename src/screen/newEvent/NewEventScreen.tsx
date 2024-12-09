import { StyleSheet, Text } from "react-native";
import { WHITE_SMOKE } from "../../shared/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import  NewEventIcon from './components/NewEventIcon';
import NewEventInputForm from "./components/NewEventInputForm";
import NewEventDateInputForm from "./components/NewEventDateInputForm";
import NewEventSelectColorForm from "./components/NewEventSelectColorForm";
import NewEventSelectIconForm from "./components/NewEventSelectIconForm";

function NewEventScreen(){
    return (
        <SafeAreaView style={styleHome.container} edges={{top:'off',bottom:'off', right:'additive',left:'additive'}}>
            <NewEventIcon></NewEventIcon>
            <NewEventInputForm></NewEventInputForm>
            <NewEventDateInputForm></NewEventDateInputForm>
            <NewEventSelectColorForm></NewEventSelectColorForm>
            <NewEventSelectIconForm></NewEventSelectIconForm>
        </SafeAreaView>
    );
}

export default NewEventScreen;


const styleHome = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:16,
        paddingVertical:16,
        backgroundColor:WHITE_SMOKE,
        flexDirection:'column',
        alignItems:'center',
        rowGap:16
    }
});