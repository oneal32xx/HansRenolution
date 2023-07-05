/*! For license information please see 949.4def0731.js.LICENSE.txt */
(self.webpackChunkhans_renolution=self.webpackChunkhans_renolution||[]).push([[949],{1262:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var i=n(7294),r=n(2389);function o(e){let{children:t,fallback:n}=e;return(0,r.Z)()?i.createElement(i.Fragment,null,t?.()):n??null}},4184:(e,t)=>{var n;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=r.apply(null,n);l&&e.push(l)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)i.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},131:(e,t,n)=>{"use strict";n.r(t),n.d(t,{InView:()=>v,default:()=>v,defaultFallbackInView:()=>c,observe:()=>f,useInView:()=>m});var i=n(7294);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}var l=new Map,a=new WeakMap,s=0,u=void 0;function c(e){u=e}function d(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(a.has(n)||(s+=1,a.set(n,s.toString())),a.get(n)):"0":e[t]);var n})).toString()}function f(e,t,n,i){if(void 0===n&&(n={}),void 0===i&&(i=u),void 0===window.IntersectionObserver&&void 0!==i){var r=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),function(){}}var o=function(e){var t=d(e),n=l.get(t);if(!n){var i,r=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var n,o=t.isIntersecting&&i.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((function(e){e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},l.set(t,n)}return n}(n),a=o.id,s=o.observer,c=o.elements,f=c.get(e)||[];return c.has(e)||c.set(e,f),f.push(t),s.observe(e),function(){f.splice(f.indexOf(t),1),0===f.length&&(c.delete(e),s.unobserve(e)),0===c.size&&(s.disconnect(),l.delete(a))}}var p=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function h(e){return"function"!=typeof e.children}var v=function(e){var t,n;function l(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),h(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=l).prototype=Object.create(n.prototype),t.prototype.constructor=t,o(t,n);var a=l.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,i=e.rootMargin,r=e.trackVisibility,o=e.delay,l=e.fallbackInView;this._unobserveCb=f(this.node,this.handleChange,{threshold:t,root:n,rootMargin:i,trackVisibility:r,delay:o},l)}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!h(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var o=this.props,l=o.children,a=o.as,s=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(o,p);return i.createElement(a||"div",r({ref:this.handleNode},s),l)},l}(i.Component);function m(e){var t=void 0===e?{}:e,n=t.threshold,r=t.delay,o=t.trackVisibility,l=t.rootMargin,a=t.root,s=t.triggerOnce,u=t.skip,c=t.initialInView,d=t.fallbackInView,p=i.useRef(),h=i.useState({inView:!!c}),v=h[0],m=h[1],g=i.useCallback((function(e){void 0!==p.current&&(p.current(),p.current=void 0),u||e&&(p.current=f(e,(function(e,t){m({inView:e,entry:t}),t.isIntersecting&&s&&p.current&&(p.current(),p.current=void 0)}),{root:a,rootMargin:l,threshold:n,trackVisibility:o,delay:r},d))}),[Array.isArray(n)?n.toString():n,a,l,s,u,o,d,r]);(0,i.useEffect)((function(){p.current||!v.entry||s||u||m({inView:!!c})}));var y=[g,v.inView,v.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}v.displayName="InView",v.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},2529:(e,t,n)=>{"use strict";t.Z=void 0;var i=l(n(7294)),r=l(n(5697)),o=l(n(4184));function l(e){return e&&e.__esModule?e:{default:e}}const a=({animate:e=!0,className:t="",layout:n="2-columns",lineColor:r="#FFF",children:l})=>("object"==typeof window&&document.documentElement.style.setProperty("--line-color",r),i.default.createElement("div",{className:(0,o.default)(t,"vertical-timeline",{"vertical-timeline--animate":e,"vertical-timeline--two-columns":"2-columns"===n,"vertical-timeline--one-column-left":"1-column"===n||"1-column-left"===n,"vertical-timeline--one-column-right":"1-column-right"===n})},l));a.propTypes={children:r.default.oneOfType([r.default.arrayOf(r.default.node),r.default.node]).isRequired,className:r.default.string,animate:r.default.bool,layout:r.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:r.default.string};var s=a;t.Z=s},7509:(e,t,n)=>{"use strict";t.Z=void 0;var i=a(n(7294)),r=a(n(5697)),o=a(n(4184)),l=n(131);function a(e){return e&&e.__esModule?e:{default:e}}const s=({children:e="",className:t="",contentArrowStyle:n=null,contentStyle:r=null,date:a="",dateClassName:s="",icon:u=null,iconClassName:c="",iconOnClick:d=null,onTimelineElementClick:f=null,iconStyle:p=null,id:h="",position:v="",style:m=null,textClassName:g="",intersectionObserverProps:y={rootMargin:"0px 0px -40px 0px",triggerOnce:!0},visible:b=!1})=>i.default.createElement(l.InView,y,(({inView:l,ref:y})=>i.default.createElement("div",{ref:y,id:h,className:(0,o.default)(t,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===v,"vertical-timeline-element--right":"right"===v,"vertical-timeline-element--no-children":""===e}),style:m},i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{style:p,onClick:d,className:(0,o.default)(c,"vertical-timeline-element-icon",{"bounce-in":l||b,"is-hidden":!(l||b)})},u),i.default.createElement("div",{style:r,onClick:f,className:(0,o.default)(g,"vertical-timeline-element-content",{"bounce-in":l||b,"is-hidden":!(l||b)})},i.default.createElement("div",{style:n,className:"vertical-timeline-element-content-arrow"}),e,i.default.createElement("span",{className:(0,o.default)(s,"vertical-timeline-element-date")},a))))));s.propTypes={children:r.default.oneOfType([r.default.arrayOf(r.default.node),r.default.node]),className:r.default.string,contentArrowStyle:r.default.shape({}),contentStyle:r.default.shape({}),date:r.default.node,dateClassName:r.default.string,icon:r.default.element,iconClassName:r.default.string,iconStyle:r.default.shape({}),iconOnClick:r.default.func,onTimelineElementClick:r.default.func,id:r.default.string,position:r.default.string,style:r.default.shape({}),textClassName:r.default.string,visible:r.default.bool,intersectionObserverProps:r.default.shape({root:r.default.object,rootMargin:r.default.string,threshold:r.default.number,triggerOnce:r.default.bool})};var u=s;t.Z=u},4313:(e,t,n)=>{"use strict";e.exports={VerticalTimeline:n(2529).Z,VerticalTimelineElement:n(7509).Z}}}]);