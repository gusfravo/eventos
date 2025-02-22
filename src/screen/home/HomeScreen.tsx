import React, { useEffect } from 'react';
import {
  StyleSheet,
} from 'react-native';

import SearchInput from './components/SearchInput';
import ListEvents from './components/ListEvents';
import { WHITE_SMOKE } from '../../shared/constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EDGES } from '../../shared/constants';
import { TabNavigatorScreenProps } from '../../router/interfaces';
import { ItemEventInterface } from './interface/itemEvent.interface';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { selectEvents } from '../../redux/events/eventsSelector';
import { getEvents } from '../../redux/events/eventsSlice';
import { LIST_EVENTS } from './constants/listevents.constant';


function HomeScreen(tabNavigator: TabNavigatorScreenProps): React.JSX.Element {
  const events: ItemEventInterface[] = useAppSelector(selectEvents);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEvents(LIST_EVENTS))
  }, [dispatch])


  //console.log(tabNavigator)
  return (
    <SafeAreaView style={styleHome.container} edges={EDGES}>
      <SearchInput></SearchInput>
      <ListEvents navigation={tabNavigator.navigation} data={events}></ListEvents>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styleHome = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: WHITE_SMOKE
  }
}); 
