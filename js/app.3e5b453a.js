(function(t){function s(s){for(var a,i,c=s[0],r=s[1],l=s[2],d=0,p=[];d<c.length;d++)i=c[d],e[i]&&p.push(e[i][0]),e[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(s);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,s=0;s<o.length;s++){for(var n=o[s],a=!0,c=1;c<n.length;c++){var r=n[c];0!==e[r]&&(a=!1)}a&&(o.splice(s--,1),t=i(i.s=n[0]))}return t}var a={},e={app:0},o=[];function i(s){if(a[s])return a[s].exports;var n=a[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,s,n){i.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,s){if(1&s&&(t=i(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)i.d(n,a,function(s){return t[s]}.bind(null,a));return n},i.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=s,c=c.slice();for(var l=0;l<c.length;l++)s(c[l]);var u=r;o.push([0,"chunk-vendors"]),n()})({0:function(t,s,n){t.exports=n("56d7")},"466f":function(t,s,n){},"56d7":function(t,s,n){"use strict";n.r(s);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),e=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"container"},[n("app-header"),n("div",{staticClass:"alert alert-info my-2 text-center"},[t._v("Your Funds: "+t._s(t.$store.getters.funds))]),n("router-view")],1)},o=[],i=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("nav",{staticClass:"navbar navbar-expand-sm navbar-light bg-light my-3 text-small"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("Stock Trader")]),n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},on:{click:t.toggleNavbar}},[n("span",{staticClass:"navbar-toggler-icon"})]),n("div",{staticClass:"collapse navbar-collapse",class:{show:t.navbarOpen},attrs:{id:"collapsibleNavbar"}},[n("ul",{staticClass:"navbar-nav"},[n("router-link",{staticClass:"nav-item",attrs:{to:"/portfolio","active-class":"active",tag:"li"}},[n("a",{staticClass:"nav-link"},[t._v("Portfolio")])]),n("router-link",{staticClass:"nav-item",attrs:{to:"/stocks","active-class":"active",tag:"li"}},[n("a",{staticClass:"nav-link"},[t._v("Stocks")])])],1)]),n("div",{staticClass:"collapse navbar-collapse",class:{show:t.navbarOpen},attrs:{id:"collapsibleNavbar"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("router-link",{staticClass:"nav-item",attrs:{to:"/",tag:"li"}},[n("a",{staticClass:"nav-link"},[t._v("End Day")])]),n("li",{staticClass:"nav-item dropdown"},[n("a",{staticClass:"nav-link dropdown-toggle",attrs:{role:"button",id:"navbarDropdown"},on:{click:function(s){return t.toggleDropdown()}}},[t._v("\n                    Save & Load\n                ")]),n("div",{staticClass:"dropdown-menu dropdown-menu-right",class:{show:t.dropdownOpen},attrs:{"aria-labelledby":"navbarDropdown"}},[n("a",{staticClass:"dropdown-item"},[t._v("Save Data")]),n("a",{staticClass:"dropdown-item"},[t._v("Load Data")])])])],1)])],1)},c=[],r={data:function(){return{navbarOpen:!1,dropdownOpen:!1}},methods:{toggleNavbar:function(){this.navbarOpen=!this.navbarOpen},toggleDropdown:function(){this.dropdownOpen=!this.dropdownOpen}}},l=r,u=(n("d45c"),n("2877")),d=Object(u["a"])(l,i,c,!1,null,"34dd7e54",null),p=d.exports,f={components:{appHeader:p},created:function(){this.$store.dispatch("initStocks")}},v=f,m=Object(u["a"])(v,e,o,!1,null,null,null),b=m.exports,k=n("8c4f"),h=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[t._v("\n    Inside Home\n")])},y=[],g={},C=g,_=Object(u["a"])(C,h,y,!1,null,null,null),S=_.exports,w=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"row"},t._l(t.stocks,function(t,s){return n("app-stock",{key:s,attrs:{stock:t}})}),1)},O=[],q=n("cebc"),x=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"col-sm-6 col-md-4 my-2"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header bg-success"},[n("b",[t._v(t._s(t.stock.name))]),n("small",{staticClass:"ml-2"},[t._v("\n                {PRICE: "+t._s(t.stock.price)+" }\n            ")])]),n("div",{staticClass:"card-body"},[n("div",{staticClass:"float-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"form-control",attrs:{type:"number",name:"name",placeholder:"Quantity"},domProps:{value:t.quantity},on:{input:function(s){s.target.composing||(t.quantity=s.target.value)}}})])]),n("div",{staticClass:"card-footer bg-white",staticStyle:{"max-height":"50px"}},[n("div",{staticClass:"float-right"},[n("button",{staticClass:"btn btn-sm btn-success",attrs:{disabled:t.quantity<=0||t.insufficientFunds},on:{click:t.buyStock}},[t._v("\n                    Buy\n                ")])])])])])},j=[],P={props:["stock"],computed:{insufficientFunds:function(){return this.quantity*this.stock.price>this.$store.getters.funds}},methods:{buyStock:function(){var t={stockId:this.stock.id,stockQty:this.quantity,stockPrice:this.stock.price};console.log(t),this.$store.dispatch("buyStock",t),this.quantity=0}},data:function(){return{quantity:0}}},T=P,E=Object(u["a"])(T,x,j,!1,null,null,null),$=E.exports,Q=n("2f62"),D={components:{appStock:$},computed:Object(q["a"])({},Object(Q["b"])({stocks:"stocks"}))},N=D,I=Object(u["a"])(N,w,O,!1,null,null,null),K=I.exports,L=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"row"},[t._l(t.stocks,function(t,s){return n("app-stock",{key:s*Math.random(),attrs:{stocks:t}})}),0===t.stocks.length?n("div",{staticClass:"font-weight-bold mx-auto mt-3"},[t._v("Go ahead, Buy a stock!")]):t._e()],2)},M=[],B=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"col-sm-6 col-md-4 my-2"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-header bg-success"},[n("b",[t._v(t._s(t.stocks.name))]),n("small",{staticClass:"ml-2"},[t._v("\n                {PRICE: "+t._s(t.stocks.price)+", QTY: "+t._s(t.stocks.quantity)+" }\n            ")])]),n("div",{staticClass:"card-body"},[n("div",{staticClass:"float-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.quantity,expression:"quantity"}],staticClass:"form-control",attrs:{type:"number",name:"name",placeholder:"Quantity"},domProps:{value:t.quantity},on:{input:function(s){s.target.composing||(t.quantity=s.target.value)}}})])]),n("div",{staticClass:"card-footer bg-white",staticStyle:{"max-height":"50px"}},[n("div",{staticClass:"float-right"},[n("button",{staticClass:"btn btn-sm bg-success",attrs:{disabled:t.quantity<=0||t.insufficientQty},on:{click:t.sellStock}},[t._v("\n                    Sell\n                ")])])])]),t.insufficientQty?n("div",{staticClass:"alert alert-info my-2"},[n("small",[t._v("Quantity limit exceeded!")])]):t._e()])},Y=[],F=n("e814"),R=n.n(F),A={props:["stocks"],methods:{sellStock:function(){var t={stockId:this.stocks.id,stockQty:this.quantity,stockPrice:this.stocks.price};this.$store.dispatch("sellStocks",t),console.log(t),this.quantity=0}},computed:{insufficientQty:function(){return console.log(this.quantity,this.stocks.quantity,this.quantity>this.stocks.quantity),this.quantity>R()(this.stocks.quantity)}},data:function(){return{quantity:0}}},G=A,H=Object(u["a"])(G,B,Y,!1,null,null,null),J=H.exports,U={computed:Object(q["a"])({},Object(Q["b"])({stocks:"stockPortfolio"})),components:{appStock:J}},W=U,z=Object(u["a"])(W,L,M,!1,null,null,null),V=z.exports;a["a"].use(k["a"]);var X=new k["a"]({routes:[{path:"/",name:"home",component:S},{path:"/portfolio",component:V},{path:"/stocks",component:K}]}),Z=[{id:1,name:"BMW",price:110},{id:2,name:"Google",price:90},{id:3,name:"Apple",price:60},{id:4,name:"Twitter",price:81}],tt={stocks:[]},st={SET_STOCKS:function(t,s){t.stocks=s},RAND_STOCKS:function(t){}},nt={buyStock:function(t,s){var n=t.commit;n("BUY_STOCKS",s)},initStocks:function(t){var s=t.commit;s("SET_STOCKS",Z)}},at={stocks:function(t){return t.stocks}},et={state:tt,mutations:st,actions:nt,getters:at},ot=(n("7f7f"),n("7514"),{funds:1e4,stocks:[]}),it={BUY_STOCKS:function(t,s){var n=s.stockId,a=s.stockQty,e=s.stockPrice,o=t.stocks.find(function(t){return t.id==n});o?o.quantity=R()(o.quantity)+R()(a):t.stocks.push({id:n,quantity:a}),t.funds-=a*e},SELL_STOCKS:function(t,s){var n=s.stockId,a=s.stockQty,e=s.stockPrice,o=t.stocks.find(function(t){return t.id==n});o.quantity>a?o.quantity-=a:t.stocks.splice(t.stocks.indexOf(o),1),t.funds+=a*e}},ct={sellStocks:function(t,s){var n=t.commit;n("SELL_STOCKS",s)}},rt={stockPortfolio:function(t,s){return t.stocks.map(function(t){var n=s.stocks.find(function(s){return s.id==t.id});return{id:t.id,price:n.price,name:n.name,quantity:t.quantity}})},funds:function(t){return t.funds}},lt={state:ot,mutations:it,actions:ct,getters:rt};a["a"].use(Q["a"]);var ut=new Q["a"].Store({state:{},mutations:{},actions:{},modules:{stocks:et,portfolio:lt}});a["a"].config.productionTip=!1,new a["a"]({router:X,store:ut,render:function(t){return t(b)}}).$mount("#app")},d45c:function(t,s,n){"use strict";var a=n("466f"),e=n.n(a);e.a}});
//# sourceMappingURL=app.3e5b453a.js.map