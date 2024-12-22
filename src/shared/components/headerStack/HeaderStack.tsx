import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconView from "../IconView/IconView";
import { TRANSPARENT, SMOKE } from "../../constants";

function HeaderStack():React.JSX.Element{
    return(
        <SafeAreaView style={styleHeaderStack.container}>
            <View style={styleHeaderStack.container}>
                <Pressable style={styleHeaderStack.button}>
                    <IconView icon={'solar:pen-bold'} iconViewOptions={{background:TRANSPARENT, width:32, height:32,color:'#707070'}}></IconView>
                </Pressable>
            </View>
        </SafeAreaView>

    )
    
}

export default HeaderStack

const styleHeaderStack = StyleSheet.create({
    container:{
        paddingHorizontal:10,
        backgroundColor:'#FFC36F',
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    button:{
        height:36,
        width:36,
        borderRadius:'50%',
        backgroundColor:SMOKE
    }
})