(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{g5Zp:function(t,e,i){"use strict";i.r(e),i.d(e,"CodeTabsModule",function(){return kt});var a=i("ofXK"),n=i("6CTB"),s=i("fXoL"),o=i("R1ws"),r=i("FKr1");const c=["*",[["mat-card-footer"]]],l=["*","mat-card-footer"];let b=(()=>{class t{constructor(t){this._animationMode=t}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(o.a,8))},t.\u0275cmp=s.Ib({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(t,e){2&t&&s.Gb("_mat-animation-noopable","NoopAnimations"===e._animationMode)},exportAs:["matCard"],ngContentSelectors:l,decls:2,vars:0,template:function(t,e){1&t&&(s.ic(c),s.hc(0),s.hc(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),t})(),d=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[r.b],r.b]}),t})();var h=i("u47x"),m=i("GU7r"),u=i("+rOU"),p=i("XNiG"),g=i("quSY"),_=i("VRyK"),f=i("xgIS"),x=i("LRne"),y=i("PqYM"),v=i("R0Ic"),C=i("JX91"),w=i("/uUt"),O=i("1G5W"),I=i("8LU1"),T=i("nLfN"),k=i("FtGj"),S=i("cH1L"),L=i("vxfF");function P(t,e){1&t&&s.hc(0)}const D=["*"];function j(t,e){}const A=function(t){return{animationDuration:t}},E=function(t,e){return{value:t,params:e}},R=["tabBodyWrapper"],F=["tabHeader"];function H(t,e){}function M(t,e){if(1&t&&s.zc(0,H,0,0,"ng-template",9),2&t){const t=s.ec().$implicit;s.jc("cdkPortalOutlet",t.templateLabel)}}function B(t,e){if(1&t&&s.Ac(0),2&t){const t=s.ec().$implicit;s.Bc(t.textLabel)}}function z(t,e){if(1&t){const t=s.Ub();s.Tb(0,"div",6),s.ac("click",function(){s.sc(t);const i=e.$implicit,a=e.index,n=s.ec(),o=s.pc(1);return n._handleClick(i,o,a)})("cdkFocusChange",function(i){s.sc(t);const a=e.index;return s.ec()._tabFocusChanged(i,a)}),s.Tb(1,"div",7),s.zc(2,M,1,1,"ng-template",8),s.zc(3,B,1,1,"ng-template",8),s.Sb(),s.Sb()}if(2&t){const t=e.$implicit,i=e.index,a=s.ec();s.Gb("mat-tab-label-active",a.selectedIndex==i),s.jc("id",a._getTabLabelId(i))("disabled",t.disabled)("matRippleDisabled",t.disabled||a.disableRipple),s.Db("tabIndex",a._getTabIndex(t,i))("aria-posinset",i+1)("aria-setsize",a._tabs.length)("aria-controls",a._getTabContentId(i))("aria-selected",a.selectedIndex==i)("aria-label",t.ariaLabel||null)("aria-labelledby",!t.ariaLabel&&t.ariaLabelledby?t.ariaLabelledby:null),s.Cb(2),s.jc("ngIf",t.templateLabel),s.Cb(1),s.jc("ngIf",!t.templateLabel)}}function W(t,e){if(1&t){const t=s.Ub();s.Tb(0,"mat-tab-body",10),s.ac("_onCentered",function(){return s.sc(t),s.ec()._removeTabBodyWrapperHeight()})("_onCentering",function(e){return s.sc(t),s.ec()._setTabBodyWrapperHeight(e)}),s.Sb()}if(2&t){const t=e.$implicit,i=e.index,a=s.ec();s.Gb("mat-tab-body-active",a.selectedIndex==i),s.jc("id",a._getTabContentId(i))("content",t.content)("position",t.position)("origin",t.origin)("animationDuration",a.animationDuration),s.Db("aria-labelledby",a._getTabLabelId(i))}}const G=["tabListContainer"],V=["tabList"],$=["nextPaginator"],J=["previousPaginator"],N=new s.r("MatInkBarPositioner",{providedIn:"root",factory:function(){return t=>({left:t?(t.offsetLeft||0)+"px":"0",width:t?(t.offsetWidth||0)+"px":"0"})}});let Q=(()=>{class t{constructor(t,e,i,a){this._elementRef=t,this._ngZone=e,this._inkBarPositioner=i,this._animationMode=a}alignToElement(t){this.show(),"undefined"!=typeof requestAnimationFrame?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._setStyles(t))}):this._setStyles(t)}show(){this._elementRef.nativeElement.style.visibility="visible"}hide(){this._elementRef.nativeElement.style.visibility="hidden"}_setStyles(t){const e=this._inkBarPositioner(t),i=this._elementRef.nativeElement;i.style.left=e.left,i.style.width=e.width}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(s.l),s.Ob(s.A),s.Ob(N),s.Ob(o.a,8))},t.\u0275dir=s.Jb({type:t,selectors:[["mat-ink-bar"]],hostAttrs:[1,"mat-ink-bar"],hostVars:2,hostBindings:function(t,e){2&t&&s.Gb("_mat-animation-noopable","NoopAnimations"===e._animationMode)}}),t})();const q=new s.r("MatTabContent"),U=new s.r("MatTabLabel");let Y=(()=>{class t extends u.b{}return t.\u0275fac=function(e){return K(e||t)},t.\u0275dir=s.Jb({type:t,selectors:[["","mat-tab-label",""],["","matTabLabel",""]],features:[s.Bb([{provide:U,useExisting:t}]),s.zb]}),t})();const K=s.Vb(Y);class X{}const Z=Object(r.h)(X),tt=new s.r("MAT_TAB_GROUP");let et=(()=>{class t extends Z{constructor(t,e){super(),this._viewContainerRef=t,this._closestTabGroup=e,this.textLabel="",this._contentPortal=null,this._stateChanges=new p.a,this.position=null,this.origin=null,this.isActive=!1}get templateLabel(){return this._templateLabel}set templateLabel(t){this._setTemplateLabelInput(t)}get content(){return this._contentPortal}ngOnChanges(t){(t.hasOwnProperty("textLabel")||t.hasOwnProperty("disabled"))&&this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}ngOnInit(){this._contentPortal=new u.g(this._explicitContent||this._implicitContent,this._viewContainerRef)}_setTemplateLabelInput(t){t&&(this._templateLabel=t)}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(s.R),s.Ob(tt))},t.\u0275cmp=s.Ib({type:t,selectors:[["mat-tab"]],contentQueries:function(t,e,i){if(1&t&&(s.Hb(i,U,1),s.Hb(i,q,3,s.N)),2&t){let t;s.oc(t=s.bc())&&(e.templateLabel=t.first),s.oc(t=s.bc())&&(e._explicitContent=t.first)}},viewQuery:function(t,e){if(1&t&&s.Ec(s.N,3),2&t){let t;s.oc(t=s.bc())&&(e._implicitContent=t.first)}},inputs:{disabled:"disabled",textLabel:["label","textLabel"],ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"]},exportAs:["matTab"],features:[s.zb,s.Ab],ngContentSelectors:D,decls:1,vars:0,template:function(t,e){1&t&&(s.ic(),s.zc(0,P,1,0,"ng-template"))},encapsulation:2}),t})();const it={translateTab:Object(v.j)("translateTab",[Object(v.g)("center, void, left-origin-center, right-origin-center",Object(v.h)({transform:"none"})),Object(v.g)("left",Object(v.h)({transform:"translate3d(-100%, 0, 0)",minHeight:"1px"})),Object(v.g)("right",Object(v.h)({transform:"translate3d(100%, 0, 0)",minHeight:"1px"})),Object(v.i)("* => left, * => right, left => center, right => center",Object(v.e)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")),Object(v.i)("void => left-origin-center",[Object(v.h)({transform:"translate3d(-100%, 0, 0)"}),Object(v.e)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")]),Object(v.i)("void => right-origin-center",[Object(v.h)({transform:"translate3d(100%, 0, 0)"}),Object(v.e)("{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)")])])};let at=(()=>{class t extends u.c{constructor(t,e,i,a){super(t,e,a),this._host=i,this._centeringSub=g.a.EMPTY,this._leavingSub=g.a.EMPTY}ngOnInit(){super.ngOnInit(),this._centeringSub=this._host._beforeCentering.pipe(Object(C.a)(this._host._isCenterPosition(this._host._position))).subscribe(t=>{t&&!this.hasAttached()&&this.attach(this._host._content)}),this._leavingSub=this._host._afterLeavingCenter.subscribe(()=>{this.detach()})}ngOnDestroy(){super.ngOnDestroy(),this._centeringSub.unsubscribe(),this._leavingSub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(s.j),s.Ob(s.R),s.Ob(Object(s.V)(()=>st)),s.Ob(a.d))},t.\u0275dir=s.Jb({type:t,selectors:[["","matTabBodyHost",""]],features:[s.zb]}),t})(),nt=(()=>{class t{constructor(t,e,i){this._elementRef=t,this._dir=e,this._dirChangeSubscription=g.a.EMPTY,this._translateTabComplete=new p.a,this._onCentering=new s.n,this._beforeCentering=new s.n,this._afterLeavingCenter=new s.n,this._onCentered=new s.n(!0),this.animationDuration="500ms",e&&(this._dirChangeSubscription=e.change.subscribe(t=>{this._computePositionAnimationState(t),i.markForCheck()})),this._translateTabComplete.pipe(Object(w.a)((t,e)=>t.fromState===e.fromState&&t.toState===e.toState)).subscribe(t=>{this._isCenterPosition(t.toState)&&this._isCenterPosition(this._position)&&this._onCentered.emit(),this._isCenterPosition(t.fromState)&&!this._isCenterPosition(this._position)&&this._afterLeavingCenter.emit()})}set position(t){this._positionIndex=t,this._computePositionAnimationState()}ngOnInit(){"center"==this._position&&null!=this.origin&&(this._position=this._computePositionFromOrigin(this.origin))}ngOnDestroy(){this._dirChangeSubscription.unsubscribe(),this._translateTabComplete.complete()}_onTranslateTabStarted(t){const e=this._isCenterPosition(t.toState);this._beforeCentering.emit(e),e&&this._onCentering.emit(this._elementRef.nativeElement.clientHeight)}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_isCenterPosition(t){return"center"==t||"left-origin-center"==t||"right-origin-center"==t}_computePositionAnimationState(t=this._getLayoutDirection()){this._position=this._positionIndex<0?"ltr"==t?"left":"right":this._positionIndex>0?"ltr"==t?"right":"left":"center"}_computePositionFromOrigin(t){const e=this._getLayoutDirection();return"ltr"==e&&t<=0||"rtl"==e&&t>0?"left-origin-center":"right-origin-center"}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(s.l),s.Ob(S.b,8),s.Ob(s.h))},t.\u0275dir=s.Jb({type:t,inputs:{animationDuration:"animationDuration",position:"position",_content:["content","_content"],origin:"origin"},outputs:{_onCentering:"_onCentering",_beforeCentering:"_beforeCentering",_afterLeavingCenter:"_afterLeavingCenter",_onCentered:"_onCentered"}}),t})(),st=(()=>{class t extends nt{constructor(t,e,i){super(t,e,i)}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(s.l),s.Ob(S.b,8),s.Ob(s.h))},t.\u0275cmp=s.Ib({type:t,selectors:[["mat-tab-body"]],viewQuery:function(t,e){if(1&t&&s.Ec(u.c,1),2&t){let t;s.oc(t=s.bc())&&(e._portalHost=t.first)}},hostAttrs:[1,"mat-tab-body"],features:[s.zb],decls:3,vars:6,consts:[["cdkScrollable","",1,"mat-tab-body-content"],["content",""],["matTabBodyHost",""]],template:function(t,e){1&t&&(s.Tb(0,"div",0,1),s.ac("@translateTab.start",function(t){return e._onTranslateTabStarted(t)})("@translateTab.done",function(t){return e._translateTabComplete.next(t)}),s.zc(2,j,0,0,"ng-template",2),s.Sb()),2&t&&s.jc("@translateTab",s.nc(3,E,e._position,s.mc(1,A,e.animationDuration)))},directives:[at],styles:[".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"],encapsulation:2,data:{animation:[it.translateTab]}}),t})();const ot=new s.r("MAT_TABS_CONFIG");let rt=0;class ct{}class lt{constructor(t){this._elementRef=t}}const bt=Object(r.f)(Object(r.g)(lt),"primary");let dt=(()=>{class t extends bt{constructor(t,e,i,a){super(t),this._changeDetectorRef=e,this._animationMode=a,this._tabs=new s.E,this._indexToSelect=0,this._tabBodyWrapperHeight=0,this._tabsSubscription=g.a.EMPTY,this._tabLabelSubscription=g.a.EMPTY,this._selectedIndex=null,this.headerPosition="above",this.selectedIndexChange=new s.n,this.focusChange=new s.n,this.animationDone=new s.n,this.selectedTabChange=new s.n(!0),this._groupId=rt++,this.animationDuration=i&&i.animationDuration?i.animationDuration:"500ms",this.disablePagination=!(!i||null==i.disablePagination)&&i.disablePagination,this.dynamicHeight=!(!i||null==i.dynamicHeight)&&i.dynamicHeight}get dynamicHeight(){return this._dynamicHeight}set dynamicHeight(t){this._dynamicHeight=Object(I.b)(t)}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){this._indexToSelect=Object(I.e)(t,null)}get animationDuration(){return this._animationDuration}set animationDuration(t){this._animationDuration=/^\d+$/.test(t)?t+"ms":t}get backgroundColor(){return this._backgroundColor}set backgroundColor(t){const e=this._elementRef.nativeElement;e.classList.remove("mat-background-"+this.backgroundColor),t&&e.classList.add("mat-background-"+t),this._backgroundColor=t}ngAfterContentChecked(){const t=this._indexToSelect=this._clampTabIndex(this._indexToSelect);if(this._selectedIndex!=t){const e=null==this._selectedIndex;e||this.selectedTabChange.emit(this._createChangeEvent(t)),Promise.resolve().then(()=>{this._tabs.forEach((e,i)=>e.isActive=i===t),e||this.selectedIndexChange.emit(t)})}this._tabs.forEach((e,i)=>{e.position=i-t,null==this._selectedIndex||0!=e.position||e.origin||(e.origin=t-this._selectedIndex)}),this._selectedIndex!==t&&(this._selectedIndex=t,this._changeDetectorRef.markForCheck())}ngAfterContentInit(){this._subscribeToAllTabChanges(),this._subscribeToTabLabels(),this._tabsSubscription=this._tabs.changes.subscribe(()=>{if(this._clampTabIndex(this._indexToSelect)===this._selectedIndex){const t=this._tabs.toArray();for(let e=0;e<t.length;e++)if(t[e].isActive){this._indexToSelect=this._selectedIndex=e;break}}this._changeDetectorRef.markForCheck()})}_subscribeToAllTabChanges(){this._allTabs.changes.pipe(Object(C.a)(this._allTabs)).subscribe(t=>{this._tabs.reset(t.filter(t=>t._closestTabGroup===this)),this._tabs.notifyOnChanges()})}ngOnDestroy(){this._tabs.destroy(),this._tabsSubscription.unsubscribe(),this._tabLabelSubscription.unsubscribe()}realignInkBar(){this._tabHeader&&this._tabHeader._alignInkBarToSelectedTab()}_focusChanged(t){this.focusChange.emit(this._createChangeEvent(t))}_createChangeEvent(t){const e=new ct;return e.index=t,this._tabs&&this._tabs.length&&(e.tab=this._tabs.toArray()[t]),e}_subscribeToTabLabels(){this._tabLabelSubscription&&this._tabLabelSubscription.unsubscribe(),this._tabLabelSubscription=Object(_.a)(...this._tabs.map(t=>t._stateChanges)).subscribe(()=>this._changeDetectorRef.markForCheck())}_clampTabIndex(t){return Math.min(this._tabs.length-1,Math.max(t||0,0))}_getTabLabelId(t){return`mat-tab-label-${this._groupId}-${t}`}_getTabContentId(t){return`mat-tab-content-${this._groupId}-${t}`}_setTabBodyWrapperHeight(t){if(!this._dynamicHeight||!this._tabBodyWrapperHeight)return;const e=this._tabBodyWrapper.nativeElement;e.style.height=this._tabBodyWrapperHeight+"px",this._tabBodyWrapper.nativeElement.offsetHeight&&(e.style.height=t+"px")}_removeTabBodyWrapperHeight(){const t=this._tabBodyWrapper.nativeElement;this._tabBodyWrapperHeight=t.clientHeight,t.style.height="",this.animationDone.emit()}_handleClick(t,e,i){t.disabled||(this.selectedIndex=e.focusIndex=i)}_getTabIndex(t,e){return t.disabled?null:this.selectedIndex===e?0:-1}_tabFocusChanged(t,e){t&&(this._tabHeader.focusIndex=e)}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(s.l),s.Ob(s.h),s.Ob(ot,8),s.Ob(o.a,8))},t.\u0275dir=s.Jb({type:t,inputs:{headerPosition:"headerPosition",animationDuration:"animationDuration",disablePagination:"disablePagination",dynamicHeight:"dynamicHeight",selectedIndex:"selectedIndex",backgroundColor:"backgroundColor"},outputs:{selectedIndexChange:"selectedIndexChange",focusChange:"focusChange",animationDone:"animationDone",selectedTabChange:"selectedTabChange"},features:[s.zb]}),t})(),ht=(()=>{class t extends dt{constructor(t,e,i,a){super(t,e,i,a)}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(s.l),s.Ob(s.h),s.Ob(ot,8),s.Ob(o.a,8))},t.\u0275cmp=s.Ib({type:t,selectors:[["mat-tab-group"]],contentQueries:function(t,e,i){if(1&t&&s.Hb(i,et,1),2&t){let t;s.oc(t=s.bc())&&(e._allTabs=t)}},viewQuery:function(t,e){if(1&t&&(s.Ec(R,1),s.Ec(F,1)),2&t){let t;s.oc(t=s.bc())&&(e._tabBodyWrapper=t.first),s.oc(t=s.bc())&&(e._tabHeader=t.first)}},hostAttrs:[1,"mat-tab-group"],hostVars:4,hostBindings:function(t,e){2&t&&s.Gb("mat-tab-group-dynamic-height",e.dynamicHeight)("mat-tab-group-inverted-header","below"===e.headerPosition)},inputs:{color:"color",disableRipple:"disableRipple"},exportAs:["matTabGroup"],features:[s.Bb([{provide:tt,useExisting:t}]),s.zb],decls:6,vars:7,consts:[[3,"selectedIndex","disableRipple","disablePagination","indexFocused","selectFocusedIndex"],["tabHeader",""],["class","mat-tab-label mat-focus-indicator","role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",3,"id","mat-tab-label-active","disabled","matRippleDisabled","click","cdkFocusChange",4,"ngFor","ngForOf"],[1,"mat-tab-body-wrapper"],["tabBodyWrapper",""],["role","tabpanel",3,"id","mat-tab-body-active","content","position","origin","animationDuration","_onCentered","_onCentering",4,"ngFor","ngForOf"],["role","tab","matTabLabelWrapper","","mat-ripple","","cdkMonitorElementFocus","",1,"mat-tab-label","mat-focus-indicator",3,"id","disabled","matRippleDisabled","click","cdkFocusChange"],[1,"mat-tab-label-content"],[3,"ngIf"],[3,"cdkPortalOutlet"],["role","tabpanel",3,"id","content","position","origin","animationDuration","_onCentered","_onCentering"]],template:function(t,e){1&t&&(s.Tb(0,"mat-tab-header",0,1),s.ac("indexFocused",function(t){return e._focusChanged(t)})("selectFocusedIndex",function(t){return e.selectedIndex=t}),s.zc(2,z,4,14,"div",2),s.Sb(),s.Tb(3,"div",3,4),s.zc(5,W,1,8,"mat-tab-body",5),s.Sb()),2&t&&(s.jc("selectedIndex",e.selectedIndex||0)("disableRipple",e.disableRipple)("disablePagination",e.disablePagination),s.Cb(2),s.jc("ngForOf",e._tabs),s.Cb(1),s.Gb("_mat-animation-noopable","NoopAnimations"===e._animationMode),s.Cb(2),s.jc("ngForOf",e._tabs))},directives:function(){return[xt,a.j,pt,r.c,h.b,a.k,u.c,st]},styles:[".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"],encapsulation:2}),t})();class mt{}const ut=Object(r.h)(mt);let pt=(()=>{class t extends ut{constructor(t){super(),this.elementRef=t}focus(){this.elementRef.nativeElement.focus()}getOffsetLeft(){return this.elementRef.nativeElement.offsetLeft}getOffsetWidth(){return this.elementRef.nativeElement.offsetWidth}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(s.l))},t.\u0275dir=s.Jb({type:t,selectors:[["","matTabLabelWrapper",""]],hostVars:3,hostBindings:function(t,e){2&t&&(s.Db("aria-disabled",!!e.disabled),s.Gb("mat-tab-disabled",e.disabled))},inputs:{disabled:"disabled"},features:[s.zb]}),t})();const gt=Object(T.e)({passive:!0});let _t=(()=>{class t{constructor(t,e,i,a,n,o,r){this._elementRef=t,this._changeDetectorRef=e,this._viewportRuler=i,this._dir=a,this._ngZone=n,this._platform=o,this._animationMode=r,this._scrollDistance=0,this._selectedIndexChanged=!1,this._destroyed=new p.a,this._showPaginationControls=!1,this._disableScrollAfter=!0,this._disableScrollBefore=!0,this._stopScrolling=new p.a,this.disablePagination=!1,this._selectedIndex=0,this.selectFocusedIndex=new s.n,this.indexFocused=new s.n,n.runOutsideAngular(()=>{Object(f.a)(t.nativeElement,"mouseleave").pipe(Object(O.a)(this._destroyed)).subscribe(()=>{this._stopInterval()})})}get selectedIndex(){return this._selectedIndex}set selectedIndex(t){t=Object(I.e)(t),this._selectedIndex!=t&&(this._selectedIndexChanged=!0,this._selectedIndex=t,this._keyManager&&this._keyManager.updateActiveItem(t))}ngAfterViewInit(){Object(f.a)(this._previousPaginator.nativeElement,"touchstart",gt).pipe(Object(O.a)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("before")}),Object(f.a)(this._nextPaginator.nativeElement,"touchstart",gt).pipe(Object(O.a)(this._destroyed)).subscribe(()=>{this._handlePaginatorPress("after")})}ngAfterContentInit(){const t=this._dir?this._dir.change:Object(x.a)(null),e=this._viewportRuler.change(150),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new h.c(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap(),this._keyManager.updateActiveItem(this._selectedIndex),"undefined"!=typeof requestAnimationFrame?requestAnimationFrame(i):i(),Object(_.a)(t,e,this._items.changes).pipe(Object(O.a)(this._destroyed)).subscribe(()=>{Promise.resolve().then(i),this._keyManager.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.pipe(Object(O.a)(this._destroyed)).subscribe(t=>{this.indexFocused.emit(t),this._setTabFocus(t)})}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!Object(k.o)(t))switch(t.keyCode){case k.d:case k.j:this.focusIndex!==this.selectedIndex&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t));break;default:this._keyManager.onKeydown(t)}}_onContentChanges(){const t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||"",this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){this._isValidIndex(t)&&this.focusIndex!==t&&this._keyManager&&this._keyManager.setActiveItem(t)}_isValidIndex(t){if(!this._items)return!0;const e=this._items?this._items.toArray()[t]:null;return!!e&&!e.disabled}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();const e=this._tabListContainer.nativeElement,i=this._getLayoutDirection();e.scrollLeft="ltr"==i?0:e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&"rtl"===this._dir.value?"rtl":"ltr"}_updateTabScrollPosition(){if(this.disablePagination)return;const t=this.scrollDistance,e="ltr"===this._getLayoutDirection()?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){return this._scrollTo(this._scrollDistance+("before"==t?-1:1)*this._tabListContainer.nativeElement.offsetWidth/3)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;const e=this._items?this._items.toArray()[t]:null;if(!e)return;const i=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:a,offsetWidth:n}=e.elementRef.nativeElement;let s,o;"ltr"==this._getLayoutDirection()?(s=a,o=s+n):(o=this._tabList.nativeElement.offsetWidth-a,s=o-n);const r=this.scrollDistance,c=this.scrollDistance+i;s<r?this.scrollDistance-=r-s+60:o>c&&(this.scrollDistance+=o-c+60)}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{const t=this._tabList.nativeElement.scrollWidth>this._elementRef.nativeElement.offsetWidth;t||(this.scrollDistance=0),t!==this._showPaginationControls&&this._changeDetectorRef.markForCheck(),this._showPaginationControls=t}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=0==this.scrollDistance,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabList.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){const t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&null!=e.button&&0!==e.button||(this._stopInterval(),Object(y.a)(650,100).pipe(Object(O.a)(Object(_.a)(this._stopScrolling,this._destroyed))).subscribe(()=>{const{maxScrollDistance:e,distance:i}=this._scrollHeader(t);(0===i||i>=e)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};const e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(s.l),s.Ob(s.h),s.Ob(L.e),s.Ob(S.b,8),s.Ob(s.A),s.Ob(T.a),s.Ob(o.a,8))},t.\u0275dir=s.Jb({type:t,inputs:{disablePagination:"disablePagination"}}),t})(),ft=(()=>{class t extends _t{constructor(t,e,i,a,n,s,o){super(t,e,i,a,n,s,o),this._disableRipple=!1}get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=Object(I.b)(t)}_itemSelected(t){t.preventDefault()}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(s.l),s.Ob(s.h),s.Ob(L.e),s.Ob(S.b,8),s.Ob(s.A),s.Ob(T.a),s.Ob(o.a,8))},t.\u0275dir=s.Jb({type:t,inputs:{disableRipple:"disableRipple"},features:[s.zb]}),t})(),xt=(()=>{class t extends ft{constructor(t,e,i,a,n,s,o){super(t,e,i,a,n,s,o)}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(s.l),s.Ob(s.h),s.Ob(L.e),s.Ob(S.b,8),s.Ob(s.A),s.Ob(T.a),s.Ob(o.a,8))},t.\u0275cmp=s.Ib({type:t,selectors:[["mat-tab-header"]],contentQueries:function(t,e,i){if(1&t&&s.Hb(i,pt,0),2&t){let t;s.oc(t=s.bc())&&(e._items=t)}},viewQuery:function(t,e){if(1&t&&(s.Ec(Q,3),s.Ec(G,3),s.Ec(V,3),s.Ec($,1),s.Ec(J,1)),2&t){let t;s.oc(t=s.bc())&&(e._inkBar=t.first),s.oc(t=s.bc())&&(e._tabListContainer=t.first),s.oc(t=s.bc())&&(e._tabList=t.first),s.oc(t=s.bc())&&(e._nextPaginator=t.first),s.oc(t=s.bc())&&(e._previousPaginator=t.first)}},hostAttrs:[1,"mat-tab-header"],hostVars:4,hostBindings:function(t,e){2&t&&s.Gb("mat-tab-header-pagination-controls-enabled",e._showPaginationControls)("mat-tab-header-rtl","rtl"==e._getLayoutDirection())},inputs:{selectedIndex:"selectedIndex"},outputs:{selectFocusedIndex:"selectFocusedIndex",indexFocused:"indexFocused"},features:[s.zb],ngContentSelectors:D,decls:13,vars:8,consts:[["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-before","mat-elevation-z4",3,"matRippleDisabled","click","mousedown","touchend"],["previousPaginator",""],[1,"mat-tab-header-pagination-chevron"],[1,"mat-tab-label-container",3,"keydown"],["tabListContainer",""],["role","tablist",1,"mat-tab-list",3,"cdkObserveContent"],["tabList",""],[1,"mat-tab-labels"],["aria-hidden","true","mat-ripple","",1,"mat-tab-header-pagination","mat-tab-header-pagination-after","mat-elevation-z4",3,"matRippleDisabled","mousedown","click","touchend"],["nextPaginator",""]],template:function(t,e){1&t&&(s.ic(),s.Tb(0,"div",0,1),s.ac("click",function(){return e._handlePaginatorClick("before")})("mousedown",function(t){return e._handlePaginatorPress("before",t)})("touchend",function(){return e._stopInterval()}),s.Pb(2,"div",2),s.Sb(),s.Tb(3,"div",3,4),s.ac("keydown",function(t){return e._handleKeydown(t)}),s.Tb(5,"div",5,6),s.ac("cdkObserveContent",function(){return e._onContentChanges()}),s.Tb(7,"div",7),s.hc(8),s.Sb(),s.Pb(9,"mat-ink-bar"),s.Sb(),s.Sb(),s.Tb(10,"div",8,9),s.ac("mousedown",function(t){return e._handlePaginatorPress("after",t)})("click",function(){return e._handlePaginatorClick("after")})("touchend",function(){return e._stopInterval()}),s.Pb(12,"div",2),s.Sb()),2&t&&(s.Gb("mat-tab-header-pagination-disabled",e._disableScrollBefore),s.jc("matRippleDisabled",e._disableScrollBefore||e.disableRipple),s.Cb(5),s.Gb("_mat-animation-noopable","NoopAnimations"===e._animationMode),s.Cb(5),s.Gb("mat-tab-header-pagination-disabled",e._disableScrollAfter),s.jc("matRippleDisabled",e._disableScrollAfter||e.disableRipple))},directives:[r.c,m.a,Q],styles:['.mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:"";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n'],encapsulation:2}),t})(),yt=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[a.c,r.b,u.f,r.d,m.c,h.a],r.b]}),t})();const vt=["content"];function Ct(t,e){if(1&t&&(s.Tb(0,"span"),s.Ac(1),s.Sb()),2&t){const t=s.ec().$implicit;s.Eb(t.class),s.Cb(1),s.Bc(t.header)}}function wt(t,e){if(1&t&&(s.Tb(0,"mat-tab",4),s.zc(1,Ct,2,4,"ng-template",5),s.Pb(2,"aio-code",6),s.Sb()),2&t){const t=e.$implicit;s.Cb(2),s.Eb(t.class),s.jc("language",t.language)("linenums",t.linenums)("path",t.path)("region",t.region)("header",t.header)}}const Ot=["*"];let It=(()=>{class t{ngOnInit(){this.tabs=[];const t=this.content.nativeElement,e=Array.from(t.querySelectorAll("code-pane"));for(const i of e)this.tabs.push(this.getTabInfo(i));t.innerHTML=""}ngAfterViewInit(){this.codeComponents.toArray().forEach((t,e)=>{t.code=this.tabs[e].code})}getTabInfo(t){return{class:t.getAttribute("class")||"",code:t.innerHTML,path:t.getAttribute("path")||"",region:t.getAttribute("region")||"",header:t.getAttribute("header")||void 0,language:t.getAttribute("language")||void 0,linenums:t.getAttribute("linenums")||this.linenums}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Ib({type:t,selectors:[["code-tabs"]],viewQuery:function(t,e){if(1&t&&(s.Ec(vt,3),s.Ec(n.a,1)),2&t){let t;s.oc(t=s.bc())&&(e.content=t.first),s.oc(t=s.bc())&&(e.codeComponents=t)}},inputs:{linenums:"linenums"},ngContentSelectors:Ot,decls:6,vars:2,consts:[[2,"display","none"],["content",""],[1,"code-tab-group",3,"disableRipple"],["style","overflow-y: hidden;",4,"ngFor","ngForOf"],[2,"overflow-y","hidden"],["mat-tab-label",""],[3,"language","linenums","path","region","header"]],template:function(t,e){1&t&&(s.ic(),s.Tb(0,"div",0,1),s.hc(2),s.Sb(),s.Tb(3,"mat-card"),s.Tb(4,"mat-tab-group",2),s.zc(5,wt,3,8,"mat-tab",3),s.Sb(),s.Sb()),2&t&&(s.Cb(4),s.jc("disableRipple",!0),s.Cb(1),s.jc("ngForOf",e.tabs))},directives:[b,ht,a.j,et,Y,n.a],encapsulation:2}),t})();var Tt=i("V90o");let kt=(()=>{class t{constructor(){this.customElementComponent=It}}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(e){return new(e||t)},imports:[[a.c,d,yt,Tt.a]]}),t})()}}]);
//# sourceMappingURL=code-code-tabs-module-es2015.1a6c55229832dae43d3d.js.map