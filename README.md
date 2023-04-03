# Gulu UI for Vue 3

## 安装

```bash
yarn add gulu-ui-myself
```

或

```bash
npm intsall gulu-ui-myself
```

## 版本说明

### 版本 0.0.0

添加了`Switch` `Button` `Tabs` `Dialog`组件功能

### 版本 0.1.0

对已有的功能进行优化，及添加并完善功能。具体如下：

1. `Switch`组件

- 增加`style`属性，实现自定义颜色样式
- 增加`size`属性，实现尺寸选择

2. `Button`组件

- `level`增加了更多属性值：`primary` `success` `info` `warning` `danger`

3. `Dialog`组件

- 修改 `ok` `cancle`事件属性的状态，改为可选状态，实现用户自由的选择与否
- 修改内容 `content` 的具名插槽为默认 `slot`
- 增加 `hasButton`属性，实现 `footer`底部的`ok` `cancle` 按钮的自由的选择与否

4. `Tabs`组件

- 使用 `v-model`实现双向绑定

### 版本 1.1.0

新增以下组件：

1. `input` 组件
2. `layout` 组件
3. `container` 组件
4. `toast` 组件
5. `popover` 组件
6. `collapse` 组件
