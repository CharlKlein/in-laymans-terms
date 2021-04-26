(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,5],{260:function(t,e,n){"use strict";n.r(e);var r={props:{author:{type:Object,required:!0}}},l=n(31),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("NuxtLink",{attrs:{to:"/blog/author/"+t.author.name}},[n("img",{attrs:{src:t.author.img}}),t._v(" "),n("div",[n("h4",[t._v("Author")]),t._v(" "),n("p",[t._v(t._s(t.author.name))]),t._v(" "),n("p",[t._v(t._s(t.author.bio))])])])}),[],!1,null,null,null);e.default=component.exports},261:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},l=n(31),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between"},[t.prev?n("NuxtLink",{staticClass:"text-primary font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.prev.slug}}}},[t._v("\n    "+t._s(t.prev.title)+"\n  ")]):n("span",[t._v(" ")]),t._v(" "),t.next?n("NuxtLink",{staticClass:"font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.next.slug}}}},[t._v("\n    "+t._s(t.next.title)+"\n  ")]):n("span",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports},280:function(t,e,n){"use strict";n.r(e);var r=n(19),l=n(5),c=(n(37),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,l,article,c,o,v,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,l=t.params,e.next=3,n("articles",l.slug).fetch();case 3:return article=e.sent,e.next=6,n("articles").only(["title","slug"]).sortBy("createdAt","asc").surround(l.slug).fetch();case 6:return c=e.sent,o=Object(r.a)(c,2),v=o[0],f=o[1],e.abrupt("return",{article:article,prev:v,next:f});case 11:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),o=n(31),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",[n("div",{staticClass:"max-w-6xl mx-auto px-5 py-24"},[n("div",{staticClass:"w-full mb-16"},[n("h1",{staticClass:"title-font mb-2 text-4xl font-extrabold leading-10 tracking-tight text-left sm:text-5xl sm:leading-none md:text-6xl"},[t._v("\n        "+t._s(t.article.title)+"\n      ")]),t._v(" "),n("p",{staticClass:"lg:w-1/2 w-full leading-relaxed text-base"},[t._v("\n        "+t._s(t.article.description)+"\n      ")]),t._v(" "),n("div",{staticClass:"mt-2 leading-none w-full"},t._l(t.article.categories,(function(e){return n("span",{key:e,staticClass:"mr-3 inline-flex items-center leading-none text-sm  py-1"},[n("svg",{staticClass:"fill-current w-5 h-5 mr-2 text-blue-500",attrs:{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M414.08,204.373L222.187,12.48C214.4,4.8,203.733,0,192,0H42.667C19.093,0,0,19.093,0,42.667V192    c0,11.84,4.8,22.507,12.587,30.187l192,192c7.68,7.68,18.347,12.48,30.08,12.48s22.507-4.8,30.187-12.48l149.333-149.333    c7.68-7.787,12.48-18.453,12.48-30.187C426.667,222.827,421.867,212.16,414.08,204.373z M74.667,106.667    c-17.707,0-32-14.293-32-32s14.293-32,32-32s32,14.293,32,32S92.373,106.667,74.667,106.667z"}})]),t._v("\n          "+t._s(e)+"\n        ")])})),0)]),t._v(" "),n("div",{staticClass:"w-full mb-20"},[n("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),n("div",{staticClass:"w-full mb-20"},[n("p",[t._v("Article last updated: "+t._s(t.formatDate(t.article.updatedAt)))]),t._v(" "),n("author",{attrs:{author:t.article.author}})],1),t._v(" "),n("div",{staticClass:"w-full mb-20"},[n("prev-next",{attrs:{prev:t.prev,next:t.next}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Author:n(260).default,PrevNext:n(261).default})}}]);