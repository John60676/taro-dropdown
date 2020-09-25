import Taro, { FC, useMemo, useEffect, useCallback } from '@tarojs/taro';
import { View } from '@tarojs/components';
import useDomAlign from 'taro-dom-align';
import classNames from 'classnames';
import { ViewProps } from '@tarojs/components/types/View';
import isEqual from 'lodash-es/isEqual';

import { DropdownPropsType } from './types';
import { getAlignFromPlacement, getAlignPopupClassName } from './utils';
import './index.scss';

const prefixCls = 'taro-dropdown';

const Dropdown: FC<DropdownPropsType> = props => {
  const {
    overlayClassName,
    overlayStyle,
    className,
    customStyle,
    visible = false,
    arrow = true,
    placement = 'bottomLeft',
    disabled = false,
    zIndex = 5000,
    align = null,
    onVisibleChange,
  } = props;
  const random = useMemo(() => `${new Date().getTime()}${Math.round(Math.random() * 1000)}`, []);
  const customVisible = useMemo(() => 'visible' in props, [props]);
  const classList = useMemo(() => getAlignPopupClassName(placement, prefixCls), [placement]);
  const disabledCls = useMemo(() => disabled && `${prefixCls}__disabled`, [disabled]);
  const sourceBoxId = `taro-dropdown__sourceBox-${random}`;
  const targetBoxId = `taro-dropdown__targetBox-${random}`;
  const alignOption = useMemo(() => Object.assign({}, getAlignFromPlacement(placement), align), [placement, align]);
  const [sourceStyle, doAlign, setSourceStyle] = useDomAlign(`#${sourceBoxId}`, `#${targetBoxId}`, alignOption);
  const mergedVisible = !customVisible && sourceStyle.display !== 'none';
  // close source box
  const close = useCallback(() => {
    onVisibleChange && onVisibleChange(false);
    if (!customVisible) {
      setSourceStyle({
        display: 'none',
      });
    } else {
      if (!visible) {
        setSourceStyle({
          display: 'none',
        });
      }
    }
  }, [customVisible, setSourceStyle, visible]);

  // monitor visible
  useEffect(() => {
    if (visible) {
      doAlign();
    } else {
      close();
    }
  }, [close, doAlign, visible]);

  // click target box
  const handleClick = () => {
    if (!customVisible) {
      !disabled && doAlign() && onVisibleChange && onVisibleChange(true);
    }
  };

  // click souce box
  const handleClickSource: ViewProps['onClick'] = e => {
    e.preventDefault();
    close();
  };

  // click mask
  const handleClickMask = () => {
    close();
  };

  const renderArrow = () => {
    const arrow = <View className={classNames(`${prefixCls}__arrow`)} />;
    return arrow;
  };
  return (
    <View className={classNames(prefixCls, className)} style={customStyle}>
      <View id={targetBoxId} className={classNames(`${prefixCls}__targetBox`, disabledCls)} onClick={handleClick}>
        {props.children}
      </View>
      {mergedVisible && <View className={`${prefixCls}__mask`} style={{ zIndex }} onClick={handleClickMask} />}
      <View
        id={sourceBoxId}
        className={classNames(classList, `${prefixCls}__sourceBox`)}
        style={{ ...sourceStyle, zIndex }}
        onClick={handleClickSource}
      >
        {arrow && renderArrow()}
        <View style={overlayStyle} className={classNames(overlayClassName, `${prefixCls}__sourceInner`)}>
          {props.renderOverlay}
        </View>
      </View>
    </View>
  );
};

Dropdown.options = {
  addGlobalClass: true,
};

export default Taro.memo(Dropdown, (oldProps, newProps)=>{
  const propsStr = 'overlayClassName,overlayStyle,className,customStyle,visible,arrow,placement,disabled,zIndex,align';
  return propsStr.split(',').some(prop => isEqual(oldProps[prop], newProps[prop]));
});
