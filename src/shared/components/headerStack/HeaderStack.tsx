import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconView from "../IconView/IconView";
import { TRANSPARENT, SMOKE } from "../../constants";
import { RootStackParamList } from "../../../router/interfaces";
import { RouteProp } from "@react-navigation/native";
import { ItemEventInterface } from "../../../screen/home/interface/itemEvent.interface";
import { useAppSelector } from "../../../redux/hook";
import { selectEventsById } from "../../../redux/events/eventsSelector";

interface Props {
  route: RouteProp<RootStackParamList, 'details'>,
}

function HeaderStack({ route }: Props): React.JSX.Element {
  const id: string = route.params.event.id;
  const event: ItemEventInterface | undefined = useAppSelector(state => selectEventsById(state, id));
  const color: string = event ? event.color : '';

  return (
    <SafeAreaView style={[styleHeaderStack.container, {
      backgroundColor: color
    }]}>
      <View style={[styleHeaderStack.container, {
        backgroundColor: color
      }]}>
        <Pressable style={styleHeaderStack.button}>
          <IconView icon={'solar:pen-bold'} iconViewOptions={{ background: TRANSPARENT, width: 32, height: 32, color: '#707070' }}></IconView>
        </Pressable>
      </View>
    </SafeAreaView>

  )

}

export default HeaderStack

const styleHeaderStack = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: '#FFC36F',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button: {
    height: 36,
    width: 36,
    borderRadius: '50%',
    backgroundColor: SMOKE
  }
})
