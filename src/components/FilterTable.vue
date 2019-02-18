<template>
  <div>
    <Table
      border
      :data="data"
      :columns="tableColumnsFilters"
      stripe>
    </Table>
  </div>
</template>

<script>

  export default {
    name: "FilterTable",
    props: [
      'columns',//列描述数据对象
      'data',   //表格数据
      "localSearchData",
    ],
    data() {
      return {
        tableColumnsFilters:[],
        addSearchData:[],
        componentShow:false, // 控制searchButton的显示隐藏 默认隐藏
      }
    },
    created() {
      let filter ={};
      let item ;
      if( this.localSearchData &&  this.localSearchData.length !==0){
        this.addSearchData = this.localSearchData;
      }
      for (let index in this.columns) {
        item=this.columns[index]
        filter=this.objDeepCopy(item) ;
        if( filter.filter  && filter.key!=="handler" ){
          this.renderHeader( filter ) ;
        }
        this.tableColumnsFilters.push( filter );
      }
    },
    methods: {
      // 对象深克隆
      objDeepCopy (source){
          var sourceCopy = source instanceof Array ? [] : {};
          for (var item in source) {
              sourceCopy[item] = typeof source[item] === 'object' ? this.objDeepCopy(source[item]) : source[item];
          }
          return sourceCopy;
      },
      // 当组件值变化时
      valueChange(filter, value ){
        if( !value ) return false;
        //查找 this.addSearchData 中是否已经存在 当前组件， 如果存在就修改值 ， 不存在则新增组件
        if( JSON.stringify(this.addSearchData).indexOf(`"searchType":"${ filter.frontkey|| filter.key}"` )>-1 ){
          this.addSearchData.forEach( item =>{
            if( item.searchType ==(filter.frontkey|| filter.key) ){
              item.value = value ;
            }
          })
        }else{
          this.addSearchData.push({
            value:value,
            component: filter.component || "common",
            searchRule: filter.searchRule ||"in" ,
            searchType: filter.frontkey || filter.key ,
            componentShow:this.componentShow,
          })
        }
        console.log( "这是需要搜索的内容,还需要根据后台的格式进行进一步处理才能够传给后台   ==== " ,this.addSearchData )
      },
      // 返回 table  render 表头
      renderHeader( filter ){
        filter["children"]=[{
          key: filter.key,
          minWidth:filter.minWidth || filter.width,
          align:filter.align||"center",
          ellipsis:(filter.key=="summary" || filter.key=="desc")?true:false,
          renderHeader:this.render(filter),
          render:filter.render , // 在使用children 的时候 children 外面的render方法不能正常使用,只能把render 方法放在children 内
        }]
        delete filter.render;
      },
      // 返回组件 绑定值  数组
      returnRegionValue( target, filter ){
        let result ={};
        target.forEach(item=>{
          if( item.searchType == (filter.frontkey || filter.key) ){
            result = {
              component:filter.component||"common",
              searchRule:filter.searchRule||"in",
              searchType:filter.key,
              value:item.value
            };
          }
        })
        return result;
      },
      // 返回组件 绑定值
      returnValue(target , filter ,type ){
        let result = "";
        target.forEach( item=>{
          if( item.searchType == (filter.frontkey || filter.key) ){
            result = item.value;
          }
        })
        return result;
      },
      // 分类渲染 表头组件函数
      render( filter ){
        let render={
          "Input": (h, p )=>{
              return h("Input" , {
                props:{
                  placeholder:"请输入"+filter.title || "内容",
                  value: this.returnValue(this.addSearchData , filter ),
                },
                on:{
                  "on-blur":(e)=>{
                    this.valueChange(  filter,e.target.value );
                  }
                },
              },)
          },
          "Select":(h, p )=>{
              return h("Select" , {
                style:{
                  width:"100px",
                },
                props:{
                  value: this.returnValue(this.addSearchData , filter ),
                },
                on:{
                  "on-change":(val)=>{
                    this.valueChange( filter, val );
                  }
                },
              },this.createOptionsRender(filter , h ))
            },
          "Region":(h, p )=>{
              return h("Region" , {
                props:{
                  current:this.returnRegionValue(this.addSearchData, filter),
                  width:"50%",
                },
                on:{
                  "blur":( val )=>{
                     this.valueChange(  filter,val );
                  }
                }
              })
            },
            "Date":( h )=>{
              return h("DatePicker",{
                props:{
                  type:"daterange",
                  placeholder:"请选择时间范围",
                  value: this.returnValue(this.addSearchData , filter ),
                },
                on:{
                  "on-change":(e)=>{
                    this.valueChange( filter,e );
                  }
                },
              })
            }
        };
        return render[filter.filter.type];
      },
      // 渲染 Select Option 项
      createOptionsRender(filter, h) {
        //选项渲染
        let optionRender = [];
        if( !filter.labels ) return [] ;
        return filter.labels.map( item =>{
          return h("Option",{
            props:{
              value:item.value
            }
          },item.label)
        })
      },
    }
  }
</script>

<style scoped>
</style>
