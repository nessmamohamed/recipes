(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/recipe.403399ad.png"},35:function(e,t,a){e.exports=a(59)},40:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var c=a(0),l=a.n(c),n=a(26),o=a.n(n),r=a(27),m=a(28),s=a(33),i=a(29),u=a(34),d=a(11),b=a(12),p=(a(40),a(30)),h=a.n(p),E=a(14),g=a(15),N=a(7),v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{id:"content-wrap"},l.a.createElement("img",{src:h.a,alt:"img",className:"image"}),l.a.createElement("div",{className:"head "},l.a.createElement(N.Fade,{top:!0},l.a.createElement("h1",{className:"head1 px-2 pb-3 pb-sm-5"}," Nutrition and healthy recipes! ")),l.a.createElement(N.Zoom,null,l.a.createElement("div",{id:"border",className:"mx-auto mb-5"})),l.a.createElement("div",null,l.a.createElement(d.b,{to:{pathname:"/recipes/nutrition"},className:"btn btn-success btn-sm rounded px-md-3 py-2 mr-2",id:"btn"},"Start now",l.a.createElement(E.a,{icon:g.a,className:"ml-3",style:{color:"wheat"}})),l.a.createElement(d.b,{to:{pathname:"/recipes/weight"},className:"btn btn-danger btn-sm rounded ml-2 mt-2 mt-sm-0 px-md-3 py-1 ",id:"btn"},"Calories",l.a.createElement(E.a,{icon:g.c,className:"ml-3"}))))))},f=a(22),y=a(17),x=a.n(y),k=a(3),j=function(e){var t=e.onSubmit,a=e.onChange,c=e.onChange2,n=e.diet,o=e.health,r=e.recipe;return l.a.createElement("div",{className:"container pt-5 text-center",style:{margin:"20px auto",width:"fit-content"}},l.a.createElement("form",{onSubmit:t},l.a.createElement("div",{className:"row pt-5"},l.a.createElement("div",{className:"col-12 col-sm-7 "},l.a.createElement("input",{type:"text",placeholder:r||"Ex: Chicken",name:"search",className:"pl-3",style:{border:"none",borderBottom:"1px solid rgba(40, 167, 69, 0.52)"}})),l.a.createElement("div",{className:"col-12 col-sm-5 mt-3 mt-sm-0"},l.a.createElement("button",{className:" btn btn-outline-success btn-sm ",style:{fontSize:"1rem"}},"Get recipes")))),l.a.createElement("div",{className:"row mt-4 "},l.a.createElement("div",{className:"col pl-3"},l.a.createElement("div",{className:"custom-control custom-checkbox",id:"form"},l.a.createElement("input",{name:"vegetarian",className:"custom-control-input position-static mr-2 vegetarian",defaultChecked:o.includes("vegetarian"),onChange:c,type:"checkbox",id:"blank1"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"blank1"},"vegetarian")),l.a.createElement("div",{className:"custom-control custom-checkbox",id:"form"},l.a.createElement("input",{name:"vegan",className:"custom-control-input position-static mr-2 vegan",defaultChecked:o.includes("vegan"),onChange:c,type:"checkbox",id:"blank2"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"blank2"},"vegan")),l.a.createElement("div",{className:"custom-control custom-checkbox",id:"form"},l.a.createElement("input",{name:"paleo",className:"custom-control-input position-static mr-2",defaultChecked:o.includes("paleo"),onChange:c,type:"checkbox",id:"blank3"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"blank3"},"paleo")),l.a.createElement("div",{className:"custom-control custom-checkbox",id:"form"},l.a.createElement("input",{name:"high-fiber",className:"custom-control-input position-static mr-2",defaultChecked:n.includes("high-fiber"),onChange:a,type:"checkbox",id:"blank4"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"blank4"},"high-fiber")),l.a.createElement("div",{className:"custom-control custom-checkbox",id:"form"},l.a.createElement("input",{name:"high-protein",className:"custom-control-input position-static mr-2",defaultChecked:n.includes("high-protein"),onChange:a,type:"checkbox",id:"blank5"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"blank5"},"high-protein"))),l.a.createElement("div",{className:"col "},l.a.createElement("div",{className:"custom-control custom-checkbox",id:"form"},l.a.createElement("input",{name:"low-carb",className:"custom-control-input position-static mr-2",defaultChecked:n.includes("low-carb"),onChange:a,type:"checkbox",id:"blank6"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"blank6"},"low-carb")),l.a.createElement("div",{className:"custom-control custom-checkbox",id:"form"},l.a.createElement("input",{name:"low-fat",className:"custom-control-input position-static mr-2",defaultChecked:n.includes("low-fat"),onChange:a,type:"checkbox",id:"blank7"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"blank7"},"low-fat")),l.a.createElement("div",{className:"custom-control custom-checkbox",id:"form"},l.a.createElement("input",{name:"low-sodium",className:"custom-control-input position-static mr-2",defaultChecked:n.includes("low-sodium"),onChange:a,type:"checkbox",id:"blank8"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"blank8"},"low-sodium")),l.a.createElement("div",{className:"custom-control custom-checkbox",id:"form"},l.a.createElement("input",{name:"balanced",className:"custom-control-input position-static mr-2 ",defaultChecked:n.includes("balanced"),onChange:a,type:"checkbox",id:"blank9"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"blank9"},"balanced")),l.a.createElement("div",{className:"custom-control custom-checkbox",id:"form"},l.a.createElement("input",{name:"alcohol-free",className:"custom-control-input position-static mr-2",checked:!0,type:"checkbox",id:"blank10"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"blank10"},"alcohol-free")))))},O=function(){var e=Object(c.useState)([]),t=Object(k.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(localStorage.recipe?JSON.parse(localStorage.getItem("recipe")):""),r=Object(k.a)(o,2),m=r[0],s=r[1],i=Object(c.useState)(localStorage.diet?JSON.parse(localStorage.getItem("diet")):[]),u=Object(k.a)(i,2),b=u[0],p=u[1],h=Object(c.useState)(localStorage.health?JSON.parse(localStorage.getItem("health")):["alcohol-free"]),v=Object(k.a)(h,2),y=v[0],O=v[1],w=Object(c.useState)(!1),S=Object(k.a)(w,2),C=S[0],F=S[1],I=Object(c.useState)(!1),J=Object(k.a)(I,2),M=J[0],R=J[1],q=Object(c.useState)(!1),z=Object(k.a)(q,2),H=z[0],L=z[1];Object(c.useEffect)((function(){!function(){var e,t;x.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return F(!1),a.prev=1,"cb24963c536c2a7496406a81381491ea","15075e4e",a.next=6,x.a.awrap(fetch("https://api.edamam.com/search?q=".concat(m,"&app_id=").concat("15075e4e","&app_key=").concat("cb24963c536c2a7496406a81381491ea","&from=0&to=16&calories=50-600").concat(b.length>0?"&diet=".concat(b.join("&")):"","&health=").concat(y.join("&"))));case 6:return e=a.sent,a.next=9,x.a.awrap(e.json());case 9:t=a.sent,n(t.hits),R(!1),F(!0),0===t.hits.length&&R(!0),a.next=21;break;case 16:a.prev=16,a.t0=a.catch(1),R(!0),F(!1),console.log(a.t0);case 21:case"end":return a.stop()}}),null,null,[[1,16]])}()}),[m,H]);return localStorage.setItem("diet",JSON.stringify(b)),localStorage.setItem("health",JSON.stringify(y)),localStorage.setItem("recipe",JSON.stringify(m)),l.a.createElement("div",{style:{minHeight:"100vh"}},l.a.createElement(j,{onSubmit:function(e){e.preventDefault();var t=e.target.elements.search.value;s(t),L(!H)},onChange:function(e){e.target.checked?b.includes(e.target.name)||p([].concat(Object(f.a)(b),[e.target.name])):p(b.filter((function(t){return t!==e.target.name})))},onChange2:function(e){e.target.checked?y.includes(e.target.name)||O([].concat(Object(f.a)(y),[e.target.name])):O(y.filter((function(t){return t!==e.target.name})))},recipe:m,diet:b,health:y}),l.a.createElement("div",{className:"container-fluid mt-3 ",style:{padding:"0 7%",minHeight:"100vh"}},l.a.createElement("div",{className:"row text-center"},M?l.a.createElement("div",{className:"alert alert-danger mx-auto pt-1 px-5 pb-0",role:"status"},l.a.createElement("p",{className:"mb-1 mx-5"},"Sorry .. recipes not founed")):C?a.map((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;return l.a.createElement(N.Fade,{key:t++},l.a.createElement("div",{className:"col "},l.a.createElement("div",{className:"card my-4 mx-auto shadow",style:{width:"20rem"}},l.a.createElement("div",{className:"card-body"},l.a.createElement("img",{className:"card-img-top shadow rounded",src:e.recipe.image,alt:"img"}),l.a.createElement("h3",{className:"card-title mt-4"},e.recipe.label.length<15?"".concat(e.recipe.label):"".concat(e.recipe.label.substring(0,15),"...")),l.a.createElement("p",{className:"mt-2 text-warning"},"calories(",Math.floor(e.recipe.calories/e.recipe.yield)+" /serv",")"),l.a.createElement(d.b,{to:{pathname:"https://nessmamohamed.github.io/recipes/nutrition/".concat(e.recipe.calories),state:{recipes:e.recipe}},className:"btn btn-outline-success btn-md"},"view ingredients"),l.a.createElement("button",{className:"btn btn-outline-danger btn-md mx-2"},l.a.createElement(E.a,{icon:g.b,id:"icon"}))))))})):l.a.createElement("div",{className:"spinner-border text-dark mx-auto",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading...")))),l.a.createElement("footer",{className:"bg-light text-dark text-center py-3"},"developed by @Nessma M. Nazir ",l.a.createElement("br",null),"contact info: nessomohamed555@gmail.com ",l.a.createElement("br",null),"K\ud835\udceareem11222 (Gaster)\u2122\ufe0f \u2718#5136 ",l.a.createElement("br",null),"Nesso\u2122 \u2718#2257"))},w=function(e){var t=e.location.state.recipes,a=t.totalNutrients,c=Object.values(a);return l.a.createElement("div",null,l.a.createElement(N.Fade,{duration:800},l.a.createElement("div",{className:"container py-5 ",style:{minHeight:"100vh"}},l.a.createElement("div",{className:"row ",style:{paddingTop:"inherit"}},l.a.createElement("div",{className:"col-12 col-md-7 col-lg-8 mx-auto"},l.a.createElement("div",{className:"card mx-auto shadow"},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("h1",{className:"card-title "},t.label),l.a.createElement("img",{className:"card-img-top pt-3 pb-3 rounded",src:t.image,alt:"img",style:{height:"50vh",width:"80%"}}),l.a.createElement("ul",{className:"my-3 pl-0 pb-3"},t.ingredientLines.map((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return l.a.createElement("li",{id:"recipe-list",key:t++},e)}))),l.a.createElement("div",{className:"d-md-flex border-bottom mx-auto justify-content-center mb-4",style:{width:"60%"}},l.a.createElement("p",{className:"text-warning"},"calories(",Math.floor(t.calories/t.yield)+" /serv",")"),l.a.createElement("p",{className:"text-warning pl-4  "},t.yield," Serving")),l.a.createElement("p",{className:"pt-4 pt-lg-0 "},l.a.createElement("a",{href:t.url,style:{color:"#6189b5"}},"Click here for recipe preparation")),l.a.createElement(d.b,{to:"/recipes/nutrition",className:"btn btn-outline-success btn-xl d-table ml-3 mb-2"},"Back to Recipes")))),l.a.createElement("div",{className:"col-9  col-md-5 col-lg-4 mt-4 mt-md-0 text-center mx-auto"},l.a.createElement("div",{className:"card shadow"},l.a.createElement("div",{className:"card-header border-success text-success text-center"},"-health label-  ",t.dietLabels),l.a.createElement("div",{className:"card-body "},l.a.createElement("ul",{className:"my-3 pl-0"},t.healthLabels.map((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return l.a.createElement("li",{id:"recipe-list",key:t++},e)}))))),l.a.createElement("div",null,l.a.createElement("div",{className:"card mt-4 shadow"},l.a.createElement("div",{className:"card-header bg-danger text-light "}," Total Nutrients"),l.a.createElement("div",{className:"card-body mx-auto"},l.a.createElement("ul",{className:"pl-0  "},c.map((function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return l.a.createElement("li",{id:"recipe-list-2",key:a++,className:"d-flex pl-3 justify-content-left "},l.a.createElement("p",{className:"pr-3"},e.label+" :"," "),l.a.createElement("p",{style:{color:"dimgray"}},Math.floor(e.quantity/t.yield)+" "+e.unit))})))))))))),l.a.createElement("footer",{className:"bg-light text-dark text-center py-3"},"developed by @Nessma M. Nazir ",l.a.createElement("br",null),"contact info: nessomohamed555@gmail.com ",l.a.createElement("br",null),"K\ud835\udceareem11222 (Gaster)\u2122\ufe0f \u2718#5136 ",l.a.createElement("br",null),"Nesso\u2122 \u2718#2257"))},S=a(9),C=function(){var e,t,a,n=Object(c.useState)(!1),o=Object(k.a)(n,2),r=o[0],m=o[1],s=Object(c.useState)(!0),i=Object(k.a)(s,2),u=i[0],d=i[1],b=Object(c.useState)(0),p=Object(k.a)(b,2),h=p[0],E=p[1],g=Object(c.useState)(),v=Object(k.a)(g,2),f=v[0],y=v[1],x=Object(c.useState)(),j=Object(k.a)(x,2),O=j[0],w=j[1],C=Object(c.useState)(),F=Object(k.a)(C,2),I=F[0],J=F[1],M=Object(c.useState)(),R=Object(k.a)(M,2),q=R[0],z=R[1],H=Object(c.useState)(!1),L=Object(k.a)(H,2),Y=L[0],A=L[1],B=Object(c.useState)(!0),G=Object(k.a)(B,2),K=G[0],W=(G[1],function(e){e.target.checked,E(e.target.value)});return l.a.createElement("div",{className:"pt-5 text-center"},l.a.createElement("div",{className:"container col-lg-5 col-md-8 col-10 pt-5",style:{minHeight:"100vh"}},l.a.createElement("div",{className:"card shadow mb-4"},l.a.createElement("div",{className:"card-title px-3"},l.a.createElement("h4",{className:"mt-5 mb-3 "},"Calculate daily calories by mifflin sant's equation"),l.a.createElement(N.Zoom,null,l.a.createElement("div",{className:" mx-auto border2"}))),l.a.createElement("div",{className:"card-body  "},l.a.createElement("div",{className:" mb-4 justify-content-center "},l.a.createElement("button",{onClick:function(){m(!0),d(!1)},style:{backgroundColor:r?"#dc3545":"white",color:r?"white":"#dc3545"},className:" mr-sm-5  my-2 px-4 btn btn-outline-danger mx-auto"},"male"),l.a.createElement("button",{onClick:function(){m(!1),d(!0)},style:{backgroundColor:u?"#dc3545":"white",color:u?"white":"#dc3545"},className:" ml-sm-5 my-2  px-4 btn btn-outline-danger"},"female")),l.a.createElement("div",{className:"mb-4"},l.a.createElement("label",null,"Weight: "),l.a.createElement("input",(e={type:"number",title:"weight must contain numbers from 10 to 300",onChange:function(e){w(e.target.value)}},Object(S.a)(e,"type","text"),Object(S.a)(e,"className","input ml-3 mr-2 text-center"),Object(S.a)(e,"required",!0),e))," ",l.a.createElement("span",null,"Kg")),l.a.createElement("div",{className:"mb-4"},l.a.createElement("label",null,"Height: "),l.a.createElement("input",(t={type:"number",title:"height must contain numbers from 15 to 250",onChange:function(e){y(e.target.value)}},Object(S.a)(t,"type","text"),Object(S.a)(t,"className","input ml-3 mr-2 text-center"),Object(S.a)(t,"required",!0),t))," ",l.a.createElement("span",null,"Cm")),l.a.createElement("div",{className:"mb-4"},l.a.createElement("label",null,"Age: "),l.a.createElement("input",(a={type:"number",title:"age must contain numbers from 5 to 100",onChange:function(e){J(e.target.value)}},Object(S.a)(a,"type","text"),Object(S.a)(a,"className","input ml-3 mr-2 text-center"),Object(S.a)(a,"required",!0),a))),l.a.createElement("div",null,l.a.createElement("h5",null,"body Activity"),l.a.createElement("div",{className:"mt-3 "},l.a.createElement("div",{className:"col mx-auto ",style:{maxWidth:"fit-content"}},l.a.createElement("div",{className:"custom-control custom-radio ",id:"form"},l.a.createElement("input",{type:"radio",value:"1.200",name:"customRadio",className:"custom-control-input position-static mr-2 ",onChange:W,id:"blank1"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"blank1"},"light active")),l.a.createElement("div",{className:"custom-control custom-radio",id:"form"},l.a.createElement("input",{type:"radio",value:"1.375",name:"customRadio",className:"custom-control-input position-static mr-2 ",onChange:W,id:"blank2"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"blank2"}," active")),l.a.createElement("div",{className:"custom-control custom-radio",id:"form"},l.a.createElement("input",{type:"radio",value:"1.550",name:"customRadio",className:"custom-control-input position-static mr-2",onChange:W,id:"blank3"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"blank3"},"average active")),l.a.createElement("div",{className:"custom-control custom-radio",id:"form"},l.a.createElement("input",{type:"radio",value:"1.725",name:"customRadio",className:"custom-control-input position-static mr-2",onChange:W,id:"blank4"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"blank4"},"high active")),l.a.createElement("div",{className:"custom-control custom-radio",id:"form"},l.a.createElement("input",{type:"radio",value:"1.900",name:"customRadio",className:"custom-control-input position-static mr-2",onChange:W,id:"blank6"}),l.a.createElement("label",{className:"custom-control-label",htmlFor:"blank6"},"very high active"))))),l.a.createElement("button",{onClick:function(){var e;e=r?10*O+6.25*f-5*I+5:10*O+6.25*f-5*I-161;var t=h?e*h:e;z(Math.floor(t)),A(!(O&&f&&I))},className:"btn btn-md btn-outline-danger my-4 px-4"},"Submit"),Y?l.a.createElement("p",{className:"text-danger"},"Please enter all fields !"):K?q?l.a.createElement("p",{className:"text-info mb-4"},"Your total daily calories is ",q):"":l.a.createElement("p",null,"Please enter a valid english numbers")))),l.a.createElement("footer",{className:"bg-light text-dark py-3"},"developed by @Nessma M. Nazir ",l.a.createElement("br",null),"contact info: nessomohamed555@gmail.com ",l.a.createElement("br",null),"K\ud835\udceareem11222 (Gaster)\u2122\ufe0f \u2718#5136 ",l.a.createElement("br",null),"Nesso\u2122 \u2718#2257"))},F=(a(58),function(e){function t(){var e,a;Object(r.a)(this,t);for(var c=arguments.length,l=new Array(c),n=0;n<c;n++)l[n]=arguments[n];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={lastScrollY:0},a.handleScroll=function(){a.setState({lastScrollY:window.scrollY})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll,!0)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-light  fixed-top ",style:{backgroundColor:this.state.lastScrollY<=43?"#000008":"rgba(0, 0, 8, 0.35)",transition:"background 500ms",height:"60px",zIndex:"1",boxShadow:"0 .9px 10px rgba(0,0,0,.15)"}},l.a.createElement("a",{className:"navbar-brand ml-5 text-light border-bottom border-top",href:"/recipes",style:{fontSize:"xlarge"}},"Recipes")),l.a.createElement(d.a,null,l.a.createElement(b.a,{exact:!0,path:"/recipes",component:v}),l.a.createElement(b.a,{path:"/recipes/nutrition",component:O}),l.a.createElement(b.a,{path:"https://nessmamohamed.github.io/recipes/nutrition/:id",component:w}),l.a.createElement(b.a,{path:"/recipes/weight",component:C})))}}]),t}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.adc0929f.chunk.js.map