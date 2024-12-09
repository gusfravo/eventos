import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { COLOR_INPUT } from "../constants/NewEventSelectColorData.constants";

function NewEventSelectColorForm():React.JSX.Element{
    return <View style={selectColorFormStyle.card}>
        <FlatList 
        data={COLOR_INPUT}
        numColumns={6}
        renderItem={ColorItem}
        />
    </View>
}

const ColorItem = ({item}:{item:{value:string}}):React.JSX.Element=>{
    return (
        <Pressable style={[colorItemStyle.container,{backgroundColor:item.value}]}>
        </Pressable>
    )

}

export default NewEventSelectColorForm;

const selectColorFormStyle = StyleSheet.create({
    card:{
        backgroundColor:'white',
        borderRadius:10,
        height:128,
        paddingTop:8,
        borderColor:'#F6F6F6',
        borderWidth:1
    }
});

const colorItemStyle = StyleSheet.create({
    container:{
        width:40,
        height:40,
        padding:2,
        borderRadius:'50%',
        margin:8
    },
    selected:{
        borderWidth:2,
        borderColor:'#B6B6B6',
        boxShadow: ' 0px 0px 3px',
        shadowColor:'#B6B6B6',
        shadowOpacity:25
    }
});