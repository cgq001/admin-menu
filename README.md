# power
vue后台管理系统模板
见文章: https://juejin.im/post/5e670edde51d4527110a9b40
## 预览地址: 
http://cgq666.gitee.io/admin-vue
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```
## Excel 导出
```javascript
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = [  // Excel表头
           '姓名',
           '电话'
        ]
        const dataVal = [  // 对应的数据数组的字段名
          'username',
          'phone'
        ]
        excel.export_json_to_excel2(tHeader, '这里是需要导入的数据', dataVal, '导出后的文件名称')
```
## SVG
### 安装
```bash
npm i -D vue-svg-loader vue-template-compiler
```
### 修改配置
```javascript
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
 
    svgRule.uses.clear();
 
    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
}
```
### 使用
```javascript
<script>
import daiban from '@/assets/icon/daiban.svg'
export default {
    components:{
        daiban
    }
}
</script>
```
### 修该颜色
```css
// 删除SVG文件中的 fill 
.index-head-centent-right-list-icon-is{
    color: #F515EA !important;
    width: 20px;
    height: 22px;
    fill: currentColor;   //重点
}
```
