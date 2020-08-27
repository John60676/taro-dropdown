# taro-dropdown  <a href="https://www.npmjs.com/package/taro-dropdown"><img src="https://badge.fury.io/js/taro-dropdown.svg" alt="NPM Version"></a> <img src="https://badgen.net/packagephobia/publish/taro-dropdown" alt="Size"> <img src="https://badgen.net/npm/dt/taro-dropdown" alt="Download">  <img src="https://badgen.net/github/license/john60676/taro-dropdown" alt="License">
基于 [Taro](https://github.com/NervJS/taro) 的一个 dropdown 菜单的组件


## 安装
### Taro 2

```bash
# yarn
yarn add taro-dropdown

# npm
npm i taro-dropdown
```


## 代码演示

``` jsx
<Dropdown
  renderOverlay={
    <View>
      <View>item1</View>
      <View>item2</View>
      <View>item3</View>
    </View>
  }
>
  <Button>click me</Button>
</Dropdown>

```

## 效果截图
![image.jpg](https://raw.githubusercontent.com/John60676/taro-dropdown/v0.1.2/assets/demo.jpg)

## API

### Props 属性如下

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|------|
| renderOverlay | 菜单Node节点  | `ReactNode` | - |
| overlayClassName | 下拉菜单根元素的类名称	 | `string` | - |
| overlayStyle | 下拉菜单根元素的样式 | `CSSProperties` | - | 
| placement | 菜单弹出位置：`bottomLeft` `bottomCenter` `bottomRight` `topLeft` `topCenter` `topRight` | `string` | `bottomLeft` | 
| disabled | 菜单是否禁用	 | `boolean` | - |
| visible | 菜单是否显示，**传入该值则需要自己手动控制菜单的显示与隐藏** | `boolean` | - |
| arrow | 下拉框箭头是否显示 | `boolean` | `true` |
| zIndex | 菜单以及mask的层级 | `number` | `5000` |
| onVisibleChange | 菜单显示状态改变时调用，参数为 `visible`	 | `function(visible)	` | - |

## ⚠ 注意

 - 目前仅支持 **微信小程序**
 - 由于小程序的限制，组件传入的 children **不能脱离父级文档**，否则将会导致菜单的定位出现错误

## 许可

MIT © John60676