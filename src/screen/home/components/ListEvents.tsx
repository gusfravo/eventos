import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { WHITE_SMOKE } from "../../../shared/constants";

function ListEvents(): React.JSX.Element{
    return (
        <ScrollView 
        contentInsetAdjustmentBehavior="automatic"
        style={ListEventStyle.container}>
            <Text> List Events works! </Text>
        </ScrollView>
    )
}

const ListEventStyle = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:16,
        paddingVertical:32,
        backgroundColor:WHITE_SMOKE
    }
});

export default ListEvents;