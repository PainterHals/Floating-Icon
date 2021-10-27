# Floating-Icon 可拖着弹窗
Icon, drag and drop floating icon.


## 事例

``` javascript
<script type="text/javascript" src="./eHome.js"></script>
<script>
  var eHome = new EHome()
  eHome.init({
    url: '', // 浮窗图片地址
    top: Number, // 浮窗距离底部距离 默认 60
    max: Number, // 顶部限制，最大100 默认 80
    min: Number, // 底部限制，最小0 默认 20
    href: 'https://m.ejyshop.com/' // 跳转链接
  })
</script>
```
## 组件加载方式

``` javascript

import eHome from './main';

eHome.init({url: '', href: ''});  // 初始化
eHome.reset({url: '', href: ''}); // 重新装载
eHome.clear();                    // 卸载

eHome.isHas();    // 是否存在
eHome.isEmpty;    // 是否加载了图片

```

...