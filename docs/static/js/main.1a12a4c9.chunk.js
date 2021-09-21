(this["webpackJsonptips-editor"]=this["webpackJsonptips-editor"]||[]).push([[0],{221:function(e,t,n){},283:function(e,t,n){},402:function(e,t,n){"use strict";n.r(t);var c,r,a=n(1),i=n.n(a),s=n(30),o=n.n(s),l=(n(221),n(15)),j=n(195),u=n.n(j),d=n(101),b=n(216),O=n(418);function p(e){return{type:r.SET_ITEMS,payload:e}}function f(e,t){return{type:r.SAVE_ITEM,payload:{item:e,index:t}}}function m(e){return{type:r.SET_CURRENT_ITEM,payload:e}}function h(e){return{type:r.SET_FILTER,payload:e}}!function(e){e.TEXT="text",e.VIDEO="video"}(c||(c={})),function(e){e.SET_CURRENT_ITEM="Edit item",e.REMOVE_ITEM="Remove item",e.SAVE_ITEM="SAVE item",e.SET_KEYS="Set Keys",e.SET_ITEMS="Set Items",e.SET_FILTER="Set filter"}(r||(r={}));var x="__TIPS__",y="https://raw.githubusercontent.com/midrissi/Web-studio-TIPS/main/tips.json",v={filter:"",items:[],current:-1,keys:[]},g=n(215),E=n(11),k=n(138),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.SET_KEYS:return Object(E.a)(Object(E.a)({},e),{},{keys:t.payload});case r.SET_FILTER:return Object(E.a)(Object(E.a)({},e),{},{filter:t.payload});case r.SET_ITEMS:return Object(E.a)(Object(E.a)({},e),{},{items:Object(k.sortBy)(t.payload,"key")});case r.REMOVE_ITEM:return Object(E.a)(Object(E.a)({},e),{},{items:Object(k.remove)(e.items,(function(e,n){return n!==t.payload}))});case r.SAVE_ITEM:var n=t.payload,c=n.index,a=n.item;return c>=e.items.length?Object(E.a)(Object(E.a)({},e),{},{items:[].concat(Object(g.a)(e.items),[a])}):Object(E.a)(Object(E.a)({},e),{},{items:e.items.map((function(e,t){return c===t?a:e}))});case r.SET_CURRENT_ITEM:return Object(E.a)(Object(E.a)({},e),{},{current:t.payload});default:return e}},T=n(6),N=Object(a.createContext)([v,function(){}]);N.displayName="Store";var I=function(){return Object(a.useContext)(N)},w=function(e){var t=e.children,n=Object(a.useReducer)(S,v),c=Object(l.a)(n,2),i=c[0],s=c[1];return Object(a.useEffect)((function(){localStorage.setItem(x,JSON.stringify(i.items))}),[i.items]),Object(a.useEffect)((function(){fetch("keys.json").then((function(e){return e.json()})).then((function(e){return s(function(e){return{type:r.SET_KEYS,payload:e}}(e))}))}),[]),Object(T.jsx)(N.Provider,{value:[i,s],children:t})},C=n(406),_=function(e){var t=e.show,n=e.onYes,c=e.title,r=void 0===c?"Confirm":c,a=e.children,i=e.yesLabel,s=void 0===i?"Yes":i,o=e.noLabel,l=void 0===o?"No":o,j=e.yesProps,u=void 0===j?{}:j,b=e.noProps,O=void 0===b?{}:b;function p(e){n&&n(e)}return Object(T.jsxs)(C.a,{show:t,onHide:function(){return p(!1)},children:[Object(T.jsx)(C.a.Header,{children:Object(T.jsx)(C.a.Title,{children:r})}),Object(T.jsx)(C.a.Body,{children:a}),Object(T.jsxs)(C.a.Footer,{children:[Object(T.jsx)(d.a,Object(E.a)(Object(E.a)({appearance:"primary"},u),{},{onClick:function(){return p(!0)},children:s})),Object(T.jsx)(d.a,Object(E.a)(Object(E.a)({appearance:"subtle"},O),{},{onClick:function(){return p(!1)},children:l}))]})]})},M=n(70),R=n(414),F=(n(283),["children","active"]),L=function(e){var t=e.children,n=e.active,c=Object(M.a)(e,F);return Object(T.jsx)("div",Object(E.a)(Object(E.a)({className:"rs-item ".concat(n?"active":"")},c),{},{children:t}))},V=function(e){var t=e.path,n=void 0===t?"":t,c=e.onClick,r=e.className,i=void 0===r?"":r,s=e.style,o=void 0===s?{}:s,j=n.split(":"),u=Object(a.useState)(-1),d=Object(l.a)(u,2),b=d[0],O=d[1];return Object(T.jsx)(R.a,{separator:"",style:o,className:"".concat(i," font-medium whitespace-nowrap"),children:j.map((function(e,t){var n=j.slice(0,t+1).join(":");return Object(T.jsx)(R.a.Item,{renderItem:function(){return Object(T.jsx)(L,{onMouseEnter:function(){return O(t)},onMouseLeave:function(){return O(-1)},active:b>=t,onClick:function(){c&&c({value:n,index:t})},children:e})}},n)}))})},P=function(){var e=I(),t=Object(l.a)(e,2),n=t[0],r=n.items,i=n.filter,s=t[1],o=Object(a.useState)(!1),j=Object(l.a)(o,2),v=j[0],g=j[1],E=Object(a.useState)(!1),k=Object(l.a)(E,2),S=k[0],N=k[1],w=Object(a.useState)(!1),C=Object(l.a)(w,2),M=C[0],R=C[1];Object(a.useEffect)((function(){var e=[];if(localStorage.getItem(x)){try{e=JSON.parse(localStorage.getItem(x)||"[]")}catch(t){e=[]}s(p(e))}else F()}),[]);var F=function(){R(!0),fetch(y).then((function(e){return e.json()})).then((function(e){return s(p(e))})).finally((function(){return R(!1)}))};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(_,{show:S,yesProps:{color:"red"},onYes:function(e){e&&F(),N(!1)},children:["Reloading the view will fetch the items from:",Object(T.jsx)("div",{className:"flex justify-center my-5",children:Object(T.jsx)("a",{target:"_blank",href:y,className:"bg-gray-500 text-xs p-1 rounded-md mx-1",rel:"noreferrer",children:y})}),Object(T.jsx)("span",{className:"text-red-400 underline",children:"All your changes will be lost. Do you want to proceed?"})]}),Object(T.jsxs)("div",{className:"w-full flex justify-between flex-row my-3",children:[Object(T.jsxs)("div",{className:"flex justify-center align-middle",children:[Object(T.jsx)(d.a,{className:"mr-4",onClick:function(){return N(!0)},children:Object(T.jsx)(b.a,{icon:"refresh",spin:M})}),Object(T.jsx)(d.a,{className:"mr-4",onClick:function(){s(f({body:"",key:"",type:c.TEXT},r.length)),s(m(r.length))},children:Object(T.jsx)(b.a,{icon:"plus"})}),i?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(V,{path:i,onClick:function(e){var t=e.value;return s(h(t))}}),Object(T.jsx)(d.a,{appearance:"link",onClick:function(){return s(h(""))},children:"Clear"})]}):null]}),Object(T.jsx)("div",{className:"block",children:Object(T.jsx)(O.a,{appearance:v?"primary":"default",onClick:function(){return g(!v)},icon:Object(T.jsx)(b.a,{icon:"code"})})})]}),v?Object(T.jsx)(u.a,{style:{padding:10,borderRadius:6,marginBottom:12,border:"1px dashed gray"},src:r,theme:"solarized"}):null]})},B=n(88),D=n(415),J=n(416),Y=n(407),A=n(419),K=n(410),H=function(){var e=function(){return s(m(-1))},t=I(),n=Object(l.a)(t,2),c=n[0],r=c.current,a=c.items,i=c.keys,s=n[1];if(r<0)return null;return Object(T.jsxs)(D.a,{show:r>=0,onHide:e,children:[Object(T.jsx)(D.a.Header,{children:Object(T.jsx)(D.a.Title,{children:"Item Detail"})}),Object(T.jsx)(D.a.Body,{children:Object(T.jsx)(J.a,{children:Object(T.jsxs)(Y.a,{children:[Object(T.jsx)(A.a,{children:"Key"}),Object(T.jsx)(K.a,{data:i,groupBy:"group",value:a[r].key,onChange:function(e){return function(e,t){return s(f(Object(E.a)(Object(E.a)({},a[r]),{},Object(B.a)({},e,t)),r))}("key",e)}})]})})}),Object(T.jsxs)(D.a.Footer,{children:[Object(T.jsx)(d.a,{onClick:e,appearance:"primary",children:"Save"}),Object(T.jsx)(d.a,{onClick:e,appearance:"subtle",children:"Cancel"})]})]})},U=n(142),W=n.n(U),X=n(211),z=n(411),q=n(413),G={width:"100%",height:"100%"},Q=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],r=I(),i=Object(l.a)(r,2)[1];return Object(T.jsx)(z.a,{className:"w-full mb-3",draggable:!0,multiple:!1,fileList:n?[n]:[],autoUpload:!1,fileListVisible:!1,onChange:function(){var e=Object(X.a)(W.a.mark((function e(t){var n,r,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,null===(n=t[0].blobFile)||void 0===n?void 0:n.text();case 4:if(e.t0=e.sent,e.t0){e.next=7;break}e.t0="[]";case 7:r=e.t0,e.prev=8,a=JSON.parse(r),i(p(a)),e.next=17;break;case 13:return e.prev=13,e.t1=e.catch(8),q.a.error("Invalid JSON."),e.abrupt("return");case 17:c(null);case 18:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(t){return e.apply(this,arguments)}}(),accept:"application/json",children:Object(T.jsx)("div",{style:G,children:"Click or Drag files to this area"})})},Z=n(213),$=n(409),ee=n(420),te=n(412),ne=n(417),ce=n(421),re=function(e){var t=e.show,n=e.onConfirm,c=e.item;return c?Object(T.jsxs)(_,{show:t,onYes:n,yesLabel:"Remove",noLabel:"Cancel",yesProps:{appearance:"primary",color:"red"},children:["Are you sure you want to remove the key:",Object(T.jsx)("span",{className:"bg-gray-500 text-xs p-1 rounded-md mx-1",children:c.key})," ","of type:",Object(T.jsx)("span",{className:"bg-gray-500 text-xs p-1 rounded-md mx-1",children:c.type}),"?"]}):null},ae=["top","left"],ie=["children"],se=function(e){var t=e.item;return Object(T.jsx)($.a,{preventOverflow:!0,placement:"auto",trigger:"click",speaker:function(e){var n=e.top,r=e.left,a=Object(M.a)(e,ae);return Object(T.jsx)(ee.a,Object(E.a)(Object(E.a)({title:t.title||"",style:{top:n,left:r}},a),{},{children:Object(T.jsxs)("article",{className:"prose text-left prose-sm overflow-auto p-1 max-h-80 text-sm",children:[t.type===c.VIDEO&&"youtube"===t.video.provider&&t.video.link?Object(T.jsx)("iframe",{height:200,width:"100%",src:t.video.link,title:t.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):null,Object(T.jsx)(Z.a,{options:{overrides:{a:{component:function(e){var t=e.children,n=Object(M.a)(e,ie);return Object(T.jsxs)("a",Object(E.a)(Object(E.a)({},n),{},{target:"_blank",rel:"noopener noreferrer",className:"flex items-center",children:[t,Object(T.jsx)(b.a,{icon:"external-link",className:"ml-1"})]}))}}}},children:t.body})]})}))},children:Object(T.jsx)(b.a,{icon:t.type===c.VIDEO?"film":"code",className:"text-gray-300 text-base cursor-pointer"})})},oe=function(){var e=I(),t=Object(l.a)(e,2),n=t[0],c=n.items,i=n.filter,s=n.keys,o=t[1],j=Object(a.useState)(-1),u=Object(l.a)(j,2),O=u[0],p=u[1],f=Object(a.useMemo)((function(){return s.map((function(e){return e.value}))}),[s]);return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(re,{item:c[O],show:!!c[O],onConfirm:function(e){e&&o(function(e){return{type:r.REMOVE_ITEM,payload:e}}(O)),p(-1)}}),0===c.length?Object(T.jsxs)("div",{className:"text-center bg-[#292d33] border-dashed rounded-md border border-gray-200 p-3",children:["The list is empty. Please upload a valid"," ",Object(T.jsx)("span",{className:"bg-gray-500 p-1 text-xs rounded-md mx-1",children:"JSON file"})," ","or use"," ",Object(T.jsx)("a",{href:"tips.json",target:"_blank",children:"this example"})]}):null,Object(T.jsx)(te.a,{hover:!0,children:c.map((function(e,t){if(i&&!e.key.startsWith(i))return null;var n=f.includes(e.key);return Object(T.jsx)(te.a.Item,{index:t,children:Object(T.jsxs)(ne.a,{children:[Object(T.jsx)(ne.a.Item,{colspan:2,className:"flex justify-center items-center h-16",children:Object(T.jsx)(se,{item:e})}),Object(T.jsxs)(ne.a.Item,{colspan:19,className:"flex flex-row h-16",children:[!n&&Object(T.jsx)($.a,{trigger:"hover",placement:"left",speaker:Object(T.jsx)(ce.a,{children:Object(T.jsx)("div",{className:"p-2",children:"Key not supported"})}),children:Object(T.jsx)(b.a,{icon:"info",className:"flex items-center mr-2 text-red-400 cursor-pointer"})}),Object(T.jsx)(V,{style:{marginLeft:n?22:"unset"},path:e.key,onClick:function(e){var t=e.value;return o(h(t))}})]}),Object(T.jsxs)(ne.a.Item,{colspan:2,className:"flex justify-center items-center h-16",children:[Object(T.jsx)(d.a,{color:"orange",appearance:"link",onClick:function(){return p(t)},children:"Remove"}),Object(T.jsx)("span",{className:"p-1",children:"|"}),Object(T.jsx)(d.a,{appearance:"link",onClick:function(){return o(m(t))},children:"Edit"})]})]})},"".concat(e.key,":").concat(t))}))})]})},le=function(){return Object(T.jsx)(w,{children:Object(T.jsxs)("div",{className:"max-w-7xl m-auto mt-4",children:[Object(T.jsx)(Q,{}),Object(T.jsx)(P,{}),Object(T.jsx)(oe,{}),Object(T.jsx)(H,{})]})})},je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,422)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};o.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)(le,{})}),document.getElementById("root")),je()}},[[402,1,2]]]);
//# sourceMappingURL=main.1a12a4c9.chunk.js.map