import { StyleSheet, Text } from "react-native";
import { WHITE_SMOKE } from "../../shared/constants";
import { SafeAreaView } from "react-native-safe-area-context";

function NewEventScreen(){
    return (
        <SafeAreaView style={styleHome.container} edges={{top:'off',bottom:'off', right:'additive',left:'additive'}}>
            <Text>New Event Works!!</Text>
        </SafeAreaView>
    );
}

export default NewEventScreen;


const styleHome = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:16,
        paddingVertical:16,
        backgroundColor:WHITE_SMOKE
    }
});