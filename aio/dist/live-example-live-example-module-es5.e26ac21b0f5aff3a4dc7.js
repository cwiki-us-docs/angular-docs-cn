!function(){function t(t,n){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,n)}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==i.return||i.return()}finally{if(l)throw o}}}}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{m7ka:function(e,i,a){"use strict";a.r(i),a.d(i,"LiveExampleModule",function(){return T});var o=a("ofXK"),c=a("jn67"),l=a("fXoL");function u(t,e){var n="string"==typeof e?e:e.find(function(e){return t.hasOwnProperty(e.toLowerCase())});return void 0===n?void 0:t[n.toLowerCase()]}function f(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return void 0===t?e:"false"!==t.trim()}var s=["content"];function b(t,e){if(1&t&&(l.Tb(0,"p"),l.Ac(1," You can also "),l.Tb(2,"a",8),l.Ac(3,"download this example"),l.Sb(),l.Ac(4,". "),l.Sb()),2&t){var n=l.ec(2);l.Cb(2),l.jc("href",n.zip,l.uc)}}function d(t,e){if(1&t&&(l.Tb(0,"span"),l.Tb(1,"div",5),l.Pb(2,"aio-embedded-stackblitz",6),l.Sb(),l.zc(3,b,5,1,"p",7),l.Sb()),2&t){var n=l.ec();l.Cb(1),l.kc("title",n.title),l.Cb(1),l.jc("src",n.stackblitz),l.Cb(1),l.jc("ngIf",n.enableDownload)}}function m(t,e){if(1&t&&(l.Tb(0,"span"),l.Tb(1,"a",9),l.Ac(2),l.Sb(),l.Sb()),2&t){var n=l.ec();l.Cb(1),l.kc("title",n.title),l.jc("href",n.zip,l.uc),l.Cb(1),l.Bc(n.title)}}function p(t,e){if(1&t&&(l.Tb(0,"span"),l.Ac(1," / "),l.Tb(2,"a",8),l.Ac(3,"download example"),l.Sb(),l.Sb()),2&t){var n=l.ec(2);l.Cb(2),l.jc("href",n.zip,l.uc)}}function v(t,e){if(1&t&&(l.Tb(0,"span"),l.Tb(1,"a",10),l.Ac(2),l.Sb(),l.zc(3,p,4,1,"span",7),l.Sb()),2&t){var n=l.ec();l.Cb(1),l.kc("title",n.title),l.jc("href",n.stackblitz,l.uc),l.Cb(1),l.Bc(n.title),l.Cb(1),l.jc("ngIf",n.enableDownload)}}var h,w,y,g=["*"],k=["iframe"],S=c.a+"live-examples/",C=c.a+"zips/",z=((y=function(){function e(i,r){n(this,e);var a=function(e){var n,i={},r=t(e instanceof l.l?e.nativeElement.attributes:e.attributes);try{for(r.s();!(n=r.n()).done;){var a=n.value;i[a.name.toLowerCase()]=a.value}}catch(o){r.e(o)}finally{r.f()}return i}(i),o=this.getExampleDir(a,r.path(!1)),c=this.getStackblitzName(a);this.mode=this.getMode(a),this.enableDownload=this.getEnableDownload(a),this.stackblitz=this.getStackblitz(o,c,"embedded"===this.mode),this.zip=this.getZip(o,c),this.title=this.getTitle(a)}return r(e,[{key:"ngAfterContentInit",value:function(){var t=this.content.nativeElement.textContent.trim();t&&(this.title=t)}},{key:"getEnableDownload",value:function(t){return!f(u(t,"noDownload"))}},{key:"getExampleDir",value:function(t,e){var n=u(t,"name");if(!n){var i=e.match(/[^/?#]+(?=\/?(?:\?|#|$))/);n=i?i[0]:"index"}return n.trim()}},{key:"getMode",value:function(t){var e=f(u(t,"downloadOnly")),n=f(u(t,"embedded"));return e?"downloadOnly":n?"embedded":"default"}},{key:"getStackblitz",value:function(t,e,n){return"".concat(S).concat(t,"/").concat(e,"stackblitz.html").concat(n?"?ctl=1":"")}},{key:"getStackblitzName",value:function(t){var e=(u(t,"stackblitz")||"").trim();return e&&e+"."}},{key:"getTitle",value:function(t){return(u(t,"title")||"live example").trim()}},{key:"getZip",value:function(t,e){var n=t.split("/")[0];return"".concat(C).concat(t,"/").concat(e).concat(n,".zip")}}]),e}()).\u0275fac=function(t){return new(t||y)(l.Ob(l.l),l.Ob(o.g))},y.\u0275cmp=l.Ib({type:y,selectors:[["live-example"]],viewQuery:function(t,e){var n;1&t&&l.Ec(s,3),2&t&&l.oc(n=l.bc())&&(e.content=n.first)},ngContentSelectors:g,decls:7,vars:3,consts:[[2,"display","none"],["content",""],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[3,"title"],[3,"src"],[4,"ngIf"],["download","","title","Download example",3,"href"],["download","",3,"href","title"],["target","_blank",3,"href","title"]],template:function(t,e){1&t&&(l.ic(),l.Tb(0,"span",0,1),l.hc(2),l.Sb(),l.Tb(3,"span",2),l.zc(4,d,4,3,"span",3),l.zc(5,m,3,3,"span",3),l.zc(6,v,4,4,"span",4),l.Sb()),2&t&&(l.Cb(3),l.jc("ngSwitch",e.mode),l.Cb(1),l.jc("ngSwitchCase","embedded"),l.Cb(1),l.jc("ngSwitchCase","downloadOnly"))},directives:function(){return[o.m,o.n,o.o,j,o.k]},encapsulation:2}),y),j=((w=function(){function t(){n(this,t)}return r(t,[{key:"ngAfterViewInit",value:function(){this.iframe&&(this.iframe.nativeElement.src=this.src)}}]),t}()).\u0275fac=function(t){return new(t||w)},w.\u0275cmp=l.Ib({type:w,selectors:[["aio-embedded-stackblitz"]],viewQuery:function(t,e){var n;1&t&&l.Ec(k,3),2&t&&l.oc(n=l.bc())&&(e.iframe=n.first)},inputs:{src:"src"},decls:2,vars:0,consts:[["frameborder","0","width","100%","height","100%"],["iframe",""]],template:function(t,e){1&t&&l.Pb(0,"iframe",0,1)},styles:["iframe[_ngcontent-%COMP%] { min-height: 400px; }"]}),w),T=((h=function t(){n(this,t),this.customElementComponent=z}).\u0275mod=l.Mb({type:h}),h.\u0275inj=l.Lb({factory:function(t){return new(t||h)},imports:[[o.c]]}),h)}}])}();
//# sourceMappingURL=live-example-live-example-module-es5.e26ac21b0f5aff3a4dc7.js.map