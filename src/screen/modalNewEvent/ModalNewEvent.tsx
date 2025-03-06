import { JSX } from "react";
import { Modal, View, Text } from "react-native";
import { DEEP_GRAY, EDGES } from "../../shared/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { WHITE_SMOKE } from "../../shared/constants";
import { StyleSheet } from "react-native";


const ModalNewEvent = (): JSX.Element => {
  return (

    <SafeAreaView style={styleDetails.container} edges={EDGES}>
      <Modal
        transparent={true}>
        <View>
          <Text>Hola es un modal de prueba</Text>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

const styleDetails = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 16,
    backgroundColor: DEEP_GRAY,
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export default ModalNewEvent;
