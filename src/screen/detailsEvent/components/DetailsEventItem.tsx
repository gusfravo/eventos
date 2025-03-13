import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { ItemEventJSX } from "../../home/interface/itemEvent.interface";
import IconView from "../../../shared/components/IconView/IconView";
import { formatDate } from "../../../shared/functions";

function DetailsEventItem({ item, onPress }: ItemEventJSX): React.JSX.Element {

  const date: string = formatDate(item.lastDate);

  return (
    <View style={detailsEventItemStyle.container}>
      <Pressable style={detailsEventItemStyle.mainContainer}
        onPress={onPress}>
        <IconView icon={item.icon} iconViewOptions={{}} />
        <View style={[detailsEventItemStyle.box, detailsEventItemStyle.detailBox]}>
          <Text style={detailsEventItemStyle.detailsBoxMainText}>{item.title}</Text>
          <Text style={detailsEventItemStyle.detailsSoftText}>{date}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const detailsEventItemStyle = StyleSheet.create({
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
    width: '80%',
  },
  detailBox: {
    width: '80%',
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
  }
});

export default DetailsEventItem;
