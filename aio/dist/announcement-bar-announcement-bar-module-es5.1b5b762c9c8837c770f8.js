!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"5UAH":function(t,r,o){"use strict";o.r(r),o.d(r,"AnnouncementBarModule",function(){return w});var a=o("ofXK"),c=o("tk/3"),i=o("PCNd"),u=o("JIr8"),s=o("lJxs"),f=o("jn67"),b=o("fXoL"),l=o("vHPH");function m(n,e){if(1&n&&(b.Tb(0,"div",1),b.Tb(1,"div",2),b.Pb(2,"img",3),b.Pb(3,"p",4),b.Tb(4,"a",5),b.Ac(5,"Learn More"),b.Sb(),b.Sb(),b.Sb()),2&n){var t=b.ec();b.Cb(2),b.jc("src",t.announcement.imageUrl,b.uc),b.Cb(1),b.jc("innerHTML",t.announcement.message,b.tc),b.Cb(1),b.jc("href",t.announcement.linkUrl,b.uc)}}var p,g,v=f.a+"announcements.json",d=((g=function(){function t(e,r){n(this,t),this.http=e,this.logger=r}var r,o,a;return r=t,(o=[{key:"ngOnInit",value:function(){var n=this;this.http.get(v).pipe(Object(u.a)(function(e){return n.logger.error(new Error("".concat(v," request failed: ").concat(e.message))),[]}),Object(s.a)(function(e){return n.findCurrentAnnouncement(e)}),Object(u.a)(function(e){return n.logger.error(new Error("".concat(v," contains invalid data: ").concat(e.message))),[]})).subscribe(function(e){return n.announcement=e})}},{key:"findCurrentAnnouncement",value:function(n){return n.filter(function(n){return new Date(n.startDate).valueOf()<Date.now()}).filter(function(n){return new Date(n.endDate).valueOf()>Date.now()})[0]}}])&&e(r.prototype,o),a&&e(r,a),t}()).\u0275fac=function(n){return new(n||g)(b.Ob(c.a),b.Ob(l.a))},g.\u0275cmp=b.Ib({type:g,selectors:[["aio-announcement-bar"]],decls:1,vars:1,consts:[["class","homepage-container",4,"ngIf"],[1,"homepage-container"],[1,"announcement-bar"],["alt","",3,"src"],[3,"innerHTML"],[1,"button",3,"href"]],template:function(n,e){1&n&&b.zc(0,m,6,3,"div",0),2&n&&b.jc("ngIf",e.announcement)},directives:[a.k],encapsulation:2}),g),w=((p=function e(){n(this,e),this.customElementComponent=d}).\u0275mod=b.Mb({type:p}),p.\u0275inj=b.Lb({factory:function(n){return new(n||p)},imports:[[a.c,i.a,c.b]]}),p)}}])}();
//# sourceMappingURL=announcement-bar-announcement-bar-module-es5.1b5b762c9c8837c770f8.js.map