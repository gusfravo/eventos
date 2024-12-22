import React from "react";
import { View, Text, StyleSheet } from "react-native";

function DetailsEventStatistics():React.JSX.Element{
    return (
        <View style={detailsEventTitle.container}>
            <Text style={detailsEventTitle.title}>Reiniciar Modem</Text>
        </View>
    )
}

export default DetailsEventStatistics;

const detailsEventTitle = StyleSheet.create({
    container:{
        width:'100%',
        paddingVertical:10,
        backgroundColor:'#FFC36F',
        paddingHorizontal:16
    },
    title:{
        textAlign:'center',
        fontSize:32,
        fontFamily:'Nunito Black',
        color:'white'
    }
});