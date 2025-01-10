import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { WHITE_SMOKE } from "../../../shared/constants";
import { LIST_EVENTS } from "../../home/constants/listevents.constant";
import DetailsEventItem from "./DetailsEventItem";

function DetailsEventList():React.JSX.Element{
    return(
        <View style={DetailsEventListStyle.container}>
            <FlatList
                data={LIST_EVENTS}
                renderItem={({ item })=> <DetailsEventItem item={item} onPress={()=>{
                    console.log("Send To edit")
                }}></DetailsEventItem>}
                keyExtractor={item => item.icon}
            ></FlatList>
        </View>
    )
}

export default DetailsEventList;


const DetailsEventListStyle = StyleSheet.create({
    container:{
        width:'100%',
        flex:1,
        paddingHorizontal:16,
        paddingVertical:32,
        backgroundColor:WHITE_SMOKE
    }
});