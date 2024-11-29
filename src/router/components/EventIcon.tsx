import IconView from "../../shared/components/IconView/IconView"
import { TRANSPARENT } from "../../shared/constants"

function eventIcon({size,focused,color}:{ focused: boolean, color: string, size: number }):React.JSX.Element{
    return  <IconView icon={'solar:clipboard-list-bold'} iconViewOptions={{background:TRANSPARENT, width:size, height:size,color:color}}/>
  }
  

export default eventIcon;