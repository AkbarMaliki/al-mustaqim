(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-app-islamic-setting~31ecd969"],{"4de4":function(t,e,a){"use strict";var o=a("23e7"),n=a("b727").filter,i=a("1dde"),s=i("filter");o({target:"Array",proto:!0,forced:!s},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"7a14":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-particles",{staticStyle:{background:"#24968b",height:"100vh",position:"fixed",width:"100vw",top:"0"},attrs:{color:"#fff"}}),a("div",{staticClass:"row justify-content-center mt-5"},[a("div",{staticClass:"col-md-6 "},[t.lokasi.length>0?a("div",{staticClass:"bg-white p-4 shadow rounded-lg"},[t.$store.state.users?a("p",{staticClass:"font-semibold text-center p-4"},[t._v(" Welcome, "+t._s(t.$store.state.users.displayName)+" ")]):a("p",{staticClass:"font-semibold text-center p-4"},[t._v(" Tidak ada Akun yang terkait! ")]),a("hr",{staticClass:"mt-3 mb-3"}),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-sm btn-dark mr-4 ",attrs:{type:"button"},on:{click:function(e){return t.$router.push("/")}}},[a("span",{staticClass:"typcn typcn-arrow-left"}),t._v(" Back")]),a("button",{staticClass:"btn btn-sm btn-danger ",attrs:{type:"button"},on:{click:t.logout}},[a("span",{staticClass:"typcn typcn-key"}),t._v(" Logout")])]),a("hr")]):a("div",[t._m(0)])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center align-items-center ",staticStyle:{height:"100px"}},[a("div",{staticStyle:{width:"100%"}},[a("p",{staticClass:"text-center animated bounce infinite text-lg font-semibold text-white"},[t._v(" Loading ... ")])])])}],i=(a("99af"),a("4de4"),a("c975"),a("bc3a")),s=a.n(i),r={layout:"app_islamic",watch:{lokasinya:function(){this.$store.state.lokasinya=this.lokasinya,localStorage.setItem("lokasinya",this.lokasinya)}},methods:{logout:function(){this.$store.dispatch("logout")},getLokasi:function(){var t=this;s.a.get("https://api.myquran.com/v1/sholat/kota/semua").then((function(e){t.lokasi=e.data,t.$forceUpdate()}))}},mounted:function(){var t=this;function e(e){var a=e.coords.latitude,o=e.coords.longitude;console.log(a,o),s.a.get("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=".concat(a,"&longitude=").concat(o,"&localityLanguage=en")).then((function(e){var a=t.lokasi.filter((function(t){return-1!=t.lokasi.toLowerCase().indexOf(e.data.locality.toLowerCase())}));t.lokasinya=a.length>0?a[0].id:"2115"}))}localStorage.getItem("lokasinya")?this.lokasinya=localStorage.getItem("lokasinya"):this.lokasinya=this.$store.state.lokasinya,this.$forceUpdate(),navigator.geolocation.getCurrentPosition(e,(function(){}))},data:function(){return{hello:"helllo",lokasinya:"2115",lokasi:this.$store.state.lokasi}}},c=r,l=a("2877"),d=Object(l["a"])(c,o,n,!1,null,null,null);e["default"]=d.exports},"99af":function(t,e,a){"use strict";var o=a("23e7"),n=a("d039"),i=a("e8b5"),s=a("861d"),r=a("7b0b"),c=a("50c4"),l=a("8418"),d=a("65f0"),u=a("1dde"),f=a("b622"),h=a("2d00"),p=f("isConcatSpreadable"),g=9007199254740991,y="Maximum allowed index exceeded",v=h>=51||!n((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),k=u("concat"),b=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:i(t)},m=!v||!k;o({target:"Array",proto:!0,forced:m},{concat:function(t){var e,a,o,n,i,s=r(this),u=d(s,0),f=0;for(e=-1,o=arguments.length;e<o;e++)if(i=-1===e?s:arguments[e],b(i)){if(n=c(i.length),f+n>g)throw TypeError(y);for(a=0;a<n;a++,f++)a in i&&l(u,f,i[a])}else{if(f>=g)throw TypeError(y);l(u,f++,i)}return u.length=f,u}})}}]);
//# sourceMappingURL=page-app-islamic-setting~31ecd969.0e956676.js.map