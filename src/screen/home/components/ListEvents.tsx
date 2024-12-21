import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { WHITE_SMOKE } from "../../../shared/constants";
import { LIST_EVENTS } from "../constants/listevents.constant";
import ItemEvent  from './ItemEvent';
import { TabNavigatorScreenProps } from "../../../router/interfaces";

function ListEvents({navigation}:any){
    return (
        <View 
        style={ListEventStyle.container}>
            <FlatList
                data={LIST_EVENTS}
                renderItem={({ item })=> <ItemEvent item={item} onPress={()=>{
                    console.log("Send To edit",navigation)
                    navigation.navigate('edit')
                }}></ItemEvent>}
                keyExtractor={item => item.icon}
            ></FlatList>
        </View>
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