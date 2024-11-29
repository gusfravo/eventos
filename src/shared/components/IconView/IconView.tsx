import React from "react";
import { StyleSheet, View } from "react-native";
import { Iconify } from 'react-native-iconify';
import { DEEP_GRAY } from "../../constants";
import { iconViewOptions } from "./interfaces/iconViewInterface";

function IconView({icon, iconViewOptions}:{icon:string,iconViewOptions:iconViewOptions | undefined}):React.JSX.Element{

    const backgroundColor = iconViewOptions?.background ? iconViewOptions.background : DEEP_GRAY;
    const iconHeigth = iconViewOptions?.height ? iconViewOptions?.height : 32;
    const iconWidth= iconViewOptions?.width ? iconViewOptions?.width : 32;
    const iconColor= iconViewOptions?.color ? iconViewOptions?.color : 'white';

    return(
        <View style={[iconViewStyle.container,{backgroundColor:backgroundColor}]}>
            <Iconify icon={icon} style={[iconViewStyle.icon,{
                color:iconColor,
                margin:'auto',
                width:iconWidth,
                height:iconHeigth
            }]}/>
        </View>
    );
}

//TODO: Como cambiar al tamaño del icon de forma dinamica
const iconViewStyle = StyleSheet.create({
    container:{
        borderRadius:8,
        padding:2,
        width:36,
        height:36,
        backgroundColor:DEEP_GRAY,
        borderWidth:0
    },
    icon:{
        color:'white',
        margin:'auto',
        width:32,
        height:32
    }
});

export default  IconView;