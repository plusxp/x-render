(window.webpackJsonp=window.webpackJsonp||[]).push([[51,12],{"0zqC":function(Kn,gn,e){"use strict";e.r(gn);var U=e("tJVT"),a=e("q1tI"),S=e.n(a),L=e("wx14"),me=e("rePB"),J=e("ODXe"),Be=e("U8pU"),Pe=e("Ff2n"),ge=e("VTBJ"),Jn=e("TSYQ"),Te=e.n(Jn),Mn=e("Zm9Q"),wn=e("5Z9U"),Sn=e("6cGi"),pn=e("KQm4"),Xe=e("wgJM"),$n=e("t23M");function Fn(t){var s=Object(a.useRef)(),m=Object(a.useRef)(!1);function b(){for(var C=arguments.length,y=new Array(C),R=0;R<C;R++)y[R]=arguments[R];m.current||(Xe.a.cancel(s.current),s.current=Object(Xe.a)(function(){t.apply(void 0,y)}))}return Object(a.useEffect)(function(){return function(){m.current=!0,Xe.a.cancel(s.current)}},[]),b}function Rn(t){var s=Object(a.useRef)([]),m=Object(a.useState)({}),b=Object(J.a)(m,2),C=b[1],y=Object(a.useRef)(typeof t=="function"?t():t),R=Fn(function(){var B=y.current;s.current.forEach(function($){B=$(B)}),s.current=[],y.current=B,C({})});function j(B){s.current.push(B),R()}return[y.current,j]}var We=e("4IlW");function _n(t,s){var m,b=t.prefixCls,C=t.id,y=t.active,R=t.rtl,j=t.tab,B=j.key,$=j.tab,x=j.disabled,Y=j.closeIcon,z=t.tabBarGutter,ie=t.tabPosition,Q=t.closable,X=t.renderWrapper,ue=t.removeAriaLabel,V=t.editable,ee=t.onClick,ae=t.onRemove,k=t.onFocus,oe="".concat(b,"-tab");a.useEffect(function(){return ae},[]);var _={};ie==="top"||ie==="bottom"?_[R?"marginLeft":"marginRight"]=z:_.marginBottom=z;var be=V&&Q!==!1&&!x;function te(se){x||ee(se)}function ce(se){se.preventDefault(),se.stopPropagation(),V.onEdit("remove",{key:B,event:se})}var fe=a.createElement("div",{key:B,ref:s,className:Te()(oe,(m={},Object(me.a)(m,"".concat(oe,"-with-remove"),be),Object(me.a)(m,"".concat(oe,"-active"),y),Object(me.a)(m,"".concat(oe,"-disabled"),x),m)),style:_,onClick:te},a.createElement("div",{role:"tab","aria-selected":y,id:C&&"".concat(C,"-tab-").concat(B),className:"".concat(oe,"-btn"),"aria-controls":C&&"".concat(C,"-panel-").concat(B),"aria-disabled":x,tabIndex:x?null:0,onClick:function(H){H.stopPropagation(),te(H)},onKeyDown:function(H){[We.a.SPACE,We.a.ENTER].includes(H.which)&&(H.preventDefault(),te(H))},onFocus:k},$),be&&a.createElement("button",{type:"button","aria-label":ue||"remove",tabIndex:0,className:"".concat(oe,"-remove"),onClick:function(H){H.stopPropagation(),ce(H)}},Y||V.removeIcon||"\xD7"));return X&&(fe=X(fe)),fe}var xn=a.forwardRef(_n),et={width:0,height:0,left:0,top:0};function ct(t,s,m){return Object(a.useMemo)(function(){for(var b,C=new Map,y=s.get((b=t[0])===null||b===void 0?void 0:b.key)||et,R=y.left+y.width,j=0;j<t.length;j+=1){var B=t[j].key,$=s.get(B);if(!$){var x;$=s.get((x=t[j-1])===null||x===void 0?void 0:x.key)||et}var Y=C.get(B)||Object(ge.a)({},$);Y.right=R-Y.left-Y.width,C.set(B,Y)}return C},[t.map(function(b){return b.key}).join("_"),s,m])}var E={width:0,height:0,left:0,top:0,right:0};function I(t,s,m,b,C){var y=C.tabs,R=C.tabPosition,j=C.rtl,B,$,x;["top","bottom"].includes(R)?(B="width",$=j?"right":"left",x=Math.abs(s.left)):(B="height",$="top",x=-s.top);var Y=s[B],z=m[B],ie=b[B],Q=Y;return z+ie>Y&&(Q=Y-ie),Object(a.useMemo)(function(){if(!y.length)return[0,0];for(var X=y.length,ue=X,V=0;V<X;V+=1){var ee=t.get(y[V].key)||E;if(ee[$]+ee[B]>x+Q){ue=V-1;break}}for(var ae=0,k=X-1;k>=0;k-=1){var oe=t.get(y[k].key)||E;if(oe[$]<x){ae=k+1;break}}return[ae,ue]},[t,x,Q,R,y.map(function(X){return X.key}).join("_"),j])}var D=e("Gytx"),d=e.n(D),o=e("Kwbf");function p(t,s){var m=t.prefixCls,b=t.invalidate,C=t.item,y=t.renderItem,R=t.responsive,j=t.registerSize,B=t.itemKey,$=t.className,x=t.style,Y=t.children,z=t.display,ie=t.order,Q=t.component,X=Q===void 0?"div":Q,ue=Object(Pe.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),V=R&&!z;function ee(be){j(B,be)}a.useEffect(function(){return function(){ee(null)}},[]);var ae=y&&C!==void 0?y(C):Y,k;b||(k={opacity:V?0:1,height:V?0:void 0,overflowY:V?"hidden":void 0,order:R?ie:void 0,pointerEvents:V?"none":void 0});var oe={};V&&(oe["aria-hidden"]=!0);var _=a.createElement(X,Object(L.a)({className:Te()(!b&&m,$),style:Object(ge.a)(Object(ge.a)({},k),x)},oe,ue,{ref:s}),ae);return R&&(_=a.createElement($n.default,{onResize:function(te){var ce=te.offsetWidth;ee(ce)}},_)),_}var g=a.forwardRef(p);g.displayName="Item";var O=g;function r(){var t=Object(a.useState)({}),s=Object(J.a)(t,2),m=s[1],b=Object(a.useRef)([]),C=Object(a.useRef)(!1),y=0,R=0;Object(a.useEffect)(function(){return function(){C.current=!0}},[]);function j(B){var $=y;y+=1,b.current.length<$+1&&(b.current[$]=B);var x=b.current[$];function Y(z){b.current[$]=typeof z=="function"?z(b.current[$]):z,Xe.a.cancel(R),R=Object(Xe.a)(function(){C.current||m({})})}return[x,Y]}return j}var l=function(s,m){var b=a.useContext(T);if(!b){var C=s.component,y=C===void 0?"div":C,R=Object(Pe.a)(s,["component"]);return a.createElement(y,Object(L.a)({},R,{ref:m}))}var j=b.className,B=Object(Pe.a)(b,["className"]),$=s.className,x=Object(Pe.a)(s,["className"]);return a.createElement(T.Provider,{value:null},a.createElement(O,Object(L.a)({ref:m,className:Te()(j,$)},B,x)))},i=a.forwardRef(l);i.displayName="RawItem";var w=i,T=a.createContext(null),P="responsive",c="invalidate";function A(t){return"+ ".concat(t.length," ...")}function h(t,s){var m=t.prefixCls,b=m===void 0?"rc-overflow":m,C=t.data,y=C===void 0?[]:C,R=t.renderItem,j=t.renderRawItem,B=t.itemKey,$=t.itemWidth,x=$===void 0?10:$,Y=t.ssr,z=t.style,ie=t.className,Q=t.maxCount,X=t.renderRest,ue=t.renderRawRest,V=t.suffix,ee=t.component,ae=ee===void 0?"div":ee,k=t.itemComponent,oe=t.onVisibleChange,_=Object(Pe.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=r(),te=Y==="full",ce=be(null),fe=Object(J.a)(ce,2),se=fe[0],H=fe[1],de=se||0,ye=be(new Map),ve=Object(J.a)(ye,2),Re=ve[0],Le=ve[1],Oe=be(0),Se=Object(J.a)(Oe,2),we=Se[0],Me=Se[1],Ne=be(0),Ie=Object(J.a)(Ne,2),xe=Ie[0],_e=Ie[1],Ve=be(0),Je=Object(J.a)(Ve,2),Qe=Je[0],$e=Je[1],Pn=Object(a.useState)(null),rn=Object(J.a)(Pn,2),Ze=rn[0],ln=rn[1],yn=Object(a.useState)(null),bn=Object(J.a)(yn,2),Ae=bn[0],He=bn[1],en=a.useMemo(function(){return Ae===null&&te?Number.MAX_SAFE_INTEGER:Ae||0},[Ae,se]),ke=Object(a.useState)(!1),Wn=Object(J.a)(ke,2),zn=Wn[0],Ln=Wn[1],an="".concat(b,"-item"),Dn=Math.max(we,xe),un=y.length&&Q===P,En=Q===c,nn=un||typeof Q=="number"&&y.length>Q,sn=Object(a.useMemo)(function(){var he=y;return un?se===null&&te?he=y:he=y.slice(0,Math.min(y.length,de/x)):typeof Q=="number"&&(he=y.slice(0,Q)),he},[y,x,se,Q,un]),In=Object(a.useMemo)(function(){return un?y.slice(en+1):y.slice(sn.length)},[y,sn,un,en]),mn=Object(a.useCallback)(function(he,je){var Fe;return typeof B=="function"?B(he):(Fe=B&&(he==null?void 0:he[B]))!==null&&Fe!==void 0?Fe:je},[B]),qe=Object(a.useCallback)(R||function(he){return he},[R]);function Ge(he,je){He(he),je||(Ln(he<y.length-1),oe==null||oe(he))}function Yn(he,je){H(je.clientWidth)}function Hn(he,je){Le(function(Fe){var tn=new Map(Fe);return je===null?tn.delete(he):tn.set(he,je),tn})}function tt(he,je){_e(je),Me(xe)}function On(he,je){$e(je)}function vn(he){return Re.get(mn(sn[he],he))}a.useLayoutEffect(function(){if(de&&Dn&&sn){var he=Qe,je=sn.length,Fe=je-1;if(!je){Ge(0),ln(null);return}for(var tn=0;tn<je;tn+=1){var Zn=vn(tn);if(Zn===void 0){Ge(tn-1,!0);break}if(he+=Zn,tn===Fe-1&&he+vn(Fe)<=de){Ge(Fe),ln(null);break}else if(he+Dn>de){Ge(tn-1),ln(he-Zn-Qe+xe);break}else if(tn===Fe){Ge(Fe),ln(he-Qe);break}}V&&vn(0)+Qe>de&&ln(null)}},[de,Re,xe,Qe,mn,sn]);var Gn=zn&&!!In.length,Cn={};Ze!==null&&un&&(Cn={position:"absolute",left:Ze,top:0});var fn={prefixCls:an,responsive:un,component:k,invalidate:En},Qn=j?function(he,je){var Fe=mn(he,je);return a.createElement(T.Provider,{key:Fe,value:Object(ge.a)(Object(ge.a)({},fn),{},{order:je,item:he,itemKey:Fe,registerSize:Hn,display:je<=en})},j(he,je))}:function(he,je){var Fe=mn(he,je);return a.createElement(O,Object(L.a)({},fn,{order:je,key:Fe,item:he,renderItem:qe,itemKey:Fe,registerSize:Hn,display:je<=en}))},Nn,Xn={order:Gn?en:Number.MAX_SAFE_INTEGER,className:"".concat(an,"-rest"),registerSize:tt,display:Gn};if(ue)ue&&(Nn=a.createElement(T.Provider,{value:Object(ge.a)(Object(ge.a)({},fn),Xn)},ue(In)));else{var dn=X||A;Nn=a.createElement(O,Object(L.a)({},fn,Xn),typeof dn=="function"?dn(In):dn)}var Tn=a.createElement(ae,Object(L.a)({className:Te()(!En&&b,ie),style:z,ref:s},_),sn.map(Qn),nn?Nn:null,V&&a.createElement(O,Object(L.a)({},fn,{order:en,className:"".concat(an,"-suffix"),registerSize:On,display:!0,style:Cn}),V));return un&&(Tn=a.createElement($n.default,{onResize:Yn},Tn)),Tn}var n=a.forwardRef(h);n.displayName="Overflow",n.Item=w,n.RESPONSIVE=P,n.INVALIDATE=c;var v=n,u=v,N=e("1OyB"),K=e("vuIU"),W=e("Ji7U"),Z=e("LK+K"),G=e("bT9E"),le=e("YrtM"),De=a.createContext(null);function Ke(t,s){var m=Object(ge.a)({},t);return Object.keys(s).forEach(function(b){var C=s[b];C!==void 0&&(m[b]=C)}),m}function cn(t){var s=t.children,m=t.locked,b=Object(Pe.a)(t,["children","locked"]),C=a.useContext(De),y=Object(le.a)(function(){return Ke(C,b)},[C,b],function(R,j){return!m&&(R[0]!==j[0]||!d()(R[1],j[1]))});return a.createElement(De.Provider,{value:y},s)}function jn(t,s,m,b){var C=a.useContext(De),y=C.activeKey,R=C.onActive,j=C.onInactive,B={active:y===t};return s||(B.onMouseEnter=function($){m==null||m({key:t,domEvent:$}),R(t)},B.onMouseLeave=function($){b==null||b({key:t,domEvent:$}),j(t)}),B}function Bn(t){var s=t.item,m=Object(Pe.a)(t,["item"]);return Object.defineProperty(m,"item",{get:function(){return Object(o.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),s}}),m}function f(t){var s=t.icon,m=t.props,b=t.children,C;return typeof s=="function"?C=a.createElement(s,Object(ge.a)({},m)):C=s,C||b||null}function M(t){var s=a.useContext(De),m=s.mode,b=s.rtl,C=s.inlineIndent;if(m!=="inline")return null;var y=t;return b?{paddingRight:y*C}:{paddingLeft:y*C}}var F=[],pe=a.createContext(null);function ne(){return a.useContext(pe)}var Ee=a.createContext(F);function Ue(t){var s=a.useContext(Ee);return a.useMemo(function(){return t!==void 0?[].concat(Object(pn.a)(s),[t]):s},[s,t])}var Ye=a.createContext(null),Ut=a.createContext(null);function Jt(t,s){return t===void 0?null:"".concat(t,"-").concat(s)}function zt(t){var s=a.useContext(Ut);return Jt(s,t)}var br=function(t){Object(W.a)(m,t);var s=Object(Z.a)(m);function m(){return Object(N.a)(this,m),s.apply(this,arguments)}return Object(K.a)(m,[{key:"render",value:function(){var C=this.props,y=C.title,R=C.attribute,j=C.elementRef,B=Object(Pe.a)(C,["title","attribute","elementRef"]),$=Object(G.a)(B,["eventKey"]);return Object(o.a)(!R,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),a.createElement(u.Item,Object(L.a)({},R,{title:typeof y=="string"?y:void 0},$,{ref:j}))}}]),m}(a.Component),Or=function(s){var m,b=s.style,C=s.className,y=s.eventKey,R=s.disabled,j=s.itemIcon,B=s.children,$=s.role,x=s.onMouseEnter,Y=s.onMouseLeave,z=s.onClick,ie=s.onKeyDown,Q=s.onFocus,X=Object(Pe.a)(s,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ue=zt(y),V=a.useContext(De),ee=V.prefixCls,ae=V.onItemClick,k=V.disabled,oe=V.overflowDisabled,_=V.itemIcon,be=V.selectedKeys,te=V.onActive,ce="".concat(ee,"-item"),fe=a.useRef(),se=a.useRef(),H=k||R,de=Ue(y),ye=function(Ve){return{key:y,keyPath:de,item:fe.current,domEvent:Ve}},ve=j||_,Re=jn(y,H,x,Y),Le=Re.active,Oe=Object(Pe.a)(Re,["active"]),Se=be.includes(y),we=M(de.length),Me=function(Ve){if(!H){var Je=ye(Ve);z==null||z(Bn(Je)),ae(Je)}},Ne=function(Ve){if(ie==null||ie(Ve),Ve.which===We.a.ENTER){var Je=ye(Ve);z==null||z(Bn(Je)),ae(Je)}},Ie=function(Ve){te(y),Q==null||Q(Ve)},xe={};return s.role==="option"&&(xe["aria-selected"]=Se),a.createElement(br,Object(L.a)({ref:fe,elementRef:se,role:$===null?"none":$||"menuitem",tabIndex:R?null:-1,"data-menu-id":oe&&ue?null:ue},X,Oe,xe,{component:"li","aria-disabled":R,style:Object(ge.a)(Object(ge.a)({},we),b),className:Te()(ce,(m={},Object(me.a)(m,"".concat(ce,"-active"),Le),Object(me.a)(m,"".concat(ce,"-selected"),Se),Object(me.a)(m,"".concat(ce,"-disabled"),H),m),C),onClick:Me,onKeyDown:Ne,onFocus:Ie}),B,a.createElement(f,{props:Object(ge.a)(Object(ge.a)({},s),{},{isSelected:Se}),icon:ve}))};function Cr(t){var s=t.eventKey,m=ne(),b=Ue(s);return a.useEffect(function(){if(m)return m.registerPath(s,b),function(){m.unregisterPath(s,b)}},[b]),m?null:a.createElement(Or,t)}var Dt=Cr;function Et(t,s){return Object(Mn.a)(t).map(function(m,b){if(a.isValidElement(m)){var C=m.key;return C==null&&(C="tmp_key-".concat([].concat(Object(pn.a)(s),[b]).join("-"))),a.cloneElement(m,{key:C,eventKey:C})}return m})}function nt(t){var s=a.useRef(t);s.current=t;var m=a.useCallback(function(){for(var b,C=arguments.length,y=new Array(C),R=0;R<C;R++)y[R]=arguments[R];return(b=s.current)===null||b===void 0?void 0:b.call.apply(b,[s].concat(y))},[]);return t?m:void 0}var Sr=function(s,m){var b=s.className,C=s.children,y=Object(Pe.a)(s,["className","children"]),R=a.useContext(De),j=R.prefixCls,B=R.mode;return a.createElement("ul",Object(L.a)({className:Te()(j,"".concat(j,"-sub"),"".concat(j,"-").concat(B==="inline"?"inline":"vertical"),b)},y,{"data-menu-list":!0,ref:m}),C)},Yt=a.forwardRef(Sr);Yt.displayName="SubMenuList";var Ht=Yt,Rr=e("uciX"),Vn={adjustX:1,adjustY:1},Gt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},jr={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fa=Gt;function Qt(t,s,m){if(s)return s;if(m)return m[t]||m.other}var Pr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(t){var s=t.prefixCls,m=t.visible,b=t.children,C=t.popup,y=t.popupClassName,R=t.popupOffset,j=t.disabled,B=t.mode,$=t.onVisibleChange,x=a.useContext(De),Y=x.getPopupContainer,z=x.rtl,ie=x.subMenuOpenDelay,Q=x.subMenuCloseDelay,X=x.builtinPlacements,ue=x.triggerSubMenuAction,V=x.forceSubMenuRender,ee=x.motion,ae=x.defaultMotions,k=a.useState(!1),oe=Object(J.a)(k,2),_=oe[0],be=oe[1],te=z?Object(ge.a)(Object(ge.a)({},jr),X):Object(ge.a)(Object(ge.a)({},Gt),X),ce=Pr[B],fe=Qt(B,ee,ae),se=Object(ge.a)(Object(ge.a)({},fe),{},{leavedClassName:"".concat(s,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=a.useRef();return a.useEffect(function(){return H.current=Object(Xe.a)(function(){be(m)}),function(){Xe.a.cancel(H.current)}},[m]),a.createElement(Rr.a,{prefixCls:s,popupClassName:Te()("".concat(s,"-popup"),Object(me.a)({},"".concat(s,"-rtl"),z),y),stretch:B==="horizontal"?"minWidth":null,getPopupContainer:Y,builtinPlacements:te,popupPlacement:ce,popupVisible:_,popup:C,popupAlign:R&&{offset:R},action:j?[]:[ue],mouseEnterDelay:ie,mouseLeaveDelay:Q,onPopupVisibleChange:$,forceRender:V,popupMotion:se},b)}var Er=e("8XRh");function Ir(t){var s=t.id,m=t.open,b=t.keyPath,C=t.children,y="inline",R=a.useContext(De),j=R.prefixCls,B=R.forceSubMenuRender,$=R.motion,x=R.defaultMotions,Y=R.mode,z=a.useRef(!1);z.current=Y===y;var ie=a.useState(!z.current),Q=Object(J.a)(ie,2),X=Q[0],ue=Q[1],V=z.current?m:!1;a.useEffect(function(){z.current&&ue(!1)},[Y]);var ee=Object(ge.a)({},Qt(y,$,x));b.length>1&&(ee.motionAppear=!1);var ae=ee.onVisibleChanged;return ee.onVisibleChanged=function(k){return!z.current&&!k&&ue(!0),ae==null?void 0:ae(k)},X?null:a.createElement(cn,{mode:y,locked:!z.current},a.createElement(Er.default,Object(L.a)({visible:V},ee,{forceRender:B,removeOnLeave:!1,leavedClassName:"".concat(j,"-hidden")}),function(k){var oe=k.className,_=k.style;return a.createElement(Ht,{id:s,className:oe,style:_},C)}))}var Nr=function(s){var m,b=s.style,C=s.className,y=s.title,R=s.eventKey,j=s.disabled,B=s.internalPopupClose,$=s.children,x=s.itemIcon,Y=s.expandIcon,z=s.popupClassName,ie=s.popupOffset,Q=s.onClick,X=s.onMouseEnter,ue=s.onMouseLeave,V=s.onTitleClick,ee=s.onTitleMouseEnter,ae=s.onTitleMouseLeave,k=Object(Pe.a)(s,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),oe=zt(R),_=a.useContext(De),be=_.prefixCls,te=_.mode,ce=_.openKeys,fe=_.disabled,se=_.overflowDisabled,H=_.activeKey,de=_.selectedKeys,ye=_.itemIcon,ve=_.expandIcon,Re=_.onItemClick,Le=_.onOpenChange,Oe=_.onActive,Se=a.useContext(Ye),we=Se.isSubPathKey,Me=Ue(),Ne="".concat(be,"-submenu"),Ie=fe||j,xe=a.useRef(),_e=a.useRef(),Ve=x||ye,Je=Y||ve,Qe=ce.includes(R),$e=!se&&Qe,Pn=we(de,R),rn=jn(R,Ie,ee,ae),Ze=rn.active,ln=Object(Pe.a)(rn,["active"]),yn=a.useState(!1),bn=Object(J.a)(yn,2),Ae=bn[0],He=bn[1],en=function(Ge){Ie||He(Ge)},ke=function(Ge){en(!0),X==null||X({key:R,domEvent:Ge})},Wn=function(Ge){en(!1),ue==null||ue({key:R,domEvent:Ge})},zn=a.useMemo(function(){return Ze||(te!=="inline"?Ae||we([H],R):!1)},[te,Ze,H,Ae,R,we]),Ln=M(Me.length),an=function(Ge){Ie||(V==null||V({key:R,domEvent:Ge}),te==="inline"&&Le(R,!Qe))},Dn=nt(function(qe){Q==null||Q(Bn(qe)),Re(qe)}),un=function(Ge){te!=="inline"&&Le(R,Ge)},En=function(){Oe(R)},nn=oe&&"".concat(oe,"-popup"),sn=a.createElement("div",Object(L.a)({role:"menuitem",style:Ln,className:"".concat(Ne,"-title"),tabIndex:Ie?null:-1,ref:xe,title:typeof y=="string"?y:null,"data-menu-id":se&&oe?null:oe,"aria-expanded":$e,"aria-haspopup":!0,"aria-controls":nn,"aria-disabled":Ie,onClick:an,onFocus:En},ln),y,a.createElement(f,{icon:te!=="horizontal"?Je:null,props:Object(ge.a)(Object(ge.a)({},s),{},{isOpen:$e,isSubMenu:!0})},a.createElement("i",{className:"".concat(Ne,"-arrow")}))),In=a.useRef(te);if(te!=="inline"&&(In.current=Me.length>1?"vertical":te),!se){var mn=In.current;sn=a.createElement(Dr,{mode:mn,prefixCls:Ne,visible:!B&&$e&&te!=="inline",popupClassName:z,popupOffset:ie,popup:a.createElement(cn,{mode:mn},a.createElement(Ht,{id:nn,ref:_e},$)),disabled:Ie,onVisibleChange:un},sn)}return a.createElement(cn,{onItemClick:Dn,mode:te==="horizontal"?"vertical":te,itemIcon:Ve,expandIcon:Je},a.createElement(u.Item,Object(L.a)({role:"none"},k,{component:"li",style:b,className:Te()(Ne,"".concat(Ne,"-").concat(te),C,(m={},Object(me.a)(m,"".concat(Ne,"-open"),$e),Object(me.a)(m,"".concat(Ne,"-active"),zn),Object(me.a)(m,"".concat(Ne,"-selected"),Pn),Object(me.a)(m,"".concat(Ne,"-disabled"),Ie),m)),onMouseEnter:ke,onMouseLeave:Wn}),sn,!se&&a.createElement(Ir,{id:nn,open:$e,keyPath:Me},$)))};function Xt(t){var s=t.eventKey,m=t.children,b=Ue(s),C=Et(m,b),y=ne();a.useEffect(function(){if(y)return y.registerPath(s,b),function(){y.unregisterPath(s,b)}},[b]);var R;return y?R=C:R=a.createElement(Nr,t,C),a.createElement(Ee.Provider,{value:b},R)}var Tr=e("x/xZ");function Zt(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Tr.a)(t)){var m=t.nodeName.toLowerCase(),b=["input","select","textarea","button"].includes(m)||t.isContentEditable||m==="a"&&!!t.getAttribute("href"),C=t.getAttribute("tabindex"),y=Number(C),R=null;return C&&!Number.isNaN(y)?R=y:b&&R===null&&(R=0),b&&t.disabled&&(R=null),R!==null&&(R>=0||s&&R<0)}return!1}function kt(t){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=Object(pn.a)(t.querySelectorAll("*")).filter(function(b){return Zt(b,s)});return Zt(t,s)&&m.unshift(t),m}var mt=null;function pa(){mt=document.activeElement}function ha(){mt=null}function va(){if(mt)try{mt.focus()}catch(t){}}function ga(t,s){if(s.keyCode===9){var m=kt(t),b=m[s.shiftKey?0:m.length-1],C=b===document.activeElement||t===document.activeElement;if(C){var y=m[s.shiftKey?m.length-1:0];y.focus(),s.preventDefault()}}}var It=We.a.LEFT,Nt=We.a.RIGHT,Tt=We.a.UP,ft=We.a.DOWN,pt=We.a.ENTER,qt=We.a.ESC,_t=[Tt,ft,It,Nt];function Ar(t,s,m,b){var C,y,R,j,B="prev",$="next",x="children",Y="parent";if(t==="inline"&&b===pt)return{inlineTrigger:!0};var z=(C={},Object(me.a)(C,Tt,B),Object(me.a)(C,ft,$),C),ie=(y={},Object(me.a)(y,It,m?$:B),Object(me.a)(y,Nt,m?B:$),Object(me.a)(y,ft,x),Object(me.a)(y,pt,x),y),Q=(R={},Object(me.a)(R,Tt,B),Object(me.a)(R,ft,$),Object(me.a)(R,pt,x),Object(me.a)(R,qt,Y),Object(me.a)(R,It,m?x:Y),Object(me.a)(R,Nt,m?Y:x),R),X={inline:z,horizontal:ie,vertical:Q,inlineSub:z,horizontalSub:Q,verticalSub:Q},ue=(j=X["".concat(t).concat(s?"":"Sub")])===null||j===void 0?void 0:j[b];switch(ue){case B:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case Y:return{offset:-1,sibling:!1};case x:return{offset:1,sibling:!1};default:return null}}function Kr(t){for(var s=t;s;){if(s.getAttribute("data-menu-list"))return s;s=s.parentElement}return null}function Mr(t,s){for(var m=t||document.activeElement;m;){if(s.has(m))return m;m=m.parentElement}return null}function wr(t,s){var m=kt(t,!0);return m.filter(function(b){return s.has(b)})}function er(t,s,m){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var C=wr(t,s),y=C.length,R=C.findIndex(function(j){return m===j});return b<0?R===-1?R=y-1:R-=1:b>0&&(R+=1),R=(R+y)%y,C[R]}function Fr(t,s,m,b,C,y,R,j,B,$){var x=a.useRef(),Y=a.useRef();Y.current=s;var z=function(){Xe.a.cancel(x.current)};return a.useEffect(function(){return function(){z()}},[]),function(ie){var Q=ie.which;if([].concat(_t,[pt,qt]).includes(Q)){var X,ue,V,ee=function(){X=new Set,ue=new Map,V=new Map;var ye=y();return ye.forEach(function(ve){var Re=document.querySelector("[data-menu-id='".concat(Jt(b,ve),"']"));Re&&(X.add(Re),V.set(Re,ve),ue.set(ve,Re))}),X};ee();var ae=ue.get(s),k=Mr(ae,X),oe=V.get(k),_=Ar(t,R(oe,!0).length===1,m,Q);if(!_)return;_t.includes(Q)&&ie.preventDefault();var be=function(ye){if(ye){var ve=ye,Re=ye.querySelector("a");(Re==null?void 0:Re.getAttribute("href"))&&(ve=Re);var Le=V.get(ye);j(Le),z(),x.current=Object(Xe.a)(function(){Y.current===Le&&ve.focus()})}};if(_.sibling||!k){var te;!k||t==="inline"?te=C.current:te=Kr(k);var ce=er(te,X,k,_.offset);be(ce)}else if(_.inlineTrigger)B(oe);else if(_.offset>0)B(oe,!0),z(),x.current=Object(Xe.a)(function(){ee();var de=k.getAttribute("aria-controls"),ye=document.getElementById(de),ve=er(ye,X);be(ve)},5);else if(_.offset<0){var fe=R(oe,!0),se=fe[fe.length-2],H=ue.get(se);B(se,!1),be(H)}}$==null||$(ie)}}var Br=Math.random().toFixed(5).toString().slice(2),nr=0;function Wr(t){var s=Object(Sn.a)(t,{value:t}),m=Object(J.a)(s,2),b=m[0],C=m[1];return a.useEffect(function(){nr+=1;var y="".concat(Br,"-").concat(nr);C("rc-menu-uuid-".concat(y))},[]),b}var ya=e("p8sG");function Lr(t){Promise.resolve().then(t)}var At="__RC_UTIL_PATH_SPLIT__",tr=function(s){return s.join(At)},$r=function(s){return s.split(At)},Kt="rc-menu-more";function xr(){var t=a.useState({}),s=Object(J.a)(t,2),m=s[1],b=Object(a.useRef)(new Map),C=Object(a.useRef)(new Map),y=a.useState([]),R=Object(J.a)(y,2),j=R[0],B=R[1],$=Object(a.useRef)(0),x=Object(a.useCallback)(function(V,ee){var ae=tr(ee);C.current.set(ae,V),b.current.set(V,ae),$.current+=1;var k=$.current;Lr(function(){k===$.current&&m({})})},[]),Y=Object(a.useCallback)(function(V,ee){var ae=tr(ee);C.current.delete(ae),b.current.delete(V)},[]),z=Object(a.useCallback)(function(V){B(V)},[]),ie=Object(a.useCallback)(function(V,ee){var ae=b.current.get(V)||"",k=$r(ae);return ee&&j.includes(k[0])&&k.unshift(Kt),k},[j]),Q=Object(a.useCallback)(function(V,ee){return V.some(function(ae){var k=ie(ae,!0);return k.includes(ee)})},[ie]),X=function(){var ee=Object(pn.a)(b.current.keys());return j.length&&ee.push(Kt),ee},ue=Object(a.useCallback)(function(V){var ee="".concat(b.current.get(V)).concat(At),ae=new Set;return Object(pn.a)(C.current.keys()).forEach(function(k){k.startsWith(ee)&&ae.add(C.current.get(k))}),ae},[]);return{registerPath:x,unregisterPath:Y,refreshOverflowKeys:z,isSubPathKey:Q,getKeyPath:ie,getKeys:X,getSubPathKeys:ue}}var ht=[],Vr=function(s){var m,b,C=s.prefixCls,y=C===void 0?"rc-menu":C,R=s.style,j=s.className,B=s.tabIndex,$=B===void 0?0:B,x=s.children,Y=s.direction,z=s.id,ie=s.mode,Q=ie===void 0?"vertical":ie,X=s.inlineCollapsed,ue=s.disabled,V=s.disabledOverflow,ee=s.subMenuOpenDelay,ae=ee===void 0?.1:ee,k=s.subMenuCloseDelay,oe=k===void 0?.1:k,_=s.forceSubMenuRender,be=s.defaultOpenKeys,te=s.openKeys,ce=s.activeKey,fe=s.defaultActiveFirst,se=s.selectable,H=se===void 0?!0:se,de=s.multiple,ye=de===void 0?!1:de,ve=s.defaultSelectedKeys,Re=s.selectedKeys,Le=s.onSelect,Oe=s.onDeselect,Se=s.inlineIndent,we=Se===void 0?24:Se,Me=s.motion,Ne=s.defaultMotions,Ie=s.triggerSubMenuAction,xe=Ie===void 0?"hover":Ie,_e=s.builtinPlacements,Ve=s.itemIcon,Je=s.expandIcon,Qe=s.overflowedIndicator,$e=Qe===void 0?"...":Qe,Pn=s.getPopupContainer,rn=s.onClick,Ze=s.onOpenChange,ln=s.onKeyDown,yn=s.openAnimation,bn=s.openTransitionName,Ae=Object(Pe.a)(s,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=Et(x,ht),en=a.useState(!1),ke=Object(J.a)(en,2),Wn=ke[0],zn=ke[1],Ln=a.useRef(),an=Wr(z),Dn=Y==="rtl",un=a.useMemo(function(){return Q==="inline"&&X?["vertical",X]:[Q,!1]},[Q,X]),En=Object(J.a)(un,2),nn=En[0],sn=En[1],In=a.useState(0),mn=Object(J.a)(In,2),qe=mn[0],Ge=mn[1],Yn=qe>=He.length-1||nn!=="horizontal"||V,Hn=Object(Sn.a)(be,{value:te,postState:function(q){return q||ht}}),tt=Object(J.a)(Hn,2),On=tt[0],vn=tt[1],Gn=a.useState(On),Cn=Object(J.a)(Gn,2),fn=Cn[0],Qn=Cn[1],Nn=nn==="inline",Xn=a.useRef(!1);a.useEffect(function(){Nn&&Qn(On)},[On]),a.useEffect(function(){if(!Xn.current){Xn.current=!0;return}if(Nn)vn(fn);else{var re=[];vn(re),Ze==null||Ze(re)}},[Nn]);var dn=xr(),Tn=dn.registerPath,he=dn.unregisterPath,je=dn.refreshOverflowKeys,Fe=dn.isSubPathKey,tn=dn.getKeyPath,Zn=dn.getKeys,gt=dn.getSubPathKeys,Bt=a.useMemo(function(){return{registerPath:Tn,unregisterPath:he}},[Tn,he]),Wt=a.useMemo(function(){return{isSubPathKey:Fe}},[Fe]);a.useEffect(function(){je(Yn?ht:He.slice(qe+1).map(function(re){return re.key}))},[qe,Yn]);var Lt=Object(Sn.a)(ce||fe&&((m=He[0])===null||m===void 0?void 0:m.key),{value:ce}),rt=Object(J.a)(Lt,2),yt=rt[0],it=rt[1],bt=nt(function(re){it(re)}),$t=nt(function(){it(void 0)}),Ot=Object(Sn.a)(ve||[],{value:Re,postState:function(q){return Array.isArray(q)?q:q==null?ht:[q]}}),Ct=Object(J.a)(Ot,2),at=Ct[0],An=Ct[1],St=function(q){if(!!H){var Ce=q.key,ze=at.includes(Ce),on;ze?on=at.filter(function(qn){return qn!==Ce}):ye?on=[].concat(Object(pn.a)(at),[Ce]):on=[Ce],An(on);var Un=Object(ge.a)(Object(ge.a)({},q),{},{selectedKeys:on});ze?Oe==null||Oe(Un):Le==null||Le(Un)}},Rt=nt(function(re){rn==null||rn(Bn(re)),St(re)}),ot=nt(function(re,q){var Ce=On.filter(function(on){return on!==re});if(q)Ce.push(re);else if(nn!=="inline"){var ze=gt(re);Ce=Ce.filter(function(on){return!ze.has(on)})}d()(On,Ce)||(vn(Ce),Ze==null||Ze(Ce))}),kn=nt(Pn),lt=function(q,Ce){var ze=Ce!=null?Ce:!On.includes(q);ot(q,ze)},ut=Fr(nn,yt,Dn,an,Ln,Zn,tn,it,lt,ln);a.useEffect(function(){zn(!0)},[]);var jt=nn!=="horizontal"||V?He:He.map(function(re,q){return a.createElement(cn,{key:re.key,overflowDisabled:q>qe},re)}),Pt=a.createElement(u,Object(L.a)({id:z,ref:Ln,prefixCls:"".concat(y,"-overflow"),component:"ul",itemComponent:Dt,className:Te()(y,"".concat(y,"-root"),"".concat(y,"-").concat(nn),j,(b={},Object(me.a)(b,"".concat(y,"-inline-collapsed"),sn),Object(me.a)(b,"".concat(y,"-rtl"),Dn),b)),dir:Y,style:R,role:"menu",tabIndex:$,data:jt,renderRawItem:function(q){return q},renderRawRest:function(q){var Ce=q.length,ze=Ce?He.slice(-Ce):null;return a.createElement(Xt,{eventKey:Kt,title:$e,disabled:Yn,internalPopupClose:Ce===0},ze)},maxCount:nn!=="horizontal"||V?u.INVALIDATE:u.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(q){Ge(q)},onKeyDown:ut},Ae));return a.createElement(Ut.Provider,{value:an},a.createElement(cn,{prefixCls:y,mode:nn,openKeys:On,rtl:Dn,disabled:ue,motion:Wn?Me:null,defaultMotions:Wn?Ne:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:at,inlineIndent:we,subMenuOpenDelay:ae,subMenuCloseDelay:oe,forceSubMenuRender:_,builtinPlacements:_e,triggerSubMenuAction:xe,getPopupContainer:kn,itemIcon:Ve,expandIcon:Je,onItemClick:Rt,onOpenChange:ot},a.createElement(Ye.Provider,{value:Wt},Pt),a.createElement(pe.Provider,{value:Bt},He)))},Ur=Vr,Jr=function(s){var m=s.className,b=s.title,C=s.eventKey,y=s.children,R=Object(Pe.a)(s,["className","title","eventKey","children"]),j=a.useContext(De),B=j.prefixCls,$="".concat(B,"-item-group");return a.createElement("li",Object(L.a)({},R,{onClick:function(Y){return Y.stopPropagation()},className:Te()($,m)}),a.createElement("div",{className:"".concat($,"-title"),title:typeof b=="string"?b:void 0},b),a.createElement("ul",{className:"".concat($,"-list")},y))};function zr(t){var s=t.children,m=Object(Pe.a)(t,["children"]),b=Ue(m.eventKey),C=Et(s,b),y=ne();return y?C:a.createElement(Jr,m,C)}function Yr(t){var s=t.className,m=t.style,b=a.useContext(De),C=b.prefixCls,y=ne();return y?null:a.createElement("li",{className:Te()("".concat(C,"-item-divider"),s),style:m})}var st=Ur;st.Item=Dt,st.SubMenu=Xt,st.ItemGroup=zr,st.Divider=Yr;var Hr=st,Gr=e("eDIo");function Qr(t,s){var m=t.prefixCls,b=t.editable,C=t.locale,y=t.style;return!b||b.showAdd===!1?null:a.createElement("button",{ref:s,type:"button",className:"".concat(m,"-nav-add"),style:y,"aria-label":(C==null?void 0:C.addAriaLabel)||"Add tab",onClick:function(j){b.onEdit("add",{event:j})}},b.addIcon||"+")}var rr=a.forwardRef(Qr);function Xr(t,s){var m=t.prefixCls,b=t.id,C=t.tabs,y=t.locale,R=t.mobile,j=t.moreIcon,B=j===void 0?"More":j,$=t.moreTransitionName,x=t.style,Y=t.className,z=t.editable,ie=t.tabBarGutter,Q=t.rtl,X=t.onTabClick,ue=Object(a.useState)(!1),V=Object(J.a)(ue,2),ee=V[0],ae=V[1],k=Object(a.useState)(null),oe=Object(J.a)(k,2),_=oe[0],be=oe[1],te="".concat(b,"-more-popup"),ce="".concat(m,"-dropdown"),fe=_!==null?"".concat(te,"-").concat(_):null,se=y==null?void 0:y.dropdownAriaLabel,H=a.createElement(Hr,{onClick:function(Se){var we=Se.key,Me=Se.domEvent;X(we,Me),ae(!1)},id:te,tabIndex:-1,role:"listbox","aria-activedescendant":fe,selectedKeys:[_],"aria-label":se!==void 0?se:"expanded dropdown"},C.map(function(Oe){return a.createElement(Dt,{key:Oe.key,id:"".concat(te,"-").concat(Oe.key),role:"option","aria-controls":b&&"".concat(b,"-panel-").concat(Oe.key),disabled:Oe.disabled},Oe.tab)}));function de(Oe){for(var Se=C.filter(function(xe){return!xe.disabled}),we=Se.findIndex(function(xe){return xe.key===_})||0,Me=Se.length,Ne=0;Ne<Me;Ne+=1){we=(we+Oe+Me)%Me;var Ie=Se[we];if(!Ie.disabled){be(Ie.key);return}}}function ye(Oe){var Se=Oe.which;if(!ee){[We.a.DOWN,We.a.SPACE,We.a.ENTER].includes(Se)&&(ae(!0),Oe.preventDefault());return}switch(Se){case We.a.UP:de(-1),Oe.preventDefault();break;case We.a.DOWN:de(1),Oe.preventDefault();break;case We.a.ESC:ae(!1);break;case We.a.SPACE:case We.a.ENTER:_!==null&&X(_,Oe);break}}Object(a.useEffect)(function(){var Oe=document.getElementById(fe);Oe&&Oe.scrollIntoView&&Oe.scrollIntoView(!1)},[_]),Object(a.useEffect)(function(){ee||be(null)},[ee]);var ve=Object(me.a)({},Q?"marginLeft":"marginRight",ie);C.length||(ve.visibility="hidden",ve.order=1);var Re=Te()(Object(me.a)({},"".concat(ce,"-rtl"),Q)),Le=R?null:a.createElement(Gr.default,{prefixCls:ce,overlay:H,trigger:["hover"],visible:ee,transitionName:$,onVisibleChange:ae,overlayClassName:Re,mouseEnterDelay:.1,mouseLeaveDelay:.1},a.createElement("button",{type:"button",className:"".concat(m,"-nav-more"),style:ve,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":te,id:"".concat(b,"-more"),"aria-expanded":ee,onKeyDown:ye},B));return a.createElement("div",{className:Te()("".concat(m,"-nav-operations"),Y),style:x,ref:s},Le,a.createElement(rr,{prefixCls:m,locale:y,editable:z}))}var Zr=a.forwardRef(Xr),Mt=Object(a.createContext)(null),kr=.1,ar=.01,vt=20,sr=Math.pow(.995,vt);function qr(t,s){var m=Object(a.useState)(),b=Object(J.a)(m,2),C=b[0],y=b[1],R=Object(a.useState)(0),j=Object(J.a)(R,2),B=j[0],$=j[1],x=Object(a.useState)(0),Y=Object(J.a)(x,2),z=Y[0],ie=Y[1],Q=Object(a.useState)(),X=Object(J.a)(Q,2),ue=X[0],V=X[1],ee=Object(a.useRef)();function ae(ce){var fe=ce.touches[0],se=fe.screenX,H=fe.screenY;y({x:se,y:H}),window.clearInterval(ee.current)}function k(ce){if(!!C){ce.preventDefault();var fe=ce.touches[0],se=fe.screenX,H=fe.screenY;y({x:se,y:H});var de=se-C.x,ye=H-C.y;s(de,ye);var ve=Date.now();$(ve),ie(ve-B),V({x:de,y:ye})}}function oe(){if(!!C&&(y(null),V(null),ue)){var ce=ue.x/z,fe=ue.y/z,se=Math.abs(ce),H=Math.abs(fe);if(Math.max(se,H)<kr)return;var de=ce,ye=fe;ee.current=window.setInterval(function(){if(Math.abs(de)<ar&&Math.abs(ye)<ar){window.clearInterval(ee.current);return}de*=sr,ye*=sr,s(de*vt,ye*vt)},vt)}}var _=Object(a.useRef)();function be(ce){var fe=ce.deltaX,se=ce.deltaY,H=0,de=Math.abs(fe),ye=Math.abs(se);de===ye?H=_.current==="x"?fe:se:de>ye?(H=fe,_.current="x"):(H=se,_.current="y"),s(-H,-H)&&ce.preventDefault()}var te=Object(a.useRef)(null);te.current={onTouchStart:ae,onTouchMove:k,onTouchEnd:oe,onWheel:be},a.useEffect(function(){function ce(de){te.current.onTouchStart(de)}function fe(de){te.current.onTouchMove(de)}function se(de){te.current.onTouchEnd(de)}function H(de){te.current.onWheel(de)}return document.addEventListener("touchmove",fe,{passive:!1}),document.addEventListener("touchend",se,{passive:!1}),t.current.addEventListener("touchstart",ce,{passive:!1}),t.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",fe),document.removeEventListener("touchend",se)}},[])}function _r(){var t=Object(a.useRef)(new Map);function s(b){return t.current.has(b)||t.current.set(b,a.createRef()),t.current.get(b)}function m(b){t.current.delete(b)}return[s,m]}function ir(t,s){var m=a.useRef(t),b=a.useState({}),C=Object(J.a)(b,2),y=C[1];function R(j){var B=typeof j=="function"?j(m.current):j;B!==m.current&&s(B,m.current),m.current=B,y({})}return[m.current,R]}var or=function(s){var m=s.position,b=s.prefixCls,C=s.extra;if(!C)return null;var y,R=C;return m==="right"&&(y=R.right||!R.left&&R||null),m==="left"&&(y=R.left||null),y?a.createElement("div",{className:"".concat(b,"-extra-content")},y):null};function ea(t,s){var m,b=a.useContext(Mt),C=b.prefixCls,y=b.tabs,R=t.className,j=t.style,B=t.id,$=t.animated,x=t.activeKey,Y=t.rtl,z=t.extra,ie=t.editable,Q=t.locale,X=t.tabPosition,ue=t.tabBarGutter,V=t.children,ee=t.onTabClick,ae=t.onTabScroll,k=Object(a.useRef)(),oe=Object(a.useRef)(),_=Object(a.useRef)(),be=Object(a.useRef)(),te=_r(),ce=Object(J.a)(te,2),fe=ce[0],se=ce[1],H=X==="top"||X==="bottom",de=ir(0,function(re,q){H&&ae&&ae({direction:re>q?"left":"right"})}),ye=Object(J.a)(de,2),ve=ye[0],Re=ye[1],Le=ir(0,function(re,q){!H&&ae&&ae({direction:re>q?"top":"bottom"})}),Oe=Object(J.a)(Le,2),Se=Oe[0],we=Oe[1],Me=Object(a.useState)(0),Ne=Object(J.a)(Me,2),Ie=Ne[0],xe=Ne[1],_e=Object(a.useState)(0),Ve=Object(J.a)(_e,2),Je=Ve[0],Qe=Ve[1],$e=Object(a.useState)(0),Pn=Object(J.a)($e,2),rn=Pn[0],Ze=Pn[1],ln=Object(a.useState)(0),yn=Object(J.a)(ln,2),bn=yn[0],Ae=yn[1],He=Object(a.useState)(null),en=Object(J.a)(He,2),ke=en[0],Wn=en[1],zn=Object(a.useState)(null),Ln=Object(J.a)(zn,2),an=Ln[0],Dn=Ln[1],un=Object(a.useState)(0),En=Object(J.a)(un,2),nn=En[0],sn=En[1],In=Object(a.useState)(0),mn=Object(J.a)(In,2),qe=mn[0],Ge=mn[1],Yn=Rn(new Map),Hn=Object(J.a)(Yn,2),tt=Hn[0],On=Hn[1],vn=ct(y,tt,Ie),Gn="".concat(C,"-nav-operations-hidden"),Cn=0,fn=0;H?Y?(Cn=0,fn=Math.max(0,Ie-ke)):(Cn=Math.min(0,ke-Ie),fn=0):(Cn=Math.min(0,an-Je),fn=0);function Qn(re){return re<Cn?Cn:re>fn?fn:re}var Nn=Object(a.useRef)(),Xn=Object(a.useState)(),dn=Object(J.a)(Xn,2),Tn=dn[0],he=dn[1];function je(){he(Date.now())}function Fe(){window.clearTimeout(Nn.current)}qr(k,function(re,q){function Ce(ze,on){ze(function(Un){var qn=Qn(Un+on);return qn})}if(H){if(ke>=Ie)return!1;Ce(Re,re)}else{if(an>=Je)return!1;Ce(we,q)}return Fe(),je(),!0}),Object(a.useEffect)(function(){return Fe(),Tn&&(Nn.current=window.setTimeout(function(){he(0)},100)),Fe},[Tn]);function tn(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x,q=vn.get(re)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ce=ve;Y?q.right<ve?Ce=q.right:q.right+q.width>ve+ke&&(Ce=q.right+q.width-ke):q.left<-ve?Ce=-q.left:q.left+q.width>-ve+ke&&(Ce=-(q.left+q.width-ke)),we(0),Re(Qn(Ce))}else{var ze=Se;q.top<-Se?ze=-q.top:q.top+q.height>-Se+an&&(ze=-(q.top+q.height-an)),Re(0),we(Qn(ze))}}var Zn=I(vn,{width:ke,height:an,left:ve,top:Se},{width:rn,height:bn},{width:nn,height:qe},Object(ge.a)(Object(ge.a)({},t),{},{tabs:y})),gt=Object(J.a)(Zn,2),Bt=gt[0],Wt=gt[1],Lt=y.map(function(re){var q=re.key;return a.createElement(xn,{id:B,prefixCls:C,key:q,rtl:Y,tab:re,closable:re.closable,editable:ie,active:q===x,tabPosition:X,tabBarGutter:ue,renderWrapper:V,removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:fe(q),onClick:function(ze){ee(q,ze)},onRemove:function(){se(q)},onFocus:function(){tn(q),je(),Y||(k.current.scrollLeft=0),k.current.scrollTop=0}})}),rt=Fn(function(){var re,q,Ce,ze,on,Un,qn,xt,Vt,la=((re=k.current)===null||re===void 0?void 0:re.offsetWidth)||0,ua=((q=k.current)===null||q===void 0?void 0:q.offsetHeight)||0,mr=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fr=((ze=be.current)===null||ze===void 0?void 0:ze.offsetHeight)||0,da=((on=_.current)===null||on===void 0?void 0:on.offsetWidth)||0,ca=((Un=_.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Wn(la),Dn(ua),sn(mr),Ge(fr);var pr=(((qn=oe.current)===null||qn===void 0?void 0:qn.offsetWidth)||0)-mr,hr=(((xt=oe.current)===null||xt===void 0?void 0:xt.offsetHeight)||0)-fr;xe(pr),Qe(hr);var vr=(Vt=_.current)===null||Vt===void 0?void 0:Vt.className.includes(Gn);Ze(pr-(vr?0:da)),Ae(hr-(vr?0:ca)),On(function(){var gr=new Map;return y.forEach(function(ma){var yr=ma.key,dt=fe(yr).current;dt&&gr.set(yr,{width:dt.offsetWidth,height:dt.offsetHeight,left:dt.offsetLeft,top:dt.offsetTop})}),gr})}),yt=y.slice(0,Bt),it=y.slice(Wt+1),bt=[].concat(Object(pn.a)(yt),Object(pn.a)(it)),$t=Object(a.useState)(),Ot=Object(J.a)($t,2),Ct=Ot[0],at=Ot[1],An=vn.get(x),St=Object(a.useRef)();function Rt(){Xe.a.cancel(St.current)}Object(a.useEffect)(function(){var re={};return An&&(H?(Y?re.right=An.right:re.left=An.left,re.width=An.width):(re.top=An.top,re.height=An.height)),Rt(),St.current=Object(Xe.a)(function(){at(re)}),Rt},[An,H,Y]),Object(a.useEffect)(function(){tn()},[x,An,vn,H]),Object(a.useEffect)(function(){rt()},[Y,ue,x,y.map(function(re){return re.key}).join("_")]);var ot=!!bt.length,kn="".concat(C,"-nav-wrap"),lt,ut,jt,Pt;return H?Y?(ut=ve>0,lt=ve+ke<Ie):(lt=ve<0,ut=-ve+ke<Ie):(jt=Se<0,Pt=-Se+an<Je),a.createElement("div",{ref:s,role:"tablist",className:Te()("".concat(C,"-nav"),R),style:j,onKeyDown:function(){je()}},a.createElement(or,{position:"left",extra:z,prefixCls:C}),a.createElement($n.default,{onResize:rt},a.createElement("div",{className:Te()(kn,(m={},Object(me.a)(m,"".concat(kn,"-ping-left"),lt),Object(me.a)(m,"".concat(kn,"-ping-right"),ut),Object(me.a)(m,"".concat(kn,"-ping-top"),jt),Object(me.a)(m,"".concat(kn,"-ping-bottom"),Pt),m)),ref:k},a.createElement($n.default,{onResize:rt},a.createElement("div",{ref:oe,className:"".concat(C,"-nav-list"),style:{transform:"translate(".concat(ve,"px, ").concat(Se,"px)"),transition:Tn?"none":void 0}},Lt,a.createElement(rr,{ref:be,prefixCls:C,locale:Q,editable:ie,style:{visibility:ot?"hidden":null}}),a.createElement("div",{className:Te()("".concat(C,"-ink-bar"),Object(me.a)({},"".concat(C,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),a.createElement(Zr,Object(L.a)({},t,{ref:_,prefixCls:C,tabs:bt,className:!ot&&Gn})),a.createElement(or,{position:"right",extra:z,prefixCls:C}))}var lr=a.forwardRef(ea);function na(t){var s=t.id,m=t.activeKey,b=t.animated,C=t.tabPosition,y=t.rtl,R=t.destroyInactiveTabPane,j=a.useContext(Mt),B=j.prefixCls,$=j.tabs,x=b.tabPane,Y=$.findIndex(function(z){return z.key===m});return a.createElement("div",{className:Te()("".concat(B,"-content-holder"))},a.createElement("div",{className:Te()("".concat(B,"-content"),"".concat(B,"-content-").concat(C),Object(me.a)({},"".concat(B,"-content-animated"),x)),style:Y&&x?Object(me.a)({},y?"marginRight":"marginLeft","-".concat(Y,"00%")):null},$.map(function(z){return a.cloneElement(z.node,{key:z.key,prefixCls:B,tabKey:z.key,id:s,animated:x,active:z.key===m,destroyInactiveTabPane:R})})))}function ur(t){var s=t.prefixCls,m=t.forceRender,b=t.className,C=t.style,y=t.id,R=t.active,j=t.animated,B=t.destroyInactiveTabPane,$=t.tabKey,x=t.children,Y=a.useState(m),z=Object(J.a)(Y,2),ie=z[0],Q=z[1];a.useEffect(function(){R?Q(!0):B&&Q(!1)},[R,B]);var X={};return R||(j?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),a.createElement("div",{id:y&&"".concat(y,"-panel-").concat($),role:"tabpanel",tabIndex:R?0:-1,"aria-labelledby":y&&"".concat(y,"-tab-").concat($),"aria-hidden":!R,style:Object(ge.a)(Object(ge.a)({},X),C),className:Te()("".concat(s,"-tabpane"),R&&"".concat(s,"-tabpane-active"),b)},(R||ie||m)&&x)}var dr=0;function ta(t){return Object(Mn.a)(t).map(function(s){if(a.isValidElement(s)){var m=s.key!==void 0?String(s.key):void 0;return Object(ge.a)(Object(ge.a)({key:m},s.props),{},{node:s})}return null}).filter(function(s){return s})}function ra(t,s){var m,b=t.id,C=t.prefixCls,y=C===void 0?"rc-tabs":C,R=t.className,j=t.children,B=t.direction,$=t.activeKey,x=t.defaultActiveKey,Y=t.editable,z=t.animated,ie=z===void 0?{inkBar:!0,tabPane:!1}:z,Q=t.tabPosition,X=Q===void 0?"top":Q,ue=t.tabBarGutter,V=t.tabBarStyle,ee=t.tabBarExtraContent,ae=t.locale,k=t.moreIcon,oe=t.moreTransitionName,_=t.destroyInactiveTabPane,be=t.renderTabBar,te=t.onChange,ce=t.onTabClick,fe=t.onTabScroll,se=Object(Pe.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=ta(j),de=B==="rtl",ye;ie===!1?ye={inkBar:!1,tabPane:!1}:ie===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ge.a)({inkBar:!0,tabPane:!1},Object(Be.a)(ie)==="object"?ie:{});var ve=Object(a.useState)(!1),Re=Object(J.a)(ve,2),Le=Re[0],Oe=Re[1];Object(a.useEffect)(function(){Oe(Object(wn.a)())},[]);var Se=Object(Sn.a)(function(){var Ae;return(Ae=H[0])===null||Ae===void 0?void 0:Ae.key},{value:$,defaultValue:x}),we=Object(J.a)(Se,2),Me=we[0],Ne=we[1],Ie=Object(a.useState)(function(){return H.findIndex(function(Ae){return Ae.key===Me})}),xe=Object(J.a)(Ie,2),_e=xe[0],Ve=xe[1];Object(a.useEffect)(function(){var Ae=H.findIndex(function(en){return en.key===Me});if(Ae===-1){var He;Ae=Math.max(0,Math.min(_e,H.length-1)),Ne((He=H[Ae])===null||He===void 0?void 0:He.key)}Ve(Ae)},[H.map(function(Ae){return Ae.key}).join("_"),Me,_e]);var Je=Object(Sn.a)(null,{value:b}),Qe=Object(J.a)(Je,2),$e=Qe[0],Pn=Qe[1],rn=X;Le&&!["left","right"].includes(X)&&(rn="top"),Object(a.useEffect)(function(){b||(Pn("rc-tabs-".concat(dr)),dr+=1)},[]);function Ze(Ae,He){ce==null||ce(Ae,He),Ne(Ae),te==null||te(Ae)}var ln={id:$e,activeKey:Me,animated:ye,tabPosition:rn,rtl:de,mobile:Le},yn,bn=Object(ge.a)(Object(ge.a)({},ln),{},{editable:Y,locale:ae,moreIcon:k,moreTransitionName:oe,tabBarGutter:ue,onTabClick:Ze,onTabScroll:fe,extra:ee,style:V,panes:j});return be?yn=be(bn,lr):yn=a.createElement(lr,bn),a.createElement(Mt.Provider,{value:{tabs:H,prefixCls:y}},a.createElement("div",Object(L.a)({ref:s,id:b,className:Te()(y,"".concat(y,"-").concat(rn),(m={},Object(me.a)(m,"".concat(y,"-mobile"),Le),Object(me.a)(m,"".concat(y,"-editable"),Y),Object(me.a)(m,"".concat(y,"-rtl"),de),m),R)},se),yn,a.createElement(na,Object(L.a)({destroyInactiveTabPane:_},ln,{animated:ye}))))}var cr=a.forwardRef(ra);cr.TabPane=ur;var aa=cr,sa=aa,wt=e("MZF8"),hn=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function Ft(t,s){var m,b=(m=t.match(/\.(\w+)$/))===null||m===void 0?void 0:m[1];return b||(b=s.tsx?"tsx":"jsx"),b}var oa=t=>{var s,m,b,C=Object(a.useRef)(),y=Object(a.useContext)(hn.context),R=y.locale,j=Object(hn.useLocaleProps)(R,t),B=Object(hn.useDemoUrl)(j.identifier),$=j.demoUrl||B,x=(wt.a===null||wt.a===void 0?void 0:wt.a.location.hash)==="#".concat(j.identifier),Y=Object.keys(j.sources).length===1,z=Object(hn.useCodeSandbox)((s=j.hideActions)!==null&&s!==void 0&&s.includes("CSB")?null:j),ie=Object(hn.useRiddle)((m=j.hideActions)!==null&&m!==void 0&&m.includes("RIDDLE")?null:j),Q=Object(hn.useMotions)(j.motions||[],C.current),X=Object(U.default)(Q,2),ue=X[0],V=X[1],ee=Object(hn.useCopy)(),ae=Object(U.default)(ee,2),k=ae[0],oe=ae[1],_=Object(a.useState)("_"),be=Object(U.default)(_,2),te=be[0],ce=be[1],fe=Object(a.useState)(Ft(te,j.sources[te])),se=Object(U.default)(fe,2),H=se[0],de=se[1],ye=Object(a.useState)(Boolean(j.defaultShowCode)),ve=Object(U.default)(ye,2),Re=ve[0],Le=ve[1],Oe=Object(a.useState)(Math.random()),Se=Object(U.default)(Oe,2),we=Se[0],Me=Se[1],Ne=j.sources[te][H]||j.sources[te].content,Ie=Object(hn.useTSPlaygroundUrl)(R,Ne),xe=Object(a.useRef)(),_e=Object(hn.usePrefersColor)(),Ve=Object(U.default)(_e,1),Je=Ve[0];Object(a.useEffect)(()=>{Me(Math.random())},[Je]);function Qe($e){ce($e),de(Ft($e,j.sources[$e]))}return S.a.createElement("div",{style:j.style,className:[j.className,"__dumi-default-previewer",x?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:j.identifier,"data-debug":j.debug||void 0,"data-iframe":j.iframe||void 0},j.iframe&&S.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),S.a.createElement("div",{ref:C,className:"__dumi-default-previewer-demo",style:{transform:j.transform?"translate(0, 0)":void 0,padding:j.compact||j.iframe&&j.compact!==!1?"0":void 0,background:j.background}},j.iframe?S.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(j.iframe).replace(/(\d)$/,"$1px")},key:we,src:$,ref:xe}):j.children),S.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":j.title},j.title&&S.a.createElement(hn.AnchorLink,{to:"#".concat(j.identifier)},j.title),j.description&&S.a.createElement("div",{dangerouslySetInnerHTML:{__html:j.description}})),S.a.createElement("div",{className:"__dumi-default-previewer-actions"},z&&S.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:z}),ie&&S.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:ie}),j.motions&&S.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:V,onClick:()=>ue()}),j.iframe&&S.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Me(Math.random())}),!((b=j.hideActions)!==null&&b!==void 0&&b.includes("EXTERNAL"))&&S.a.createElement(hn.Link,{target:"_blank",to:$},S.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),S.a.createElement("span",null),S.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":oe,onClick:()=>k(Ne)}),H==="tsx"&&Re&&S.a.createElement(hn.Link,{target:"_blank",to:Ie},S.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),S.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Re?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Le(!Re)})),Re&&S.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!Y&&S.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:te,onChange:Qe},Object.keys(j.sources).map($e=>S.a.createElement(ur,{tab:$e==="_"?"index.".concat(Ft($e,j.sources[$e])):$e,key:$e}))),S.a.createElement("div",{className:"__dumi-default-previewer-source"},S.a.createElement(ia.a,{code:Ne,lang:H,showCopy:!1}))))},Oa=gn.default=oa},"80pN":function(Kn,gn,e){"use strict";(function(U){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var a=e("MgzW"),S=e("q1tI"),L=e("i8i4"),me=e("QCnb");function J(f){for(var M="https://reactjs.org/docs/error-decoder.html?invariant="+f,F=1;F<arguments.length;F++)M+="&args[]="+encodeURIComponent(arguments[F]);return"Minified React error #"+f+"; visit "+M+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Be=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Be.hasOwnProperty("ReactCurrentDispatcher")||(Be.ReactCurrentDispatcher={current:null}),Be.hasOwnProperty("ReactCurrentBatchConfig")||(Be.ReactCurrentBatchConfig={suspense:null});function Pe(f){var M=f,F=f;if(f.alternate)for(;M.return;)M=M.return;else{f=M;do M=f,(M.effectTag&1026)!=0&&(F=M.return),f=M.return;while(f)}return M.tag===3?F:null}function ge(f){if(Pe(f)!==f)throw Error(J(188))}function Jn(f){var M=f.alternate;if(!M){if(M=Pe(f),M===null)throw Error(J(188));return M!==f?null:f}for(var F=f,pe=M;;){var ne=F.return;if(ne===null)break;var Ee=ne.alternate;if(Ee===null){if(pe=ne.return,pe!==null){F=pe;continue}break}if(ne.child===Ee.child){for(Ee=ne.child;Ee;){if(Ee===F)return ge(ne),f;if(Ee===pe)return ge(ne),M;Ee=Ee.sibling}throw Error(J(188))}if(F.return!==pe.return)F=ne,pe=Ee;else{for(var Ue=!1,Ye=ne.child;Ye;){if(Ye===F){Ue=!0,F=ne,pe=Ee;break}if(Ye===pe){Ue=!0,pe=ne,F=Ee;break}Ye=Ye.sibling}if(!Ue){for(Ye=Ee.child;Ye;){if(Ye===F){Ue=!0,F=Ee,pe=ne;break}if(Ye===pe){Ue=!0,pe=Ee,F=ne;break}Ye=Ye.sibling}if(!Ue)throw Error(J(189))}}if(F.alternate!==pe)throw Error(J(190))}if(F.tag!==3)throw Error(J(188));return F.stateNode.current===F?f:M}function Te(){return!0}function Mn(){return!1}function wn(f,M,F,pe){this.dispatchConfig=f,this._targetInst=M,this.nativeEvent=F,f=this.constructor.Interface;for(var ne in f)f.hasOwnProperty(ne)&&((M=f[ne])?this[ne]=M(F):ne==="target"?this.target=pe:this[ne]=F[ne]);return this.isDefaultPrevented=(F.defaultPrevented!=null?F.defaultPrevented:F.returnValue===!1)?Te:Mn,this.isPropagationStopped=Mn,this}a(wn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var f=this.nativeEvent;f&&(f.preventDefault?f.preventDefault():typeof f.returnValue!="unknown"&&(f.returnValue=!1),this.isDefaultPrevented=Te)},stopPropagation:function(){var f=this.nativeEvent;f&&(f.stopPropagation?f.stopPropagation():typeof f.cancelBubble!="unknown"&&(f.cancelBubble=!0),this.isPropagationStopped=Te)},persist:function(){this.isPersistent=Te},isPersistent:Mn,destructor:function(){var f=this.constructor.Interface,M;for(M in f)this[M]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Mn,this._dispatchInstances=this._dispatchListeners=null}}),wn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(f){return f.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},wn.extend=function(f){function M(){}function F(){return pe.apply(this,arguments)}var pe=this;M.prototype=pe.prototype;var ne=new M;return a(ne,F.prototype),F.prototype=ne,F.prototype.constructor=F,F.Interface=a({},pe.Interface,f),F.extend=pe.extend,Xe(F),F},Xe(wn);function Sn(f,M,F,pe){if(this.eventPool.length){var ne=this.eventPool.pop();return this.call(ne,f,M,F,pe),ne}return new this(f,M,F,pe)}function pn(f){if(!(f instanceof this))throw Error(J(279));f.destructor(),10>this.eventPool.length&&this.eventPool.push(f)}function Xe(f){f.eventPool=[],f.getPooled=Sn,f.release=pn}var $n=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Fn(f,M){var F={};return F[f.toLowerCase()]=M.toLowerCase(),F["Webkit"+f]="webkit"+M,F["Moz"+f]="moz"+M,F}var Rn={animationend:Fn("Animation","AnimationEnd"),animationiteration:Fn("Animation","AnimationIteration"),animationstart:Fn("Animation","AnimationStart"),transitionend:Fn("Transition","TransitionEnd")},We={},_n={};$n&&(_n=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function xn(f){if(We[f])return We[f];if(!Rn[f])return f;var M=Rn[f],F;for(F in M)if(M.hasOwnProperty(F)&&F in _n)return We[f]=M[F];return f}var et=xn("animationend"),ct=xn("animationiteration"),E=xn("animationstart"),I=xn("transitionend"),D=null;function d(f){if(D===null)try{var M=("require"+Math.random()).slice(0,7);D=(U&&U[M])("timers").setImmediate}catch(F){D=function(pe){var ne=new MessageChannel;ne.port1.onmessage=pe,ne.port2.postMessage(void 0)}}return D(f)}var o=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,p=o[11],g=o[12],O=L.unstable_batchedUpdates,r=Be.IsSomeRendererActing,l=typeof me.unstable_flushAllWithoutAsserting=="function",i=me.unstable_flushAllWithoutAsserting||function(){for(var f=!1;p();)f=!0;return f};function w(f){try{i(),d(function(){i()?w(f):f()})}catch(M){f(M)}}var T=0,P=!1,c=L.findDOMNode,A=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,h=A[0],n=A[4],v=A[5],u=A[6],N=A[7],K=A[8],W=A[9],Z=A[10];function G(){}function le(f,M){if(!f)return[];if(f=Jn(f),!f)return[];for(var F=f,pe=[];;){if(F.tag===5||F.tag===6||F.tag===1||F.tag===0){var ne=F.stateNode;M(ne)&&pe.push(ne)}if(F.child)F.child.return=F,F=F.child;else{if(F===f)return pe;for(;!F.sibling;){if(!F.return||F.return===f)return pe;F=F.return}F.sibling.return=F.return,F=F.sibling}}}function De(f,M){if(f&&!f._reactInternalFiber){var F=""+f;throw f=Array.isArray(f)?"an array":f&&f.nodeType===1&&f.tagName?"a DOM node":F==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":F,Error(J(286,M,f))}}var Ke={renderIntoDocument:function(f){var M=document.createElement("div");return L.render(f,M)},isElement:function(f){return S.isValidElement(f)},isElementOfType:function(f,M){return S.isValidElement(f)&&f.type===M},isDOMComponent:function(f){return!(!f||f.nodeType!==1||!f.tagName)},isDOMComponentElement:function(f){return!!(f&&S.isValidElement(f)&&f.tagName)},isCompositeComponent:function(f){return Ke.isDOMComponent(f)?!1:f!=null&&typeof f.render=="function"&&typeof f.setState=="function"},isCompositeComponentWithType:function(f,M){return Ke.isCompositeComponent(f)?f._reactInternalFiber.type===M:!1},findAllInRenderedTree:function(f,M){return De(f,"findAllInRenderedTree"),f?le(f._reactInternalFiber,M):[]},scryRenderedDOMComponentsWithClass:function(f,M){return De(f,"scryRenderedDOMComponentsWithClass"),Ke.findAllInRenderedTree(f,function(F){if(Ke.isDOMComponent(F)){var pe=F.className;typeof pe!="string"&&(pe=F.getAttribute("class")||"");var ne=pe.split(/\s+/);if(!Array.isArray(M)){if(M===void 0)throw Error(J(11));M=M.split(/\s+/)}return M.every(function(Ee){return ne.indexOf(Ee)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(f,M){if(De(f,"findRenderedDOMComponentWithClass"),f=Ke.scryRenderedDOMComponentsWithClass(f,M),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for class:"+M);return f[0]},scryRenderedDOMComponentsWithTag:function(f,M){return De(f,"scryRenderedDOMComponentsWithTag"),Ke.findAllInRenderedTree(f,function(F){return Ke.isDOMComponent(F)&&F.tagName.toUpperCase()===M.toUpperCase()})},findRenderedDOMComponentWithTag:function(f,M){if(De(f,"findRenderedDOMComponentWithTag"),f=Ke.scryRenderedDOMComponentsWithTag(f,M),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for tag:"+M);return f[0]},scryRenderedComponentsWithType:function(f,M){return De(f,"scryRenderedComponentsWithType"),Ke.findAllInRenderedTree(f,function(F){return Ke.isCompositeComponentWithType(F,M)})},findRenderedComponentWithType:function(f,M){if(De(f,"findRenderedComponentWithType"),f=Ke.scryRenderedComponentsWithType(f,M),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for componentType:"+M);return f[0]},mockComponent:function(f,M){return M=M||f.mockTagName||"div",f.prototype.render.mockImplementation(function(){return S.createElement(M,null,this.props.children)}),this},nativeTouchData:function(f,M){return{touches:[{pageX:f,pageY:M}]}},Simulate:null,SimulateNative:{},act:function(f){function M(){T--,r.current=F,g.current=pe}P===!1&&(P=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),T++;var F=r.current,pe=g.current;r.current=!0,g.current=!0;try{var ne=O(f)}catch(Ee){throw M(),Ee}if(ne!==null&&typeof ne=="object"&&typeof ne.then=="function")return{then:function(Ee,Ue){ne.then(function(){1<T||l===!0&&F===!0?(M(),Ee()):w(function(Ye){M(),Ye?Ue(Ye):Ee()})},function(Ye){M(),Ue(Ye)})}};try{T!==1||l!==!1&&F!==!1||i(),M()}catch(Ee){throw M(),Ee}return{then:function(Ee){Ee()}}}};function cn(f){return function(M,F){if(S.isValidElement(M))throw Error(J(228));if(Ke.isCompositeComponent(M))throw Error(J(229));var pe=n[f],ne=new G;ne.target=M,ne.type=f.toLowerCase();var Ee=h(M),Ue=new wn(pe,Ee,ne,M);Ue.persist(),a(Ue,F),pe.phasedRegistrationNames?v(Ue):u(Ue),L.unstable_batchedUpdates(function(){N(M),Z(Ue)}),K()}}Ke.Simulate={};for(var jn in n)Ke.Simulate[jn]=cn(jn);function Bn(f,M){return function(F,pe){var ne=new G(f);a(ne,pe),Ke.isDOMComponent(F)?(F=c(F),ne.target=F,W(M,1,document,ne)):F.tagName&&(ne.target=F,W(M,1,document,ne))}}[["abort","abort"],[et,"animationEnd"],[ct,"animationIteration"],[E,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[I,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(f){var M=f[1];Ke.SimulateNative[M]=Bn(M,f[0])}),U.exports=Ke.default||Ke}).call(this,e("hOG+")(Kn))},JjdP:function(Kn,gn,e){"use strict";e.r(gn);var U=e("9og8"),a=e("WmNS"),S=e.n(a),L=e("LtsZ"),me=`import React, { useRef } from 'react';
import { CardList, Search, TableContainer, useTable } from 'card-render';
import {
  PlusOutlined,
  EllipsisOutlined,
  SettingOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import request from 'umi-request';

// \u53EF\u4EE5\u4F7F\u7528schema\u7F16\u8F91\u5668\u914D\u7F6E https://form-render.github.io/schema-generator/
const schema = {
  type: 'object',
  properties: {
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      'ui:width': '25%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u72B6\u6001',
    dataIndex: 'state',
    enum: {
      open: '\u672A\u89E3\u51B3',
      closed: '\u5DF2\u89E3\u51B3',
    },
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: row => (
      <a
        href="https://x-render.gitee.io/form-render/"
        target="_blank"
        rel="noopener noreferrer"
      >
        \u67E5\u770B
      </a>
    ),
  },
];

const searchApi = params => {
  params.pageSize = 2;
  return request
    .get(
      'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/getCardList',
      { params }
    )
    .then(res => {
      console.log('response:', res);
      if (res && res.data) {
        return {
          rows: res.data,
          total: res.data.length,
          pageSize: res.data.pageSize || 2,
        }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
      }
    })
    .catch(e => console.log('Oops, error', e));
};

const searchArr = [
  {
    name: '\u6211\u7684\u6570\u636E',
    api: searchApi,
  },
  {
    name: '\u5168\u90E8\u6570\u636E',
    api: searchApi,
  },
];

// const cardRenderOptions = {
//   type: 'default',
//   header: {
//     title: 'title',
//     extra: (card, index) => (
//       <a
//         onClick={e => {
//           e.stopPropagation();
//         }}
//       >
//         action
//       </a>
//     ),
//   },
//   content: {
//     description: 'description',
//     list: ['creator', 'createTime'],
//     remark: 'remark',
//   },
// };

const cardRenderOptions = {
  type: 'image',
  cover: 'imgUrl',
  // cover: {
  //   dataIndex: 'imgUrl',
  //   width: 100,
  //   height: 100
  // },
  header: {
    title: (card, index) => card.title,
  },
  content: {
    description: (card, index) => card.description,
    // list: ['creator', 'createTime'],
    list: [
      {
        title: '\u521B\u5EFA\u4EBA',
        render: card => card.creator,
      },
      {
        title: '\u521B\u5EFA\u65F6\u95F4',
        dataIndex: 'createTime',
      },
    ],
    remark: 'remark',
  },
  footer: (card, idx) => [
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
  ],
};

const Demo = () => {
  const tableRef = useRef();
  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <TableContainer ref={tableRef} searchApi={searchArr}>
        <Search schema={schema} />
        <CardList
          // onCardClick={(item, idx) => alert(JSON.stringify(item))}
          cardRender={cardRenderOptions}
          paginationOptions={{ size: 'small' }}
          toolbarRender={() => [
            <Button
              key="primary"
              type="primary"
              onClick={() => alert('table-render\uFF01')}
            >
              <PlusOutlined />
              \u521B\u5EFA
            </Button>,
          ]}
          toolbarAction
        />
      </TableContainer>
    </div>
  );
};

export default Demo;`,J=`import { get, set, cloneDeep } from 'lodash-es';

// \u540E\u9762\u4E09\u4E2A\u53C2\u6570\u90FD\u662F\u5185\u90E8\u9012\u5F52\u4F7F\u7528\u7684\uFF0C\u5C06schema\u7684\u6811\u5F62\u7ED3\u6784\u6241\u5E73\u5316\u6210\u4E00\u5C42, \u6BCF\u4E2Aitem\u7684\u7ED3\u6784
// {
//   parent: '#',
//   schema: ...,
//   children: []
// }

// TODO: \u53D1\u5E03\u540E\u53BB\u6389
window.log1 = value => {
  console.log('%ccommon:', 'color: #00A7F7; font-weight: 500;', value);
};

window.log2 = value => {
  console.log('%cwarning:', 'color: #f50; font-weight: 500;', value);
};

window.log3 = value => {
  console.log('%csuccess:', 'color: #87d068; font-weight: 500;', value);
};

window.log4 = value => {
  console.log('%cspecial:', 'color: #722ed1; font-weight: 500;', value);
};

export function isUrl(string) {
  const protocolRE = /^(?:\\w+:)?\\/\\/(\\S+)$/;
  // const domainRE = /^[^\\s\\.]+\\.\\S{2,}$/;
  if (typeof string !== 'string') return false;
  return protocolRE.test(string);
}

export function isCheckBoxType(schema, readOnly) {
  if (readOnly) return false;
  if (schema.widget === 'checkbox') return true;
  if (schema && schema.type === 'boolean') {
    if (schema.enum) return false;
    if (schema.widget === undefined) return true;
    return false;
  }
}

// a[].b.c => a.b.c
function removeBrackets(string) {
  if (typeof string === 'string') {
    return string.replace(/\\[\\]/g, '');
  } else {
    return string;
  }
}

export function getParentPath(path) {
  if (typeof path === 'string') {
    const pathArr = path.split('.');
    if (pathArr.length === 1) {
      return '#';
    }
    pathArr.pop();
    return pathArr.join('.');
  }
  return '#';
}

export function getValueByPath(formData, path) {
  if (path === '#' || !path) {
    return formData || {};
  } else if (typeof path === 'string') {
    return get(formData, path);
  } else {
    console.error('path has to be a string');
  }
}

//  path: 'a.b[1].c[0]' => { id: 'a.b[].c[]'  dataIndex: [1,0] }
export function destructDataPath(path) {
  let id;
  let dataIndex;
  if (path === '#') {
    return { id: '#', dataIndex: [] };
  }
  if (typeof path !== 'string') {
    throw Error(\`path \${path} is not a string!!! Something wrong here\`);
  }
  const pattern = /\\[[0-9]+\\]/g;
  const matchList = path.match(pattern);
  if (!matchList) {
    id = path;
  } else {
    id = path.replace(pattern, '[]');
    // \u8FD9\u4E2A\u662Fmatch\u4E0B\u6765\u7684\u7ED3\u679C\uFF0C\u53EF\u5B89\u5168\u5904\u7406
    dataIndex = matchList.map(item =>
      Number(item.substring(1, item.length - 1))
    );
  }
  return { id, dataIndex };
}

// id: 'a.b[].c[]'  dataIndex: [1,0] =>  'a.b[1].c[0]'
export function getDataPath(id, dataIndex) {
  if (id === '#') {
    return id;
  }
  if (typeof id !== 'string') {
    throw Error(\`id \${id} is not a string!!! Something wrong here\`);
  }
  let _id = id;
  if (Array.isArray(dataIndex)) {
    // const matches = id.match(/\\[\\]/g) || [];
    // const count = matches.length;
    dataIndex.forEach(item => {
      _id = _id.replace(/\\[\\]/, \`[\${item}]\`);
    });
  }
  return removeBrackets(_id);
}

export function isObjType(schema) {
  return schema && schema.type === 'object' && schema.properties;
}

// TODO: \u652F\u6301\u975E\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u9879
export function isListType(schema) {
  return (
    schema &&
    schema.type === 'array' &&
    isObjType(schema.items) &&
    schema.enum === undefined
  );
}

// TODO: \u68C0\u9A8C\u662F\u5426\u4E22\u8FDB\u53BB\u5404\u79CDschema\u90FD\u80FD\u515C\u5E95\u4E0D\u4F1Acrash
export function flattenSchema(_schema = {}, name = '#', parent, result = {}) {
  const schema = clone(_schema); // TODO: \u662F\u5426\u9700\u8981deepClone\uFF0C\u8FD9\u4E2A\u82B1\u8D39\u662F\u4E0D\u662F\u6709\u70B9\u5927
  let _name = name;
  if (!schema.$id) {
    schema.$id = _name; // \u7ED9\u751F\u6210\u7684schema\u6DFB\u52A0\u4E00\u4E2A\u552F\u4E00\u6807\u8BC6\uFF0C\u65B9\u4FBF\u4ECEschema\u4E2D\u76F4\u63A5\u8BFB\u53D6
  }
  const children = [];
  if (isObjType(schema)) {
    Object.entries(schema.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    // schema.properties = {};
  }
  if (isListType(schema)) {
    Object.entries(schema.items.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    // schema.items.properties = {};
  }

  const rules = Array.isArray(schema.rules) ? [...schema.rules] : [];
  if (['boolean', 'function', 'string'].indexOf(typeof schema.required) > -1) {
    rules.push({ required: schema.required }); // TODO: \u4E07\u4E00\u5185\u90E8\u5DF2\u7ECF\u7528\u91CD\u590D\u7684required\u89C4\u5219\uFF1F
  }

  if (schema.type) {
    // Check: \u4E3A\u5565\u4E00\u5B9A\u8981\u6709type\uFF1F
    // TODO: \u6CA1\u6709\u60F3\u597D validation \u7684\u90E8\u5206
    result[_name] = { parent, schema: schema, children, rules };
  }
  return result;
}

//////////   old

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

export const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

// \u514B\u9686\u5BF9\u8C61
// function clone1(data) {
//   // data = functionToString(data);
//   try {
//     return JSON.parse(JSON.stringify(data));
//   } catch (e) {
//     return data;
//   }
// }

export const clone = cloneDeep;
// export const clone = clone1;

// export const functionToString = data => {
//   let result;
//   if (isObject(data)) {
//     result = {};
//     Object.keys(data).forEach(key => {
//       result[key] = functionToString(data[key]);
//     });
//     return result;
//   } else if (typeof data === 'function') {
//     return result.toString();
//   }
//   return data;
// };

// '3' => true, 3 => true, undefined => false
export function isLooselyNumber(num) {
  if (typeof num === 'number') return true;
  if (typeof num === 'string') {
    return !Number.isNaN(Number(num));
  }
  return false;
}

export function isCssLength(str) {
  if (typeof str !== 'string') return false;
  return str.match(/^([0-9])*(%|px|rem|em)$/i);
}

// \u6DF1\u5EA6\u5BF9\u6BD4
export function isDeepEqual(param1, param2) {
  if (param1 === undefined && param2 === undefined) return true;
  else if (param1 === undefined || param2 === undefined) return false;
  if (param1 === null && param2 === null) return true;
  else if (param1 === null || param2 === null) return false;
  else if (param1.constructor !== param2.constructor) return false;

  if (param1.constructor === Array) {
    if (param1.length !== param2.length) return false;
    for (let i = 0; i < param1.length; i++) {
      if (param1[i].constructor === Array || param1[i].constructor === Object) {
        if (!isDeepEqual(param1[i], param2[i])) return false;
      } else if (param1[i] !== param2[i]) return false;
    }
  } else if (param1.constructor === Object) {
    if (Object.keys(param1).length !== Object.keys(param2).length) return false;
    for (let i = 0; i < Object.keys(param1).length; i++) {
      const key = Object.keys(param1)[i];
      if (
        param1[key] &&
        typeof param1[key] !== 'number' &&
        (param1[key].constructor === Array ||
          param1[key].constructor === Object)
      ) {
        if (!isDeepEqual(param1[key], param2[key])) return false;
      } else if (param1[key] !== param2[key]) return false;
    }
  } else if (param1.constructor === String || param1.constructor === Number) {
    return param1 === param2;
  }
  return true;
}

// \u65F6\u95F4\u7EC4\u4EF6
export function getFormat(format) {
  let dateFormat;
  switch (format) {
    case 'date':
      dateFormat = 'YYYY-MM-DD';
      break;
    case 'time':
      dateFormat = 'HH:mm:ss';
      break;
    case 'dateTime':
      dateFormat = 'YYYY-MM-DD HH:mm:ss';
      break;
    case 'week':
      dateFormat = 'YYYY-w';
      break;
    case 'year':
      dateFormat = 'YYYY';
      break;
    case 'quarter':
      dateFormat = 'YYYY-Q';
      break;
    case 'month':
      dateFormat = 'YYYY-MM';
      break;
    default:
      // dateTime
      if (typeof format === 'string') {
        dateFormat = format;
      } else {
        dateFormat = 'YYYY-MM-DD';
      }
  }
  return dateFormat;
}

export function hasRepeat(list) {
  return list.find(
    (x, i, self) =>
      i !== self.findIndex(y => JSON.stringify(x) === JSON.stringify(y))
  );
}

// ----------------- schema \u76F8\u5173

// \u5408\u5E76propsSchema\u548CUISchema\u3002\u7531\u4E8E\u4E24\u8005\u7684\u903B\u8F91\u76F8\u5173\u6027\uFF0C\u5408\u5E76\u4E3A\u4E00\u4E2A\u5927schema\u80FD\u7B80\u5316\u5185\u90E8\u5904\u7406
export function combineSchema(propsSchema = {}, uiSchema = {}) {
  const propList = getChildren(propsSchema);
  const newList = propList.map(p => {
    const { name } = p;
    const { type, enum: options, properties, items } = p.schema;
    const isObj = type === 'object' && properties;
    const isArr = type === 'array' && items && !options; // enum + array \u4EE3\u8868\u7684\u591A\u9009\u6846\uFF0C\u6CA1\u6709sub
    const ui = name && uiSchema[p.name];
    if (!ui) {
      return p;
    }
    // \u5982\u679C\u662Flist\uFF0C\u9012\u5F52\u5408\u5E76items
    if (isArr) {
      const newItems = combineSchema(items, ui.items || {});
      return { ...p, schema: { ...p.schema, ...ui, items: newItems } };
    }
    // object\u9012\u5F52\u5408\u5E76\u6574\u4E2Aschema
    if (isObj) {
      const newSchema = combineSchema(p.schema, ui);
      return { ...p, schema: newSchema };
    }
    return { ...p, schema: { ...p.schema, ...ui } };
  });

  const newObj = {};
  newList.forEach(s => {
    newObj[s.name] = s.schema;
  });

  const topLevelUi = {};
  Object.keys(uiSchema).forEach(key => {
    if (typeof key === 'string' && key.substring(0, 3) === 'ui:') {
      topLevelUi[key] = uiSchema[key];
    }
  });
  if (isEmpty(newObj)) {
    return { ...propsSchema, ...topLevelUi };
  }
  return { ...propsSchema, ...topLevelUi, properties: newObj };
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// \u83B7\u5F97propsSchema\u7684children
function getChildren(schema) {
  if (!schema) return [];
  const {
    // object
    properties,
    // array
    items,
    type,
  } = schema;
  if (!properties && !items) {
    return [];
  }
  let schemaSubs = {};
  if (type === 'object') {
    schemaSubs = properties;
  }
  if (type === 'array') {
    schemaSubs = items;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
}

// \u5408\u5E76\u591A\u4E2Aschema\u6811\uFF0C\u6BD4\u5982\u4E00\u4E2Aschema\u7684\u6811\u8282\u70B9\u662F\u53E6\u4E00\u4E2Aschema
export function combine() {}

// \u4EE3\u66FFeval\u7684\u51FD\u6570
export const parseString = string =>
  Function('"use strict";return (' + string + ')')();

// \u89E3\u6790\u51FD\u6570\u5B57\u7B26\u4E32\u503C
export const evaluateString = (string, formData, rootValue) =>
  Function(\`"use strict";
    const rootValue = \${JSON.stringify(rootValue)};
    const formData = \${JSON.stringify(formData)};
    return (\${string})\`)();

// \u5224\u65ADschema\u7684\u503C\u662F\u662F\u5426\u662F\u201C\u51FD\u6570\u201D
// JSON\u65E0\u6CD5\u4F7F\u7528\u51FD\u6570\u503C\u7684\u53C2\u6570\uFF0C\u6240\u4EE5\u4F7F\u7528"{{...}}"\u6765\u6807\u8BB0\u4E3A\u51FD\u6570\uFF0C\u4E5F\u53EF\u4F7F\u7528@\u6807\u8BB0\uFF0C\u4E0D\u63A8\u8350\u3002
export function isExpression(func) {
  // if (typeof func === 'function') {
  //   const funcString = func.toString();
  //   return (
  //     funcString.indexOf('formData') > -1 ||
  //     funcString.indexOf('rootValue') > -1
  //   );
  // }
  // \u4E0D\u518D\u5141\u8BB8\u51FD\u6570\u5F0F\u7684\u8868\u8FBE\u5F0F\u4E86\uFF01
  if (typeof func !== 'string') return false;
  // \u8FD9\u6837\u7684pattern {{.....}}
  const pattern = /^{{(.+)}}$/;
  const reg1 = /^{{(function.+)}}$/;
  const reg2 = /^{{(.+=>.+)}}$/;
  if (
    typeof func === 'string' &&
    func.match(pattern) &&
    !func.match(reg1) &&
    !func.match(reg2)
  ) {
    return true;
  }
  return false;
}

export function parseSingleExpression(func, formData = {}, dataPath) {
  const parentPath = getParentPath(dataPath);
  const parent = getValueByPath(formData, parentPath) || {};
  if (typeof func === 'string') {
    const funcBody = func.substring(2, func.length - 2);
    const str = \`
    return \${funcBody
      .replace(/formData/g, JSON.stringify(formData))
      .replace(/rootValue/g, JSON.stringify(parent))}\`;

    try {
      return Function(str)();
    } catch (error) {
      console.log(error, func, dataPath);
      return func;
    }
    // const funcBody = func.substring(2, func.length - 2);
    // //TODO: \u8FD9\u6837\u6709\u95EE\u9898\uFF0C\u4F8B\u5982 a.b.indexOf(), \u4F1A\u628A a.b.indexOf \u5F53\u505A\u503C
    // const match1 = /formData.([a-zA-Z0-9.$_\\[\\]]+)/g;
    // const match2 = /rootValue.([a-zA-Z0-9.$_\\[\\]]+)/g;
    // const str = \`
    // return (\${funcBody
    //   .replaceAll(match1, (v, m1) =>
    //     JSON.stringify(getValueByPath(formData, m1))
    //   )
    //   .replaceAll(match2, (v, m1) =>
    //     JSON.stringify(getValueByPath(parent, m1))
    //   )})\`;
    // try {
    //   return Function(str)();
    // } catch (error) {
    //   console.log(error);
    //   return func;
    // }
  } else return func;
}

export const schemaContainsExpression = (schema, shallow = true) => {
  if (isObject(schema)) {
    return Object.keys(schema).some(key => {
      const value = schema[key];
      if (typeof value === 'string') {
        return isExpression(value);
      } else if (
        typeof key === 'string' &&
        key.toLowerCase().indexOf('props') > -1
      ) {
        const propsObj = schema[key];
        if (isObject(propsObj)) {
          return Object.keys(propsObj).some(k => {
            return isExpression(propsObj[k]);
          });
        }
      } else if (!shallow && isObject(value)) {
        return schemaContainsExpression(value, false);
      }
      return false;
    });
  } else {
    return false;
  }
};

// TODO: \u4E24\u4E2A\u4F18\u5316\uFF0C1. \u53EF\u4EE5\u901A\u8FC7\u8868\u8FBE\u5F0F\u7684path\u6765\u5224\u65AD\uFF0C\u907F\u514D\u4E00\u4E9B\u91CD\u590D\u8BA1\u7B97
export const parseAllExpression = (_schema, formData, dataPath) => {
  const schema = clone(_schema);
  Object.keys(schema).forEach(key => {
    const value = schema[key];
    if (isObject(value)) {
      // TODO: dataPath \u8FD9\u8FB9\u8981\u5904\u7406\u4E00\u4E0B\uFF0C\u5426\u5219rootValue\u7C7B\u7684\u6CA1\u6709\u6548\u679C
      schema[key] = parseAllExpression(value, formData, dataPath);
    } else if (isExpression(value)) {
      schema[key] = parseSingleExpression(value, formData, dataPath);
      // console.log(
      //   formData.materialType,
      //   dataPath,
      //   parseSingleExpression(value, formData, dataPath)
      // );
    } else if (
      typeof key === 'string' &&
      key.toLowerCase().indexOf('props') > -1
    ) {
      // \u6709\u53EF\u80FD\u53EB xxxProps
      const propsObj = schema[key];
      if (isObject(propsObj)) {
        Object.keys(propsObj).forEach(k => {
          schema[key][k] = parseSingleExpression(
            propsObj[k],
            formData,
            dataPath
          );
        });
      }
    }
  });
  return schema;
};

// \u5224\u65ADschema\u4E2D\u662F\u5426\u6709\u5C5E\u6027\u503C\u662F\u51FD\u6570\u8868\u8FBE\u5F0F
export function isFunctionSchema(schema) {
  return Object.keys(schema).some(key => {
    if (typeof schema[key] === 'function') {
      return true;
    } else if (typeof schema[key] === 'string') {
      return isExpression(schema[key]);
    } else if (typeof schema[key] === 'object') {
      return isFunctionSchema(schema[key]);
    } else {
      return false;
    }
  });
}

// \u4F8B\u5982\u5F53\u524Ditem\u7684id = '#/obj/input'  propName: 'ui:labelWidth' \u5F80\u4E0A\u4E00\u76F4\u627E\uFF0C\u76F4\u5230\u627E\u5230\u7B2C\u4E00\u4E2A\u4E0D\u662Fundefined\u7684\u503C TODO: \u770B\u770B\u662F\u5426ok
export const getParentProps = (propName, id, flatten) => {
  try {
    const item = flatten[id];
    if (item.schema[propName] !== undefined) return item.schema[propName];
    if (item && item.parent) {
      const parentSchema = flatten[item.parent].schema;
      if (parentSchema[propName] !== undefined) {
        return parentSchema[propName];
      } else {
        return getParentProps(propName, item.parent, flatten);
      }
    }
  } catch (error) {
    return undefined;
  }
};

export const getSaveNumber = () => {
  const searchStr = localStorage.getItem('SAVES');
  if (searchStr) {
    try {
      const saves = JSON.parse(searchStr);
      const length = saves.length;
      if (length) return length + 1;
    } catch (error) {
      return 1;
    }
  } else {
    return 1;
  }
};

export function looseJsonParse(obj) {
  return Function('"use strict";return (' + obj + ')')();
}

// \u83B7\u5F97propsSchema\u7684children
function getChildren2(schema) {
  if (!schema) return [];
  const {
    // object
    properties,
    // array
    items,
    type,
  } = schema;
  if (!properties && !items) {
    return [];
  }
  let schemaSubs = {};
  if (type === 'object') {
    schemaSubs = properties;
  }
  if (type === 'array') {
    schemaSubs = items.properties;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
}

export const oldSchemaToNew = schema => {
  if (schema && schema.propsSchema) {
    const { propsSchema, ...rest } = schema;
    return { schema: propsSchema, ...rest };
  }
  return schema;
};

export const newSchemaToOld = setting => {
  if (setting && setting.schema) {
    const { schema, ...rest } = setting;
    return { propsSchema: schema, ...rest };
  }
  return setting;
};

// from FR

export const getEnum = schema => {
  if (!schema) return undefined;
  const itemEnum = schema && schema.items && schema.items.enum;
  const schemaEnum = schema && schema.enum;
  return itemEnum ? itemEnum : schemaEnum;
};

export const getArray = (arr, defaultValue = []) => {
  if (Array.isArray(arr)) return arr;
  return defaultValue;
};

export const isEmail = value => {
  const regex = '^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$';
  if (value && new RegExp(regex).test(value)) {
    return true;
  }
  return false;
};

export function defaultGetValueFromEvent(valuePropName, ...args) {
  const event = args[0];
  if (event && event.target && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}

export const getKeyFromPath = path => {
  try {
    const keyList = path.split('.');
    const last = keyList.slice(-1)[0];
    return last;
  } catch (error) {
    console.error(error, 'getKeyFromPath');
    return '';
  }
};

// \u66F4\u591A\u7684\u503C\u83B7\u53D6
export const getDisplayValue = (value, schema) => {
  if (typeof value === 'boolean') {
    return value ? 'yes' : 'no';
  }
  if (isObjType(schema) || isListType(schema)) {
    return '-';
  }
  if (Array.isArray(schema.enum) && Array.isArray(schema.enumNames)) {
    try {
      return schema.enumNames[schema.enum.indexOf(value)];
    } catch (error) {
      return value;
    }
  }
  return value;
};

// \u53BB\u6389\u6570\u7EC4\u91CC\u7684\u7A7A\u5143\u7D20 {a: [null, {x:1}]} => {a: [{x:1}]}
export const removeEmptyItemFromList = formData => {
  let result = {};
  if (isObject(formData)) {
    Object.keys(formData).forEach(key => {
      result[key] = removeEmptyItemFromList(formData[key]);
    });
  } else if (Array.isArray(formData)) {
    result = formData.filter(item => {
      if (item && JSON.stringify(item) !== '{}') {
        return true;
      }
      return false;
    });
  } else {
    result = formData;
  }
  return result;
};

export const getDescriptorFromSchema = ({ schema, isRequired = true }) => {
  let result = {};
  let singleResult = {};
  if (schema.hidden === true) return { validator: () => true };
  if (isObjType(schema)) {
    result.type = 'object';
    if (isRequired && schema.required === true) {
      result.required = true;
    }
    result.fields = {};
    Object.keys(schema.properties).forEach(key => {
      const item = schema.properties[key];
      // \u517C\u5BB9\u65E7\u7684\uFF01
      if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
        item.required = true;
      }
      result.fields[key] = getDescriptorFromSchema({
        schema: item,
        isRequired,
      });
    });
  } else if (isListType(schema)) {
    result.type = 'array';
    if (isRequired && schema.required === true) {
      result.required = true;
    }
    if (typeof schema.min === 'number') {
      result.min = schema.min;
    }
    if (typeof schema.max === 'number') {
      result.max = schema.max;
    }
    result.defaultField = { type: 'object', fields: {} }; // \u76EE\u524D\u5C31\u9ED8\u8BA4\u53EA\u6709object\u7C7B\u578B\u7684 TODO:
    Object.keys(schema.items.properties).forEach(key => {
      const item = schema.items.properties[key];
      // \u517C\u5BB9\u65E7\u7684\uFF01
      if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
        item.required = true;
      }
      result.defaultField.fields[key] = getDescriptorFromSchema({
        schema: item,
        isRequired,
      });
    });
  } else {
    // \u5355\u4E2A\u7684\u903B\u8F91
    const processRule = item => {
      if (schema.type) return { ...item, type: schema.type };
      if (item.pattern && typeof item.pattern === 'string') {
        return { ...item, pattern: new RegExp(item.pattern) };
      }
      return item;
    };
    const { required, ...rest } = schema;

    ['type', 'pattern', 'min', 'max', 'len'].forEach(key => {
      if (Object.keys(rest).indexOf(key) > -1) {
        singleResult[key] = rest[key];
      }
    });

    switch (schema.type) {
      case 'range':
        const rangeValidator = {
          validator: (rule, value) => {
            if (!value) return true;
            if (Array.isArray(value)) {
              // range\u7EC4\u4EF6\u70B9\u51FBclear\uFF0C\u4F1A\u53D8\u6210 ['','']
              if (
                typeof value[0] === 'string' &&
                typeof value[1] === 'string'
              ) {
                return true;
              }
              return false;
            }
            return false;
          },
          type: 'array',
          message: '\${title}\u5FC5\u586B',
        };
        singleResult = rangeValidator;
        break;
      case 'html':
        singleResult.type = 'string';
        break;
      default:
        break;
    }
    switch (schema.format) {
      case 'email':
      case 'url':
        singleResult.type = schema.format;
        break;
      default:
        break;
    }

    let requiredRule;
    if (isRequired && schema.required === true) {
      requiredRule = { required: true, type: singleResult.type || 'string' };
    }

    if (schema.rules) {
      if (Array.isArray(schema.rules)) {
        const _rules = [];
        schema.rules.forEach(item => {
          if (item.required === true) {
            if (isRequired) {
              requiredRule = item;
            }
          } else {
            _rules.push(processRule(item));
          }
        });
        result = [singleResult, ..._rules];
      } else if (isObject(schema.rules)) {
        // TODO: \u89C4\u8303\u4E0A\u4E0D\u5141\u8BB8rules\u662Fobject\uFF0C\u7701\u4E00\u70B9\u4E8B\u513F
        result = [singleResult, processRule(schema.rules)];
      } else {
        result = singleResult;
      }
    } else {
      result = singleResult;
    }

    if (requiredRule) {
      if (Array.isArray(result)) {
        result.push(requiredRule);
      } else if (isObject(result)) {
        result = [result, requiredRule];
      }
    }

    if (schema.format === 'image') {
      const imgValidator = {
        validator: (rule, value) => {
          const pattern = /([/|.|w|s|-])*.(jpg|gif|png|bmp|apng|webp|jpeg|json)/;
          if (!value) return true; // \u8FD9\u91CC\u5224\u65AD\u5BBD\u4E00\u70B9\uFF0Cundefined\u3001null\u3001'' \u90FD\u5F53\u505A\u6CA1\u6709\u586B\u5199
          return !!pattern.exec(value) || isUrl(value);
        },
        message: '\${title}\u7684\u7C7B\u578B\u4E0D\u662Fimage',
      };
      if (Array.isArray(result)) {
        result.push(imgValidator);
      } else if (isObject(result)) {
        result = [result, imgValidator];
      }
    }
  }
  return result;
};

// async-validator \u4EA7\u51FA\u7684path\u6CA1\u6CD5\u7528\uFF0C\u8F6C\u4E00\u4E0B
// "list.1.userName" => "list[1].userName"
export const formatPathFromValidator = err => {
  const errArr = err.split('.');
  return errArr
    .map(item => {
      if (isNaN(Number(item))) {
        return item;
      } else {
        return \`[\${item}]\`;
      }
    })
    .reduce((a, b) => {
      if (b[0] === '[' || a === '') {
        return a + b;
      } else {
        return a + '.' + b;
      }
    }, '');
};

// schema = {
//   type: 'object',
//   properties: {
//     x: {
//       type: 'object',
//       properties: {
//         y: {
//           type: 'string',
//           required: true,
//         },
//       },
//     },
//   },
// };
// path = 'x.y'
// return {required: true, message?: 'xxxx'}
export const isPathRequired = (path, schema) => {
  let pathArr = path.split('.');
  while (pathArr.length > 0) {
    let [_path, ...rest] = pathArr;
    _path = _path.split('[')[0];
    let childSchema;
    if (isObjType(schema)) {
      childSchema = schema.properties[_path];
    } else if (isListType(schema)) {
      childSchema = schema.items.properties[_path];
    }
    pathArr = rest;
    if (childSchema) {
      return isPathRequired(rest.join('.'), childSchema);
    }

    // \u5355\u4E2A\u7684\u903B\u8F91
    let result = { required: false };
    if (schema.required === true) {
      result.required = true;
    }
    if (schema.rules) {
      const requiredItem = schema.rules.find(item => item.required);
      if (requiredItem) {
        result = requiredItem;
      }
    }
    return result;
  }
};

// _path \u53EA\u4F9B\u5185\u90E8\u9012\u5F52\u4F7F\u7528
export const generateDataSkeleton = (schema, formData, _path = '') => {
  let result = {};
  let _formData = clone(formData);
  if (isObjType(schema)) {
    if (_formData === undefined || typeof _formData !== 'object') {
      _formData = {};
    }
    Object.keys(schema.properties).forEach(key => {
      const childSchema = schema.properties[key];
      const childData = _formData[key];
      const childResult = generateDataSkeleton(
        childSchema,
        childData,
        \`\${_path}.\${key}\`
      );
      result[key] = childResult;
    });
  } else if (_formData !== undefined) {
    result = clone(_formData);
  } else {
    if (schema.default !== undefined) {
      result = clone(schema.default);
    } else if (schema.type === 'boolean') {
      // result = false;
      result = undefined;
    } else {
      result = undefined;
    }
  }
  return result;
};

export const translateMessage = (msg, schema) => {
  if (typeof msg !== 'string') {
    return '';
  }
  if (!schema) return msg;
  msg = msg.replace('\${title}', schema.title);
  msg = msg.replace('\${type}', schema.format || schema.type);
  // \u517C\u5BB9\u4EE3\u7801
  if (typeof schema.min === 'number') {
    msg = msg.replace('\${min}', schema.min);
  }
  if (typeof schema.max === 'number') {
    msg = msg.replace('\${max}', schema.max);
  }
  if (schema.rules) {
    const minRule = schema.rules.find(r => r.min !== undefined);
    if (minRule) {
      msg = msg.replace('\${min}', minRule.min);
    }
    const maxRule = schema.rules.find(r => r.max !== undefined);
    if (maxRule) {
      msg = msg.replace('\${max}', maxRule.max);
    }
    const lenRule = schema.rules.find(r => r.len !== undefined);
    if (lenRule) {
      msg = msg.replace('\${len}', lenRule.len);
    }
    const patternRule = schema.rules.find(r => r.pattern !== undefined);
    if (patternRule) {
      msg = msg.replace('\${pattern}', patternRule.pattern);
    }
  }
  return msg;
};

// "objectName": {
//   "title": "\u5BF9\u8C61",
//   "description": "\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",
//   "type": "object",
//   "properties": {

//   }
// }

// "listName": {
//   "title": "\u5BF9\u8C61\u6570\u7EC4",
//   "description": "\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",
//   "type": "array",
//   "items": {
//     "type": "object",
//     "properties": {

//     }
//   }
// }

const changeSchema = (_schema, singleChange) => {
  let schema = clone(_schema);
  schema = singleChange(schema);
  if (isObjType(schema)) {
    let requiredKeys = [];
    if (Array.isArray(schema.required)) {
      requiredKeys = schema.required;
      delete schema.required;
    }
    Object.keys(schema.properties).forEach(key => {
      const item = schema.properties[key];
      if (requiredKeys.indexOf(key) > -1) {
        item.required = true;
      }
      schema.properties[key] = changeSchema(item, singleChange);
    });
  } else if (isListType(schema)) {
    Object.keys(schema.items.properties).forEach(key => {
      const item = schema.items.properties[key];
      schema.items.properties[key] = changeSchema(item, singleChange);
    });
  }
  return schema;
};

export const updateSchemaToNewVersion = schema => {
  return changeSchema(schema, updateSingleSchema);
};

const updateSingleSchema = schema => {
  try {
    schema.rules = schema.rules || [];
    schema.props = schema.props || {};
    if (schema['ui:options']) {
      schema.props = schema['ui:options'];
      delete schema['ui:options'];
    }
    if (schema.pattern) {
      const validItem = { pattern: schema.pattern };
      if (schema.message && schema.message.pattern) {
        validItem.message = schema.message.pattern;
      }
      schema.rules.push(validItem);
      delete schema.pattern;
      delete schema.message;
    }
    // min / max
    if (schema.minLength) {
      schema.min = schema.minLength;
      delete schema.minLength;
    }
    if (schema.maxLength) {
      schema.max = schema.maxLength;
      delete schema.maxLength;
    }
    if (schema.minItems) {
      schema.min = schema.minItems;
      delete schema.minItems;
    }
    if (schema.maxItems) {
      schema.max = schema.maxItems;
      delete schema.maxItems;
    }
    if (schema.step) {
      schema.props.step = schema.step;
      delete schema.step;
    }
    // ui:xxx
    if (schema['ui:className']) {
      schema.className = schema['ui:className'];
      delete schema['ui:className'];
    }
    if (schema['ui:hidden']) {
      schema.hidden = schema['ui:hidden'];
      delete schema['ui:hidden'];
    }
    if (schema['ui:readonly']) {
      schema.readOnly = schema['ui:readonly']; // \u6539\u6210\u9A7C\u5CF0\u4E86
      delete schema['ui:readonly'];
    }
    if (schema['ui:disabled']) {
      schema.disabled = schema['ui:disabled'];
      delete schema['ui:disabled'];
    }
    if (schema['ui:width']) {
      schema.width = schema['ui:width'];
      delete schema['ui:width'];
    }
    if (schema['ui:displayType']) {
      schema.displayType = schema['ui:displayType'];
      delete schema['ui:displayType'];
    }
    if (schema['ui:column']) {
      schema.column = schema['ui:column'];
      delete schema['ui:column'];
    }
    if (schema['ui:widget']) {
      schema.widget = schema['ui:widget'];
      delete schema['ui:widget'];
    }
    if (schema['ui:labelWidth']) {
      schema.labelWidth = schema['ui:labelWidth'];
      delete schema['ui:labelWidth'];
    }
    if (schema.rules && schema.rules.length === 0) {
      delete schema.rules;
    }
    if (JSON.stringify(schema.props) === '{}') {
      delete schema.props;
    }
    return schema;
  } catch (error) {
    console.error('schema\u8F6C\u6362\u5931\u8D25\uFF01', error);
    return schema;
  }
};

// \u65E7\u7248schema\u8F6C\u65B0\u7248schema
export const parseExpression = (schema, formData) => {
  let schema1 = parseRootValue(schema);
  let schema2 = replaceParseValue(schema1);
};

// \u68C0\u9A8C\u4E00\u4E2Astring\u662F function\uFF08\u4F20\u7EDF\u6D3B\u7BAD\u5934\u51FD\u6570\uFF09
export const parseFunctionString = string => {
  if (typeof string !== 'string') return false;
  const reg1 = /^{{(function.+)}}$/;
  const reg2 = /^{{(.+=>.+)}}$/;
  if (string.match(reg1)) {
    return string.match(reg1)[1];
  }
  if (string.match(reg2)) {
    return string.match(reg2)[1];
  }
  return false;
};

export const completeSchemaWithTheme = (schema = {}, theme = {}) => {
  let result = {};
  if (isObject(schema)) {
    if (schema.theme && theme[schema.theme]) {
      result = { ...schema, ...theme[schema.theme] };
    }
    Object.keys(schema).forEach(key => {
      result[key] = completeSchemaWithTheme(schema[key], theme);
    });
  } else {
    result = schema;
  }
  return result;
};

export const cleanEmpty = obj => {
  if (Array.isArray(obj)) {
    return obj
      .map(v => (v && isObject(v) ? cleanEmpty(v) : v))
      .filter(v => !(v == undefined));
  } else if (isObject(obj)) {
    return Object.entries(obj)
      .map(([k, v]) => [k, v && isObject(v) ? cleanEmpty(v) : v])
      .reduce((a, [k, v]) => (v == undefined ? a : ((a[k] = v), a)), {});
  } else {
    return obj;
  }
};

export const removeHiddenFromResult = (data, flatten) => {
  Object.keys(flatten).forEach(key => {
    const hidden = flatten[key].schema && flatten[key].schema.hidden === true; // Remark: \u6709\u8868\u8FBE\u5F0F\u7684\u60C5\u51B5, \u6682\u65F6\u4E0D\u53BB\u6389\u4E86\uFF08\u6709\u4E1A\u52A1\u53CD\u800C\u662F\u5E0C\u671B\u7559\u4E0B\u7684\uFF09\uFF0C\u5C31\u53BB\u6389 hidden = true \u7684
    if (get(data, key) !== undefined && hidden) {
      set(data, key, undefined);
    }
  });
  return data;
};`,Be=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Pe=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,ge=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,Jn=`export const basic = {
  labelWidth: 130,
  type: 'object',
  properties: {
    url: {
      title: 'url\u8F93\u5165\u6846',
      placeholder: '//www.taobao.com',
      type: 'string',
      format: 'url',
      required: true,
    },
    email: {
      title: 'email\u8F93\u5165\u6846',
      type: 'string',
      format: 'email',
    },
    string: {
      title: '\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32',
      description: 'a-z',
      type: 'string',
      hidden: false,
      disabled: true,
    },
  },
};

export const expression = {
  type: 'object',
  properties: {
    input: {
      title: '{{formData.config.title || "\u8F93\u5165\u6846"}}',
      type: 'string',
      placeholder: '{{formData.config.placeholder}}',
      props: {
        size: '{{formData.config.size}}',
      },
      hidden: '{{formData.config.hidden === true}}',
      readOnly: '{{formData.config.readOnly === true}}',
      disabled: '{{formData.config.disabled === true}}',
    },
    rate: {
      title: 'rate',
      type: 'number',
      widget: 'rate',
    },
    config: {
      title: '\u914D\u7F6E',
      type: 'object',
      properties: {
        title: {
          title: 'title',
          type: 'string',
        },
        placeholder: {
          title: 'placeholder',
          type: 'string',
        },
        size: {
          title: 'input\u5927\u5C0F',
          type: 'string',
          enum: ['large', 'middle', 'small'],
          enumNames: ['\u5927', '\u4E2D', '\u5C0F'],
          widget: 'radio',
        },
        hidden: {
          title: '\u662F\u5426\u9690\u85CF',
          type: 'boolean',
        },
        readOnly: {
          title: '\u662F\u5426\u53EA\u8BFB',
          type: 'boolean',
        },
        disabled: {
          title: '\u662F\u5426\u7F6E\u7070',
          type: 'boolean',
        },
      },
    },
  },
  required: [],
};

export const titleTrick = {
  displayType: 'row',
  type: 'object',
  properties: {
    inputName1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      width: '50%',
    },
    desc: {
      type: 'html',
      bind: false,
      default: "\u8865\u5145\u8BF4\u660E <span style='color:red'>hello<span>",
      width: '50%',
    },
  },
};`,Te=`import React, { Component } from 'react';
// import GithubCorner from 'react-github-corner';
import Demo from './main';
import { Radio, Select, Switch, Slider } from 'antd';
import './index.css';

const Option = Select.Option;
class Root extends Component {
  state = {
    schemaName: 'simplest',
    column: 1,
    displayType: 'column',
    readOnly: false,
    labelWidth: 110,
  };

  onColumnNumberChange = value => {
    this.setState({ column: value });
  };

  onDisplayChange = value => {
    this.setState({
      displayType: value,
      showDescIcon: value === 'row',
    });
  };

  onReadOnlyChange = value => this.setState({ readOnly: value });

  onSchemaChange = e => {
    this.setState({ schemaName: e.target.value });
  };

  onLabelWidthChange = value => {
    this.setState({ labelWidth: value });
  };

  render() {
    const { showDescIcon, readOnly, labelWidth } = this.state;
    return (
      <div className="fr-playground">
        {/* <GithubCorner
          href="https://github.com/alibaba/form-render"
          bannerColor="#F6C14F"
          className="absolute top-0 right-0 z-999"
        /> */}
        {/* <a href="/" className="f6 absolute top-1 right-1 z-999">
          \u56DE\u4E3B\u9875
        </a> */}
        <div className="w-100 flex setting-container">
          <Radio.Group
            name="schemaName"
            defaultValue="simplest"
            className="w-50 flex items-center flex-wrap z-999"
            onChange={this.onSchemaChange}
          >
            <Radio value="simplest">\u6700\u7B80\u6837\u4F8B</Radio>
            <Radio value="basic">\u57FA\u7840\u63A7\u4EF6</Radio>
            <Radio value="format">\u6821\u9A8C</Radio>
            <Radio value="new-feature">\u65B0\u529F\u80FD</Radio>
            <Radio value="function">\u590D\u6742\u8054\u52A8</Radio>
            <Radio value="input">\u4E2A\u6027\u8F93\u5165\u6846</Radio>
            <Radio value="select">\u4E2A\u6027\u9009\u62E9\u6846</Radio>
            <Radio value="demo">\u5B8C\u6574\u4F8B\u5B50</Radio>
          </Radio.Group>
          <div className="w-50 flex items-center flex-wrap z-999">
            <Select
              style={{ marginRight: 8, marginLeft: 24 }}
              onChange={this.onColumnNumberChange}
              defaultValue="1"
            >
              <Option value="1">\u4E00\u884C\u4E00\u5217</Option>
              <Option value="2">\u4E00\u884C\u4E8C\u5217</Option>
              <Option value="3">\u4E00\u884C\u4E09\u5217</Option>
            </Select>
            <Select
              style={{ marginRight: 8 }}
              onChange={this.onDisplayChange}
              defaultValue="column"
            >
              <Option value="column">\u4E0A\u4E0B\u6392\u5217</Option>
              <Option value="row">\u5DE6\u53F3\u6392\u5217</Option>
            </Select>
            <Switch
              style={{ marginRight: 8 }}
              checkedChildren="\u7F16\u8F91"
              onChange={this.onReadOnlyChange}
              unCheckedChildren="\u53EA\u8BFB"
              checked={readOnly}
            />
            <div style={{ width: 70 }}>\u6807\u7B7E\u5BBD\u5EA6\uFF1A</div>
            <Slider
              style={{ width: 80 }}
              max={200}
              min={20}
              value={labelWidth}
              onChange={this.onLabelWidthChange}
            />
          </div>
        </div>
        <Demo {...this.state} />
      </div>
    );
  }
}

export default Root;`,Mn=`import React, { useState, useEffect } from 'react';
import parseJson from 'json-parse-better-errors';
import FormRender, { useForm } from 'form-render';
import DefaultSchema from './json/simplest.json';
import { Tabs } from 'antd';
import AsyncSelect from './customized/AsyncSelect';
import MonacoEditor from './monaco';
const { TabPane } = Tabs;

// help functions
const schema2str = obj => JSON.stringify(obj, null, 2) || '';

const Demo = ({ schemaName, theme, ...formProps }) => {
  const [schemaStr, set1] = useState(() => schema2str(DefaultSchema.schema));
  const [error, set2] = useState('');

  useEffect(() => {
    const schema = require(\`./json/\${schemaName}.json\`);
    set1(schema2str(schema.schema));
  }, [schemaName]);

  const tryParse = schemaStr => {
    let schema = {};
    try {
      schema = parseJson(schemaStr);
      if (typeof schema !== 'object') {
        set2('schema\u975E\u6B63\u786Ejson');
        return;
      }
      set2('');
      return schema;
    } catch (error) {
      set2(String(error));
    }
  };

  const handleCodeChange = schemaStr => {
    set1(schemaStr);
    tryParse(schemaStr);
  };

  let schema = {};
  try {
    schema = parseJson(schemaStr);
  } catch (error) {
    console.log(error);
  }

  const form = useForm();

  return (
    <div className="flex-auto flex">
      <div className="w-50 h-100 pl2 flex flex-column">
        <Tabs
          defaultActiveKey="1"
          onChange={() => { }}
          className="flex flex-column"
          style={{ overflow: 'auto' }}
        >
          <TabPane tab="Schema" key="1">
            <MonacoEditor
              value={schemaStr}
              onChange={handleCodeChange}
            />
          </TabPane>
          <TabPane tab="Data" key="2">
            <MonacoEditor
              value={schema2str(form.getValues())}
              options={{ readOnly: true }}
            />
          </TabPane>
        </Tabs>
      </div>
      <div className="w-50 h-100 flex flex-column pa2">
        <div
          className="h-100 overflow-auto pa3 pt4 flex-auto"
          style={{ borderLeft: '1px solid #ddd' }}
        >
          {error ? (
            <div>{error}</div>
          ) : (
            <FormRender
              form={form}
              schema={schema}
              {...formProps}
              widgets={{ asyncSelect: AsyncSelect }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;`,wn=`{
  "schema": {
    "type": "object",
    "properties": {
      "string": {
        "title": "\u5B57\u7B26\u4E32",
        "type": "string",
        "required": true
      },
      "select": {
        "title": "\u5355\u9009",
        "type": "string",
        "enum": ["a", "b", "c"],
        "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"],
        "widget": "radio"
      }
    }
  }
}`,Sn=`import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
  };

  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    const { onChange, name } = this.props;
    onChange(name, value);
  };

  render() {
    const { value, options: uiOptions } = this.props;
    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <Select
        {...uiOptions}
        style={{ width: '100%' }}
        showSearch
        value={value || undefined}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput;`,pn=`import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { valueMap, keySuggestions } from './suggestionsMap';

const Demo = ({ value, onChange, options }) => {

  const editorWillMount = (monaco) => {
    monaco.languages.registerCompletionItemProvider('json', {
      provideCompletionItems: (model, position) => {

        // \u5F97\u5230\u5192\u53F7\u4E4B\u524D\u7684\u6587\u672C
        var textUntilPosition = model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column
        });

        const word = model.getWordUntilPosition(position);
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn
        };

        let propKey = '';
        const match = textUntilPosition.match(/[a-z]+(?=["][:])/)
        if (match && match.length) {
          propKey = match[0];
        }

        const suggestions = propKey ? (valueMap(range)[propKey] || []) : keySuggestions(range)

        return { suggestions }

      },
      triggerCharacters: ['"']
    });
  }

  return (
    <MonacoEditor
      height="800px"
      language="json"
      value={value}
      onChange={onChange}
      editorWillMount={editorWillMount}
      options={options}
    />
  );
};

export default Demo;`,Xe=`import { monaco } from 'react-monaco-editor'

const valueMap = (range) => {
  return {
    widget: [
      {
        label: 'input',
        insertText: 'input',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u8F93\u5165\u6846'
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u591A\u884C\u8F93\u5165\u6846'
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u7EC4\u4EF6'
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u7EC4\u4EF6'
      },
      {
        label: 'dateRange',
        insertText: 'dateRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u8303\u56F4'
      },
      {
        label: 'timeRange',
        insertText: 'timeRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u8303\u56F4'
      },
      {
        label: 'checkbox',
        insertText: 'checkbox',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u662F\u5426\u9009\u62E9'
      },
      {
        label: 'select',
        insertText: 'select',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u5355\u9009'
      },
      {
        label: 'radio',
        insertText: 'radio',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u5355\u9009'
      },
      {
        label: 'multiSelect',
        insertText: 'multiSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u591A\u9009\u6846'
      },
      {
        label: 'checkboxes',
        insertText: 'checkboxes',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u591A\u9009\u6846'
      },
      {
        label: 'cascader',
        insertText: 'cascader',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u7EA7\u8054\u9009\u62E9'
      },
      {
        label: 'treeSelect',
        insertText: 'treeSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6811\u5F62\u9009\u62E9'
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u989C\u8272\u9009\u62E9'
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0A\u4F20\u7EC4\u4EF6'
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6587\u672C\uFF08\u53EA\u8BFB\u5C55\u793A\uFF09'
      },
      {
        label: 'slider',
        insertText: 'slider',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6ED1\u52A8\u8F93\u5165\u6761'
      },
      {
        label: 'rate',
        insertText: 'rate',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E94\u661F\u8BC4\u5206'
      },
      {
        label: 'map',
        insertText: 'map',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5BF9\u8C61'
      },
      {
        label: 'list0',
        insertText: 'list0',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u590D\u6742\u7ED3\u6784\uFF0C\u4F46item\u6570\u91CF\u4E0D\u5927)'
      },
      {
        label: 'list1',
        insertText: 'list1',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67091-2\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)'
      },
      {
        label: 'list2',
        insertText: 'list2',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67093-5\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)'
      },
      {
        label: 'list3',
        insertText: 'list3',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u6570\u636E\u91CF\u5927\uFF0C\u6216\u8005\u7ED3\u6784\u590D\u6742)'
      },
    ],
    type: [
      {
        label: 'string',
        insertText: 'string',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'string'
      },
      {
        label: 'number',
        insertText: 'number',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'number'
      },
      {
        label: 'boolean',
        insertText: 'boolean',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'boolean'
      },
      {
        label: 'array',
        insertText: 'array',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'array'
      },
      {
        label: 'object',
        insertText: 'object',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'object'
      },
      {
        label: 'range',
        insertText: 'range',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'range'
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'html'
      },
    ],
    format: [
      {
        label: 'image',
        insertText: 'image',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'image'
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'textarea'
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'color'
      },
      {
        label: 'email',
        insertText: 'email',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'email'
      },
      {
        label: 'url',
        insertText: 'url',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'url'
      },
      {
        label: 'dateTime',
        insertText: 'dateTime',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'dateTime'
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'date'
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'time'
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'upload'
      },
    ],
    displayType: [
      {
        label: 'row',
        insertText: 'row',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5E76\u6392\u5C55\u793A'
      },
      {
        label: 'column',
        insertText: 'column',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E24\u6392\u5C55\u793A'
      },
    ]
  }
}

const keySuggestions =(range) => [
  {
    label: 'title',
    insertText: 'title',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F'
  },
  {
    label: 'description',
    insertText: 'description',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F'
  },
  {
    label: 'type',
    insertText: 'type',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u503C\u7684\u6570\u636E\u7C7B\u578B'
  },
  {
    label: 'format',
    insertText: 'format',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8F93\u5165\u6846\u7684\u683C\u5F0F'
  },
  {
    label: 'default',
    insertText: 'default',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C'
  },
  {
    label: 'required',
    insertText: 'required',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u5FC5\u586B'
  },
  {
    label: 'placeholder',
    insertText: 'placeholder',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'placeholder'
  },
  {
    label: 'bind',
    insertText: 'bind',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'bind'
  },
  {
    label: 'min',
    insertText: 'min',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5C0F\u503C'
  },
  {
    label: 'max',
    insertText: 'max',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5927\u503C'
  },
  {
    label: 'disabled',
    insertText: 'disabled',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u7981\u7528'
  },
  {
    label: 'readOnly',
    insertText: 'readOnly',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u53EA\u8BFB'
  },
  {
    label: 'hidden',
    insertText: 'hidden',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u9690\u85CF'
  },
  {
    label: 'displayType',
    insertText: 'displayType',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u5E03\u5C40'
  },
  {
    label: 'width',
    insertText: 'width',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6'
  },
  {
    label: 'labelWidth',
    insertText: 'labelWidth',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'label \u7684\u5BBD\u5EA6'
  },
  {
    label: 'className',
    insertText: 'className',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'className'
  },
  {
    label: 'widget',
    insertText: 'widget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6E32\u67D3'
  },
  {
    label: 'readOnlyWidget',
    insertText: 'readOnlyWidget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7528\u54EA\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3'
  },
  {
    label: 'extra',
    insertText: 'extra',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5C55\u793A\u66F4\u591A\u8BF4\u660E\u4FE1\u606F'
  },
  {
    label: 'properties',
    insertText: 'properties',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027(\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\u4E2D\u4F7F\u7528)'
  },
  {
    label: 'items',
    insertText: 'items',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u5217\u8868\u4E2D\u6BCF\u4E2Aitem\u7684\u7ED3\u6784(\u53EA\u5728\u5217\u8868\u4E2D\u4F7F\u7528)'
  },
  {
    label: 'enum',
    insertText: 'enum',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C'
  },
  {
    label: 'enumNames',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u6587\u6848'
  },
  {
    label: 'rules',
    insertText: 'rules',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6821\u9A8Crules'
  },
  {
    label: 'props',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u989D\u5916\u7EC4\u4EF6\u5C5E\u6027'
  },
]

export { valueMap, keySuggestions }`,$n=`.markdown p {
  color: #454d64 !important;
  font-size: 15px !important;
  line-height: 1.60625 !important;
}

.markdown ol,
.markdown ul {
  list-style: initial !important;
}

.hidden {
  display: none;
}

.npm__react-simple-code-editor__textarea {
  outline: none;
}

.b {
  font-weight: bold;
}

.pa0 {
  padding: 0;
}
.pa1 {
  padding: 0.25rem;
}
.pa2 {
  padding: 0.5rem;
}
.pa3 {
  padding: 1rem;
}
.pa4 {
  padding: 2rem;
}
.pa5 {
  padding: 4rem;
}
.pl0 {
  padding-left: 0;
}
.pt1 {
  padding-top: 0.25rem;
}
.pt2 {
  padding-top: 0.5rem;
}
.pt3 {
  padding-top: 1rem;
}
.pt4 {
  padding-top: 2rem;
}
.pt5 {
  padding-top: 4rem;
}
.pl2 {
  padding-left: 0.5rem;
}
.pb2 {
  padding-bottom: 0.5rem;
}
.overflow-auto {
  overflow: auto;
}
.h-100 {
  height: 100%;
}
.vh-100 {
  height: 100vh;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.w-50 {
  width: 50%;
}
.w-100 {
  width: 100%;
}
.flex {
  display: flex;
}
.flex-auto {
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
}
.flex-column {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.z-999 {
  z-index: 999;
}

.fr-playground {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  height: 100vh;
}

.fr-playground .setting-container {
  border-bottom: 1px solid #ccc;
  padding: 0 12px 12px;
}

.__dumi-default-previewer-demo {
  padding: 24px;
}`,Fn=`import React from 'react';
import { Table, Search, TableProvider, useTable } from 'table-render';
import { Tag, Space, Menu, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      'ui:width': '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
    created_at: {
      title: '\u6210\u7ACB\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  return (
    <TableProvider>
      <TableBody />
    </TableProvider>
  );
};

const TableBody = () => {
  const { refresh, tableState }: any = useTable();

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item>
        <div onClick={() => message.success('\u590D\u5236\u6210\u529F\uFF01')}>\u590D\u5236</div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={() => message.warning('\u786E\u5B9A\u5220\u9664\u5417\uFF1F')}>\u5220\u9664</div>
      </Menu.Item>
    </Menu>
  );

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={[
          {
            name: '\u5168\u90E8\u6570\u636E',
            api: searchApi,
          },
          {
            name: '\u6211\u7684\u6570\u636E',
            api: searchApi,
          },
        ]}
      />
      <Table
        // size="small"
        columns={columns}
        // headerTitle="\u9AD8\u7EA7\u8868\u5355"
        rowKey="id"
        toolbarRender={() => [
          <Button key="show" onClick={showData}>
            \u67E5\u770B\u65E5\u5FD7
          </Button>,
          <Button key="out" onClick={showData}>
            \u5BFC\u51FA\u6570\u636E
          </Button>,
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default Demo;`,Rn=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const templates = [
  {
    text: '\u6A21\u677F1',
    name: 'something',
    schema: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        inputName: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
        },
        selectName: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
        dateName: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
        },
      },
    },
  },
];

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator ref={genRef} defaultValue={schema} templates={templates} />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,We=`import React, { useState, useRef } from 'react';
import Generator, { fromFormily, toFormily } from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    array: {
      key: 'array',
      type: 'array',
      name: 'array',
      title: 'Name',
      'x-component': 'arraytable',
      items: {
        type: 'object',
        properties: {
          aa: {
            key: 'aa',
            type: 'string',
            name: 'aa',
            title: '\u63A7\u5236\u76F8\u90BB\u5B57\u6BB5\u663E\u793A\u9690\u85CF',
            enum: [
              {
                label: '\u663E\u793A',
                value: true,
              },
              {
                label: '\u9690\u85CF',
                value: false,
              },
            ],
            'x-component': 'input',
          },
          bb: {
            key: 'bb',
            type: 'string',
            name: 'bb',
            title: 'BB',
            'x-component': 'input',
          },
        },
      },
    },
    cc: {
      key: 'cc',
      type: 'string',
      name: 'cc',
      title: 'CC',
      'x-component': 'input',
      'x-component-props': { min: 1 },
    },
  },
};

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator
          ref={genRef}
          defaultValue={schema}
          transformer={{
            from: fromFormily,
            to: toFormily,
          }}
        />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

// const b = {
//   schema: {
//     type: 'object',
//     properties: {
//       array: {
//         type: 'array',
//         title: 'Name',
//         items: {
//           type: 'object',
//           properties: {
//             aa: {
//               type: 'string',
//               title: '\u63A7\u5236\u76F8\u90BB\u5B57\u6BB5\u663E\u793A\u9690\u85CF',
//               enum: [true, false],
//               'ui:widget': 'input',
//               enumNames: ['\u663E\u793A', '\u9690\u85CF'],
//             },
//             bb: { type: 'string', title: 'BB', 'ui:widget': 'input' },
//           },
//         },
//       },
//       cc: {
//         type: 'string',
//         title: 'CC',
//         'ui:widget': 'input',
//         'ui:options': { min: 1 },
//       },
//     },
//   },
// };

// console.log(toFormily(b));

export default Demo;`,_n=`import React from 'react';
import Generator, {
  defaultSettings,
  defaultCommonSettings,
  defaultGlobalSettings,
} from 'fr-generator';

const NewWidget = ({ value = 0, onChange }) => (
  <button onClick={() => onChange(value + 1)}>{value}</button>
);

const Demo = () => {
  console.log(defaultSettings, defaultCommonSettings, defaultGlobalSettings);

  return (
    <div style={{ height: '50vh' }}>
      <Generator
        widgets={{ NewWidget }}
        settings={[
          {
            title: '\u4E2A\u4EBA\u4FE1\u606F',
            widgets: [
              {
                text: '\u8BA1\u6570\u5668',
                name: 'asyncSelect',
                schema: {
                  title: '\u8BA1\u6570\u5668',
                  type: 'number',
                  widget: 'NewWidget',
                },
                setting: {
                  api: { title: 'api', type: 'string' },
                },
              },
              {
                text: '\u59D3\u540D',
                name: 'name',
                schema: {
                  title: '\u8F93\u5165\u6846',
                  type: 'string',
                },
                setting: {
                  maxLength: { title: '\u6700\u957F\u5B57\u6570', type: 'number' },
                },
              },
              {
                text: 'object',
                name: 'object',
                schema: {
                  title: '\u5BF9\u8C61',
                  type: 'object',
                  properties: {},
                },
                setting: {},
              },
              {
                text: 'array',
                name: 'array',
                schema: {
                  title: '\u6570\u7EC4',
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {},
                  },
                },
                setting: {},
              },
            ],
          },
        ]}
        commonSettings={{
          description: {
            title: '\u81EA\u5B9A\u4E49\u5171\u901A\u7528\u7684\u5165\u53C2',
            type: 'string',
          },
        }}
      />
    </div>
  );
};

export default Demo;`,xn=`import React, { useState, useRef } from 'react';
import { useHistory } from 'umi';
import Generator, { toFormily, fromFormily } from 'fr-generator';
import './index.less';

const Demo = () => {
  const ref = useRef();
  const { location, replace } = useHistory();
  const [isFormily, setIsFormily] = useState(location.query.type === 'formily');

  const goToFrPlayground = () => {
    ref.current.copyValue();
    window.open('/playground');
  };

  const switchMode = () => {
    if (isFormily) {
      setIsFormily(false);
      replace('/tools/generator/playground');
    } else {
      setIsFormily(true);
      replace('/tools/generator/playground?type=formily');
    }
  };

  return (
    <div className="fr-generator-playground" style={{ height: '80vh' }}>
      <Generator
        ref={ref}
        transformer={isFormily && { to: toFormily, from: fromFormily }}
        extraButtons={[
          { text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground },
          {
            text: 'Formily',
            shape: 'round',
            type: isFormily && 'primary',
            onClick: switchMode,
          },
        ]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,et=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,ct=gn.default={"guide-card":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(27)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:me}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r,l;return S.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return r=function(P,c){if(!c&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var A=O(c);if(A&&A.has(P))return A.get(P);var h={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in P)if(v!=="default"&&Object.prototype.hasOwnProperty.call(P,v)){var u=n?Object.getOwnPropertyDescriptor(P,v):null;u&&(u.get||u.set)?Object.defineProperty(h,v,u):h[v]=P[v]}return h.default=P,A&&A.set(P,h),h},O=function(P){if(typeof WeakMap!="function")return null;var c=new WeakMap,A=new WeakMap;return(O=function(n){return n?A:c})(P)},d=e("K+nK"),w.t0=d,w.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return w.t1=w.sent,o=(0,w.t0)(w.t1),w.t2=r,w.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return w.t3=w.sent,p=(0,w.t2)(w.t3),w.next=15,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 15:return g=w.sent,l=function(){var P=(0,p.useState)("Line"),c=(0,o.default)(P,2),A=c[0],h=c[1],n={Line:g.Line,Column:g.Column,PivotTable:g.PivotTable}[A];return p.default.createElement("div",null,p.default.createElement("div",{style:{marginBottom:10}},p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return h("Line")}},"\u6298\u7EBF\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return h("Column")}},"\u67F1\u72B6\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return h("PivotTable")}},"\u4EA4\u53C9\u8868")),p.default.createElement(n,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},w.abrupt("return",l);case 18:case"end":return w.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Line, Column, PivotTable } from 'chart-render';

export default () => {
  const [component, setComponent] = useState('Line');
  const ChartRender = { Line, Column, PivotTable }[component];

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Line')}
        >
          \u6298\u7EBF\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Column')}
        >
          \u67F1\u72B6\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('PivotTable')}
        >
          \u4EA4\u53C9\u8868
        </button>
      </div>

      <ChartRender
        meta={[
          { id: 'date', name: '\u65E5\u671F', isDim: true },
          { id: 'pv', name: '\u8BBF\u95EE\u91CF', isDim: false },
          { id: 'uv', name: '\u8BBF\u5BA2\u6570', isDim: false },
        ]}
        data={[
          { date: '20200101', pv: 100, uv: 50 },
          { date: '20200102', pv: 120, uv: 60 },
          { date: '20200103', pv: 140, uv: 70 },
          { date: '20200104', pv: 160, uv: 80 },
        ]}
      />
    </div>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    inverted
    label={{
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    }}
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20, pv: 120 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120, pv: 1120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21, pv: 121 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121, pv: 1121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15, pv: 115 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115, pv: 1115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40, pv: 140 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140, pv: 1140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31, pv: 131 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131, pv: 1131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32, pv: 132 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132, pv: 1132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30, pv: 130 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130, pv: 1130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    withArea // \u5F00\u542F\u9762\u79EF\u56FE
    isStack // \u5806\u53E0\u5C55\u793A
    isPercent // \u767E\u5206\u6BD4\u9762\u79EF\u56FE
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 782,
        valueB: 0.566,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 856,
        valueB: 0.403,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 886,
        valueB: 0.555,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 555,
        valueB: 0.444,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 444,
        valueB: 0.333,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 922,
        valueB: 0.778,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 888,
        valueB: 0.887,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 879,
        valueB: 0.87,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 800,
        valueB: 0.723,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 813,
        valueB: 0.789,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 500,
        valueB: 0.463,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 833,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 821,
        valueB: 0.442,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 834,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 803,
        valueB: 0.7,
      },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(w,T,P){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(T).length]}},w),o.default.createElement("p",null,JSON.stringify(T)),o.default.createElement("p",null,JSON.stringify(P)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    cellRender={(val, dimRecord, indId) => (
      <div>
        <p>\u53C2\u6570\u8868\uFF1A</p>
        <p
          style={{
            color: ['red', 'orange', 'yellow', 'green', 'blue'][
              Object.keys(dimRecord).length
            ],
          }}
        >
          {val}
        </p>
        <p>{JSON.stringify(dimRecord)}</p>
        <p>{JSON.stringify(indId)}</p>
      </div>
    )}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 782,
        valueB: 0.566,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 856,
        valueB: 0.403,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 886,
        valueB: 0.555,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 555,
        valueB: 0.444,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 444,
        valueB: 0.333,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 922,
        valueB: 0.778,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 888,
        valueB: 0.887,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 879,
        valueB: 0.87,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 800,
        valueB: 0.723,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 813,
        valueB: 0.789,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 500,
        valueB: 0.463,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 833,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 821,
        valueB: 0.442,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 834,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 803,
        valueB: 0.7,
      },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r,l;return S.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return r=function(P,c){if(!c&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var A=O(c);if(A&&A.has(P))return A.get(P);var h={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in P)if(v!=="default"&&Object.prototype.hasOwnProperty.call(P,v)){var u=n?Object.getOwnPropertyDescriptor(P,v):null;u&&(u.get||u.set)?Object.defineProperty(h,v,u):h[v]=P[v]}return h.default=P,A&&A.set(P,h),h},O=function(P){if(typeof WeakMap!="function")return null;var c=new WeakMap,A=new WeakMap;return(O=function(n){return n?A:c})(P)},d=e("K+nK"),w.t0=d,w.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return w.t1=w.sent,o=(0,w.t0)(w.t1),w.t2=r,w.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return w.t3=w.sent,p=(0,w.t2)(w.t3),w.next=15,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 15:return g=w.sent,l=function(){var P=(0,p.useState)(!1),c=(0,o.default)(P,2),A=c[0],h=c[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",p.default.createElement("input",{type:"checkbox",value:A,onChange:function(){return h(!A)}})),p.default.createElement(g.PivotTable,{leftExpandable:A,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},w.abrupt("return",l);case 18:case"end":return w.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { PivotTable } from 'chart-render';

export default () => {
  const [expandable, setExpandable] = useState(false);

  return (
    <>
      <label>
        \u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A
        <input
          type="checkbox"
          value={expandable}
          onChange={() => setExpandable(!expandable)}
        />
      </label>
      <PivotTable
        leftExpandable={expandable}
        showSubtotal={false}
        meta={[
          { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
          { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
          { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
          { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
          { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
          { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
        ]}
        data={[
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 782,
            valueB: 0.566,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 856,
            valueB: 0.403,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 886,
            valueB: 0.555,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 555,
            valueB: 0.444,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 444,
            valueB: 0.333,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 922,
            valueB: 0.778,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 888,
            valueB: 0.887,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 879,
            valueB: 0.87,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 800,
            valueB: 0.723,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 813,
            valueB: 0.789,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 500,
            valueB: 0.463,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 833,
            valueB: 0.456,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 821,
            valueB: 0.442,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 834,
            valueB: 0.456,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 803,
            valueB: 0.7,
          },
        ]}
      />
    </>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,i,w,T,P,c,A,h;return S.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return P=function(N,K){if(!K&&N&&N.__esModule)return N;if(N===null||typeof N!="object"&&typeof N!="function")return{default:N};var W=T(K);if(W&&W.has(N))return W.get(N);var Z={},G=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var le in N)if(le!=="default"&&Object.prototype.hasOwnProperty.call(N,le)){var De=G?Object.getOwnPropertyDescriptor(N,le):null;De&&(De.get||De.set)?Object.defineProperty(Z,le,De):Z[le]=N[le]}return Z.default=N,W&&W.set(N,Z),Z},T=function(N){if(typeof WeakMap!="function")return null;var K=new WeakMap,W=new WeakMap;return(T=function(G){return G?W:K})(N)},d=e("K+nK"),v.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return v.t0=d,v.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return v.t1=v.sent,o=(0,v.t0)(v.t1),v.t2=d,v.next=13,e.e(89).then(e.bind(null,"fWQN"));case 13:return v.t3=v.sent,p=(0,v.t2)(v.t3),v.t4=d,v.next=18,e.e(90).then(e.bind(null,"mtLc"));case 18:return v.t5=v.sent,g=(0,v.t4)(v.t5),v.t6=d,v.next=23,e.e(78).then(e.bind(null,"yKVA"));case 23:return v.t7=v.sent,O=(0,v.t6)(v.t7),v.t8=d,v.next=28,e.e(74).then(e.bind(null,"879j"));case 28:return v.t9=v.sent,r=(0,v.t8)(v.t9),v.t10=d,v.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return v.t11=v.sent,l=(0,v.t10)(v.t11),v.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 37:return i=v.sent,v.t12=P,v.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 41:return v.t13=v.sent,w=(0,v.t12)(v.t13),c={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},A=function(u){(0,O.default)(K,u);var N=(0,r.default)(K);function K(){return(0,p.default)(this,K),N.apply(this,arguments)}return(0,g.default)(K,[{key:"render",value:function(){var Z=this.props.form;return l.default.createElement("div",null,l.default.createElement(w.default,{form:Z,schema:c}),l.default.createElement(o.default,{type:"primary",onClick:Z.submit},"\u63D0\u4EA4"))}}]),K}(l.default.Component),h=(0,w.connectForm)(A),v.abrupt("return",h);case 47:case"end":return v.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { connectForm } from 'form-render';
// import 'antd/dist/antd.css';    \u5982\u679C\u9879\u76EE\u6CA1\u6709\u5BF9antd\u3001less\u505A\u4EFB\u4F55\u914D\u7F6E\u7684\u8BDD\uFF0C\u9700\u8981\u52A0\u4E0A

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

class Demo extends React.Component {
  render() {
    const { form } = this.props;
    return (
      <div>
        <FormRender form={form} schema={schema} />
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4
        </Button>
      </div>
    );
  }
}

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,i,w,T;return S.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l=function(h,n){if(!n&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var v=r(n);if(v&&v.has(h))return v.get(h);var u={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in h)if(K!=="default"&&Object.prototype.hasOwnProperty.call(h,K)){var W=N?Object.getOwnPropertyDescriptor(h,K):null;W&&(W.get||W.set)?Object.defineProperty(u,K,W):u[K]=h[K]}return u.default=h,v&&v.set(h,u),u},r=function(h){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(r=function(N){return N?v:n})(h)},d=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=d,c.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,o=(0,c.t0)(c.t1),c.t2=d,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,p=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=c.sent,c.t4=l,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,O=(0,c.t4)(c.t5),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},w=function(){var h=(0,O.useForm)();return p.default.createElement("div",null,p.default.createElement(O.default,{form:h,schema:i}),p.default.createElement(o.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4"))},T=w,c.abrupt("return",T);case 27:case"end":return c.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,i,w,T;return S.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l=function(h,n){if(!n&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var v=r(n);if(v&&v.has(h))return v.get(h);var u={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in h)if(K!=="default"&&Object.prototype.hasOwnProperty.call(h,K)){var W=N?Object.getOwnPropertyDescriptor(h,K):null;W&&(W.get||W.set)?Object.defineProperty(u,K,W):u[K]=h[K]}return u.default=h,v&&v.set(h,u),u},r=function(h){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(r=function(N){return N?v:n})(h)},d=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=d,c.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,o=(0,c.t0)(c.t1),c.t2=d,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,p=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=c.sent,c.t4=l,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,O=(0,c.t4)(c.t5),i={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},w=function(){var h=(0,O.useForm)(),n=function(u,N){N.length>0?alert("errors:"+JSON.stringify(N)):alert("formData:"+JSON.stringify(u,null,2))};return p.default.createElement("div",null,p.default.createElement(O.default,{form:h,schema:i,onFinish:n}),p.default.createElement(o.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4"))},T=w,c.abrupt("return",T);case 27:case"end":return c.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  displayType: 'row',
  labelWidth: 60,
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    siteUrl: {
      title: '\u7F51\u5740',
      type: 'string',
      placeholder: '\u6B64\u5904\u5FC5\u586B',
      required: true,
      props: {
        addonBefore: 'https://',
        addonAfter: '.com',
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    if (errors.length > 0) {
      alert('errors:' + JSON.stringify(errors));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,i;return S.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return l=function(){var c=(0,p.useForm)(),A=function(n,v){v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(n))};return o.default.createElement("div",null,o.default.createElement(p.default,{form:c,schema:r,onFinish:A}),o.default.createElement("button",{onClick:c.submit},"\u63D0\u4EA4"))},O=function(c,A){if(!A&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=g(A);if(h&&h.has(c))return h.get(c);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in c)if(u!=="default"&&Object.prototype.hasOwnProperty.call(c,u)){var N=v?Object.getOwnPropertyDescriptor(c,u):null;N&&(N.get||N.set)?Object.defineProperty(n,u,N):n[u]=c[u]}return n.default=c,h&&h.set(c,n),n},g=function(c){if(typeof WeakMap!="function")return null;var A=new WeakMap,h=new WeakMap;return(g=function(v){return v?h:A})(c)},d=e("K+nK"),T.t0=d,T.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=O,T.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 12:return T.t3=T.sent,p=(0,T.t2)(T.t3),r={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},i=l,T.abrupt("return",i);case 17:case"end":return T.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render'; // 1. \u6539 import

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
      required: true,
    },
  },
};

function Demo() {
  const form = useForm(); // 2. \u83B7\u53D6 form \u5B9E\u4F8B\uFF0C\u73B0\u5728\u6240\u6709\u8868\u5355\u65B9\u6CD5\u90FD\u6302\u5728\u4E0A\u9762
  // 3 onSubmit \u7684\u5165\u53C2
  const onSubmit = (formData, valid) => {
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };
  return (
    <div>
      <FormRender
        form={form} // 4 \u8865\u4E0A
        schema={schema}
        onFinish={onSubmit} // 5. \u8865\u4E0A
        // formData={formData} // 6. \u5E72\u6389
        // onChange={setData}
        // onValidate={setValid}
      />
      <button onClick={form.submit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,i,w,T,P,c,A;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var K=i(N);if(K&&K.has(u))return K.get(u);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in u)if(G!=="default"&&Object.prototype.hasOwnProperty.call(u,G)){var le=Z?Object.getOwnPropertyDescriptor(u,G):null;le&&(le.get||le.set)?Object.defineProperty(W,G,le):W[G]=u[G]}return W.default=u,K&&K.set(u,W),W},i=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,K=new WeakMap;return(i=function(Z){return Z?K:N})(u)},d=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=d,n.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.t2=d,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,p=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(21)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=d,n.next=20,Promise.all([e.e(0),e.e(14),e.e(20),e.e(24)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=w,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=n.sent,n.next=32,Promise.all([e.e(67),e.e(83)]).then(e.bind(null,"7t+U"));case 32:return l=n.sent,T=g.default.TextArea,P={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},c=function(){var u=(0,O.useState)(JSON.stringify(P)),N=(0,p.default)(u,2),K=N[0],W=N[1],Z=(0,O.useState)({}),G=(0,p.default)(Z,2),le=G[0],De=G[1],Ke=function(){try{var f=(0,l.updateSchemaToNewVersion)(K);De(f)}catch(M){console.log(M)}},cn=function(f){W(f.target.value)},jn=function(){W(JSON.stringify(JSON.parse(K),null,2))};return O.default.createElement("div",null,O.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),O.default.createElement(T,{style:{minHeight:400,marginTop:12,marginBottom:12},value:K,onChange:cn}),O.default.createElement(o.default,{style:{marginRight:12},onClick:jn},"\u683C\u5F0F\u5316\u65E7schema"),O.default.createElement(o.default,{type:"primary",onClick:Ke},"\u751F\u6210\u65B0\u7248schema"),O.default.createElement(T,{style:{minHeight:400,marginTop:12},value:JSON.stringify(le,null,2)}))},A=c,n.abrupt("return",A);case 38:case"end":return n.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { updateSchemaToNewVersion } from '../../packages/form-render/src/utils.js';
const TextArea = Input.TextArea;

const old = {
  type: 'object',
  properties: {
    number: {
      title: '\u6570\u5B57\u8F93\u5165\u6846',
      type: 'number',
      'ui:disabled': true,
    },
    checkbox: {
      title: '\u662F\u5426\u9009\u62E9',
      type: 'boolean',
      'ui:widget': 'switch',
    },
  },
  required: ['number'],
};

const Translator = () => {
  const [oldSchema, setOld] = useState(JSON.stringify(old));
  const [newSchema, setNew] = useState({});

  const handleClick = () => {
    try {
      const _newSchema = updateSchemaToNewVersion(oldSchema);
      setNew(_newSchema);
    } catch (err) {
      console.log(err);
    }
  };

  const onOldChange = e => {
    setOld(e.target.value);
  };

  const formatOld = () => {
    setOld(JSON.stringify(JSON.parse(oldSchema), null, 2));
  };

  return (
    <div>
      <div>\u586B\u5165\u65E7\u7248schema\uFF1A</div>
      <TextArea
        style={{ minHeight: 400, marginTop: 12, marginBottom: 12 }}
        value={oldSchema}
        onChange={onOldChange}
      />
      <Button style={{ marginRight: 12 }} onClick={formatOld}>
        \u683C\u5F0F\u5316\u65E7schema
      </Button>
      <Button type="primary" onClick={handleClick}>
        \u751F\u6210\u65B0\u7248schema
      </Button>
      <TextArea
        style={{ minHeight: 400, marginTop: 12 }}
        value={JSON.stringify(newSchema, null, 2)}
      />
    </div>
  );
};

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:J}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"display-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O;return S.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),g=function(w){return{type:"object",displayType:w,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(p.default,{schema:g("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(p.default,{schema:g("column")}))},l.abrupt("return",O);case 14:case"end":return l.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = displayType => ({
  type: 'object',
  displayType: displayType,
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    objectName: {
      title: '\u5BF9\u8C61',
      bind: 'obj',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },
  },
});

export default () => (
  <div>
    <h2>display: row</h2>
    <Form schema={schema('row')} />
    <h2>display: column</h2>
    <Form schema={schema('column')} />
  </div>
);`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O;return S.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),g={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},O=function(){return o.default.createElement(p.default,{schema:g})},l.abrupt("return",O);case 14:case"end":return l.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'inline',
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O;return S.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),g={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return o.default.createElement(p.default,{readOnly:!0,schema:g})},l.abrupt("return",O);case 14:case"end":return l.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O;return S.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),g={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return o.default.createElement(p.default,{labelWidth:"200",schema:g})},l.abrupt("return",O);case 14:case"end":return l.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
          width: '50%',
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
          width: '50%',
          labelWidth: 6,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return o.default.createElement(p.default,{schema:g})},r=O,i.abrupt("return",r);case 15:case"end":return i.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'list0',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return o.default.createElement(p.default,{schema:g})},r=O,i.abrupt("return",r);case 15:case"end":return i.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list1',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return o.default.createElement(p.default,{schema:g})},r=O,i.abrupt("return",r);case 15:case"end":return i.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list2',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return o.default.createElement(p.default,{schema:g})},r=O,i.abrupt("return",r);case 15:case"end":return i.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list3',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'list1',
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,i,w,T,P,c,A;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return P=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var K=T(N);if(K&&K.has(u))return K.get(u);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in u)if(G!=="default"&&Object.prototype.hasOwnProperty.call(u,G)){var le=Z?Object.getOwnPropertyDescriptor(u,G):null;le&&(le.get||le.set)?Object.defineProperty(W,G,le):W[G]=u[G]}return W.default=u,K&&K.set(u,W),W},T=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,K=new WeakMap;return(T=function(Z){return Z?K:N})(u)},d=e("K+nK"),n.next=5,e.e(22).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=d,n.next=8,e.e(23).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=d,n.next=15,e.e(14).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,p=(0,n.t2)(n.t3),n.next=19,e.e(16).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=d,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=d,n.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.t8=P,n.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return n.t9=n.sent,r=(0,n.t8)(n.t9),n.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 36:return l=n.sent,n.t10=P,n.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 40:return n.t11=n.sent,i=(0,n.t10)(n.t11),n.next=44,e.e(17).then(e.bind(null,"OH0R"));case 44:return w=n.sent,c=function(){var u=(0,i.useForm)(),N=(0,r.useState)({}),K=(0,O.default)(N,2),W=K[0],Z=K[1],G=function(){(0,w.fakeApi)("xxx/getForm").then(function(Ke){u.setValues({input1:"hello world",select1:"c"})})};(0,r.useEffect)(function(){(0,w.delay)(1e3).then(function(De){Z({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var le=function(Ke,cn){cn.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(cn.map(function(jn){return jn.name}))):(0,w.fakeApi)("xxx/submit",Ke).then(function(jn){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return r.default.createElement("div",{style:{width:"400px"}},r.default.createElement(i.default,{form:u,schema:W,onFinish:le}),r.default.createElement(o.default,null,r.default.createElement(p.default,{onClick:G},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),r.default.createElement(p.default,{type:"primary",onClick:u.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},A=c,n.abrupt("return",A);case 48:case"end":return n.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './utils';

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ input1: 'hello world', select1: 'c' });
    });
  };

  useEffect(() => {
    // \u5F02\u6B65\u52A0\u8F7D\u8868\u5355
    delay(1000).then(_ => {
      setSchema({
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      });
    });
  }, []);

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,i,w,T,P,c,A;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return T=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var K=w(N);if(K&&K.has(u))return K.get(u);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in u)if(G!=="default"&&Object.prototype.hasOwnProperty.call(u,G)){var le=Z?Object.getOwnPropertyDescriptor(u,G):null;le&&(le.get||le.set)?Object.defineProperty(W,G,le):W[G]=u[G]}return W.default=u,K&&K.set(u,W),W},w=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,K=new WeakMap;return(w=function(Z){return Z?K:N})(u)},d=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=d,n.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.t2=d,n.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return n.t3=n.sent,p=(0,n.t2)(n.t3),n.next=17,e.e(16).then(e.t.bind(null,"tL+A",7));case 17:return n.t4=d,n.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=d,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=n.sent,n.t8=T,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,l=(0,n.t8)(n.t9),n.next=37,e.e(17).then(e.bind(null,"OH0R"));case 37:return i=n.sent,P={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},c=function(){var u=(0,l.useForm)(),N=function(Z,G){G.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(G.map(function(le){return le.name}))):(0,i.fakeApi)("xxx/submit",Z).then(function(le){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},K=function(Z){var G=Z.data,le=Z.errors,De=Z.schema,Ke=(0,p.default)(Z,["data","errors","schema"]);return(0,i.fakeApi)("xxx/validation").then(function(cn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(l.default,{form:u,schema:P,beforeFinish:K,onFinish:N}),O.default.createElement(o.default,{type:"primary",onClick:u.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},A=c,n.abrupt("return",A);case 42:case"end":return n.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  // \u670D\u52A1\u7AEF\u6821\u9A8C\u5728\u8FD9\u91CC\u505A
  const beforeFinish = ({ data, errors, schema, ...rest }) => {
    return fakeApi('xxx/validation').then(_ => {
      return { name: 'select1', error: ['\u5916\u90E8\u6821\u9A8C\u9519\u8BEF'] };
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        beforeFinish={beforeFinish}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,i,w,T,P,c,A;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return T=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var K=w(N);if(K&&K.has(u))return K.get(u);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in u)if(G!=="default"&&Object.prototype.hasOwnProperty.call(u,G)){var le=Z?Object.getOwnPropertyDescriptor(u,G):null;le&&(le.get||le.set)?Object.defineProperty(W,G,le):W[G]=u[G]}return W.default=u,K&&K.set(u,W),W},w=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,K=new WeakMap;return(w=function(Z){return Z?K:N})(u)},d=e("K+nK"),n.next=5,e.e(22).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=d,n.next=8,e.e(23).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=d,n.next=15,e.e(14).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,p=(0,n.t2)(n.t3),n.next=19,e.e(16).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=d,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=d,n.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 31:return r=n.sent,n.t8=T,n.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 35:return n.t9=n.sent,l=(0,n.t8)(n.t9),n.next=39,e.e(17).then(e.bind(null,"OH0R"));case 39:return i=n.sent,P={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},c=function(){var u=(0,l.useForm)(),N=function(Z,G){G.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(G.map(function(le){return le.name}))):(0,i.fakeApi)("xxx/submit",Z).then(function(le){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},K=function(){(0,i.fakeApi)("xxx/getForm").then(function(Z){u.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(l.default,{form:u,schema:P,onFinish:N}),O.default.createElement(o.default,null,O.default.createElement(p.default,{onClick:K},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),O.default.createElement(p.default,{type:"primary",onClick:u.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},A=c,n.abrupt("return",A);case 44:case"end":return n.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message, Space } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F\u8303\u56F4',
      type: 'range',
      format: 'date',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ startDate: '2020-04-04', endDate: '2020-04-24' });
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,i,w,T,P,c;return S.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return w=function(v,u){if(!u&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var N=i(u);if(N&&N.has(v))return N.get(v);var K={},W=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Z in v)if(Z!=="default"&&Object.prototype.hasOwnProperty.call(v,Z)){var G=W?Object.getOwnPropertyDescriptor(v,Z):null;G&&(G.get||G.set)?Object.defineProperty(K,Z,G):K[Z]=v[Z]}return K.default=v,N&&N.set(v,K),K},i=function(v){if(typeof WeakMap!="function")return null;var u=new WeakMap,N=new WeakMap;return(i=function(W){return W?N:u})(v)},d=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=d,h.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,o=(0,h.t0)(h.t1),h.next=12,e.e(16).then(e.t.bind(null,"tL+A",7));case 12:return h.t2=d,h.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return h.t3=h.sent,p=(0,h.t2)(h.t3),h.t4=w,h.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return h.t5=h.sent,g=(0,h.t4)(h.t5),h.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 24:return O=h.sent,h.t6=w,h.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 28:return h.t7=h.sent,r=(0,h.t6)(h.t7),h.next=32,e.e(17).then(e.bind(null,"OH0R"));case 32:return l=h.sent,T={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},P=function(){var v=(0,r.useForm)(),u=function(){v.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},N=function(W,Z){Z.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Z.map(function(G){return G.name}))):p.default.info(JSON.stringify(W))};return g.default.createElement("div",{style:{width:"400px"}},g.default.createElement(r.default,{form:v,schema:T,onMount:u,onFinish:N}),g.default.createElement(o.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},c=P,h.abrupt("return",c);case 37:case"end":return h.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          widget: 'select',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setSchemaByPath('obj1.select1', {
      enum: ['east', 'south', 'west', 'north'],
      enumNames: ['\u4E1C', '\u5357', '\u897F', '\u5317'],
    });
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.info(JSON.stringify(data));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        onMount={onMount}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,i;return S.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return O=function(c,A){if(!A&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=g(A);if(h&&h.has(c))return h.get(c);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in c)if(u!=="default"&&Object.prototype.hasOwnProperty.call(c,u)){var N=v?Object.getOwnPropertyDescriptor(c,u):null;N&&(N.get||N.set)?Object.defineProperty(n,u,N):n[u]=c[u]}return n.default=c,h&&h.set(c,n),n},g=function(c){if(typeof WeakMap!="function")return null;var A=new WeakMap,h=new WeakMap;return(g=function(v){return v?h:A})(c)},d=e("K+nK"),T.t0=d,T.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=O,T.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 11:return T.t3=T.sent,p=(0,T.t2)(T.t3),r={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var c=(0,p.useForm)();return o.default.createElement(p.default,{form:c,schema:r})},i=l,T.abrupt("return",i);case 17:case"end":return T.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    select1: {
      title: '\u5355\u9009',
      description: '\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D',
      type: 'string',
      enum: ['a', 'b'],
      enumNames: ['\u9690\u85CF\u8F93\u5165\u6846', '\u663E\u793A\u8F93\u5165\u6846'],
      disabled: '{{rootValue.input1.length > 5}}',
      default: 'a',
    },
    input1: {
      title: '\u8F93\u5165\u6846',
      description: '\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26',
      type: 'string',
      hidden: '{{formData.select1 == "a"}}',
    },
  },
};

const Demo1 = () => {
  const form = useForm();
  return <FormRender form={form} schema={schema} />;
};

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O;return S.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(18)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return g=l.sent,O=function(){return o.default.createElement(p.default,{schema:g.expression})},l.abrupt("return",O);case 16:case"end":return l.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ge},"json/schema.js":{import:"../json/schema",content:Jn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,i,w;return S.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return O=function(A,h){if(!h&&A&&A.__esModule)return A;if(A===null||typeof A!="object"&&typeof A!="function")return{default:A};var n=g(h);if(n&&n.has(A))return n.get(A);var v={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in A)if(N!=="default"&&Object.prototype.hasOwnProperty.call(A,N)){var K=u?Object.getOwnPropertyDescriptor(A,N):null;K&&(K.get||K.set)?Object.defineProperty(v,N,K):v[N]=A[N]}return v.default=A,n&&n.set(A,v),v},g=function(A){if(typeof WeakMap!="function")return null;var h=new WeakMap,n=new WeakMap;return(g=function(u){return u?n:h})(A)},P.t0=O,P.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return P.t1=P.sent,d=(0,P.t0)(P.t1),P.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return o=P.sent,P.t2=O,P.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 13:return P.t3=P.sent,p=(0,P.t2)(P.t3),r=function(A){return new Promise(function(h){return setTimeout(h,A)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},i=function(){var A=(0,p.useForm)(),h=function(){A.setValues({input1:"hello world"}),r(3e3).then(function(v){A.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(p.default,{form:A,schema:l,onMount:h})},w=i,P.abrupt("return",w);case 20:case"end":return P.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const delay = ms => new Promise(res => setTimeout(res, ms));

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u4E0B\u62C9\u9009\u6846',
      description: '\u52A0\u8F7D\u4E2D...',
      type: 'string',
      enum: [],
      widget: 'select',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setValues({ input1: 'hello world' });

    delay(3000).then(_ => {
      form.setSchemaByPath('select1', {
        description: '',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u65E9', '\u4E2D', '\u665A'],
      });
    });
  };

  return <FormRender form={form} schema={schema} onMount={onMount} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return o.default.createElement(p.default,{schema:g})},r=O,i.abrupt("return",r);case 15:case"end":return i.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'list0',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return o.default.createElement(p.default,{schema:g})},r=O,i.abrupt("return",r);case 15:case"end":return i.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list1',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return o.default.createElement(p.default,{schema:g})},r=O,i.abrupt("return",r);case 15:case"end":return i.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list2',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return o.default.createElement(p.default,{schema:g})},r=O,i.abrupt("return",r);case 15:case"end":return i.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list3',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'list1',
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),window.hello=function(w){var T=w.value;console.log(T)},g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return o.default.createElement(p.default,{schema:g})},r=O,i.abrupt("return",r);case 16:case"end":return i.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

window.hello = ({ value }) => {
  console.log(value);
};

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list4',
      itemProps: {
        buttons: [
          {
            callback: 'hello',
            text: '\u590D\u5236',
          },
        ],
      },
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,i;return S.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return O=function(c,A){if(!A&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=g(A);if(h&&h.has(c))return h.get(c);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in c)if(u!=="default"&&Object.prototype.hasOwnProperty.call(c,u)){var N=v?Object.getOwnPropertyDescriptor(c,u):null;N&&(N.get||N.set)?Object.defineProperty(n,u,N):n[u]=c[u]}return n.default=c,h&&h.set(c,n),n},g=function(c){if(typeof WeakMap!="function")return null;var A=new WeakMap,h=new WeakMap;return(g=function(v){return v?h:A})(c)},T.t0=O,T.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return T.t1=T.sent,d=(0,T.t0)(T.t1),T.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return o=T.sent,T.t2=O,T.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 13:return T.t3=T.sent,p=(0,T.t2)(T.t3),r={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var c=(0,p.useForm)(),A={"#":function(n){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",n)},input1:function(n){c.setValueByPath("input2",n)}};return d.default.createElement(p.default,{form:c,schema:r,watch:A})},i=l,T.abrupt("return",i);case 19:case"end":return T.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const watch = {
    // # \u4E3A\u5168\u5C40
    '#': val => {
      console.log('\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A', val);
    },
    input1: val => {
      form.setValueByPath('input2', val);
    },
  };

  return <FormRender form={form} schema={schema} watch={watch} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,i,w,T;return S.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l=function(h,n){if(!n&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var v=r(n);if(v&&v.has(h))return v.get(h);var u={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in h)if(K!=="default"&&Object.prototype.hasOwnProperty.call(h,K)){var W=N?Object.getOwnPropertyDescriptor(h,K):null;W&&(W.get||W.set)?Object.defineProperty(u,K,W):u[K]=h[K]}return u.default=h,v&&v.set(h,u),u},r=function(h){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(r=function(N){return N?v:n})(h)},d=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=d,c.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,o=(0,c.t0)(c.t1),c.t2=l,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,p=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=c.sent,c.t4=l,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,O=(0,c.t4)(c.t5),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},w=function(){var h=(0,O.useForm)(),n=function(N,K){K.length>0?alert("errorFields:"+JSON.stringify(K)):alert("formData:"+JSON.stringify(N,null,2))},v={input1:function(N){N.length>2?h.setSchemaByPath("obj1.select",function(K){var W=K.enumNames;return{enumNames:W.map(function(Z){return Z+"a"})}}):h.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return p.default.createElement("div",null,p.default.createElement(O.default,{form:h,schema:i,onFinish:n,watch:v}),p.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return h.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),p.default.createElement(o.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4"))},T=w,c.abrupt("return",T);case 27:case"end":return c.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          widget: 'radio',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errorFields) => {
    if (errorFields.length > 0) {
      alert('errorFields:' + JSON.stringify(errorFields));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  const watch = {
    input1: val => {
      if (val.length > 2) {
        form.setSchemaByPath('obj1.select', ({ enumNames }) => {
          return {
            enumNames: enumNames.map(item => item + 'a'),
          };
        });
      } else {
        form.setSchemaByPath('obj1.select', { enumNames: ['\u65E9', '\u4E2D', '\u665A'] });
      }
    },
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        watch={watch}
      />
      <Button
        type=""
        style={{ marginRight: 8 }}
        onClick={() =>
          form.setSchemaByPath('input2', {
            title: '\u7F16\u8F91\u6846',
            format: 'textarea',
          })
        }
      >
        \u5C06 input \u6539\u4E3A textarea
      </Button>
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,i,w,T,P,c,A;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var K=i(N);if(K&&K.has(u))return K.get(u);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in u)if(G!=="default"&&Object.prototype.hasOwnProperty.call(u,G)){var le=Z?Object.getOwnPropertyDescriptor(u,G):null;le&&(le.get||le.set)?Object.defineProperty(W,G,le):W[G]=u[G]}return W.default=u,K&&K.set(u,W),W},i=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,K=new WeakMap;return(i=function(Z){return Z?K:N})(u)},d=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=d,n.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.next=12,Promise.all([e.e(3),e.e(21)]).then(e.t.bind(null,"cUip",7));case 12:return n.t2=d,n.next=15,Promise.all([e.e(0),e.e(14),e.e(20),e.e(24)]).then(e.t.bind(null,"iJl9",7));case 15:return n.t3=n.sent,p=(0,n.t2)(n.t3),n.t4=d,n.next=20,e.e(91).then(e.bind(null,"0Owb"));case 20:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=w,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=n.sent,n.t8=w,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,l=(0,n.t8)(n.t9),T={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},P=function(u){return console.log("widget props:",u),O.default.createElement(p.default,(0,g.default)({addonBefore:"http://",addonAfter:".com"},u))},c=function(){var u=(0,l.useForm)(),N=function(){};return O.default.createElement("div",null,O.default.createElement(l.default,{readOnly:!0,form:u,schema:T,widgets:{site:P},onFinish:function(W){return alert(JSON.stringify(W,null,2))}}),O.default.createElement(o.default,{type:"primary",onClick:u.submit},"\u63D0\u4EA4"))},A=c,n.abrupt("return",A);case 40:case"end":return n.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import Form, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      type: 'string',
      widget: 'site',
    },
    select: {
      title: '\u5355\u9009',
      type: 'number',
      enum: [1, 2, 3],
      enumNames: ['\u9009\u98791', '\u9009\u98792', '\u9009\u98793'],
    },
  },
};

const SiteInput = props => {
  console.log('widget props:', props);
  return <Input addonBefore="http://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  const handleSubmit = () => {};
  return (
    <div>
      <Form
        readOnly
        form={form}
        schema={schema}
        widgets={{ site: SiteInput }}
        onFinish={formData => alert(JSON.stringify(formData, null, 2))}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O;return S.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(18)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return g=l.sent,O=function(){return o.default.createElement(p.default,{schema:g.basic})},l.abrupt("return",O);case 16:case"end":return l.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ge},"json/schema.js":{import:"../json/schema",content:Jn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O;return S.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(18)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return g=l.sent,O=function(){return o.default.createElement(p.default,{schema:g.titleTrick})},l.abrupt("return",O);case 16:case"end":return l.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ge},"json/schema.js":{import:"../json/schema",content:Jn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(27)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Te},"main.js":{import:"./main",content:Mn},"json/simplest.json":{import:"./json/simplest.json",content:wn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Sn},"monaco/index.js":{import:"./monaco",content:pn},"suggestionsMap.js":{import:"./suggestionsMap",content:Xe},"index.css":{import:"./index.css",content:$n}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.5-beta.19"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(27)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:Fn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.1"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,i,w;return S.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return d=e("K+nK"),P.t0=d,P.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return P.t1=P.sent,o=(0,P.t0)(P.t1),P.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(65)]).then(e.bind(null,"P2DI"));case 8:for(p=P.sent,g=[],O=0;O<6;O++)g.push({id:O.toString(),title:"\u6807\u9898".concat(O+1),created_at:new Date().getTime()});return r={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(A,h){return o.default.createElement("a",{onClick:function(){return alert(A.title)}},"\u7F16\u8F91")}}],i=function(){var A=function(){return{rows:g,total:g.length}};return o.default.createElement(p.TableProvider,null,o.default.createElement(p.Search,{schema:r,api:A}),o.default.createElement(p.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},w=i,P.abrupt("return",w);case 16:case"end":return P.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Table, Search, TableProvider } from 'table-render';

const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    id: i.toString(),
    title: \`\u6807\u9898\${i + 1}\`,
    created_at: new Date().getTime(),
  });
}

// \u8BE6\u7EC6\u53EF\u89C1 form-render \u7684\u4F7F\u7528
const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u6807\u9898',
      type: 'string',
      'ui:width': '30%',
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      'ui:width': '30%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20 antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: (row, record) => <a onClick={() => alert(row.title)}>\u7F16\u8F91</a>,
  },
];

const Wrapper = () => {
  const searchApi = () => {
    return {
      rows: dataSource,
      total: dataSource.length,
    };
  };
  return (
    <TableProvider>
      <Search schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </TableProvider>
  );
};

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(64)]).then(e.bind(null,"nYSz"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),g={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},O=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(p.default,{defaultValue:g}))},r=O,i.abrupt("return",r);case 15:case"end":return i.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Generator from 'fr-generator';

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const Demo = () => {
  return (
    <div style={{ height: '80vh' }}>
      <Generator defaultValue={defaultValue} />
    </div>
  );
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(27)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Rn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(27)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:We}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(27)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:_n}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(L.dynamic)({loader:function(){var E=Object(U.a)(S.a.mark(function D(){return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(27)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:xn},"index.less":{import:"./index.less",content:et}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Kn,gn,e){},Zs1V:function(Kn){Kn.exports=JSON.parse("{}")},f3kx:function(Kn,gn,e){"use strict";e.r(gn);var U=e("q1tI"),a=e.n(U),S=e("dEAq"),L=e.n(S),me=e("0zqC"),J=e("JjdP"),Be=a.a.memo(J.default["docs-playground"].component);gn.default=Pe=>(a.a.useEffect(()=>{Pe!=null&&Pe.location.hash&&S.AnchorLink.scrollToAnchor(decodeURIComponent(Pe.location.hash.slice(1)))},[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"}),a.a.createElement(me.default,J.default["docs-playground"].previewerProps,a.a.createElement(Be,null)))))},p8sG:function(Kn,gn,e){"use strict";Kn.exports=e("80pN")}}]);