(window.webpackJsonp=window.webpackJsonp||[]).push([[33,14],{"0zqC":function(Tn,cn,e){"use strict";e.r(cn);var B=e("tJVT"),r=e("q1tI"),v=e.n(r),M=e("wx14"),ae=e("rePB"),L=e("ODXe"),Pe=e("U8pU"),Re=e("Ff2n"),ce=e("VTBJ"),Nn=e("TSYQ"),Oe=e.n(Nn),qe=e("Zm9Q"),In=e("5Z9U"),bn=e("6cGi"),on=e("KQm4"),$e=e("wgJM"),Kn=e("t23M");function wn(l){var d=Object(r.useRef)(),g=Object(r.useRef)(!1);function R(){for(var j=arguments.length,C=new Array(j),I=0;I<j;I++)C[I]=arguments[I];g.current||($e.a.cancel(d.current),d.current=Object($e.a)(function(){l.apply(void 0,C)}))}return Object(r.useEffect)(function(){return function(){g.current=!0,$e.a.cancel(d.current)}},[]),R}function On(l){var d=Object(r.useRef)([]),g=Object(r.useState)({}),R=Object(L.a)(g,2),j=R[1],C=Object(r.useRef)(typeof l=="function"?l():l),I=wn(function(){var K=C.current;d.current.forEach(function(W){K=W(K)}),d.current=[],C.current=K,j({})});function F(K){d.current.push(K),I()}return[C.current,F]}var Ne=e("4IlW");function nt(l,d){var g,R=l.prefixCls,j=l.id,C=l.active,I=l.rtl,F=l.tab,K=F.key,W=F.tab,$=F.disabled,U=F.closeIcon,z=l.tabBarGutter,re=l.tabPosition,H=l.closable,Y=l.renderWrapper,ie=l.removeAriaLabel,J=l.editable,q=l.onClick,ne=l.onRemove,X=l.onFocus,se="".concat(R,"-tab");r.useEffect(function(){return ne},[]);var k={};re==="top"||re==="bottom"?k[I?"marginLeft":"marginRight"]=z:k.marginBottom=z;var pe=J&&H!==!1&&!$;function _(te){$||q(te)}function le(te){te.preventDefault(),te.stopPropagation(),J.onEdit("remove",{key:K,event:te})}var ue=r.createElement("div",{key:K,ref:d,className:Oe()(se,(g={},Object(ae.a)(g,"".concat(se,"-with-remove"),pe),Object(ae.a)(g,"".concat(se,"-active"),C),Object(ae.a)(g,"".concat(se,"-disabled"),$),g)),style:k,onClick:_},r.createElement("div",{role:"tab","aria-selected":C,id:j&&"".concat(j,"-tab-").concat(K),className:"".concat(se,"-btn"),"aria-controls":j&&"".concat(j,"-panel-").concat(K),"aria-disabled":$,tabIndex:$?null:0,onClick:function(G){G.stopPropagation(),_(G)},onKeyDown:function(G){[Ne.a.SPACE,Ne.a.ENTER].includes(G.which)&&(G.preventDefault(),_(G))},onFocus:X},W),pe&&r.createElement("button",{type:"button","aria-label":ie||"remove",tabIndex:0,className:"".concat(se,"-remove"),onClick:function(G){G.stopPropagation(),le(G)}},U||J.removeIcon||"\xD7"));return Y&&(ue=Y(ue)),ue}var Bn=r.forwardRef(nt),tt={width:0,height:0,left:0,top:0};function ct(l,d,g){return Object(r.useMemo)(function(){for(var R,j=new Map,C=d.get((R=l[0])===null||R===void 0?void 0:R.key)||tt,I=C.left+C.width,F=0;F<l.length;F+=1){var K=l[F].key,W=d.get(K);if(!W){var $;W=d.get(($=l[F-1])===null||$===void 0?void 0:$.key)||tt}var U=j.get(K)||Object(ce.a)({},W);U.right=I-U.left-U.width,j.set(K,U)}return j},[l.map(function(R){return R.key}).join("_"),d,g])}var rt={width:0,height:0,left:0,top:0,right:0};function mt(l,d,g,R,j){var C=j.tabs,I=j.tabPosition,F=j.rtl,K,W,$;["top","bottom"].includes(I)?(K="width",W=F?"right":"left",$=Math.abs(d.left)):(K="height",W="top",$=-d.top);var U=d[K],z=g[K],re=R[K],H=U;return z+re>U&&(H=U-re),Object(r.useMemo)(function(){if(!C.length)return[0,0];for(var Y=C.length,ie=Y,J=0;J<Y;J+=1){var q=l.get(C[J].key)||rt;if(q[W]+q[K]>$+H){ie=J-1;break}}for(var ne=0,X=Y-1;X>=0;X-=1){var se=l.get(C[X].key)||rt;if(se[W]<$){ne=X+1;break}}return[ne,ie]},[l,$,H,I,C.map(function(Y){return Y.key}).join("_"),F])}var Wn=e("Gytx"),at=e.n(Wn),zn=e("Kwbf");function ft(l,d){var g=l.prefixCls,R=l.invalidate,j=l.item,C=l.renderItem,I=l.responsive,F=l.registerSize,K=l.itemKey,W=l.className,$=l.style,U=l.children,z=l.display,re=l.order,H=l.component,Y=H===void 0?"div":H,ie=Object(Re.a)(l,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),J=I&&!z;function q(pe){F(K,pe)}r.useEffect(function(){return function(){q(null)}},[]);var ne=C&&j!==void 0?C(j):U,X;R||(X={opacity:J?0:1,height:J?0:void 0,overflowY:J?"hidden":void 0,order:I?re:void 0,pointerEvents:J?"none":void 0});var se={};J&&(se["aria-hidden"]=!0);var k=r.createElement(Y,Object(M.a)({className:Oe()(!R&&g,W),style:Object(ce.a)(Object(ce.a)({},X),$)},se,ie,{ref:d}),ne);return I&&(k=r.createElement(Kn.default,{onResize:function(_){var le=_.offsetWidth;q(le)}},k)),k}var Ln=r.forwardRef(ft);Ln.displayName="Item";var xn=Ln;function Un(){var l=Object(r.useState)({}),d=Object(L.a)(l,2),g=d[1],R=Object(r.useRef)([]),j=Object(r.useRef)(!1),C=0,I=0;Object(r.useEffect)(function(){return function(){j.current=!0}},[]);function F(K){var W=C;C+=1,R.current.length<W+1&&(R.current[W]=K);var $=R.current[W];function U(z){R.current[W]=typeof z=="function"?z(R.current[W]):z,$e.a.cancel(I),I=Object($e.a)(function(){j.current||g({})})}return[$,U]}return F}var st=function(d,g){var R=r.useContext(ln);if(!R){var j=d.component,C=j===void 0?"div":j,I=Object(Re.a)(d,["component"]);return r.createElement(C,Object(M.a)({},I,{ref:g}))}var F=R.className,K=Object(Re.a)(R,["className"]),W=d.className,$=Object(Re.a)(d,["className"]);return r.createElement(ln.Provider,{value:null},r.createElement(xn,Object(M.a)({ref:g,className:Oe()(F,W)},K,$)))},$n=r.forwardRef(st);$n.displayName="RawItem";var it=$n,ln=r.createContext(null),Gn="responsive",ot="invalidate";function mn(l){return"+ ".concat(l.length," ...")}function D(l,d){var g=l.prefixCls,R=g===void 0?"rc-overflow":g,j=l.data,C=j===void 0?[]:j,I=l.renderItem,F=l.renderRawItem,K=l.itemKey,W=l.itemWidth,$=W===void 0?10:W,U=l.ssr,z=l.style,re=l.className,H=l.maxCount,Y=l.renderRest,ie=l.renderRawRest,J=l.suffix,q=l.component,ne=q===void 0?"div":q,X=l.itemComponent,se=l.onVisibleChange,k=Object(Re.a)(l,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),pe=Un(),_=U==="full",le=pe(null),ue=Object(L.a)(le,2),te=ue[0],G=ue[1],oe=te||0,fe=pe(new Map),me=Object(L.a)(fe,2),ye=me[0],Ie=me[1],he=pe(0),ge=Object(L.a)(he,2),De=ge[0],Ee=ge[1],Ce=pe(0),Se=Object(L.a)(Ce,2),Fe=Se[0],Ue=Se[1],Ae=pe(0),Me=Object(L.a)(Ae,2),xe=Me[0],we=Me[1],Sn=Object(r.useState)(null),Qe=Object(L.a)(Sn,2),Ve=Qe[0],nn=Qe[1],hn=Object(r.useState)(null),vn=Object(L.a)(hn,2),je=vn[0],Be=vn[1],Ge=r.useMemo(function(){return je===null&&_?Number.MAX_SAFE_INTEGER:je||0},[je,te]),Je=Object(r.useState)(!1),An=Object(L.a)(Je,2),Hn=An[0],Mn=An[1],Xe="".concat(R,"-item"),Cn=Math.max(De,Fe),tn=C.length&&H===Gn,Rn=H===ot,He=tn||typeof H=="number"&&C.length>H,Ze=Object(r.useMemo)(function(){var de=C;return tn?te===null&&_?de=C:de=C.slice(0,Math.min(C.length,oe/$)):typeof H=="number"&&(de=C.slice(0,H)),de},[C,$,te,H,tn]),jn=Object(r.useMemo)(function(){return tn?C.slice(Ge+1):C.slice(Ze.length)},[C,Ze,tn,Ge]),an=Object(r.useCallback)(function(de,be){var Te;return typeof K=="function"?K(de):(Te=K&&(de==null?void 0:de[K]))!==null&&Te!==void 0?Te:be},[K]),ze=Object(r.useCallback)(I||function(de){return de},[I]);function We(de,be){Be(de),be||(Mn(de<C.length-1),se==null||se(de))}function Yn(de,be){G(be.clientWidth)}function Qn(de,be){Ie(function(Te){var Ye=new Map(Te);return be===null?Ye.delete(de):Ye.set(de,be),Ye})}function lt(de,be){Ue(be),Ee(Fe)}function gn(de,be){we(be)}function dn(de){return ye.get(an(Ze[de],de))}r.useLayoutEffect(function(){if(oe&&Cn&&Ze){var de=xe,be=Ze.length,Te=be-1;if(!be){We(0),nn(null);return}for(var Ye=0;Ye<be;Ye+=1){var qn=dn(Ye);if(qn===void 0){We(Ye-1,!0);break}if(de+=qn,Ye===Te-1&&de+dn(Te)<=oe){We(Te),nn(null);break}else if(de+Cn>oe){We(Ye-1),nn(de-qn-xe+Fe);break}else if(Ye===Te){We(Te),nn(de-xe);break}}J&&dn(0)+xe>oe&&nn(null)}},[oe,ye,Fe,xe,an,Ze]);var Xn=Hn&&!!jn.length,yn={};Ve!==null&&tn&&(yn={position:"absolute",left:Ve,top:0});var sn={prefixCls:Xe,responsive:tn,component:X,invalidate:Rn},Zn=F?function(de,be){var Te=an(de,be);return r.createElement(ln.Provider,{key:Te,value:Object(ce.a)(Object(ce.a)({},sn),{},{order:be,item:de,itemKey:Te,registerSize:Qn,display:be<=Ge})},F(de,be))}:function(de,be){var Te=an(de,be);return r.createElement(xn,Object(M.a)({},sn,{order:be,key:Te,item:de,renderItem:ze,itemKey:Te,registerSize:Qn,display:be<=Ge}))},En,kn={order:Xn?Ge:Number.MAX_SAFE_INTEGER,className:"".concat(Xe,"-rest"),registerSize:lt,display:Xn};if(ie)ie&&(En=r.createElement(ln.Provider,{value:Object(ce.a)(Object(ce.a)({},sn),kn)},ie(jn)));else{var rn=Y||mn;En=r.createElement(xn,Object(M.a)({},sn,kn),typeof rn=="function"?rn(jn):rn)}var Pn=r.createElement(ne,Object(M.a)({className:Oe()(!Rn&&R,re),style:z,ref:d},k),Ze.map(Zn),He?En:null,J&&r.createElement(xn,Object(M.a)({},sn,{order:Ge,className:"".concat(Xe,"-suffix"),registerSize:gn,display:!0,style:yn}),J));return tn&&(Pn=r.createElement(Kn.default,{onResize:Yn},Pn)),Pn}var E=r.forwardRef(D);E.displayName="Overflow",E.Item=it,E.RESPONSIVE=Gn,E.INVALIDATE=ot;var T=E,f=T,i=e("1OyB"),h=e("vuIU"),b=e("Ji7U"),O=e("LK+K"),u=e("bT9E"),p=e("YrtM"),s=r.createContext(null);function N(l,d){var g=Object(ce.a)({},l);return Object.keys(d).forEach(function(R){var j=d[R];j!==void 0&&(g[R]=j)}),g}function A(l){var d=l.children,g=l.locked,R=Object(Re.a)(l,["children","locked"]),j=r.useContext(s),C=Object(p.a)(function(){return N(j,R)},[j,R],function(I,F){return!g&&(I[0]!==F[0]||!at()(I[1],F[1]))});return r.createElement(s.Provider,{value:C},d)}function P(l,d,g,R){var j=r.useContext(s),C=j.activeKey,I=j.onActive,F=j.onInactive,K={active:C===l};return d||(K.onMouseEnter=function(W){g==null||g({key:l,domEvent:W}),I(l)},K.onMouseLeave=function(W){R==null||R({key:l,domEvent:W}),F(l)}),K}function m(l){var d=l.item,g=Object(Re.a)(l,["item"]);return Object.defineProperty(g,"item",{get:function(){return Object(zn.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),d}}),g}function t(l){var d=l.icon,g=l.props,R=l.children,j;return typeof d=="function"?j=r.createElement(d,Object(ce.a)({},g)):j=d,j||R||null}function a(l){var d=r.useContext(s),g=d.mode,R=d.rtl,j=d.inlineIndent;if(g!=="inline")return null;var C=l;return R?{paddingRight:C*j}:{paddingLeft:C*j}}var n=[],c=r.createContext(null);function o(){return r.useContext(c)}var y=r.createContext(n);function S(l){var d=r.useContext(y);return r.useMemo(function(){return l!==void 0?[].concat(Object(on.a)(d),[l]):d},[d,l])}var w=r.createContext(null),V=r.createContext(null);function x(l,d){return l===void 0?null:"".concat(l,"-").concat(d)}function Q(l){var d=r.useContext(V);return x(d,l)}var Le=function(l){Object(b.a)(g,l);var d=Object(O.a)(g);function g(){return Object(i.a)(this,g),d.apply(this,arguments)}return Object(h.a)(g,[{key:"render",value:function(){var j=this.props,C=j.title,I=j.attribute,F=j.elementRef,K=Object(Re.a)(j,["title","attribute","elementRef"]),W=Object(u.a)(K,["eventKey"]);return Object(zn.a)(!I,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),r.createElement(f.Item,Object(M.a)({},I,{title:typeof C=="string"?C:void 0},W,{ref:F}))}}]),g}(r.Component),_e=function(d){var g,R=d.style,j=d.className,C=d.eventKey,I=d.disabled,F=d.itemIcon,K=d.children,W=d.role,$=d.onMouseEnter,U=d.onMouseLeave,z=d.onClick,re=d.onKeyDown,H=d.onFocus,Y=Object(Re.a)(d,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ie=Q(C),J=r.useContext(s),q=J.prefixCls,ne=J.onItemClick,X=J.disabled,se=J.overflowDisabled,k=J.itemIcon,pe=J.selectedKeys,_=J.onActive,le="".concat(q,"-item"),ue=r.useRef(),te=r.useRef(),G=X||I,oe=S(C),fe=function(Ae){return{key:C,keyPath:oe,item:ue.current,domEvent:Ae}},me=F||k,ye=P(C,G,$,U),Ie=ye.active,he=Object(Re.a)(ye,["active"]),ge=pe.includes(C),De=a(oe.length),Ee=function(Ae){if(!G){var Me=fe(Ae);z==null||z(m(Me)),ne(Me)}},Ce=function(Ae){if(re==null||re(Ae),Ae.which===Ne.a.ENTER){var Me=fe(Ae);z==null||z(m(Me)),ne(Me)}},Se=function(Ae){_(C),H==null||H(Ae)},Fe={};return d.role==="option"&&(Fe["aria-selected"]=ge),r.createElement(Le,Object(M.a)({ref:ue,elementRef:te,role:W===null?"none":W||"menuitem",tabIndex:I?null:-1,"data-menu-id":se&&ie?null:ie},Y,he,Fe,{component:"li","aria-disabled":I,style:Object(ce.a)(Object(ce.a)({},De),R),className:Oe()(le,(g={},Object(ae.a)(g,"".concat(le,"-active"),Ie),Object(ae.a)(g,"".concat(le,"-selected"),ge),Object(ae.a)(g,"".concat(le,"-disabled"),G),g),j),onClick:Ee,onKeyDown:Ce,onFocus:Se}),K,r.createElement(t,{props:Object(ce.a)(Object(ce.a)({},d),{},{isSelected:ge}),icon:me}))};function fn(l){var d=l.eventKey,g=o(),R=S(d);return r.useEffect(function(){if(g)return g.registerPath(d,R),function(){g.unregisterPath(d,R)}},[R]),g?null:r.createElement(_e,l)}var pn=fn;function Fn(l,d){return Object(qe.a)(l).map(function(g,R){if(r.isValidElement(g)){var j=g.key;return j==null&&(j="tmp_key-".concat([].concat(Object(on.a)(d),[R]).join("-"))),r.cloneElement(g,{key:j,eventKey:j})}return g})}function en(l){var d=r.useRef(l);d.current=l;var g=r.useCallback(function(){for(var R,j=arguments.length,C=new Array(j),I=0;I<j;I++)C[I]=arguments[I];return(R=d.current)===null||R===void 0?void 0:R.call.apply(R,[d].concat(C))},[]);return l?g:void 0}var pt=function(d,g){var R=d.className,j=d.children,C=Object(Re.a)(d,["className","children"]),I=r.useContext(s),F=I.prefixCls,K=I.mode;return r.createElement("ul",Object(M.a)({className:Oe()(F,"".concat(F,"-sub"),"".concat(F,"-").concat(K==="inline"?"inline":"vertical"),R)},C,{"data-menu-list":!0,ref:g}),j)},Xt=r.forwardRef(pt);Xt.displayName="SubMenuList";var Zt=Xt,Rr=e("uciX"),Vn={adjustX:1,adjustY:1},kt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},jr={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fa=kt;function qt(l,d,g){if(d)return d;if(g)return g[l]||g.other}var Er={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Pr(l){var d=l.prefixCls,g=l.visible,R=l.children,j=l.popup,C=l.popupClassName,I=l.popupOffset,F=l.disabled,K=l.mode,W=l.onVisibleChange,$=r.useContext(s),U=$.getPopupContainer,z=$.rtl,re=$.subMenuOpenDelay,H=$.subMenuCloseDelay,Y=$.builtinPlacements,ie=$.triggerSubMenuAction,J=$.forceSubMenuRender,q=$.motion,ne=$.defaultMotions,X=r.useState(!1),se=Object(L.a)(X,2),k=se[0],pe=se[1],_=z?Object(ce.a)(Object(ce.a)({},jr),Y):Object(ce.a)(Object(ce.a)({},kt),Y),le=Er[K],ue=qt(K,q,ne),te=Object(ce.a)(Object(ce.a)({},ue),{},{leavedClassName:"".concat(d,"-hidden"),removeOnLeave:!1,motionAppear:!0}),G=r.useRef();return r.useEffect(function(){return G.current=Object($e.a)(function(){pe(g)}),function(){$e.a.cancel(G.current)}},[g]),r.createElement(Rr.a,{prefixCls:d,popupClassName:Oe()("".concat(d,"-popup"),Object(ae.a)({},"".concat(d,"-rtl"),z),C),stretch:K==="horizontal"?"minWidth":null,getPopupContainer:U,builtinPlacements:_,popupPlacement:le,popupVisible:k,popup:j,popupAlign:I&&{offset:I},action:F?[]:[ie],mouseEnterDelay:re,mouseLeaveDelay:H,onPopupVisibleChange:W,forceRender:J,popupMotion:te},R)}var Dr=e("8XRh");function Tr(l){var d=l.id,g=l.open,R=l.keyPath,j=l.children,C="inline",I=r.useContext(s),F=I.prefixCls,K=I.forceSubMenuRender,W=I.motion,$=I.defaultMotions,U=I.mode,z=r.useRef(!1);z.current=U===C;var re=r.useState(!z.current),H=Object(L.a)(re,2),Y=H[0],ie=H[1],J=z.current?g:!1;r.useEffect(function(){z.current&&ie(!1)},[U]);var q=Object(ce.a)({},qt(C,W,$));R.length>1&&(q.motionAppear=!1);var ne=q.onVisibleChanged;return q.onVisibleChanged=function(X){return!z.current&&!X&&ie(!0),ne==null?void 0:ne(X)},Y?null:r.createElement(A,{mode:C,locked:!z.current},r.createElement(Dr.default,Object(M.a)({visible:J},q,{forceRender:K,removeOnLeave:!1,leavedClassName:"".concat(F,"-hidden")}),function(X){var se=X.className,k=X.style;return r.createElement(Zt,{id:d,className:se,style:k},j)}))}var Nr=function(d){var g,R=d.style,j=d.className,C=d.title,I=d.eventKey,F=d.disabled,K=d.internalPopupClose,W=d.children,$=d.itemIcon,U=d.expandIcon,z=d.popupClassName,re=d.popupOffset,H=d.onClick,Y=d.onMouseEnter,ie=d.onMouseLeave,J=d.onTitleClick,q=d.onTitleMouseEnter,ne=d.onTitleMouseLeave,X=Object(Re.a)(d,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),se=Q(I),k=r.useContext(s),pe=k.prefixCls,_=k.mode,le=k.openKeys,ue=k.disabled,te=k.overflowDisabled,G=k.activeKey,oe=k.selectedKeys,fe=k.itemIcon,me=k.expandIcon,ye=k.onItemClick,Ie=k.onOpenChange,he=k.onActive,ge=r.useContext(w),De=ge.isSubPathKey,Ee=S(),Ce="".concat(pe,"-submenu"),Se=ue||F,Fe=r.useRef(),Ue=r.useRef(),Ae=$||fe,Me=U||me,xe=le.includes(I),we=!te&&xe,Sn=De(oe,I),Qe=P(I,Se,q,ne),Ve=Qe.active,nn=Object(Re.a)(Qe,["active"]),hn=r.useState(!1),vn=Object(L.a)(hn,2),je=vn[0],Be=vn[1],Ge=function(We){Se||Be(We)},Je=function(We){Ge(!0),Y==null||Y({key:I,domEvent:We})},An=function(We){Ge(!1),ie==null||ie({key:I,domEvent:We})},Hn=r.useMemo(function(){return Ve||(_!=="inline"?je||De([G],I):!1)},[_,Ve,G,je,I,De]),Mn=a(Ee.length),Xe=function(We){Se||(J==null||J({key:I,domEvent:We}),_==="inline"&&Ie(I,!xe))},Cn=en(function(ze){H==null||H(m(ze)),ye(ze)}),tn=function(We){_!=="inline"&&Ie(I,We)},Rn=function(){he(I)},He=se&&"".concat(se,"-popup"),Ze=r.createElement("div",Object(M.a)({role:"menuitem",style:Mn,className:"".concat(Ce,"-title"),tabIndex:Se?null:-1,ref:Fe,title:typeof C=="string"?C:null,"data-menu-id":te&&se?null:se,"aria-expanded":we,"aria-haspopup":!0,"aria-controls":He,"aria-disabled":Se,onClick:Xe,onFocus:Rn},nn),C,r.createElement(t,{icon:_!=="horizontal"?Me:null,props:Object(ce.a)(Object(ce.a)({},d),{},{isOpen:we,isSubMenu:!0})},r.createElement("i",{className:"".concat(Ce,"-arrow")}))),jn=r.useRef(_);if(_!=="inline"&&(jn.current=Ee.length>1?"vertical":_),!te){var an=jn.current;Ze=r.createElement(Pr,{mode:an,prefixCls:Ce,visible:!K&&we&&_!=="inline",popupClassName:z,popupOffset:re,popup:r.createElement(A,{mode:an},r.createElement(Zt,{id:He,ref:Ue},W)),disabled:Se,onVisibleChange:tn},Ze)}return r.createElement(A,{onItemClick:Cn,mode:_==="horizontal"?"vertical":_,itemIcon:Ae,expandIcon:Me},r.createElement(f.Item,Object(M.a)({role:"none"},X,{component:"li",style:R,className:Oe()(Ce,"".concat(Ce,"-").concat(_),j,(g={},Object(ae.a)(g,"".concat(Ce,"-open"),we),Object(ae.a)(g,"".concat(Ce,"-active"),Hn),Object(ae.a)(g,"".concat(Ce,"-selected"),Sn),Object(ae.a)(g,"".concat(Ce,"-disabled"),Se),g)),onMouseEnter:Je,onMouseLeave:An}),Ze,!te&&r.createElement(Tr,{id:He,open:we,keyPath:Ee},W)))};function _t(l){var d=l.eventKey,g=l.children,R=S(d),j=Fn(g,R),C=o();r.useEffect(function(){if(C)return C.registerPath(d,R),function(){C.unregisterPath(d,R)}},[R]);var I;return C?I=j:I=r.createElement(Nr,l,j),r.createElement(y.Provider,{value:R},I)}var Ir=e("x/xZ");function er(l){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ir.a)(l)){var g=l.nodeName.toLowerCase(),R=["input","select","textarea","button"].includes(g)||l.isContentEditable||g==="a"&&!!l.getAttribute("href"),j=l.getAttribute("tabindex"),C=Number(j),I=null;return j&&!Number.isNaN(C)?I=C:R&&I===null&&(I=0),R&&l.disabled&&(I=null),I!==null&&(I>=0||d&&I<0)}return!1}function nr(l){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=Object(on.a)(l.querySelectorAll("*")).filter(function(R){return er(R,d)});return er(l,d)&&g.unshift(l),g}var St=null;function pa(){St=document.activeElement}function ha(){St=null}function va(){if(St)try{St.focus()}catch(l){}}function ga(l,d){if(d.keyCode===9){var g=nr(l),R=g[d.shiftKey?0:g.length-1],j=R===document.activeElement||l===document.activeElement;if(j){var C=g[d.shiftKey?g.length-1:0];C.focus(),d.preventDefault()}}}var Kt=Ne.a.LEFT,Bt=Ne.a.RIGHT,Wt=Ne.a.UP,Ct=Ne.a.DOWN,Rt=Ne.a.ENTER,tr=Ne.a.ESC,rr=[Wt,Ct,Kt,Bt];function wr(l,d,g,R){var j,C,I,F,K="prev",W="next",$="children",U="parent";if(l==="inline"&&R===Rt)return{inlineTrigger:!0};var z=(j={},Object(ae.a)(j,Wt,K),Object(ae.a)(j,Ct,W),j),re=(C={},Object(ae.a)(C,Kt,g?W:K),Object(ae.a)(C,Bt,g?K:W),Object(ae.a)(C,Ct,$),Object(ae.a)(C,Rt,$),C),H=(I={},Object(ae.a)(I,Wt,K),Object(ae.a)(I,Ct,W),Object(ae.a)(I,Rt,$),Object(ae.a)(I,tr,U),Object(ae.a)(I,Kt,g?$:U),Object(ae.a)(I,Bt,g?U:$),I),Y={inline:z,horizontal:re,vertical:H,inlineSub:z,horizontalSub:H,verticalSub:H},ie=(F=Y["".concat(l).concat(d?"":"Sub")])===null||F===void 0?void 0:F[R];switch(ie){case K:return{offset:-1,sibling:!0};case W:return{offset:1,sibling:!0};case U:return{offset:-1,sibling:!1};case $:return{offset:1,sibling:!1};default:return null}}function Fr(l){for(var d=l;d;){if(d.getAttribute("data-menu-list"))return d;d=d.parentElement}return null}function Ar(l,d){for(var g=l||document.activeElement;g;){if(d.has(g))return g;g=g.parentElement}return null}function Mr(l,d){var g=nr(l,!0);return g.filter(function(R){return d.has(R)})}function ar(l,d,g){var R=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!l)return null;var j=Mr(l,d),C=j.length,I=j.findIndex(function(F){return g===F});return R<0?I===-1?I=C-1:I-=1:R>0&&(I+=1),I=(I+C)%C,j[I]}function Kr(l,d,g,R,j,C,I,F,K,W){var $=r.useRef(),U=r.useRef();U.current=d;var z=function(){$e.a.cancel($.current)};return r.useEffect(function(){return function(){z()}},[]),function(re){var H=re.which;if([].concat(rr,[Rt,tr]).includes(H)){var Y,ie,J,q=function(){Y=new Set,ie=new Map,J=new Map;var fe=C();return fe.forEach(function(me){var ye=document.querySelector("[data-menu-id='".concat(x(R,me),"']"));ye&&(Y.add(ye),J.set(ye,me),ie.set(me,ye))}),Y};q();var ne=ie.get(d),X=Ar(ne,Y),se=J.get(X),k=wr(l,I(se,!0).length===1,g,H);if(!k)return;rr.includes(H)&&re.preventDefault();var pe=function(fe){if(fe){var me=fe,ye=fe.querySelector("a");(ye==null?void 0:ye.getAttribute("href"))&&(me=ye);var Ie=J.get(fe);F(Ie),z(),$.current=Object($e.a)(function(){U.current===Ie&&me.focus()})}};if(k.sibling||!X){var _;!X||l==="inline"?_=j.current:_=Fr(X);var le=ar(_,Y,X,k.offset);pe(le)}else if(k.inlineTrigger)K(se);else if(k.offset>0)K(se,!0),z(),$.current=Object($e.a)(function(){q();var oe=X.getAttribute("aria-controls"),fe=document.getElementById(oe),me=ar(fe,Y);pe(me)},5);else if(k.offset<0){var ue=I(se,!0),te=ue[ue.length-2],G=ie.get(te);K(te,!1),pe(G)}}W==null||W(re)}}var Br=Math.random().toFixed(5).toString().slice(2),sr=0;function Wr(l){var d=Object(bn.a)(l,{value:l}),g=Object(L.a)(d,2),R=g[0],j=g[1];return r.useEffect(function(){sr+=1;var C="".concat(Br,"-").concat(sr);j("rc-menu-uuid-".concat(C))},[]),R}var ya=e("p8sG");function Lr(l){Promise.resolve().then(l)}var Lt="__RC_UTIL_PATH_SPLIT__",ir=function(d){return d.join(Lt)},xr=function(d){return d.split(Lt)},xt="rc-menu-more";function $r(){var l=r.useState({}),d=Object(L.a)(l,2),g=d[1],R=Object(r.useRef)(new Map),j=Object(r.useRef)(new Map),C=r.useState([]),I=Object(L.a)(C,2),F=I[0],K=I[1],W=Object(r.useRef)(0),$=Object(r.useCallback)(function(J,q){var ne=ir(q);j.current.set(ne,J),R.current.set(J,ne),W.current+=1;var X=W.current;Lr(function(){X===W.current&&g({})})},[]),U=Object(r.useCallback)(function(J,q){var ne=ir(q);j.current.delete(ne),R.current.delete(J)},[]),z=Object(r.useCallback)(function(J){K(J)},[]),re=Object(r.useCallback)(function(J,q){var ne=R.current.get(J)||"",X=xr(ne);return q&&F.includes(X[0])&&X.unshift(xt),X},[F]),H=Object(r.useCallback)(function(J,q){return J.some(function(ne){var X=re(ne,!0);return X.includes(q)})},[re]),Y=function(){var q=Object(on.a)(R.current.keys());return F.length&&q.push(xt),q},ie=Object(r.useCallback)(function(J){var q="".concat(R.current.get(J)).concat(Lt),ne=new Set;return Object(on.a)(j.current.keys()).forEach(function(X){X.startsWith(q)&&ne.add(j.current.get(X))}),ne},[]);return{registerPath:$,unregisterPath:U,refreshOverflowKeys:z,isSubPathKey:H,getKeyPath:re,getKeys:Y,getSubPathKeys:ie}}var jt=[],Vr=function(d){var g,R,j=d.prefixCls,C=j===void 0?"rc-menu":j,I=d.style,F=d.className,K=d.tabIndex,W=K===void 0?0:K,$=d.children,U=d.direction,z=d.id,re=d.mode,H=re===void 0?"vertical":re,Y=d.inlineCollapsed,ie=d.disabled,J=d.disabledOverflow,q=d.subMenuOpenDelay,ne=q===void 0?.1:q,X=d.subMenuCloseDelay,se=X===void 0?.1:X,k=d.forceSubMenuRender,pe=d.defaultOpenKeys,_=d.openKeys,le=d.activeKey,ue=d.defaultActiveFirst,te=d.selectable,G=te===void 0?!0:te,oe=d.multiple,fe=oe===void 0?!1:oe,me=d.defaultSelectedKeys,ye=d.selectedKeys,Ie=d.onSelect,he=d.onDeselect,ge=d.inlineIndent,De=ge===void 0?24:ge,Ee=d.motion,Ce=d.defaultMotions,Se=d.triggerSubMenuAction,Fe=Se===void 0?"hover":Se,Ue=d.builtinPlacements,Ae=d.itemIcon,Me=d.expandIcon,xe=d.overflowedIndicator,we=xe===void 0?"...":xe,Sn=d.getPopupContainer,Qe=d.onClick,Ve=d.onOpenChange,nn=d.onKeyDown,hn=d.openAnimation,vn=d.openTransitionName,je=Object(Re.a)(d,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Be=Fn($,jt),Ge=r.useState(!1),Je=Object(L.a)(Ge,2),An=Je[0],Hn=Je[1],Mn=r.useRef(),Xe=Wr(z),Cn=U==="rtl",tn=r.useMemo(function(){return H==="inline"&&Y?["vertical",Y]:[H,!1]},[H,Y]),Rn=Object(L.a)(tn,2),He=Rn[0],Ze=Rn[1],jn=r.useState(0),an=Object(L.a)(jn,2),ze=an[0],We=an[1],Yn=ze>=Be.length-1||He!=="horizontal"||J,Qn=Object(bn.a)(pe,{value:_,postState:function(Z){return Z||jt}}),lt=Object(L.a)(Qn,2),gn=lt[0],dn=lt[1],Xn=r.useState(gn),yn=Object(L.a)(Xn,2),sn=yn[0],Zn=yn[1],En=He==="inline",kn=r.useRef(!1);r.useEffect(function(){En&&Zn(gn)},[gn]),r.useEffect(function(){if(!kn.current){kn.current=!0;return}if(En)dn(sn);else{var ee=[];dn(ee),Ve==null||Ve(ee)}},[En]);var rn=$r(),Pn=rn.registerPath,de=rn.unregisterPath,be=rn.refreshOverflowKeys,Te=rn.isSubPathKey,Ye=rn.getKeyPath,qn=rn.getKeys,Pt=rn.getSubPathKeys,zt=r.useMemo(function(){return{registerPath:Pn,unregisterPath:de}},[Pn,de]),Ut=r.useMemo(function(){return{isSubPathKey:Te}},[Te]);r.useEffect(function(){be(Yn?jt:Be.slice(ze+1).map(function(ee){return ee.key}))},[ze,Yn]);var Gt=Object(bn.a)(le||ue&&((g=Be[0])===null||g===void 0?void 0:g.key),{value:le}),ut=Object(L.a)(Gt,2),Dt=ut[0],vt=ut[1],Tt=en(function(ee){vt(ee)}),Ht=en(function(){vt(void 0)}),Nt=Object(bn.a)(me||[],{value:ye,postState:function(Z){return Array.isArray(Z)?Z:Z==null?jt:[Z]}}),It=Object(L.a)(Nt,2),dt=It[0],Dn=It[1],wt=function(Z){if(!!G){var ve=Z.key,Ke=dt.includes(ve),ke;Ke?ke=dt.filter(function(et){return et!==ve}):fe?ke=[].concat(Object(on.a)(dt),[ve]):ke=[ve],Dn(ke);var Jn=Object(ce.a)(Object(ce.a)({},Z),{},{selectedKeys:ke});Ke?he==null||he(Jn):Ie==null||Ie(Jn)}},Ft=en(function(ee){Qe==null||Qe(m(ee)),wt(ee)}),gt=en(function(ee,Z){var ve=gn.filter(function(ke){return ke!==ee});if(Z)ve.push(ee);else if(He!=="inline"){var Ke=Pt(ee);ve=ve.filter(function(ke){return!Ke.has(ke)})}at()(gn,ve)||(dn(ve),Ve==null||Ve(ve))}),_n=en(Sn),yt=function(Z,ve){var Ke=ve!=null?ve:!gn.includes(Z);gt(Z,Ke)},bt=Kr(He,Dt,Cn,Xe,Mn,qn,Ye,vt,yt,nn);r.useEffect(function(){Hn(!0)},[]);var At=He!=="horizontal"||J?Be:Be.map(function(ee,Z){return r.createElement(A,{key:ee.key,overflowDisabled:Z>ze},ee)}),Mt=r.createElement(f,Object(M.a)({id:z,ref:Mn,prefixCls:"".concat(C,"-overflow"),component:"ul",itemComponent:pn,className:Oe()(C,"".concat(C,"-root"),"".concat(C,"-").concat(He),F,(R={},Object(ae.a)(R,"".concat(C,"-inline-collapsed"),Ze),Object(ae.a)(R,"".concat(C,"-rtl"),Cn),R)),dir:U,style:I,role:"menu",tabIndex:W,data:At,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var ve=Z.length,Ke=ve?Be.slice(-ve):null;return r.createElement(_t,{eventKey:xt,title:we,disabled:Yn,internalPopupClose:ve===0},Ke)},maxCount:He!=="horizontal"||J?f.INVALIDATE:f.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){We(Z)},onKeyDown:bt},je));return r.createElement(V.Provider,{value:Xe},r.createElement(A,{prefixCls:C,mode:He,openKeys:gn,rtl:Cn,disabled:ie,motion:An?Ee:null,defaultMotions:An?Ce:null,activeKey:Dt,onActive:Tt,onInactive:Ht,selectedKeys:dt,inlineIndent:De,subMenuOpenDelay:ne,subMenuCloseDelay:se,forceSubMenuRender:k,builtinPlacements:Ue,triggerSubMenuAction:Fe,getPopupContainer:_n,itemIcon:Ae,expandIcon:Me,onItemClick:Ft,onOpenChange:gt},r.createElement(w.Provider,{value:Ut},Mt),r.createElement(c.Provider,{value:zt},Be)))},Jr=Vr,zr=function(d){var g=d.className,R=d.title,j=d.eventKey,C=d.children,I=Object(Re.a)(d,["className","title","eventKey","children"]),F=r.useContext(s),K=F.prefixCls,W="".concat(K,"-item-group");return r.createElement("li",Object(M.a)({},I,{onClick:function(U){return U.stopPropagation()},className:Oe()(W,g)}),r.createElement("div",{className:"".concat(W,"-title"),title:typeof R=="string"?R:void 0},R),r.createElement("ul",{className:"".concat(W,"-list")},C))};function Ur(l){var d=l.children,g=Object(Re.a)(l,["children"]),R=S(g.eventKey),j=Fn(d,R),C=o();return C?j:r.createElement(zr,g,j)}function Gr(l){var d=l.className,g=l.style,R=r.useContext(s),j=R.prefixCls,C=o();return C?null:r.createElement("li",{className:Oe()("".concat(j,"-item-divider"),d),style:g})}var ht=Jr;ht.Item=pn,ht.SubMenu=_t,ht.ItemGroup=Ur,ht.Divider=Gr;var Hr=ht,Yr=e("eDIo");function Qr(l,d){var g=l.prefixCls,R=l.editable,j=l.locale,C=l.style;return!R||R.showAdd===!1?null:r.createElement("button",{ref:d,type:"button",className:"".concat(g,"-nav-add"),style:C,"aria-label":(j==null?void 0:j.addAriaLabel)||"Add tab",onClick:function(F){R.onEdit("add",{event:F})}},R.addIcon||"+")}var or=r.forwardRef(Qr);function Xr(l,d){var g=l.prefixCls,R=l.id,j=l.tabs,C=l.locale,I=l.mobile,F=l.moreIcon,K=F===void 0?"More":F,W=l.moreTransitionName,$=l.style,U=l.className,z=l.editable,re=l.tabBarGutter,H=l.rtl,Y=l.onTabClick,ie=Object(r.useState)(!1),J=Object(L.a)(ie,2),q=J[0],ne=J[1],X=Object(r.useState)(null),se=Object(L.a)(X,2),k=se[0],pe=se[1],_="".concat(R,"-more-popup"),le="".concat(g,"-dropdown"),ue=k!==null?"".concat(_,"-").concat(k):null,te=C==null?void 0:C.dropdownAriaLabel,G=r.createElement(Hr,{onClick:function(ge){var De=ge.key,Ee=ge.domEvent;Y(De,Ee),ne(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":ue,selectedKeys:[k],"aria-label":te!==void 0?te:"expanded dropdown"},j.map(function(he){return r.createElement(pn,{key:he.key,id:"".concat(_,"-").concat(he.key),role:"option","aria-controls":R&&"".concat(R,"-panel-").concat(he.key),disabled:he.disabled},he.tab)}));function oe(he){for(var ge=j.filter(function(Fe){return!Fe.disabled}),De=ge.findIndex(function(Fe){return Fe.key===k})||0,Ee=ge.length,Ce=0;Ce<Ee;Ce+=1){De=(De+he+Ee)%Ee;var Se=ge[De];if(!Se.disabled){pe(Se.key);return}}}function fe(he){var ge=he.which;if(!q){[Ne.a.DOWN,Ne.a.SPACE,Ne.a.ENTER].includes(ge)&&(ne(!0),he.preventDefault());return}switch(ge){case Ne.a.UP:oe(-1),he.preventDefault();break;case Ne.a.DOWN:oe(1),he.preventDefault();break;case Ne.a.ESC:ne(!1);break;case Ne.a.SPACE:case Ne.a.ENTER:k!==null&&Y(k,he);break}}Object(r.useEffect)(function(){var he=document.getElementById(ue);he&&he.scrollIntoView&&he.scrollIntoView(!1)},[k]),Object(r.useEffect)(function(){q||pe(null)},[q]);var me=Object(ae.a)({},H?"marginLeft":"marginRight",re);j.length||(me.visibility="hidden",me.order=1);var ye=Oe()(Object(ae.a)({},"".concat(le,"-rtl"),H)),Ie=I?null:r.createElement(Yr.default,{prefixCls:le,overlay:G,trigger:["hover"],visible:q,transitionName:W,onVisibleChange:ne,overlayClassName:ye,mouseEnterDelay:.1,mouseLeaveDelay:.1},r.createElement("button",{type:"button",className:"".concat(g,"-nav-more"),style:me,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(R,"-more"),"aria-expanded":q,onKeyDown:fe},K));return r.createElement("div",{className:Oe()("".concat(g,"-nav-operations"),U),style:$,ref:d},Ie,r.createElement(or,{prefixCls:g,locale:C,editable:z}))}var Zr=r.forwardRef(Xr),$t=Object(r.createContext)(null),kr=.1,lr=.01,Et=20,ur=Math.pow(.995,Et);function qr(l,d){var g=Object(r.useState)(),R=Object(L.a)(g,2),j=R[0],C=R[1],I=Object(r.useState)(0),F=Object(L.a)(I,2),K=F[0],W=F[1],$=Object(r.useState)(0),U=Object(L.a)($,2),z=U[0],re=U[1],H=Object(r.useState)(),Y=Object(L.a)(H,2),ie=Y[0],J=Y[1],q=Object(r.useRef)();function ne(le){var ue=le.touches[0],te=ue.screenX,G=ue.screenY;C({x:te,y:G}),window.clearInterval(q.current)}function X(le){if(!!j){le.preventDefault();var ue=le.touches[0],te=ue.screenX,G=ue.screenY;C({x:te,y:G});var oe=te-j.x,fe=G-j.y;d(oe,fe);var me=Date.now();W(me),re(me-K),J({x:oe,y:fe})}}function se(){if(!!j&&(C(null),J(null),ie)){var le=ie.x/z,ue=ie.y/z,te=Math.abs(le),G=Math.abs(ue);if(Math.max(te,G)<kr)return;var oe=le,fe=ue;q.current=window.setInterval(function(){if(Math.abs(oe)<lr&&Math.abs(fe)<lr){window.clearInterval(q.current);return}oe*=ur,fe*=ur,d(oe*Et,fe*Et)},Et)}}var k=Object(r.useRef)();function pe(le){var ue=le.deltaX,te=le.deltaY,G=0,oe=Math.abs(ue),fe=Math.abs(te);oe===fe?G=k.current==="x"?ue:te:oe>fe?(G=ue,k.current="x"):(G=te,k.current="y"),d(-G,-G)&&le.preventDefault()}var _=Object(r.useRef)(null);_.current={onTouchStart:ne,onTouchMove:X,onTouchEnd:se,onWheel:pe},r.useEffect(function(){function le(oe){_.current.onTouchStart(oe)}function ue(oe){_.current.onTouchMove(oe)}function te(oe){_.current.onTouchEnd(oe)}function G(oe){_.current.onWheel(oe)}return document.addEventListener("touchmove",ue,{passive:!1}),document.addEventListener("touchend",te,{passive:!1}),l.current.addEventListener("touchstart",le,{passive:!1}),l.current.addEventListener("wheel",G),function(){document.removeEventListener("touchmove",ue),document.removeEventListener("touchend",te)}},[])}function _r(){var l=Object(r.useRef)(new Map);function d(R){return l.current.has(R)||l.current.set(R,r.createRef()),l.current.get(R)}function g(R){l.current.delete(R)}return[d,g]}function dr(l,d){var g=r.useRef(l),R=r.useState({}),j=Object(L.a)(R,2),C=j[1];function I(F){var K=typeof F=="function"?F(g.current):F;K!==g.current&&d(K,g.current),g.current=K,C({})}return[g.current,I]}var cr=function(d){var g=d.position,R=d.prefixCls,j=d.extra;if(!j)return null;var C,I=j;return g==="right"&&(C=I.right||!I.left&&I||null),g==="left"&&(C=I.left||null),C?r.createElement("div",{className:"".concat(R,"-extra-content")},C):null};function ea(l,d){var g,R=r.useContext($t),j=R.prefixCls,C=R.tabs,I=l.className,F=l.style,K=l.id,W=l.animated,$=l.activeKey,U=l.rtl,z=l.extra,re=l.editable,H=l.locale,Y=l.tabPosition,ie=l.tabBarGutter,J=l.children,q=l.onTabClick,ne=l.onTabScroll,X=Object(r.useRef)(),se=Object(r.useRef)(),k=Object(r.useRef)(),pe=Object(r.useRef)(),_=_r(),le=Object(L.a)(_,2),ue=le[0],te=le[1],G=Y==="top"||Y==="bottom",oe=dr(0,function(ee,Z){G&&ne&&ne({direction:ee>Z?"left":"right"})}),fe=Object(L.a)(oe,2),me=fe[0],ye=fe[1],Ie=dr(0,function(ee,Z){!G&&ne&&ne({direction:ee>Z?"top":"bottom"})}),he=Object(L.a)(Ie,2),ge=he[0],De=he[1],Ee=Object(r.useState)(0),Ce=Object(L.a)(Ee,2),Se=Ce[0],Fe=Ce[1],Ue=Object(r.useState)(0),Ae=Object(L.a)(Ue,2),Me=Ae[0],xe=Ae[1],we=Object(r.useState)(0),Sn=Object(L.a)(we,2),Qe=Sn[0],Ve=Sn[1],nn=Object(r.useState)(0),hn=Object(L.a)(nn,2),vn=hn[0],je=hn[1],Be=Object(r.useState)(null),Ge=Object(L.a)(Be,2),Je=Ge[0],An=Ge[1],Hn=Object(r.useState)(null),Mn=Object(L.a)(Hn,2),Xe=Mn[0],Cn=Mn[1],tn=Object(r.useState)(0),Rn=Object(L.a)(tn,2),He=Rn[0],Ze=Rn[1],jn=Object(r.useState)(0),an=Object(L.a)(jn,2),ze=an[0],We=an[1],Yn=On(new Map),Qn=Object(L.a)(Yn,2),lt=Qn[0],gn=Qn[1],dn=ct(C,lt,Se),Xn="".concat(j,"-nav-operations-hidden"),yn=0,sn=0;G?U?(yn=0,sn=Math.max(0,Se-Je)):(yn=Math.min(0,Je-Se),sn=0):(yn=Math.min(0,Xe-Me),sn=0);function Zn(ee){return ee<yn?yn:ee>sn?sn:ee}var En=Object(r.useRef)(),kn=Object(r.useState)(),rn=Object(L.a)(kn,2),Pn=rn[0],de=rn[1];function be(){de(Date.now())}function Te(){window.clearTimeout(En.current)}qr(X,function(ee,Z){function ve(Ke,ke){Ke(function(Jn){var et=Zn(Jn+ke);return et})}if(G){if(Je>=Se)return!1;ve(ye,ee)}else{if(Xe>=Me)return!1;ve(De,Z)}return Te(),be(),!0}),Object(r.useEffect)(function(){return Te(),Pn&&(En.current=window.setTimeout(function(){de(0)},100)),Te},[Pn]);function Ye(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$,Z=dn.get(ee)||{width:0,height:0,left:0,right:0,top:0};if(G){var ve=me;U?Z.right<me?ve=Z.right:Z.right+Z.width>me+Je&&(ve=Z.right+Z.width-Je):Z.left<-me?ve=-Z.left:Z.left+Z.width>-me+Je&&(ve=-(Z.left+Z.width-Je)),De(0),ye(Zn(ve))}else{var Ke=ge;Z.top<-ge?Ke=-Z.top:Z.top+Z.height>-ge+Xe&&(Ke=-(Z.top+Z.height-Xe)),ye(0),De(Zn(Ke))}}var qn=mt(dn,{width:Je,height:Xe,left:me,top:ge},{width:Qe,height:vn},{width:He,height:ze},Object(ce.a)(Object(ce.a)({},l),{},{tabs:C})),Pt=Object(L.a)(qn,2),zt=Pt[0],Ut=Pt[1],Gt=C.map(function(ee){var Z=ee.key;return r.createElement(Bn,{id:K,prefixCls:j,key:Z,rtl:U,tab:ee,closable:ee.closable,editable:re,active:Z===$,tabPosition:Y,tabBarGutter:ie,renderWrapper:J,removeAriaLabel:H==null?void 0:H.removeAriaLabel,ref:ue(Z),onClick:function(Ke){q(Z,Ke)},onRemove:function(){te(Z)},onFocus:function(){Ye(Z),be(),U||(X.current.scrollLeft=0),X.current.scrollTop=0}})}),ut=wn(function(){var ee,Z,ve,Ke,ke,Jn,et,Yt,Qt,la=((ee=X.current)===null||ee===void 0?void 0:ee.offsetWidth)||0,ua=((Z=X.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,vr=((ve=pe.current)===null||ve===void 0?void 0:ve.offsetWidth)||0,gr=((Ke=pe.current)===null||Ke===void 0?void 0:Ke.offsetHeight)||0,da=((ke=k.current)===null||ke===void 0?void 0:ke.offsetWidth)||0,ca=((Jn=k.current)===null||Jn===void 0?void 0:Jn.offsetHeight)||0;An(la),Cn(ua),Ze(vr),We(gr);var yr=(((et=se.current)===null||et===void 0?void 0:et.offsetWidth)||0)-vr,br=(((Yt=se.current)===null||Yt===void 0?void 0:Yt.offsetHeight)||0)-gr;Fe(yr),xe(br);var Or=(Qt=k.current)===null||Qt===void 0?void 0:Qt.className.includes(Xn);Ve(yr-(Or?0:da)),je(br-(Or?0:ca)),gn(function(){var Sr=new Map;return C.forEach(function(ma){var Cr=ma.key,Ot=ue(Cr).current;Ot&&Sr.set(Cr,{width:Ot.offsetWidth,height:Ot.offsetHeight,left:Ot.offsetLeft,top:Ot.offsetTop})}),Sr})}),Dt=C.slice(0,zt),vt=C.slice(Ut+1),Tt=[].concat(Object(on.a)(Dt),Object(on.a)(vt)),Ht=Object(r.useState)(),Nt=Object(L.a)(Ht,2),It=Nt[0],dt=Nt[1],Dn=dn.get($),wt=Object(r.useRef)();function Ft(){$e.a.cancel(wt.current)}Object(r.useEffect)(function(){var ee={};return Dn&&(G?(U?ee.right=Dn.right:ee.left=Dn.left,ee.width=Dn.width):(ee.top=Dn.top,ee.height=Dn.height)),Ft(),wt.current=Object($e.a)(function(){dt(ee)}),Ft},[Dn,G,U]),Object(r.useEffect)(function(){Ye()},[$,Dn,dn,G]),Object(r.useEffect)(function(){ut()},[U,ie,$,C.map(function(ee){return ee.key}).join("_")]);var gt=!!Tt.length,_n="".concat(j,"-nav-wrap"),yt,bt,At,Mt;return G?U?(bt=me>0,yt=me+Je<Se):(yt=me<0,bt=-me+Je<Se):(At=ge<0,Mt=-ge+Xe<Me),r.createElement("div",{ref:d,role:"tablist",className:Oe()("".concat(j,"-nav"),I),style:F,onKeyDown:function(){be()}},r.createElement(cr,{position:"left",extra:z,prefixCls:j}),r.createElement(Kn.default,{onResize:ut},r.createElement("div",{className:Oe()(_n,(g={},Object(ae.a)(g,"".concat(_n,"-ping-left"),yt),Object(ae.a)(g,"".concat(_n,"-ping-right"),bt),Object(ae.a)(g,"".concat(_n,"-ping-top"),At),Object(ae.a)(g,"".concat(_n,"-ping-bottom"),Mt),g)),ref:X},r.createElement(Kn.default,{onResize:ut},r.createElement("div",{ref:se,className:"".concat(j,"-nav-list"),style:{transform:"translate(".concat(me,"px, ").concat(ge,"px)"),transition:Pn?"none":void 0}},Gt,r.createElement(or,{ref:pe,prefixCls:j,locale:H,editable:re,style:{visibility:gt?"hidden":null}}),r.createElement("div",{className:Oe()("".concat(j,"-ink-bar"),Object(ae.a)({},"".concat(j,"-ink-bar-animated"),W.inkBar)),style:It}))))),r.createElement(Zr,Object(M.a)({},l,{ref:k,prefixCls:j,tabs:Tt,className:!gt&&Xn})),r.createElement(cr,{position:"right",extra:z,prefixCls:j}))}var mr=r.forwardRef(ea);function na(l){var d=l.id,g=l.activeKey,R=l.animated,j=l.tabPosition,C=l.rtl,I=l.destroyInactiveTabPane,F=r.useContext($t),K=F.prefixCls,W=F.tabs,$=R.tabPane,U=W.findIndex(function(z){return z.key===g});return r.createElement("div",{className:Oe()("".concat(K,"-content-holder"))},r.createElement("div",{className:Oe()("".concat(K,"-content"),"".concat(K,"-content-").concat(j),Object(ae.a)({},"".concat(K,"-content-animated"),$)),style:U&&$?Object(ae.a)({},C?"marginRight":"marginLeft","-".concat(U,"00%")):null},W.map(function(z){return r.cloneElement(z.node,{key:z.key,prefixCls:K,tabKey:z.key,id:d,animated:$,active:z.key===g,destroyInactiveTabPane:I})})))}function fr(l){var d=l.prefixCls,g=l.forceRender,R=l.className,j=l.style,C=l.id,I=l.active,F=l.animated,K=l.destroyInactiveTabPane,W=l.tabKey,$=l.children,U=r.useState(g),z=Object(L.a)(U,2),re=z[0],H=z[1];r.useEffect(function(){I?H(!0):K&&H(!1)},[I,K]);var Y={};return I||(F?(Y.visibility="hidden",Y.height=0,Y.overflowY="hidden"):Y.display="none"),r.createElement("div",{id:C&&"".concat(C,"-panel-").concat(W),role:"tabpanel",tabIndex:I?0:-1,"aria-labelledby":C&&"".concat(C,"-tab-").concat(W),"aria-hidden":!I,style:Object(ce.a)(Object(ce.a)({},Y),j),className:Oe()("".concat(d,"-tabpane"),I&&"".concat(d,"-tabpane-active"),R)},(I||re||g)&&$)}var pr=0;function ta(l){return Object(qe.a)(l).map(function(d){if(r.isValidElement(d)){var g=d.key!==void 0?String(d.key):void 0;return Object(ce.a)(Object(ce.a)({key:g},d.props),{},{node:d})}return null}).filter(function(d){return d})}function ra(l,d){var g,R=l.id,j=l.prefixCls,C=j===void 0?"rc-tabs":j,I=l.className,F=l.children,K=l.direction,W=l.activeKey,$=l.defaultActiveKey,U=l.editable,z=l.animated,re=z===void 0?{inkBar:!0,tabPane:!1}:z,H=l.tabPosition,Y=H===void 0?"top":H,ie=l.tabBarGutter,J=l.tabBarStyle,q=l.tabBarExtraContent,ne=l.locale,X=l.moreIcon,se=l.moreTransitionName,k=l.destroyInactiveTabPane,pe=l.renderTabBar,_=l.onChange,le=l.onTabClick,ue=l.onTabScroll,te=Object(Re.a)(l,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),G=ta(F),oe=K==="rtl",fe;re===!1?fe={inkBar:!1,tabPane:!1}:re===!0?fe={inkBar:!0,tabPane:!0}:fe=Object(ce.a)({inkBar:!0,tabPane:!1},Object(Pe.a)(re)==="object"?re:{});var me=Object(r.useState)(!1),ye=Object(L.a)(me,2),Ie=ye[0],he=ye[1];Object(r.useEffect)(function(){he(Object(In.a)())},[]);var ge=Object(bn.a)(function(){var je;return(je=G[0])===null||je===void 0?void 0:je.key},{value:W,defaultValue:$}),De=Object(L.a)(ge,2),Ee=De[0],Ce=De[1],Se=Object(r.useState)(function(){return G.findIndex(function(je){return je.key===Ee})}),Fe=Object(L.a)(Se,2),Ue=Fe[0],Ae=Fe[1];Object(r.useEffect)(function(){var je=G.findIndex(function(Ge){return Ge.key===Ee});if(je===-1){var Be;je=Math.max(0,Math.min(Ue,G.length-1)),Ce((Be=G[je])===null||Be===void 0?void 0:Be.key)}Ae(je)},[G.map(function(je){return je.key}).join("_"),Ee,Ue]);var Me=Object(bn.a)(null,{value:R}),xe=Object(L.a)(Me,2),we=xe[0],Sn=xe[1],Qe=Y;Ie&&!["left","right"].includes(Y)&&(Qe="top"),Object(r.useEffect)(function(){R||(Sn("rc-tabs-".concat(pr)),pr+=1)},[]);function Ve(je,Be){le==null||le(je,Be),Ce(je),_==null||_(je)}var nn={id:we,activeKey:Ee,animated:fe,tabPosition:Qe,rtl:oe,mobile:Ie},hn,vn=Object(ce.a)(Object(ce.a)({},nn),{},{editable:U,locale:ne,moreIcon:X,moreTransitionName:se,tabBarGutter:ie,onTabClick:Ve,onTabScroll:ue,extra:q,style:J,panes:F});return pe?hn=pe(vn,mr):hn=r.createElement(mr,vn),r.createElement($t.Provider,{value:{tabs:G,prefixCls:C}},r.createElement("div",Object(M.a)({ref:d,id:R,className:Oe()(C,"".concat(C,"-").concat(Qe),(g={},Object(ae.a)(g,"".concat(C,"-mobile"),Ie),Object(ae.a)(g,"".concat(C,"-editable"),U),Object(ae.a)(g,"".concat(C,"-rtl"),oe),g),I)},te),hn,r.createElement(na,Object(M.a)({destroyInactiveTabPane:k},nn,{animated:fe}))))}var hr=r.forwardRef(ra);hr.TabPane=fr;var aa=hr,sa=aa,Vt=e("MZF8"),un=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function Jt(l,d){var g,R=(g=l.match(/\.(\w+)$/))===null||g===void 0?void 0:g[1];return R||(R=d.tsx?"tsx":"jsx"),R}var oa=l=>{var d,g,R,j=Object(r.useRef)(),C=Object(r.useContext)(un.context),I=C.locale,F=Object(un.useLocaleProps)(I,l),K=Object(un.useDemoUrl)(F.identifier),W=F.demoUrl||K,$=(Vt.a===null||Vt.a===void 0?void 0:Vt.a.location.hash)==="#".concat(F.identifier),U=Object.keys(F.sources).length===1,z=Object(un.useCodeSandbox)((d=F.hideActions)!==null&&d!==void 0&&d.includes("CSB")?null:F),re=Object(un.useRiddle)((g=F.hideActions)!==null&&g!==void 0&&g.includes("RIDDLE")?null:F),H=Object(un.useMotions)(F.motions||[],j.current),Y=Object(B.default)(H,2),ie=Y[0],J=Y[1],q=Object(un.useCopy)(),ne=Object(B.default)(q,2),X=ne[0],se=ne[1],k=Object(r.useState)("_"),pe=Object(B.default)(k,2),_=pe[0],le=pe[1],ue=Object(r.useState)(Jt(_,F.sources[_])),te=Object(B.default)(ue,2),G=te[0],oe=te[1],fe=Object(r.useState)(Boolean(F.defaultShowCode)),me=Object(B.default)(fe,2),ye=me[0],Ie=me[1],he=Object(r.useState)(Math.random()),ge=Object(B.default)(he,2),De=ge[0],Ee=ge[1],Ce=F.sources[_][G]||F.sources[_].content,Se=Object(un.useTSPlaygroundUrl)(I,Ce),Fe=Object(r.useRef)(),Ue=Object(un.usePrefersColor)(),Ae=Object(B.default)(Ue,1),Me=Ae[0];Object(r.useEffect)(()=>{Ee(Math.random())},[Me]);function xe(we){le(we),oe(Jt(we,F.sources[we]))}return v.a.createElement("div",{style:F.style,className:[F.className,"__dumi-default-previewer",$?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:F.identifier,"data-debug":F.debug||void 0,"data-iframe":F.iframe||void 0},F.iframe&&v.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),v.a.createElement("div",{ref:j,className:"__dumi-default-previewer-demo",style:{transform:F.transform?"translate(0, 0)":void 0,padding:F.compact||F.iframe&&F.compact!==!1?"0":void 0,background:F.background}},F.iframe?v.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(F.iframe).replace(/(\d)$/,"$1px")},key:De,src:W,ref:Fe}):F.children),v.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":F.title},F.title&&v.a.createElement(un.AnchorLink,{to:"#".concat(F.identifier)},F.title),F.description&&v.a.createElement("div",{dangerouslySetInnerHTML:{__html:F.description}})),v.a.createElement("div",{className:"__dumi-default-previewer-actions"},z&&v.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:z}),re&&v.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:re}),F.motions&&v.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:J,onClick:()=>ie()}),F.iframe&&v.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ee(Math.random())}),!((R=F.hideActions)!==null&&R!==void 0&&R.includes("EXTERNAL"))&&v.a.createElement(un.Link,{target:"_blank",to:W},v.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),v.a.createElement("span",null),v.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":se,onClick:()=>X(Ce)}),G==="tsx"&&ye&&v.a.createElement(un.Link,{target:"_blank",to:Se},v.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),v.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(ye?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ie(!ye)})),ye&&v.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!U&&v.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:xe},Object.keys(F.sources).map(we=>v.a.createElement(fr,{tab:we==="_"?"index.".concat(Jt(we,F.sources[we])):we,key:we}))),v.a.createElement("div",{className:"__dumi-default-previewer-source"},v.a.createElement(ia.a,{code:Ce,lang:G,showCopy:!1}))))},Oa=cn.default=oa},"80pN":function(Tn,cn,e){"use strict";(function(B){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var r=e("MgzW"),v=e("q1tI"),M=e("i8i4"),ae=e("QCnb");function L(t){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pe=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Pe.hasOwnProperty("ReactCurrentDispatcher")||(Pe.ReactCurrentDispatcher={current:null}),Pe.hasOwnProperty("ReactCurrentBatchConfig")||(Pe.ReactCurrentBatchConfig={suspense:null});function Re(t){var a=t,n=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.effectTag&1026)!=0&&(n=a.return),t=a.return;while(t)}return a.tag===3?n:null}function ce(t){if(Re(t)!==t)throw Error(L(188))}function Nn(t){var a=t.alternate;if(!a){if(a=Re(t),a===null)throw Error(L(188));return a!==t?null:t}for(var n=t,c=a;;){var o=n.return;if(o===null)break;var y=o.alternate;if(y===null){if(c=o.return,c!==null){n=c;continue}break}if(o.child===y.child){for(y=o.child;y;){if(y===n)return ce(o),t;if(y===c)return ce(o),a;y=y.sibling}throw Error(L(188))}if(n.return!==c.return)n=o,c=y;else{for(var S=!1,w=o.child;w;){if(w===n){S=!0,n=o,c=y;break}if(w===c){S=!0,c=o,n=y;break}w=w.sibling}if(!S){for(w=y.child;w;){if(w===n){S=!0,n=y,c=o;break}if(w===c){S=!0,c=y,n=o;break}w=w.sibling}if(!S)throw Error(L(189))}}if(n.alternate!==c)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:a}function Oe(){return!0}function qe(){return!1}function In(t,a,n,c){this.dispatchConfig=t,this._targetInst=a,this.nativeEvent=n,t=this.constructor.Interface;for(var o in t)t.hasOwnProperty(o)&&((a=t[o])?this[o]=a(n):o==="target"?this.target=c:this[o]=n[o]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Oe:qe,this.isPropagationStopped=qe,this}r(In.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Oe)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Oe)},persist:function(){this.isPersistent=Oe},isPersistent:qe,destructor:function(){var t=this.constructor.Interface,a;for(a in t)this[a]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=qe,this._dispatchInstances=this._dispatchListeners=null}}),In.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},In.extend=function(t){function a(){}function n(){return c.apply(this,arguments)}var c=this;a.prototype=c.prototype;var o=new a;return r(o,n.prototype),n.prototype=o,n.prototype.constructor=n,n.Interface=r({},c.Interface,t),n.extend=c.extend,$e(n),n},$e(In);function bn(t,a,n,c){if(this.eventPool.length){var o=this.eventPool.pop();return this.call(o,t,a,n,c),o}return new this(t,a,n,c)}function on(t){if(!(t instanceof this))throw Error(L(279));t.destructor(),10>this.eventPool.length&&this.eventPool.push(t)}function $e(t){t.eventPool=[],t.getPooled=bn,t.release=on}var Kn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function wn(t,a){var n={};return n[t.toLowerCase()]=a.toLowerCase(),n["Webkit"+t]="webkit"+a,n["Moz"+t]="moz"+a,n}var On={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},Ne={},nt={};Kn&&(nt=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function Bn(t){if(Ne[t])return Ne[t];if(!On[t])return t;var a=On[t],n;for(n in a)if(a.hasOwnProperty(n)&&n in nt)return Ne[t]=a[n];return t}var tt=Bn("animationend"),ct=Bn("animationiteration"),rt=Bn("animationstart"),mt=Bn("transitionend"),Wn=null;function at(t){if(Wn===null)try{var a=("require"+Math.random()).slice(0,7);Wn=(B&&B[a])("timers").setImmediate}catch(n){Wn=function(c){var o=new MessageChannel;o.port1.onmessage=c,o.port2.postMessage(void 0)}}return Wn(t)}var zn=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,ft=zn[11],Ln=zn[12],xn=M.unstable_batchedUpdates,Un=Pe.IsSomeRendererActing,st=typeof ae.unstable_flushAllWithoutAsserting=="function",$n=ae.unstable_flushAllWithoutAsserting||function(){for(var t=!1;ft();)t=!0;return t};function it(t){try{$n(),at(function(){$n()?it(t):t()})}catch(a){t(a)}}var ln=0,Gn=!1,ot=M.findDOMNode,mn=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,D=mn[0],E=mn[4],T=mn[5],f=mn[6],i=mn[7],h=mn[8],b=mn[9],O=mn[10];function u(){}function p(t,a){if(!t)return[];if(t=Nn(t),!t)return[];for(var n=t,c=[];;){if(n.tag===5||n.tag===6||n.tag===1||n.tag===0){var o=n.stateNode;a(o)&&c.push(o)}if(n.child)n.child.return=n,n=n.child;else{if(n===t)return c;for(;!n.sibling;){if(!n.return||n.return===t)return c;n=n.return}n.sibling.return=n.return,n=n.sibling}}}function s(t,a){if(t&&!t._reactInternalFiber){var n=""+t;throw t=Array.isArray(t)?"an array":t&&t.nodeType===1&&t.tagName?"a DOM node":n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n,Error(L(286,a,t))}}var N={renderIntoDocument:function(t){var a=document.createElement("div");return M.render(t,a)},isElement:function(t){return v.isValidElement(t)},isElementOfType:function(t,a){return v.isValidElement(t)&&t.type===a},isDOMComponent:function(t){return!(!t||t.nodeType!==1||!t.tagName)},isDOMComponentElement:function(t){return!!(t&&v.isValidElement(t)&&t.tagName)},isCompositeComponent:function(t){return N.isDOMComponent(t)?!1:t!=null&&typeof t.render=="function"&&typeof t.setState=="function"},isCompositeComponentWithType:function(t,a){return N.isCompositeComponent(t)?t._reactInternalFiber.type===a:!1},findAllInRenderedTree:function(t,a){return s(t,"findAllInRenderedTree"),t?p(t._reactInternalFiber,a):[]},scryRenderedDOMComponentsWithClass:function(t,a){return s(t,"scryRenderedDOMComponentsWithClass"),N.findAllInRenderedTree(t,function(n){if(N.isDOMComponent(n)){var c=n.className;typeof c!="string"&&(c=n.getAttribute("class")||"");var o=c.split(/\s+/);if(!Array.isArray(a)){if(a===void 0)throw Error(L(11));a=a.split(/\s+/)}return a.every(function(y){return o.indexOf(y)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(t,a){if(s(t,"findRenderedDOMComponentWithClass"),t=N.scryRenderedDOMComponentsWithClass(t,a),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for class:"+a);return t[0]},scryRenderedDOMComponentsWithTag:function(t,a){return s(t,"scryRenderedDOMComponentsWithTag"),N.findAllInRenderedTree(t,function(n){return N.isDOMComponent(n)&&n.tagName.toUpperCase()===a.toUpperCase()})},findRenderedDOMComponentWithTag:function(t,a){if(s(t,"findRenderedDOMComponentWithTag"),t=N.scryRenderedDOMComponentsWithTag(t,a),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for tag:"+a);return t[0]},scryRenderedComponentsWithType:function(t,a){return s(t,"scryRenderedComponentsWithType"),N.findAllInRenderedTree(t,function(n){return N.isCompositeComponentWithType(n,a)})},findRenderedComponentWithType:function(t,a){if(s(t,"findRenderedComponentWithType"),t=N.scryRenderedComponentsWithType(t,a),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for componentType:"+a);return t[0]},mockComponent:function(t,a){return a=a||t.mockTagName||"div",t.prototype.render.mockImplementation(function(){return v.createElement(a,null,this.props.children)}),this},nativeTouchData:function(t,a){return{touches:[{pageX:t,pageY:a}]}},Simulate:null,SimulateNative:{},act:function(t){function a(){ln--,Un.current=n,Ln.current=c}Gn===!1&&(Gn=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),ln++;var n=Un.current,c=Ln.current;Un.current=!0,Ln.current=!0;try{var o=xn(t)}catch(y){throw a(),y}if(o!==null&&typeof o=="object"&&typeof o.then=="function")return{then:function(y,S){o.then(function(){1<ln||st===!0&&n===!0?(a(),y()):it(function(w){a(),w?S(w):y()})},function(w){a(),S(w)})}};try{ln!==1||st!==!1&&n!==!1||$n(),a()}catch(y){throw a(),y}return{then:function(y){y()}}}};function A(t){return function(a,n){if(v.isValidElement(a))throw Error(L(228));if(N.isCompositeComponent(a))throw Error(L(229));var c=E[t],o=new u;o.target=a,o.type=t.toLowerCase();var y=D(a),S=new In(c,y,o,a);S.persist(),r(S,n),c.phasedRegistrationNames?T(S):f(S),M.unstable_batchedUpdates(function(){i(a),O(S)}),h()}}N.Simulate={};for(var P in E)N.Simulate[P]=A(P);function m(t,a){return function(n,c){var o=new u(t);r(o,c),N.isDOMComponent(n)?(n=ot(n),o.target=n,b(a,1,document,o)):n.tagName&&(o.target=n,b(a,1,document,o))}}[["abort","abort"],[tt,"animationEnd"],[ct,"animationIteration"],[rt,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[mt,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(t){var a=t[1];N.SimulateNative[a]=m(a,t[0])}),B.exports=N.default||N}).call(this,e("hOG+")(Tn))},FhQ1:function(Tn,cn,e){"use strict";e.r(cn);var B=e("q1tI"),r=e.n(B),v=e("dEAq"),M=e.n(v),ae=e("0zqC"),L=e("JjdP"),Pe=r.a.memo(L.default["line-demo"].component),Re=r.a.memo(L.default["line-demo-1"].component),ce=r.a.memo(L.default["line-demo-2"].component),Nn=r.a.memo(L.default["line-demo-3"].component),Oe=r.a.memo(L.default["line-demo-4"].component);cn.default=qe=>(r.a.useEffect(()=>{qe!=null&&qe.location.hash&&v.AnchorLink.scrollToAnchor(decodeURIComponent(qe.location.hash.slice(1)))},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u57FA\u672C\u7528\u6CD5"},r.a.createElement(v.AnchorLink,{to:"#\u57FA\u672C\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u672C\u7528\u6CD5"),r.a.createElement("h3",{id:"\u5355\u6307\u6807-\u5355\u7EF4\u5EA6"},r.a.createElement(v.AnchorLink,{to:"#\u5355\u6307\u6807-\u5355\u7EF4\u5EA6","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5355\u6307\u6807 \u5355\u7EF4\u5EA6"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u56FE\u8868\u6E32\u67D3\u4E0A\uFF0C\u7EF4\u5EA6\u4F5C\u4E3A ",r.a.createElement("code",null,"x \u8F74"),"\uFF0C\u6307\u6807\u4F5C\u4E3A ",r.a.createElement("code",null,"y \u8F74"),"\u3002"))),r.a.createElement(ae.default,L.default["line-demo"].previewerProps,r.a.createElement(Pe,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u5355\u6307\u6807-\u53CC\u7EF4\u5EA6"},r.a.createElement(v.AnchorLink,{to:"#\u5355\u6307\u6807-\u53CC\u7EF4\u5EA6","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5355\u6307\u6807 \u53CC\u7EF4\u5EA6"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u56FE\u8868\u6E32\u67D3\u4E0A\uFF0C\u7B2C\u4E00\u7EF4\u5EA6\u4F5C\u4E3A ",r.a.createElement("code",null,"x \u8F74"),"\uFF0C\u6307\u6807\u4F5C\u4E3A ",r.a.createElement("code",null,"y \u8F74"),"\uFF0C\u7B2C\u4E8C\u7EF4\u5EA6\u4F5C\u4E3A ",r.a.createElement("code",null,"\u7CFB\u5217"),"\u3002"),r.a.createElement("li",null,"\u6570\u636E\u4E0A\uFF0C\u6570\u636E\u6761\u6570\u662F ",r.a.createElement("code",null,"\u300C\u5355\u6307\u6807 \u5355\u7EF4\u5EA6\u300D")," \u7684\u4E24\u500D\u3002"))),r.a.createElement(ae.default,L.default["line-demo-1"].previewerProps,r.a.createElement(Re,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u53CC\u6307\u6807-\u53CC\u7EF4\u5EA6"},r.a.createElement(v.AnchorLink,{to:"#\u53CC\u6307\u6807-\u53CC\u7EF4\u5EA6","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u53CC\u6307\u6807 \u53CC\u7EF4\u5EA6"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u56FE\u8868\u6E32\u67D3\u4E0A\uFF0C\u4F1A\u4EE5\u53CC y \u8F74\u6298\u7EBF\u56FE\u5C55\u793A\u3002"),r.a.createElement("li",null,"\u7B2C\u4E00\u7EF4\u5EA6\u4F5C\u4E3A ",r.a.createElement("code",null,"x \u8F74"),"\uFF0C\u7B2C\u4E8C\u7EF4\u5EA6\u4F5C\u4E3A ",r.a.createElement("code",null,"\u7CFB\u5217"),"\uFF0C\u7B2C\u4E00\u6307\u6807\u4F5C\u4E3A ",r.a.createElement("code",null,"\u5DE6 y \u8F74"),"\uFF0C\u7B2C\u4E8C\u6307\u6807\u4F5C\u4E3A ",r.a.createElement("code",null,"\u53F3 y \u8F74"),"\u3002"))),r.a.createElement(ae.default,L.default["line-demo-2"].previewerProps,r.a.createElement(ce,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u591A\u6307\u6807-\u5355\u7EF4\u5EA6"},r.a.createElement(v.AnchorLink,{to:"#\u591A\u6307\u6807-\u5355\u7EF4\u5EA6","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u591A\u6307\u6807 \u5355\u7EF4\u5EA6"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u56FE\u8868\u6E32\u67D3\u4E0A\uFF0C\u7EF4\u5EA6\u4F5C\u4E3A ",r.a.createElement("code",null,"x \u8F74"),"\uFF0C\u6307\u6807\u5206 ",r.a.createElement("code",null,"\u7CFB\u5217")," \u5C55\u793A\u3002"))),r.a.createElement(ae.default,L.default["line-demo-3"].previewerProps,r.a.createElement(Nn,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u9AD8\u7EA7\u7528\u6CD5"},r.a.createElement(v.AnchorLink,{to:"#\u9AD8\u7EA7\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u9AD8\u7EA7\u7528\u6CD5"),r.a.createElement("h3",{id:"\u767E\u5206\u767E\u5806\u53E0\u9762\u79EF\u56FE"},r.a.createElement(v.AnchorLink,{to:"#\u767E\u5206\u767E\u5806\u53E0\u9762\u79EF\u56FE","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u767E\u5206\u767E\u5806\u53E0\u9762\u79EF\u56FE")),r.a.createElement(ae.default,L.default["line-demo-4"].previewerProps,r.a.createElement(Oe,null)))))},JjdP:function(Tn,cn,e){"use strict";e.r(cn);var B=e("9og8"),r=e("WmNS"),v=e.n(r),M=e("LtsZ"),ae=`import React, { useRef } from 'react';
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
      width: '25%',
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

export default Demo;`,L=`import { get, set, cloneDeep } from 'lodash-es';

// window.log1 = value => {
//   console.log('%ccommon:', 'color: #00A7F7; font-weight: 500;', value);
// };

// window.log2 = value => {
//   console.log('%cwarning:', 'color: #f50; font-weight: 500;', value);
// };

// window.log3 = value => {
//   console.log('%csuccess:', 'color: #87d068; font-weight: 500;', value);
// };

// window.log4 = value => {
//   console.log('%cspecial:', 'color: #722ed1; font-weight: 500;', value);
// };

export function getParamByName(name, url = window.location.href) {
  name = name.replace(/[\\[\\]]/g, '\\\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\\+/g, ' '));
}

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
  return (
    schema && schema.type === 'object' && schema.properties && !schema.widget
  );
}

// TODO: to support case that item is not an object
export function isListType(schema) {
  return (
    schema &&
    schema.type === 'array' &&
    isObjType(schema.items) &&
    schema.enum === undefined
  );
}

// TODO: more tests to make sure weird & wrong schema won't crush
export function flattenSchema(_schema = {}, name = '#', parent, result = {}) {
  const schema = clone(_schema);
  let _name = name;
  if (!schema.$id) {
    schema.$id = _name; // path as $id, for easy access to path in schema
  }
  const children = [];
  if (isObjType(schema)) {
    Object.entries(schema.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    schema.properties = {};
  }
  if (isListType(schema)) {
    Object.entries(schema.items.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    schema.items.properties = {};
  }

  if (schema.type) {
    result[_name] = { parent, schema, children };
  }
  return result;
}

export function getSchemaFromFlatten(flatten, path = '#') {
  let schema = {};
  const item = clone(flatten[path]);
  if (item) {
    schema = item.schema;
    // schema.$id && delete schema.$id;
    if (item.children.length > 0) {
      item.children.forEach(child => {
        if (!flatten[child]) return;
        const key = getKeyFromPath(child);
        if (isObjType(schema)) {
          schema.properties[key] = getSchemaFromFlatten(flatten, child);
        }
        if (isListType(schema)) {
          schema.items.properties[key] = getSchemaFromFlatten(flatten, child);
        }
      });
    }
  }
  return schema;
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

export const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

export const clone = cloneDeep;

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

export const parseString = string =>
  Function('"use strict";return (' + string + ')')();

export const evaluateString = (string, formData, rootValue) =>
  Function(\`"use strict";
    const rootValue = \${JSON.stringify(rootValue)};
    const formData = \${JSON.stringify(formData)};
    return (\${string})\`)();

export function isExpression(func) {
  // if (typeof func === 'function') {
  //   const funcString = func.toString();
  //   return (
  //     funcString.indexOf('formData') > -1 ||
  //     funcString.indexOf('rootValue') > -1
  //   );
  // }
  if (typeof func !== 'string') return false;
  const pattern = /^{{(.+)}}$/;
  const reg1 = /^{{function\\(.+}}$/;
  // const reg2 = /^{{(.+=>.+)}}$/;
  if (typeof func === 'string' && func.match(pattern) && !func.match(reg1)) {
    return true;
  }
  return false;
}

export const parseRootValueInSchema = (schema, rootValue) => {
  const result = clone(schema);
  if (isObject(schema)) {
    Object.keys(schema).forEach(key => {
      const item = schema[key];
      if (isObject(item)) {
        result[key] = parseRootValueInSchema(item, rootValue);
      } else if (typeof item === 'string') {
        result[key] = parseSingleRootValue(item, rootValue);
      }
    });
  } else {
    console.error('schema is not an object:', schema);
  }
  return result;
};

// handle rootValue inside List
export const parseSingleRootValue = (expression, rootValue = {}) => {
  if (typeof expression === 'string' && expression.indexOf('rootValue') > 0) {
    const funcBody = expression.substring(2, expression.length - 2);
    const str = \`
    return \${funcBody.replace(/rootValue/g, JSON.stringify(rootValue))}\`;

    try {
      return Function(str)();
    } catch (error) {
      console.error(error, 'expression:', expression, 'rootValue:', rootValue);
      return null; // \u5982\u679C\u8BA1\u7B97\u6709\u9519\u8BEF\uFF0Creturn null \u6700\u5408\u9002
    }
  } else {
    return expression;
  }
};

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
      return null; // \u5982\u679C\u8BA1\u7B97\u6709\u9519\u8BEF\uFF0Creturn null \u6700\u5408\u9002
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

export const schemaContainsExpression = schema => {
  if (isObject(schema)) {
    return Object.keys(schema).some(key => {
      const value = schema[key];
      if (typeof value === 'string') {
        return isExpression(value);
      } else if (isObject(value)) {
        return schemaContainsExpression(value);
      } else {
        return false;
      }
    });
  }
  return false;
};

export const parseAllExpression = (_schema, formData, dataPath) => {
  const schema = clone(_schema);
  Object.keys(schema).forEach(key => {
    const value = schema[key];
    if (isObject(value)) {
      schema[key] = parseAllExpression(value, formData, dataPath);
    } else if (isExpression(value)) {
      schema[key] = parseSingleExpression(value, formData, dataPath);
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

export const isFunctionString = fString => {
  return typeof fString === 'string' && fString.indexOf('function(') === 0;
};

export function parseFunction(fString) {
  if (isFunctionString(fString)) {
    return Function('return ' + fString)();
  }
  return fString;
}

// \u83B7\u5F97propsSchema\u7684children
// function getChildren2(schema) {
//   if (!schema) return [];
//   const {
//     // object
//     properties,
//     // array
//     items,
//     type,
//   } = schema;
//   if (!properties && !items) {
//     return [];
//   }
//   let schemaSubs = {};
//   if (type === 'object') {
//     schemaSubs = properties;
//   }
//   if (type === 'array') {
//     schemaSubs = items.properties;
//   }
//   return Object.keys(schemaSubs).map(name => ({
//     schema: schemaSubs[name],
//     name,
//   }));
// }

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

export const getKeyFromPath = (path = '#') => {
  try {
    const arr = path.split('.');
    const last = arr.slice(-1)[0];
    const result = last.replace('[]', '');
    return result;
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
      if ([false, 0, ''].indexOf(item) > -1) return true;
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

export const getDescriptorSimple = (schema = {}, path) => {
  let result = {};
  if (isObject(schema)) {
    if (schema.type) {
      switch (schema.type) {
        case 'range':
          result.type = 'array';
          break;
        case 'html':
          result.type = 'string';
          break;
        default:
          result.type = schema.type;
          break;
      }
    }
    ['pattern', 'min', 'max', 'len', 'required'].forEach(key => {
      if (Object.keys(schema).indexOf(key) > -1) {
        result[key] = schema[key];
      }
    });

    switch (schema.format) {
      case 'email':
      case 'url':
        result.type = schema.format;
        break;
      default:
        break;
    }

    const handleRegx = desc => {
      if (desc.pattern && typeof desc.pattern === 'string') {
        desc.pattern = new RegExp(desc.pattern);
      }
      return desc;
    };
    // result be array
    if (schema.rules) {
      if (Array.isArray(schema.rules)) {
        result = [result, ...schema.rules];
        result = result.map(r => handleRegx(r));
      } else if (isObject(schema.rules)) {
        result = [result, schema.rules];
        result = result.map(r => handleRegx(r));
      }
    } else {
      result = [result];
    }
  }
  return { [path]: result };
};

// export const getDescriptorFromSchema = ({ schema, isRequired = true }) => {
//   let result = {};
//   let singleResult = {};
//   if (schema.hidden === true) return { validator: () => true };
//   if (isObjType(schema)) {
//     result.type = 'object';
//     if (isRequired && schema.required === true) {
//       result.required = true;
//     }
//     result.fields = {};
//     Object.keys(schema.properties).forEach(key => {
//       const item = schema.properties[key];
//       // \u517C\u5BB9\u65E7\u7684\uFF01
//       if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
//         item.required = true;
//       }
//       result.fields[key] = getDescriptorFromSchema({
//         schema: item,
//         isRequired,
//       });
//     });
//   } else if (isListType(schema)) {
//     result.type = 'array';
//     if (isRequired && schema.required === true) {
//       result.required = true;
//     }
//     if (typeof schema.min === 'number') {
//       result.min = schema.min;
//     }
//     if (typeof schema.max === 'number') {
//       result.max = schema.max;
//     }
//     result.defaultField = { type: 'object', fields: {} }; // \u76EE\u524D\u5C31\u9ED8\u8BA4\u53EA\u6709object\u7C7B\u578B\u7684 TODO:
//     Object.keys(schema.items.properties).forEach(key => {
//       const item = schema.items.properties[key];
//       // \u517C\u5BB9\u65E7\u7684\uFF01
//       if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
//         item.required = true;
//       }
//       result.defaultField.fields[key] = getDescriptorFromSchema({
//         schema: item,
//         isRequired,
//       });
//     });
//   } else {
//     // \u5355\u4E2A\u7684\u903B\u8F91
//     const processRule = item => {
//       if (schema.type) return { ...item, type: schema.type };
//       if (item.pattern && typeof item.pattern === 'string') {
//         return { ...item, pattern: new RegExp(item.pattern) };
//       }
//       return item;
//     };
//     const { required, ...rest } = schema;

//     ['type', 'pattern', 'min', 'max', 'len'].forEach(key => {
//       if (Object.keys(rest).indexOf(key) > -1) {
//         singleResult[key] = rest[key];
//       }
//     });

//     switch (schema.type) {
//       case 'range':
//         singleResult.type = 'array';
//         break;
//       case 'html':
//         singleResult.type = 'string';
//         break;
//       default:
//         break;
//     }
//     switch (schema.format) {
//       case 'email':
//       case 'url':
//         singleResult.type = schema.format;
//         break;
//       default:
//         break;
//     }

//     let requiredRule;
//     if (isRequired && schema.required === true) {
//       requiredRule = { required: true, type: singleResult.type || 'string' };
//     }

//     if (schema.rules) {
//       if (Array.isArray(schema.rules)) {
//         const _rules = [];
//         schema.rules.forEach(item => {
//           if (item.required === true) {
//             if (isRequired) {
//               requiredRule = item;
//             }
//           } else {
//             _rules.push(processRule(item));
//           }
//         });
//         result = [singleResult, ..._rules];
//       } else if (isObject(schema.rules)) {
//         // TODO: \u89C4\u8303\u4E0A\u4E0D\u5141\u8BB8rules\u662Fobject\uFF0C\u7701\u4E00\u70B9\u4E8B\u513F
//         result = [singleResult, processRule(schema.rules)];
//       } else {
//         result = singleResult;
//       }
//     } else {
//       result = singleResult;
//     }

//     if (requiredRule) {
//       if (Array.isArray(result)) {
//         result.push(requiredRule);
//       } else if (isObject(result)) {
//         result = [result, requiredRule];
//       }
//     }

//     if (schema.format === 'image') {
//       const imgValidator = {
//         validator: (rule, value) => {
//           const pattern = /([/|.|w|s|-])*.(jpg|gif|png|bmp|apng|webp|jpeg|json)/;
//           if (!value) return true; // \u8FD9\u91CC\u5224\u65AD\u5BBD\u4E00\u70B9\uFF0Cundefined\u3001null\u3001'' \u90FD\u5F53\u505A\u6CA1\u6709\u586B\u5199
//           return !!pattern.exec(value) || isUrl(value);
//         },
//         message: '\${title}\u7684\u7C7B\u578B\u4E0D\u662Fimage',
//       };
//       if (Array.isArray(result)) {
//         result.push(imgValidator);
//       } else if (isObject(result)) {
//         result = [result, imgValidator];
//       }
//     }
//   }
//   return result;
// };

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
export const generateDataSkeleton = (schema, formData) => {
  let _formData = clone(formData);
  let result = _formData;
  if (isObjType(schema)) {
    if (_formData === undefined || typeof _formData !== 'object') {
      _formData = {};
      result = {};
    }
    Object.keys(schema.properties).forEach(key => {
      const childSchema = schema.properties[key];
      const childData = _formData[key];
      const childResult = generateDataSkeleton(childSchema, childData);
      result[key] = childResult;
    });
  } else if (_formData !== undefined) {
    // result = _formData;
  } else {
    if (schema.default !== undefined) {
      result = clone(schema.default);
    } else if (schema.type === 'boolean' && !schema.widget) {
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
    if (
      typeof schema.props === 'function' ||
      (isObject(schema.props) && Object.keys(schema.props).length > 0)
    ) {
    } else {
      delete schema.props;
    }
    return schema;
  } catch (error) {
    console.error('schema\u8F6C\u6362\u5931\u8D25\uFF01', error);
    return schema;
  }
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

// const x = { a: 1, b: { c: 2 }, d: [{ e: 3, f: [{ g: 5 }] }, { e: 4 }] };
// ['a', 'b.c', 'd[0].e', 'd[0].f[0].g', 'd[1].e']

export const dataToKeys = (data, rootKey = '') => {
  let result = [];
  if (rootKey && rootKey.slice(-1) !== ']') {
    result.push(rootKey);
  }

  const isComplex = data => isObject(data) || Array.isArray(data);
  if (isObject(data)) {
    Object.keys(data).forEach(key => {
      const item = data[key];
      const itemRootKey = rootKey ? rootKey + '.' + key : key;
      if (isComplex(item)) {
        const itemKeys = dataToKeys(item, itemRootKey);
        result = [...result, ...itemKeys];
      } else {
        result.push(itemRootKey);
      }
    });
  } else if (Array.isArray(data)) {
    data.forEach((item, idx) => {
      const itemRootKey = rootKey ? \`\${rootKey}[\${idx}]\` : \`[\${idx}]\`;
      if (isComplex(item)) {
        const itemKeys = dataToKeys(item, itemRootKey);
        result = [...result, ...itemKeys];
      } else {
        result.push(itemRootKey);
      }
    });
  } else {
  }
  return result;
};

export const removeHiddenFromResult = (data, flatten) => {
  let result = clone(data);

  const keys = dataToKeys(result);

  keys.forEach(key => {
    const { id, dataIndex } = destructDataPath(key);
    if (flatten[id]) {
      let { hidden } = flatten[id].schema || {};
      if (isExpression(hidden)) {
        hidden = parseSingleExpression(hidden, result, key);
      }
      if (get(result, key) !== undefined && hidden) {
        set(result, key, undefined);
      }
    }
  });
  return result;
};

export function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return hours + ':' + minutes + ':' + seconds;
}

export function yymmdd(timeStamp) {
  const date_ob = new Date(Number(timeStamp));
  const adjustZero = num => ('0' + num).slice(-2);
  let day = adjustZero(date_ob.getDate());
  let month = adjustZero(date_ob.getMonth());
  let year = date_ob.getFullYear();
  let hours = adjustZero(date_ob.getHours());
  let minutes = adjustZero(date_ob.getMinutes());
  let seconds = adjustZero(date_ob.getSeconds());
  return \`\${year}-\${month}-\${day} \${hours}:\${minutes}:\${seconds}\`;
}

export function allPromiseFinish(promiseList) {
  let hasError = false;
  let count = promiseList.length;
  const results = [];

  if (!promiseList.length) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    promiseList.forEach((promise, index) => {
      promise
        .catch(e => {
          hasError = true;
          return e;
        })
        .then(result => {
          count -= 1;
          results[index] = result;

          if (count > 0) {
            return;
          }

          if (hasError) {
            reject(results);
          }
          resolve(results);
        });
    });
  });
}

export const removeDups = arr => {
  if (!Array.isArray(arr)) {
    console.log('in removeDups: param is not an array');
    return;
  }
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) {
      array.push(arr[i]);
    }
  }
  return array;
};`,Pe=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Re=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,ce=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,Nn=`export const basic = {
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
};`,Oe=`import React from 'react';
import { Button, message, Input } from 'antd';
import FormRender, { useForm } from 'form-render';

const { TextArea } = Input;

const Demo = () => {
  const form = useForm();

  const schema = {
    type: 'object',
    properties: {
      useSelect: {
        title: '\u8F93\u5165\u6846\u9AD8\u5EA6',
        type: 'number',
      },
      select2: {
        title: '\u8F93\u5165\u6846',
        type: 'string',
        dependencies: ['useSelect'],
        widget: 'MyTextEditor',
      },
    },
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.success('\u63D0\u4EA4\u6210\u529F\uFF1A' + JSON.stringify(data));
    }
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        widgets={{ MyTextEditor }}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

const MyTextEditor = props => {
  const { addons } = props;
  console.log(addons.dependValues);
  let rows;
  if (addons && addons.dependValues) {
    rows = addons.dependValues[0] || 2;
  }
  return <TextArea rows={rows} />;
};

export default Demo;`,qe=`import React, { useState, useEffect } from 'react';
import { Button, Input } from 'antd';
import FormRender, { useForm } from 'form-render';

const Demo = () => {
  const form = useForm();

  const schema = {
    displayType: 'column',
    type: 'object',
    properties: {
      listName: {
        title: '\u5BF9\u8C61\u6570\u7EC4',
        description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
        type: 'array',
        default: [
          { select1: false, input1: 'hello world' },
          { select1: true },
          { select1: false },
        ],
        items: {
          type: 'object',
          properties: {
            select1: {
              title: '\u9690\u85CF\u8F93\u5165\u6846',
              type: 'boolean',
            },
            input1: {
              title: '\u8F93\u5165\u6846',
              type: 'string',
              required: true,
              hidden: '{{rootValue.select1 === true}}',
            },
          },
        },
      },
    },
  };

  const onFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`,In=`import React, { useState, useEffect } from 'react';
import { Button, Checkbox } from 'antd';
import FormRender, { useForm } from 'form-render';

const MyCheckbox = ({ addons }) => {
  const { dependValues, setValueByPath } = addons;
  console.log(dependValues);
  const checked = dependValues[0] && dependValues[0].length === 4;
  const onChange = e => {
    const val = e.target.checked;
    console.log(val);
    if (val === false) {
      setValueByPath('boxes', []);
    } else if (val === true) {
      setValueByPath('boxes', [1, 2, 3, 4]);
    }
  };
  return <Checkbox checked={checked} onChange={onChange} />;
};

const Demo = () => {
  const form = useForm();

  const schema = {
    type: 'object',
    properties: {
      select1: {
        title: '\u662F\u5426\u5168\u9009',
        type: 'boolean',
        dependencies: ['boxes'],
        widget: 'MyCheckbox',
      },
      boxes: {
        title: '\u53EF\u7528\u64CD\u4F5C',
        description: '\u591A\u9009',
        type: 'array',
        items: {
          type: 'number',
        },
        enum: [1, 2, 3, 4],
        enumNames: ['\u589E', '\u5220', '\u6539', '\u67E5'],
        widget: 'checkboxes',
      },
    },
  };

  const onFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        widgets={{ MyCheckbox }}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`,bn=`import React, { useState, useEffect } from 'react';
import { Button, Input } from 'antd';
import FormRender, { useForm } from 'form-render';

const Demo = () => {
  const form = useForm();

  const schema = {
    displayType: 'column',
    type: 'object',
    properties: {
      x: {
        title: '\u5BF9\u8C61\u6570\u7EC4',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            a: {
              title: '\u8F93\u5165\u6846',
              type: 'string',
            },
            y: {
              title: '\u5BF9\u8C61',
              type: 'object',
              properties: {
                z: {
                  title: '\u9009\u62E9\u6846',
                  type: 'string',
                  widget: 'radio',
                  enum: [],
                },
              },
            },
          },
        },
      },
    },
  };

  const onMount = () => {
    form.setSchemaByPath('x[].y.z', { enum: [1, 2, 3] });
  };

  const onFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        onMount={onMount}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`,on=`import React, { Component } from 'react';
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

export default Root;`,$e=`import React, { useState, useEffect } from 'react';
import deepEqual from 'deep-equal';
import parseJson from 'json-parse-better-errors';
import FormRender, { useForm } from 'form-render';
import DefaultSchema from './json/simplest.json';
import { Tabs } from 'antd';
import AsyncSelect from './customized/AsyncSelect';
import CodeBlock from './monaco';
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
          onChange={() => {}}
          className="flex flex-column"
          style={{ overflow: 'auto' }}
        >
          <TabPane tab="Schema" key="1">
            <CodeBlock value={schemaStr} onChange={handleCodeChange} />
          </TabPane>
          <TabPane tab="Data" key="2">
            <CodeBlock value={schema2str(form.getValues())} readOnly />
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

export default Demo;`,Kn=`{
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
}`,wn=`import { Select } from 'antd';
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
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const { value, ...rest } = this.props;
    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <Select
        {...rest}
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

export default SearchInput;`,On=`import React from 'react';
import Editor from 'react-simple-code-editor';
import { languages, highlight } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import './theme.css';

const Demo = ({ value, onChange }) => {
  return (
    <Editor
      value={value}
      onValueChange={onChange}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
      }}
    />
  );
};

export default Demo;`,Ne=`/* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+graphql+jsx+regex */
/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*='language-'],
pre[class*='language-'] {
  color: black;
  background: none;
  text-shadow: 0 1px white;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*='language-']::-moz-selection,
pre[class*='language-'] ::-moz-selection,
code[class*='language-']::-moz-selection,
code[class*='language-'] ::-moz-selection {
  text-shadow: none;
  background: #b3d4fc;
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection,
code[class*='language-']::selection,
code[class*='language-'] ::selection {
  text-shadow: none;
  background: #b3d4fc;
}

@media print {
  code[class*='language-'],
  pre[class*='language-'] {
    text-shadow: none;
  }
}

/* Code blocks */
pre[class*='language-'] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #999;
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #9a6e3a;
  background: hsla(0, 0%, 100%, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: #07a;
}

.token.function,
.token.class-name {
  color: #dd4a68;
}

.token.regex,
.token.important,
.token.variable {
  color: #e90;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}`,nt=`.debug * {
  outline: 1px solid gold;
}

.markdown p {
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
}`,Bn=`import React, { Component } from 'react';
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

export default Root;`,tt=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,ct=`{
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
}`,rt=`import { Select } from 'antd';
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

export default SearchInput;`,mt=`import React from 'react';
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

export default Demo;`,Wn=`import { monaco } from 'react-monaco-editor';

const valueMap = range => {
  return {
    widget: [
      {
        label: 'input',
        insertText: 'input',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u8F93\u5165\u6846',
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u591A\u884C\u8F93\u5165\u6846',
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u7EC4\u4EF6',
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u7EC4\u4EF6',
      },
      {
        label: 'dateRange',
        insertText: 'dateRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u8303\u56F4',
      },
      {
        label: 'timeRange',
        insertText: 'timeRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u8303\u56F4',
      },
      {
        label: 'checkbox',
        insertText: 'checkbox',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u662F\u5426\u9009\u62E9',
      },
      {
        label: 'select',
        insertText: 'select',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u5355\u9009',
      },
      {
        label: 'radio',
        insertText: 'radio',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u5355\u9009',
      },
      {
        label: 'multiSelect',
        insertText: 'multiSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u591A\u9009\u6846',
      },
      {
        label: 'checkboxes',
        insertText: 'checkboxes',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u591A\u9009\u6846',
      },
      {
        label: 'treeSelect',
        insertText: 'treeSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6811\u5F62\u9009\u62E9',
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u989C\u8272\u9009\u62E9',
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0A\u4F20\u7EC4\u4EF6',
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6587\u672C\uFF08\u53EA\u8BFB\u5C55\u793A\uFF09',
      },
      {
        label: 'slider',
        insertText: 'slider',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6ED1\u52A8\u8F93\u5165\u6761',
      },
      {
        label: 'rate',
        insertText: 'rate',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E94\u661F\u8BC4\u5206',
      },
      {
        label: 'map',
        insertText: 'map',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5BF9\u8C61',
      },
      {
        label: 'cardList',
        insertText: 'cardList',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u590D\u6742\u7ED3\u6784\uFF0C\u4F46item\u6570\u91CF\u4E0D\u5927)',
      },
      {
        label: 'simpleList',
        insertText: 'simpleList',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67091-2\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)',
      },
      {
        label: 'tableList',
        insertText: 'tableList',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67093-5\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)',
      },
      {
        label: 'drawerList',
        insertText: 'drawerList',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u6570\u636E\u91CF\u5927\uFF0C\u6216\u8005\u7ED3\u6784\u590D\u6742)',
      },
    ],
    type: [
      {
        label: 'string',
        insertText: 'string',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'string',
      },
      {
        label: 'number',
        insertText: 'number',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'number',
      },
      {
        label: 'boolean',
        insertText: 'boolean',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'boolean',
      },
      {
        label: 'array',
        insertText: 'array',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'array',
      },
      {
        label: 'object',
        insertText: 'object',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'object',
      },
      {
        label: 'range',
        insertText: 'range',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'range',
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'html',
      },
    ],
    format: [
      {
        label: 'image',
        insertText: 'image',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'image',
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'textarea',
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'color',
      },
      {
        label: 'email',
        insertText: 'email',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'email',
      },
      {
        label: 'url',
        insertText: 'url',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'url',
      },
      {
        label: 'dateTime',
        insertText: 'dateTime',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'dateTime',
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'date',
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'time',
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'upload',
      },
    ],
    displayType: [
      {
        label: 'row',
        insertText: 'row',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5E76\u6392\u5C55\u793A',
      },
      {
        label: 'column',
        insertText: 'column',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E24\u6392\u5C55\u793A',
      },
    ],
  };
};

const keySuggestions = range => [
  {
    label: 'title',
    insertText: 'title',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F',
  },
  {
    label: 'description',
    insertText: 'description',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F',
  },
  {
    label: 'type',
    insertText: 'type',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u503C\u7684\u6570\u636E\u7C7B\u578B',
  },
  {
    label: 'format',
    insertText: 'format',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8F93\u5165\u6846\u7684\u683C\u5F0F',
  },
  {
    label: 'default',
    insertText: 'default',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C',
  },
  {
    label: 'required',
    insertText: 'required',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u5FC5\u586B',
  },
  {
    label: 'placeholder',
    insertText: 'placeholder',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'placeholder',
  },
  {
    label: 'bind',
    insertText: 'bind',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'bind',
  },
  {
    label: 'min',
    insertText: 'min',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5C0F\u503C',
  },
  {
    label: 'max',
    insertText: 'max',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5927\u503C',
  },
  {
    label: 'disabled',
    insertText: 'disabled',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u7981\u7528',
  },
  {
    label: 'readOnly',
    insertText: 'readOnly',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u53EA\u8BFB',
  },
  {
    label: 'hidden',
    insertText: 'hidden',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u9690\u85CF',
  },
  {
    label: 'displayType',
    insertText: 'displayType',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u5E03\u5C40',
  },
  {
    label: 'width',
    insertText: 'width',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6',
  },
  {
    label: 'labelWidth',
    insertText: 'labelWidth',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'label \u7684\u5BBD\u5EA6',
  },
  {
    label: 'className',
    insertText: 'className',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'className',
  },
  {
    label: 'widget',
    insertText: 'widget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6E32\u67D3',
  },
  {
    label: 'readOnlyWidget',
    insertText: 'readOnlyWidget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7528\u54EA\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3',
  },
  {
    label: 'extra',
    insertText: 'extra',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5C55\u793A\u66F4\u591A\u8BF4\u660E\u4FE1\u606F',
  },
  {
    label: 'properties',
    insertText: 'properties',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027(\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\u4E2D\u4F7F\u7528)',
  },
  {
    label: 'items',
    insertText: 'items',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u5217\u8868\u4E2D\u6BCF\u4E2Aitem\u7684\u7ED3\u6784(\u53EA\u5728\u5217\u8868\u4E2D\u4F7F\u7528)',
  },
  {
    label: 'enum',
    insertText: 'enum',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C',
  },
  {
    label: 'enumNames',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u6587\u6848',
  },
  {
    label: 'rules',
    insertText: 'rules',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6821\u9A8Crules',
  },
  {
    label: 'props',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u989D\u5916\u7EC4\u4EF6\u5C5E\u6027',
  },
];

export { valueMap, keySuggestions };`,at=`.markdown p {
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
}`,zn=`import React from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
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
      width: '25%',
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
  const { refresh, tableState }: any = useTable();

  const searchApi = (params, sorter) => {
    console.group(sorter);
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

  const searchApi2 = (params, sorter) => {
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data.slice(1),
            total: res.data.length - 1,
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
      sorter: true,
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
        api={[
          {
            name: '\u5168\u90E8\u6570\u636E',
            api: searchApi,
          },
          {
            name: '\u6211\u7684\u6570\u636E',
            api: searchApi2,
          },
        ]}
      />
      <Table
        // size="small"
        pagination={{ pageSize: 4 }}
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

export default withTable(Demo);`,ft=`import React from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, message, Tooltip, Button } from 'antd';
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
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
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

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        hidden
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={searchApi}
      />
      <Table
        debug
        columns={columns}
        headerTitle="\u9AD8\u7EA7\u8868\u5355"
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

export default withTable(Demo);`,Ln=`import React from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, message, Tooltip, Button } from 'antd';
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
      width: '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
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

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        hidden
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={searchApi}
      />
      <Table
        columns={columns}
        rowKey="id"
      />
    </div>
  );
};

export default withTable(Demo);`,xn=`import React, { useEffect } from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';
import { history } from 'umi';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      width: '25%',
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
  const { refresh, tableState, form }: any = useTable();
  useEffect(() => {
    // \u5B9E\u9645\u4F7F\u7528\u65F6queryParam\u4E3Aurl\u4E0A\u53D6\u4E0B\u6765\u7684\u6709\u6548\u53C2\u6570
    // const queryParam = { state: 'open' };
    const queryParam = history.location.query;
    if (queryParam) {
      // form\u5177\u4F53api\u53C2\u8003form-render\u6587\u6863
      form.setValues(queryParam);
    }
  }, []);

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

  const showData = () => {
    refresh(null, { extra: 1 });
  };
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
  const onSearch = search => {
    console.log('onSearch', search);
  };
  const afterSearch = params => {
    const formData = form.getValues();
    history.replace({
      pathname: '/table-render/demo',
      query: formData,
    });
  };
  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        schema={schema}
        displayType="row"
        onSearch={onSearch}
        afterSearch={afterSearch}
        api={searchApi}
      />
      <Table
        columns={columns}
        headerTitle="url\u5E26\u53C2\u67E5\u8BE2"
        rowKey="id"
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
    </div>
  );
};

export default withTable(Demo);`,Un=`import React from 'react';
import { Table, Search, withTable } from 'table-render';

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
    title: {
      title: '\u6807\u9898',
      type: 'string',
      width: '30%',
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '30%',
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
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: (row, record) => <a onClick={() => alert(row.title)}>\u7F16\u8F91</a>,
  },
];

const App = () => {
  const searchApi = () => {
    return Promise.resolve({
      rows: dataSource,
      total: dataSource.length,
    });
  };
  return (
    <>
      <Search debug schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </>
  );
};

export default withTable(App);`,st=`import React, { useState, useRef } from 'react';
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

export default Demo;`,$n=`import React from 'react';
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

export default Demo;`,it=`import React from 'react';
import Generator from 'fr-generator';
import './index.less';

const {
  Provider,
  Sidebar,
  Canvas,
  Settings,
} = Generator;

const Demo = () => {
  return (
    <div className="fr-generator-playground" style={{ height: '40vh' }}>
      <Provider
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      >
        <div className="fr-generator-container">
          <Settings />
          <Canvas />
          <Sidebar fixedName />
        </div>
      </Provider>
    </div>
  );
};

export default Demo;`,ln=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,Gn=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
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

const stringContains = (str, text) => {
  return str.indexOf(text) > -1;
}

const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

// \u83B7\u5F97 propsSchema \u7684 children
const getChildren2 = (schema) => {
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

// formily Schema => FRG schema
const transformFrom = (mySchema, parent = null) => {
  const isObj = mySchema.type === 'object' && mySchema.properties;
  const isList =
    mySchema.type === 'array' && mySchema.items && mySchema.items.properties;
  const hasChildren = isObj || isList;
  // debugger;
  if (!hasChildren) {
    if (mySchema.enum && Array.isArray(mySchema.enum)) {
      const list = mySchema.enum;
      if (
        isObject(list[0]) &&
        list[0].label !== undefined &&
        list[0].value !== undefined
      ) {
        const _enumNames = list.map(i => i.label);
        const _enum = list.map(i => i.value);
        mySchema.enum = _enum;
        mySchema.enumNames = _enumNames;
      }
    }
  } else {
    const childrenList = getChildren2(mySchema);
    childrenList.map(item => {
      if (isObj) {
        mySchema.properties[item.name] = transformFrom(item.schema, mySchema);
      }
      if (isList) {
        mySchema.items.properties[item.name] = transformFrom(
          item.schema,
          mySchema
        );
      }
    });
  }
  if (mySchema['x-component']) {
    mySchema['widget'] = mySchema['x-component'];
  }
  if (mySchema['x-component-props']) {
    mySchema['props'] = mySchema['x-component-props'];
  }
  if (parent && mySchema.required) {
    if (parent.required && Array.isArray(parent.required)) {
      parent.required.push(mySchema.name);
    } else {
      parent.required = [mySchema.name];
    }
  }
  delete mySchema.key;
  delete mySchema.name;
  delete mySchema.required;
  delete mySchema['x-component'];
  delete mySchema['x-component-props'];
  return mySchema;
};

// FRG schema => formily Schema
const transformTo = (frSchema, parent = null, key = null) => {
  const isObj = frSchema.type === 'object' && frSchema.properties;
  const isList =
    frSchema.type === 'array' && frSchema.items && frSchema.items.properties;
  const hasChildren = isObj || isList;
  // debugger;
  if (!hasChildren) {
    if (
      frSchema.enum &&
      Array.isArray(frSchema.enum) &&
      frSchema.enumNames &&
      Array.isArray(frSchema.enumNames)
    ) {
      const list = frSchema.enum.map((item, idx) => ({
        value: item,
        label: frSchema.enumNames[idx],
      }));
      frSchema.enum = list;
    }
  } else {
    const childrenList = getChildren2(frSchema);
    childrenList.map(item => {
      if (isObj) {
        frSchema.properties[item.name] = transformTo(
          item.schema,
          frSchema,
          item.name
        );
      }
      if (isList) {
        frSchema.items.properties[item.name] = transformTo(
          item.schema,
          frSchema,
          item.name
        );
      }
    });
  }
  if (frSchema['widget']) {
    frSchema['x-component'] = frSchema['widget'];
  }
  if (frSchema['props']) {
    frSchema['x-component-props'] = frSchema['props'];
  }
  delete frSchema['widget'];
  delete frSchema['props'];
  delete frSchema['enumNames'];
  if (key) {
    frSchema.name = key;
    frSchema.key = key;
  }
  if (parent && key && parent.required && Array.isArray(parent.required)) {
    if (parent.required.indexOf(key) > -1) {
      frSchema.required = true;
    }
  }
  return frSchema;
};

const fromFormily = schema =>  transformFrom(schema);
const toFormily = schema => transformTo(schema);

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

export default Demo;`,ot=`import React, { useState, useRef } from 'react';
import { useHistory } from 'umi';
import Generator from 'fr-generator';
import './index.less';

const Demo = () => {
  const ref = useRef();

  const goToFrPlayground = () => {
    ref.current.copyValue();
    window.open('/playground');
  };

  return (
    <div className="fr-generator-playground" style={{ height: '80vh' }}>
      <Generator
        ref={ref}
        extraButtons={[{ text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground }]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,mn=cn.default={"guide-card":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"oLxE"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p;return v.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return u=function(P,m){if(!m&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var t=O(m);if(t&&t.has(P))return t.get(P);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in P)if(c!=="default"&&Object.prototype.hasOwnProperty.call(P,c)){var o=n?Object.getOwnPropertyDescriptor(P,c):null;o&&(o.get||o.set)?Object.defineProperty(a,c,o):a[c]=P[c]}return a.default=P,t&&t.set(P,a),a},O=function(P){if(typeof WeakMap!="function")return null;var m=new WeakMap,t=new WeakMap;return(O=function(n){return n?t:m})(P)},f=e("K+nK"),N.t0=f,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,i=(0,N.t0)(N.t1),N.t2=u,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,h=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(13)]).then(e.bind(null,"36SN"));case 15:return b=N.sent,p=function(){var P=(0,h.useState)("Line"),m=(0,i.default)(P,2),t=m[0],a=m[1],n={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[t];return h.default.createElement("div",null,h.default.createElement("div",{style:{marginBottom:10}},h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return a("Line")}},"\u6298\u7EBF\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return a("Column")}},"\u67F1\u72B6\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return a("PivotTable")}},"\u4EA4\u53C9\u8868")),h.default.createElement(n,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},N.abrupt("return",p);case 18:case"end":return N.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(13)]).then(e.bind(null,"36SN"));case 8:return h=u.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},u.abrupt("return",b);case 11:case"end":return u.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(13)]).then(e.bind(null,"36SN"));case 8:return h=u.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},u.abrupt("return",b);case 11:case"end":return u.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(13)]).then(e.bind(null,"36SN"));case 8:return h=u.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},u.abrupt("return",b);case 11:case"end":return u.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(13)]).then(e.bind(null,"36SN"));case 8:return h=u.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},u.abrupt("return",b);case 11:case"end":return u.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(13)]).then(e.bind(null,"36SN"));case 8:return h=u.sent,b=function(){return i.default.createElement(h.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},u.abrupt("return",b);case 11:case"end":return u.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(13)]).then(e.bind(null,"36SN"));case 8:return h=u.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},u.abrupt("return",b);case 11:case"end":return u.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(13)]).then(e.bind(null,"36SN"));case 8:return h=u.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},u.abrupt("return",b);case 11:case"end":return u.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(13)]).then(e.bind(null,"36SN"));case 8:return h=u.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},u.abrupt("return",b);case 11:case"end":return u.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(13)]).then(e.bind(null,"36SN"));case 8:return h=u.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},u.abrupt("return",b);case 11:case"end":return u.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(13)]).then(e.bind(null,"36SN"));case 8:return h=u.sent,b=function(){return i.default.createElement(h.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},u.abrupt("return",b);case 11:case"end":return u.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(13)]).then(e.bind(null,"36SN"));case 8:return h=u.sent,b=function(){return i.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},u.abrupt("return",b);case 11:case"end":return u.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(13)]).then(e.bind(null,"36SN"));case 8:return h=u.sent,b=function(){return i.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(N,A,P){return i.default.createElement("div",null,i.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),i.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(A).length]}},N),i.default.createElement("p",null,JSON.stringify(A)),i.default.createElement("p",null,JSON.stringify(P)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},u.abrupt("return",b);case 11:case"end":return u.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p;return v.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return u=function(P,m){if(!m&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var t=O(m);if(t&&t.has(P))return t.get(P);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in P)if(c!=="default"&&Object.prototype.hasOwnProperty.call(P,c)){var o=n?Object.getOwnPropertyDescriptor(P,c):null;o&&(o.get||o.set)?Object.defineProperty(a,c,o):a[c]=P[c]}return a.default=P,t&&t.set(P,a),a},O=function(P){if(typeof WeakMap!="function")return null;var m=new WeakMap,t=new WeakMap;return(O=function(n){return n?t:m})(P)},f=e("K+nK"),N.t0=f,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,i=(0,N.t0)(N.t1),N.t2=u,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,h=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(13)]).then(e.bind(null,"36SN"));case 15:return b=N.sent,p=function(){var P=(0,h.useState)(!1),m=(0,i.default)(P,2),t=m[0],a=m[1];return h.default.createElement(h.default.Fragment,null,h.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",h.default.createElement("input",{type:"checkbox",value:t,onChange:function(){return a(!t)}})),h.default.createElement(b.PivotTable,{leftExpandable:t,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},N.abrupt("return",p);case 18:case"end":return N.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"OldSchemaTransformer-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s,N,A,P,m,t;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return N=function(o,y){if(!y&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var S=s(y);if(S&&S.has(o))return S.get(o);var w={},V=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in o)if(x!=="default"&&Object.prototype.hasOwnProperty.call(o,x)){var Q=V?Object.getOwnPropertyDescriptor(o,x):null;Q&&(Q.get||Q.set)?Object.defineProperty(w,x,Q):w[x]=o[x]}return w.default=o,S&&S.set(o,w),w},s=function(o){if(typeof WeakMap!="function")return null;var y=new WeakMap,S=new WeakMap;return(s=function(V){return V?S:y})(o)},f=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=f,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=f,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=f,n.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=N,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return u=n.sent,n.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=n.sent,A=b.default.TextArea,P={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},m=function(){var o=(0,O.useState)(JSON.stringify(P)),y=(0,h.default)(o,2),S=y[0],w=y[1],V=(0,O.useState)({}),x=(0,h.default)(V,2),Q=x[0],Le=x[1],_e=function(){try{var en=(0,p.updateSchemaToNewVersion)(JSON.parse(S));Le(en)}catch(pt){console.log(pt)}},fn=function(en){w(en.target.value)},pn=function(){w(JSON.stringify(JSON.parse(S),null,2))};return O.default.createElement("div",null,O.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),O.default.createElement(A,{style:{minHeight:400,marginTop:12,marginBottom:12},value:S,onChange:fn}),O.default.createElement(i.default,{style:{marginRight:12},onClick:pn},"\u683C\u5F0F\u5316\u65E7schema"),O.default.createElement(i.default,{type:"primary",onClick:_e},"\u751F\u6210\u65B0\u7248schema"),O.default.createElement(A,{style:{minHeight:400,marginTop:12},value:JSON.stringify(Q,null,2)}))},t=m,n.abrupt("return",t);case 38:case"end":return n.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
      const _newSchema = updateSchemaToNewVersion(JSON.parse(oldSchema));
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:L}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"OldSchemaTransformer-demo"}},"form-render-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s,N,A;return v.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return p=function(a,n){if(!n&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var c=u(n);if(c&&c.has(a))return c.get(a);var o={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var S in a)if(S!=="default"&&Object.prototype.hasOwnProperty.call(a,S)){var w=y?Object.getOwnPropertyDescriptor(a,S):null;w&&(w.get||w.set)?Object.defineProperty(o,S,w):o[S]=a[S]}return o.default=a,c&&c.set(a,o),o},u=function(a){if(typeof WeakMap!="function")return null;var n=new WeakMap,c=new WeakMap;return(u=function(y){return y?c:n})(a)},f=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=f,m.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,i=(0,m.t0)(m.t1),m.t2=f,m.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return m.t3=m.sent,h=(0,m.t2)(m.t3),m.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=m.sent,m.t4=p,m.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return m.t5=m.sent,O=(0,m.t4)(m.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(){var a=(0,O.useForm)(),n=function(o,y){console.log("formData:",o,"errors",y)};return h.default.createElement("div",null,h.default.createElement(O.default,{form:a,schema:s,onFinish:n}),h.default.createElement(i.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4"))},A=N,m.abrupt("return",A);case 27:case"end":return m.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s,N,A,P,m,t,a;return v.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return P=function(y,S){if(!S&&y&&y.__esModule)return y;if(y===null||typeof y!="object"&&typeof y!="function")return{default:y};var w=A(S);if(w&&w.has(y))return w.get(y);var V={},x=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Q in y)if(Q!=="default"&&Object.prototype.hasOwnProperty.call(y,Q)){var Le=x?Object.getOwnPropertyDescriptor(y,Q):null;Le&&(Le.get||Le.set)?Object.defineProperty(V,Q,Le):V[Q]=y[Q]}return V.default=y,w&&w.set(y,V),V},A=function(y){if(typeof WeakMap!="function")return null;var S=new WeakMap,w=new WeakMap;return(A=function(x){return x?w:S})(y)},f=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=f,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.t2=f,c.next=13,e.e(90).then(e.bind(null,"fWQN"));case 13:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.t4=f,c.next=18,e.e(91).then(e.bind(null,"mtLc"));case 18:return c.t5=c.sent,b=(0,c.t4)(c.t5),c.t6=f,c.next=23,e.e(82).then(e.bind(null,"yKVA"));case 23:return c.t7=c.sent,O=(0,c.t6)(c.t7),c.t8=f,c.next=28,e.e(81).then(e.bind(null,"879j"));case 28:return c.t9=c.sent,u=(0,c.t8)(c.t9),c.t10=f,c.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return c.t11=c.sent,p=(0,c.t10)(c.t11),c.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 37:return s=c.sent,c.t12=P,c.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 41:return c.t13=c.sent,N=(0,c.t12)(c.t13),m={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},t=function(o){(0,O.default)(S,o);var y=(0,u.default)(S);function S(){var w;(0,h.default)(this,S);for(var V=arguments.length,x=new Array(V),Q=0;Q<V;Q++)x[Q]=arguments[Q];return w=y.call.apply(y,[this].concat(x)),w.onFinish=function(Le,_e){console.log("formData:",Le,"errors",_e)},w}return(0,b.default)(S,[{key:"render",value:function(){var V=this.props.form;return p.default.createElement("div",null,p.default.createElement(N.default,{form:V,schema:m,onFinish:this.onFinish}),p.default.createElement(i.default,{type:"primary",onClick:V.submit},"\u63D0\u4EA4"))}}]),S}(p.default.Component),a=(0,N.connectForm)(t),c.abrupt("return",a);case 47:case"end":return c.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
  onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };

  render() {
    const { form } = this.props;
    return (
      <div>
        <FormRender form={form} schema={schema} onFinish={this.onFinish} />
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4
        </Button>
      </div>
    );
  }
}

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s,N,A;return v.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return p=function(a,n){if(!n&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var c=u(n);if(c&&c.has(a))return c.get(a);var o={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var S in a)if(S!=="default"&&Object.prototype.hasOwnProperty.call(a,S)){var w=y?Object.getOwnPropertyDescriptor(a,S):null;w&&(w.get||w.set)?Object.defineProperty(o,S,w):o[S]=a[S]}return o.default=a,c&&c.set(a,o),o},u=function(a){if(typeof WeakMap!="function")return null;var n=new WeakMap,c=new WeakMap;return(u=function(y){return y?c:n})(a)},f=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=f,m.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,i=(0,m.t0)(m.t1),m.t2=f,m.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return m.t3=m.sent,h=(0,m.t2)(m.t3),m.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=m.sent,m.t4=p,m.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return m.t5=m.sent,O=(0,m.t4)(m.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},showSetting:{title:"\u662F\u5426\u5C55\u793A\u7F51\u5740",type:"boolean"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",hidden:"{{formData.showSetting !== true}}",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},N=function(){var a=(0,O.useForm)(),n=function(o,y){y.length>0?alert("errors:"+JSON.stringify(y)):alert("formData:"+JSON.stringify(o,null,2))};return h.default.createElement("div",null,h.default.createElement(O.default,{form:a,schema:s,onFinish:n}),h.default.createElement(i.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4"))},A=N,m.abrupt("return",A);case 27:case"end":return m.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
    showSetting: {
      title: '\u662F\u5426\u5C55\u793A\u7F51\u5740',
      type: 'boolean',
    },
    siteUrl: {
      title: '\u7F51\u5740',
      type: 'string',
      placeholder: '\u6B64\u5904\u5FC5\u586B',
      hidden: '{{formData.showSetting !== true}}',
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"display-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O;return v.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(12)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),b=function(N){return{type:"object",displayType:N,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return i.default.createElement("div",null,i.default.createElement("h2",null,"display: row"),i.default.createElement(h.default,{schema:b("row")}),i.default.createElement("h2",null,"display: column"),i.default.createElement(h.default,{schema:b("column")}))},p.abrupt("return",O);case 14:case"end":return p.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O;return v.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(12)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return i.default.createElement(h.default,{readOnly:!0,schema:b})},p.abrupt("return",O);case 14:case"end":return p.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O;return v.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(12)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return i.default.createElement(h.default,{labelWidth:"200",schema:b})},p.abrupt("return",O);case 14:case"end":return p.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u;return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.t2=f,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(12)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return i.default.createElement(h.default,{schema:b})},u=O,s.abrupt("return",u);case 15:case"end":return s.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'cardList',
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u;return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.t2=f,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(12)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return i.default.createElement(h.default,{schema:b})},u=O,s.abrupt("return",u);case 15:case"end":return s.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'simpleList',
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u;return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.t2=f,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(12)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tableList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return i.default.createElement(h.default,{schema:b})},u=O,s.abrupt("return",u);case 15:case"end":return s.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'tableList',
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u;return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.t2=f,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(12)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"drawerList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return i.default.createElement(h.default,{schema:b})},u=O,s.abrupt("return",u);case 15:case"end":return s.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'drawerList',
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
            widget: 'simpleList',
            props: {
              hideMove: true,
            },
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s,N,A,P,m,t;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return P=function(o,y){if(!y&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var S=A(y);if(S&&S.has(o))return S.get(o);var w={},V=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in o)if(x!=="default"&&Object.prototype.hasOwnProperty.call(o,x)){var Q=V?Object.getOwnPropertyDescriptor(o,x):null;Q&&(Q.get||Q.set)?Object.defineProperty(w,x,Q):w[x]=o[x]}return w.default=o,S&&S.set(o,w),w},A=function(o){if(typeof WeakMap!="function")return null;var y=new WeakMap,S=new WeakMap;return(A=function(V){return V?S:y})(o)},f=e("K+nK"),n.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=f,n.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=f,n.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=f,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=f,n.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.t8=P,n.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return n.t9=n.sent,u=(0,n.t8)(n.t9),n.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 36:return p=n.sent,n.t10=P,n.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 40:return n.t11=n.sent,s=(0,n.t10)(n.t11),n.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return N=n.sent,m=function(){var o=(0,s.useForm)(),y=(0,u.useState)({}),S=(0,O.default)(y,2),w=S[0],V=S[1],x=function(){(0,N.fakeApi)("xxx/getForm").then(function(_e){o.setValues({input1:"hello world",select1:"c"})})};(0,u.useEffect)(function(){(0,N.delay)(1e3).then(function(Le){V({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var Q=function(_e,fn){fn.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(fn.map(function(pn){return pn.name}))):(0,N.fakeApi)("xxx/submit",_e).then(function(pn){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return u.default.createElement("div",{style:{width:"400px"}},u.default.createElement(s.default,{form:o,schema:w,onFinish:Q}),u.default.createElement(i.default,null,u.default.createElement(h.default,{onClick:x},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),u.default.createElement(h.default,{type:"primary",onClick:o.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},t=m,n.abrupt("return",t);case 48:case"end":return n.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Re}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s,N,A,P,m,t;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return A=function(o,y){if(!y&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var S=N(y);if(S&&S.has(o))return S.get(o);var w={},V=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in o)if(x!=="default"&&Object.prototype.hasOwnProperty.call(o,x)){var Q=V?Object.getOwnPropertyDescriptor(o,x):null;Q&&(Q.get||Q.set)?Object.defineProperty(w,x,Q):w[x]=o[x]}return w.default=o,S&&S.set(o,w),w},N=function(o){if(typeof WeakMap!="function")return null;var y=new WeakMap,S=new WeakMap;return(N=function(V){return V?S:y})(o)},f=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=f,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=f,n.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return n.t4=f,n.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=f,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return u=n.sent,n.t8=A,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,p=(0,n.t8)(n.t9),n.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return s=n.sent,P={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},m=function(){var o=(0,p.useForm)(),y=function(V,x){x.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(x.map(function(Q){return Q.name}))):(0,s.fakeApi)("xxx/submit",V).then(function(Q){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},S=function(V){var x=V.data,Q=V.errors,Le=V.schema,_e=(0,h.default)(V,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(fn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(p.default,{form:o,schema:P,beforeFinish:S,onFinish:y}),O.default.createElement(i.default,{type:"primary",onClick:o.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},t=m,n.abrupt("return",t);case 42:case"end":return n.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Re}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s,N,A,P,m,t;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return A=function(o,y){if(!y&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var S=N(y);if(S&&S.has(o))return S.get(o);var w={},V=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in o)if(x!=="default"&&Object.prototype.hasOwnProperty.call(o,x)){var Q=V?Object.getOwnPropertyDescriptor(o,x):null;Q&&(Q.get||Q.set)?Object.defineProperty(w,x,Q):w[x]=o[x]}return w.default=o,S&&S.set(o,w),w},N=function(o){if(typeof WeakMap!="function")return null;var y=new WeakMap,S=new WeakMap;return(N=function(V){return V?S:y})(o)},f=e("K+nK"),n.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=f,n.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=f,n.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=f,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=f,n.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 31:return u=n.sent,n.t8=A,n.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 35:return n.t9=n.sent,p=(0,n.t8)(n.t9),n.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return s=n.sent,P={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},m=function(){var o=(0,p.useForm)(),y=function(V,x){x.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(x.map(function(Q){return Q.name}))):(0,s.fakeApi)("xxx/submit",V).then(function(Q){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},S=function(){(0,s.fakeApi)("xxx/getForm").then(function(V){o.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(p.default,{form:o,schema:P,onFinish:y}),O.default.createElement(i.default,null,O.default.createElement(h.default,{onClick:S},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),O.default.createElement(h.default,{type:"primary",onClick:o.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},t=m,n.abrupt("return",t);case 44:case"end":return n.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Re}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s,N,A,P,m;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return N=function(c,o){if(!o&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var y=s(o);if(y&&y.has(c))return y.get(c);var S={},w=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var V in c)if(V!=="default"&&Object.prototype.hasOwnProperty.call(c,V)){var x=w?Object.getOwnPropertyDescriptor(c,V):null;x&&(x.get||x.set)?Object.defineProperty(S,V,x):S[V]=c[V]}return S.default=c,y&&y.set(c,S),S},s=function(c){if(typeof WeakMap!="function")return null;var o=new WeakMap,y=new WeakMap;return(s=function(w){return w?y:o})(c)},f=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,i=(0,a.t0)(a.t1),a.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return a.t2=f,a.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return a.t3=a.sent,h=(0,a.t2)(a.t3),a.t4=N,a.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return O=a.sent,a.t6=N,a.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return a.t7=a.sent,u=(0,a.t6)(a.t7),a.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return p=a.sent,A={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},P=function(){var c=(0,u.useForm)(),o=function(){c.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},y=function(w,V){V.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(V.map(function(x){return x.name}))):h.default.info(JSON.stringify(w))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(u.default,{form:c,schema:A,onMount:o,onFinish:y}),b.default.createElement(i.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},m=P,a.abrupt("return",m);case 37:case"end":return a.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Re}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s;return v.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return O=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var a=b(t);if(a&&a.has(m))return a.get(m);var n={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in m)if(o!=="default"&&Object.prototype.hasOwnProperty.call(m,o)){var y=c?Object.getOwnPropertyDescriptor(m,o):null;y&&(y.get||y.set)?Object.defineProperty(n,o,y):n[o]=m[o]}return n.default=m,a&&a.set(m,n),n},b=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,a=new WeakMap;return(b=function(c){return c?a:t})(m)},f=e("K+nK"),A.t0=f,A.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return A.t1=A.sent,i=(0,A.t0)(A.t1),A.t2=O,A.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 11:return A.t3=A.sent,h=(0,A.t2)(A.t3),u={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},p=function(){var m=(0,h.useForm)();return i.default.createElement(h.default,{form:m,schema:u})},s=p,A.abrupt("return",s);case 17:case"end":return A.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    checkbox1: {
      title: '\u5C55\u793A\u66F4\u591A\u5185\u5BB9',
      type: 'boolean',
    },
    select1: {
      title: '\u8BF7\u5047\u539F\u56E0',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u75C5\u5047', '\u6709\u4E8B', '\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)'],
      hidden: '{{formData.checkbox1 !== true}}',
      widget: 'radio',
    },
    input1: {
      title: '\u5177\u4F53\u539F\u56E0',
      type: 'string',
      format: 'textarea',
      hidden: '{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}',
    },
  },
};

const Demo1 = () => {
  const form = useForm();
  return <FormRender form={form} schema={schema} />;
};

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O;return v.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,O=function(){return i.default.createElement(h.default,{schema:b.expression})},p.abrupt("return",O);case 16:case"end":return p.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:Nn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s,N;return v.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return O=function(t,a){if(!a&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=b(a);if(n&&n.has(t))return n.get(t);var c={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var S=o?Object.getOwnPropertyDescriptor(t,y):null;S&&(S.get||S.set)?Object.defineProperty(c,y,S):c[y]=t[y]}return c.default=t,n&&n.set(t,c),c},b=function(t){if(typeof WeakMap!="function")return null;var a=new WeakMap,n=new WeakMap;return(b=function(o){return o?n:a})(t)},P.t0=O,P.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return P.t1=P.sent,f=(0,P.t0)(P.t1),P.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return i=P.sent,P.t2=O,P.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return P.t3=P.sent,h=(0,P.t2)(P.t3),u=function(t){return new Promise(function(a){return setTimeout(a,t)})},p={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},s=function(){var t=(0,h.useForm)(),a=function(){t.setValues({input1:"hello world"}),u(3e3).then(function(c){t.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(h.default,{form:t,schema:p,onMount:a})},N=s,P.abrupt("return",N);case 20:case"end":return P.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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
      title: '\u9009\u62E9\u6846',
      description: '\u52A0\u8F7D\u4E2D...',
      type: 'string',
      enum: [],
      widget: 'radio',
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.8.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u;return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.t2=f,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(12)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return i.default.createElement(h.default,{schema:b})},u=O,s.abrupt("return",u);case 15:case"end":return s.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'cardList',
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u;return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.t2=f,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(12)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return i.default.createElement(h.default,{schema:b})},u=O,s.abrupt("return",u);case 15:case"end":return s.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'simpleList',
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u;return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.t2=f,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(12)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tableList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return i.default.createElement(h.default,{schema:b})},u=O,s.abrupt("return",u);case 15:case"end":return s.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'tableList',
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u;return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.t2=f,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(12)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"drawerList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return i.default.createElement(h.default,{schema:b})},u=O,s.abrupt("return",u);case 15:case"end":return s.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'drawerList',
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
            widget: 'simpleList',
            props: {
              hideMove: true,
            },
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u;return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.t2=f,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(12)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),window.hello=function(N){var A=N.value;console.log(A)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",type:"array",widget:"tabList",props:{tabName:"\u9879\u76EE"},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return i.default.createElement(h.default,{schema:b})},u=O,s.abrupt("return",u);case 16:case"end":return s.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

window.hello = ({ value }) => {
  console.log(value);
};

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      type: 'array',
      widget: 'tabList',
      props: {
        tabName: '\u9879\u76EE',
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"listDisplay-demo-5":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u;return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.t2=f,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(12)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),b={type:"object",properties:{tabsName1:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tabList",props:{type:"editable-card",tabName:"\u9879\u76EE"},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName1:{title:"\u5BF9\u8C61\u6570\u7EC4",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return i.default.createElement(h.default,{schema:b})},u=O,s.abrupt("return",u);case 15:case"end":return s.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    tabsName1: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'tabList',
      props: {
        type: 'editable-card',
        tabName: '\u9879\u76EE', // \u9009\u9879\u5361\u5934\u663E\u793A\u6587\u5B57\uFF0C\u5BF9\u5E94antd\u4E2DTabs\u7684tab\u5C5E\u6027\u3002
      },
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
          listName1: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            type: 'array',
            widget: 'list1',
            props: {
              hideMove: true,
            },
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

const Demo = () => <Form schema={schema} />;
export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-5"}},"listDisplay-demo-6":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u;return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.t2=f,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(12)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),window.hello=function(N){var A=N.value;console.log(A)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"virtualList",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return i.default.createElement(h.default,{schema:b})},u=O,s.abrupt("return",u);case 16:case"end":return s.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
      widget: 'virtualList',
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-6"}},"mapping-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s,N,A,P;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p=function(n,c){if(!c&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var o=u(c);if(o&&o.has(n))return o.get(n);var y={},S=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in n)if(w!=="default"&&Object.prototype.hasOwnProperty.call(n,w)){var V=S?Object.getOwnPropertyDescriptor(n,w):null;V&&(V.get||V.set)?Object.defineProperty(y,w,V):y[w]=n[w]}return y.default=n,o&&o.set(n,y),y},u=function(n){if(typeof WeakMap!="function")return null;var c=new WeakMap,o=new WeakMap;return(u=function(S){return S?o:c})(n)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.t2=f,t.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=t.sent,t.t4=p,t.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return t.t5=t.sent,O=(0,t.t4)(t.t5),s=function(n){var c=n.schema;return c.$id==="#"?h.default.createElement("div",null,n.children):h.default.createElement("div",null,"my custom object:",n.children)},N={type:"object",properties:{object2:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",type:"string"}}}},labelWidth:120,displayType:"row"},A=function(){var n=(0,O.useForm)(),c=function(y,S){console.log("formData:",y,"errors",S)};return h.default.createElement("div",null,h.default.createElement(O.default,{form:n,schema:N,onFinish:c,mapping:{object:"CustomComA"},widgets:{CustomComA:s}}),h.default.createElement(i.default,{type:"primary",onClick:n.submit},"\u63D0\u4EA4"))},P=A,t.abrupt("return",P);case 28:case"end":return t.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const CustomComA = props => {
  const { schema } = props;
  if (schema.$id === '#') {
    return <div>{props.children}</div>;
  }
  return (
    <div>
      my custom object:
      {props.children}
    </div>
  );
};

const schema = {
  type: 'object',
  properties: {
    object2: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u8F93\u5165\u6846',
          type: 'string',
        },
      },
    },
  },
  labelWidth: 120,
  displayType: 'row',
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };
  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        mapping={{ object: 'CustomComA' }}
        widgets={{ CustomComA }}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},"react-dom":{version:">=16.8.0"}},identifier:"mapping-demo"}},"watch-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s;return v.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return O=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var a=b(t);if(a&&a.has(m))return a.get(m);var n={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in m)if(o!=="default"&&Object.prototype.hasOwnProperty.call(m,o)){var y=c?Object.getOwnPropertyDescriptor(m,o):null;y&&(y.get||y.set)?Object.defineProperty(n,o,y):n[o]=m[o]}return n.default=m,a&&a.set(m,n),n},b=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,a=new WeakMap;return(b=function(c){return c?a:t})(m)},A.t0=O,A.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return A.t1=A.sent,f=(0,A.t0)(A.t1),A.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return i=A.sent,A.t2=O,A.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return A.t3=A.sent,h=(0,A.t2)(A.t3),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},p=function(){var m=(0,h.useForm)(),t={"#":function(n){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",n)},input1:function(n){m.setValueByPath("input2",n)}};return f.default.createElement(h.default,{form:m,schema:u,watch:t})},s=p,A.abrupt("return",s);case 19:case"end":return A.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.8.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s,N,A;return v.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return p=function(a,n){if(!n&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var c=u(n);if(c&&c.has(a))return c.get(a);var o={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var S in a)if(S!=="default"&&Object.prototype.hasOwnProperty.call(a,S)){var w=y?Object.getOwnPropertyDescriptor(a,S):null;w&&(w.get||w.set)?Object.defineProperty(o,S,w):o[S]=a[S]}return o.default=a,c&&c.set(a,o),o},u=function(a){if(typeof WeakMap!="function")return null;var n=new WeakMap,c=new WeakMap;return(u=function(y){return y?c:n})(a)},f=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=f,m.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,i=(0,m.t0)(m.t1),m.t2=p,m.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return m.t3=m.sent,h=(0,m.t2)(m.t3),m.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=m.sent,m.t4=p,m.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return m.t5=m.sent,O=(0,m.t4)(m.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},N=function(){var a=(0,O.useForm)(),n=function(y,S){S.length>0?alert("errorFields:"+JSON.stringify(S)):alert("formData:"+JSON.stringify(y,null,2))},c={input1:function(y){y&&y.length>2?a.setSchemaByPath("obj1.select",function(S){var w=S.enumNames;return{enumNames:w.map(function(V){return V+"a"})}}):a.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return h.default.createElement("div",null,h.default.createElement(O.default,{form:a,schema:s,onFinish:n,watch:c}),h.default.createElement(i.default,{type:"",style:{marginRight:8},onClick:function(){return a.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),h.default.createElement(i.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4"))},A=N,m.abrupt("return",A);case 27:case"end":return m.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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
      if (val && val.length > 2) {
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s,N,A,P,m,t;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return N=function(o,y){if(!y&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var S=s(y);if(S&&S.has(o))return S.get(o);var w={},V=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in o)if(x!=="default"&&Object.prototype.hasOwnProperty.call(o,x)){var Q=V?Object.getOwnPropertyDescriptor(o,x):null;Q&&(Q.get||Q.set)?Object.defineProperty(w,x,Q):w[x]=o[x]}return w.default=o,S&&S.set(o,w),w},s=function(o){if(typeof WeakMap!="function")return null;var y=new WeakMap,S=new WeakMap;return(s=function(V){return V?S:y})(o)},f=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=f,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return n.t2=f,n.next=15,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 15:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.t4=f,n.next=20,e.e(92).then(e.bind(null,"0Owb"));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=f,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return u=n.sent,n.t8=N,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,p=(0,n.t8)(n.t9),A={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},P=function(o){return console.log("widget props:",o),O.default.createElement(h.default,(0,b.default)({addonBefore:"https://",addonAfter:".com"},o))},m=function(){var o=(0,p.useForm)();return O.default.createElement("div",null,O.default.createElement(p.default,{form:o,schema:A,widgets:{site:P},onFinish:function(S){return alert(JSON.stringify(S,null,2))}}),O.default.createElement(i.default,{type:"primary",onClick:o.submit},"\u63D0\u4EA4"))},t=m,n.abrupt("return",t);case 40:case"end":return n.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
  return <Input addonBefore="https://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  return (
    <div>
      <Form
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"form-render-dependencies":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"ODQR"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-dependencies"}},"form-render-listexpression":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"5OWw"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:qe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-listexpression"}},"form-render-doublebind":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"Xjjr"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:In}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-doublebind"}},"form-render-rightpath":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"bD0a"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:bn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-rightpath"}},"measure-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s,N,A;return v.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return s=function(a,n){if(!n&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var c=p(n);if(c&&c.has(a))return c.get(a);var o={},y=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var S in a)if(S!=="default"&&Object.prototype.hasOwnProperty.call(a,S)){var w=y?Object.getOwnPropertyDescriptor(a,S):null;w&&(w.get||w.set)?Object.defineProperty(o,S,w):o[S]=a[S]}return o.default=a,c&&c.set(a,o),o},p=function(a){if(typeof WeakMap!="function")return null;var n=new WeakMap,c=new WeakMap;return(p=function(y){return y?c:n})(a)},f=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=f,m.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,i=(0,m.t0)(m.t1),m.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=f,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,h=(0,m.t2)(m.t3),m.t4=s,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,b=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return O=m.sent,m.t6=s,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,u=(0,m.t6)(m.t7),N=function(){var a=(0,u.useForm)({logOnMount:function(y){console.log("onMount",y)},logOnSubmit:function(y){console.log("onSubmit",y)}}),n={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},c=function(y,S){S.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(S.map(function(w){return w.name}))):h.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return b.default.createElement("div",null,b.default.createElement(u.default,{id:"my-demo-form",form:a,schema:n,onFinish:c}),b.default.createElement(i.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},A=N,m.abrupt("return",A);case 33:case"end":return m.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';

const Demo = () => {
  const form = useForm({
    logOnMount: info => {
      console.log('onMount', info);
    },
    logOnSubmit: info => {
      console.log('onSubmit', info);
    },
  });

  const schema = {
    type: 'object',
    properties: {
      input1: {
        title: '\u8F93\u5165\u6846',
        required: true,
        type: 'string',
      },
      select1: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u5DE6', '\u4E2D', '\u53F3'],
        widget: 'radio',
      },
    },
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.success('\u63D0\u4EA4\u6210\u529F\uFF01');
    }
  };

  return (
    <div>
      <FormRender
        id="my-demo-form"
        form={form}
        schema={schema}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"migrate-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s;return v.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return p=function(){var m=(0,h.useForm)(),t=function(n,c){c.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(c))):alert(JSON.stringify(n))};return i.default.createElement("div",null,i.default.createElement(h.default,{form:m,schema:u,onFinish:t}),i.default.createElement("button",{onClick:m.submit},"\u63D0\u4EA4"))},O=function(m,t){if(!t&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var a=b(t);if(a&&a.has(m))return a.get(m);var n={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in m)if(o!=="default"&&Object.prototype.hasOwnProperty.call(m,o)){var y=c?Object.getOwnPropertyDescriptor(m,o):null;y&&(y.get||y.set)?Object.defineProperty(n,o,y):n[o]=m[o]}return n.default=m,a&&a.set(m,n),n},b=function(m){if(typeof WeakMap!="function")return null;var t=new WeakMap,a=new WeakMap;return(b=function(c){return c?a:t})(m)},f=e("K+nK"),A.t0=f,A.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return A.t1=A.sent,i=(0,A.t0)(A.t1),A.t2=O,A.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 12:return A.t3=A.sent,h=(0,A.t2)(A.t3),u={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=p,A.abrupt("return",s);case 17:case"end":return A.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s,N,A,P,m,t;return v.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return N=function(o,y){if(!y&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var S=s(y);if(S&&S.has(o))return S.get(o);var w={},V=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in o)if(x!=="default"&&Object.prototype.hasOwnProperty.call(o,x)){var Q=V?Object.getOwnPropertyDescriptor(o,x):null;Q&&(Q.get||Q.set)?Object.defineProperty(w,x,Q):w[x]=o[x]}return w.default=o,S&&S.set(o,w),w},s=function(o){if(typeof WeakMap!="function")return null;var y=new WeakMap,S=new WeakMap;return(s=function(V){return V?S:y})(o)},f=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=f,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=f,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=f,n.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=N,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return u=n.sent,n.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=n.sent,A=b.default.TextArea,P={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},m=function(){var o=(0,O.useState)(JSON.stringify(P)),y=(0,h.default)(o,2),S=y[0],w=y[1],V=(0,O.useState)({}),x=(0,h.default)(V,2),Q=x[0],Le=x[1],_e=function(){try{var en=(0,p.updateSchemaToNewVersion)(JSON.parse(S));Le(en)}catch(pt){console.log(pt)}},fn=function(en){w(en.target.value)},pn=function(){w(JSON.stringify(JSON.parse(S),null,2))};return O.default.createElement("div",null,O.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),O.default.createElement(A,{style:{minHeight:400,marginTop:12,marginBottom:12},value:S,onChange:fn}),O.default.createElement(i.default,{style:{marginRight:12},onClick:pn},"\u683C\u5F0F\u5316\u65E7schema"),O.default.createElement(i.default,{type:"primary",onClick:_e},"\u751F\u6210\u65B0\u7248schema"),O.default.createElement(A,{style:{minHeight:400,marginTop:12},value:JSON.stringify(Q,null,2)}))},t=m,n.abrupt("return",t);case 38:case"end":return n.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { updateSchemaToNewVersion } from '../../../packages/form-render/src/utils.js';
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
      const _newSchema = updateSchemaToNewVersion(JSON.parse(oldSchema));
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:L}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s,N;return v.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return s=function(){var t=(0,h.useState)({}),a=(0,i.default)(t,2),n=a[0],c=a[1],o=(0,h.useState)([]),y=(0,i.default)(o,2),S=y[0],w=y[1],V=(0,h.useState)(!1),x=(0,i.default)(V,2),Q=x[0],Le=x[1],_e=(0,b.useForm)({formData:n,onChange:c,onValidate:w,showValidate:Q});(0,h.useEffect)(function(){_e.init()},[]);var fn=function(){Le(!0),S.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(S))):alert(JSON.stringify(n))};return h.default.createElement("div",null,h.default.createElement(b.default,{form:_e,schema:p}),h.default.createElement("button",{onClick:fn},"\u63D0\u4EA4"))},u=function(t,a){if(!a&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=O(a);if(n&&n.has(t))return n.get(t);var c={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var y in t)if(y!=="default"&&Object.prototype.hasOwnProperty.call(t,y)){var S=o?Object.getOwnPropertyDescriptor(t,y):null;S&&(S.get||S.set)?Object.defineProperty(c,y,S):c[y]=t[y]}return c.default=t,n&&n.set(t,c),c},O=function(t){if(typeof WeakMap!="function")return null;var a=new WeakMap,n=new WeakMap;return(O=function(o){return o?n:a})(t)},f=e("K+nK"),P.t0=f,P.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return P.t1=P.sent,i=(0,P.t0)(P.t1),P.t2=u,P.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return P.t3=P.sent,h=(0,P.t2)(P.t3),P.t4=u,P.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 17:return P.t5=P.sent,b=(0,P.t4)(P.t5),p={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},N=s,P.abrupt("return",N);case 22:case"end":return P.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
  const [formData, setData] = useState({});
  const [valid, setValid] = useState([]);
  const [showValidate, setShowValidate] = useState(false);

  const form = useForm({
    formData,
    onChange: setData,
    onValidate: setValid,
    showValidate,
  }); // 1. formData\u3001onChange \u548C onValidate \u4F5C\u4E3A useForm \u7684\u5165\u53C2\u4F20\u5165

  useEffect(() => {
    form.init();
  }, []);

  const onSubmit = () => {
    setShowValidate(true);
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };

  return (
    <div>
      <FormRender
        form={form} // 3. \u8865\u4E0A
        schema={schema}
        // formData={formData} // 4. \u5168\u653E\u5230 useForm \u91CC\u4E86
        // onChange={setData}
        // onValidate={setValid}
        // showValidate={showValidate}
      />
      <button onClick={onSubmit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"schema-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O;return v.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,O=function(){return i.default.createElement(h.default,{schema:b.basic})},p.abrupt("return",O);case 16:case"end":return p.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:Nn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O;return v.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,O=function(){return i.default.createElement(h.default,{schema:b.titleTrick})},p.abrupt("return",O);case 16:case"end":return p.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:Nn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"BASV"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:on},"main.js":{import:"./main",content:$e},"json/simplest.json":{import:"./json/simplest.json",content:Kn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:wn},"monaco/index.js":{import:"./monaco",content:On},"theme.css":{import:"./theme.css",content:Ne},"index.css":{import:"./index.css",content:nt}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.8.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"docs-playground1":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"Wrpt"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:Bn},"main.js":{import:"./main",content:tt},"json/simplest.json":{import:"./json/simplest.json",content:ct},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:rt},"monaco/index.js":{import:"./monaco",content:mt},"suggestionsMap.js":{import:"./suggestionsMap",content:Wn},"index.css":{import:"./index.css",content:at}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.8.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.44.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground1"}},"table-render-advanced":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"7ZP+"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{tsx:zn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"CfUQ"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{tsx:ft}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"/usH"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"48jF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{tsx:xn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u,p,s,N;return v.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return f=e("K+nK"),P.t0=f,P.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return P.t1=P.sent,i=(0,P.t0)(P.t1),P.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(76)]).then(e.bind(null,"P2DI"));case 8:for(h=P.sent,b=[],O=0;O<6;O++)b.push({id:O.toString(),title:"\u6807\u9898".concat(O+1),created_at:new Date().getTime()});return u={type:"object",properties:{title:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},p=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(t,a){return i.default.createElement("a",{onClick:function(){return alert(t.title)}},"\u7F16\u8F91")}}],s=function(){var t=function(){return{rows:b,total:b.length}};return i.default.createElement(i.default.Fragment,null,i.default.createElement(h.Search,{schema:u,api:t}),i.default.createElement(h.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:p,rowKey:"id"}))},N=(0,h.withTable)(s),P.abrupt("return",N);case 16:case"end":return P.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Table, Search, withTable } from 'table-render';

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
    title: {
      title: '\u6807\u9898',
      type: 'string',
      width: '30%',
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '30%',
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
    <>
      <Search schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </>
  );
};

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"table-render-test1":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"aMwh"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:Un}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},identifier:"table-render-test1"}},"generator-demo":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){var f,i,h,b,O,u;return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.t2=f,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(77)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},O=function(){return i.default.createElement("div",{style:{height:"80vh"}},i.default.createElement(h.default,{defaultValue:b}))},u=O,s.abrupt("return",u);case 15:case"end":return s.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"PPgD"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:st}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.5.8"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"M63W"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:$n}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"SOdT"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:it},"index.less":{import:"./index.less",content:ln}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"jktF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:Gn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.5.8"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(M.dynamic)({loader:function(){var D=Object(B.a)(v.a.mark(function T(){return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"TYW4"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function E(){return D.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:ot},"index.less":{import:"./index.less",content:ln}},dependencies:{react:{version:">=16.14.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-playground"}}}},TIsu:function(Tn,cn,e){},Zs1V:function(Tn){Tn.exports=JSON.parse("{}")},p8sG:function(Tn,cn,e){"use strict";Tn.exports=e("80pN")}}]);