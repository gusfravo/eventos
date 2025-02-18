import React from "react"
import { SafeAreaView } from "react-native-safe-area-context";
import { EDGES, WHITE_SMOKE } from "../../shared/constants";
import { StyleSheet } from "react-native";

function AlertEventScreen(): React.JSX.Element {
  return (
    <SafeAreaView style={styleAlertError.container} edges={EDGES}>

    </SafeAreaView>
  )
}

export default AlertEventScreen;

const styleAlertError = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16,
    backgroundColor: WHITE_SMOKE,
    flexDirection: 'column',
    alignItems: 'center',
  }
});

