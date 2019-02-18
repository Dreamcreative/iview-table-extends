<template>
  <div class="hello">
    <FilterTable
      :data="users"
      :columns="tableColumns">
    </FilterTable>
  </div>
</template>

<script>
  import FilterTable from './FilterTable';
  export default {
    name: 'Example',
    components: {FilterTable},
    data() {
      return {
        users: [],
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
          },{
            'key': 'audit',
            'title': '审核状态',
            'comment': '审核状态：0 未审核；1 通过（正常显示）；2 拒绝',
            'labels': [
                {
                    'label': '未审核',
                    'value': '0',
                },
                {
                    'label': '通过',
                    'value': '1',
                },
                {
                    'label': '拒绝',
                    'value': '2',
                },
            ],
            'defaultValue': 0,
            'type': 'integer',
            'minWidth': 150,
            'component': 'radio',
            'filter': {
                'type': 'Select',
            },
            'searchRule': 'in',
            'align': 'center',
            'time': false,
            'show': true,
            'searchable': true,
          },{
            'key': 'createdAt',
            'title': '创建时间',
            'comment': '创建时间',
            'type': 'date',
            'minWidth': 150,
            'component': 'date',
            'align': 'center',
            'searchRule': 'between',
            'filter': {
                'type': 'Date',
            },
            'time': true,
            'show': true,
            'searchable': true,
          },{
            'key': 'look',
            'title': '观看数',
            'comment': '观看数',
            'defaultValue': 0,
            'type': 'integer',
            'minWidth': 150,
            'component': 'region',
            'searchRule': 'between',
            'filter': {
                'type': 'Region',
            },
            'align': 'center',
            'time': false,
            'show': true,
            'searchable': true,
          },
          {
            'key': 'updatedAt',
            'title': '更新时间',
            'comment': '更新时间',
            'type': 'date',
            'minWidth': 150,
            'component': 'date',
            'searchRule': 'between',
            'filter': {
                'type': 'Date',
            },
            'align': 'center',
            'time': true,
            'show': true,
            'searchable': true,
          }, {
              'key': 'deletedAt',
              'title': '删除时间',
              'comment': '删除时间',
              'type': 'date',
              'minWidth': 150,
              'component': 'date',
              'searchRule': 'between',
              'filter': {
                  'type': 'Date',
              },
              'align': 'center',
              'time': true,
              'show': true,
              'searchable': true,
          },
          {
              title:"操作",
              align:"center",
              fixed:"right",
              key:"handler",
              width:200,
              render:( h, p)=>{
                  let nodes = [];
                  let _this = this ;
                  let datas = p.row;
                  let index = p.index;
                  nodes.push(
                      h("Button",{
                          props:{
                              type:"primary",
                              size:"small",
                          },
                          on:{
                              click:()=>{
                                  _this.handlerEdit( datas);
                              }
                          },
                          class:{
                              "btns":true,
                          },
                      } ,"编辑")
                  ) ;
                  nodes.push(
                      h("Button" , {
                          props:{
                              type:"primary",
                              size:"small" ,
                          },
                          attrs:{
                          },
                          on:{
                              click:()=>{
                                  _this.handlerDetail( datas);
                              }
                          },
                          class:{
                              "btns":true,
                          },
                      },"查看")
                  );
                  nodes.push(h("Poptip" , {
                      props:{
                          confirm:true,
                          title:"您确认删除这条内容",
                          transfer:true,
                          trigger:"click",
                      },
                      on:{
                          'on-ok':()=>{
                              _this.handlerDelete( datas,index );
                          }
                      },
                      
                  } ,[h("Button", {
                      props:{
                          type:"error",
                          size:"small" ,
                      },
                      attrs:{
                      },
                      class:{
                          "btns":true,
                      },
                  },"删除") ,]))
                  return h("div" , nodes )
              }
          }
        ],
      }
    },
    created() {
      this.users = [
        {
          id:"1",
          userId:"111",
          audit:"0",
          createdAt:"2019-01-26 09:21:44",
          updatedAt:"2019-01-26 09:21:44",
          deletedAt:"2019-01-26 09:21:44",
          look:[10,40],
        },
        {
          id:"2",
          userId:"22222",
          audit:"1",
          createdAt:"2019-01-26 09:21:44",
          updatedAt:"2019-01-26 09:21:44",
          deletedAt:"2019-01-26 09:21:44",
          look:[10,40],
        },
        {
          id:"3",
          userId:"3333",
          audit:"1",
          createdAt:"2019-01-26 09:21:44",
          updatedAt:"2019-01-26 09:21:44",
          deletedAt:"2019-01-26 09:21:44",
          look:[10,40],
        },
        {
          id:"4",
          userId:"4444",
          audit:"1",
          createdAt:"2019-01-26 09:21:44",
          updatedAt:"2019-01-26 09:21:44",
          deletedAt:"2019-01-26 09:21:44",
          look:[10,40],
        },
        {
          id:"5",
          userId:"55555",
          audit:"1",
          createdAt:"2019-01-26 09:21:44",
          updatedAt:"2019-01-26 09:21:44",
          deletedAt:"2019-01-26 09:21:44",
          look:[10,40],
        },
          
      ];
    },
    methods: {
      
    },
  }
</script>

<style >
.btns{
    margin: 2px;
}
</style>