(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-app-islamic-quran-online~31ecd969"],{1276:function(t,a,i){"use strict";var e=i("d784"),s=i("44e7"),n=i("825a"),r=i("1d80"),l=i("4840"),o=i("8aa59"),c=i("50c4"),u=i("14c3"),d=i("9263"),p=i("d039"),f=[].push,h=Math.min,v=4294967295,g=!p((function(){return!RegExp(v,"y")}));e("split",2,(function(t,a,i){var e;return e="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,i){var e=String(r(this)),n=void 0===i?v:i>>>0;if(0===n)return[];if(void 0===t)return[e];if(!s(t))return a.call(e,t,n);var l,o,c,u=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,p+"g");while(l=d.call(g,e)){if(o=g.lastIndex,o>h&&(u.push(e.slice(h,l.index)),l.length>1&&l.index<e.length&&f.apply(u,l.slice(1)),c=l[0].length,h=o,u.length>=n))break;g.lastIndex===l.index&&g.lastIndex++}return h===e.length?!c&&g.test("")||u.push(""):u.push(e.slice(h)),u.length>n?u.slice(0,n):u}:"0".split(void 0,0).length?function(t,i){return void 0===t&&0===i?[]:a.call(this,t,i)}:a,[function(a,i){var s=r(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,s,i):e.call(String(s),a,i)},function(t,s){var r=i(e,t,this,s,e!==a);if(r.done)return r.value;var d=n(t),p=String(this),f=l(d,RegExp),m=d.unicode,x=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),b=new f(g?d:"^(?:"+d.source+")",x),y=void 0===s?v:s>>>0;if(0===y)return[];if(0===p.length)return null===u(b,p)?[p]:[];var _=0,w=0,C=[];while(w<p.length){b.lastIndex=g?w:0;var S,k=u(b,g?p:p.slice(w));if(null===k||(S=h(c(b.lastIndex+(g?0:w)),p.length))===_)w=o(p,w,m);else{if(C.push(p.slice(_,w)),C.length===y)return C;for(var E=1;E<=k.length-1;E++)if(C.push(k[E]),C.length===y)return C;w=_=S}}return C.push(p.slice(_)),C}]}),!g)},"25f0":function(t,a,i){"use strict";var e=i("6eeb"),s=i("825a"),n=i("d039"),r=i("ad6d"),l="toString",o=RegExp.prototype,c=o[l],u=n((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),d=c.name!=l;(u||d)&&e(RegExp.prototype,l,(function(){var t=s(this),a=String(t.source),i=t.flags,e=String(void 0===i&&t instanceof RegExp&&!("flags"in o)?r.call(t):i);return"/"+a+"/"+e}),{unsafe:!0})},"44e7":function(t,a,i){var e=i("861d"),s=i("c6b6"),n=i("b622"),r=n("match");t.exports=function(t){var a;return e(t)&&(void 0!==(a=t[r])?!!a:"RegExp"==s(t))}},"4de4":function(t,a,i){"use strict";var e=i("23e7"),s=i("b727").filter,n=i("1dde"),r=n("filter");e({target:"Array",proto:!0,forced:!r},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"5b8b":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[t.loading?i("div",[t._m(0)]):i("div",[t.showTafsir?i("div",{staticClass:"anim shadow-lg",staticStyle:{width:"100vw",position:"fixed",left:"0",height:"30vh","z-index":"100",background:"black",opacity:"0.3"},style:t.showTafsir?"top:0px;":"top:-30vh;",on:{click:function(a){t.showTafsir=!1}}}):t._e(),t.showTafsir?i("div",{staticClass:"anim shadow-lg",staticStyle:{position:"fixed",left:"0",height:"70vh","z-index":"100",background:"white"},style:t.showTafsir?"bottom:0px;":"bottom:-70vh;"},[i("div",{staticClass:"shadow-md text-justify text-sm p-3"},[i("div",{staticClass:"sm-form float-right "},[i("label",{attrs:{for:"lebar"}},[t._v("Ukuran Ayat : ")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.pilihanLebar,expression:"pilihanLebar"}],staticClass:"form-control",staticStyle:{width:"100px"},on:{change:function(a){var i=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.pilihanLebar=a.target.multiple?i:i[0]}}},t._l(t.lebar,(function(a,e){return i("option",{key:e,domProps:{value:a}},[t._v(t._s(e+1))])})),0)]),i("p",{staticClass:"font-bold text-lg"},[t._v(" Ayat : "+t._s(t.tafsir+1)+" ")]),i("p",{staticClass:"font-bold text-lg"},[t._v(" Tafsir Source : Kemenag ")]),i("hr"),i("div",{staticClass:"text-justify text-lg p-4",staticStyle:{height:"300px",overflow:"scroll"},domProps:{innerHTML:t._s(t.td.tafsir.id)}})])]):t._e(),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-md-10"},[i("div",{staticClass:"col-12 p-3"},[i("p",{staticClass:"text-lg float-right"},[t._v("("),i("span",{staticClass:"font-italic"},[t._v(t._s(t.td.revelation.id))]),t._v(") "),i("br"),t._v(" ayat : "+t._s(t.td.numberOfVerses)+" ")]),t._m(1),i("span",{staticClass:"text-4xl"},[t._v("Surat "+t._s(t.$route.query.nama_surat)+" ")]),i("span",{staticClass:"text-4xl font-italic font-bold",staticStyle:{"font-family":"'Amiri', serif","line-height":"2.0"}},[t._v(t._s(t.td.name.short)+" "),i("br")]),i("p",{staticClass:"text-lg"},[t._v(" Arti nama surat : ("),i("span",{staticClass:"font-italic"},[t._v(t._s(t.td.name.translation.id))]),t._v(") ")])]),i("br"),i("div",{staticClass:"input-group mb-2"},[t._m(2),i("input",{directives:[{name:"model",rawName:"v-model",value:t.cariayat,expression:"cariayat"}],staticClass:"form-control py-0",attrs:{type:"text",id:"pencarian",placeholder:"Cari No Ayat ..."},domProps:{value:t.cariayat},on:{input:function(a){a.target.composing||(t.cariayat=a.target.value)}}})]),t._l(t.ayat,(function(a,e){return i("div",{key:e+"surat",staticClass:"shadow-md rounded-lg p-3 mt-5 cursor-pointer",on:{click:function(a){t.showTafsir=!0,t.tafsir=e}}},[i("div",{staticClass:"row sm:p-3"},[i("div",{staticClass:"col-1 font-bold text-lg"},[t._v(t._s(a.number.inSurah)+".")]),i("div",{staticClass:"col-11 text-right ",class:""+t.pilihanLebar,staticStyle:{"font-family":"'Amiri', serif","line-height":"2.0"}},[i("div",{staticClass:"float-right "},[i("audio",{attrs:{controls:""}},[i("source",{attrs:{src:""+a.audio.secondary[0],type:"audio/mpeg"}}),t._v(" Your browser does not support the audio element. ")])]),i("br"),i("br"),t._v(" "+t._s(a.text.arab))]),i("div",{staticClass:"col-12 p-3"},[i("p",{staticClass:"text-lg",domProps:{innerHTML:t._s(a.translation.id)}})])])])}))],2)])])])},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticStyle:{position:"absolute",top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)"}},[i("div",{staticClass:"animated bounce infinite text-4xl font-bold"},[t._v(" Loading ... ")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"d-block sm:d-none"},[i("br"),i("br"),i("br")])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"input-group-prepend"},[i("div",{staticClass:"input-group-text"},[i("img",{staticClass:"d-inline",staticStyle:{height:"20px",width:"20px"},attrs:{src:"https://upload.egov.balangankab.go.id/svg/pen.svg",alt:""}})])])}],n=(i("1276"),i("ac1f"),i("d3b7"),i("25f0"),i("0d03"),i("4de4"),i("c975"),i("bc3a")),r=i.n(n),l=(window.location.href.toString().split("=")[2],{layout:"app_islamic",data:function(){return{datanya:[],showTafsir:!1,tafsir:{},cariayat:"",loading:!0,lebar:["text-lg","text-xl","text-2xl","text-4xl","text-5xl"],pilihanLebar:"text-4xl"}},watch:{pilihanLebar:function(){this.showTafsir=!1}},computed:{td:function(){var t=this.datanya;return t},ayat:function(){var t=this,a=this.datanya.verses;return a=a.filter((function(a){if(-1!=a.number.inSurah.toString().indexOf(t.cariayat))return a})),a}},methods:{getSurah:function(){var t=this;r.a.get("https://api.quran.sutanlab.id/surah/".concat(this.$route.query.surat)).then((function(a){t.datanya=a.data.data,console.log(a.data.data),t.loading=!1,t.$forceUpdate()}))}},mounted:function(){this.getSurah()},metaInfo:{title:"Baca Al Qur'an",link:[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Amiri&display=swap"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"},{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"}]}}),o=l,c=i("2877"),u=Object(c["a"])(o,e,s,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=page-app-islamic-quran-online~31ecd969.10a4042e.js.map