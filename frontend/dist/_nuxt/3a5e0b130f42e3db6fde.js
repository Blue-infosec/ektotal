(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{279:function(e,t,n){var content=n(287);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(43).default)("951ac566",content,!0,{sourceMap:!1})},286:function(e,t,n){"use strict";var r=n(279);n.n(r).a},287:function(e,t,n){(e.exports=n(42)(!1)).push([e.i,"h1{font-size:60px}header{padding-top:40px;padding-bottom:40px;color:#696969}header h1{color:#000}.main-summary{text-align:center;color:#696969;padding-top:40px;padding-bottom:40px}.main-summary strong{color:red}.main-summary .green{color:green}table{word-wrap:break-word}",""])},294:function(e,t,n){"use strict";n.r(t);n(58);var r=n(12),o=(n(7),n(117)),c={data:function(){return{copy_message:"Click to copy"}},computed:{analysis_result:function(){return this.$store.state.analyze.scoped_analyze_result},get_malicious_icon:function(){return this.$store.getters["analyze/malicious_result_length"]>0?o.a:o.b},is_included_malicious_traffic:function(){return this.$store.getters["analyze/malicious_result_length"]>0},summary_result:function(){var e=this.$store.state.analyze.scoped_analyze_result,t=[];return e.data.forEach(function(e){var n={};n.name={name:e.result?e.result.name:null,enc_key:e.result&&e.result.description&&e.result.description.enc_key?e.result.description.enc_key:null},n.URL=e.URL,n.CVE_numbers=e.result&&e.result.description&&e.result.description.cve_numbers?e.result.description.cve_numbers:[],t.push(n)}),t}},methods:{get_enc_id:function(e){return"enc_"+e},copy:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(text,t){var n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$copyText(text).catch(function(e){n.copy_message="AHHH, no copied?! ;(",exit()});case 2:this.copy_message="Copied!";case 3:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),init_copy_message:function(){this.copy_message="Click to copy"}}},_=(n(286),n(44)),component=Object(_.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header",[n("h1",[e._v("Summary")]),e._v(" "),n("span",[e._v(" - Case: "+e._s(e.analysis_result.id))])]),e._v(" "),n("b-container",[n("b-row",[n("b-col",{staticClass:"main-summary"},[n("h1",[n("strong",[e._v(e._s(e.$store.getters["analyze/malicious_result_length"]))]),e._v("/"+e._s(e.$store.getters["analyze/result_length"]))]),e._v(" "),n("p",[e._v("Number of Malicious Traffic")])]),e._v(" "),n("b-col",{staticClass:"main-summary"},[n("h1",[n("strong",[e._v(e._s(e.$store.getters["analyze/include_malicious_file_result_length"]))])]),e._v(" "),n("p",[e._v("Number of Malicious File")])]),e._v(" "),n("b-col",{staticClass:"main-summary"},[n("h1",[n("strong",{class:{green:!e.is_included_malicious_traffic}},[n("font-awesome-icon",{attrs:{icon:e.get_malicious_icon}})],1)]),e._v(" "),e.is_included_malicious_traffic?n("p",[n("strong",[e._v("Malicious Traffic")])]):e._e(),e._v(" "),e.is_included_malicious_traffic?e._e():n("p",[e._v("Clean Traffic")])])],1)],1),e._v(" "),e._m(0),e._v(" "),n("b-table",{attrs:{responsive:"",items:e.summary_result,fixed:""},scopedSlots:e._u([{key:"CVE_numbers",fn:function(data){return e._l(data.item.CVE_numbers,function(t){return n("span",{key:t},[n("b-badge",{attrs:{variant:"danger"}},[e._v(e._s(t))])],1)})}},{key:"name",fn:function(data){return[n("span",[e._v(e._s(data.item.name.name))]),e._v(" "),Boolean(data.item.name.enc_key)?n("span",[n("br"),e._v(" "),n("b-badge",{attrs:{variant:"primary",id:e.get_enc_id(data.index)},on:{mouseleave:e.init_copy_message,click:function(t){return e.copy(data.item.name.enc_key,data.index)}}},[e._v("Encode Key: "+e._s(data.item.name.enc_key)+" "),n("font-awesome-icon",{attrs:{icon:"clipboard"}})],1),e._v(" "),n("b-tooltip",{attrs:{target:e.get_enc_id(data.index),placement:"bottom",delay:"{ show:200, hide:0 }"}},[e._v("\n                      "+e._s(e.copy_message)+"\n                  ")])],1):e._e()]}}])})],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("h1",[this._v("Result")])])}],!1,null,null,null);t.default=component.exports}}]);