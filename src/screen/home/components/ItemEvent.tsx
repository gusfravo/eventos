import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ItemEventJSX } from "../interface/itemEvent.interface";
import IconView from "../../../shared/components/IconView/IconView";
import { daysFromDate, formatDate } from "../../../shared/functions";

function ItemEvent({ item, onPress }: ItemEventJSX): React.JSX.Element {

  const date: string = formatDate(item.lastDate);
  const days: number = daysFromDate(item.lastDate);

  return (
    <View style={itemEventStyle.container}>
      <Pressable style={itemEventStyle.mainContainer}
        onPress={onPress}>
        <IconView icon={item.icon} iconViewOptions={{ background: item.color }} />
        <View style={[itemEventStyle.box, itemEventStyle.detailBox]}>
          <Text style={itemEventStyle.detailsBoxMainText}>{item.title}</Text>
          <Text style={itemEventStyle.detailsSoftText}>{date}</Text>
        </View>
        <Text style={[itemEventStyle.box, itemEventStyle.titleDays]}>{days} días</Text>
      </Pressable>

      <Text style={[itemEventStyle.detailsSoftText]}>Ocurrencias: {item.repeats}</Text>
    </View>
  );
}

const itemEventStyle = StyleSheet.create({
  container: {
    height: 70,
    marginVertical: 16,
  },
  mainContainer: {
    height: 56,
    // flex:1,
    alignContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: 10,
    width: '100%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#F6F6F6',
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8
  },
  box: {
    width: '25%',
  },
  detailBox: {
    width: '55%',
  },
  detailsBoxMainText: {
    width: '100%',
    fontFamily: 'Nunito Bold',
    fontSize: 14
  },
  detailsSoftText: {
    width: '100%',
    fontFamily: 'Nunito Regular',
    fontSize: 10,
    color: '#8E8E8E',
    verticalAlign: 'bottom',
    marginTop: 4
  },
  titleDays: {
    textAlign: 'right',
    fontFamily: 'Nunito Bold',
    fontSize: 14
  }
});

export default ItemEvent;
