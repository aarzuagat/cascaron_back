(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"05b0":function(t,e,s){},"09f3":function(t,e,s){"use strict";s("99d4")},"218b":function(t,e,s){"use strict";s.r(e);var a=function(){var t,e,s=this,a=s._self._c;return a("q-page",[a("div",{staticClass:"row q-pa-lg"},[a("div",{staticClass:"col-12 bg-dark-blue q-py-sm q-mr-lg"},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-4 q-pl-sm text-red text-bold"},[s._v("Listado de productos")]),a("div",{staticClass:"col text-right q-mr-sm q-gutter-x-xs"},[a("div",{staticClass:"row items-center q-gutter-xs justify-end"},[s.loggedin&&(null===(t=s.user)||void 0===t?void 0:t.role_id)<3?a("ProductAdd",{attrs:{categories_all:s.categories},on:{updated:s.updateList}}):s._e(),s.loggedin&&(null===(e=s.user)||void 0===e?void 0:e.role_id)<3?a("ProductSell",{on:{updated:s.updateList}}):s._e(),a("ProductSearch",{attrs:{categories:s.categories},on:{updated:s.updateList}})],1)])])]),a("div",{key:s.getKey,staticClass:"col-12 q-mt-sm"},[a("ProductList",{attrs:{categories_all:s.categories}})],1)])])},o=[],i=s("7ec2"),l=s.n(i),c=s("c973"),r=s.n(c),n=s("ded3"),d=s.n(n),u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[t.products.length?t._l(t.products,(function(s,a){return e("div",{key:s.id,staticClass:"col-12 col-sm-6 col-md-4 q-py-xs bg-darkless-blue"},[e("ProductItem",{attrs:{categories_all:t.categories_all,index:a,product:s},on:{updated:t.findProducts}})],1)})):e("div",{staticClass:"col-12"},[e("NoData")],1)],2)},p=[],m=(s("b0c0"),s("fb6a"),s("a4d3"),s("e01a"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"row",class:t.isInIndex?"q-mx-sm":""},[e("div",{staticClass:"col-12"},[e("q-card",{staticClass:"my-card bg-dark-blue",attrs:{flat:"",bordered:"",square:""}},[e("q-card-section",[e("div",{staticClass:"row items-center no-wrap"},[e("div",{staticClass:"col text-center"},[e("q-avatar",{attrs:{size:"5rem"}},[e("img",{attrs:{src:t.image}})])],1),e("div",{staticClass:"col"},[e("span",{staticClass:"text-white"},[t._v(t._s(t.product.name))]),e("br"),e("span",{staticClass:"text-white"},[t._v(t._s(t.product.description.slice(0,10)||"-"))]),e("br"),e("span",{staticClass:"text-red text-bold q-mt-md"},[t._v(t._s(t.formatterCurrency(t.sell_price)))])]),e("div",{staticClass:"col-auto"},[t.logged?e("q-btn",{staticClass:"absolute-top-right",attrs:{color:"white",round:"",flat:"",icon:"more_vert"}},[e("q-popup-proxy",{attrs:{"transition-show":"flip-up","transition-hide":"flip-down",breakpoint:"400"}},[e("div",{staticClass:"row bg-dark-blue borderx",staticStyle:{border:"2px solid red",width:"20vw"}},[t.user&&1===t.user.role_id?e("ProductEdit",{staticClass:"col-12 borderx",attrs:{"product-new":t.product,categories_all:t.categories_all},on:{updated:function(e){return t.$emit("updated")}}}):t._e(),t.user&&1===t.user.role_id?e("ProductDelete",{staticClass:"col-12 borderx",attrs:{"product-new":t.product,categories_all:t.categories_all},on:{updated:function(e){return t.$emit("updated")}}}):t._e(),t.user&&t.user.role_id<3?e("ProductSellB",{staticClass:"col-12 borderx",attrs:{product:t.product}}):t._e(),t.user&&1===t.user.role_id?e("StockAdd",{staticClass:"col-12 borderx",attrs:{"product-new":t.product}}):t._e(),e("TagPrint",{attrs:{product:t.product,product_mode:!0}})],1)])],1):t._e()],1)])])],1)],1)])}),f=[],h=s("448a"),g=s.n(h),v=(s("a9e3"),s("d81d"),s("e260"),s("d3b7"),s("ddb0"),s("caad"),s("2532"),s("fa7d")),b=s("57fb"),_=s("3789"),C=s("6f7b"),q=s("2f62"),w=s("64b2"),x=s("b3f2"),y={components:{ProductSellB:x["a"],ProductDelete:w["a"],TagPrint:C["a"],ProductEdit:_["a"],StockAdd:b["a"]},props:{index:{type:Number},product:{type:Object},categories_all:{type:Array}},computed:d()({sell_price:function(){var t;return null!==(t=this.product.lotes[0].sell_price)&&void 0!==t?t:0},image:function(){return this.product.photo?"https://lovebeta.thecloudgroup.tech/"+this.product.photo:"/img/image.jpg"},isInIndex:function(){var t=g()(Array(50).keys()).map((function(t,e){return 1+3*e}));return t.includes(this.index)}},Object(q["b"])({logged:"mystore/loggedIn",user:"mystore/user"})),data:function(){return{}},methods:{formatterCurrency:function(t){return 0===t?"-":Object(v["b"])(t)}}},k=y,S=(s("907d"),s("2877")),$=s("f09f"),P=s("a370"),Q=s("cb32"),R=s("9c40"),I=s("7cbe"),j=s("eebe"),O=s.n(j),A=Object(S["a"])(k,m,f,!1,null,null,null),L=A.exports;O()(A,"components",{QCard:$["a"],QCardSection:P["a"],QAvatar:Q["a"],QBtn:R["a"],QPopupProxy:I["a"]});var z=s("920e"),B=s("37ee"),F={components:{NoData:B["a"],ProductItem:L},props:{categories_all:{type:Array}},data:function(){return{products:[]}},methods:{findProducts:function(){var t=this;return r()(l()().mark((function e(){var s;return l()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(z["c"])();case 2:s=e.sent,s.status<400&&(t.products=s.data.data);case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.findProducts()}},N=F,T=Object(S["a"])(N,u,p,!1,null,null,null),V=T.exports,D=function(){var t=this,e=t._self._c;return e("div",[e("q-btn",{staticClass:"q-px-sm",attrs:{color:"red-5",dense:"","no-caps":"",label:"Crear nuevo producto",rounded:""},on:{click:function(e){t.adding=!0}}}),e("q-dialog",{model:{value:t.adding,callback:function(e){t.adding=e},expression:"adding"}},[e("div",{staticClass:"row justify-center justWhite",staticStyle:{"max-width":"75vw",width:"70vw"}},[e("div",{staticClass:"col-12"},[e("q-card",{staticClass:"bg-darkless-blue no-padding",attrs:{flat:"",square:""}},[e("q-toolbar",[e("span",{staticClass:"text-red"},[t._v("Crear nuevo producto")]),e("q-space"),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",color:"red",icon:"close"}})],1)],1)],1),e("div",{staticClass:"col-12"},[e("q-card",{staticClass:"q-mt-sm bg-darkless-blue",attrs:{square:"",flat:""}},[e("q-card-section",{staticClass:"q-mt-sm"},[e("q-form",{on:{submit:t.submit}},[e("div",{staticClass:"row q-gutter-xs"},[e("div",{staticClass:"col-12 col-md-3 text-center"},[e("q-btn",{staticClass:"q-pa-md text-white",staticStyle:{background:"#2B2E36"},attrs:{round:"",size:"xl","no-caps":""},on:{click:function(e){return t.$refs.photofile.$el.click()}}},[t.photo_url?t._e():e("span",{staticStyle:{"font-size":"14px"}},[t._v("Añadir foto")]),t.photo_url?e("q-avatar",{attrs:{size:"8rem"}},[e("img",{attrs:{src:t.photo_url,alt:"dsdsd"}})]):t._e()],1),e("q-file",{ref:"photofile",staticClass:"hidden",attrs:{hidden:"",accept:".jpg, image/*"},on:{input:t.urlImage},model:{value:t.product.photo,callback:function(e){t.$set(t.product,"photo",e)},expression:"product.photo"}})],1),e("div",{staticClass:"col-12 col-md q-mt-sm q-mt-none-md text-white"},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col-4"},[t._v("\n                      Nombre:\n                    ")]),e("div",{staticClass:"col"},[e("q-input",{attrs:{"label-color":"white",placeholder:"Moet Ice Rosé",color:"white",outlined:"","input-class":"text-white",dense:"",rules:[t.$rules.required()]},model:{value:t.product.name,callback:function(e){t.$set(t.product,"name",e)},expression:"product.name"}})],1)]),e("div",{staticClass:"row items-center justify-center q-pt-sm"},[e("div",{staticClass:"col-4"},[t._v("\n                      Precio Coste:\n                    ")]),e("div",{staticClass:"col"},[e("div",{staticClass:"row justify-center q-mt-md"},[e("div",{staticClass:"col"},[e("q-input",{staticClass:"no-padding",attrs:{"label-color":"white",placeholder:"34.000 XAF",color:"white",outlined:"","input-class":"text-white",dense:"",rules:[t.$rules.decimal(),t.$rules.required()]},model:{value:t.product.cost_price,callback:function(e){t.$set(t.product,"cost_price",e)},expression:"product.cost_price"}})],1),e("div",{staticClass:"col-4 text-center q-pt-sm"},[t._v(" Precio Venta:")]),e("div",{staticClass:"col"},[e("q-input",{attrs:{"label-color":"white",placeholder:"44.000 XAF",color:"white",outlined:"","input-class":"text-white",dense:"",rules:[t.$rules.decimal(),t.$rules.required()]},model:{value:t.product.sell_price,callback:function(e){t.$set(t.product,"sell_price",e)},expression:"product.sell_price"}})],1)])])]),e("div",{staticClass:"row items-center q-pt-sm"},[e("div",{staticClass:"col-4"},[t._v("\n                      Categoría:\n                    ")]),e("div",{staticClass:"col"},[e("q-select",{staticClass:"bordered",attrs:{options:t.categories,"options-dense":"","option-label":function(t){return t.name},"label-color":"white",outlined:"",dense:"","use-input":"",clearable:"","popup-content-class":t.$q.screen.gt.sm?"bg-dark-blue dark-blue text-white":"bg-dark-blue",placeholder:t.product.category_id?"":"Seleccione una categoría",color:"white",rules:[t.$rules.required()]},on:{filter:t.fnCategories},scopedSlots:t._u([{key:"after-options",fn:function(){return[e("q-item",[e("q-item-section",{staticClass:"text-grey"},[e("CategoryAdd",{staticClass:"full-width",attrs:{"full-width":!0},on:{newCategory:t.addCategory}})],1)],1)]},proxy:!0},{key:"no-option",fn:function(){return[e("q-item",[e("q-item-section",{staticClass:"text-grey"},[e("CategoryAdd",{staticClass:"full-width",attrs:{"full-width":!0},on:{newCategory:t.addCategory}})],1)],1)]},proxy:!0}]),model:{value:t.product.category_id,callback:function(e){t.$set(t.product,"category_id",e)},expression:"product.category_id"}})],1)]),e("div",{staticClass:"row items-center q-pt-sm"},[e("div",{staticClass:"col-4"},[t._v("\n                      Descripción:\n                    ")]),e("div",{staticClass:"col"},[e("q-input",{attrs:{"label-color":"white",placeholder:t.$q.screen.gt.sm?"Moet con sabor a fresa para invitados VIP.":"Descripción",color:"white",outlined:"","input-class":"text-white",dense:"",autogrow:"",type:"textarea"},model:{value:t.product.description,callback:function(e){t.$set(t.product,"description",e)},expression:"product.description"}})],1)]),e("div",{staticClass:"row items-center q-pt-sm"},[e("div",{staticClass:"col-4"},[t._v("\n                      Impresión etiqueta:\n                    ")]),e("div",{staticClass:"col"},[e("q-select",{staticClass:"bordered",attrs:{options:t.tags,"options-dense":"","label-color":"white",outlined:"",dense:"","use-input":"","popup-content-class":"bg-dark-blue text-white"},model:{value:t.product.tag,callback:function(e){t.$set(t.product,"tag",e)},expression:"product.tag"}})],1)]),e("div",{staticClass:"row items-center q-pt-sm"},[e("div",{staticClass:"col-4"},[t._v("\n                      Stock disponible:\n                    ")]),e("div",{staticClass:"col"},[e("div",{staticClass:"row items-center"},[e("div",{staticClass:"col"},[e("q-input",{staticClass:"bordered",attrs:{"label-color":"white",outlined:"",dense:"",suffix:t.$q.screen.gt.sm?"unidades":"u","input-class":"text-white",rules:[t.$rules.required(),t.$rules.decimal()]},model:{value:t.product.quantity,callback:function(e){t.$set(t.product,"quantity",e)},expression:"product.quantity"}})],1),t.$q.screen.gt.sm?e("div",{staticClass:"col text-center q-px-sm"},[e("q-btn",{staticClass:"q-px-lg q-py-xs",attrs:{type:"submit",label:t.$q.screen.gt.sm?"Crear producto":"Crear","no-caps":"",color:"red-5",size:"sm",rounded:"",dense:""}})],1):t._e()])])]),t.$q.screen.lt.md?e("div",{staticClass:"row q-pt-md"},[e("div",{staticClass:"col-12 text-center"},[e("q-btn",{staticClass:"q-px-lg q-py-xs",attrs:{type:"submit",label:"Crear producto","no-caps":"",color:"red-5",size:"md",rounded:"",dense:""}})],1)]):t._e()]),e("div",{staticClass:"col-1"})])])],1)],1)],1)])])],1)},E=[],M=(s("3ca3"),s("2b3d"),s("9861"),s("4de4"),s("ffc9")),X=s("2b26"),J=s("1e4c"),K={components:{CategoryAdd:M["a"]},props:{categories_all:{type:Array}},data:function(){return{adding:!1,product:{name:"",photo:[],cost_price:"",sell_price:"",category_id:null,description:"",quantity:"",tag:"Todas las unidades"},tags:["Todas las unidades","Sin etiqueta"],photo_url:null,categories:[]}},methods:{submit:function(){var t=this;return r()(l()().mark((function e(){var s;return l()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.photo_url){e.next=3;break}return t.$notify.n("Debe agregar la foto del producto"),e.abrupt("return",!1);case 3:return s=Object(v["e"])(t.product),e.next=6,Object(z["f"])(s);case 6:e.sent,t.adding=!1,t.cleanProduct(),t.$emit("updated");case 10:case"end":return e.stop()}}),e)})))()},cleanProduct:function(){this.product={name:"",photo:[],cost_price:"",sell_price:"",category_id:null,description:"",quantity:"",tag:"Sin etiqueta"},this.photo_url=""},urlImage:function(){var t=this.product.photo.size/1024,e=t/1024;e>10&&Object(J["n"])("El límite máximo de cada fichero es 10mb. El fichero subido pesa ".concat(Math.floor(e))),this.photo_url=URL.createObjectURL(this.product.photo)},addCategory:function(t){this.categories_all.push(t),this.product.category_id=t},fnCategories:function(t,e,s){var a=this;e((function(){if(""===t)a.categories=a.categories_all;else{var e=t.toLowerCase();a.categories=a.categories_all.filter((function(t){var s;return null===t||void 0===t||null===(s=t.name)||void 0===s?void 0:s.toLowerCase().includes(e)}))}}),(function(e){""!==t&&e.options.length>0&&(e.setOptionIndex(-1),e.moveOptionSelection(1,!0))}))}},mounted:function(){this.categories=this.categories_all}},U=K,W=(s("aa02"),s("24e8")),G=s("65c6"),H=s("2c91"),Y=s("0378"),Z=s("7d53"),tt=s("27f9"),et=s("ddd8"),st=s("66e5"),at=s("4074"),ot=s("8572"),it=s("b047"),lt=s("7f67"),ct=Object(S["a"])(U,D,E,!1,null,null,null),rt=ct.exports;O()(ct,"components",{QBtn:R["a"],QDialog:W["a"],QCard:$["a"],QToolbar:G["a"],QSpace:H["a"],QCardSection:P["a"],QForm:Y["a"],QAvatar:Q["a"],QFile:Z["a"],QInput:tt["a"],QSelect:et["a"],QItem:st["a"],QItemSection:at["a"],QField:ot["a"],QChip:it["a"]}),O()(ct,"directives",{ClosePopup:lt["a"]});var nt=s("5d4c"),dt=s("9523"),ut=s.n(dt),pt=function(){var t,e,s=this,a=s._self._c;return a("div",[s.sign_mode?a("q-btn",{attrs:{dense:"","no-caps":"",flat:"","text-color":"white",color:"red",align:"left"},on:{click:function(t){s.selling=!0}}},[a("q-icon",{attrs:{name:"fa fa-dollar-sign",color:"red",size:"sm"}}),a("q-tooltip",[s._v("Venta de producto")])],1):s.menu_mode?a("q-btn",{staticClass:"full-width",attrs:{dense:"","no-caps":"",flat:"","text-color":"white",color:"red",align:"left"},on:{click:function(t){s.selling=!0}}},[a("q-icon",{attrs:{name:"fa fa-dollar-sign",color:"white",size:"sm"}}),a("span",{staticClass:"q-pl-sm"},[s._v("Vender producto")])],1):s.lite_mode?a("q-btn",{staticClass:"full-width",attrs:{dense:"","no-caps":"",flat:"","text-color":"white",color:"red",align:"left"},on:{click:function(t){s.selling=!0}}},[a("q-icon",{attrs:{name:"fa fa-dollar-sign",color:"red",size:"sm"}}),a("span",{staticClass:"q-pl-sm"},[s._v("Nueva venta")])],1):a("q-btn",{staticClass:"q-px-sm",attrs:{color:"red-5",dense:"","no-caps":"",label:"Vender producto",rounded:""},on:{click:function(t){s.selling=!0}}}),a("q-dialog",{ref:"mymodal",on:{"before-hide":s.cleanSearch,"before-show":s.loadValues},model:{value:s.selling,callback:function(t){s.selling=t},expression:"selling"}},[a("div",{staticClass:"row justify-center",staticStyle:{"max-width":"75vw",width:"70vw"}},[a("div",{staticClass:"col-12"},[a("q-card",{staticClass:"bg-darkless-blue no-padding",attrs:{flat:"",square:""}},[a("q-toolbar",[a("div",{staticClass:"row"},[a("span",{staticClass:"text-red",class:s.$q.screen.lt.sm?"col-12":""},[s._v("Venta de productos - Paso\n                  "+s._s(s.part)+" |")]),0===s.part?a("span",{staticClass:"text-red",class:s.$q.screen.lt.sm?"col-12":""},[s._v("  Seleccione un producto")]):s._e(),1===s.part?a("span",{staticClass:"text-red",class:s.$q.screen.lt.sm?"col-12":""},[s._v("  Cantidad de unidades a vender")]):s._e(),2===s.part?a("span",{staticClass:"text-red",class:s.$q.screen.lt.sm?"col-12":""},[s._v("  Marcar qué productos salen del stock")]):s._e()]),a("q-space"),a("q-btn",{attrs:{flat:"",round:"",dense:"",color:"info",icon:"mdi-keyboard-backspace",disable:0===s.part},on:{click:function(t){s.part=s.part-1}}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",color:"red",icon:"close"}})],1)],1)],1),a("div",{staticClass:"col-12"},[0===s.part?a("q-card",{staticClass:"q-mt-sm bg-darkless-blue",attrs:{square:"",flat:""}},[a("q-card-section",{staticClass:"q-mt-sm"},[a("div",{staticClass:"row q-gutter-xs custom_css"},[a("div",{staticClass:"col-12"},[a("q-select",{staticClass:"col no-padding",attrs:(t={options:s.products_filtered,"options-dense":"","option-label":function(t){return t.name},"label-color":"white","input-class":"text-white","popup-content-class":"text-white","options-selected-class":"text-white",outlined:"",loading:0===s.products_all.length&&!s.product,disable:0===s.products_all.length,dense:"","use-input":"",clearable:""},ut()(t,"popup-content-class",s.$q.screen.gt.sm?"bg-dark-blue dark-blue text-white":"bg-dark-blue"),ut()(t,"label","Seleccione un producto"),ut()(t,"color","white"),ut()(t,"rules",[s.$rules.required()]),ut()(t,"autofocus",""),t),on:{filter:s.filterProducts,input:s.setInitial,clear:function(t){s.tag=""},remove:function(t){s.tag=""}},model:{value:s.productSelect,callback:function(t){s.productSelect=t},expression:"productSelect"}})],1),a("div",{staticClass:"col-12"},[a("q-select",{staticClass:"col no-padding",attrs:(e={options:s.tagOptions,"options-dense":"","option-label":function(t){return t.tag},"label-color":"white","input-class":"text-white","popup-content-class":"text-white","options-selected-class":"text-white",outlined:"",dense:"","use-input":"",clearable:""},ut()(e,"popup-content-class",s.$q.screen.gt.sm?"bg-dark-blue dark-blue text-white":"bg-dark-blue"),ut()(e,"label","Seleccione una etiqueta"),ut()(e,"color","white"),ut()(e,"rules",[s.$rules.required()]),ut()(e,"autofocus",""),ut()(e,"disable",""===s.productSelect),e),on:{filter:s.fnProducts,input:s.changePart,clear:function(t){s.tag=""},remove:function(t){s.tag=""}},model:{value:s.tag,callback:function(t){s.tag=t},expression:"tag"}})],1),a("div",{staticClass:"col-12 text-right q-gutter-xs"},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Cancelar",color:"dark-blue"}})],1)])])],1):s._e(),1===s.part?a("q-card",{staticClass:"q-mt-sm bg-darkless-blue",attrs:{square:"",flat:""}},[a("q-card-section",{staticClass:"q-mt-sm"},[a("q-form",{on:{submit:s.secondPart}},[a("div",{staticClass:"row q-gutter-xs custom_css"},[a("div",{staticClass:"col-12"},[a("q-card",{staticClass:"q-mt-sm bg-darkless-blue",attrs:{square:"",flat:""}},[a("q-card-section",{staticClass:"q-mt-sm"},[a("div",{staticClass:"row q-gutter-xs"},[a("div",{staticClass:"col-12 col-md-3 text-center"},[a("q-btn",{staticClass:"q-pa-md text-white bg-darkless-blue",attrs:{round:"",size:"xl","no-caps":""}},[s.photo_url?a("q-avatar",{attrs:{size:"8rem"}},[a("img",{attrs:{src:s.photo_url,alt:"dsdsd"}})]):s._e()],1)],1),a("div",{staticClass:"col-12 col-md text-white"},[a("div",{staticClass:"row items-center"},[a("div",{staticClass:"col-4"},[s._v("\n                                Nombre:\n                              ")]),a("div",{staticClass:"col"},[a("q-input",{staticClass:"no-padding",attrs:{"label-color":"white",placeholder:"Moet Ice Rosé",color:"white",outlined:"","input-class":"text-white",dense:"",rules:[s.$rules.required()],disable:""},model:{value:s.productReal.name,callback:function(t){s.$set(s.productReal,"name",t)},expression:"productReal.name"}})],1)]),a("div",{staticClass:"row items-center justify-center"},[a("div",{staticClass:"col-4"},[s._v("\n                                Precio Coste:\n                              ")]),a("div",{staticClass:"col"},[a("div",{staticClass:"row justify-center q-mt-md"},[a("div",{staticClass:"col"},[a("q-input",{staticClass:"no-padding",attrs:{"label-color":"white",placeholder:"34.000 XAF",color:"white",outlined:"","input-class":"text-white",dense:"",rules:[s.$rules.decimal(),s.$rules.required()],disable:""},model:{value:s.productReal.cost_price,callback:function(t){s.$set(s.productReal,"cost_price",t)},expression:"productReal.cost_price"}})],1),a("div",{staticClass:"col-4 text-center q-pt-sm"},[s._v(" Precio Venta:")]),a("div",{staticClass:"col"},[a("q-input",{attrs:{"label-color":"white",placeholder:"44.000 XAF",color:"white",outlined:"","input-class":"text-white",dense:"",rules:[s.$rules.decimal(),s.$rules.required()]},model:{value:s.productReal.sell_price,callback:function(t){s.$set(s.productReal,"sell_price",t)},expression:"productReal.sell_price"}})],1)])])]),a("div",{staticClass:"row items-center justify-center"},[a("div",{staticClass:"col-4"},[s._v("\n                                Stock disponible:\n                              ")]),a("div",{staticClass:"col q-pr-xs"},[a("div",{staticClass:"row q-pr-sm"},[a("div",{staticClass:"col"},[a("q-input",{staticClass:"bordered full-width",attrs:{"label-color":"white",outlined:"",dense:"","input-class":"text-white",rules:[s.$rules.required(),s.$rules.decimal(),s.$rules.maxValue(s.realQuantity),s.$rules.minValue(1)],autofocus:""},model:{value:s.stock,callback:function(t){s.stock=t},expression:"stock"}})],1)])]),a("div",{staticClass:"col-5"},[s._v("\n                                Dispones de "+s._s(s.realQuantity)+" unidades máximas\n                              ")])])]),a("div",{staticClass:"col-1"})])])],1)],1),a("div",{staticClass:"col-12 text-center q-gutter-xs"},[a("q-btn",{attrs:{color:"red",rounded:"","no-caps":"",type:"submit",label:"Confirmar la venta y proceder a control de stock"}})],1)])])],1),s._v("\nz          ")],1):s._e(),2===s.part?a("q-card",{staticClass:"q-mt-sm bg-darkless-blue",attrs:{square:"",flat:""}},[a("q-card-section",{staticClass:"q-mt-sm"},[a("q-form",{on:{submit:s.submit}},[a("div",{staticClass:"row q-gutter-xs custom_css"},[s._l(s.sell,(function(t){var e;return a("div",{key:t.id,staticClass:"col-12"},[a("q-card",{staticClass:"bg-darkless-blue",attrs:{square:"",flat:""}},[a("q-card-section",[a("div",{staticClass:"row q-gutter-xs"},[a("div",{staticClass:"col-12 col-md text-center"},[a("q-btn",{staticClass:"q-pa-md text-white bg-darkless-blue",attrs:{round:"",size:"md","no-caps":"",disable:""}},[s.photo_url?a("q-avatar",{attrs:{size:"6rem"}},[a("img",{attrs:{src:s.photo_url,alt:"dsdsd"}})]):s._e()],1)],1),a("div",{staticClass:"col-12 col-md-9 text-white",class:s.$q.screen.lt.sm?"text-center":""},[a("div",{staticClass:"row q-pa-sm items-center justify-center"},[a("div",{staticClass:"col-12 col-md-3"},[s._v("\n                                Nombre:\n                              ")]),a("div",{staticClass:"col-12 col-md text-white"},[a("q-input",{staticClass:"no-padding",attrs:{"label-color":"white",placeholder:"Moet Ice Rosé",color:"white",outlined:"","input-class":"text-white",dense:"",rules:[s.$rules.required()],disable:""},model:{value:t.name,callback:function(e){s.$set(t,"name",e)},expression:"item.name"}})],1)]),a("div",{staticClass:"row q-pa-sm items-center justify-center"},[a("div",{staticClass:"col-12 col-md-3"},[s._v("\n                                Código de Barras:\n                              ")]),a("div",{staticClass:"col-12 col-md text-white"},[a("q-select",{staticClass:"col no-padding",attrs:(e={options:s.tagOptions,"options-dense":"","option-label":function(t){return t.tag},"label-color":"white","input-class":"text-white","popup-content-class":"text-white","options-selected-class":"text-white",outlined:"",dense:"","use-input":"",clearable:""},ut()(e,"popup-content-class",s.$q.screen.gt.sm?"bg-dark-blue dark-blue text-white":"bg-dark-blue"),ut()(e,"label","Seleccione un producto"),ut()(e,"color","white"),ut()(e,"rules",[s.$rules.required()]),ut()(e,"autofocus",""),e),on:{filter:s.fnTagByroducts},model:{value:t.code,callback:function(e){s.$set(t,"code",e)},expression:"item.code"}})],1)])])])])],1),t.id<s.sell.length-1?a("q-separator",{staticClass:"q-mx-lg",attrs:{color:"white",size:"1px"}}):s._e()],1)})),a("div",{staticClass:"col-12 text-center q-gutter-xs"},[a("q-btn",{attrs:{color:"red",rounded:"","no-caps":"",type:"submit",label:"Confirmar la venta y reducir el stock"}})],1)],2)])],1)],1):s._e()],1)])])],1)},mt=[],ft=(s("0481"),s("4069"),s("159b"),s("e222")),ht={components:{CategoryAdd:M["a"],ProductSearchItem:ft["a"]},props:{lite_mode:{type:Boolean,default:!1},menu_mode:{type:Boolean,default:!1},sign_mode:{type:Boolean,default:!1},product:{type:Object,default:null},lote:{type:Object,default:null},products:{type:Array,default:null},tags:{type:Array,default:null}},computed:d()({photo_url:function(){var t;return"https://lovebeta.thecloudgroup.tech/"+(null===(t=this.productReal)||void 0===t?void 0:t.photo)||!1},realQuantity:function(){var t,e;return this.loteReal?this.loteReal.quantityStock:null!==(t=null===(e=this.productReal)||void 0===e?void 0:e.quantity)&&void 0!==t?t:0},tagOptions:function(){if(this.productSelect){var t,e=this.productSelect.lotes.map((function(t){return t.id})),s=this.sell.map((function(t){return t.code.id})).flat(1),a=function(t){return e.includes(t.lote_id)},o=function(t){return!s.includes(t.id)};return this.tags_filtered=this.tags_all=this.productSelect.lotes.flat(1).map((function(t){return t.tags})).flat(1),null!==(t=this.tags_all.filter(a).filter(o))&&void 0!==t?t:[]}return[]}},Object(q["b"])({logged:"mystore/loggedIn",user:"mystore/user"})),data:function(){return{selling:!1,productReal:{id:0,photo:null,sell_price:0,cost_price:0,quantity:0,name:"",tag:"",lotes:[],lite:!1},productSelect:"",waiting:!1,part:0,stock:1,products_all:[],products_filtered:[],tags_all:[],tags_filtered:[],tag:[],sell:[],loteReal:null}},methods:{setInitial:function(){"Todas las unidades"!==this.productSelect.tag&&(this.product||(this.productReal=this.productSelect,this.tags_filtered=this.tags_all=this.productReal.lotes.flat(1).map((function(t){return t.tags})).flat(1)),this.destructure(this.productSelect),this.part=1)},changePart:function(){var t,e=this,s=this.productSelect,a=null===(t=this.productSelect.lotes)||void 0===t?void 0:t.filter((function(t){return t.id===e.tag.lote_id}))[0];this.productReal=Object(v["a"])(this.productReal,s),this.destructure(s),a&&(this.productReal.cost_price=a.cost_price,this.productReal.sell_price=a.sell_price,this.productReal.quantity=a.tags.filter((function(t){return!t.deleted_at})).length),this.part=1},destructure:function(t){this.productReal.lotes=t.lotes,this.productReal.photo=t.photo,this.productReal.name=t.name,this.productReal.tag=t.tag},secondPart:function(){var t=this;if("Todas las unidades"!==this.productReal.tag)this.productReal.lite=!0,this.submit();else{var e=g()(Array(parseInt(this.stock)).keys());this.sell=[],e.forEach((function(e){var s={id:e,name:t.productReal.name,code:""};t.sell.push(s)})),this.part=2}},filterProducts:function(t,e,s){var a=this;e((function(){if(""===t)a.products_filtered=a.products_all;else{var e=t.toLowerCase();a.products_filtered=a.products_all.filter((function(t){var s;return null===t||void 0===t||null===(s=t.name)||void 0===s?void 0:s.toLowerCase().includes(e)}))}}),(function(e){""!==t&&e.options.length>0&&(e.setOptionIndex(-1),e.moveOptionSelection(1,!0))}))},fnProducts:function(t,e,s){var a=this;e((function(){if(""===t)a.products_filtered=a.products_all;else{var e=t.toLowerCase();a.products_filtered=a.products_all.filter((function(t){var s;return null===t||void 0===t||null===(s=t.name)||void 0===s?void 0:s.toLowerCase().includes(e)}))}}),(function(e){""!==t&&e.options.length>0&&(e.setOptionIndex(-1),e.moveOptionSelection(1,!0))}))},fnTagByroducts:function(t,e,s){var a=this,o=this.productReal.lotes.map((function(t){return t.id})),i=this.sell.map((function(t){return t.code.id})).flat(1),l=function(t){return o.includes(t.lote_id)},c=function(t){return!i.includes(t.id)};e((function(){if(""===t)a.tags_filtered=a.tags_all.filter(l);else{var e=t.toLowerCase();a.tags_filtered=a.tags_all.filter(l).filter(c).filter((function(t){var s;return null===t||void 0===t||null===(s=t.tag)||void 0===s?void 0:s.toLowerCase().includes(e)}))}}),(function(e){""!==t&&e.options.length>0&&(e.setOptionIndex(-1),e.moveOptionSelection(1,!0))}))},cleanSearch:function(){this.part=0,this.productSelect="",this.$emit("updated")},submit:function(){var t=this;return r()(l()().mark((function e(){var s,a;return l()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={product:t.productReal,sell:t.sell,name:t.productReal.name,quantity:t.stock,lote:null!==(s=t.loteReal)&&void 0!==s?s:null},console.log(a),e.next=4,Object(z["h"])(a);case 4:t.part=0,t.selling=!1,t.tag="",t.products_filtered=t.products_all=[],t.tags_filtered=t.tags_all=[],t.$emit("updated");case 10:case"end":return e.stop()}}),e)})))()},findProducts:function(){var t=arguments,e=this;return r()(l()().mark((function s(){var a,o,i;return l()().wrap((function(s){while(1)switch(s.prev=s.next){case 0:return a=!(t.length>0&&void 0!==t[0])||t[0],e.products_filtered=e.products_all=[],s.next=4,Object(z["c"])(a);case 4:o=s.sent,o.status<400&&(i=o.data.data,e.products_filtered=e.products_all=i,e.product&&("Sin etiqueta"!==e.product.tag&&(e.tags_filtered=e.tags_all=i.map((function(t){return t.lotes})).flat(1).map((function(t){return t.tags})).flat(1)),e.setItems()));case 6:case"end":return s.stop()}}),s)})))()},setItems:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.productSelect=t,this.productReal=Object(v["a"])(this.productReal,t),e?(this.productReal.lotes=this.productSelect.lotes=e,this.tags_filtered=this.tags_all=e.map((function(t){return t.tags})).flat(1)):(this.productReal.lotes=t.lotes,this.tags_filtered=this.tags_all=this.productReal.lotes.flat(1).map((function(t){return t.tags})).flat(1),console.log(this.productReal.lotes.map((function(t){return t.tags})).flat(1))),this.productReal.photo=t.photo,this.productReal.name=t.name,this.productReal.tag=t.tag,1===(null===e||void 0===e?void 0:e.length)&&(this.productReal.cost_price=e[0].cost_price,this.productReal.sell_price=e[0].sell_price)},loadValues:function(){if(this.lote){this.loteReal=this.lote;var t=this.loteReal.product;this.setItems(t,[this.lote]),this.part=1}else this.product?(console.log("estoy en producto"),this.productSelect=this.productReal=this.product,this.setItems(this.product),"Sin etiqueta"===this.product.tag&&(this.part=1)):this.findProducts()}},mounted:function(){}},gt=ht,vt=(s("c6a7"),s("0016")),bt=s("05c0"),_t=s("eb85"),Ct=s("a12b"),qt=Object(S["a"])(gt,pt,mt,!1,null,null,null),wt=qt.exports;O()(qt,"components",{QBtn:R["a"],QIcon:vt["a"],QTooltip:bt["a"],QDialog:W["a"],QCard:$["a"],QToolbar:G["a"],QSpace:H["a"],QCardSection:P["a"],QSelect:et["a"],QForm:Y["a"],QAvatar:Q["a"],QInput:tt["a"],QSeparator:_t["a"],QField:ot["a"],QVirtualScroll:Ct["a"]}),O()(qt,"directives",{ClosePopup:lt["a"]});var xt={name:"PageIndex",components:{ProductSell:wt,ProductSearch:nt["a"],ProductAdd:rt,ProductList:V},computed:d()({getKey:function(){return this.key}},Object(q["b"])({user:"mystore/user",loggedin:"mystore/loggedIn"})),data:function(){return{key:0,categories:[]}},methods:{updateList:function(){this.key++},findCategories:function(){var t=this;return r()(l()().mark((function e(){return l()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(X["a"])();case 2:t.categories=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.findCategories()}},yt=xt,kt=(s("09f3"),s("9989")),St=Object(S["a"])(yt,a,o,!1,null,null,null);e["default"]=St.exports;O()(St,"components",{QPage:kt["a"],QSelect:et["a"]})},2415:function(t,e,s){},3079:function(t,e,s){},"5d4c":function(t,e,s){"use strict";var a=s("9523"),o=s.n(a),i=(s("b0c0"),function(){var t,e=this,s=e._self._c;return s("div",[e.menu_mode?s("q-btn",{staticClass:"full-width",attrs:{dense:"","no-caps":"",flat:"","text-color":"white",color:"red",align:"left"},on:{click:function(t){e.searching=!0}}},[s("q-icon",{attrs:{name:"mdi-file-search",color:"white",size:"sm"}}),s("span",{staticClass:"q-pl-sm"},[e._v("Buscar producto")])],1):e._e(),e.products_all.length&&!e.menu_mode?s("q-btn",{staticClass:"q-px-sm",attrs:{color:"red-5",dense:"","no-caps":"",label:"Buscar producto",rounded:""},on:{click:function(t){e.searching=!0}}}):e._e(),s("q-dialog",{ref:"mymodal",on:{"before-hide":e.cleanSearch},model:{value:e.searching,callback:function(t){e.searching=t},expression:"searching"}},[s("div",{staticClass:"row justify-center",staticStyle:{"max-width":"65vw",width:"60vw"}},[s("div",{staticClass:"col-12"},[s("q-card",{staticClass:"bg-darkless-blue no-padding",attrs:{flat:"",square:""}},[s("q-toolbar",[s("span",{staticClass:"text-red"},[e._v("Buscar producto")]),s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",color:"red",icon:"close"}})],1)],1)],1),s("div",{staticClass:"col-12"},[s("q-card",{staticClass:"q-mt-sm bg-darkless-blue",attrs:{square:"",flat:""}},[s("q-card-section",{staticClass:"q-mt-sm"},[s("q-form",{on:{submit:e.submit}},[s("div",{staticClass:"row q-gutter-xs custom_css"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"row q-gutter-sm"},[s("q-input",{staticClass:"col no-padding",attrs:{label:"El nombre contiene...",dense:"","label-color":"white","input-class":"text-white",debounce:"500",loading:e.waiting,autofocus:""},on:{input:e.submit},model:{value:e.product.name,callback:function(t){e.$set(e.product,"name",t)},expression:"product.name"}}),s("q-select",{staticClass:"col no-padding",attrs:(t={options:e.categories,"options-dense":"","option-label":function(t){return t.name},"label-color":"white","input-class":"text-white","popup-content-class":"text-white",outlined:"",dense:"","use-input":"",clearable:"",multiple:""},o()(t,"popup-content-class",e.$q.screen.gt.sm?"bg-dark-blue dark-blue text-white":"bg-dark-blue"),o()(t,"label","Seleccione una categoría"),o()(t,"color","white"),o()(t,"rules",[e.$rules.required()]),t),on:{filter:e.fnCategories,input:e.submit},scopedSlots:e._u([e.user&&1===e.user.role_id?{key:"no-option",fn:function(){return[s("q-item",[s("q-item-section",{staticClass:"text-grey"},[s("CategoryAdd",{staticClass:"full-width",attrs:{"full-width":!0},on:{newCategory:function(t){return e.$emit("updated")}}})],1)],1)]},proxy:!0}:null],null,!0),model:{value:e.product.category_id,callback:function(t){e.$set(e.product,"category_id",t)},expression:"product.category_id"}})],1)]),s("div",{staticClass:"col-12"},[s("div",{staticClass:"row q-gutter-sm"},[s("q-input",{staticClass:"col",attrs:{label:"Precio de venta costo",dense:"","label-color":"white","input-class":"text-white",debounce:"500",loading:e.waiting,autofocus:""},on:{input:e.submit},model:{value:e.product.cost_price_min,callback:function(t){e.$set(e.product,"cost_price_min",t)},expression:"product.cost_price_min"}}),s("q-input",{staticClass:"col",attrs:{label:"Precio de costo máximo",dense:"","label-color":"white","input-class":"text-white",debounce:"500",loading:e.waiting,autofocus:""},on:{input:e.submit},model:{value:e.product.cost_price_max,callback:function(t){e.$set(e.product,"cost_price_max",t)},expression:"product.cost_price_max"}})],1)]),s("div",{staticClass:"col-12"},[s("div",{staticClass:"row q-gutter-sm"},[s("q-input",{staticClass:"col",attrs:{label:"Precio de venta mínimo",dense:"","label-color":"white","input-class":"text-white",debounce:"500",loading:e.waiting,autofocus:""},on:{input:e.submit},model:{value:e.product.sell_price_min,callback:function(t){e.$set(e.product,"sell_price_min",t)},expression:"product.sell_price_min"}}),s("q-input",{staticClass:"col",attrs:{label:"Precio de venta máximo",dense:"","label-color":"white","input-class":"text-white",debounce:"500",loading:e.waiting,autofocus:""},on:{input:e.submit},model:{value:e.product.sell_price_max,callback:function(t){e.$set(e.product,"sell_price_max",t)},expression:"product.sell_price_max"}})],1)]),s("div",{staticClass:"col-12 text-right q-gutter-xs"},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Cancelar",color:"dark-blue"}})],1),e.products.length?s("div",{staticClass:"col-12 q-py-xs text-white"},[s("div",{staticClass:"row bg-dark-blue"},[s("div",{staticClass:"col text-left"},[e._v("Nombre")]),s("div",{staticClass:"col text-center"},[e._v("Precio de venta")]),s("div",{staticClass:"col text-center"},[e._v("Precio de costo")]),s("div",{staticClass:"col text-left"},[e._v("Categoría")]),e.logged?s("div",{staticClass:"col-1 text-center"},[e._v("Acciones")]):e._e()])]):e._e(),s("div",{staticClass:"col-12 text-white"},e._l(e.products,(function(t){return s("ProductSearchItem",{key:t.id,attrs:{product:t},on:{updated:function(t){e.$emit("updated"),e.searching=!1}}})})),1)])])],1)],1)],1)])])],1)}),l=[],c=s("7ec2"),r=s.n(c),n=s("c973"),d=s.n(n),u=s("ded3"),p=s.n(u),m=(s("4de4"),s("d3b7"),s("caad"),s("2532"),s("d81d"),s("920e")),f=s("e222"),h=s("2f62"),g=s("ffc9"),v={components:{CategoryAdd:g["a"],ProductSearchItem:f["a"]},props:{categories:{type:Array},menu_mode:{type:Boolean,default:!1}},computed:p()({},Object(h["b"])({logged:"mystore/loggedIn",user:"mystore/user"})),data:function(){return{searching:!1,product:{name:"",cost_price_min:"",cost_price_max:"",sell_price_min:"",sell_price_max:"",category_id:[],description:"",stock:"",tag:""},tags:["Todas las unidades","Sin etiqueta"],products:[],products_all:[],categoriesFiltered:[],waiting:!1}},methods:{fnCategories:function(t,e,s){var a=this;e((function(){if(""===t)a.categoriesFiltered=a.categories;else{var e=t.toLowerCase();a.categoriesFiltered=a.categories.filter((function(t){var s;return null===t||void 0===t||null===(s=t.name)||void 0===s?void 0:s.toLowerCase().includes(e)}))}}),(function(e){""!==t&&e.options.length>0&&(e.setOptionIndex(-1),e.moveOptionSelection(1,!0))}))},cleanSearch:function(){this.product={name:"",cost_price_min:"",cost_price_max:"",sell_price_min:"",sell_price_max:"",category_id:null,description:"",stock:"",tag:""}},submit:function(){var t=this;this.waiting=!0;var e=this.products_all;this.product.name&&(e=e.filter((function(e){return e.name.toLowerCase().includes(t.product.name.toLowerCase())}))),this.product.category_id&&(e=e.filter((function(e){return t.product.category_id.map((function(t){return t.id})).includes(e.category_id)})),console.log(e.map((function(t){return t.category_id})))),this.product.sell_price_min&&(e=e.filter((function(e){return e.sell_price>=t.product.sell_price_min}))),this.product.sell_price_max&&(e=e.filter((function(e){return e.sell_price<=t.product.sell_price_max}))),this.product.cost_price_min&&(e=e.filter((function(e){return e.sell_price>=t.product.sell_price_min}))),this.product.cost_price_max&&(e=e.filter((function(e){return e.sell_price<=t.product.sell_price_max}))),this.products=e,this.waiting=!1},findProducts:function(){var t=this;return d()(r()().mark((function e(){var s;return r()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(m["c"])(!1);case 2:s=e.sent,s.status<400&&(t.products_all=s.data.data);case 4:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.findProducts(),this.categoriesFiltered=this.categories}},b=v,_=(s("6b73"),s("2877")),C=s("9c40"),q=s("0016"),w=s("24e8"),x=s("f09f"),y=s("65c6"),k=s("2c91"),S=s("a370"),$=s("0378"),P=s("27f9"),Q=s("ddd8"),R=s("66e5"),I=s("4074"),j=s("8572"),O=s("a12b"),A=s("7f67"),L=s("eebe"),z=s.n(L),B=Object(_["a"])(b,i,l,!1,null,null,null);e["a"]=B.exports;z()(B,"components",{QBtn:C["a"],QIcon:q["a"],QDialog:w["a"],QCard:x["a"],QToolbar:y["a"],QSpace:k["a"],QCardSection:S["a"],QForm:$["a"],QInput:P["a"],QSelect:Q["a"],QItem:R["a"],QItemSection:I["a"],QField:j["a"],QVirtualScroll:O["a"]}),z()(B,"directives",{ClosePopup:A["a"]})},"6b73":function(t,e,s){"use strict";s("2415")},"6ea8":function(t,e,s){},"907d":function(t,e,s){"use strict";s("05b0")},"99d4":function(t,e,s){},aa02:function(t,e,s){"use strict";s("3079")},c6a7:function(t,e,s){"use strict";s("6ea8")}}]);