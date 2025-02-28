import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";
import IconView from "../../../shared/components/IconView/IconView";
import { WHITE_SMOKE } from "../../../shared/constants";

interface Props {
  onPress: () => void
}

function DetailsEventTopButtons({ onPress }: Props): React.JSX.Element {
  return (
    <View style={detailsEventTopButtonStyle.topbar}>
      <Pressable style={detailsEventTopButtonStyle.topBarPosition} onPress={onPress}>
        <IconView icon={'solar:trash-bin-trash-bold'} iconViewOptions={{ background: WHITE_SMOKE, width: 24, height: 24, color: 'red' }}></IconView>
        <Text style={detailsEventTopButtonStyle.text}>Eliminar</Text>
      </Pressable>
    </View>
  )
}

export default DetailsEventTopButtons;

const detailsEventTopButtonStyle = StyleSheet.create({
  topbar: {
    flexDirection: 'column',
    width: '100%',
    padding: 16,
    alignItems: 'flex-end',
  },
  topBarPosition: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: 'red',
    fontFamily: 'Nunito Bold'
  }
});
