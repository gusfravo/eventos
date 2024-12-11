import { GestureResponderEvent } from "react-native"

export interface ItemEventInterface {
    icon:string,
    color:string,
    title:string,
    lastDate:String,
    repeats:number,
    lastDays:number
}

export interface ItemEventJSX{
    item:ItemEventInterface,
    onPress:null | ((event: GestureResponderEvent) => void) | undefined
}