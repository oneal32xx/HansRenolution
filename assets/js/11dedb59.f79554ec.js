"use strict";(self.webpackChunkhans_renolution=self.webpackChunkhans_renolution||[]).push([[4696],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(a),g=l,h=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return a?r.createElement(h,n(n({ref:t},u),{},{components:a})):r.createElement(h,n({ref:t},u))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,n=new Array(o);n[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:l,n[1]=i;for(var s=2;s<o;s++)n[s]=a[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1829:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(7462),l=(a(7294),a(3905));const o={title:"\u5982\u4f55\u4f7f\u7528 Algolia DocSearch \u5e6b\u7db2\u7ad9\u65b0\u589e\u5168\u6587\u67e5\u8a62\u529f\u80fd",sidebar_position:11,sidebar_label:"Algolia DocSearch",description:"\u8b93\u4f7f\u7528\u8005\u5feb\u901f\u67e5\u627e\u8cc7\u8a0a\u7684\u597d\u529f\u80fd\uff01",tags:["article","Algolia"],authors:"H.J"},n=void 0,i={unversionedId:"docusaurus/2023-07-17-\u5982\u4f55\u4f7f\u7528AlgoliaDocSearch",id:"docusaurus/2023-07-17-\u5982\u4f55\u4f7f\u7528AlgoliaDocSearch",title:"\u5982\u4f55\u4f7f\u7528 Algolia DocSearch \u5e6b\u7db2\u7ad9\u65b0\u589e\u5168\u6587\u67e5\u8a62\u529f\u80fd",description:"\u8b93\u4f7f\u7528\u8005\u5feb\u901f\u67e5\u627e\u8cc7\u8a0a\u7684\u597d\u529f\u80fd\uff01",source:"@site/docs/docusaurus/2023-07-17-\u5982\u4f55\u4f7f\u7528AlgoliaDocSearch.md",sourceDirName:"docusaurus",slug:"/docusaurus/2023-07-17-\u5982\u4f55\u4f7f\u7528AlgoliaDocSearch",permalink:"/docs/docusaurus/2023-07-17-\u5982\u4f55\u4f7f\u7528AlgoliaDocSearch",draft:!1,tags:[{label:"article",permalink:"/docs/tags/article"},{label:"Algolia",permalink:"/docs/tags/algolia"}],version:"current",sidebarPosition:11,frontMatter:{title:"\u5982\u4f55\u4f7f\u7528 Algolia DocSearch \u5e6b\u7db2\u7ad9\u65b0\u589e\u5168\u6587\u67e5\u8a62\u529f\u80fd",sidebar_position:11,sidebar_label:"Algolia DocSearch",description:"\u8b93\u4f7f\u7528\u8005\u5feb\u901f\u67e5\u627e\u8cc7\u8a0a\u7684\u597d\u529f\u80fd\uff01",tags:["article","Algolia"],authors:"H.J"},sidebar:"tutorialSidebar",previous:{title:"\u5ba2\u88fd\u5316\u8a2d\u5b9a",permalink:"/docs/docusaurus/docusaurus-01"},next:{title:"Tutorial Intro",permalink:"/docs/docusaurus/\u5b98\u65b9GetStarted/intro"}},c={},s=[{value:"Docusaurus \u4f7f\u7528 Algolia DocSearch",id:"docusaurus-\u4f7f\u7528-algolia-docsearch",level:2},{value:"\u5230 Algolia DocSearch \u905e\u4ea4\u7533\u8acb",id:"\u5230-algolia-docsearch-\u905e\u4ea4\u7533\u8acb",level:3}],u={toc:s};function p(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"docusaurus-\u4f7f\u7528-algolia-docsearch"},"Docusaurus \u4f7f\u7528 Algolia DocSearch"),(0,l.kt)("h3",{id:"\u5230-algolia-docsearch-\u905e\u4ea4\u7533\u8acb"},"\u5230 Algolia DocSearch \u905e\u4ea4\u7533\u8acb"),(0,l.kt)("p",null,"\u9996\u5148\u9032\u53bb Algolia DocSearch \u7684\u4e3b\u9801\uff0c\u9ede\u9078\u5de6\u4e0a\u65b9 Apply \u9032\u53bb\u7533\u8acb\u9801\u9762"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docsearch.algolia.com/"},"Algolia DocSearch"))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Algolia01",src:a(9747).Z,width:"2878",height:"1314"}),"\n\u586b\u4e0a",(0,l.kt)("inlineCode",{parentName:"p"},"\u500b\u4eba\u7db2\u7ad9\u7684\u7db2\u5740"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"Email"),"\u3001\u4ee5\u53ca",(0,l.kt)("inlineCode",{parentName:"p"},"\u500b\u4eba\u7db2\u7ad9 Github Repo \u7db2\u5740"),"\uff0c\u6700\u5f8c\u9ede\u9078 ",(0,l.kt)("inlineCode",{parentName:"p"},"Join the program")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Algolia02",src:a(8269).Z,width:"1166",height:"1434"}),"\n\u7533\u8acb\u6210\u529f\u756b\u9762\u5982\u4e0b\uff0c\u63a5\u8457\u5c31\u7b49\u5f85 Algolia \u7684\u5be9\u6838\u4fe1\u5427"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Algolia03",src:a(215).Z,width:"1518",height:"1288"})),(0,l.kt)("p",null," \u53e6\u5916 Algolia \u7533\u8acb\u662f\u6709\u689d\u4ef6\u7684\uff0c\u7533\u8acb\u524d\u5fc5\u9808\u5148\u6ce8\u610f\uff0c\u5b98\u65b9\u7db2\u7ad9\u6709\u63d0\u4f9b ",(0,l.kt)("a",{parentName:"p",href:"https://docsearch.algolia.com/docs/who-can-apply"},"checklist")," \u5982\u4e0b\u5716"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7db2\u7ad9\u5167\u5bb9\u5fc5\u9808\u662f\u6280\u8853\u76f8\u95dc"),(0,l.kt)("li",{parentName:"ul"},"\u5fc5\u9808\u662f\u7db2\u7ad9\u7684\u64c1\u6709\u8005\uff0c\u800c\u4e14\u6709\u6b0a\u9650\u53ef\u4ee5\u904b\u7528 JavaScript snippet \u4fee\u6539\u7db2\u7ad9"),(0,l.kt)("li",{parentName:"ul"},"\u7db2\u7ad9\u5fc5\u9808\u662f\u53ef\u4ee5\u516c\u958b\u5b58\u53d6\u7684\uff0c\u539f\u56e0\u662f Algolia \u6bcf\u9031\u6703\u4f86\u722c\u4f60\u7684\u7db2\u7ad9\uff0c\u5982\u679c\u4f60\u7684\u7db2\u7ad9\u5167\u5bb9\u662f\u9700\u8981\u9a57\u8b49\u767b\u5165\u624d\u770b\u5f97\u5230\uff0c\u90a3 Algolia \u4e5f\u6c92\u8fa6\u6cd5\u722c\u5230\u4f60\u7db2\u7ad9\u7684\u5167\u5bb9"),(0,l.kt)("li",{parentName:"ul"},"\u4f60\u7684\u7db2\u7ad9\u5df2\u7d93\u4e0a\u7dda\u4e86\u4e00\u6bb5\u6642\u9593\uff0c\u800c\u4e14\u5fc5\u9808\u6709\u4e00\u4e9b\u5167\u5bb9\u4e86\uff0c\u56e0\u70ba Algolia \u4f86\u722c\u4f60\u7684\u7db2\u7ad9\u7684\u6642\u5019\uff0c\u7e3d\u4e0d\u80fd\u5167\u5bb9\u662f\u7a7a\u7a7a\u7684\u5427\uff1f\uff01")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Algolia04",src:a(5181).Z,width:"1652",height:"1040"})))}p.isMDXComponent=!0},9747:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Algolia01-77b42c6777a274435996cf4841bf7479.jpg"},8269:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Algolia02-4a8637d0878352e39988ce386c231b2a.jpg"},215:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Algolia03-428c6a3443ae6b9f60932b90a17c3124.jpg"},5181:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Algolia04-03bb28d880709d50dcc8e88b7250c9f2.jpg"}}]);