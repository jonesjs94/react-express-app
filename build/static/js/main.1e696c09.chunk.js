(this.webpackJsonprecetariov2=this.webpackJsonprecetariov2||[]).push([[0],{757:function(e,t,a){e.exports=a(798)},769:function(e,t,a){},770:function(e,t,a){},772:function(e,t,a){},790:function(e,t,a){},791:function(e,t,a){},792:function(e,t,a){},793:function(e,t,a){},794:function(e,t,a){},795:function(e,t,a){},796:function(e,t,a){},797:function(e,t,a){},798:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),i=a(10),s=a(12),l=a(11),u=a(23);function m(){var e=Object(l.g)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var d=a(5),h=a(9),p=a(4),v=a(7),f=a(6),E=a(22),b=a(25),g=a(752),_=a(13),y={cargando:!1,nombre:"",error:""};var O={cargando:!1,content:!1,data:{},error:""};var R={cargando:!1,data:[],error:""};var N=a(19),j=[];var S=[];var A=Object(b.c)({usuario:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BUSCAR_USUARIO_PENDIENTE":return Object(_.a)(Object(_.a)({},e),{},{cargando:!0});case"BUSCAR_USUARIO_EXITO":return{cargando:!1,nombre:t.payload.username,error:""};case"BUSCAR_USUARIO_ERROR":return Object(_.a)(Object(_.a)({},e),{},{cargando:!1,error:t.payload.error});case"RETIRAR_USUARIO_PENDIENTE":return Object(_.a)(Object(_.a)({},e),{},{cargando:!0});case"RETIRAR_USUARIO_EXITO":return{cargando:!1,nombre:"",error:""};case"RETIRAR_USUARIO_ERROR":return Object(_.a)(Object(_.a)({},e),{},{cargando:!1,error:t.payload.error});default:return e}},consulta:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GUARDAR_CONSULTA":return t.payload;default:return e}},receta:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BUSCAR_RECETA_PENDIENTE":return Object(_.a)(Object(_.a)({},O),{},{cargando:!0});case"BUSCAR_RECETA_EXITO":return{cargando:!1,content:!0,data:t.payload,error:""};case"BUSCAR_RECETA_ERROR":return{cargando:!1,content:!1,data:{},error:t.payload};default:return e}},recetario:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BUSCAR_RECETARIO_PENDIENTE":return Object(_.a)(Object(_.a)({},e),{},{cargando:!0});case"BUSCAR_RECETARIO_EXITO":return{cargando:!1,data:t.payload,error:""};case"BUSCAR_RECETARIO_ERROR":return Object(_.a)(Object(_.a)({},e),{},{cargando:!1,error:t.payload});default:return e}},favoritos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BUSCAR_USUARIO_EXITO":return t.payload.favorites;case"AGREGAR_FAVORITO":return[].concat(Object(N.a)(e),[t.payload]);case"REMOVER_FAVORITO":return e.filter((function(e){return e.id!==t.payload}));case"RETIRAR_USUARIO_EXITO":return j;default:return e}},historial:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BUSCAR_USUARIO_EXITO":return t.payload.history.reverse();case"AGREGAR_HISTORIAL":return[t.payload].concat(Object(N.a)(e));case"RETIRAR_USUARIO_EXITO":return S;default:return e}}}),I=Object(b.d)(A,Object(b.a)(g.a)),C=a(29),T=a.n(C);a(768);T.a.locale("en-gb");var U=function(e){return{type:"BUSCAR_USUARIO_EXITO",content:!0,payload:e}},w=function(e,t){return function(a){var n=new Headers;n.set("Content-Type","application/json"),a({type:"BUSCAR_USUARIO_PENDIENTE"}),fetch(t,{method:"POST",headers:n,body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){a(U(e)),console.log(e)})).catch((function(e){console.error(e),a({type:"BUSCAR_USUARIO_ERROR",content:!1,payload:e})}))}},k=function(e,t){var a={consulta:e,recetario:t.map((function(e){return{nombre:e.title,imagen:e.image,id:e.id}})),fecha:T()().format("h:mm a. MMMM D[th], YYYY")};return F(a,"/history"),{type:"AGREGAR_HISTORIAL",payload:a}},F=function(e,t){if(I.getState().usuario.nombre){var a=new Headers;a.set("Content-Type","application/json"),fetch(t,{method:"POST",headers:a,body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){console.log("objeto guardado en la DB",e)})).catch((function(e){return console.error}))}},x=function(e){I.getState().usuario&&fetch(e)},L=(a(769),a(30)),B=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.titulo,n=e.imagen,o=e.info,c=e.path;return r.a.createElement("div",{className:"tarjeta"},r.a.createElement(i.b,{to:"/recipes/".concat(t,"?from=").concat(c)},r.a.createElement("img",{className:"tarjeta__imagen",src:n,alt:"imagen of recipe"}),r.a.createElement("div",{className:"tarjeta__info"},r.a.createElement("h3",{className:"tarjeta__titulo"},a),r.a.createElement("div",{className:"tarjeta__texto"},r.a.createElement("p",null,function(e){if(!e.length)return!1;var t=Object(L.a)(e,3),a=t[0],n=t[1],r=t[2],o=[];void 0!==a&&o.push(a);void 0!==n&&o.push("".concat(n," min"));void 0!==r&&o.push("".concat(r," servings"));return o.join("  /  ")}(o))))))}}]),a}(r.a.Component);a(770);var M=a(18),D=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={value:""},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),document.getElementById("buscador").blur(),this.props.onSubmit(this.state.value)}},{key:"render",value:function(){return r.a.createElement("div",{className:"buscador"},r.a.createElement("div",{className:"buscador__contenedor"},r.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},r.a.createElement("h2",{className:"form__titulo"},"Recipes"),r.a.createElement("div",{className:"form__grupo"},r.a.createElement("input",{id:"buscador",onChange:this.handleChange,className:"form__input",type:"search",placeholder:"Type ingredientes, cuisins and more"}),r.a.createElement("button",{type:"submit",className:"form__btn"},r.a.createElement(M.Search,{className:"search"}))))))}}]),a}(r.a.Component),X=Object(s.b)((function(e){return e}))(D);function P(e){var t=e.children;return r.a.createElement("div",{style:{position:"absolute",width:"100%"}},t)}a(772);function W(e){var t=e.className;return r.a.createElement(E.Spring,{from:{opacity:0},to:{opacity:1}},(function(e){return r.a.createElement("div",{style:e,className:"loader ".concat(t)})}))}var V=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"handleSubmit",value:function(e){this.props.buscarRecetario(e)}},{key:"render",value:function(){var e=window.innerWidth<720;return r.a.createElement(P,null,r.a.createElement(X,{onSubmit:this.handleSubmit}),r.a.createElement("div",{className:"recetario"},this.props.cargando?r.a.createElement(W,{className:"recetario__cargador"}):r.a.createElement(E.Trail,{items:this.props.recetario,keys:function(e){return e.id},from:{opacity:e?1:0,transform:e?"translate3d(0,0px,0)":"translate3d(0,-40px,0)"},to:{opacity:1,transform:"translate3d(0,0px,0)"},delay:300},(function(e){return function(t){return r.a.createElement("div",{style:t},r.a.createElement(B,{key:e.id,className:"animation-receta",path:"recipes",titulo:e.title,imagen:e.image,id:e.id,info:[e.dishTypes[0],e.readyInMinutes,e.servings]}))}}))))}}]),a}(r.a.Component),G=Object(s.b)((function(e){return{recetario:e.recetario.data,cargando:e.recetario.cargando}}),(function(e){return{buscarRecetario:function(t){return e(function(e){var t=e.toLowerCase();return function(e){console.log("Obteniendo recetas..."),e(function(e){return{type:"GUARDAR_CONSULTA",payload:e}}(t)),e({type:"BUSCAR_RECETARIO_PENDIENTE"});fetch("https://api.spoonacular.com/recipes/random?number=8&tags=".concat(t,",&apiKey=").concat("03d842cc1cbc4535bf140ca81c4578ac")).then((function(e){return e.json()})).then((function(a){console.log("Recetas obtenidas."),e(function(e){return{type:"BUSCAR_RECETARIO_EXITO",payload:e}}(a.recipes)),a.recipes.length&&e(k(t,a.recipes))})).catch((function(t){console.error(t),e({type:"BUSCAR_RECETARIO_ERROR",payload:t})}))}}(t))}}}))(V),Y=a(739),H=a.n(Y),J=a(756);a(788),a(789);function q(e){var t=e.className,a=e.tippyClassName,n=e.isInFavorites,o=e.handleStateFav;return r.a.createElement(J.a,{content:r.a.createElement("div",{className:a},"Saved!"),arrow:!0,trigger:"click",theme:"light",placement:"right",animation:"scale",zIndex:"1"},r.a.createElement("button",{id:"fav-btn",className:t,onClick:function(){o();var e=document.getElementById("fav-btn")._tippy;setTimeout((function(){e.hide(),e.disable()}),3e3)}},n?"":"Add to Favorites",r.a.createElement("i",{className:n?"fas fa-heart":"far fa-heart"})))}a(790);var z=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={previousRoute:"",isInFavorites:!1,imgLoaded:!1},n.addFav=n.addFav.bind(Object(p.a)(n)),n.handleStateFav=n.handleStateFav.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=window.location.pathname,t=new RegExp(/[0-9]*$/),a=e.match(t)[0];this.props.buscarReceta(a);var n=new URLSearchParams(window.location.search).get("from");this.setState({previousRoute:n}),"favorites"===n&&this.setState({isInFavorites:!0})}},{key:"addFav",value:function(){var e=this.props.receta.data,t={id:e.id,titulo:e.title,imagen:e.image,dishTypes:e.dishTypes[0],readyInMinutes:e.readyInMinutes,servings:e.servings};this.props.agregarFavorito(t),console.log("Agregado a Favoritos!",t)}},{key:"handleStateFav",value:function(){if(this.state.isInFavorites)return!1;this.setState({isInFavorites:!0}),this.addFav()}},{key:"render",value:function(){var e=this,t=this.props.receta.content,a=this.props.receta.data,n=window.innerWidth<720;if(!this.state.imgLoaded)return r.a.createElement(P,null,r.a.createElement("div",{className:"contenedor-receta"},t?r.a.createElement(E.Spring,{from:{opacity:n?1:0},to:{opacity:1},delay:300},(function(t){return r.a.createElement("div",{style:t,className:"receta"},r.a.createElement("div",{className:"receta__botones"},r.a.createElement(i.b,{to:"/".concat(e.state.previousRoute),className:"receta__btn-volver"},r.a.createElement(M.ArrowLeft,null),"Back to ",e.state.previousRoute),r.a.createElement(q,{id:a.id,handleStateFav:e.handleStateFav,isInFavorites:e.state.isInFavorites,className:"receta__btn-favorito",tippyClassName:"tippy-favoritos"})),r.a.createElement("h1",{className:"receta__titulo"},a.title),r.a.createElement("img",{className:"receta__imagen",src:a.image,alt:"meal"}),r.a.createElement("div",{className:"receta__info info"},r.a.createElement("div",{className:"info__icono alarm"},r.a.createElement(M.Alarm,null),r.a.createElement("span",null,"Ready in ",a.readyInMinutes," minutes")),r.a.createElement("div",{className:"info__icono bowl"},r.a.createElement(M.Bowl,null),r.a.createElement("span",null,a.servings," servings")),r.a.createElement("div",{className:"info__icono star"},r.a.createElement("i",{className:"fas fa-star"}),r.a.createElement("span",null,"Score of ",a.spoonacularScore,"%"))),r.a.createElement("p",{className:"receta__resumen",dangerouslySetInnerHTML:{__html:a.summary}}),r.a.createElement("div",{className:"receta__detalles"},r.a.createElement("ul",{className:"receta__instrucciones instrucciones"},r.a.createElement("h2",{id:"instructions",className:"ingredientes__titulo"},"Instructions"),function(e){var t=window.innerWidth<720;return e.map((function(e,a){return r.a.createElement(H.a,{key:a},(function(a){var n=a.isVisible;return r.a.createElement(E.Spring,{from:{opacity:t?1:0,transform:t?"translateX(0)":"translateX(-200px)"},to:{opacity:n||t?1:0,transform:n||t?"translateX(0)":"translateX(-200px)"}},(function(t){return r.a.createElement("li",{style:t,key:e.number,className:"instrucciones__pasos"},r.a.createElement("div",{className:"instrucciones__paso"},r.a.createElement("span",null,"Step ",e.number)),r.a.createElement("p",{className:"instrucciones__texto"},e.step))}))}))}))}(a.analyzedInstructions[0].steps)),r.a.createElement("ul",{className:"receta__ingredientes ingredientes"},r.a.createElement("h2",{id:"ingredients",className:"ingredientes__titulo"},"Ingredient for ",a.servings," servings"),function(e){var t=window.innerWidth<720;return e.map((function(e,a){return r.a.createElement(H.a,{key:a},(function(n){var o=n.isVisible;return r.a.createElement(E.Spring,{from:{opacity:t?1:0,transform:t?"translateX(0)":"translateX(200px)"},to:{opacity:o||t?1:0,transform:o||t?"translateX(0)":"translateX(200px)"}},(function(t){return r.a.createElement("li",{style:t,key:a,className:"ingredientes__ingrediente"},r.a.createElement("img",{src:"https://spoonacular.com/cdn/ingredients_100x100/".concat(e.image)}),r.a.createElement("p",null,e.name),r.a.createElement("p",null,"".concat(Math.ceil(e.measures.metric.amount)," ").concat(e.measures.metric.unitShort)))}))}))}))}(a.extendedIngredients))))})):r.a.createElement(W,{className:"cargador"})))}}]),a}(r.a.Component),K=Object(s.b)((function(e){return{receta:e.receta}}),(function(e){return{buscarReceta:function(t){return e(function(e){return function(t){t({type:"BUSCAR_RECETA_PENDIENTE"}),console.log("Obteniendo receta ...");fetch("https://api.spoonacular.com/recipes/".concat(e,"/information?&apiKey=").concat("03d842cc1cbc4535bf140ca81c4578ac")).then((function(e){return e.json()})).then((function(e){console.log("Receta obtenida."),t(function(e){return{type:"BUSCAR_RECETA_EXITO",payload:e}}(e))})).catch((function(e){console.error(e),t({type:"BUSCAR_RECETA_ERROR",payload:e})}))}}(t))},agregarFavorito:function(t){return e((F(a=t,"/favorites"),{type:"AGREGAR_FAVORITO",payload:a}));var a}}}))(z);a(791),a(792);function $(e){var t=e.estadoNavbar?"logo":"logo logo--scroll";return r.a.createElement("h1",{className:t},r.a.createElement(i.b,{to:"/"},"Mistery Book"))}a(793);function Q(e){var t=e.onClick,a=e.menuAbierto?"icono activo":"icono";return r.a.createElement("div",{onClick:t,className:a},r.a.createElement("span",{className:"bar"}))}var Z=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).componentLogout=function(){if(n.props.usuario)return r.a.createElement("li",{onClick:n.handleLogout,className:"menu__item logout"},r.a.createElement(M.LogOut,null))},n.state={menuAbierto:!1},n.listener=null,n.handleLogout=n.handleLogout.bind(Object(p.a)(n)),n.handleNavMenuToggle=n.handleNavMenuToggle.bind(Object(p.a)(n)),n.checkLoggedIn=n.checkLoggedIn.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"checkLoggedIn",value:function(){var e=this;fetch("/user").then((function(e){return e.json()})).then((function(t){void 0!==t.user&&e.props.buscarUsuarioExito(t.user)})).catch((function(e){return console.log(e)}))}},{key:"handleLogout",value:function(e){e.preventDefault(),this.props.retirarUsuario()}},{key:"handleNavMenuToggle",value:function(){var e=this.state.menuAbierto;this.setState({menuAbierto:!e})}},{key:"componentDidMount",value:function(){var e=this;this.setState({NavbarEnTop:!0}),this.listener=document.addEventListener("scroll",(function(t){document.scrollingElement.scrollTop>50?e.state.NavbarEnTop&&e.setState({NavbarEnTop:!1}):e.state.NavbarEnTop||e.setState({NavbarEnTop:!0})})),this.checkLoggedIn()}},{key:"componentDidUpdate",value:function(){document.removeEventListener("scroll",this.listener)}},{key:"render",value:function(){var e=this.state.NavbarEnTop?"navbar":"navbar navbar--scroll",t=this.state.menuAbierto?"menu menu-abierto":"menu";return r.a.createElement("header",{className:e},r.a.createElement(Q,{onClick:this.handleNavMenuToggle,menuAbierto:this.state.menuAbierto}),r.a.createElement($,{estadoNavbar:this.state.NavbarEnTop}),r.a.createElement("ul",{className:t},r.a.createElement("li",{className:"menu__item"},r.a.createElement(i.b,{className:"menu__enlace",onClick:this.handleNavMenuToggle,to:"/recipes"},r.a.createElement(M.LoadbarDoc,null),"Recipes")),r.a.createElement("li",{className:"menu__item"},r.a.createElement(i.b,{className:"menu__enlace",onClick:this.handleNavMenuToggle,to:"/history"},"History")),r.a.createElement("li",{className:"menu__item"},r.a.createElement(i.b,{className:"menu__enlace",onClick:this.handleNavMenuToggle,to:"/favorites"},"Favorites")),r.a.createElement("li",{className:"menu__item"},this.props.usuario?r.a.createElement("div",{className:"menu__enlace usuario-activo"},r.a.createElement(M.User,null),this.props.usuario):r.a.createElement(i.b,{className:"menu__enlace",onClick:this.handleNavMenuToggle,to:"/user"},r.a.createElement(M.User,null),"Sign In/Up")),this.componentLogout()))}}]),a}(r.a.Component),ee=Object(s.b)((function(e){return{estado:e,usuario:e.usuario.nombre}}),(function(e){return{buscarUsuarioExito:function(t){return e(U(t))},retirarUsuario:function(){return e((function(e){e({type:"RETIRAR_USUARIO_PENDIENTE"}),fetch("/logout").then((function(e){return e.json()})).then((function(t){console.log(t.response),e({type:"RETIRAR_USUARIO_EXITO",content:!0,payload:""})})).catch((function(t){console.error(t),e(function(e){return{type:"RETIRAR_USUARIO_ERROR",content:!1,payload:e}}(t))}))}))}}}))(Z);function te(e){var t=e.recetario.map((function(e){return r.a.createElement("div",{className:"historia__receta",key:e.id},r.a.createElement(i.b,{to:"/recipes/".concat(e.id,"?from=history")},r.a.createElement("img",{className:"historia__receta-imagen",src:e.imagen}),r.a.createElement("p",{className:"historia__receta-nombre"},e.nombre)))}));return r.a.createElement("div",{className:"historia"},r.a.createElement("div",{className:"historia__info"},r.a.createElement("h2",null,e.consulta),r.a.createElement("p",null,e.fecha)),r.a.createElement("div",{className:"historia__recetario"},t))}a(794);var ae=Object(s.b)((function(e){return{historial:e.historial}}))((function(e){var t=e.historial.map((function(e,t){return r.a.createElement(te,{key:t,consulta:e.consulta,recetario:e.recetario,fecha:e.fecha})}));return r.a.createElement(P,null,r.a.createElement("div",{className:"contenedor-historial"},r.a.createElement("h1",null,"History Search"),r.a.createElement("div",{className:"historial"},t)))}));a(795);function ne(e){var t=window.innerWidth<720;function a(e){return Object(u.c)({config:u.b.stiff,to:{opacity:1,transform:"translateY(0)"},from:{opacity:t?1:0,transform:t?"translateY(0)":"translateY(-80px)"},delay:e})}return r.a.createElement(P,null,r.a.createElement("div",{className:"contenedor"},r.a.createElement("div",{className:"presentacion "},r.a.createElement(u.a.h1,{style:a(500),className:"presentacion__titulo"},"DISCOVER NEW ",r.a.createElement("br",null)," WAYS OF ENJOY ",r.a.createElement("br",null)," YOUR FOOD"),r.a.createElement(u.a.p,{style:a(1e3),className:"presentacion__texto"},"More than 300k of recipes are waiting to be discovered"),r.a.createElement(i.b,{to:"/recipes",className:"presentacion__btn"},"Start now"))))}var re=a(17),oe=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={username:"",password:""},n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){var t=[e.target.name,e.target.value],a=t[0],n=t[1];this.setState(Object(re.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.buscarUsuario(this.state,"/login")}},{key:"render",value:function(){return this.props.nombre?r.a.createElement(l.a,{to:"/recipes"}):r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"Username"),r.a.createElement("input",{value:this.state.username,onChange:this.handleChange,name:"username",type:"text",placeholder:"John@example.com"})),r.a.createElement("div",null,r.a.createElement("label",null,"Password"),r.a.createElement("input",{value:this.state.password,onChange:this.handleChange,name:"password",type:"password",placeholder:"Enter your password"})),r.a.createElement("button",{className:"btn",type:"submit"},"Login"))}}]),a}(r.a.Component),ce=Object(s.b)((function(e){return e.usuario}),(function(e){return{buscarUsuario:function(t,a){return e(w(t,a))}}}))(oe),ie=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={username:"",password:""},n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){var t=[e.target.name,e.target.value],a=t[0],n=t[1];this.setState(Object(re.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.buscarUsuario(this.state,"/signup")}},{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",null,r.a.createElement("label",null,"Username"),r.a.createElement("input",{value:this.state.username,onChange:this.handleChange,name:"username",type:"text",placeholder:"John@example.com"})),r.a.createElement("div",null,r.a.createElement("label",null,"Password"),r.a.createElement("input",{value:this.state.password,onChange:this.handleChange,name:"password",type:"password",placeholder:"Enter your password"})),r.a.createElement("button",{className:"btn",type:"submit"},"Create Account"))}}]),a}(r.a.Component),se=Object(s.b)((function(e){return e.usuario}),(function(e){return{buscarUsuario:function(t,a){return e(w(t,a))}}}))(ie),le=(a(796),function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={statusPosition:!0,infoLogin:{titulo:"Welcome back",texto:"Are you ready to discover more foods? Just sign in.",boton:"Login"},infoSignup:{titulo:"Hello, Friend!",texto:"If you are new, enter your personal details and start enjoying new tastes.",boton:"Sign up"}},n.handleWall=n.handleWall.bind(Object(p.a)(n)),n.handleFormView=n.handleFormView.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"handleWall",value:function(){var e=!this.state.statusPosition;this.setState({statusPosition:e})}},{key:"handleFormView",value:function(){document.querySelector(".form-signup").classList.toggle("d-none-mobile"),document.querySelector(".form-login").classList.toggle("d-none-mobile")}},{key:"render",value:function(){var e=this.state.statusPosition?"wall":"wall wall--mover",t=this.state.statusPosition?this.state.infoSignup:this.state.infoLogin;return r.a.createElement(P,null,r.a.createElement("div",{className:"usuario"},r.a.createElement("div",{className:"usuario__contenedor"},r.a.createElement("div",{className:e},r.a.createElement("h2",{className:"wall__titulo"},t.titulo),r.a.createElement("p",{className:"wall__texto"},t.texto),r.a.createElement("button",{className:"wall__btn btn",onClick:this.handleWall},t.boton)),r.a.createElement("div",{className:"usuario__form form-login"},r.a.createElement("h2",{className:"usuario__form__titulo"},"Sign in"),r.a.createElement(ce,null),r.a.createElement("p",{className:"mobile__texto"},"Are you new here?"),r.a.createElement("button",{className:"btn mobile__btn",onClick:this.handleFormView}," Start for free")),r.a.createElement("div",{className:"usuario__form form-signup d-none-mobile"},r.a.createElement("h2",{className:"usuario__form__titulo"},"Sign up"),r.a.createElement(se,null),r.a.createElement("p",{className:"mobile__texto"},"Are you have an account?"),r.a.createElement("button",{className:"btn mobile__btn",onClick:this.handleFormView}," Sign In")))))}}]),a}(r.a.Component));a(797);function ue(e){var t=e.id,a=e.titulo,n=e.imagen,o=e.info,c=e.path,s=e.handleRemoveFav;return r.a.createElement("div",{className:"tarjeta"},r.a.createElement("button",{onClick:function(){return s(t)},className:"tarjeta__btn-borrar-fav"},r.a.createElement("i",{className:"fas fa-trash"})),r.a.createElement(i.b,{to:"/recipes/".concat(t,"?from=").concat(c)},r.a.createElement("img",{className:"tarjeta__imagen",src:n,alt:"imagen of recipe"}),r.a.createElement("div",{className:"tarjeta__info"},r.a.createElement("h3",{className:"tarjeta__titulo"},a),r.a.createElement("div",{className:"tarjeta__texto"},r.a.createElement("p",null,function(e){if(!e.length)return!1;var t=Object(L.a)(e,3),a=t[0],n=t[1],r=t[2],o=[];return void 0!==a&&o.push(a),void 0!==n&&o.push("".concat(n," min")),void 0!==r&&o.push("".concat(r," servings")),o.join("  /  ")}(o))))))}var me=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).removeFav=n.removeFav.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"removeFav",value:function(e){this.props.removerFavorito(e)}},{key:"render",value:function(){var e=this,t=this.props.favoritos.map((function(t,a){return r.a.createElement(ue,{key:a,path:"favorites",titulo:t.titulo,imagen:t.imagen,id:t.id,info:[t.dishTypes,t.readyInMinutes,t.servings],handleRemoveFav:e.removeFav})}));return r.a.createElement(P,null,r.a.createElement("div",{className:"favoritos"},r.a.createElement("div",{className:"favoritos__contenedor"},r.a.createElement("h1",{className:"favoritos__h1"},"My Favorites"),r.a.createElement("div",{className:"favoritos__tarjetas"},t))))}}]),a}(r.a.Component),de=Object(s.b)((function(e){return{favoritos:e.favoritos}}),(function(e){return{removerFavorito:function(t){return e((x("/favorites/delete/".concat(a=t)),{type:"REMOVER_FAVORITO",payload:a}));var a}}}))(me);function he(){var e=Object(l.g)(),t=window.innerWidth<720,a=Object(u.d)(e,(function(e){return e.pathname}),{from:{opacity:t?1:0},enter:{opacity:1},leave:{opacity:t?1:0}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee,null),r.a.createElement(m,null),a.map((function(e){var t=e.item,a=e.props,n=e.key;return r.a.createElement(u.a.div,{key:n,style:a},r.a.createElement(l.d,{location:t},r.a.createElement(l.b,{exact:!0,path:"/",component:ne}),r.a.createElement(l.b,{exact:!0,path:"/user",component:le}),r.a.createElement(l.b,{exact:!0,path:"/recipes",component:G}),r.a.createElement(l.b,{exact:!0,path:"/recipes/:id",component:K}),r.a.createElement(l.b,{exact:!0,path:"/favorites",component:de}),r.a.createElement(l.b,{exact:!0,path:"/history",component:ae})))})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(s.a,{store:I},r.a.createElement(i.a,null,r.a.createElement(he,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[757,1,2]]]);
//# sourceMappingURL=main.1e696c09.chunk.js.map