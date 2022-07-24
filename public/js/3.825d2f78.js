(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"218b":function(t,e,s){"use strict";s.r(e);var a=function(){var t,e,s=this,a=s._self._c;return a("q-page",[a("div",{staticClass:"row q-pa-lg"},[a("div",{staticClass:"col-12 bg-dark-blue q-py-sm q-mr-lg"},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-4 q-pl-sm text-red text-bold"},[s._v("Listado de productos")]),a("div",{staticClass:"col text-right q-mr-sm q-gutter-x-xs"},[a("div",{staticClass:"row items-center q-gutter-xs justify-end"},[s.loggedin&&(null===(t=s.user)||void 0===t?void 0:t.role_id)<3?a("ProductAdd",{attrs:{categories_all:s.categories},on:{updated:s.updateList}}):s._e(),s.loggedin&&(null===(e=s.user)||void 0===e?void 0:e.role_id)<3?a("ProductSell",{on:{updated:s.updateList}}):s._e(),a("ProductSearch",{attrs:{categories:s.categories},on:{updated:s.updateList}})],1)])])]),a("div",{key:s.getKey,staticClass:"col-12 q-mt-sm"},[a("ProductList",{attrs:{categories_all:s.categories}})],1)])])},o=[],r=s("7ec2"),c=s.n(r),i=s("c973"),l=s.n(i),n=s("ded3"),d=s.n(n),u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row",class:t.products.length<3?"":"items-center justify-center"},[t.products.length?t._l(t.products,(function(s,a){return e("div",{key:s.id,staticClass:"col-12 col-sm-6 col-md-4 q-py-xs bg-darkless-blue"},[e("ProductItem",{attrs:{categories_all:t.categories_all,index:a,product:s},on:{updated:t.findProducts}})],1)})):e("div",{staticClass:"col-12"},[e("NoData")],1)],2)},p=[],m=(s("b0c0"),s("fb6a"),s("a4d3"),s("e01a"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"row",class:t.isInIndex?"q-mx-sm":""},[e("div",{staticClass:"col-12"},[e("q-card",{staticClass:"my-card bg-dark-blue",attrs:{flat:"",bordered:"",square:""}},[e("q-card-section",[e("div",{staticClass:"row items-center no-wrap"},[e("div",{staticClass:"col text-center"},[e("q-avatar",{attrs:{size:"5rem"}},[e("img",{attrs:{src:t.image}})])],1),e("div",{staticClass:"col"},[e("span",{staticClass:"text-white"},[t._v(t._s(t.product.name))]),e("br"),e("span",{staticClass:"text-white"},[t._v(t._s(t.product.description.slice(0,10)||"-"))]),e("br"),e("span",{staticClass:"text-red text-bold q-mt-md"},[t._v(t._s(t.formatterCurrency(t.sell_price)))])]),e("div",{staticClass:"col-auto"},[t.logged?e("q-btn",{staticClass:"absolute-top-right",attrs:{color:"white",round:"",flat:"",icon:"more_vert"}},[e("q-popup-proxy",{attrs:{"transition-show":"flip-up","transition-hide":"flip-down",breakpoint:"400"}},[e("div",{staticClass:"row bg-dark-blue borderx",staticStyle:{border:"2px solid red",width:"20vw"}},[t.user&&1===t.user.role_id?e("ProductEdit",{staticClass:"col-12 borderx",attrs:{"product-new":t.product,categories_all:t.categories_all},on:{updated:function(e){return t.$emit("updated")}}}):t._e(),t.user&&1===t.user.role_id?e("ProductDelete",{staticClass:"col-12 borderx",attrs:{"product-new":t.product,categories_all:t.categories_all},on:{updated:function(e){return t.$emit("updated")}}}):t._e(),t.user&&t.user.role_id<3?e("ProductSell",{staticClass:"col-12 borderx",attrs:{lite_mode:!0,product:t.product}}):t._e(),t.user&&1===t.user.role_id?e("StockAdd",{staticClass:"col-12 borderx",attrs:{"product-new":t.product}}):t._e()],1)])],1):t._e()],1)])])],1)],1)])}),g=[],f=s("448a"),b=s.n(f),v=(s("a9e3"),s("d81d"),s("e260"),s("d3b7"),s("ddb0"),s("caad"),s("2532"),s("fa7d")),h=s("57fb"),C=s("3789"),_=s("6f7b"),q=s("2f62"),x=s("64b2"),w=s("2b9d"),y={components:{ProductSell:w["a"],ProductDelete:x["a"],TagPrint:_["a"],ProductEdit:C["a"],StockAdd:h["a"]},props:{index:{type:Number},product:{type:Object},categories_all:{type:Array}},computed:d()({sell_price:function(){var t;return null!==(t=this.product.lotes[0].sell_price)&&void 0!==t?t:0},image:function(){return this.product.photo?"https://lovebeta.thecloudgroup.tech/"+this.product.photo:"/img/image.jpg"},isInIndex:function(){var t=b()(Array(50).keys()).map((function(t,e){return 1+3*e}));return t.includes(this.index)}},Object(q["b"])({logged:"mystore/loggedIn",user:"mystore/user"})),data:function(){return{}},methods:{formatterCurrency:function(t){return 0===t?"-":Object(v["b"])(t)}}},k=y,P=(s("4618"),s("2877")),$=s("f09f"),S=s("a370"),j=s("cb32"),Q=s("9c40"),I=s("7cbe"),O=s("eebe"),A=s.n(O),L=Object(P["a"])(k,m,g,!1,null,null,null),D=L.exports;A()(L,"components",{QCard:$["a"],QCardSection:S["a"],QAvatar:j["a"],QBtn:Q["a"],QPopupProxy:I["a"]});var z=s("920e"),E=s("37ee"),F={components:{NoData:E["a"],ProductItem:D},props:{categories_all:{type:Array}},data:function(){return{products:[]}},methods:{findProducts:function(){var t=this;return l()(c()().mark((function e(){var s;return c()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(z["c"])();case 2:s=e.sent,s.status<400&&(t.products=s.data.data);case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.findProducts()}},N=F,T=Object(P["a"])(N,u,p,!1,null,null,null),B=T.exports,M=function(){var t=this,e=t._self._c;return e("div",[e("q-btn",{staticClass:"q-px-sm",attrs:{color:"red-5",dense:"","no-caps":"",label:"Crear nuevo producto",rounded:""},on:{click:function(e){t.adding=!0}}}),e("q-dialog",{model:{value:t.adding,callback:function(e){t.adding=e},expression:"adding"}},[e("div",{staticClass:"row justify-center justWhite",staticStyle:{"max-width":"75vw",width:"70vw"}},[e("div",{staticClass:"col-12"},[e("q-card",{staticClass:"bg-darkless-blue no-padding",attrs:{flat:"",square:""}},[e("q-toolbar",[e("span",{staticClass:"text-red"},[t._v("Crear nuevo producto")]),e("q-space"),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",color:"red",icon:"close"}})],1)],1)],1),e("div",{staticClass:"col-12"},[e("q-card",{staticClass:"q-mt-sm bg-darkless-blue",attrs:{square:"",flat:""}},[e("q-card-section",{staticClass:"q-mt-sm"},[e("q-form",{on:{submit:t.submit}},[e("div",{staticClass:"row q-gutter-xs"},[e("div",{staticClass:"col-12 col-md-3 text-center"},[e("q-btn",{staticClass:"q-pa-md text-white",staticStyle:{background:"#2B2E36"},attrs:{round:"",size:"xl","no-caps":""},on:{click:function(e){return t.$refs.photofile.$el.click()}}},[t.photo_url?t._e():e("span",{staticStyle:{"font-size":"14px"}},[t._v("Añadir foto")]),t.photo_url?e("q-avatar",{attrs:{size:"8rem"}},[e("img",{attrs:{src:t.photo_url,alt:"dsdsd"}})]):t._e()],1),e("q-file",{ref:"photofile",staticClass:"hidden",attrs:{hidden:"",accept:".jpg, image/*"},on:{input:t.urlImage},model:{value:t.product.photo,callback:function(e){t.$set(t.product,"photo",e)},expression:"product.photo"}})],1),e("div",{staticClass:"col-12 col-md q-mt-sm q-mt-none-md text-white"},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col-4"},[t._v("\n                      Nombre:\n                    ")]),e("div",{staticClass:"col"},[e("q-input",{attrs:{"label-color":"white",placeholder:"Moet Ice Rosé",color:"white",outlined:"","input-class":"text-white",dense:"",rules:[t.$rules.required()]},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}})],1)]),e("div",{staticClass:"row items-center justify-center q-pt-sm"},[e("div",{staticClass:"col-4"},[t._v("\n                      Precio Coste:\n                    ")]),e("div",{staticClass:"col"},[e("div",{staticClass:"row justify-center q-mt-md"},[e("div",{staticClass:"col"},[e("q-input",{staticClass:"no-padding",attrs:{"label-color":"white",placeholder:"34.000 XAF",color:"white",outlined:"","input-class":"text-white",dense:"",rules:[t.$rules.decimal(),t.$rules.required()]},model:{value:t.product.cost_price,callback:function(e){t.$set(t.product,"cost_price",e)},expression:"product.cost_price"}})],1),e("div",{staticClass:"col-4 text-center q-pt-sm"},[t._v(" Precio Venta:")]),e("div",{staticClass:"col"},[e("q-input",{attrs:{"label-color":"white",placeholder:"44.000 XAF",color:"white",outlined:"","input-class":"text-white",dense:"",rules:[t.$rules.decimal(),t.$rules.required()]},model:{value:t.product.sell_price,callback:function(e){t.$set(t.product,"sell_price",e)},expression:"product.sell_price"}})],1)])])]),e("div",{staticClass:"row items-center q-pt-sm"},[e("div",{staticClass:"col-4"},[t._v("\n                      Categoría:\n                    ")]),e("div",{staticClass:"col"},[e("q-select",{staticClass:"bordered",attrs:{options:t.categories,"options-dense":"","option-label":function(t){return t.name},"label-color":"white",outlined:"",dense:"","use-input":"",clearable:"","popup-content-class":t.$q.screen.gt.sm?"bg-dark-blue dark-blue text-white":"bg-dark-blue",placeholder:t.product.category_id?"":"Seleccione una categoría",color:"white",rules:[t.$rules.required()]},on:{filter:t.fnCategories},scopedSlots:t._u([{key:"no-option",fn:function(){return[e("q-item",[e("q-item-section",{staticClass:"text-grey"},[e("CategoryAdd",{staticClass:"full-width",attrs:{"full-width":!0},on:{newCategory:t.addCategory}})],1)],1)]},proxy:!0}]),model:{value:t.product.category_id,callback:function(e){t.$set(t.product,"category_id",e)},expression:"product.category_id"}})],1)]),e("div",{staticClass:"row items-center q-pt-sm"},[e("div",{staticClass:"col-4"},[t._v("\n                      Descripción:\n                    ")]),e("div",{staticClass:"col"},[e("q-input",{attrs:{"label-color":"white",placeholder:t.$q.screen.gt.sm?"Moet con sabor a fresa para invitados VIP.":"Descripción",color:"white",outlined:"","input-class":"text-white",dense:"",autogrow:"",type:"textarea"},model:{value:t.product.description,callback:function(e){t.$set(t.product,"description",e)},expression:"product.description"}})],1)]),e("div",{staticClass:"row items-center q-pt-sm"},[e("div",{staticClass:"col-4"},[t._v("\n                      Impresión etiqueta:\n                    ")]),e("div",{staticClass:"col"},[e("q-select",{staticClass:"bordered",attrs:{options:t.tags,"options-dense":"","label-color":"white",outlined:"",dense:"","use-input":"","popup-content-class":"bg-dark-blue text-white"},model:{value:t.product.tag,callback:function(e){t.$set(t.product,"tag",e)},expression:"product.tag"}})],1)]),e("div",{staticClass:"row items-center q-pt-sm"},[e("div",{staticClass:"col-4"},[t._v("\n                      Stock disponible:\n                    ")]),e("div",{staticClass:"col"},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col"},[e("q-input",{staticClass:"bordered",attrs:{"label-color":"white",outlined:"",dense:"",suffix:t.$q.screen.gt.sm?"unidades":"u","input-class":"text-white",rules:[t.$rules.required(),t.$rules.decimal()]},model:{value:t.product.quantity,callback:function(e){t.$set(t.product,"quantity",e)},expression:"product.quantity"}})],1),t.$q.screen.gt.sm?e("div",{staticClass:"col text-center q-px-sm"},[e("q-btn",{staticClass:"q-px-lg q-py-xs",attrs:{type:"submit",label:t.$q.screen.gt.sm?"Crear producto":"Crear","no-caps":"",color:"red-5",size:"sm",rounded:"",dense:""}})],1):t._e()])])]),t.$q.screen.lt.md?e("div",{staticClass:"row q-pt-md"},[e("div",{staticClass:"col-12 text-center"},[e("q-btn",{staticClass:"q-px-lg q-py-xs",attrs:{type:"submit",label:"Crear producto","no-caps":"",color:"red-5",size:"md",rounded:"",dense:""}})],1)]):t._e()]),e("div",{staticClass:"col-1"})])])],1)],1)],1)])])],1)},R=[],J=(s("3ca3"),s("2b3d"),s("9861"),s("4de4"),s("ffc9")),K=s("2b26"),U=s("1e4c"),V={components:{CategoryAdd:J["a"]},props:{categories_all:{type:Array}},data:function(){return{adding:!1,product:{name:"",photo:[],cost_price:"",sell_price:"",category_id:null,description:"",quantity:"",tag:"Todas las unidades"},tags:["Todas las unidades","Sin etiqueta"],photo_url:null,categories:[]}},methods:{submit:function(){var t=this;return l()(c()().mark((function e(){var s;return c()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.photo_url){e.next=3;break}return t.$notify.n("Debe agregar la foto del producto"),e.abrupt("return",!1);case 3:return s=Object(v["d"])(t.product),e.next=6,Object(z["d"])(s);case 6:e.sent,t.adding=!1,t.cleanProduct(),t.$emit("updated");case 10:case"end":return e.stop()}}),e)})))()},cleanProduct:function(){this.product={name:"",photo:[],cost_price:"",sell_price:"",category_id:null,description:"",quantity:"",tag:"Sin etiqueta"},this.photo_url=""},urlImage:function(){var t=this.product.photo.size/1024,e=t/1024;e>10&&Object(U["n"])("El límite máximo de cada fichero es 10mb. El fichero subido pesa ".concat(Math.floor(e))),this.photo_url=URL.createObjectURL(this.product.photo)},addCategory:function(t){this.categories_all.push(t),this.product.category_id=t},fnCategories:function(t,e,s){var a=this;e((function(){if(""===t)a.categories=a.categories_all;else{var e=t.toLowerCase();a.categories=a.categories_all.filter((function(t){var s;return null===t||void 0===t||null===(s=t.name)||void 0===s?void 0:s.toLowerCase().includes(e)}))}}),(function(e){""!==t&&e.options.length>0&&(e.setOptionIndex(-1),e.moveOptionSelection(1,!0))}))}},mounted:function(){this.categories=this.categories_all}},X=V,W=(s("e29f"),s("24e8")),G=s("65c6"),H=s("2c91"),Y=s("0378"),Z=s("7d53"),tt=s("27f9"),et=s("ddd8"),st=s("66e5"),at=s("4074"),ot=s("8572"),rt=s("b047"),ct=s("7f67"),it=Object(P["a"])(X,M,R,!1,null,null,null),lt=it.exports;A()(it,"components",{QBtn:Q["a"],QDialog:W["a"],QCard:$["a"],QToolbar:G["a"],QSpace:H["a"],QCardSection:S["a"],QForm:Y["a"],QAvatar:j["a"],QFile:Z["a"],QInput:tt["a"],QSelect:et["a"],QItem:st["a"],QItemSection:at["a"],QField:ot["a"],QChip:rt["a"]}),A()(it,"directives",{ClosePopup:ct["a"]});var nt=s("5d4c"),dt={name:"PageIndex",components:{ProductSell:w["a"],ProductSearch:nt["a"],ProductAdd:lt,ProductList:B},computed:d()({getKey:function(){return this.key}},Object(q["b"])({user:"mystore/user",loggedin:"mystore/loggedIn"})),data:function(){return{key:0,categories:[]}},methods:{updateList:function(){this.key++},findCategories:function(){var t=this;return l()(c()().mark((function e(){return c()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(K["a"])();case 2:t.categories=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.findCategories()}},ut=dt,pt=(s("fb75"),s("9989")),mt=Object(P["a"])(ut,a,o,!1,null,null,null);e["default"]=mt.exports;A()(mt,"components",{QPage:pt["a"],QSelect:et["a"]})},4618:function(t,e,s){"use strict";s("7339")},7339:function(t,e,s){},bde3:function(t,e,s){},be17:function(t,e,s){},e29f:function(t,e,s){"use strict";s("bde3")},fb75:function(t,e,s){"use strict";s("be17")}}]);