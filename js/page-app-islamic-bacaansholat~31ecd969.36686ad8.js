(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-app-islamic-bacaansholat~31ecd969"],{"25f0":function(t,a,e){"use strict";var i=e("6eeb"),s=e("825a"),n=e("d039"),r=e("ad6d"),l="toString",c=RegExp.prototype,o=c[l],p=n((function(){return"/a/b"!=o.call({source:"a",flags:"b"})})),u=o.name!=l;(p||u)&&i(RegExp.prototype,l,(function(){var t=s(this),a=String(t.source),e=t.flags,i=String(void 0===e&&t instanceof RegExp&&!("flags"in c)?r.call(t):e);return"/"+a+"/"+i}),{unsafe:!0})},"4de4":function(t,a,e){"use strict";var i=e("23e7"),s=e("b727").filter,n=e("1dde"),r=n("filter");i({target:"Array",proto:!0,forced:!r},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},d1dc:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container"},[t.td.length>0?e("div",{staticClass:"row justify-content-center sm:p-4"},[e("div",{staticClass:"col-12 "},[e("br"),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("div",{staticClass:"input-group mb-2"},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cari,expression:"cari"}],staticClass:"form-control py-0",attrs:{type:"text",id:"pencarian",placeholder:"Cari Bacaan Sholat ..."},domProps:{value:t.cari},on:{input:function(a){a.target.composing||(t.cari=a.target.value)}}})])]),e("div",{staticClass:"offset-sm-3 col-sm-3 pl-3 pr-3"},[e("div",{staticClass:" bg-white rounded-lg p-3"},[e("span",[t._v("Ukuran huruf : ")]),e("div",{staticClass:"sm-form float-right"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.pilihanLebar,expression:"pilihanLebar"}],staticClass:"form-control text-sm",staticStyle:{height:"34px",width:"100px"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.pilihanLebar=a.target.multiple?e:e[0]}}},t._l(t.lebar,(function(a,i){return e("option",{key:i,domProps:{value:a}},[t._v(t._s(i+1))])})),0)])])])]),e("p",{staticClass:"p-3 text-center text-2xl font-bold font-italic"},[t._v(" BACAAN SHOLAT ")])]),t._l(t.td,(function(a,i){return e("div",{key:i+"asmaulhusna",staticClass:"col-12 col-sm-12 mt-3 cursor-pointer p-2",on:{click:function(e){t.pilih=a,t.show=!t.show}}},[e("div",{staticClass:"rounded-lg shadow bg-white p-2 sm:p-5 "},[e("p",{staticClass:"pb-5 text-2xl font-italic"},[t._v(" "+t._s(a.name)+" ")]),e("p",{staticClass:"pb-3 text-center ",class:""+t.pilihanLebar,staticStyle:{"font-family":"'Amiri', serif","line-height":"2.0"}},[t._v(" "+t._s(a.arabic)+" ")]),e("p",{staticClass:"text-sm font-italic text-center mt-2"},[t._v(" "+t._s(a.latin)+" ")]),e("p",{staticClass:"pt-2 text-sm"},[t._v(" "+t._s(a.terjemahan)+" ")])])])})),e("div",{staticClass:"col-12"})],2):e("div",[t._m(1)])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text"},[e("span",{staticClass:"typcn typcn-pen"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex justify-content-center align-items-center ",staticStyle:{height:"90vh"}},[e("div",{staticStyle:{width:"100%"}},[e("p",{staticClass:"text-center animated bounce infinite text-lg font-semibold"},[t._v(" Loading ... ")])])])}],n=(e("4de4"),e("c975"),e("d3b7"),e("25f0"),e("0d03"),e("b0c0"),e("bc3a")),r=e.n(n),l={layout:"app_islamic",computed:{td:function(){var t=this,a=this.datanya;return a=a.filter((function(a){if(-1!=a.name.toString().toLowerCase().indexOf(t.cari))return a})),a}},data:function(){return{cari:"",datanya:[],detail:{},show:!1,pilih:{},lebar:["text-lg","text-xl","text-2xl","text-4xl","text-5xl"],pilihanLebar:"text-2xl"}},methods:{getData:function(){var t=this;r.a.get("https://islamic-api-zhirrr.vercel.app/api/bacaanshalat").then((function(a){t.datanya=a.data,console.log(a.data),t.$forceUpdate()}))}},mounted:function(){this.getData()},metaInfo:{title:"Baca Al Qur'an",link:[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Amiri&display=swap"}]}},c=l,o=e("2877"),p=Object(o["a"])(c,i,s,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=page-app-islamic-bacaansholat~31ecd969.36686ad8.js.map