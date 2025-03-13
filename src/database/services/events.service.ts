import { ItemEventInterface } from '../../screen/home/interface/itemEvent.interface';
import { database } from '../database';
import Event from '../models/event.model';

class EventService {

  static getAll(): Promise<ItemEventInterface[]> {
    return database.get<Event>('events').query().fetch()
  }



}

export default EventService;
