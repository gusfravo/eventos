import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

function NewEventInputForm():React.JSX.Element{
    const [name, onChangeName] = useState('');
    // const [date, onChangeDate] = useState('');

    return(
        <View style={styleFormInput.container}>
            <TextInput
                style={styleFormInput.input}
                value={name}
                onChangeText={onChangeName}
                placeholder={'Nombre'}
                keyboardType={'default'}
            />
        </View>
    );
}

const styleFormInput = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        width:'100%',
        alignItems:'center'
    },
    input:{
        height: 44,
        margin: 12,
        borderWidth: 1,
        borderRadius:10,
        padding: 10,
        fontSize: 16,
        borderColor: '#B6B6B6',
        backgroundColor: 'white',
        width:'100%'
    }
})

export default NewEventInputForm;