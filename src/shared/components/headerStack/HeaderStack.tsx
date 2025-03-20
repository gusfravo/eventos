import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import IconView from "../IconView/IconView";
import { RootStackParamList } from "../../../router/interfaces";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { ItemEventInterface } from "../../../screen/home/interface/itemEvent.interface";
import { useAppSelector } from "../../../redux/hook";
import { selectEventsById } from "../../../redux/events/eventsSelector";

interface Props {
  route: RouteProp<RootStackParamList, 'details'>,
  navigation: NavigationProp<RootStackParamList, 'details'>
}

function HeaderStack({ route, navigation }: Props): React.JSX.Element {
  const id: string = route.params.event.id;
  const event: ItemEventInterface | undefined = useAppSelector(state => selectEventsById(state, id));
  const color: string = event ? event.color : '';

  const goHome = () => {
    navigation.navigate('main');
  }

  return (
    <SafeAreaView style={[styleHeaderStack.container, {
      backgroundColor: color
    }]}>
      <View style={[styleHeaderStack.container, {
        backgroundColor: color
      }]}>
        <View style={styleHeaderStack.backButtonContainer}>
          <Pressable onPress={goHome} >
            <IconView icon={'solar:alt-arrow-left-bold'} iconViewOptions={{ background: color }}></IconView>
          </Pressable>
        </View>
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
  backButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
})
