webpackJsonp([3],{"/j6K":function(a,t,e){"use strict";var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content-container"},[e("b-navbar",{staticClass:"nav",attrs:{toggleable:"md",type:"dark"}},[e("b-navbar-brand",{staticClass:"brand",attrs:{to:{name:"index"}}},[a._v("EKTotal 4.0")]),e("b-collapse",{staticClass:"menu-body",attrs:{"is-nav":"",id:"nav_collapse"}},[e("b-navbar-nav",[e("b-nav-item",{staticClass:"link-item",class:{"now-viewing":a.viewing("analyze-id")},attrs:{to:{name:"analyze-id",params:{id:a.$store.state.analyze.scoped_analyze_result.id+".json"}}}},[e("font-awesome-icon",{attrs:{icon:"tachometer-alt"}}),a._v(" Summary")],1),e("b-nav-item",{staticClass:"link-item",class:{"now-viewing":a.viewing("analyze-id-file")},attrs:{to:{name:"analyze-id-file",params:{id:a.$store.state.analyze.scoped_analyze_result.id+".json"}}}},[e("font-awesome-icon",{attrs:{icon:"file"}}),a._v(" File")],1)],1),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item",{staticClass:"upload-link",attrs:{right:"",to:{name:"index"}}},[e("font-awesome-icon",{attrs:{icon:"upload"}}),a._v(" Upload another file")],1)],1)],1)],1),e("div",{attrs:{id:"inner-content"}},[e("div",{staticClass:"inner"},[e("router-view")],1)])],1)};n._withStripped=!0;var i={render:n,staticRenderFns:[]};t.a=i},CNNt:function(a,t,e){"use strict";var n=e("Xxa5"),i=e.n(n),s=e("exGp"),r=e.n(s);t.a={validate:function(a){var t=a.params;return/[a-f0-9\-]+_[a-f0-9\-]+\.json/.test(t.id)},fetch:function(){var a=r()(i.a.mark(function a(t){var e,n=t.store,s=t.params;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.$axios.$get("/api/result/"+s.id).catch(function(a){var t=new Error("Parameter id not found");throw t.status_code=404,t});case 2:e=a.sent,n.commit("analyze/push_results",e),n.commit("analyze/change_scoped",e.id);case 5:case"end":return a.stop()}},a,this)}));return function(t){return a.apply(this,arguments)}}(),computed:{viewing:function(){var a=this;return function(t){return t===a.$route.name}}}}},GFxT:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("CNNt"),i=e("/j6K"),s=!1;var r=function(a){s||e("KJJv")},o=e("VU/8")(n.a,i.a,!1,r,"data-v-9bead9e4",null);o.options.__file="pages/analyze/_id.vue",t.default=o.exports},KJJv:function(a,t,e){var n=e("SpUF");"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);e("rjj0")("601f5528",n,!1,{sourceMap:!1})},SpUF:function(a,t,e){(a.exports=e("FZ+f")(!1)).push([a.i,".nav[data-v-9bead9e4]{background-color:#2196f3;font-size:18px;height:50px;padding-top:0;padding-bottom:0;min-width:1200px}.nav .brand[data-v-9bead9e4]{font-size:18px;padding-left:calc(50vw - 600px)}.nav .upload-link[data-v-9bead9e4]{padding-right:calc(50vw - 600px)}.nav .link-item[data-v-9bead9e4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:5px;margin-right:5px}.nav .now-viewing[data-v-9bead9e4]{background-color:#000;height:50px}.nav .menu-body[data-v-9bead9e4]{margin:0}#inner-content[data-v-9bead9e4]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-top:15px;padding-bottom:15px;min-width:1200px}#inner-content .inner[data-v-9bead9e4]{min-width:1200px;max-width:1200px;padding:30px 20px;background-color:hsla(0,0%,100%,.4);border-bottom:5px solid #a8c6dd}",""])}});