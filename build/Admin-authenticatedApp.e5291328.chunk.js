"use strict";(self.webpackChunkhackathon=self.webpackChunkhackathon||[]).push([[801],{31444:(N,C,t)=>{t.r(C),t.d(C,{default:()=>qt});var e=t(27279),o=t(2309),x=t(98934),O=t.n(x),E=t(40464);const S={i8:"4.14.5"};var A=t(83171),D=t(96854),L=t(80419),i=t(74081),H=t(61815),V=t(43433),Y=t.n(V),Le=t(67621),xe=t(92241),F=t(49402),v=t(51447),Ae=t(33812),ne=t.n(Ae),Re=t(99571),f=t(10701),se=t(2637),ae=t(45553),Ie=t(4987),T=t(93415),X=t(48102),oe=t(95066),Oe=t(70627),c=t.n(Oe),B=t(61020),P=t(72450);const De=(0,P.ZP)(f.k)`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({theme:n})=>`${n.colors.neutral800}1F`};
`,ie=({onClose:n,onSkip:s,children:a,hideSkip:r})=>{const{formatMessage:l}=(0,B.Z)();return e.createElement(se.h,null,e.createElement(De,{onClick:n,padding:8,justifyContent:"center"},e.createElement(ae.i,{onEscape:n},e.createElement(f.k,{direction:"column",alignItems:"stretch",background:"neutral0",width:(0,o.Q1)(660),shadow:"popupShadow",hasRadius:!0,padding:4,gap:8,role:"dialog","aria-modal":!0,onClick:d=>d.stopPropagation()},e.createElement(f.k,{justifyContent:"flex-end"},e.createElement(Ie.h,{onClick:n,"aria-label":l({id:"app.utils.close-label",defaultMessage:"Close"}),icon:e.createElement(oe.Z,null)})),e.createElement(T.x,{paddingLeft:7,paddingRight:7,paddingBottom:r?8:0},a),!r&&e.createElement(f.k,{justifyContent:"flex-end"},e.createElement(X.z,{variant:"tertiary",onClick:s},l({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})))))))};ie.propTypes={children:c().node.isRequired,onClose:c().func.isRequired,onSkip:c().func.isRequired,hideSkip:c().bool.isRequired};const be=ie;var y=t(32370),re=t(53274),Z=t(16334),J=t(43234);const We=P.ZP.li`
  list-style: disc;
  &::marker {
    color: ${({theme:n})=>n.colors.neutral800};
  }
`,le=({id:n,defaultMessage:s})=>{const{formatMessage:a}=(0,B.Z)();return e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:4,paddingBottom:6},a({id:n,defaultMessage:s},{documentationLink:je,b:Be,p:Ze,light:ke,ul:Ge,li:Ue}))},je=n=>e.createElement(y.Z,{as:"a",textColor:"primary600",target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"},n),Be=n=>e.createElement(y.Z,{fontWeight:"semiBold"},n),Ze=n=>e.createElement(y.Z,null,n),ke=n=>e.createElement(y.Z,{textColor:"neutral600"},n),Ge=n=>e.createElement(T.x,{paddingLeft:6},e.createElement("ul",null,n)),Ue=n=>e.createElement(We,null,n);le.propTypes={id:c().string.isRequired,defaultMessage:c().string.isRequired};const Ne=le;var Fe=t(2364);const w=({number:n,last:s,type:a})=>e.createElement(T.x,{paddingTop:3,paddingBottom:s?0:3},e.createElement(Fe.Z,{number:n,type:a}));w.defaultProps={number:void 0,last:!1,type:""},w.propTypes={number:c().number,last:c().bool,type:c().string};const de=w,q=({title:n,content:s,cta:a,onCtaClick:r,sectionIndex:l,stepIndex:d,hasSectionAfter:g})=>{const{formatMessage:u}=(0,B.Z)(),h=l>0,p=d>0,M=l+1;return e.createElement(e.Fragment,null,e.createElement(f.k,{alignItems:"stretch"},e.createElement(f.k,{marginRight:8,justifyContent:"center",minWidth:(0,o.Q1)(30)},h&&e.createElement(J.Z,{type:Z.hx,minHeight:(0,o.Q1)(24)})),e.createElement(y.Z,{variant:"sigma",textColor:"primary600"},u({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"}))),e.createElement(f.k,null,e.createElement(f.k,{marginRight:8,minWidth:(0,o.Q1)(30)},e.createElement(de,{number:l+1,type:p?Z.hx:Z.lW})),e.createElement(y.Z,{variant:"alpha",fontWeight:"bold",textColor:"neutral800",as:"h3",id:"title"},u(n))),e.createElement(f.k,{alignItems:"stretch"},e.createElement(f.k,{marginRight:8,direction:"column",justifyContent:"center",minWidth:(0,o.Q1)(30)},g&&e.createElement(e.Fragment,null,e.createElement(J.Z,{type:Z.hx}),p&&e.createElement(de,{number:M+1,type:Z.lW,last:!0}))),e.createElement(T.x,null,e.createElement(Ne,{...s}),a&&(a.target?e.createElement(o.Qj,{endIcon:e.createElement(re.Z,null),onClick:r,to:a.target},u(a.title)):e.createElement(X.z,{endIcon:e.createElement(re.Z,null),onClick:r},u(a.title))))),p&&g&&e.createElement(T.x,{paddingTop:3},e.createElement(f.k,{marginRight:8,justifyContent:"center",width:(0,o.Q1)(30)},e.createElement(J.Z,{type:Z.hx,minHeight:(0,o.Q1)(24)}))))};q.defaultProps={currentStep:null,cta:void 0},q.propTypes={sectionIndex:c().number.isRequired,stepIndex:c().number.isRequired,hasSectionAfter:c().bool.isRequired,content:c().shape({id:c().string.isRequired,defaultMessage:c().string.isRequired}).isRequired,cta:c().shape({target:c().string,title:c().shape({id:c().string.isRequired,defaultMessage:c().string.isRequired})}),currentStep:c().string,onCtaClick:c().func.isRequired,title:c().shape({id:c().string.isRequired,defaultMessage:c().string.isRequired}).isRequired};const ze=q,ce={stepContent:null,sectionIndex:null,stepIndex:null,hasSectionAfter:!1,hasStepAfter:!1},Ke=(n=ce,s)=>(0,H.ZP)(n,a=>{switch(s.type){case"UPDATE_MODAL":{a.stepContent=s.content,a.sectionIndex=s.newSectionIndex,a.stepIndex=s.newStepIndex,a.hasSectionAfter=s.newHasSectionAfter,a.hasStepAfter=s.newHasStepAfter;break}default:return a}}),$e=()=>{const{currentStep:n,guidedTourState:s,setCurrentStep:a,setStepState:r,isGuidedTourVisible:l,setSkipped:d}=(0,o.c1)(),[g,u]=(0,e.useState)(n),[{stepContent:h,sectionIndex:p,stepIndex:M,hasSectionAfter:j,hasStepAfter:K},$]=(0,e.useReducer)(Ke,ce),{trackUsage:k}=(0,o.rS)();(0,e.useEffect)(()=>{if(!n){u(!1);return}const[I]=ne()(s,n);u(!I&&l)},[n,s,l]),(0,e.useEffect)(()=>{if(n){const[I]=ne()(Re.Z,n),b=Object.keys(s),[G,m]=n.split("."),W=b.indexOf(G),U=Object.keys(s[G]).indexOf(m),_t=W<b.length-1,en=U<Object.keys(s[G]).length-1;$({type:"UPDATE_MODAL",content:I,newSectionIndex:W,newStepIndex:U,newHasSectionAfter:_t,newHasStepAfter:en})}},[n,s]);const R=()=>{r(n,!0),k(h.trackingEvent),a(null)},Q=()=>{d(!0),a(null),k("didSkipGuidedtour")};return g&&h?e.createElement(be,{hideSkip:!K&&!j,onSkip:Q,onClose:R},e.createElement(ze,{...h,onCtaClick:R,currentStep:n,sectionIndex:p,stepIndex:M,hasSectionAfter:j})):null};var ue=t(84366),Qe=t(27074),He=t(44240),Ve=t(71335),_=t(5267),pe=t(36395),Ye=t(49296),Xe=t(65216),Je=t(25711),we=t(30984),qe=t(68285),z=t(47533);const _e=(0,P.ZP)(T.x)`
  width: ${150/16}rem;
  position: absolute;
  bottom: ${({theme:n})=>n.spaces[9]};
  left: ${({theme:n})=>n.spaces[5]};
`,me=(0,P.ZP)(z.OL)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:n})=>`${n.spaces[2]} ${n.spaces[4]}`};
  border-radius: ${({theme:n})=>n.spaces[1]};

  &:hover {
    background: ${({theme:n,logout:s})=>s?n.colors.danger100:n.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({theme:n})=>n.colors.danger600};
    }
  }
`,et=({generalSectionLinks:n,pluginsSectionLinks:s})=>{const a=e.useRef(null),[r,l]=e.useState(!1),{logos:{menu:d}}=(0,A.m)(),[g,u]=(0,o.Yw)("navbar-condensed",!1),{userDisplayName:h}=(0,o.L7)(),{formatMessage:p}=(0,B.Z)(),{trackUsage:M}=(0,o.rS)(),{pathname:j}=(0,v.TH)(),K=(0,v.k6)(),{post:$}=(0,o.tg)(),k=h.split(" ").map(m=>m.substring(0,1)).join("").substring(0,2),R=()=>l(m=>!m),Q=async()=>{await $("/admin/logout"),o.I8.clearAppStorage(),R(),K.push("/auth/login")},I=m=>{!m.currentTarget.contains(m.relatedTarget)&&m.relatedTarget?.parentElement?.id!=="main-nav-user-button"&&l(!1)},b=m=>{M("willNavigate",{from:j,to:m})},G=p({id:"app.components.LeftMenu.navbrand.title",defaultMessage:"Strapi Dashboard"});return(0,i.jsxs)(Qe.$,{condensed:g,children:[(0,i.jsx)(He.D,{as:z.OL,workplace:p({id:"app.components.LeftMenu.navbrand.workplace",defaultMessage:"Workplace"}),title:G,icon:(0,i.jsx)("img",{src:d.custom||d.default,alt:p({id:"app.components.LeftMenu.logo.alt",defaultMessage:"Application logo"})})}),(0,i.jsx)(ue.i,{}),(0,i.jsxs)(Ve._,{children:[(0,i.jsx)(_.O,{as:z.OL,to:"/content-manager",icon:(0,i.jsx)(we.Z,{}),onClick:()=>b("/content-manager"),children:p({id:"global.content-manager",defaultMessage:"Content manager"})}),s.length>0?(0,i.jsx)(pe.y,{label:p({id:"app.components.LeftMenu.plugins",defaultMessage:"Plugins"}),children:s.map(m=>{const W=m.icon;return(0,i.jsx)(_.O,{as:z.OL,to:m.to,icon:(0,i.jsx)(W,{}),onClick:()=>b(m.to),children:p(m.intlLabel)},m.to)})}):null,n.length>0?(0,i.jsx)(pe.y,{label:p({id:"app.components.LeftMenu.general",defaultMessage:"General"}),children:n.map(m=>{const W=m.icon;return(0,i.jsx)(_.O,{as:z.OL,badgeContent:m.notificationsCount&&m.notificationsCount>0?m.notificationsCount.toString():void 0,to:m.to,icon:(0,i.jsx)(W,{}),onClick:()=>b(m.to),children:p(m.intlLabel)},m.to)})}):null]}),(0,i.jsxs)(Ye.q,{children:[(0,i.jsx)(Xe.r,{id:"main-nav-user-button",ref:a,onClick:R,initials:k,children:h}),r&&(0,i.jsx)(_e,{onBlur:I,padding:1,shadow:"tableShadow",background:"neutral0",hasRadius:!0,children:(0,i.jsx)(ae.i,{onEscape:R,children:(0,i.jsxs)(f.k,{direction:"column",alignItems:"stretch",gap:0,children:[(0,i.jsx)(me,{tabIndex:0,onClick:R,to:"/me",children:(0,i.jsx)(y.Z,{children:p({id:"global.profile",defaultMessage:"Profile"})})}),(0,i.jsxs)(me,{tabIndex:0,onClick:Q,to:"/auth/login",children:[(0,i.jsx)(y.Z,{textColor:"danger600",children:p({id:"app.components.LeftMenu.logout",defaultMessage:"Logout"})}),(0,i.jsx)(qe.Z,{})]})]})})}),(0,i.jsx)(Je.w,{onClick:()=>u(m=>!m),children:p(g?{id:"app.components.LeftMenu.expand",defaultMessage:"Expand the navbar"}:{id:"app.components.LeftMenu.collapse",defaultMessage:"Collapse the navbar"})})]})]})};var tt=t(72535),nt=t(86874),st=t(35318),at=t(8175),ot=t.n(at),it=t(36364);const rt=()=>{const{allPermissions:n}=(0,o.vn)(),{shouldUpdateStrapi:s}=(0,o.L7)(),{menu:a}=(0,o.j1)(),r=(0,F.v9)(it._),[l,d]=e.useState({generalSectionLinks:[{icon:tt.Z,intlLabel:{id:"global.plugins",defaultMessage:"Plugins"},to:"/list-plugins",permissions:r.marketplace.main},{icon:nt.Z,intlLabel:{id:"global.marketplace",defaultMessage:"Marketplace"},to:"/marketplace",permissions:r.marketplace.main},{icon:st.Z,intlLabel:{id:"global.settings",defaultMessage:"Settings"},to:"/settings",permissions:[],notificationsCount:0}],pluginsSectionLinks:[],isLoading:!0}),g=e.useRef(l.generalSectionLinks);return e.useEffect(()=>{async function u(){const h=await dt(n,a),p=await lt(n,g.current,s);d(M=>({...M,generalSectionLinks:p,pluginsSectionLinks:h,isLoading:!1}))}u()},[d,g,n,a,r,s]),l},lt=async(n,s,a=!1)=>{const r=await Promise.all(s.map(({permissions:u})=>(0,o.qX)(n,u))),l=s.filter((u,h)=>r[h]),d=l.findIndex(u=>u.to==="/settings");if(d===-1)return[];const g=ot()(l);return g[d].notificationsCount=a?1:0,g},dt=async(n,s)=>{const a=await Promise.all(s.map(({permissions:l})=>(0,o.qX)(n,l)));return s.filter((l,d)=>a[d])};var ct=t(23886);const ut=(0,P.ZP)(T.x)`
  flex: 1;
`,ge=({children:n,sideNav:s})=>{const{formatMessage:a}=(0,B.Z)();return e.createElement(T.x,{background:"neutral100"},e.createElement(ct.z,null,a({id:"skipToContent",defaultMessage:"Skip to content"})),e.createElement(f.k,{alignItems:"flex-start"},s,e.createElement(ut,null,n)))};ge.propTypes={children:c().node.isRequired,sideNav:c().node.isRequired};const pt=ge;var mt=t(63128),ee=t(50703),gt=t(8990),ht=t(10989),ft=t(50862),Et=t(13317),yt=t(64820);const vt=t.p+"19eb2dfcf2603eb55733.png";var Ct=t(42108),Mt=t(13789);const Tt=[{label:{id:"app.components.Onboarding.link.build-content",defaultMessage:"Build a content architecture"},href:"https://www.youtube.com/watch?v=G9GjN0RxhkE",duration:"5:48"},{label:{id:"app.components.Onboarding.link.manage-content",defaultMessage:"Add & manage content"},href:"https://www.youtube.com/watch?v=DEZw4KbybAI",duration:"3:18"},{label:{id:"app.components.Onboarding.link.manage-media",defaultMessage:"Manage media"},href:"https://www.youtube.com/watch?v=-61MuiMQb38",duration:"3:41"}],he={href:"https://www.youtube.com/playlist?list=PL7Q0DQYATmvidz6lEmwE5nIcOAYagxWqq",label:{id:"app.components.Onboarding.link.more-videos",defaultMessage:"Watch more videos"}},Pt=[{label:{id:"global.documentation",defaultMessage:"documentation"},href:"https://docs.strapi.io",icon:Ct.Z},{label:{id:"app.static.links.cheatsheet",defaultMessage:"cheatsheet"},href:"https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf",icon:Mt.Z}],St=(0,P.ZP)(X.z)`
  border-radius: 50%;
  padding: ${({theme:n})=>n.spaces[3]};
  /* Resetting 2rem height defined by Button component */
  height: 100%;
`,Lt=(0,P.ZP)(f.k)`
  transform: translate(-50%, -50%);
`,xt=(0,P.ZP)(f.k)`
  text-decoration: none;

  :focus-visible {
    outline-offset: ${({theme:n})=>`-${n.spaces[1]}`};
  }

  :hover {
    background: ${({theme:n})=>n.colors.primary100};

    /* Hover style for the number displayed */
    ${y.Z}:first-child {
      color: ${({theme:n})=>n.colors.primary500};
    }

    /* Hover style for the label */
    ${y.Z}:nth-child(1) {
      color: ${({theme:n})=>n.colors.primary600};
    }
  }
`,At=P.ZP.img`
  width: ${({theme:n})=>n.spaces[10]};
  height: ${({theme:n})=>n.spaces[8]};
  /* Same overlay used in ModalLayout */
  background: ${({theme:n})=>`${n.colors.neutral800}1F`};
  border-radius: ${({theme:n})=>n.borderRadius};
`,fe=(0,P.ZP)(y.Z)`
  /* line height of label and watch more to 1 so they can be better aligned visually */
  line-height: 1;
`,Ee=(0,P.ZP)(fe)`
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`,Rt=()=>{const n=(0,e.useRef)(),[s,a]=(0,e.useState)(!1),{formatMessage:r}=(0,B.Z)(),{communityEdition:l}=(0,o.L7)(),d=()=>{a(u=>!u)},g=[...Pt,{label:{id:"Settings.application.get-help",defaultMessage:"Get help"},icon:ft.Z,href:l?"https://discord.strapi.io":"https://support.strapi.io/support/home"}];return e.createElement(T.x,{as:"aside",position:"fixed",bottom:2,right:2},e.createElement(St,{"aria-label":r(s?{id:"app.components.Onboarding.help.button-close",defaultMessage:"Close help menu"}:{id:"app.components.Onboarding.help.button",defaultMessage:"Open help menu"}),onClick:d,ref:n},e.createElement(ee.J,{as:s?oe.Z:Et.Z,color:"buttonNeutral0"})),s&&e.createElement(se.h,null,e.createElement(gt.VY,{padding:0,onDimiss:d,source:n,placement:"top-end",spacing:12},e.createElement(f.k,{justifyContent:"space-between",paddingBottom:5,paddingRight:6,paddingLeft:6,paddingTop:6},e.createElement(fe,{fontWeight:"bold"},r({id:"app.components.Onboarding.title",defaultMessage:"Get started videos"})),e.createElement(Ee,{as:"a",href:he.href,target:"_blank",rel:"noreferrer noopener",variant:"pi",textColor:"primary600"},r(he.label))),e.createElement(ue.i,null),Tt.map(({href:u,duration:h,label:p},M)=>e.createElement(xt,{as:"a",href:u,target:"_blank",rel:"noreferrer noopener",key:u,hasRadius:!0,paddingTop:4,paddingBottom:4,paddingLeft:6,paddingRight:11},e.createElement(T.x,{paddingRight:5},e.createElement(y.Z,{textColor:"neutral200",variant:"alpha"},M+1)),e.createElement(T.x,{position:"relative"},e.createElement(At,{src:vt,alt:""}),e.createElement(Lt,{position:"absolute",top:"50%",left:"50%",background:"primary600",borderRadius:"50%",justifyContent:"center",width:6,height:6},e.createElement(ee.J,{as:yt.Z,color:"buttonNeutral0",width:3,height:3}))),e.createElement(f.k,{direction:"column",alignItems:"start",paddingLeft:4},e.createElement(y.Z,{fontWeight:"bold"},r(p)),e.createElement(ht.T,null,":"),e.createElement(y.Z,{textColor:"neutral600",variant:"pi"},h)))),e.createElement(f.k,{direction:"column",alignItems:"stretch",gap:2,paddingLeft:5,paddingTop:2,paddingBottom:5},g.map(({label:u,href:h,icon:p})=>e.createElement(f.k,{gap:3,key:h},e.createElement(ee.J,{as:p,color:"primary600"}),e.createElement(Ee,{as:"a",href:h,target:"_blank",rel:"noreferrer noopener",variant:"sigma",textColor:"primary700"},r(u))))))))},It=(0,e.lazy)(()=>Promise.all([t.e(3647),t.e(2089),t.e(7649),t.e(994)]).then(t.bind(t,89274))),Ot=(0,e.lazy)(()=>t.e(3981).then(t.bind(t,22339))),Dt=(0,e.lazy)(()=>t.e(3677).then(t.bind(t,4186))),bt=(0,e.lazy)(()=>Promise.all([t.e(2244),t.e(5516)]).then(t.bind(t,9117))),ye=(0,e.lazy)(()=>Promise.resolve().then(t.bind(t,23337))),Wt=(0,e.lazy)(()=>t.e(9501).then(t.bind(t,50068))),jt=(0,e.lazy)(()=>t.e(9497).then(t.bind(t,3549))),ve=(0,e.lazy)(()=>t.e(5895).then(t.bind(t,39223)).then(n=>({default:n.SettingsPage}))),Bt=()=>{const{trackUsage:n}=(0,o.rS)(),s=(0,F.I0)(),a=(0,F.v9)(r=>r.admin_app.status);(0,e.useEffect)(()=>{a==="init"&&(n("didAccessAuthenticatedAdministration"),s({type:mt.eb}))},[a])},Zt=()=>{Bt();const{isLoading:n,generalSectionLinks:s,pluginsSectionLinks:a}=rt(),{menu:r}=(0,o.j1)(),{showTutorials:l}=(0,A.m)(),d=(0,e.useMemo)(()=>r.filter(g=>g.Component).map(({to:g,Component:u,exact:h})=>(0,D.ot)(u,g,h)),[r]);return n?e.createElement(o.dO,null):e.createElement(Le.DndProvider,{backend:xe.PD},e.createElement(pt,{sideNav:e.createElement(et,{generalSectionLinks:s,pluginsSectionLinks:a})},e.createElement(e.Suspense,{fallback:e.createElement(o.dO,null)},e.createElement(v.rs,null,e.createElement(v.AW,{path:"/",component:Ot,exact:!0}),e.createElement(v.AW,{path:"/me",component:jt,exact:!0}),e.createElement(v.AW,{path:"/content-manager",component:It}),d,e.createElement(v.AW,{path:"/settings/:settingId",component:ve}),e.createElement(v.AW,{path:"/settings",component:ve,exact:!0}),e.createElement(v.AW,{path:"/marketplace"},e.createElement(bt,null)),e.createElement(v.AW,{path:"/list-plugins",exact:!0},e.createElement(Dt,null)),e.createElement(v.AW,{path:"/404",component:ye}),e.createElement(v.AW,{path:"/500",component:Wt}),e.createElement(v.AW,{path:"",component:ye}))),e.createElement($e,null),l&&e.createElement(Rt,null)))},kt=()=>{const{plugins:n}=(0,o.j1)(),[{plugins:s},a]=e.useReducer(Gt,Ce,()=>Ut(n)),r=e.useRef(d=>{a({type:"SET_PLUGIN_READY",pluginId:d})});if(Object.keys(s).some(d=>s[d].isReady===!1)){const d=Object.keys(s).reduce((g,u)=>{const h=s[u].initializer;if(h){const p=s[u].pluginId;g.push((0,i.jsx)(h,{setPlugin:r.current},p))}return g},[]);return(0,i.jsxs)(i.Fragment,{children:[d,(0,i.jsx)(o.dO,{})]})}return(0,i.jsx)(Zt,{})},Ce={plugins:{}},Gt=(n=Ce,s)=>(0,H.ZP)(n,a=>{switch(s.type){case"SET_PLUGIN_READY":{Y()(a,["plugins",s.pluginId,"isReady"],!0);break}default:return a}}),Ut=n=>({plugins:Object.keys(n).reduce((s,a)=>(s[a]={...n[a]},s),{})});var Me=t(58633);const Nt=()=>({type:Me.l}),Ft=n=>({type:Me.m,permissions:n}),Te=({children:n,permissions:s,refetchPermissions:a})=>{const{allPermissions:r}=(0,F.v9)(d=>d.rbacProvider),l=(0,F.I0)();return(0,e.useEffect)(()=>(l(Ft(s)),()=>{l(Nt())}),[s,l]),r?e.createElement(o.oL.Provider,{value:{allPermissions:r,refetchPermissions:a}},n):e.createElement(o.dO,null)};Te.propTypes={children:c().node.isRequired,permissions:c().array.isRequired,refetchPermissions:c().func.isRequired};const zt=Te,{get:te}=(0,o.tg)(),Kt=async()=>{try{const{data:n,headers:s}=await te("/admin/information");if(!s["content-type"].includes("application/json"))throw new Error("Not found");return n.data}catch(n){throw new Error(n)}},$t=async()=>{try{const{data:n,headers:s}=await te("/admin/users/me/permissions");if(!s["content-type"].includes("application/json"))throw new Error("Not found");return n.data}catch(n){throw new Error(n)}},Qt=async()=>{try{const{data:{data:{roles:n}}}=await te("/admin/users/me");return n}catch(n){throw new Error(n)}};var Ht=t(64797),Vt=t.n(Ht),Yt=t(85811),Pe=t.n(Yt);const Xt=(n,s)=>!Pe()(n)||!Pe()(s)?!1:Vt()(n,s),Jt=S.i8,wt=async()=>{try{const n=await fetch("https://api.github.com/repos/strapi/strapi/releases/latest");if(!n.ok)throw new Error("Failed to fetch latest Strapi version.");const{tag_name:s}=await n.json();return s}catch{return Jt}},Se=S.i8,qt=()=>{const{setGuidedTourVisibility:n}=(0,o.c1)(),s=(0,o.lm)(),a=o.I8.getUserInfo(),r=O()(a,"username")||(0,D.Pp)(a.firstname,a.lastname),[l,d]=(0,e.useState)(r),[g,u]=(0,e.useState)(null),{showReleaseNotification:h}=(0,A.m)(),[{data:p,status:M},{data:j,isLoading:K},{data:$,status:k,refetch:R,isFetching:Q},{data:I}]=(0,E.useQueries)([{queryKey:"app-infos",queryFn:Kt},{queryKey:"strapi-release",queryFn:()=>wt(s),enabled:h,initialData:Se},{queryKey:"admin-users-permission",queryFn:$t,initialData:[]},{queryKey:"user-roles",queryFn:Qt}]),b=Xt(Se,j);return(0,e.useEffect)(()=>{I&&I.find(({code:U})=>U==="strapi-super-admin")&&p?.autoReload&&n(!0)},[I,p,n]),(0,e.useEffect)(()=>{(async()=>{const U=await(0,D.Qy)(a);u(U)})()},[a]),K||(Q||M==="loading"||k==="loading")?e.createElement(o.dO,null):M==="error"?e.createElement("div",null,"error..."):e.createElement(o.iq,{...p,userId:g,latestStrapiReleaseTag:j,setUserDisplayName:d,shouldUpdateStrapi:b,userDisplayName:l},e.createElement(zt,{permissions:$,refetchPermissions:R},e.createElement(L.b,null),e.createElement(kt,null)))}},43234:(N,C,t)=>{t.d(C,{Z:()=>D});var e=t(27279),o=t(93415),x=t(2309),O=t(70627),E=t.n(O),S=t(16334);const A=({type:L,...i})=>e.createElement(o.x,{width:(0,x.Q1)(2),height:"100%",background:L===S.VM?"neutral300":"primary500",hasRadius:!0,...i});A.defaultProps={type:S.VM},A.propTypes={type:E().oneOf([S.lW,S.hx,S.VM])};const D=A},2364:(N,C,t)=>{t.d(C,{Z:()=>H});var e=t(27279),o=t(10701),x=t(50703),O=t(32370),E=t(2309),S=t(59082),A=t(70627),D=t.n(A),L=t(16334);const i=({type:V,number:Y})=>V===L.hx?e.createElement(o.k,{background:"primary600",padding:2,borderRadius:"50%",width:(0,E.Q1)(30),height:(0,E.Q1)(30),justifyContent:"center"},e.createElement(x.J,{as:S.Z,"aria-hidden":!0,width:(0,E.Q1)(16),color:"neutral0"})):V===L.lW?e.createElement(o.k,{background:"primary600",padding:2,borderRadius:"50%",width:(0,E.Q1)(30),height:(0,E.Q1)(30),justifyContent:"center"},e.createElement(O.Z,{fontWeight:"semiBold",textColor:"neutral0"},Y)):e.createElement(o.k,{borderColor:"neutral500",borderWidth:"1px",borderStyle:"solid",padding:2,borderRadius:"50%",width:(0,E.Q1)(30),height:(0,E.Q1)(30),justifyContent:"center"},e.createElement(O.Z,{fontWeight:"semiBold",textColor:"neutral600"},Y));i.defaultProps={number:void 0,type:L.VM},i.propTypes={number:D().number,type:D().oneOf([L.lW,L.hx,L.VM])};const H=i},16334:(N,C,t)=>{t.d(C,{VM:()=>x,hx:()=>o,lW:()=>e});const e="isActive",o="isDone",x="isNotDone"},99571:(N,C,t)=>{t.d(C,{Z:()=>o});const o={contentTypeBuilder:{home:{title:{id:"app.components.GuidedTour.home.CTB.title",defaultMessage:"\u{1F9E0} Build the content structure"},cta:{title:{id:"app.components.GuidedTour.home.CTB.cta.title",defaultMessage:"Go to the Content type Builder"},type:"REDIRECT",target:"/plugins/content-type-builder"},trackingEvent:"didClickGuidedTourHomepageContentTypeBuilder"},create:{title:{id:"app.components.GuidedTour.CTB.create.title",defaultMessage:"\u{1F9E0} Create a first Collection type"},content:{id:"app.components.GuidedTour.CTB.create.content",defaultMessage:"<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"},cta:{title:{id:"app.components.GuidedTour.CTB.create.cta.title",defaultMessage:"Build a Collection type"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep1CollectionType"},success:{title:{id:"app.components.GuidedTour.CTB.success.title",defaultMessage:"Step 1: Completed \u2705"},content:{id:"app.components.GuidedTour.CTB.success.content",defaultMessage:"<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didCreateGuidedTourCollectionType"}},contentManager:{home:{title:{id:"app.components.GuidedTour.home.CM.title",defaultMessage:"\u26A1\uFE0F What would you like to share with the world?"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didClickGuidedTourHomepageContentManager"},create:{title:{id:"app.components.GuidedTour.CM.create.title",defaultMessage:"\u26A1\uFE0F Create content"},content:{id:"app.components.GuidedTour.CM.create.content",defaultMessage:"<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep2ContentManager"},success:{title:{id:"app.components.GuidedTour.CM.success.title",defaultMessage:"Step 2: Completed \u2705"},content:{id:"app.components.GuidedTour.CM.success.content",defaultMessage:"<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"},cta:{title:{id:"app.components.GuidedTour.CM.success.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didCreateGuidedTourEntry"}},apiTokens:{home:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},cta:{title:{id:"app.components.GuidedTour.home.apiTokens.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didClickGuidedTourHomepageApiTokens"},create:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},content:{id:"app.components.GuidedTour.apiTokens.create.content",defaultMessage:"<p>Generate an authentication token here and retrieve the content you just created.</p>"},cta:{title:{id:"app.components.GuidedTour.apiTokens.create.cta.title",defaultMessage:"Generate an API Token"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep3ApiTokens"},success:{title:{id:"app.components.GuidedTour.apiTokens.success.title",defaultMessage:"Step 3: Completed \u2705"},content:{id:"app.components.GuidedTour.apiTokens.success.content",defaultMessage:"<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"},trackingEvent:"didGenerateGuidedTourApiTokens"}}}},36364:(N,C,t)=>{t.d(C,{_:()=>O});var e=t(57150),o=t(8539);const x=()=>E=>E.admin_app||o.E,O=(0,e.P1)(x(),E=>E.permissions)}}]);
