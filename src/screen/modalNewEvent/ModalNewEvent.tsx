import { JSX } from "react";
import { Modal, View, Text, Pressable } from "react-native";
import { HAPPY_BLUE } from "../../shared/constants";
import { StyleSheet } from "react-native";
import InputDatePickerEvent from "./components/InputDatePickerEvent";

interface Props {
  onPress: () => void
}

const ModalNewEvent = ({ onPress }: Props): JSX.Element => {
  return (

    <View>
      <Modal transparent={true}>
        <View style={styleDetails.centeredView}>
          <View style={styleDetails.modalView}>
            <Text style={styleDetails.modalTittle}>Nueva ocurrencia</Text>
            <InputDatePickerEvent></InputDatePickerEvent>
            <Pressable style={styleDetails.button} onPress={onPress}>
              <Text style={styleDetails.text}>Agregar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styleDetails = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTittle: {
    fontSize: 20,
    fontFamily: 'Nunito Bold'
  },
  button: {
    height: 42,
    width: '100%',
    backgroundColor: HAPPY_BLUE,
    borderRadius: 16,
  },
  text: {
    color: 'white',
    fontSize: 16,
    margin: 'auto',
    fontFamily: 'Nunito Bold'
  }
});

export default ModalNewEvent;
