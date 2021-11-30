(this.webpackJsonpcacio=this.webpackJsonpcacio||[]).push([[0],{51:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(19),i=n.n(a),o=(n(50),n(51),n(75)),s=n(74),l=n(76),u=n(1),j=function(){return Object(u.jsx)(o.a,{bg:"",expand:"xl",children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(o.a.Brand,{href:"#home",id:"logo",children:Object(u.jsxs)("h1",{children:["Valutazione Accessibilit\xe0 ",Object(u.jsx)("br",{})," Comuni Italiani"]})}),Object(u.jsx)(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(u.jsx)(o.a.Collapse,{id:"basic-navbar-nav",className:"flex-grow-0",children:Object(u.jsxs)(l.a,{className:"me-auto",children:[Object(u.jsx)(l.a.Link,{href:"/",children:"Dati"}),Object(u.jsx)(l.a.Link,{href:"/",children:"Progetto"}),Object(u.jsx)(l.a.Link,{href:"/",children:"Criteri"}),Object(u.jsx)(l.a.Link,{href:"/",children:"Idee"})]})})]})})},b=n(7),d=function(e){var t=Object(r.useState)(null),n=Object(b.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(!0),o=Object(b.a)(i,2),s=o[0],l=o[1],u=Object(r.useState)(null),j=Object(b.a)(u,2),d=j[0],h=j[1];return Object(r.useEffect)((function(){var t=new AbortController;return setTimeout((function(){fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resource");return e.json()})).then((function(e){return e.comuni})).then((function(e){l(!1),a(e),h(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(l(!1),h(e.message))}))}),1e3),function(){return t.abort()}}),[e]),{data:c,isPending:s,error:d}},h=n(41),O=n.n(h),x=function(e){var t=e.data;return Object(u.jsx)("pre",{children:t.details})},f=[{name:"Comune",selector:function(e){return e.comune},sortable:!0},{name:"Provincia",selector:function(e){return e.provincia},sortable:!0},{name:"Regione",selector:function(e){return e.regione},sortable:!0},{name:"Zona",selector:function(e){return e.zona},sortable:!0},{name:"Criteri superati",selector:function(e){return e.criteri_superati},sortable:!0},{name:"Criteri NON superati",selector:function(e){return e.criteri_non_superati},sortable:!0},{name:"Criteri non valutabili",selector:function(e){return e.criteri_non_valutabili},sortable:!0},{name:"Navigazione da tastiera",selector:function(e){return e.regole.navigazione_tastiera},sortable:!0,conditionalCellStyles:[{when:function(e){return 1===e.regole.navigazione_tastiera},style:{backgroundColor:"rgba(63, 195, 128, 0.5)",color:"white","&:hover":{cursor:"pointer"}}},{when:function(e){return 0===e.regole.navigazione_tastiera},style:{backgroundColor:"rgba(220, 20, 60, 0.5)",color:"white","&:hover":{cursor:"pointer"}}}]},{name:"Data",selector:function(e){return e.data_ultima_verifica},sortable:!0}],g=function(e){var t=e.blogs;return Object(u.jsx)(O.a,{columns:f,data:t,expandableRows:!0,expandableRowsComponent:x,defaultSortFieldId:1,pagination:!0,defaultSortAsc:!1,fixedHeader:!0})},p=function(){var e=d("https://raw.githubusercontent.com/dianaberna/cacio/main/data/db.json"),t=e.error,n=e.isPending,r=e.data;return Object(u.jsxs)("div",{className:"container home",children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col col-lg-2 col-md-1 home-disclaimer",children:[Object(u.jsx)("p",{children:"356 siti di comuni italiani su 7904 sono accessibili. "}),Object(u.jsx)("p",{children:"In Italia (secondo Istat) ci sono 3,1 milioni persone disabili, il 5,2% della popolazione italiana."})]})}),t&&Object(u.jsx)("div",{children:t}),n&&Object(u.jsx)("div",{children:"Loading..."}),r&&Object(u.jsx)(g,{blogs:r})]})},v=n(24),m=n(9),C=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(b.a)(a,2),o=i[0],s=i[1],l=Object(r.useState)(""),j=Object(b.a)(l,2),d=j[0],h=j[1],O=Object(r.useState)(""),x=Object(b.a)(O,2),f=x[0],g=x[1],p=Object(r.useState)(""),v=Object(b.a)(p,2),C=v[0],S=v[1],w=Object(r.useState)(""),N=Object(b.a)(w,2),y=N[0],k=N[1],_=Object(m.f)();return Object(u.jsxs)("div",{className:"create",children:[Object(u.jsx)("h2",{children:"Aggiungi un nuovo comune "}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={comune:n,provincia:d,regione:f,zona:C,dettagli:y};fetch("http://localhost:8000/comuni",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){_.push("/")}))},children:[Object(u.jsx)("label",{children:"Comune:"}),Object(u.jsx)("input",{type:"text",required:!0,value:n,onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("label",{children:"Provincia:"}),Object(u.jsx)("input",{type:"text",required:!0,value:d,onChange:function(e){return h(e.target.value)}}),Object(u.jsx)("label",{children:"Regione:"}),Object(u.jsx)("input",{type:"text",required:!0,value:f,onChange:function(e){return g(e.target.value)}}),Object(u.jsx)("label",{children:"Zona:"}),Object(u.jsx)("input",{type:"text",required:!0,value:C,onChange:function(e){return S(e.target.value)}}),Object(u.jsx)("label",{children:"Punteggio:"}),Object(u.jsxs)("select",{required:!0,value:o,onChange:function(e){return s(e.target.value)},children:[Object(u.jsx)("option",{children:"1"}),Object(u.jsx)("option",{children:"2"}),Object(u.jsx)("option",{children:"3"}),Object(u.jsx)("option",{children:"4"}),Object(u.jsx)("option",{children:"5"})]}),Object(u.jsx)("label",{children:"Dettagli:"}),Object(u.jsx)("textarea",{value:y,onChange:function(e){return k(e.target.value)}}),Object(u.jsx)("button",{children:"Aggiungi"})]})]})},S=function(){return Object(u.jsxs)("div",{className:"not-found",children:[Object(u.jsx)("h2",{children:"Sorry"}),Object(u.jsx)("p",{children:"That page cannot be found"}),Object(u.jsx)(v.b,{to:"/",children:"Back to the homepage..."})]})};var w=function(){return Object(u.jsx)(v.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{}),Object(u.jsx)("div",{className:"content",children:Object(u.jsxs)(m.c,{children:[Object(u.jsx)(m.a,{exact:!0,path:"/",children:Object(u.jsx)(p,{})}),Object(u.jsx)(m.a,{path:"/create",children:Object(u.jsx)(C,{})}),Object(u.jsx)(m.a,{path:"*",children:Object(u.jsx)(S,{})})]})})]})})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.e66f5b16.chunk.js.map