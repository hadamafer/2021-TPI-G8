(this["webpackJsonpreact-crud"]=this["webpackJsonpreact-crud"]||[]).push([[0],{36:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(29),r=c.n(i),a=c(10),s=c(8),o=c(9),l=c(14),d=c(13),j=(c(36),c(2)),b=c(11),h=c(30),u=c.n(h).a.create({baseURL:"http://localhost:8000",headers:{"Content-type":"application/json"}}),O=new(function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,[{key:"findAll",value:function(){return u.get("/getProductos")}}]),e}()),x=c(0),f=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(e){var n;return Object(s.a)(this,c),(n=t.call(this,e)).retrieveProductos=n.retrieveProductos.bind(Object(b.a)(n)),n.refreshList=n.refreshList.bind(Object(b.a)(n)),n.state={productos:[],currentProducto:null,currentIndex:-1,searchTitle:""},n}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.retrieveProductos()}},{key:"retrieveProductos",value:function(){var e=this;O.findAll().then((function(t){e.setState({productos:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"refreshList",value:function(){this.retrieveProductos(),this.setState({currentProducto:null,currentIndex:-1})}},{key:"render",value:function(){var e=this.state,t=e.productos;e.currentIndex;return Object(x.jsx)("main",{children:Object(x.jsxs)("form",{children:[Object(x.jsx)("legend",{children:"Declaraci\xf3n Jurada"}),Object(x.jsx)("div",{class:"mb-3",children:Object(x.jsx)("label",{for:"disabledTextInput",class:"form-label",children:"CUIT: 23-42450167-5"})}),Object(x.jsx)("table",{class:"table table-stripped table-bordered table-sm",children:Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:"Nombre Producto"}),Object(x.jsx)("td",{children:"EAN"}),Object(x.jsx)("td",{children:"Precio Unitario"}),Object(x.jsx)("td",{children:"Cantidad Producida"}),Object(x.jsx)("td",{children:"Cantidad Vendida"})]}),t&&t.map((function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:e.nombre}),Object(x.jsx)("td",{children:e.EAN}),Object(x.jsxs)("td",{children:["$",e.precioKG]}),Object(x.jsx)("td",{children:e.cantidadP}),Object(x.jsx)("td",{children:e.cantidadV})]})}))]})}),Object(x.jsx)("div",{class:"mb-3",children:Object(x.jsxs)("div",{class:"form-check",children:[Object(x.jsx)("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),Object(x.jsx)("label",{class:"form-check-label",for:"flexCheckDefault",children:"JURO QUE ESTOS DATOS SON CORRECTOS"})]})}),Object(x.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Enviar Declaracion"})]})})}}]),c}(n.Component),v=new(function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,[{key:"getNotificacion",value:function(){return u.get("/getNotificacion")}}]),e}()),m=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(e){var n;return Object(s.a)(this,c),(n=t.call(this,e)).retrieveNotificaciones=n.retrieveNotificaciones.bind(Object(b.a)(n)),n.state={notificaciones:[]},n}return Object(o.a)(c,[{key:"componentDidMount",value:function(){this.retrieveNotificaciones()}},{key:"retrieveNotificaciones",value:function(){var e=this;v.getNotificacion().then((function(t){e.setState({notificaciones:t.data}),console.log(t.data)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.notificaciones;return Object(x.jsxs)("main",{children:[Object(x.jsxs)("div",{class:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(x.jsx)("strong",{children:"\xa1Fecha l\xedmite cerca!"}),e&&e.map((function(e){return{notificacion:e}})),Object(x.jsx)("button",{type:"button",class:"close","data-bs-dismiss":"alert","aria-label":"Close",children:Object(x.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(x.jsx)("main",{role:"main",class:"inner cover",id:"central",children:Object(x.jsxs)("main",{children:[Object(x.jsx)("h1",{class:"cover-heading",children:"Una empresa que vende ripio."}),Object(x.jsx)("p",{class:"lead",children:"Vendemos un par de cosas mas, pero tambien tenemos ripio."})]})})]})}}]),c}(n.Component),p=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){return Object(s.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return Object(x.jsx)("div",{class:"text-center",children:Object(x.jsxs)("div",{class:"cover-container d-flex h-100 p-3 mx flex-column",children:[Object(x.jsx)("header",{class:"masthead mb",children:Object(x.jsxs)("div",{class:"inner",children:[Object(x.jsx)("h4",{class:"masthead-brand ",children:Object(x.jsx)("a",{href:"/principal",className:"navbar-brand",children:"Corralon Nak"})}),Object(x.jsxs)("nav",{class:"nav nav-masthead justify-content-center",children:[Object(x.jsx)("a",{class:"nav-link active",children:Object(x.jsx)(a.b,{to:"/principal",children:"Principal"})}),Object(x.jsx)("a",{class:"nav-link active",children:Object(x.jsx)(a.b,{to:"/servicios",children:"Servicios"})})]})]})}),Object(x.jsx)("div",{className:"container mt-3",children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{exact:!0,path:["/servicios"],component:f}),Object(x.jsx)(j.a,{exact:!0,path:["/","/principal"],component:m})]})})]})})}}]),c}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(x.jsx)(a.a,{children:Object(x.jsx)(p,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.210e02d1.chunk.js.map