import React from "react"
import { Pressable, StyleSheet, Text} from "react-native"
import { HAPPY_BLUE } from "../../../shared/constants"

function NewEventButton():React.JSX.Element{

    return(
        <Pressable style={buttonStyle.button}>
            <Text style={buttonStyle.text}>Guardar</Text>
        </Pressable>
    )

}

const buttonStyle = StyleSheet.create({
    button:{
        height:42,
        width:'100%',
        backgroundColor:HAPPY_BLUE,
        borderRadius:16,
    },
    text:{
        color:'white',
        fontSize:16,
        margin:'auto',
        fontFamily:'Nunito Bold'
    }
})

export default NewEventButton