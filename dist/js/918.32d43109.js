"use strict";(self["webpackChunkesweepstore"]=self["webpackChunkesweepstore"]||[]).push([[918],{6816:function(t,e,s){s.d(e,{Z:function(){return a}});var i=s(3385),a=i.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex((e=>e._uid===t._uid));e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},7620:function(t,e,s){s.d(e,{Z:function(){return v}});var i=s(6952),a=s(6505),n=s(7352),o=s(8085),l=s(2936),r=s(6286),c=s(4589),h=s(1824),u=s(3325);const d=(0,u.Z)(i.Z,a.Z,o.Z,(0,n.d)("listItemGroup"),(0,l.d)("inputValue"));var v=d.extend().extend({name:"v-list-item",directives:{Ripple:r.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...a.Z.options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(a.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&(0,h.Jk)("avatar",this)},methods:{click(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs(){const t={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="option",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||`list-item-${this._uid}`):this.isInList&&(t.role="listitem")),t},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(t){let{tag:e,data:s}=this.generateRouteLink();s.attrs={...s.attrs,...this.genAttrs()},s[this.to?"nativeOn":"on"]={...s[this.to?"nativeOn":"on"],keydown:t=>{this.disabled||(t.keyCode===c.Do.enter&&this.click(t),this.$emit("keydown",t))}},this.inactive&&(e="div"),this.inactive&&this.to&&(s.on=s.nativeOn,delete s.nativeOn);const i=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(e,this.isActive?this.setTextColor(this.color,s):s,i)}})},868:function(t,e,s){s.d(e,{km:function(){return x},oZ:function(){return S},V9:function(){return j}});var i=s(4589),a=s(6816),n=s(172),o=s(7620),l=s(144),r=l.Z.extend({name:"v-list-item-icon",functional:!0,render(t,{data:e,children:s}){return e.staticClass=`v-list-item__icon ${e.staticClass||""}`.trim(),t("div",e,s)}}),c=s(6210),h=s(8625),u=s(6952),d=s(2936),v=s(6257),p=s(6286),m=s(5827),g=s(3325);const _=(0,g.Z)(c.Z,h.Z,u.Z,(0,v.f)("list"),d.Z);var b=_.extend().extend({name:"v-list-group",directives:{ripple:p.Z},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(t){this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((()=>this.isActive=!this.isActive)))},genIcon(t){return this.$createElement(n.Z,t)},genAppendIcon(){const t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(r,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader(){return this.$createElement(o.Z,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent((()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},(0,i.z9)(this))]))},genPrependIcon(){const t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(r,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange(t){if(!this.group)return;const e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e},toggle(t){const e=this._uid===t;e&&(this.isBooted=!0),this.$nextTick((()=>this.isActive=e))},matchRoute(t){return null!==t.match(this.group)}},render(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(m.Fx,this.genItems())])}}),f=s(4622),k=(0,g.Z)(f.y,u.Z).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...f.y.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...f.y.options.methods.genData.call(this),attrs:{role:"listbox"}})}}}),C=l.Z.extend({name:"v-list-item-action",functional:!0,render(t,{data:e,children:s=[]}){e.staticClass=e.staticClass?`v-list-item__action ${e.staticClass}`:"v-list-item__action";const i=s.filter((t=>!1===t.isComment&&" "!==t.text));return i.length>1&&(e.staticClass+=" v-list-item__action--stack"),t("div",e,s)}}),Z=s(6370),I=Z.Z,$=I.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...I.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(t){const e=I.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}});const y=(0,i.Ji)("v-list-item__action-text","span"),x=(0,i.Ji)("v-list-item__content","div"),j=(0,i.Ji)("v-list-item__title","div"),S=(0,i.Ji)("v-list-item__subtitle","div");a.Z,o.Z},2918:function(t,e,s){s.r(e),s.d(e,{default:function(){return x}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("h1",{staticClass:"pa-5"},[t._v("Započnimo !")]),s("h2",{staticClass:"pa-5"},[t._v("Pretraga nagradnih igara")]),t.logged?s("v-container",{staticStyle:{"background-color":"teal"}},[s("h3",{staticStyle:{color:"white"},attrs:{align:"right"}},[t._v("Tokena: "+t._s(this.$store.state.user.tokens))])]):t._e(),s("v-container",{staticStyle:{"background-color":"teal",color:"white"}}),s("v-container",[s("v-row",t._l(t.comp,(function(t){return s("v-col",{key:t.id,attrs:{xs:"12",sm:"6",md:"6",lg:"4",xl:"3"}},[s("pogledaj-igru",{attrs:{tip:t.type,naziv:t.name,organizator:t.organiser,tokens:t.tokens,nagrada:t.prize,vrijednost:t.prize_value,objavljena:t.created_at,zavrsava:t.finishes_at,pobjednik:t.winner,id:t.id}})],1)})),1)],1)],1)},a=[],n=s(2043),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-card",{staticClass:"mx-auto",attrs:{dark:"","max-width":"490",outlined:""}},[s("v-list-item",{attrs:{"three-line":""}},[s("v-list-item-content",[s("div",{staticClass:"text-overline mb-4",staticStyle:{color:"teal"},attrs:{align:"left"}},[t._v(" "+t._s(this.tipcomp)+" ")]),s("br"),s("v-list-item-title",{staticClass:"text-h5 mb-7"},[t._v(" "+t._s(t.naziv)+" ")]),s("hr"),s("v-list-item-subtitle",{staticStyle:{color:"teal"},attrs:{align:"left"}},[t._v("Organizator:")]),s("v-list-item-subtitle",{staticClass:"mb-7"},[t._v(t._s(this.organizatorcomp))]),s("br"),s("v-list-item-subtitle",{staticStyle:{color:"teal"},attrs:{align:"left"}},[t._v("Nagrada:")]),s("v-list-item-subtitle",{staticClass:"mb-7"},[t._v(t._s(t.nagrada))]),s("v-list-item-subtitle",{staticStyle:{color:"teal"},attrs:{align:"left"}},[t._v("Vrijednost: ")]),s("v-list-item-subtitle",{staticClass:"mb-7"},[t._v(t._s(t.vrijednost)+" KM")]),s("v-list-item-subtitle",{staticStyle:{color:"teal"},attrs:{align:"left"}},[t._v("Cijena: ")]),s("v-list-item-subtitle",{staticClass:"mb-7"},[t._v(t._s(t.tokens)+" Token/a")]),s("v-list-item-subtitle",{staticStyle:{color:"teal"},attrs:{align:"left"}},[t._v("Završava: ")]),s("v-list-item-subtitle",{staticClass:"mb-7"},[t._v(t._s(t.zavrsava))]),s("v-list-item-subtitle",{staticStyle:{color:"teal"},attrs:{align:"left"}},[t._v("Dobitnik: ")]),s("v-list-item-subtitle",[t._v(t._s(this.pobjednikcomp))]),s("h1",{staticStyle:{color:"lime"}},[t._v(t._s(this.zavrsavacomp))]),t.canJoin?s("v-btn",{staticClass:"mt-3",attrs:{outlined:"",color:"white"},on:{click:function(e){return t.sudjeluj()}}},[t._v("Sudjeluj >")]):t._e(),s("br")],1)],1)],1)],1)},l=[],r=new Date,c={name:"pogledajIgru",props:["tokens","naziv","organizator","id","tip","nagrada","vrijednost","objavljena","zavrsava","pobjednik"],data:()=>({tipcomp:null,organizatorcomp:null,canJoin:null,pobjednikcomp:null,zavrsavacomp:null,form:{submitter:null,game:null},form2:{name:null,user_role:"1",tokens:null}}),methods:{sudjeluj(){null!=this.zavrsavacomp&&alert("OPREZ! Sudjelujete u ZAVRŠENOJ igri!"),n.Z.get("/users/"+this.$store.state.user.id).then((t=>{this.form2.name=t.data.name,this.form2.user_role=t.data.user_role,this.form2.tokens=t.data.tokens})),this.form2.tokens>=this.tokens&&(this.form.game=this.id,this.form.submitter=this.$store.state.user.id,this.form2.tokens=this.form2.tokens-this.tokens,n.Z.put("/users/"+this.$store.state.user.id,JSON.stringify(this.form2)).then((t=>{200===t.status&&console.log("response.status")})),n.Z.post("/submits",JSON.stringify(this.form)).then((t=>{201===t.status&&(console.log("response.status"),alert("Uspješno ste se prijavili na igru!"),this.$router.go(0))})))}},mounted(){r.toJSON()>this.zavrsava&&(this.zavrsavacomp="ZAVRŠENA !",console.log(this.zavrsavacomp)),n.Z.get("/types/"+this.tip).then((t=>{this.tipcomp=t.data.name})),n.Z.get("/users/"+this.organizator).then((t=>{this.organizatorcomp=t.data.name})),n.Z.get("/users/"+this.pobjednik).then((t=>{this.pobjednikcomp=t.data.name})),1!=this.$store.state.user.user_role&&3!=this.$store.state.user.user_role||(this.canJoin="1")}},h=c,u=s(1001),d=s(3453),v=s.n(d),p=s(680),m=s(3237),g=s(9846),_=s(7620),b=s(868),f=(0,u.Z)(h,o,l,!1,null,null,null),k=f.exports;v()(f,{VBtn:p.Z,VCard:m.Z,VContainer:g.Z,VListItem:_.Z,VListItemContent:b.km,VListItemSubtitle:b.oZ,VListItemTitle:b.V9});var C={data:()=>({comp:[],logged:localStorage.getItem("app_token")}),name:"HomeView",components:{pogledajIgru:k},mounted:function(){n.Z.get("/games").then((t=>{this.comp=t.data}))}},Z=C,I=s(2102),$=s(2877),y=(0,u.Z)(Z,i,a,!1,null,null,null),x=y.exports;v()(y,{VCol:I.Z,VContainer:g.Z,VRow:$.Z})}}]);
//# sourceMappingURL=918.32d43109.js.map