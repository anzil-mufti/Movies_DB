"use strict";(self.webpackChunkmovie_db=self.webpackChunkmovie_db||[]).push([[287],{7446:function(t,e,n){n.d(e,{Z:function(){return x}});var r=n(885),o={navbar:"Navbar_navbar__LnXFr",navbar_brand:"Navbar_navbar_brand__UDaQC",navbar_nav:"Navbar_navbar_nav__RSqIv",dropdown:"Navbar_dropdown__BGGIX"},a=n(2791),i=n(6871),s="SearchBar_search__eu6RW",c="SearchBar_search_bar__VNGCv",l="SearchBar_search_button__9S-n9",d="SearchBar_search_icon__c99NO";var u=n.p+"static/media/Search_icon.7ac8ebbf758a0e14c1311ef279dd6d16.svg",v=n(184),_=function(){var t=(0,a.useRef)(),e=(0,i.s0)();return(0,v.jsxs)("form",{className:s,onSubmit:function(n){n.preventDefault(),e("/search/".concat(t.current.value)),t.current.value=""},children:[(0,v.jsx)("input",{type:"text",placeholder:"Search",className:c,ref:t}),(0,v.jsx)("button",{className:l,type:"submit",children:(0,v.jsx)("img",{src:u,alt:"Search",className:d})})]})},m="Button_button__O+4gT",b=n(6030),h=n(5199),g=n(577),p=(n(5462),function(t){var e=(0,i.s0)(),n=(0,b.I0)(),r=(0,b.v9)((function(t){return t.auth.isLoggedIn}));return(0,v.jsxs)(a.Fragment,{children:[(0,v.jsx)("button",{className:m,onClick:function(){"Sign In"===t.title?e("/signin"):"Sign Out"===t.title?(n((0,h.kS)()),e("/")):"My WatchList"===t.title&&(r?e("/watchlist"):g.Am.warn("You need to be logged in to add to watchlist",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}))},children:t.title}),(0,v.jsx)(g.Ix,{})]})});var f=n.p+"static/media/Dropdown.17ca551ceb2cabafbf4f1b9ed73244fa.svg",x=function(){var t=(0,b.v9)((function(t){return t.auth.isLoggedIn})),e=(0,i.s0)(),n=(0,a.useState)(window.innerWidth>750),s=(0,r.Z)(n,2),c=s[0],l=s[1];return(0,v.jsxs)("nav",{className:o.navbar,children:[(0,v.jsx)("div",{className:o.navbar_brand,onClick:function(){e("/")},children:"MOVIES._.DB"}),(0,v.jsx)(_,{}),(0,v.jsx)("button",{className:o.dropdown,children:(0,v.jsx)("img",{src:f,alt:"dropdown",className:o.dropdown_img,onClick:function(){l((function(t){return!t}))}})}),c&&(0,v.jsx)(p,{title:"My WatchList"}),!t&&c&&(0,v.jsx)(p,{title:"Sign In"}),t&&c&&(0,v.jsx)(p,{title:"Sign Out"})]})}},6287:function(t,e,n){n.r(e),n.d(e,{default:function(){return c}});var r=n(2791),o=n(7446),a=n(8361),i="Main_buttonHolder__M5E2r",s=n(184),c=function(){return(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)(o.Z,{}),(0,s.jsxs)("div",{className:i,children:[(0,s.jsx)(a.Z,{title:"trending tv shows",backgroundColor:"#9690ad"}),(0,s.jsx)(a.Z,{title:"trending movies",backgroundColor:"rgb(255, 255, 155)"}),(0,s.jsx)(a.Z,{title:"popular tv shows",backgroundColor:"#6dd07d"}),(0,s.jsx)(a.Z,{title:"popular movies",backgroundColor:"#f46767"}),(0,s.jsx)(a.Z,{title:"top rated tv shows",backgroundColor:"#62b0b7"}),(0,s.jsx)(a.Z,{title:"top rated movies",backgroundColor:"rgba(248, 69, 159, 0.3)"}),(0,s.jsx)(a.Z,{title:"upcoming movies",backgroundColor:"#8bec65"}),(0,s.jsx)(a.Z,{title:"on the air tv shows",backgroundColor:"#f2c97d"})]})]})}},8361:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(6871),o="PageButton_PageButton__JU1dU",a=n(184),i=function(t){var e,n=(0,r.s0)();"trending movies"===t.title?e="trending_movies":"trending tv shows"===t.title?e="trending_tv":"popular movies"===t.title?e="popular_movies":"popular tv shows"===t.title?e="popular_tv":"top rated movies"===t.title?e="top_rated_movies":"top rated tv shows"===t.title?e="top_rated_tv":"upcoming movies"===t.title?e="upcoming_movies":"on the air tv shows"===t.title?e="on_the_air":"Similar Movies"===t.title?e="similar_movies/"+t.id:"Similar Tv Shows"===t.title?e="similar_tv/"+t.id:"Recommended Movies"===t.title?e="recommended_movies/"+t.id:"Recommended Tv Shows"===t.title&&(e="recommended_tv/"+t.id);return(0,a.jsx)("button",{className:o,onClick:function(){n("/"+e)},style:{backgroundColor:t.backgroundColor},children:t.title})}}}]);
//# sourceMappingURL=287.a98b9eae.chunk.js.map