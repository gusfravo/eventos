import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EDGES, WHITE_SMOKE } from "../../shared/constants";
import { StyleSheet, Text } from "react-native";

function EditEventScreen():React.JSX.Element{

    return (
        <SafeAreaView style={styleEdit.container} edges={EDGES}>
            <Text>EditEventScreen Works!!</Text>
        </SafeAreaView>
    )

}

export default EditEventScreen;

const styleEdit = StyleSheet.create({
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