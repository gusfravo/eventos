import { GestureResponderEvent } from "react-native"

export interface ItemEventInterface {
  id: string,
  icon: string,
  color: string,
  title: string,
  lastDate: string,
  repeats: number,
  lastDays: number,
  parantId?: string
}

export interface ItemEventJSX {
  item: ItemEventInterface,
  onPress: null | ((event: GestureResponderEvent) => void) | undefined
}
