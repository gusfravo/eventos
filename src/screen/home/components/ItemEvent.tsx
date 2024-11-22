import React from "react";
import { Text, View } from "react-native";
import { ItemEventJSX } from "../interface/itemEvent.interface";
import { Iconify } from 'react-native-iconify';

function ItemEvent({item}:ItemEventJSX): React.JSX.Element{
    return (
        <View>
            <Iconify icon="solar:wi-fi-router-bold" />

            <Text>Item event works! {item.icon}</Text>
        </View>
    );
}

export default ItemEvent;