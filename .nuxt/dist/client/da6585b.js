(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1222:function(t,e,n){var content=n(1225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(114).default)("1b7833da",content,!0,{sourceMap:!1})},1223:function(t,e,n){var content=n(1227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(114).default)("1930a9a0",content,!0,{sourceMap:!1})},1224:function(t,e,n){"use strict";n(1222)},1225:function(t,e,n){(e=n(113)(!1)).push([t.i,'.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:block;font-weight:300;font-size:40px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=e},1226:function(t,e,n){"use strict";n(1223)},1227:function(t,e,n){(e=n(113)(!1)).push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}",""]),t.exports=e},1228:function(t,e,n){"use strict";n.r(e);n(1226);var l=n(111),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),this._v(" "),e("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),this._v(" "),e("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},1229:function(t,e,n){"use strict";n.r(e);var l=n(9),o=n(663),main=n(662),c=l.default.extend({data:function(){return{value:0,todayData:[],addDisabled:!1}},filters:{status:function(t){return t<=0?"今天又是一个新的开始哦！":t<4?"加油⛽️，健康饮水已经离你不远了！":t<8?"目标接近，再加把劲！💪！":t<=10?"目标已达成！🎉🎉🎉🎉🎉🎉":"不能再多了！看来你真的很渴！😱"}},mounted:function(){var t=o.default.getTodayData();this.todayData=t,this.value=t.length},destroyed:function(){null},methods:{onChange:function(t){console.log("changed",t)},onPlus:function(){var t=this;o.default.add(),this.addDisabled=!0,Object(main.setTimeout)((function(){t.addDisabled=!1}),1e4);var e=o.default.getTodayData();this.todayData=e,this.value=e.length},onRemove:function(time){o.default.remove(time);var t=o.default.getTodayData();this.todayData=t,this.value=t.length},onSubtract:function(){this.value<=0||(this.value-=1)}}}),r=(n(1224),n(111)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("Logo"),t._v(" "),n("h2",{staticClass:"title"},[t._v("今天你喝水了吗？")]),t._v(" "),n("div",[n("a-input-number",{attrs:{id:"inputNumber",min:0,disabled:""},on:{change:t.onChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._v(" "),n("span",{staticStyle:{color:"red"}},[t._v(t._s(t._f("status")(t.value)))])],1),t._v(" "),n("div",{staticStyle:{"margin-top":"10px"}},[n("a-button",{staticStyle:{"margin-left":"5px"},attrs:{type:"primary",disabled:t.value>=12||t.addDisabled},on:{click:t.onPlus}},[t._v("喝了+1")])],1),t._v(" "),n("a-divider",[t._v("记录")]),t._v(" "),n("ol",{staticStyle:{padding:"0"}},t._l(t.todayData,(function(time,e){return n("li",{key:e,staticStyle:{display:"flex","justify-content":"space-around",margin:"10px"}},[n("span",[t._v(t._s(e+1)+".")]),t._v(" "),n("span",[t._v(t._s(time))]),t._v(" "),n("a",{on:{click:function(e){return t.onRemove(time)}}},[n("a-icon",{attrs:{type:"minus-circle"}})],1)])})),0)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Logo:n(1228).default})}}]);