(function(e){function t(t){for(var r,l,o=t[0],u=t[1],c=t[2],d=0,p=[];d<o.length;d++)l=o[d],a[l]&&p.push(a[l][0]),a[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var s=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Example")],1)},i=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("FilterTable",{attrs:{data:e.users,columns:e.tableColumns}})],1)},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Table",{attrs:{border:"",data:e.data,columns:e.tableColumnsFilters,stripe:""}})],1)},c=[],s=(n("ac6a"),n("f499")),d=n.n(s),p=n("7618"),h={name:"FilterTable",props:["columns","data","localSearchData"],data:function(){return{tableColumnsFilters:[],addSearchData:[],componentShow:!1}},created:function(){var e,t={};for(var n in this.localSearchData&&0!==this.localSearchData.length&&(this.addSearchData=this.localSearchData),this.columns)e=this.columns[n],t=this.objDeepCopy(e),t.filter&&"handler"!==t.key&&this.renderHeader(t),this.tableColumnsFilters.push(t)},methods:{objDeepCopy:function(e){var t=e instanceof Array?[]:{};for(var n in e)t[n]="object"===Object(p["a"])(e[n])?this.objDeepCopy(e[n]):e[n];return t},valueChange:function(e,t){if(!t)return!1;d()(this.addSearchData).indexOf('"searchType":"'.concat(e.frontkey||e.key,'"'))>-1?this.addSearchData.forEach(function(n){n.searchType==(e.frontkey||e.key)&&(n.value=t)}):this.addSearchData.push({value:t,component:e.component||"common",searchRule:e.searchRule||"in",searchType:e.frontkey||e.key,componentShow:this.componentShow}),console.log("这是需要搜索的内容,还需要根据后台的格式进行进一步处理才能够传给后台   ==== ",this.addSearchData)},renderHeader:function(e){e["children"]=[{key:e.key,minWidth:e.minWidth||e.width,align:e.align||"center",ellipsis:"summary"==e.key||"desc"==e.key,renderHeader:this.render(e),render:e.render}],delete e.render},returnRegionValue:function(e,t){var n={};return e.forEach(function(e){e.searchType==(t.frontkey||t.key)&&(n={component:t.component||"common",searchRule:t.searchRule||"in",searchType:t.key,value:e.value})}),n},returnValue:function(e,t,n){var r="";return e.forEach(function(e){e.searchType==(t.frontkey||t.key)&&(r=e.value)}),r},render:function(e){var t=this,n={Input:function(n,r){return n("Input",{props:{placeholder:"请输入"+e.title||!1,value:t.returnValue(t.addSearchData,e)},on:{"on-blur":function(n){t.valueChange(e,n.target.value)}}})},Select:function(n,r){return n("Select",{style:{width:"100px"},props:{value:t.returnValue(t.addSearchData,e)},on:{"on-change":function(n){t.valueChange(e,n)}}},t.createOptionsRender(e,n))},Region:function(n,r){return n("Region",{props:{current:t.returnRegionValue(t.addSearchData,e),width:"50%"},on:{blur:function(n){t.valueChange(e,n)}}})},Date:function(n){return n("DatePicker",{props:{type:"daterange",placeholder:"请选择时间范围",value:t.returnValue(t.addSearchData,e)},on:{"on-change":function(n){t.valueChange(e,n)}}})}};return n[e.filter.type]},createOptionsRender:function(e,t){return e.labels?e.labels.map(function(e){return t("Option",{props:{value:e.value}},e.label)}):[]}}},f=h,m=n("2877"),b=Object(m["a"])(f,u,c,!1,null,"0b5de65a",null),y=b.exports,v={name:"Example",components:{FilterTable:y},data:function(){var e=this;return{users:[],tableColumns:[{key:"id",title:"ID",comment:"编号",type:"integer",primaryKey:!0,autoIncrement:!0,fixed:"left",minWidth:150,component:"common",searchRule:"in",align:"center",time:!1,show:!0,searchable:!0},{key:"userId",title:"用户ID",comment:"信息归属用户id",type:"integer",allowNull:!1,minWidth:150,component:"common",searchRule:"in",filter:{type:"Input"},align:"center",time:!1,show:!0,searchable:!0},{key:"audit",title:"审核状态",comment:"审核状态：0 未审核；1 通过（正常显示）；2 拒绝",labels:[{label:"未审核",value:"0"},{label:"通过",value:"1"},{label:"拒绝",value:"2"}],defaultValue:0,type:"integer",minWidth:150,component:"radio",filter:{type:"Select"},searchRule:"in",align:"center",time:!1,show:!0,searchable:!0},{key:"createdAt",title:"创建时间",comment:"创建时间",type:"date",minWidth:150,component:"date",align:"center",searchRule:"between",filter:{type:"Date"},time:!0,show:!0,searchable:!0},{key:"look",title:"观看数",comment:"观看数",defaultValue:0,type:"integer",minWidth:150,component:"region",searchRule:"between",filter:{type:"Region"},align:"center",time:!1,show:!0,searchable:!0},{key:"updatedAt",title:"更新时间",comment:"更新时间",type:"date",minWidth:150,component:"date",searchRule:"between",filter:{type:"Date"},align:"center",time:!0,show:!0,searchable:!0},{key:"deletedAt",title:"删除时间",comment:"删除时间",type:"date",minWidth:150,component:"date",searchRule:"between",filter:{type:"Date"},align:"center",time:!0,show:!0,searchable:!0},{title:"操作",align:"center",fixed:"right",key:"handler",width:200,render:function(t,n){var r=[],a=e,i=n.row,l=n.index;return r.push(t("Button",{props:{type:"primary",size:"small"},on:{click:function(){a.handlerEdit(i)}},class:{btns:!0}},"编辑")),r.push(t("Button",{props:{type:"primary",size:"small"},attrs:{},on:{click:function(){a.handlerDetail(i)}},class:{btns:!0}},"查看")),r.push(t("Poptip",{props:{confirm:!0,title:"您确认删除这条内容",transfer:!0,trigger:"click"},on:{"on-ok":function(){a.handlerDelete(i,l)}}},[t("Button",{props:{type:"error",size:"small"},attrs:{},class:{btns:!0}},"删除")])),t("div",r)}}]}},created:function(){this.users=[{id:"1",userId:"111",audit:"0",createdAt:"2019-01-26 09:21:44",updatedAt:"2019-01-26 09:21:44",deletedAt:"2019-01-26 09:21:44",look:[10,40]},{id:"2",userId:"22222",audit:"1",createdAt:"2019-01-26 09:21:44",updatedAt:"2019-01-26 09:21:44",deletedAt:"2019-01-26 09:21:44",look:[10,40]},{id:"3",userId:"3333",audit:"1",createdAt:"2019-01-26 09:21:44",updatedAt:"2019-01-26 09:21:44",deletedAt:"2019-01-26 09:21:44",look:[10,40]},{id:"4",userId:"4444",audit:"1",createdAt:"2019-01-26 09:21:44",updatedAt:"2019-01-26 09:21:44",deletedAt:"2019-01-26 09:21:44",look:[10,40]},{id:"5",userId:"55555",audit:"1",createdAt:"2019-01-26 09:21:44",updatedAt:"2019-01-26 09:21:44",deletedAt:"2019-01-26 09:21:44",look:[10,40]}]},methods:{}},g=v,w=(n("ff1d"),Object(m["a"])(g,l,o,!1,null,null,null)),k=w.exports,D={name:"App",components:{Example:k}},S=D,x=Object(m["a"])(S,a,i,!1,null,null,null),O=x.exports,j=n("e069"),A=n.n(j);n("dcad");r["default"].use(A.a);var R,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Input",{style:"width:"+e.width+";",attrs:{placeholder:"下限"},on:{"on-blur":function(t){return e.blur("low")}},model:{value:e.lowLimit,callback:function(t){e.lowLimit=t},expression:"lowLimit"}}),n("Input",{style:"width:"+e.width+";margin-left:-7px;",attrs:{placeholder:"上限"},on:{"on-blur":function(t){return e.blur("up")}},model:{value:e.upLimit,callback:function(t){e.upLimit=t},expression:"upLimit"}})],1)},C=[],I=n("bd86"),_=(R={name:"Region",props:{current:Object,width:{type:String,default:"78px"}},data:function(){return{lowLimit:"",upLimit:"",limitValue:""}},components:{},computed:{},created:function(){this.current.value&&(this.lowLimit=this.current.value?this.current.value[0]:"",this.upLimit=this.current.value?this.current.value[1]:"")},watch:{reset:function(e,t){this.lowLimit="",this.upLimit=""}}},Object(I["a"])(R,"watch",{"current.value":function(e){this.current.value=e,this.lowLimit=e?e[0]:"",this.upLimit=e?e[1]:""}}),Object(I["a"])(R,"mounted",function(){}),Object(I["a"])(R,"methods",{init:function(){},blur:function(e){this.current.value=[this.lowLimit,this.upLimit],this.$emit("blur",this.current.value)}}),R),T=_,E=Object(m["a"])(T,L,C,!1,null,null,null),V=E.exports;r["default"].config.productionTip=!1,r["default"].component("Region",V),new r["default"]({render:function(e){return e(O)}}).$mount("#app")},"8ddb":function(e,t,n){},ff1d:function(e,t,n){"use strict";var r=n("8ddb"),a=n.n(r);a.a}});
//# sourceMappingURL=app.c292d060.js.map