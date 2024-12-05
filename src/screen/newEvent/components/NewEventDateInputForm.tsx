import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";
import { STYLE_FORM_INPUT } from '../styles/inputForm.style';

function NewEventDateInputForm(): React.JSX.Element{
    const [date, onChangeDate] = useState('');

    return(
        <View style={STYLE_FORM_INPUT.container}>
            <Text style={[STYLE_FORM_INPUT.inputBase,STYLE_FORM_INPUT.label]}>Fecha</Text>
            <TextInput
                style={[STYLE_FORM_INPUT.inputBase,STYLE_FORM_INPUT.input]}
                value={date}
                onChangeText={onChangeDate}
                placeholder={'Fecha'}
                keyboardType={'default'}
            />
        </View>
    );
}

export default NewEventDateInputForm;