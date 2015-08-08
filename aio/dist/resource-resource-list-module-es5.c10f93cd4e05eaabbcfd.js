!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"6U+v":function(t,n,i){"use strict";i.r(n),i.d(n,"ResourceListModule",function(){return T});var o,c=i("ofXK"),s=i("fXoL"),a=i("lJxs"),u=i("qZ0a"),b=i("jn67"),l=i("tk/3"),f=b.a+"resources.json",d=((o=function(){function t(r){e(this,t),this.http=r,this.categories=this.getCategories()}return r(t,[{key:"getCategories",value:function(){var e=this.http.get(f).pipe(Object(a.a)(function(e){return t=e,Object.keys(t).map(function(e){var r=t[e];return{id:C(e),title:e,order:r.order,subCategories:p(r.subCategories,e)}}).sort(v);var t}),Object(u.a)());return e.connect(),e}}]),t}()).\u0275fac=function(e){return new(e||o)(s.Xb(l.a))},o.\u0275prov=s.Kb({token:o,factory:o.\u0275fac}),o);function p(e,t){return Object.keys(e).map(function(r){var n=e[r];return{id:C(r),title:r,order:n.order,resources:g(n.resources,r,t)}}).sort(v)}function g(e,t,r){return Object.keys(e).map(function(n){var i=e[n];return i.category=r,i.subCategory=t,i.id=C(n),i}).sort(y)}function v(e,t){return e.order===t.order?y(e,t):e.order>t.order?1:-1}function y(e,t){return e.title.toUpperCase()>t.title.toUpperCase()?1:-1}function C(e){return e.toLowerCase().replace(/\s+/g,"-")}var h=i("/lUL");function k(e,t){if(1&e){var r=s.Ub();s.Tb(0,"a",5),s.ac("click",function(){s.sc(r);var e=t.$implicit;return s.ec().selectCategory(e.id)})("keyup.enter",function(){s.sc(r);var e=t.$implicit;return s.ec().selectCategory(e.id)}),s.Ac(1),s.Sb()}if(2&e){var n=t.$implicit,i=s.ec();s.Gb("selected",n.id==i.selectedCategory.id),s.Cb(1),s.Bc(n.title)}}function m(e,t){if(1&e&&(s.Tb(0,"div"),s.Tb(1,"div",8),s.Tb(2,"a",9),s.Tb(3,"h4"),s.Ac(4),s.Sb(),s.Tb(5,"p",10),s.Ac(6),s.Sb(),s.Sb(),s.Sb(),s.Sb()),2&e){var r=t.$implicit;s.Cb(2),s.jc("href",r.url,s.uc),s.Cb(2),s.Bc(r.title),s.Cb(2),s.Bc(r.desc||"No Description")}}function w(e,t){if(1&e&&(s.Tb(0,"div"),s.Pb(1,"a",6),s.Tb(2,"h3",7),s.Ac(3),s.Sb(),s.zc(4,m,7,3,"div",4),s.Sb()),2&e){var r=t.$implicit;s.Cb(1),s.kc("id",r.id),s.Cb(2),s.Bc(r.title),s.Cb(1),s.jc("ngForOf",r.resources)}}var S,j,O=((j=function(){function t(r,n){e(this,t),this.resourceService=r,this.locationService=n}return r(t,[{key:"ngOnInit",value:function(){var e=this,t=this.locationService.search().category||"";this.resourceService.categories.subscribe(function(r){e.categories=r,e.selectCategory(t)})}},{key:"selectCategory",value:function(e){e=e.toLowerCase(),this.selectedCategory=this.categories.find(function(t){return t.id.toLowerCase()===e})||this.categories[0],this.locationService.setSearch("",{category:this.selectedCategory.id})}}]),t}()).\u0275fac=function(e){return new(e||j)(s.Ob(d),s.Ob(h.a))},j.\u0275cmp=s.Ib({type:j,selectors:[["aio-resource-list"]],decls:5,vars:2,consts:[[1,"center-layout"],[1,"flex-center","group-buttons"],["class","button mat-button filter-button",3,"selected","click","keyup.enter",4,"ngFor","ngForOf"],[1,"showcase"],[4,"ngFor","ngForOf"],[1,"button","mat-button","filter-button",3,"click","keyup.enter"],[3,"id"],[1,"subcategory-title"],[1,"resource-item"],["rel","noopener","target","_blank",1,"resource-row-link",3,"href"],[1,"resource-description"]],template:function(e,t){1&e&&(s.Tb(0,"div",0),s.Tb(1,"div",1),s.zc(2,k,2,3,"a",2),s.Sb(),s.Tb(3,"div",3),s.zc(4,w,5,3,"div",4),s.Sb(),s.Sb()),2&e&&(s.Cb(2),s.jc("ngForOf",t.categories),s.Cb(2),s.jc("ngForOf",null==t.selectedCategory?null:t.selectedCategory.subCategories))},directives:[c.j],encapsulation:2}),j),T=((S=function t(){e(this,t),this.customElementComponent=O}).\u0275mod=s.Mb({type:S}),S.\u0275inj=s.Lb({factory:function(e){return new(e||S)},providers:[d],imports:[[c.c]]}),S)}}])}();
//# sourceMappingURL=resource-resource-list-module-es5.c10f93cd4e05eaabbcfd.js.map