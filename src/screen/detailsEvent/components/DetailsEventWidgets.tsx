import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ItemEventInterface } from "../../home/interface/itemEvent.interface";

interface Props {
  itemEvent: ItemEventInterface
}

function DetailsEventWidgest({ itemEvent }: Props): React.JSX.Element {
  return (

    <View style={[DetailsEventStyle.container, {
      backgroundColor: itemEvent.color
    }]}>

      <View style={DetailsEventStyle.box}>
        <View style={DetailsEventStyle.boxText}>
          <Text style={DetailsEventStyle.title}>{itemEvent.lastDays} días</Text>
          <Text style={DetailsEventStyle.details}>Ultima vez</Text>
        </View>
      </View>

      <View style={DetailsEventStyle.box}>
        <View style={DetailsEventStyle.boxText}>
          <Text style={DetailsEventStyle.title}>45 días</Text>
          <Text style={DetailsEventStyle.details}>Promedio</Text>
        </View>
      </View>

      <View style={DetailsEventStyle.box}>
        <View style={DetailsEventStyle.boxText}>
          <Text style={DetailsEventStyle.title}>{itemEvent.repeats}</Text>
          <Text style={DetailsEventStyle.details}>Eventos</Text>
        </View>
      </View>
    </View>
  )
}

export default DetailsEventWidgest;

const DetailsEventStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    backgroundColor: '#FFC36F',
    width: '100%',
    padding: 16
  },
  box: {
    padding: 12,
    margin: 'auto',
    backgroundColor: '#000000',
    opacity: .35,
    borderRadius: 10,
    width: 100,
    height: 80,
    flexDirection: 'row'
  },

  boxText: {
    justifyContent: 'center',
    margin: 'auto'
  },
  title: {
    fontFamily: 'Nunito Bold',
    color: 'white',
    fontSize: 14,
    textAlign: 'center'
  },
  details: {
    fontFamily: 'Nunito Regular',
    fontSize: 10,
    textAlign: 'center',
    color: 'white',
  }
});
