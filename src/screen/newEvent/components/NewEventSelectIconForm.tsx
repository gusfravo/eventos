import React from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { ICON_INPUT } from '../constants/NewEventSelectIconData.constant';
import IconView from '../../../shared/components/IconView/IconView';
import { OLD_GRAY } from '../../../shared/constants';
import { FormProps } from '../interfaces/formProps';
import { InputsForm } from '../hooks/newEventHook';

interface ColorItemProps {
  item: {
    value: string
  },
  onPress: () => void,
  inputSelected: InputsForm
}

function NewEventSelectIconForm({ inputs, handleChange }: FormProps): React.JSX.Element {
  return <View style={selectIconFormStyle.card}>
    <FlatList
      data={ICON_INPUT}
      renderItem={({ item }) => (<IconItem item={item} onPress={() => {
        inputs.icon = item.value;
        handleChange('icon', inputs.icon);
      }}
        inputSelected={inputs} />)}
      nestedScrollEnabled={true}
      horizontal
    />
  </View>;
}

const IconItem = ({ item, onPress, inputSelected }: ColorItemProps): React.JSX.Element => {
  return (
    <Pressable style={[iconItemStyle.container, inputSelected.icon === item.value ? iconItemStyle.selected : '']} onPress={onPress}>
      <IconView icon={item.value} iconViewOptions={{ background: '#F2F2F2', color: OLD_GRAY, width: 28, height: 28 }} />
    </Pressable>
  );

};

export default NewEventSelectIconForm;

const selectIconFormStyle = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: 80,
    paddingVertical: 8,
    borderColor: '#F6F6F6',
    borderWidth: 1,
    marginVertical: 16,
  },
});

const iconItemStyle = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    padding: 2,
    borderRadius: '50%',
    margin: 8,
    backgroundColor: '#F2F2F2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selected: {
    borderWidth: 2,
    borderColor: '#B6B6B6',
    boxShadow: ' 0px 0px 3px',
    shadowColor: '#B6B6B6',
    shadowOpacity: 25,
  },
});
