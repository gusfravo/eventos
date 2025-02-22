import { createSlice, } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ItemEventInterface } from "../../screen/home/interface/itemEvent.interface";


const initialState: ItemEventInterface[] = []


export const eventsSlice = createSlice({
  name: 'events',
  initialState,

  reducers: {
    getEvents: (state, action: PayloadAction<ItemEventInterface[]>) => {
      state = action.payload
    },
    addEvent: (state, action: PayloadAction<ItemEventInterface>) => {
      state.push(action.payload);
    },
    updataEvent: (state, action: PayloadAction<ItemEventInterface>) => {
      const { id, icon, color, title, lastDate, lastDays, repeats } = action.payload;
      const foundEvent = exitsItem(state, id);
      if (foundEvent) {
        foundEvent.color = color;
        foundEvent.lastDays = lastDays;
        foundEvent.title = title;
        foundEvent.lastDate = lastDate;
        foundEvent.repeats = repeats;
        foundEvent.icon = icon;
      }
    },
    deleteEvent(state, action: PayloadAction<string>) {
      state = state.filter(item => item.id != action.payload)
    }
  }
});

function exitsItem(events: ItemEventInterface[], eventIdSearch: string): ItemEventInterface | undefined {
  return events.find(event => event.id === eventIdSearch)

}

export const { getEvents, addEvent, updataEvent, deleteEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
