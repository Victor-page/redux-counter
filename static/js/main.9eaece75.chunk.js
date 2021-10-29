(this["webpackJsonpredux-basics"]=this["webpackJsonpredux-basics"]||[]).push([[0],{10:function(e,t,n){e.exports={header:"Header_header__2ZwRQ"}},11:function(e,t,n){e.exports={profile:"UserProfile_profile__29lLq"}},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(4),i=n.n(r),u=n(2),s=(n(22),n(3)),o=Object(s.b)({name:"counter",initialState:{value:0,showValue:!0},reducers:{increment:function(e){e.value++},decrement:function(e){e.value--},increase:function(e,t){e.value=e.value+t.payload},toggleCounter:function(e){e.showValue=!e.showValue}}}),a=o.actions,l=o.reducer,j=n(8),d=n.n(j),b=n(1),h=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.counter.value})),n=Object(u.c)((function(e){return e.counter.showValue}));return Object(b.jsxs)("main",{className:d.a.counter,children:[Object(b.jsx)("h1",{children:"Redux Counter"}),n&&Object(b.jsxs)("div",{className:d.a.value,children:["-- ",t," --"]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{onClick:function(){return e(a.increment())},children:"Increment"}),Object(b.jsx)("button",{onClick:function(){return e(a.increase(5))},children:"Increase by 5"}),Object(b.jsx)("button",{onClick:function(){return e(a.decrement())},children:"Decrement"})]}),Object(b.jsx)("button",{onClick:function(){return e(a.toggleCounter())},children:"Toggle Counter"})]})},O=n(10),x=n.n(O),f=Object(s.b)({name:"authentication",initialState:{isAuthenticated:!1},reducers:{login:function(e){e.isAuthenticated=!0},logout:function(e){e.isAuthenticated=!1}}}),m=f.actions,p=f.reducer,v=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth.isAuthenticated})),n=Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"My Products"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"/",children:"My Sales"})}),Object(b.jsx)("li",{children:Object(b.jsx)("button",{onClick:function(){return e(m.logout())},children:"Logout"})})]})});return Object(b.jsxs)("header",{className:x.a.header,children:[Object(b.jsx)("h1",{children:"Redux Auth"}),t&&n]})},_=n(5),g=n.n(_),w=function(){var e=Object(u.b)();return Object(b.jsx)("main",{className:g.a.auth,children:Object(b.jsx)("section",{children:Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(m.login())},children:[Object(b.jsxs)("div",{className:g.a.control,children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("input",{type:"email",id:"email"})]}),Object(b.jsxs)("div",{className:g.a.control,children:[Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"password",id:"password"})]}),Object(b.jsx)("button",{children:"Login"})]})})})},C=n(11),k=n.n(C),y=function(){return Object(b.jsx)("main",{className:k.a.profile,children:Object(b.jsx)("h2",{children:"My User Profile"})})};var A=function(){var e=Object(u.c)((function(e){return e.auth.isAuthenticated}));return Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)(v,{}),e?Object(b.jsx)(y,{}):Object(b.jsx)(w,{}),Object(b.jsx)(h,{})]})},N=Object(s.a)({reducer:{counter:l,auth:p}});i.a.render(Object(b.jsx)(u.a,{store:N,children:Object(b.jsx)(A,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={auth:"Auth_auth__4adj_",control:"Auth_control__QHdOY"}},8:function(e,t,n){e.exports={counter:"Counter_counter__2wnYk",value:"Counter_value__CGNGb"}}},[[24,1,2]]]);
//# sourceMappingURL=main.9eaece75.chunk.js.map