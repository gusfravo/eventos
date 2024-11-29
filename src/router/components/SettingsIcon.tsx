import IconView from "../../shared/components/IconView/IconView"
import { TRANSPARENT } from "../../shared/constants"

function settingsIcon({size,focused,color}:{ focused: boolean, color: string, size: number }):React.JSX.Element{
    return  <IconView icon={'solar:settings-bold'} iconViewOptions={{background:TRANSPARENT, width:size, height:size,color:color}}/>
  }
  

export default settingsIcon;