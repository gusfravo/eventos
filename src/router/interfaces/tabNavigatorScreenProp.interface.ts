import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { RootTabParamList } from "./rootNavigateTab.interface";

export type TabNavigatorScreenProps = BottomTabScreenProps<RootTabParamList, 'Home'>;

export type TabNavigatorScreenPropsNewEvent = BottomTabScreenProps<RootTabParamList, 'New'>
