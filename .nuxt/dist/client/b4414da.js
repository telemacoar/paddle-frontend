(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{508:function(e,t,n){var content=n(509);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("12a190a6",content,!0,{sourceMap:!1})},509:function(e,t,n){var o=n(20)(!1);o.push([e.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),e.exports=o},510:function(e,t,n){var content=n(511);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("2e2bc7da",content,!0,{sourceMap:!1})},511:function(e,t,n){var o=n(20)(!1);o.push([e.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),e.exports=o},523:function(e,t,n){"use strict";n.r(t);var o=n(36),r=(n(168),n(108),{data:function(){return{dialog:!1,dialogDelete:!1,headers:[{text:"Nombre",value:"name"},{text:"Descripcion",value:"description"},{text:"Precio Compra",value:"price_buy"},{text:"Precio Venta",value:"price_sell"},{text:"Iva",value:"iva"},{text:"Foto",value:"picture"},{text:"Estoqueable",value:"stockeable"},{text:"Accion",value:"actions"}],items:[],editedIndex:-1,search:"",editedItem:{name:"",description:"",price_buy:0,price_sell:0,iva:0,picture:"",stockeable:!0},defaultItem:{name:"",description:"",price_buy:0,price_sell:0,iva:0,picture:"",stockeable:!0}}},mounted:function(){this.load()},methods:{load:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/api/products/");case 2:data=t.sent,e.items=data.results,console.log(data);case 5:case"end":return t.stop()}}),t)})))()},editItem:function(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$delete("/api/products/"+e.editedItem.id);case 2:e.items.splice(e.editedIndex,1),e.closeDelete();case 4:case"end":return t.stop()}}),t)})))()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.editedIndex>-1)){t.next=6;break}return t.next=3,e.$axios.$put("/api/products/"+e.editedItem.id,e.editedItem);case 3:Object.assign(e.items[e.editedIndex],e.editedItem),t.next=10;break;case 6:return console.log(e.editedItem),t.next=9,e.$axios.$post("/api/products/",e.editedItem);case 9:e.items.push(e.editedItem);case 10:e.close();case 11:case"end":return t.stop()}}),t)})))()}},computed:{formTitle:function(){return-1===this.editedIndex?"Nuevo":"Editar"}},watch:{dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},editItem:function(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.items.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){this.items.splice(this.editedIndex,1),this.closeDelete()},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.editedIndex>-1?Object.assign(e.items[e.editedIndex],e.editedItem):e.items.push(e.editedItem),t.next=3,e.$axios.$post("/api/products/",e.editedItem);case 3:e.close();case 4:case"end":return t.stop()}}),t)})))()}}),l=n(72),c=n(92),d=n.n(c),v=n(209),h=n(421),m=n(419),f=(n(13),n(12),n(11),n(15),n(10),n(16),n(121)),x=n(2),_=(n(5),n(73),n(508),n(510),n(107)),I=n(445),k=n(93),y=n(0).default.extend({name:"rippleable",directives:{ripple:k.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),O=n(219),w=n(14);function C(e){e.preventDefault()}var V=Object(w.a)(I.a,y,O.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return e.valueComparator(n,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var label=I.a.options.methods.genLabel.call(this);return label?(label.data.on={click:C},label):label},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:C},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!e.valueComparator(n,t)}))).length===n&&input.push(t)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(input,t)?null:t:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}}),$=["title"];function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(x.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var S=V.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return D(D({},I.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(e){var t=this;this.$nextTick((function(){return t.inputIndeterminate=e}))},inputIndeterminate:function(e){this.$emit("update:indeterminate",e)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var e=this.attrs$,t=(e.title,Object(f.a)(e,$));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(_.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",D(D({},t),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),A=n(517),T=n(417),P=n(522),E=n(520),R=n(190),B=n(518),F=n(415),M=n(454),z=n(49),N=n(200),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[[n("v-data-table",{attrs:{headers:e.headers,items:e.items,search:e.search,dense:"","hide-default-footer":"","disable-pagination":""},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[e._v("Productos")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Buscar","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-dialog",{attrs:{"max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",r,!1),o),[n("v-icon",[e._v("mdi-text-box-plus")]),e._v(" Nuevo\n              ")],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Nombre"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Descripcion"},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Precio Compra"},model:{value:e.editedItem.price_buy,callback:function(t){e.$set(e.editedItem,"price_buy",t)},expression:"editedItem.price_buy"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Precio Venta"},model:{value:e.editedItem.price_sell,callback:function(t){e.$set(e.editedItem,"price_sell",t)},expression:"editedItem.price_sell"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Iva"},model:{value:e.editedItem.iva,callback:function(t){e.$set(e.editedItem,"iva",t)},expression:"editedItem.iva"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Foto"},model:{value:e.editedItem.picture,callback:function(t){e.$set(e.editedItem,"picture",t)},expression:"editedItem.picture"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-checkbox",{attrs:{label:"Estoqueable"},model:{value:e.editedItem.stockeable,callback:function(t){e.$set(e.editedItem,"stockeable",t)},expression:"editedItem.stockeable"}})],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("\n                  Cancel\n                ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),n("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var o=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(o)}}},[e._v("\n          mdi-pencil\n        ")]),e._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(o)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[e._v(" Sin datos ")]},proxy:!0}])})]],2)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:v.a,VCard:h.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VCheckbox:S,VCol:A.a,VContainer:T.a,VDataTable:P.a,VDialog:E.a,VIcon:R.a,VRow:B.a,VSpacer:F.a,VTextField:M.a,VToolbar:z.a,VToolbarTitle:N.a})}}]);