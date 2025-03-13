import { createSelector } from "@reduxjs/toolkit";
import { ItemEventInterface } from "../../screen/home/interface/itemEvent.interface";
import { RootState } from "../store";

// Selector functions allows us to select a value from the Redux root state.
// Selectors can also be defined inline in the `useSelector` call
// in a component, or inside the `createSlice.selectors` field.
export const selectEvents = (state: RootState) => state.events;

export const selectEventsById = (state: RootState, id: string): ItemEventInterface | undefined => state.events.find(event => event.id == id);

export const selectEventsByParentId = createSelector(
  [selectEvents, (state: RootState, parentId: string) => parentId],
  (events, parentId) => events.filter((item) => item.parantId == parentId)
);

export const selectEventRoot = createSelector(
  [selectEvents, (state: RootState) => state],
  (events) => events.filter((item) => !item.parantId)

)
