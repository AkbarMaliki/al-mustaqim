(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-app-islamic-jadwalsholat~6de07dbe"],{d7ba:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("vue-particles",{staticStyle:{background:"#24968b",height:"100vh",position:"fixed",width:"100vw"},attrs:{color:"#fff"}}),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-8 p-3"},[s("div",{staticClass:"shadow rounded-lg p-5 bg-white"},[s("p",{staticClass:"font-bold"},[t._v("JADWAL SHOLAT")]),s("v-select",{attrs:{options:t.lokasi,label:"lokasi",reduce:function(t){return t.id}},model:{value:t.lokasinya,callback:function(a){t.lokasinya=a},expression:"lokasinya"}}),s("hr"),t.datanya?s("div",[s("p",{staticClass:"text-center font-bold"},[t._v(" "+t._s(t.datanya.lokasi)+", "+t._s(t.datanya.daerah)+" ")]),t._l(t.td,(function(a,i){return s("div",{key:i+"jadwal"},[s("div",{staticClass:"anim hover:bg-yellow-400 d-flex justify-content-center align-items-center shadow rounded-lg",staticStyle:{height:"100px"}},[s("div",{staticClass:"font-bold uppercase text-2xl"},[t._v(" "+t._s(t.cekantara)+" "+t._s(a[t.cekantara])+" ")])]),s("p",{staticClass:"p-2 font-bold"},[t._v(" "+t._s(a.tanggal)+" ")]),s("tr",{staticClass:"rounded-lg anim hover:bg-blue-400 shadow p-2"},[s("td",{staticClass:"p-2 capitalize font-bold",staticStyle:{width:"100vw"}},[t._v("imsak")]),s("td",{staticClass:"pl-1 pr-1"},[t._v(":")]),s("td",{staticClass:"p-2"},[t._v(t._s(a.imsak))])]),s("tr",{staticClass:"rounded-lg anim hover:bg-blue-400 shadow p-2"},[s("td",{staticClass:"p-2 capitalize font-bold",staticStyle:{width:"100vw"}},[t._v("subuh")]),s("td",{staticClass:"pl-1 pr-1"},[t._v(":")]),s("td",{staticClass:"p-2"},[t._v(t._s(a.subuh))])]),s("tr",{staticClass:"rounded-lg anim hover:bg-blue-400 shadow p-2"},[s("td",{staticClass:"p-2 capitalize font-bold",staticStyle:{width:"100vw"}},[t._v("terbit")]),s("td",{staticClass:"pl-1 pr-1"},[t._v(":")]),s("td",{staticClass:"p-2"},[t._v(t._s(a.terbit))])]),s("tr",{staticClass:"rounded-lg anim hover:bg-blue-400 shadow p-2"},[s("td",{staticClass:"p-2 capitalize font-bold",staticStyle:{width:"100vw"}},[t._v("dhuha")]),s("td",{staticClass:"pl-1 pr-1"},[t._v(":")]),s("td",{staticClass:"p-2"},[t._v(t._s(a.dhuha))])]),s("tr",{staticClass:"rounded-lg anim hover:bg-blue-400 shadow p-2"},[s("td",{staticClass:"p-2 capitalize font-bold",staticStyle:{width:"100vw"}},[t._v("dzuhur")]),s("td",{staticClass:"pl-1 pr-1"},[t._v(":")]),s("td",{staticClass:"p-2"},[t._v(t._s(a.dzuhur))])]),s("tr",{staticClass:"rounded-lg anim hover:bg-blue-400 shadow p-2"},[s("td",{staticClass:"p-2 capitalize font-bold",staticStyle:{width:"100vw"}},[t._v("ashar")]),s("td",{staticClass:"pl-1 pr-1"},[t._v(":")]),s("td",{staticClass:"p-2"},[t._v(t._s(a.ashar))])]),s("tr",{staticClass:"rounded-lg anim hover:bg-blue-400 shadow p-2"},[s("td",{staticClass:"p-2 capitalize font-bold",staticStyle:{width:"100vw"}},[t._v("maghrib")]),s("td",{staticClass:"pl-1 pr-1"},[t._v(":")]),s("td",{staticClass:"p-2"},[t._v(t._s(a.maghrib))])]),s("tr",{staticClass:"rounded-lg anim hover:bg-blue-400 shadow p-2"},[s("td",{staticClass:"p-2 capitalize font-bold",staticStyle:{width:"100vw"}},[t._v("isya")]),s("td",{staticClass:"pl-1 pr-1"},[t._v(":")]),s("td",{staticClass:"p-2"},[t._v(t._s(a.isya))])])])}))],2):t._e()],1)])])],1)},l=[],e=(s("0d03"),s("e25e"),s("1276"),s("ac1f"),s("d3b7"),s("25f0"),s("4de4"),s("99af"),s("bc3a")),n=s.n(e),o=s("340b"),d=s.n(o),r=s("7dbf"),c={data:function(){return{datanya:[],jadwal:[],vdata:{},lokasi:[],lokasinya:"",now:"",jam:"",cekantara:"subuh"}},mounted:function(){this.getData(),localStorage.getItem("lokasinya")?this.lokasinya=localStorage.getItem("lokasinya"):this.lokasinya=this.$store.state.lokasinya,console.log("this.lokasi",this.lokasinya),this.$forceUpdate();var t=new Date;this.jam=parseInt(t.toString().split(" ")[4].split(":")[0]),this.lokasi=r},watch:{lokasinya:function(){this.getData()}},computed:{td:function(){var t=this,a=this.jadwal;a=a.filter((function(a){if(a.date==t.now)return a}));var s="";a.filter((function(a){return console.log(t.jam,parseInt(a.maghrib.split(":")[0])),console.log(t.jam,parseInt(a.isya.split(":")[0])),console.log(t.jam>parseInt(a.maghrib.split(":")[0])),console.log(t.jam<parseInt(a.isya.split(":")[0])),t.jam>=parseInt(a.subuh.split(":")[0])&&t.jam<=parseInt(a.dzuhur.split(":")[0])?(s="dzuhur",a):t.jam>=parseInt(a.dzuhur.split(":")[0])&&t.jam<=parseInt(a.ashar.split(":")[0])?(s="ashar",a):t.jam>=parseInt(a.ashar.split(":")[0])&&t.jam<=parseInt(a.maghrib.split(":")[0])?(s="maghrib",a):t.jam>=parseInt(a.maghrib.split(":")[0])&&t.jam<=parseInt(a.isya.split(":")[0])?(s="isya",a):void(s="subuh")}));return this.cekantara=s,console.log(s),this.$forceUpdate(),a}},methods:{getData:function(){var t=this,a=new Date;this.vdata.bulan=this.getTgl(a.toString().split(" ")[1]),this.vdata.tahun=a.toString().split(" ")[3],this.now=d.a.format(new Date,"YYYY-MM-DD"),console.log(this.vdata.bulan),n.a.get("https://api.myquran.com/v1/sholat/jadwal/".concat(this.lokasinya,"/").concat(this.vdata.tahun,"/").concat(this.vdata.bulan)).then((function(a){t.datanya=a.data.data,t.jadwal=a.data.data.jadwal,t.$forceUpdate()}))},getLokasi:function(){var t=this;n.a.get("https://api.myquran.com/v1/sholat/kota/semua").then((function(a){t.lokasi=a.data}))},getTgl:function(t){var a="";return"Jan"==t?a=1:"Feb"==t?a=2:"Mar"==t?a=3:"Apr"==t?a=4:"May"==t?a=5:"Jun"==t?a=6:"Jul"==t?a=7:"Aug"==t?a=8:"Sep"==t?a=9:"Oct"==t?a=10:"Nov"==t?a=11:"Dec"==t&&(a=12),a}},layout:"app_islamic"},p=c,h=s("2877"),u=Object(h["a"])(p,i,l,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=page-app-islamic-jadwalsholat~6de07dbe.40251714.js.map