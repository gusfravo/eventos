import { writer } from '@nozbe/watermelondb/decorators';
import { ItemEventInterface } from '../../screen/home/interface/itemEvent.interface';
import { database } from '../database';
import Event from '../models/event.model';

class EventService {

  static async getAll(): Promise<ItemEventInterface[]> {
    const events = await database.get<Event>('events').query().fetch()

    return events.map(event => {
      const itemEvent: ItemEventInterface = {
        id: event.id,
        icon: event.icon,
        color: event.color,
        title: event.title,
        lastDate: event.lastDate,
        repeats: event.repeats,
        lastDays: event.lastDays,
        parantId: event.parantId
      }
      return itemEvent;
    })
  }

  static async createEvent(itemEvent: ItemEventInterface): Promise<Event> {
    return new Promise(async (resolve, reject) => {
      try {
        await database.write(async () => {
          const eventResult: Event = await database.get<Event>('events').create(event => {
            event.icon = itemEvent.icon
            event.color = itemEvent.color
            event.title = itemEvent.title
            event.lastDate = itemEvent.lastDate
            event.repeats = itemEvent.repeats
            event.lastDays = itemEvent.lastDays
            event.parantId = itemEvent.parantId
          })
          resolve(eventResult);
        })
      } catch {
        reject('Error')
      }

    })
  }

  static async updateEvent(itemEvent: ItemEventInterface): Promise<void> {

    await database.write(async () => {
      const event = await database.get<Event>('events').find(itemEvent.id)
      await event.update(() => {
        event.icon = itemEvent.icon
        event.color = itemEvent.color
        event.title = itemEvent.title
        event.lastDate = itemEvent.lastDate
        event.repeats = itemEvent.repeats
        event.lastDays = itemEvent.lastDays
        event.parantId = itemEvent.parantId
      })
    })
  }

}

export default EventService;
