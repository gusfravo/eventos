import React from "react";
import { StyleSheet, View } from "react-native";
import IconView from "../../../shared/components/IconView/IconView";

//TODO- Aceptar envio de cambio de icono y cambio de background
function NewEventIcon():React.JSX.Element{
    return (
        <View style={eventIconsStyle.iconEventForm}>
            <IconView icon={'solar:clipboard-list-bold'} iconViewOptions={{background:'#B4DE60', width:96, height:96,color:'white'}}></IconView>
        </View>
    );
}

const eventIconsStyle = StyleSheet.create({
    iconEventForm:{
        marginVertical:32
    }
})

export default NewEventIcon;