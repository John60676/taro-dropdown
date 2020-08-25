import Placements from "./placement"
import { PlacementType } from "./types"

export const getAlignFromPlacement = (plactment: PlacementType) => {
  return Placements[plactment]
}

export const getAlignPopupClassName = (
  plactment: PlacementType,
  prefixCls: string
) => {
  return `${prefixCls}__placement-${plactment}`
}
