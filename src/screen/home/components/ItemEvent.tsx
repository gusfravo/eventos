import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ItemEventJSX } from "../interface/itemEvent.interface";
import IconView from "../../../shared/components/IconView/IconView";

function ItemEvent({item}:ItemEventJSX): React.JSX.Element{
    return (
        <View style={itemEventStyle.container}>
            <View style={itemEventStyle.mainContainer}>
                <IconView icon={item.icon}/>
                <View style={[itemEventStyle.box,itemEventStyle.detailBox]}>
                    <Text style={itemEventStyle.detailsBoxMainText}>{item.title}</Text>
                    <Text style={itemEventStyle.detailsSoftText}>{item.lastDate}</Text>
                </View>
                <Text style={[itemEventStyle.box,itemEventStyle.titleDays]}>{item.lastDays} días</Text>
            </View>

            <Text style={[itemEventStyle.detailsSoftText]}>Ocurrencias: {item.repeats}</Text>
        </View>
    );
}

const itemEventStyle = StyleSheet.create({
    container:{
        height:70,
        marginVertical:8,
    },
    mainContainer:{
        height:56,
        // flex:1,
        alignContent:'space-between',
        flexWrap: 'wrap',
        rowGap: 10,
        width:'100%',
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#F6F6F6',
        padding:8,
        backgroundColor:'white',
        borderRadius:8
    },
    box:{
        width:'25%',
    },
    detailBox:{
        width:'55%',
    },
    detailsBoxMainText:{
        width:'100%',
        fontFamily:'Nunito Bold',
        fontSize:14
    },
    detailsSoftText:{
        width:'100%',
        fontFamily:'Nunito Regular',
        fontSize:10,
        color:'#8E8E8E',
        verticalAlign:'bottom',
        marginTop:4
    },
    titleDays:{
        textAlign:'right',
        fontFamily:'Nunito Bold',
        fontSize:14
    }
});

export default ItemEvent;