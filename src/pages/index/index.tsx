import Taro, { FC } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import Dropdown from '../../components/Dropdown';
import './index.scss';

const prefixCls = 'index-page';

const Page: FC = () => {
  const handleClick = (v:number)=>{
    Taro.showModal({
      title: '测试按钮',
      content: `${v}`,
      showCancel: false
    })
  }
  return (
    <View className={prefixCls}>
      <Dropdown
        zIndex={5001}
        renderOverlay={
          <View className={`${prefixCls}__menu`}>
            <View className={`${prefixCls}__menu_item`} onClick={()=>handleClick(1)}>item1</View>
            <View className={`${prefixCls}__menu_item`} onClick={()=>handleClick(2)}>item2</View>
            <View className={`${prefixCls}__menu_item`} onClick={()=>handleClick(3)}>item3</View>
            <View className={`${prefixCls}__menu_item`} onClick={()=>handleClick(4)}>item4</View>
          </View>
        }
      >
        <Button>click me [bottom-right]</Button>
      </Dropdown>
    </View>
  );
};

Page.config = {
  navigationBarTitleText: '标题',
};

export default Page;
