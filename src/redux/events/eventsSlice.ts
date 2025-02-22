import { createSlice, } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ItemEventInterface } from "../../screen/home/interface/itemEvent.interface";


const initialState: ItemEventInterface[] = []


export const eventsSlice = createSlice({
  name: 'events',
  initialState,

  reducers: {
    getEvents: (state, action: PayloadAction<ItemEventInterface[]>) => {
      return action.payload
    }
  }
});

export const { getEvents } = eventsSlice.actions;

export default eventsSlice.reducer;
