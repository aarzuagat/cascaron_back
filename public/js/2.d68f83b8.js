(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"1b14":function(t,e,a){"use strict";a("5510")},5510:function(t,e,a){},"713b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("q-layout",{staticClass:"bg-darkless-blue",attrs:{view:"hHh lpR fFf"}},[e("Header",{attrs:{side:t.left},on:{updated:t.updateSide}}),e("q-drawer",{staticClass:"q-mt-sm",attrs:{"show-if-above":"",side:"left","content-class":"bg-dark-blue"},model:{value:t.left,callback:function(e){t.left=e},expression:"left"}},[e("Menu")],1),e("q-page-container",[e("router-view")],1)],1)},l=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"row q-pt-sm"},[e("div",{staticClass:"col-12"},[e("q-expansion-item",{staticClass:"full-width text-white",attrs:{icon:"mdi-view-dashboard",label:"Dashboard","expand-icon-class":"text-dark-blue",dense:""}}),e("q-expansion-item",{staticClass:"full-width text-white",attrs:{"expand-separator":"",icon:"mdi-storefront",label:"Gestión de stock","expand-icon-class":"text-white"}},[e("div",{staticClass:"bg-dark-blue q-pl-xl"},[e("q-btn",{staticClass:"full-width",attrs:{icon:"mdi-format-list-bulleted",align:"left",flat:"","no-caps":"",label:"Listado"}}),e("q-btn",{staticClass:"full-width",attrs:{icon:"mdi-plus-circle-outline",align:"left",flat:"","no-caps":"",label:"Listado"}}),e("q-btn",{staticClass:"full-width",attrs:{icon:"mdi-cash-register",align:"left",flat:"","no-caps":"",label:"Vender producto"}}),e("q-btn",{staticClass:"full-width",attrs:{icon:"mdi-file-search-outline",align:"left",flat:"","no-caps":"",label:"Listado"}})],1)])],1)])},o=[],i={data:function(){return{}}},r=i,c=a("2877"),u=a("3b73"),d=a("9c40"),p=a("eebe"),m=a.n(p),f=Object(c["a"])(r,n,o,!1,null,null,null),b=f.exports;m()(f,"components",{QExpansionItem:u["a"],QBtn:d["a"]});var h=function(){var t=this,e=t._self._c;return e("q-header",{staticClass:"bg-dark-blue text-white",attrs:{elevated:"","height-hint":"98"}},[e("div",{staticClass:"row shadow-1 items-center"},[t.$q.screen.lt.md?e("div",{staticClass:"col-auto"},[e("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:t.setLeft}})],1):t._e(),e("div",{staticClass:"col-2 q-pl-sm q-py-xs"},[e("img",{staticStyle:{"max-height":"2rem"},attrs:{src:"/icons/logo.png"}})]),e("div",{staticClass:"col"},[e("ProductSearcher")],1),e("div",{staticClass:"col-6 q-pr-sm text-right"},[t.logged?e("ProfileLogo"):e("LoginButton")],1)])])},g=[],v=a("ded3"),w=a.n(v),q=function(){var t=this,e=t._self._c;return e("div",[e("q-input",{staticClass:"no-padding",attrs:{"bg-color":"darkless-blue",maxlength:"100",label:"Buscar un producto",dense:"",rounded:"","input-class":"text-white",outlined:"","label-color":"white"},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{attrs:{name:"fa fa-search",color:"white",size:"15px"}})]},proxy:!0}]),model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)},x=[],C={data:function(){return{text:""}}},_=C,y=(a("1b14"),a("27f9")),Q=a("0016"),k=a("8572"),L=Object(c["a"])(_,q,x,!1,null,null,null),B=L.exports;m()(L,"components",{QInput:y["a"],QIcon:Q["a"],QField:k["a"]});a("b0c0");var $=function(){var t=this,e=t._self._c;return e("div",[e("q-btn",{attrs:{rounded:"",dense:"",color:"negative",size:"sm"}},[e("q-avatar",{attrs:{size:"1.5rem"}},[e("img",{attrs:{src:"/img/image.jpg",alt:"foto perfil"}})])],1),t.user?e("span",[t._v(t._s(t.user.name))]):t._e(),e("q-btn",{attrs:{icon:"mdi-logout",dense:"",flat:""},on:{click:t.logOut}})],1)},S=[],O=a("2f62"),j={computed:w()({},Object(O["b"])({user:"mystore/user"})),data:function(){return{}},methods:{logOut:function(){this.$store.dispatch("mystore/logoutUser")}},mounted:function(){}},A=j,I=a("cb32"),P=Object(c["a"])(A,$,S,!1,null,null,null),F=P.exports;m()(P,"components",{QBtn:d["a"],QAvatar:I["a"]});var z=function(){var t=this,e=t._self._c;return e("div",[e("q-btn",{attrs:{label:"Iniciar sesión",color:"dark",rounded:""},on:{click:function(e){t.showing=!0}}}),e("q-dialog",{model:{value:t.showing,callback:function(e){t.showing=e},expression:"showing"}},[e("q-card",{style:t.$q.screen.lt.md?"width: 90vw":"width: 40vw",attrs:{flat:""}},[e("q-form",{on:{submit:t.submit}},[e("q-bar",{staticClass:"text-white bg-primary q-py-sm",staticStyle:{height:"auto"}},[e("div",{staticStyle:{"font-weight":"600"}},[t._v("Iniciar sesión")]),e("q-space"),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",round:"",dense:"",icon:"close"}})],1),e("q-card-section",[e("q-input",{attrs:{rules:[t.$rules.required(),t.$rules.email()],label:"Email",dense:""},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),e("q-input",{attrs:{rules:[t.$rules.required(),t.$rules.minLength(8)],label:"Contraseña",dense:""},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),e("FormCardAction",{attrs:{"custom-label":"Autenticar"}})],1)],1)],1)],1)},H=[],N=a("7ec2"),D=a.n(N),E=a("c973"),J=a.n(E),M=function(){var t=this,e=t._self._c;return e("q-card-actions",{attrs:{align:"right"}},[t.lite?t._e():e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Cancelar",color:"warning","no-caps":t.capittal_letters}}),t.lite?t._e():e("q-btn",{attrs:{disable:!t.available,label:t.customLabel?t.customLabel:t.update?"Actualizar":"Crear",type:"submit",color:t.color,"no-caps":t.capittal_letters}}),t.lite?e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{disable:!t.available,label:t.customLabel?t.customLabel:t.update?"Actualizar":"Crear",color:t.color,"no-caps":t.capittal_letters}}):t._e()],1)},U=[],G=(a("a9e3"),{name:"FormCardAction",props:{update:{type:Boolean,default:!1},capittal_letters:{type:Boolean,default:!0},lite:{type:Boolean,default:!1},available:{type:[Boolean,Number],default:!0},customLabel:{type:String,default:null},color:{type:String,default:"primary"}},data:function(){return{}}}),R=G,V=a("4b7e"),K=a("7f67"),T=Object(c["a"])(R,M,U,!1,null,null,null),W=T.exports;m()(T,"components",{QCardActions:V["a"],QBtn:d["a"]}),m()(T,"directives",{ClosePopup:K["a"]});var X={components:{FormCardAction:W},data:function(){return{showing:!1,user:{email:"admin@admin.love",password:"admin123"}}},methods:{submit:function(){var t=this;return J()(D()().mark((function e(){return D()().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$q.loading.show(),e.next=3,t.$store.dispatch("mystore/loginUser",t.user);case 3:e.sent,t.$q.loading.hide();case 5:case"end":return e.stop()}}),e)})))()}}},Y=X,Z=a("24e8"),tt=a("f09f"),et=a("0378"),at=a("d847"),st=a("2c91"),lt=a("a370"),nt=Object(c["a"])(Y,z,H,!1,null,null,null),ot=nt.exports;m()(nt,"components",{QBtn:d["a"],QDialog:Z["a"],QCard:tt["a"],QForm:et["a"],QBar:at["a"],QSpace:st["a"],QCardSection:lt["a"],QInput:y["a"]}),m()(nt,"directives",{ClosePopup:K["a"]});var it={components:{LoginButton:ot,ProfileLogo:F,ProductSearcher:B},props:{side:{type:Boolean}},computed:w()({},Object(O["b"])({logged:"mystore/loggedIn"})),data:function(){return{}},methods:{setLeft:function(){this.left=!this.side,this.$emit("updated",this.left)}}},rt=it,ct=a("e359"),ut=Object(c["a"])(rt,h,g,!1,null,null,null),dt=ut.exports;m()(ut,"components",{QHeader:ct["a"],QBtn:d["a"]});var pt={components:{Header:dt,Menu:b},data:function(){return{left:!1}},methods:{updateSide:function(t){this.left=t}}},mt=pt,ft=a("4d5a"),bt=a("9404"),ht=a("09e3"),gt=Object(c["a"])(mt,s,l,!1,null,null,null);e["default"]=gt.exports;m()(gt,"components",{QLayout:ft["a"],QDrawer:bt["a"],QPageContainer:ht["a"]})}}]);