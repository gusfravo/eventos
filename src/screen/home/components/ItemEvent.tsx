import React from "react";
import { Text, View } from "react-native";
import { ItemEventJSX } from "../interface/itemEvent.interface";

function ItemEvent({item}:ItemEventJSX): React.JSX.Element{
    return (
        <View>
            <Text>Item event works! {item.icon}</Text>
        </View>
    );
}

export default ItemEvent;