
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EDGES, WHITE_SMOKE } from "../../shared/constants";
import { StyleSheet, Text } from "react-native";

function DetailsEventScreen():React.JSX.Element{
        return (
            <SafeAreaView style={styleDetails.container} edges={EDGES}>
                <Text>Event Details Works!!</Text>
            </SafeAreaView>
        )
}

export default DetailsEventScreen;


const styleDetails = StyleSheet.create({
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