(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],u=0,v=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&v.push(s[o][0]),s[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(v.length)v.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),s=a.n(n);s.a},"222d":function(t,e,a){},"2a95":function(t,e,a){t.exports=a.p+"img/rect_07.8f05da22.jpg"},"338d":function(t,e,a){"use strict";var n=a("d4b6"),s=a.n(n);s.a},"3e8b":function(t,e,a){t.exports=a.p+"img/vert_01.d7de1186.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{staticClass:"font-title",staticStyle:{"background-color":"white"},attrs:{app:"",flat:"",prominent:"","shrink-on-scroll":""}},[a("img",{staticClass:"mv-auto",staticStyle:{height:"90%"},attrs:{src:t.logoImage,title:"취운화 로고;마름모",alt:"취운화"}}),a("v-spacer"),a("v-toolbar-items",[a("v-tabs",{attrs:{color:"primary"}},[a("v-tab",{on:{click:function(e){return t.$router.push("/")}}},[t._v("취운화")]),a("v-tab",{on:{click:function(e){return t.$router.push("/inquiry")}}},[t._v("주문/문의")]),a("v-tab",{on:{click:function(e){return t.$router.push("/class")}}},[a("v-badge",{attrs:{color:"primary",icon:"mdi-exclamation",small:""}},[t._v("수업")])],1),a("div",{staticClass:"d-none d-sm-inline-block"},t._l(t.social,(function(e){return a("v-btn",{key:"gnb-intab-sns."+e.channel,attrs:{href:e.href,title:e.channel,alt:"ch.channel 링크",icon:"",color:"accent",target:"_blank"}},[a("v-icon",[t._v(t._s(e.icon))])],1)})),1),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({staticClass:"d-inline-block d-sm-none",attrs:{icon:"",color:"accent"}},n),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",{attrs:{dense:""}},t._l(t.social,(function(e){return a("v-list-item",{key:"gnb-menu-sns."+e.channel,attrs:{href:e.href,title:e.channel,alt:"ch.channel 링크",icon:"",color:"accent",target:"_blank"}},[a("v-list-item-avatar",{attrs:{xs:""}},[a("v-icon",{attrs:{color:"primary"}},[t._v(t._s(e.icon))])],1)],1)})),1)],1)],1)],1)],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),a("v-footer",{staticStyle:{"background-color":"white","font-size":"9.5pt"},attrs:{app:"",flat:"",absolute:""}},[a("v-row",[a("v-col",{staticClass:"grey--text"},[a("p",[t._v(" 취운화; Emerald Cloud Flower"),a("br"),t._v(" 사업자 등록번호 (대표 김아름) ")]),a("p",[t._v(" ©취운화 All Rights reserved ")])])],1)],1)],1)},r=[],o=(a("4de4"),a("9b19")),i=a.n(o),c=(a("99af"),a("d81d"),a("8c4f")),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("v-card",{attrs:{elevation:"1"}},[a("v-item-group",[a("v-row",{staticClass:"mx-auto mx-2"},[t._l(t.images,(function(e,n){return[a("v-col",{key:"gallery-img."+n,attrs:{cols:"12",sm:"6",md:"4",lg:"3",xl:"2"}},[a("v-img",{attrs:{src:e.asset,title:e.desc},on:{mouseover:function(a){t.hover_image=e},click:function(a){t.selected_image=e}}})],1)]}))],2)],1),a("v-card-text",[a("v-divider"),a("v-expansion-panels",{attrs:{mandatory:"",accordion:"",flat:"",multiple:""}},t._l(t.tags,(function(e){return a("v-expansion-panel",{key:"exp-tag."+e.grp,attrs:{flat:""}},[a("v-expansion-panel-header",[a("span",[t._v(" "+t._s(e.grp)+" ")]),e.selected?a("span",{attrs:{align:"center",justify:"center"}},[a("v-chip",{staticStyle:{"margin-left":"12px","max-width":"20vw"},attrs:{color:"secondary",title:e.selected.en},on:{click:function(a){return a.stopPropagation(),t.toggle_tag(e,e.selected)}}},[t._v(" "+t._s(e.selected.ko)+" ")])],1):t._e()]),a("v-expansion-panel-content",[a("v-chip-group",t._l(e.tags,(function(n){return a("v-chip",{key:"exp-tag."+e.grp+"-"+n.ko,attrs:{color:e.selected==n?"secondary":"default",title:n.en},on:{click:function(a){return t.toggle_tag(e,n)}}},[t._v(" "+t._s(n.ko)+" ")])})),1)],1)],1)})),1)],1)],1)],1)],1),a("v-row",[a("v-col",[a("v-card",{attrs:{elevation:"1"}},[a("v-card-text",[a("v-row",{staticClass:"mx-auto mx-2"},[a("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[a("img",{attrs:{src:t.logo,width:"69%"}})]),a("v-col",{attrs:{cols:"12",md:"6",lg:"8"}},[a("h2",{staticClass:"font-title",attrs:{color:"accent"}},[t._v("취운화는 말이지")]),a("div",[t._v(" 취운화는 어쩌구저쩌구 ")])])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticClass:"font-title",attrs:{text:"",outlined:"",large:"",color:"primary"},on:{click:function(e){return t.$router.push("/inquiry")}}},[a("v-icon",[t._v("mdi-chat")]),t._v(" 문의하러 가기")],1)],1)],1)],1)],1),t.show_image_dialog?a("v-dialog",{model:{value:t.show_image_dialog,callback:function(e){t.show_image_dialog=e},expression:"show_image_dialog"}},[a("v-card",{staticStyle:{width:"90vw","max-width":"1200px","max-height":"95vh","overflow-x":"hidden"}},[a("v-img",{staticStyle:{width:"100%","max-height":"75%"},attrs:{src:t.selected_image.asset,contain:""}}),a("v-card-text",{attrs:{dark:""}},[t._v(" "+t._s(t.selected_image.desc)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:"",outlined:"",color:"primary"},on:{click:function(e){t.selected_image=null}}},[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-close-circle")]),a("span",{staticClass:"d-none d-md-inline-flex"},[t._v("닫기")])],1)],1)],1)],1):t._e()],1)},d=[],u=a("e5d5"),v=a.n(u),p=a("a286"),g=a.n(p),m=a("de27"),f=a.n(m),_=a("b940"),h=a.n(_),b=a("9d6c"),k=a.n(b),w=a("a968"),x=a.n(w),y=a("2a95"),j=a.n(y),S=a("c935"),I=a.n(S),O=a("82fb"),q=a.n(O),C=a("3e8b"),P=a.n(C),T={ht:{ko:"묶는 꽃",en:"Hand-tied"},bx:{ko:"담는 꽃",en:"Basket/Box"},vs:{ko:"꽂는 꽃",en:"Vase/Cnterpieces"},sp:{ko:"공간 꽃",en:"Space decoration"},wd:{ko:"결혼 꽃",en:"Wedding"}},$=["ht","bx","vs","sp","wd"],E={tags:$.filter((function(t){return null!=T[t]})).map((function(t){return Object.assign({code:t},T[t])})),images:[{asset:v.a,tags:["ht","wd"],desc:"Lorem"},{asset:g.a,tags:["bx"],desc:"Ipsum"},{asset:f.a,tags:["vs"],desc:"Ipsum"},{asset:h.a,tags:["sp"],desc:"Ipsum"},{asset:k.a,tags:["wd","wd"],desc:"Ipsum"},{asset:x.a,tags:["ht"],desc:"Ipsum"},{asset:j.a,tags:["ht","wd"],desc:"Ipsum"},{asset:I.a,tags:["bx","wd"],desc:"Ipsum"},{asset:q.a,tags:["vs"],desc:"Ipsum"},{asset:P.a,tags:["sp"],desc:"Ipsum"},{asset:v.a,tags:["wd","wd"],desc:"Ipsum"},{asset:g.a,tags:["ht"],desc:"Ipsum"},{asset:f.a,tags:["bx","wd"],desc:"Ipsum"},{asset:h.a,tags:["vs"],desc:"Ipsum"},{asset:k.a,tags:["sp"],desc:"Ipsum"},{asset:x.a,tags:["ht","sp"],desc:"Ipsum"},{asset:j.a,tags:["bx","wd"],desc:"Ipsum"},{asset:I.a,tags:["vs","sp"],desc:"Ipsum"},{asset:q.a,tags:["sp","wd"],desc:"Ipsum"},{asset:P.a,tags:["wd"],desc:"Ipsum"}]},D=[{grp:"형태",tags:[{ko:"묶은 꽃",en:"Hand-tied"},{ko:"꽂은 꽃",en:"Vase/Pieces"},{ko:"담은 꽃",en:"Box/Basket"},{ko:"공간 꽃",en:"Space Deco"}]},{grp:"시즌",tags:[{ko:"봄",en:"Spring"},{ko:"여름",en:"Summer"},{ko:"가을",en:"Fall"},{ko:"겨울",en:"Winter"}]},{grp:"테마",tags:[{ko:"결혼",en:"Wedding"},{ko:"시작",en:"Beginning"},{ko:"고백",en:"Propose"},{ko:"기념",en:"Celebrate"},{ko:"선물",en:"Gift"},{ko:"축하",en:"Congraturate"},{ko:"감사",en:"Thanks"},{ko:"위로",en:"Encourage"},{ko:"기원",en:"Wish"}]},{grp:"받는이",tags:[{ko:"연인",en:"Love"},{ko:"부모",en:"Parents"},{ko:"가족",en:"Family"},{ko:"친지",en:"Relative"},{ko:"친구",en:"Friend"},{ko:"선생님",en:"Teacher"},{ko:"동료",en:"Colleague"}]}],F={path:"/",name:"index",computed:{show_image_dialog:{get:function(){return null!=this.selected_image},set:function(t){t||(this.selected_image=null)}}},methods:{toggle_tag:function(t,e){t.selected==e?t.selected=null:t.selected=e,this.tags=Object.assign({},this.tags)}},data:function(){return{selected_tags:{},selected_image:null,hover_image:null,tags:D,images:E.images,logo:i.a}}},A=F,B=(a("d44d"),a("2877")),K=Object(B["a"])(A,l,d,!1,null,null,null),R=K.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("screen-template",{scopedSlots:t._u([{key:"subpanel",fn:function(){return[a("v-list",{staticClass:"d-none d-md-block",attrs:{flat:"",outlined:"","active-class":"active"}},[a("v-list-item",{on:{click:function(e){e.stopPropagation(),t.tag_selected=!1}}},[a("v-list-item-title",[t._v("모든 꽃")])],1),a("v-divider"),t._l(t.tags,(function(e){return a("v-list-item",{key:"tag-list."+e.code,attrs:{selectable:"",title:e.text},on:{click:function(a){a.stopPropagation(),t.tag_selected=e}}},[a("v-list-item-title",[t.tag_selected!=e?[t._v(t._s(e.ko))]:[t._v(t._s(e.en))]],2)],1)}))],2)]},proxy:!0},{key:"mainpanel",fn:function(){return[a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[a("v-btn",t._g({directives:[{name:"show",rawName:"v-show",value:!t.show_dialog,expression:"!show_dialog"}],staticClass:"d-inline d-md-none",staticStyle:{position:"fixed",right:"32px",bottom:"32px","z-index":"980"},attrs:{fab:"",dark:"",color:"primary"}},n),[a("v-icon",[t._v("mdi-filter")])],1)]}}])},[a("v-list",[a("v-list-item",{attrs:{dense:""},on:{click:function(e){e.stopPropagation(),t.tag_selected=null}}},[a("v-list-item-title",[t._v("모든 꽃")]),a("v-list-item-subtitle",[t._v("Show All")])],1),a("v-divider"),t._l(t.tags,(function(e){return a("v-list-item",{key:"tag-list.menu."+e.code,attrs:{dense:""},on:{click:function(a){t.tag_selected=e}}},[a("v-list-item-title",[t._v(t._s(e.ko))]),a("v-list-item-subtitle",[t._v(t._s(e.en))])],1)}))],2)],1),a("v-item-group",[a("v-row",t._l(t.images,(function(e,n){return a("v-col",{directives:[{name:"show",rawName:"v-show",value:!t.tag_selected||e.tags.includes(t.tag_selected.code),expression:"!tag_selected || img.tags.includes(tag_selected.code)"}],key:"gallery-img."+n,staticStyle:{width:"100%",overflow:"hidden"},attrs:{cols:"2",md:"3",sm:"6"}},[a("v-item",[a("v-img",{attrs:{src:e.asset,title:e.desc},on:{click:function(a){a.stopPropagation(),t.img_selected=e}}})],1)],1)})),1)],1),a("v-dialog",{staticClass:"stretch",model:{value:t.show_dialog,callback:function(e){t.show_dialog=e},expression:"show_dialog"}},[t.show_dialog?a("v-card",{staticStyle:{"z-index":"999"}},[a("div",{attrs:{align:"center",justify:"center"}},[a("img",{staticStyle:{"max-height":"75vh"},attrs:{src:t.img_selected.asset}})]),a("v-card-text",[t._v(t._s(t.img_selected.desc))]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(e){t.img_selected=null}}},[t._v("OK")])],1)],1):t._e()],1)]},proxy:!0}])})},W=[],Y={path:"flower",name:"flower",routeTitle:"꽃",watch:{show_dialog:function(){window.console.log(this.img_selected)}},computed:{show_dialog:{get:function(){return null!=this.img_selected},set:function(t){if(!t)return this.img_selected=null}}},data:function(){return Object.assign({tag_selected:null,img_selected:null,tags:[],images:[]},E)}},z=Y,L=(a("338d"),Object(B["a"])(z,H,W,!1,null,null,null)),M=L.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("screen-template",[a("v-card",[a("div",{attrs:{align:"center",justify:"center"}},[a("img",{attrs:{src:"/logo.round.png"}})]),a("v-card-text",[t._v(" 취운화의 주문은 카카오 채널에서 ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{target:"_blank",href:"https://pf.kakao.com/_KYqDT/friend"}},[t._v("채널 추가")]),a("v-spacer"),a("v-btn",{attrs:{target:"_blank",href:"https://pf.kakao.com/_KYqDT/chat"}},[t._v("주문 상담")]),a("v-spacer")],1)],1)],1)},Q=[],V={path:"order",name:"order",routeTitle:"주문",data:function(){return{}}},G=V,J=Object(B["a"])(G,N,Q,!1,null,null,null),U=J.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("v-card",{attrs:{elevation:"1"}},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v("무슨무슨 수업")]),a("v-spacer"),a("v-toolbar-items",[a("v-icon",[t._v("mdi-calendar")]),a("v-btn",{attrs:{text:"",readonly:""}},[t._v("신청 기간 2020-09-10 ~ 10-31")])],1)],1),a("v-card-text",[a("iframe",{staticStyle:{"min-height":"65vh"},attrs:{src:"https://docs.google.com/forms/d/e/1FAIpQLSdICDW7Fx28Zp0PzDeNVObgOBQwUHbdHYhgHIdybLS7G_jQ9A/viewform?embedded=true",width:"100%",frameborder:"0",marginheight:"0",marginwidth:"0"}},[t._v(" 양식을 불러오고 있습니다... ")])])],1)],1)],1)],1)},X=[],tt={path:"class",name:"class",routeTitle:"수업",data:function(){return{}}},et=tt,at=Object(B["a"])(et,Z,X,!1,null,null,null),nt=at.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",md:"6",lg:"4"}},[a("v-card",{attrs:{elevation:"1"}},[a("v-toolbar",{attrs:{dark:"",flat:"",color:"secondary"}},[a("v-toolbar-title",[t._v("취운화 연락처 / Contacts")]),a("v-spacer"),a("v-toolbar-items",[a("v-icon",[t._v("mdi-phone")])],1)],1),a("v-card-text",[a("v-list",[a("v-subheader",[t._v("채널 취운화 구독하세요")]),t._l(t.socials,(function(e){return a("v-list-item",{key:"subs-channel."+e.channel,attrs:{href:e.href,color:"primary",title:e.channel}},[a("v-list-item-avatar",[a("v-icon",{attrs:{color:"secondary"}},[t._v(t._s(e.icon))])],1),a("v-list-item-title",[t._v(t._s(e.channel))])],1)}))],2),a("v-divider"),a("v-subheader",[t._v("지금 바로 주문/문의 주세요")]),a("v-list",[a("v-list-item",{attrs:{title:"카카오톡 채널 문의",target:"_blank",href:"https://pf.kakao.com/_KYqDT/chat"}},[a("v-list-item-avatar",[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-chat")])],1),a("v-list-item-title",[t._v("카카오톡 채널 문의")])],1)],1)],1)],1)],1),a("v-col",{attrs:{cols:"12",md:"6",lg:"8"}},[a("v-card",{attrs:{elevation:"1"}},[a("v-toolbar",{attrs:{dark:"",flat:"",color:"secondary"}},[a("v-toolbar-title",[t._v("주문 상담 / Orders")]),a("v-spacer"),a("v-toolbar-items",[a("v-icon",[t._v("mdi-go-kart")])],1)],1),a("v-card-text",[a("v-tabs",{attrs:{vertical:""}},[a("v-tab",[t._v("자주 묻는 질문")]),a("v-divider"),a("v-tab",[t._v("주문 팁")]),a("v-tab",[t._v("배송 팁")]),a("v-tab",[t._v("받으신 후")]),a("v-tab-item",[a("v-expansion-panels",{attrs:{popout:"",flat:"",multiple:""}},t._l(t.faq,(function(e,n){return a("v-expansion-panel",{key:"inquiry.faq-"+n},[a("v-expansion-panel-header",[t._v(t._s(e.q))]),a("v-expansion-panel-content",{attrs:{align:"left"}},t._l(e.a.split(/[\r\n]/),(function(e,s){return a("p",{key:"inquiry.faq-"+n+":"+s},[t._v(t._s(e))])})),0)],1)})),1)],1),a("v-tab-item",[t._v("가이드 요약 전체")]),a("v-tab-item",[t._v("주문 가이드")]),a("v-tab-item",[t._v("배송 가이드")]),a("v-tab-item",[t._v("사후관리 가이드")])],1)],1)],1)],1)],1)],1)},rt=[],ot=a("cf05"),it=a.n(ot),ct=[{channel:"Instagram",href:"https://www.instagram.com/emerald_cloud_flower/",icon:"mdi-instagram"},{channel:"Twitter",href:"https://twitter.com/EmeraldCloud_F",icon:"mdi-twitter"},{channel:"Kakao",href:"https://pf.kakao.com/_KYqDT",icon:"mdi-chat"}],lt=[{q:"주문하고 나면 언제쯤 받아 볼 수 있나요?",a:"취운화의 꽃은 주문 제작을 기반으로, 통상 준비와 제작에 3-7일이 소요됩니다.\n        재료인 꽃 수급 상황에 따라 일정이 유동적일 수 있으니, 꼭 충분한 시간을 두고 주문 부탁 드립니다."},{q:"서울 수도권만 배송 가능한가요?",a:"일반적으로 그렇습니다. 운반이 어려운 꽃의 특성상 장거리 운송이나 택배는 지원하지 않습니다.\n        강남/성남 지역을 중심으로 차량 1-2시간 내외 냉장 운송이 가능한 거리를 대상으로 하고 있습니다.\n        단, 취급 주문에 따라 대응 가능하니, 자세한 내용은 필히 문의 바랍니다."},{q:"최소 주문 금액이 있나요?",a:"취운화의 꽃은 주문 제작 방식이기 때문에 배송비 제외, 합산 7만원 이상 주문을 받고 있습니다."},{q:"수업은 언제 시작하나요?",a:"내 맴입니다."},{q:"주문제작만 가능한가요?",a:"네, 그렇습니다! 취운화는 현재 주문 제작만 받고 있습니다."}],dt={path:"inquiry",name:"inquiry",routeTitle:"문의",data:function(){return{socials:ct,logo_image:it.a,faq:lt}}},ut=dt,vt=Object(B["a"])(ut,st,rt,!1,null,null,null),pt=vt.exports,gt=[R,M,U,nt,pt];n["default"].use(c["a"]);var mt={Register:function(){return new c["a"]({routes:gt.map((function(t){return{path:"".concat(/^\//.test(t.path)?"":"/").concat(t.path),component:t}}))})},Routes:gt},ft={name:"App",methods:{openChannel:function(t){window.open(t.href,"_blank")}},data:function(){return{routes:mt.Routes.filter((function(t){return t.routeTitle})),logoImage:i.a,social:ct}}},_t=ft,ht=(a("034f"),Object(B["a"])(_t,s,r,!1,null,null,null)),bt=ht.exports,kt=(a("b0c0"),a("ce5b")),wt=a.n(kt),xt=(a("bf40"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",[t._t("default",[a("v-col",{attrs:{md:"8",sm:"12",order:"first","order-md":"last"}},[t._t("mainpanel")],2),a("v-col",{attrs:{md:"4",sm:"12",order:"last","order-md":"first"}},[t._t("subpanel")],2)])],2)],1)}),yt=[],jt={name:"screen-template",data:function(){return{}}},St=jt,It=Object(B["a"])(St,xt,yt,!1,null,null,null),Ot=It.exports,qt=a("fcf4"),Ct=function(t){return t.use(wt.a),t.component(Ot.name,Ot),new wt.a({theme:{themes:{light:{base:qt["a"].shades.white,primary:"#1D3E1F",secondary:"#527A55",accent:"#052107"}}}})};n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(bt)},router:mt.Register(n["default"]),vuetify:Ct(n["default"])}).$mount("#app")},"82fb":function(t,e,a){t.exports=a.p+"img/sq_02.fd150220.jpg"},"85ec":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.060067e0.svg"},"9d6c":function(t,e,a){t.exports=a.p+"img/rect_05.aad479b4.jpg"},a286:function(t,e,a){t.exports=a.p+"img/rect_02.6d8bc7eb.jpg"},a968:function(t,e,a){t.exports=a.p+"img/rect_06.7a4f6ffe.jpg"},b940:function(t,e,a){t.exports=a.p+"img/rect_04.2151588a.jpg"},c935:function(t,e,a){t.exports=a.p+"img/sq_01.8c2359dd.jpg"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d44d:function(t,e,a){"use strict";var n=a("222d"),s=a.n(n);s.a},d4b6:function(t,e,a){},de27:function(t,e,a){t.exports=a.p+"img/rect_03.ce152ea3.jpg"},e5d5:function(t,e,a){t.exports=a.p+"img/rect_01.9c6f46a4.jpg"}});
//# sourceMappingURL=app.756bc72d.js.map