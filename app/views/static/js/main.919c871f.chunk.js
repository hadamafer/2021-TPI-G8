(this["webpackJsonpreact-crud"]=this["webpackJsonpreact-crud"]||[]).push([[0],{47:function(e,t,c){},75:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(34),r=c.n(i),s=c(9),o=c(8),l=(c(47),c(2)),d=c(19),j=c(11),b=c(12),h=c(13),u=c(18),O=c(17),x=c(16),m=c.n(x),p=c(35),v=c.n(p).a.create({baseURL:"http://localhost:8000",headers:{"Content-type":"application/json"}}),f=new(function(){function e(){Object(j.a)(this,e)}return Object(b.a)(e,[{key:"findAll",value:function(){return v.get("/getProductos")}},{key:"postRegimen",value:function(e){return v.post("/regimen?token="+e)}}]),e}()),g=(c(69),c(0));m.a.loginMinisterio("https://cli-serv-grupo1.herokuapp.com/api/auth/login","grupo8@frre.utn.edu.ar","dacs-frre").then().then((function(e){return localStorage.setItem("token",e)}));var k=localStorage.getItem("token"),y=function(e){Object(u.a)(c,e);var t=Object(O.a)(c);function c(e){var n;return Object(j.a)(this,c),(n=t.call(this,e)).retrieveProductos=n.retrieveProductos.bind(Object(h.a)(n)),n.postRegistro=n.postRegistro.bind(Object(h.a)(n)),n.isChecked=n.isChecked.bind(Object(h.a)(n)),n.state={isHidden:!1},n.state={productos:[],currentIndex:-1},n}return Object(b.a)(c,[{key:"componentDidMount",value:function(){this.retrieveProductos()}},{key:"retrieveProductos",value:function(){var e=this;f.findAll().then((function(t){e.setState({productos:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"postRegistro",value:function(e){console.log(e)}},{key:"render",value:function(){var e,t=this.state,c=t.productos;t.currentIndex;return Object(g.jsx)("main",{children:Object(g.jsxs)("form",{children:[Object(g.jsx)("legend",{children:"Declaraci\xf3n Jurada"}),Object(g.jsx)("div",{class:"mb-3",children:Object(g.jsx)("label",{for:"disabledTextInput",class:"form-label",children:"CUIT: 23-42450167-5"})}),Object(g.jsxs)("table",{"data-table-name":"test-fake-table",class:"ui compact selectable table",children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsxs)("th",{children:[Object(g.jsx)("span",{children:"Nombre Producto"}),Object(g.jsx)("span",{class:"rsdt "})]}),Object(g.jsx)("th",{children:"EAN"}),Object(g.jsx)("th",{children:"Precio Unitario"}),Object(g.jsx)("th",{children:"Cantidad Producida"}),Object(g.jsx)("th",{children:"Cantidad Vendida"})]})}),Object(g.jsx)("tbody",{children:c&&c.map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e.nombre}),Object(g.jsx)("td",{children:e.EAN}),Object(g.jsxs)("td",{children:["$",e.precioKG]}),Object(g.jsx)("td",{children:e.cantidadP}),Object(g.jsx)("td",{children:e.cantidadV})]})}))})]}),Object(g.jsx)("div",{class:"mb-3",children:Object(g.jsxs)("div",{class:"form-check",children:[Object(g.jsx)("input",{type:"checkbox",className:"checkbox",id:"termschkbx"})," "," "," ",Object(g.jsx)("label",{class:"form-check-label",children:"JURO QUE ESTOS DATOS SON CORRECTOS"})]})}),Object(g.jsx)("button",(e={type:"submit",id:"sub1",className:"btn btn-primary"},Object(d.a)(e,"type","submit"),Object(d.a)(e,"onClick",this.postRegistro(k)),Object(d.a)(e,"children","Enviar Regimen"),e))]})})}}]),c}(n.Component);m.a.getNotificacion("https://60a829368532520017ae5a5f.mockapi.io/notificaciones","9a9c8b7e-c249-4cb5-a171-655502d0c89e").then().then((function(e){return localStorage.setItem("notificacion",JSON.stringify(e))}));var N=JSON.parse(localStorage.getItem("notificacion")),w=function(e){Object(u.a)(c,e);var t=Object(O.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){return Object(g.jsxs)("main",{children:[Object(g.jsxs)("div",{class:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(g.jsx)("div",{id:"descripcion",children:N}),Object(g.jsx)("button",{type:"button",class:"close","data-bs-dismiss":"alert","aria-label":"Close",children:Object(g.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(g.jsx)("main",{role:"main",class:"inner cover",id:"central",children:Object(g.jsxs)("main",{children:[Object(g.jsx)("h1",{class:"cover-heading",children:"Una empresa que vende ripio."}),Object(g.jsx)("p",{class:"lead",children:"Vendemos un par de cosas mas, pero tambien tenemos ripio."})]})})]})}}]),c}(n.Component),C=function(){var e=Object(s.b)().logout;return Object(g.jsx)("button",{class:"btn btn-outline-secondary btn-sm",onClick:function(){return e({returnTo:window.location.origin})},children:"Cerrar sesion"})},S=function(){var e=Object(s.b)().loginWithRedirect;return Object(g.jsx)("button",{class:"btn btn-outline-secondary btn-sm text-right",onClick:function(){return e()},children:"Iniciar sesion"})},R={backgroundColor:"#333",textAlign:"center",padding:"20px",position:"fixed",left:"0",bottom:"0",height:"60px",width:"100%"},I={display:"block",width:"100%"};var P=function(e){var t=e.children;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{style:I}),Object(g.jsxs)("div",{style:R,children:[t," ",Object(g.jsxs)("p",{children:["Pagina para la empresa ",Object(g.jsx)("a",{href:"https://getbootstrap.com/",children:"Los enripiadores"}),", by ",Object(g.jsx)("a",{href:"https://cdn.memegenerator.es/imagenes/memes/full/31/39/31392168.jpg",children:"Grupo8"}),"."]})]})]})};var E=function(){var e=Object(s.b)().isAuthenticated;return Object(g.jsxs)("div",{className:"text-center",children:[Object(g.jsx)("header",{className:"navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar",children:Object(g.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(g.jsx)("h4",{className:"",children:Object(g.jsx)("a",{href:"/principal",className:"h4 text-left",children:"Corralon Nak"})}),Object(g.jsx)("ul",{className:"navbar-nav flex-row ml-md-auto d-none d-md-flex",children:e?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{className:"nav-link active",children:Object(g.jsx)(o.b,{to:"/principal",children:"Principal"})})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)("a",{className:"nav-link active",children:Object(g.jsx)(o.b,{to:"/servicios",children:"Servicios"})})}),Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(C,{})})]}):Object(g.jsx)("li",{className:"nav-item",children:Object(g.jsx)(o.b,{to:"/",children:Object(g.jsx)(S,{})})})})]})}),Object(g.jsx)("div",{className:"container mt-3",children:Object(g.jsxs)(l.c,{children:[Object(g.jsx)(l.a,{exact:!0,path:["/servicios"],component:y}),Object(g.jsx)(l.a,{exact:!0,path:["/principal"],component:w})]})}),Object(g.jsx)(P,{}),Object(g.jsx)("hr",{}),Object(g.jsx)("hr",{}),Object(g.jsx)("hr",{}),Object(g.jsx)("hr",{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(g.jsx)(o.a,{children:Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(s.a,{domain:"grupo8-tpi.us.auth0.com",clientId:"CXKqDkfXlEjROqsE4X6vTvElHHuqYBxc",redirectUri:window.location.origin,useRefreshTokens:!0,cacheLocation:"localstorage",children:Object(g.jsx)(E,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[75,1,2]]]);
//# sourceMappingURL=main.919c871f.chunk.js.map