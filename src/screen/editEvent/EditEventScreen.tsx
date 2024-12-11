import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EDGES } from "../../shared/constants";
import { Text } from "react-native";

function EditEventScreen():React.JSX.Element{

    return (
        <SafeAreaView edges={EDGES}>
            <Text>EditEventScreen Works!!</Text>
        </SafeAreaView>
    )

}

export default EditEventScreen;