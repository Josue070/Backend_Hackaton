"use strict";(self.webpackChunkhackathon=self.webpackChunkhackathon||[]).push([[3650],{60648:($,B,t)=>{t.r(B),t.d(B,{default:()=>Ot});var e=t(27279),u=t(73354),a=t(2309),L=t(364),E=t(61020),T=t(51447),h=t(4396),P=t(18206),i=t(63955),A=t(93415),H=t(32370),F=t(27997),o=t(37472),p=t(73411),v=t(4987),M=t(74758),O=t(74577),D=t(10701),V=t(10989),G=t(84366),Y=t(35318),J=t(86485),Ie=t(66351),Ue=t(26784),ge=t(29206),We=t(47533),te=t(72450),Ke=t(70572),ze=t(21050),be=t(4114),X=t(28742),$e=t(52805),He=t(70627),f=t.n(He);const ne=({pagination:s})=>e.createElement(A.x,{paddingTop:6},e.createElement(D.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(a.v4,null),e.createElement(a.tU,{pagination:s})));ne.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},ne.propTypes={pagination:f().shape({page:f().number,pageCount:f().number,pageSize:f().number,total:f().number})};var Ve=t(45687),Qe=t(22682),Ge=t(19839),C=t(11727),Ne=t(54314),Ye=t(40426),Je=t(41801),Xe=t(60269),ke=t(93593),Q=t(48102),we=t(78665),qe=t(29731);const fe=({selected:s,onSuccess:r})=>{const{formatMessage:d}=(0,E.Z)(),[c,m]=(0,e.useState)(!1),{isLoading:g,remove:y}=(0,qe.K)(),R=async()=>{await y(s),r()};return e.createElement(e.Fragment,null,e.createElement(Q.z,{variant:"danger-light",size:"S",startIcon:e.createElement(we.Z,null),onClick:()=>m(!0)},d({id:"global.delete",defaultMessage:"Delete"})),e.createElement(a.QH,{isConfirmButtonLoading:g,isOpen:c,onToggleDialog:()=>m(!1),onConfirm:R}))};fe.propTypes={selected:f().arrayOf(C.pw,C.nx).isRequired,onSuccess:f().func.isRequired};var _e=t(61287),Ee=t(5938),ve=t(15244),et=t(77970),tt=t(6918),nt=t(23298),at=t(2878),st=t(35250),lt=t(71563),ot=t(10124),rt=t.n(ot),he=t(40464);const it=()=>{const s=(0,a.lm)(),r=(0,he.useQueryClient)(),{post:d}=(0,a.kY)(),c=({destinationFolderId:y,filesAndFolders:R})=>{const x=R.reduce((S,U)=>{const{id:l,type:z}=U,j=z==="asset"?"fileIds":"folderIds";return S[j]||(S[j]=[]),S[j].push(l),S},{});return d("/upload/actions/bulk-move",{...x,destinationFolderId:y})},m=(0,he.useMutation)(c,{onSuccess(y){const{data:{data:R}}=y;R?.files?.length>0&&(r.refetchQueries([P.Z,"assets"],{active:!0}),r.refetchQueries([P.Z,"asset-count"],{active:!0})),r.refetchQueries([P.Z,"folders"],{active:!0}),s({type:"success",message:{id:(0,i.OB)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}});return{...m,move:(y,R)=>m.mutateAsync({destinationFolderId:y,filesAndFolders:R})}};var dt=t(81138),ct=t(71381);const ae=({onClose:s,selected:r,currentFolder:d})=>{const{formatMessage:c}=(0,E.Z)(),{data:m,isLoading:g}=(0,dt.v)(),{move:y}=it();if(!m)return null;const R=async(U,{setErrors:l})=>{try{await y(U.destination.value,r),s()}catch(z){const k=(0,a.OT)(z).errors.reduce((w,W)=>(w[W.values?.path?.length||"destination"]=W.defaultMessage,w),{});rt()(k)||l(k)}},x=()=>{s()};if(g)return e.createElement(Ee.P,{onClose:x,labelledBy:"title"},e.createElement(ve.f,null,e.createElement(D.k,{justifyContent:"center",paddingTop:4,paddingBottom:4},e.createElement(et.a,null,c({id:(0,i.OB)("content.isLoading"),defaultMessage:"Content is loading."})))));const S={destination:{value:d?.id||"",label:d?.name||m[0].label}};return e.createElement(Ee.P,{onClose:x,labelledBy:"title"},e.createElement(lt.J9,{validateOnChange:!1,onSubmit:R,initialValues:S},({values:U,errors:l,setFieldValue:z})=>e.createElement(a.l0,{noValidate:!0},e.createElement(tt.x,null,e.createElement(H.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},c({id:(0,i.OB)("modal.folder.move.title"),defaultMessage:"Move elements to"}))),e.createElement(ve.f,null,e.createElement(nt.r,{gap:4},e.createElement(O.P,{xs:12,col:12},e.createElement(D.k,{direction:"column",alignItems:"stretch",gap:1},e.createElement(at.Q,{htmlFor:"folder-destination"},c({id:(0,i.OB)("form.input.label.folder-location"),defaultMessage:"Location"})),e.createElement(ct.Z,{options:m,onChange:j=>{z("destination",j)},defaultValue:U.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:l?.destination,ariaErrorMessage:"destination-error"}),l.destination&&e.createElement(H.Z,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600"},l.destination))))),e.createElement(st.m,{startActions:e.createElement(Q.z,{onClick:x,variant:"tertiary",name:"cancel"},c({id:"cancel",defaultMessage:"Cancel"})),endActions:e.createElement(Q.z,{type:"submit",loading:g},c({id:"modal.folder.move.submit",defaultMessage:"Move"}))}))))};ae.defaultProps={currentFolder:void 0},ae.propTypes={onClose:f().func.isRequired,currentFolder:C.nx,selected:f().arrayOf(C.nx,C.pw).isRequired};const se=({selected:s,onSuccess:r,currentFolder:d})=>{const{formatMessage:c}=(0,E.Z)(),[m,g]=(0,e.useState)(!1),y=()=>{g(!1),r()};return e.createElement(e.Fragment,null,e.createElement(Q.z,{variant:"secondary",size:"S",startIcon:e.createElement(_e.Z,null),onClick:()=>g(!0)},c({id:"global.move",defaultMessage:"Move"})),m&&e.createElement(ae,{currentFolder:d,onClose:y,selected:s}))};se.defaultProps={currentFolder:void 0},se.propTypes={onSuccess:f().func.isRequired,currentFolder:C.nx,selected:f().arrayOf(C.pw,C.nx).isRequired};const le=({selected:s,onSuccess:r,currentFolder:d})=>{const{formatMessage:c}=(0,E.Z)();return e.createElement(D.k,{gap:2,paddingBottom:5},e.createElement(H.Z,{variant:"epsilon",textColor:"neutral600"},c({id:(0,ke.Z)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:s.filter(({type:m})=>m==="folder").length,numberAssets:s.filter(({type:m})=>m==="asset").length})),e.createElement(fe,{selected:s,onSuccess:r}),e.createElement(se,{currentFolder:d,selected:s,onSuccess:r}))};le.defaultProps={currentFolder:void 0},le.propTypes={onSuccess:f().func.isRequired,currentFolder:C.nx,selected:f().arrayOf(C.pw,C.nx).isRequired};var ut=t(6162),oe=t(36938),mt=t(54053);const gt=({isFiltering:s,canCreate:r,canRead:d})=>s?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:d?r?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},pe=({canCreate:s,isFiltering:r,canRead:d,onActionClick:c})=>{const{formatMessage:m}=(0,E.Z)(),g=gt({isFiltering:r,canCreate:s,canRead:d});return e.createElement(mt.i,{icon:d?null:ut.Z,action:s&&!r&&e.createElement(Q.z,{variant:"secondary",startIcon:e.createElement(oe.Z,null),onClick:c},m({id:(0,i.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})),content:m({...g,id:(0,i.OB)(g.id)})})};pe.propTypes={canCreate:f().bool.isRequired,canRead:f().bool.isRequired,isFiltering:f().bool.isRequired,onActionClick:f().func.isRequired};var ft=t(57121),Et=t(99398),vt=t(32269),ye=t(62082);const ht=()=>{const s=(0,e.useRef)(null),[r,d]=(0,e.useState)(!1),{formatMessage:c}=(0,E.Z)(),{trackUsage:m}=(0,a.rS)(),[{query:g},y]=(0,a.Kx)(),R=g?.filters?.$and||[],x=()=>d(l=>!l),S=l=>{y({filters:{$and:l},page:1})},U=l=>{m("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(l[l.length-1])[0]}),y({filters:{$and:l},page:1})};return e.createElement(e.Fragment,null,e.createElement(Q.z,{variant:"tertiary",ref:s,startIcon:e.createElement(ft.Z,null),onClick:x,size:"S"},c({id:"app.utils.filters",defaultMessage:"Filters"})),r&&e.createElement(vt.Z,{displayedFilters:ye.Z,filters:R,onSubmit:U,onToggle:x,source:s}),e.createElement(Et.Z,{appliedFilters:R,filtersSchema:ye.Z,onRemoveFilter:S}))};var pt=t(27875),yt=t(68412),xt=t(76827),Mt=t(94092);const re=({breadcrumbs:s,canCreate:r,folder:d,onToggleEditFolderDialog:c,onToggleUploadAssetDialog:m})=>{const{formatMessage:g}=(0,E.Z)(),{pathname:y}=(0,T.TH)(),[{query:R}]=(0,a.Kx)(),x={...R,folder:d?.parent?.id??void 0,folderPath:d?.parent?.path??void 0};return e.createElement(pt.T,{title:g({id:(0,i.OB)("plugin.name"),defaultMessage:"Media Library"}),subtitle:s&&d&&e.createElement(Mt.O,{as:"nav",label:g({id:(0,i.OB)("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:s,currentFolderId:d?.id}),navigationAction:d&&e.createElement(yt.r,{startIcon:e.createElement(xt.Z,null),to:`${y}?${(0,ge.stringify)(x,{encode:!1})}`},g({id:(0,i.OB)("header.actions.folder-level-up"),defaultMessage:"Back"})),primaryAction:r&&e.createElement(D.k,{gap:2},e.createElement(Q.z,{startIcon:e.createElement(oe.Z,null),variant:"secondary",onClick:c},g({id:(0,i.OB)("header.actions.add-folder"),defaultMessage:"Add new folder"})),e.createElement(Q.z,{startIcon:e.createElement(oe.Z,null),onClick:m},g({id:(0,i.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})))})};re.defaultProps={breadcrumbs:!1,folder:null},re.propTypes={breadcrumbs:f().oneOfType([C.Fv,f().bool]),canCreate:f().bool.isRequired,folder:C.nx,onToggleEditFolderDialog:f().func.isRequired,onToggleUploadAssetDialog:f().func.isRequired};const Ct=(0,te.ZP)(A.x)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,xe=(0,te.ZP)(H.Z)`
  max-width: 100%;
`,Me=(0,te.ZP)(A.x)`
  svg {
    path {
      fill: ${({theme:s})=>s.colors.neutral500};
    }
  }
`,Bt=()=>{const{push:s}=(0,T.k6)(),{canRead:r,canCreate:d,canUpdate:c,canCopyLink:m,canDownload:g,isLoading:y}=(0,Xe.y)(),R=(0,e.useRef)(),{formatMessage:x}=(0,E.Z)(),{pathname:S}=(0,T.TH)(),{trackUsage:U}=(0,a.rS)(),[{query:l},z]=(0,a.Kx)(),j=Boolean(l._q||l.filters),[k,w]=(0,a.Yw)(C.uf.view,C.Uk.GRID),W=k===C.Uk.GRID,{data:K,isLoading:Dt,errors:Rt}=(0,Ne.L)({skipWhen:!r,query:l}),{data:Pt,isLoading:St,errors:Tt}=(0,Je.j)({enabled:r&&K?.pagination?.page===1&&!(0,i.rV)(l),query:l}),{data:ie,isLoading:Ce,error:Ft}=(0,Ye.W)(l?.folder,{enabled:r&&!!l?.folder});Ft?.response?.status===404&&s(S);const q=Pt?.map(n=>({...n,type:"folder",folderURL:(0,i.Km)(S,l,n.id),isSelectable:c}))??[],Z=q?.length||0,_=K?.results?.map(n=>({...n,type:"asset",isSelectable:c}))||[],I=_?.length??0,jt=K?.pagination?.total,Be=Ce||St||y||Dt,[At,Zt]=(0,e.useState)(!1),[It,Le]=(0,e.useState)(!1),[Oe,de]=(0,e.useState)(void 0),[ce,De]=(0,e.useState)(void 0),[b,{selectOne:ee,selectAll:Re}]=(0,a.Uq)(["type","id"],[]),Pe=b?.length>0&&b?.length!==I+Z,ue=()=>Zt(n=>!n),Se=({created:n=!1}={})=>{n&&l?.page!=="1"&&z({...l,page:1}),Le(N=>!N)},Te=(n,N)=>{n.target.checked&&U("didSelectAllMediaLibraryElements"),Re(N)},Fe=n=>{U("didSortMediaLibraryElements",{location:"upload",sort:n}),z({sort:n})},je=n=>{De(n),Le(!0)},Ut=n=>{De(null),Se(n),R.current&&R.current.focus()},Ae=n=>{n===I&&K.pagination.page===K.pagination.pageCount&&K.pagination.page>1&&z({...l,page:K.pagination.page-1})},Wt=()=>{Re(),Ae(b.length)};return(0,a.go)(),e.createElement(F.A,null,e.createElement(u.o,{"aria-busy":Be},e.createElement(re,{breadcrumbs:!Ce&&(0,i.M4)(ie,{pathname:S,query:l}),canCreate:d,onToggleEditFolderDialog:Se,onToggleUploadAssetDialog:ue,folder:ie}),e.createElement(o.Z,{startActions:e.createElement(e.Fragment,null,c&&W&&(I>0||Z>0)&&e.createElement(Ct,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200"},e.createElement(p.C,{"aria-label":x({id:(0,i.OB)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:Pe,value:(I>0||Z>0)&&b.length===I+Z,onChange:n=>Te(n,[..._,...q])})),r&&W&&e.createElement(Ve.Z,{value:l?.sort,onChangeSort:Fe}),r&&e.createElement(ht,null)),endActions:e.createElement(e.Fragment,null,e.createElement(a.jW,{permissions:C._I.configureView},e.createElement(Me,{paddingTop:1,paddingBottom:1},e.createElement(v.h,{forwardedAs:We.rU,to:{pathname:`${S}/configuration`,search:(0,ge.stringify)(l,{encode:!1})},icon:e.createElement(Y.Z,null),label:x({id:"app.links.configure-view",defaultMessage:"Configure the view"})}))),e.createElement(Me,{paddingTop:1,paddingBottom:1},e.createElement(v.h,{icon:W?e.createElement(J.Z,null):e.createElement(Ie.Z,null),label:x(W?{id:(0,i.OB)("view-switch.list"),defaultMessage:"List View"}:{id:(0,i.OB)("view-switch.grid"),defaultMessage:"Grid View"}),onClick:()=>w(W?C.Uk.LIST:C.Uk.GRID)})),e.createElement(a.m,{label:x({id:(0,i.OB)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}}))}),e.createElement(M.D,null,b.length>0&&e.createElement(le,{currentFolder:ie,selected:b,onSuccess:Wt}),Be&&e.createElement(a.dO,null),(Rt||Tt)&&e.createElement(a.Hn,null),Z===0&&I===0&&e.createElement(pe,{canCreate:d,canRead:r,isFiltering:j,onActionClick:ue}),r&&!W&&(I>0||Z>0)&&e.createElement(Qe.b,{assetCount:I,folderCount:Z,indeterminate:Pe,onChangeSort:Fe,onChangeFolder:(n,N)=>s((0,i.Km)(S,l,{folder:n,folderPath:N})),onEditAsset:de,onEditFolder:je,onSelectOne:ee,onSelectAll:Te,rows:[...q,..._],selected:b,shouldDisableBulkSelect:!c,sortQuery:l?.sort??""}),r&&W&&e.createElement(e.Fragment,null,Z>0&&e.createElement($e.a,{title:(j&&I>0||!j)&&x({id:(0,i.OB)("list.folders.title"),defaultMessage:"Folders ({count})"},{count:Z})||""},q.map(n=>{const Kt=!!b.filter(({type:me})=>me==="folder").find(me=>me.id===n.id),Ze=(0,i.Km)(S,l,{folder:n?.id,folderPath:n?.path});return e.createElement(O.P,{col:3,key:`folder-${n.id}`},e.createElement(X.Ac,{ref:ce&&n.id===ce.id?R:void 0,ariaLabel:n.name,id:`folder-${n.id}`,to:Ze,startAction:ee&&n.isSelectable?e.createElement(X.MM,{"data-testid":`folder-checkbox-${n.id}`,value:Kt,onChange:()=>ee(n)}):null,cardActions:e.createElement(v.h,{icon:e.createElement(Ue.Z,null),"aria-label":x({id:(0,i.OB)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>je(n)})},e.createElement(X.Bu,null,e.createElement(X.u6,{to:Ze},e.createElement(D.k,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%"},e.createElement(xe,{fontWeight:"semiBold",ellipsis:!0},n.name,e.createElement(V.T,null,":")),e.createElement(xe,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0},x({id:(0,i.OB)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:n.children.count,filesCount:n.files.count})))))))})),I>0&&Z>0&&e.createElement(A.x,{paddingTop:6,paddingBottom:4},e.createElement(G.i,null)),I>0&&e.createElement(Ke.r,{assets:_,onEditAsset:de,onSelectAsset:ee,selectedAssets:b.filter(({type:n})=>n==="asset"),title:(!j||j&&Z>0)&&K?.pagination?.page===1&&x({id:(0,i.OB)("list.assets.title"),defaultMessage:"Assets ({count})"},{count:jt})||""})),K?.pagination&&e.createElement(ne,{pagination:K.pagination}))),At&&e.createElement(Ge.x,{onClose:ue,trackedLocation:"upload",folderId:l?.folder}),It&&e.createElement(be.f,{onClose:Ut,folder:ce,parentFolderId:l?.folder,location:"upload"}),Oe&&e.createElement(ze.s,{onClose:n=>{n===null&&Ae(1),de(void 0)},asset:Oe,canUpdate:c,canCopyLink:m,canDownload:g,trackedLocation:"upload"}))},Lt=(0,e.lazy)(()=>t.e(9514).then(t.bind(t,47670))),Ot=()=>{const{config:{isLoading:s,isError:r,data:d}}=(0,h.Z)(),[{rawQuery:c},m]=(0,a.Kx)(),{formatMessage:g}=(0,E.Z)(),y=g({id:(0,i.OB)("plugin.name"),defaultMessage:"Media Library"});return(0,e.useEffect)(()=>{s||r||c||m({sort:d.sort,page:1,pageSize:d.pageSize})},[s,r,d,c,m]),(0,a.go)(),e.createElement(u.o,{"aria-busy":s},e.createElement(L.q,{title:y}),s&&e.createElement(a.dO,null),c?e.createElement(e.Suspense,{fallback:e.createElement(a.dO,null)},e.createElement(T.rs,null,e.createElement(T.AW,{exact:!0,path:`/plugins/${P.Z}`,component:Bt}),e.createElement(T.AW,{exact:!0,path:`/plugins/${P.Z}/configuration`,render:()=>e.createElement(Lt,{config:d})}))):null)}},37472:($,B,t)=>{t.d(B,{Z:()=>a});var e=t(74081),u=t(10701);const a=({startActions:L,endActions:E})=>!L&&!E?null:(0,e.jsxs)(u.k,{justifyContent:"space-between",alignItems:"flex-start",paddingBottom:4,paddingLeft:10,paddingRight:10,children:[(0,e.jsx)(u.k,{gap:2,wrap:"wrap",children:L}),(0,e.jsx)(u.k,{gap:2,shrink:0,wrap:"wrap",children:E})]})},74758:($,B,t)=>{t.d(B,{D:()=>a});var e=t(74081),u=t(93415);const a=({children:L})=>(0,e.jsx)(u.x,{paddingLeft:10,paddingRight:10,children:L})},27875:($,B,t)=>{t.d(B,{T:()=>A});var e=t(74081),u=t(27279),a=t(72450);const L=o=>{const p=(0,u.useRef)(null),[v,M]=(0,u.useState)(!0),O=([D])=>{M(D.isIntersecting)};return(0,u.useEffect)(()=>{const D=p.current,V=new IntersectionObserver(O,o);return D&&V.observe(p.current),()=>{D&&V.disconnect()}},[p,o]),[p,v]};var E=t(66705);const T=(o,p)=>{const v=(0,E.W)(p);(0,u.useLayoutEffect)(()=>{const M=new ResizeObserver(v);return Array.isArray(o)?o.forEach(O=>{O.current&&M.observe(O.current)}):o.current&&M.observe(o.current),()=>{M.disconnect()}},[o,v])};var h=t(93415),P=t(10701),i=t(32370);const A=o=>{const p=(0,u.useRef)(null),[v,M]=(0,u.useState)(null),[O,D]=L({root:null,rootMargin:"0px",threshold:0});return T(O,()=>{O.current&&M(O.current.getBoundingClientRect())}),(0,u.useEffect)(()=>{p.current&&M(p.current.getBoundingClientRect())},[p]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:v?.height},ref:O,children:D&&(0,e.jsx)(F,{ref:p,...o})}),!D&&(0,e.jsx)(F,{...o,sticky:!0,width:v?.width})]})};A.displayName="HeaderLayout";const H=(0,a.ZP)(h.x)`
  width: ${({width:o})=>o?`${o/16}rem`:void 0};
  z-index: ${({theme:o})=>o.zIndices[1]};
`,F=u.forwardRef(({navigationAction:o,primaryAction:p,secondaryAction:v,subtitle:M,title:O,sticky:D,width:V,...G},Y)=>{const J=typeof M=="string";return D?(0,e.jsx)(H,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:V,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(P.k,{justifyContent:"space-between",children:[(0,e.jsxs)(P.k,{children:[o&&(0,e.jsx)(h.x,{paddingRight:3,children:o}),(0,e.jsxs)(h.x,{children:[(0,e.jsx)(i.Z,{variant:"beta",as:"h1",...G,children:O}),J?(0,e.jsx)(i.Z,{variant:"pi",textColor:"neutral600",children:M}):M]}),v?(0,e.jsx)(h.x,{paddingLeft:4,children:v}):null]}),(0,e.jsx)(P.k,{children:p?(0,e.jsx)(h.x,{paddingLeft:2,children:p}):void 0})]})}):(0,e.jsxs)(h.x,{ref:Y,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:o?6:8,background:"neutral100","data-strapi-header":!0,children:[o?(0,e.jsx)(h.x,{paddingBottom:2,children:o}):null,(0,e.jsxs)(P.k,{justifyContent:"space-between",children:[(0,e.jsxs)(P.k,{minWidth:0,children:[(0,e.jsx)(i.Z,{as:"h1",variant:"alpha",...G,children:O}),v?(0,e.jsx)(h.x,{paddingLeft:4,children:v}):null]}),p]}),J?(0,e.jsx)(i.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:M}):M]})})},27997:($,B,t)=>{t.d(B,{A:()=>T});var e=t(74081),u=t(72450),a=t(93415);const L=(0,u.ZP)(a.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:h})=>h?"auto 1fr":"1fr"};
`,E=(0,u.ZP)(a.x)`
  overflow-x: hidden;
`,T=({sideNav:h,children:P})=>(0,e.jsxs)(L,{hasSideNav:Boolean(h),children:[h,(0,e.jsx)(E,{paddingBottom:10,children:P})]})},68412:($,B,t)=>{t.d(B,{r:()=>H});var e=t(74081),u=t(27279),a=t(48157),L=t(47533),E=t(72450),T=t(61657),h=t(32370),P=t(93415);const i=E.ZP.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  pointer-events: ${({disabled:F})=>F?"none":void 0};
  color: ${({disabled:F,theme:o})=>F?o.colors.neutral600:o.colors.primary600};

  svg path {
    transition: fill 150ms ease-out;
    fill: currentColor;
  }

  svg {
    font-size: ${10/16}rem;
  }

  ${h.Z} {
    transition: color 150ms ease-out;
    color: currentColor;
  }

  &:hover {
    color: ${({theme:F})=>F.colors.primary500};
  }

  &:active {
    color: ${({theme:F})=>F.colors.primary700};
  }

  ${T.BF};
`,A=(0,E.ZP)(P.x)`
  display: flex;
`,H=u.forwardRef(({children:F,href:o,to:p,disabled:v=!1,startIcon:M,endIcon:O,...D},V)=>{const G=o?"_blank":void 0,Y=o?"noreferrer noopener":void 0;return(0,e.jsxs)(i,{as:p&&!v?L.OL:"a",target:G,rel:Y,to:v?void 0:p,href:v?"#":o,disabled:v,ref:V,...D,children:[M&&(0,e.jsx)(A,{as:"span","aria-hidden":!0,paddingRight:2,children:M}),(0,e.jsx)(h.Z,{children:F}),O&&!o&&(0,e.jsx)(A,{as:"span","aria-hidden":!0,paddingLeft:2,children:O}),o&&(0,e.jsx)(A,{as:"span","aria-hidden":!0,paddingLeft:2,children:(0,e.jsx)(a.Z,{})})]})})},73354:($,B,t)=>{t.d(B,{o:()=>E});var e=t(74081),u=t(72450),a=t(93415);const L=(0,u.ZP)(a.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,E=({labelledBy:T="main-content-title",...h})=>(0,e.jsx)(L,{"aria-labelledby":T,as:"main",id:"main-content",tabIndex:-1,...h})},76827:($,B,t)=>{t.d(B,{Z:()=>a});var e=t(74081);const u=L=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...L,children:(0,e.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),a=u},35318:($,B,t)=>{t.d(B,{Z:()=>a});var e=t(74081);const u=L=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...L,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),a=u}}]);
