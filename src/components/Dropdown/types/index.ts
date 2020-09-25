import { DomAlignOptionType } from 'taro-dom-align/dist/types';
import { ReactNode, CSSProperties } from 'react';

export type PlacementType =
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight'
  | 'topLeft'
  | 'topCenter'
  | 'topRight'

export type PlacementObjectType = {
  [P in PlacementType]: DomAlignOptionType
}

export interface DropdownPropsType {
  renderOverlay: ReactNode;
  className?: string;
  customStyle?: CSSProperties;
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
  placement?: PlacementType;
  disabled?: boolean;
  visible?: boolean;
  arrow?: boolean;
  zIndex?: number;
  align?: Partial<DomAlignOptionType>;
  onVisibleChange?: (visible: boolean) => void;
}
