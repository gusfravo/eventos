import { StyleSheet } from "react-native";

export const STYLE_FORM_INPUT = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        padding:10
    },
    inputBase:{
        height: 44,
        borderWidth: 1,
        borderRadius:10,
        padding: 10,
        fontSize: 16,
        borderColor: '#B6B6B6',
        backgroundColor: 'white',
    },
    input:{
        borderTopLeftRadius:0,
        borderBottomLeftRadius:0,
        borderLeftWidth:0,
        width:'70%'
    },
    label:{
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
        borderRightWidth:1,
        width:'30%',
        color:'#878787'
    }
})