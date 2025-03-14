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
import { selectEventRoot, selectEvents } from '../../redux/events/eventsSelector';
import { getEvents } from '../../redux/events/eventsSlice';
import EventService from '../../database/services/events.service';


function HomeScreen(tabNavigator: TabNavigatorScreenProps): React.JSX.Element {
  //Declaramos el selector del events del store
  const events: ItemEventInterface[] = useAppSelector(selectEventRoot);
  //Declaramos el dispatch para enviar acciones al store global
  const dispatch = useAppDispatch();
  // Metodo para obtener los eventos almacenados en el sistema
  const fetchEvents = async () => {
    const data = await EventService.getAll();
    console.log("[APP - DATABASE]", data);

    dispatch(getEvents(data));
  }
  //useEffect, es un hook para ejecutar algo en tu componente, este se ejecuta despues de que react a renderizado un componente
  useEffect(() => {
    fetchEvents();
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
