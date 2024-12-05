import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { STYLE_FORM_INPUT } from '../styles/inputForm.style';

function NewEventInputForm():React.JSX.Element{
    const [name, onChangeName] = useState('');

    return(
        <View style={STYLE_FORM_INPUT.container}>
            <Text style={[STYLE_FORM_INPUT.inputBase,STYLE_FORM_INPUT.label]}>Nombre</Text>
            <TextInput
                style={[STYLE_FORM_INPUT.inputBase,STYLE_FORM_INPUT.input]}
                value={name}
                onChangeText={onChangeName}
                placeholder={'Nombre'}
                keyboardType={'default'}
            />
        </View>
    );
}

export default NewEventInputForm;