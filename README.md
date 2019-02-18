# iview-filter-table

> 一个基于iView Table 的带搜索过滤的Table组件, 支持 `Input`输入框 和  `Select`下拉框 `DatePicker`日期选择  `region`范围选择 等表格筛选方式.

由于我进行的这个项目后台使用node进行编写，用的Sequelize.js,并且前后端使用了子模块进行对字段的通用处理, 所以tableColumns中的某些字段前端是用不到的，但是node需要用到，所以我就没有对字段进行删减


## 使用
**模板**：
```html
<FilterTable @on-search="onSearch"
  :data="users"
  :columns="tableColumns">
</FilterTable>
```
**列描述数据对象：**
```js
tableColumns: [
  {
      'key': 'id',
      'title': 'ID',
      'comment': '编号',
      'type': 'integer',
      'primaryKey': true,
      'autoIncrement': true,
      'fixed': 'left',
      'minWidth': 150,
      'component': 'common',
      'searchRule': 'in',
      'align': 'center',
      'time': false,
      'show': true,
      'searchable': true,
    },{
      'key': 'userId',
      'title': '用户ID',
      'comment': '信息归属用户id',
      'type': 'integer',
      'allowNull': false,
      'minWidth': 150,
      'component': 'common',
      'searchRule': 'in',
      'filter': {
          'type': 'Input',
      },
      'align': 'center',
      'time': false,
      'show': true,
      'searchable': true,
    },
]

```




直接运行该项目可以看当前组件的Example效果。

## Project setup
```
yarn install | npm install
```

### Compiles and hot-reloads for development
```
yarn run serve | npm run serve
```

### Compiles and minifies for production
```
yarn run build | npm run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 原作者源码地址 
  这是我在项目中有这个需求时,在git上找到了这个git 但是他的这个组件有一个bug，因为我参照的这个组件是使用2个iview 的Table 组件进行拼接得到的,但是在数据字段过长是,表头跟内容区域会出现2个滚动条。 所以我在原作者的基础上, 使用iview 的Table 组件的children参数进行再次改写
**原作者的 Github源码地址**
https://github.com/azhengyongqin/iview-filter-table
