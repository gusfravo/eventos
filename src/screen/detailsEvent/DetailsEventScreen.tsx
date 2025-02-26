
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EDGES, WHITE_SMOKE } from "../../shared/constants";
import { StyleSheet, Text } from "react-native";
import DetailsEventStatistics from "./components/DetailsEventStatistics";
import DetailsEventWidgets from "./components/DetailsEventWidgets";
import DetailsEventTopButtons from "./components/DetailsEventTopButtons";
import DetailsEventList from "./components/DetailsEventList";
import { RootStackParamList } from "../../router/interfaces";
import { NavigatorScreenParams, Route } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

function DetailsEventScreen({ route }: NativeStackScreenProps<RootStackParamList, 'details'>): React.JSX.Element {
  console.log('[APP]-', route.params.event.id);
  return (
    <SafeAreaView style={styleDetails.container} edges={EDGES}>
      <DetailsEventStatistics></DetailsEventStatistics>
      <DetailsEventWidgets></DetailsEventWidgets>
      <DetailsEventTopButtons></DetailsEventTopButtons>
      <DetailsEventList></DetailsEventList>
    </SafeAreaView>
  )
}

export default DetailsEventScreen;


const styleDetails = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16,
    backgroundColor: WHITE_SMOKE,
    flexDirection: 'column',
    alignItems: 'center',
  }
});
