import React from "react";
import { ScrollView, StyleSheet, Text, FlatList } from "react-native";
import { WHITE_SMOKE } from "../../../shared/constants";
import { LIST_EVENTS } from "../constants/listevents.constant";
import ItemEvent  from './ItemEvent';

function ListEvents(): React.JSX.Element{
    return (
        <ScrollView 
        contentInsetAdjustmentBehavior="automatic"
        style={ListEventStyle.container}>
            <FlatList
                data={LIST_EVENTS}
                renderItem={({ item })=> <ItemEvent item={item}></ItemEvent>}
                keyExtractor={item => item.icon}
            ></FlatList>
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