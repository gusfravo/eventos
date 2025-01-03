
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EDGES, WHITE_SMOKE } from "../../shared/constants";
import { StyleSheet, Text } from "react-native";
import DetailsEventStatistics from "./components/DetailsEventStatistics";
import DetailsEventWidgets from "./components/DetailsEventWidgets";
import DetailsEventTopButtons from "./components/DetailsEventTopButtons";

function DetailsEventScreen():React.JSX.Element{
        return (
            <SafeAreaView style={styleDetails.container} edges={EDGES}>
                <DetailsEventStatistics></DetailsEventStatistics>
                <DetailsEventWidgets></DetailsEventWidgets>
                <DetailsEventTopButtons></DetailsEventTopButtons>
            </SafeAreaView>
        )
}

export default DetailsEventScreen;


const styleDetails = StyleSheet.create({
    container:{
        flex:1,
        paddingBottom:16,
        backgroundColor:WHITE_SMOKE,
        flexDirection:'column',
        alignItems:'center',
    }
});