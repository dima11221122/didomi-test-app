function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,i=_getPrototypeOf(e);if(t){var a=_getPrototypeOf(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{TmgO:function(e,t,n){"use strict";n.r(t),n.d(t,"GiveConsentModule",(function(){return we}));var i,a=n("ofXK"),c=n("tyNb"),o=n("fXoL"),r=n("kt0X"),s=Object(r.n)("[CreateConsent] create consent",Object(r.s)()),l=Object(r.n)("[CreateConsent] create consent fail",Object(r.s)()),u=((i=function(){function e(t){_classCallCheck(this,e),this.store=t}return _createClass(e,[{key:"giveConsent",value:function(e){this.store.dispatch(s({payload:e}))}}]),e}()).\u0275fac=function(e){return new(e||i)(o.Yb(r.h))},i.\u0275prov=o.Kb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),m=n("3Pt+"),h=n("XiUz"),d=n("kmnG"),b=n("nLfN"),k=n("8LU1"),f=n("EY2u"),p=n("XNiG");n("xgIS"),n("3UWI"),n("1G5W");var _,x,v,g,y,C,O,w=Object(b.f)({passive:!0}),j=((x=function(){function e(t,n){_classCallCheck(this,e),this._platform=t,this._ngZone=n,this._monitoredElements=new Map}return _createClass(e,[{key:"monitor",value:function(e){var t=this;if(!this._platform.isBrowser)return f.a;var n=Object(k.e)(e),i=this._monitoredElements.get(n);if(i)return i.subject.asObservable();var a=new p.a,c="cdk-text-field-autofilled",o=function(e){"cdk-text-field-autofill-start"!==e.animationName||n.classList.contains(c)?"cdk-text-field-autofill-end"===e.animationName&&n.classList.contains(c)&&(n.classList.remove(c),t._ngZone.run((function(){return a.next({target:e.target,isAutofilled:!1})}))):(n.classList.add(c),t._ngZone.run((function(){return a.next({target:e.target,isAutofilled:!0})})))};return this._ngZone.runOutsideAngular((function(){n.addEventListener("animationstart",o,w),n.classList.add("cdk-text-field-autofill-monitored")})),this._monitoredElements.set(n,{subject:a,unlisten:function(){n.removeEventListener("animationstart",o,w)}}),a.asObservable()}},{key:"stopMonitoring",value:function(e){var t=Object(k.e)(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}},{key:"ngOnDestroy",value:function(){var e=this;this._monitoredElements.forEach((function(t,n){return e.stopMonitoring(n)}))}}]),e}()).\u0275fac=function(e){return new(e||x)(o.Yb(b.a),o.Yb(o.A))},x.\u0275prov=Object(o.Kb)({factory:function(){return new x(Object(o.Yb)(b.a),Object(o.Yb)(o.A))},token:x,providedIn:"root"}),x),R=((_=function e(){_classCallCheck(this,e)}).\u0275mod=o.Mb({type:_}),_.\u0275inj=o.Lb({factory:function(e){return new(e||_)},imports:[[b.b]]}),_),A=n("FKr1"),I=new o.r("MAT_INPUT_VALUE_ACCESSOR"),E=["button","checkbox","file","hidden","image","radio","range","reset","submit"],L=0,T=Object(A.s)((function e(t,n,i,a){_classCallCheck(this,e),this._defaultErrorStateMatcher=t,this._parentForm=n,this._parentFormGroup=i,this.ngControl=a})),S=((g=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,i,a,c,o,r,s,l,u){var m;_classCallCheck(this,n),(m=t.call(this,r,c,o,a))._elementRef=e,m._platform=i,m.ngControl=a,m._autofillMonitor=l,m._uid="mat-input-".concat(L++),m._isServer=!1,m._isNativeSelect=!1,m.focused=!1,m.stateChanges=new p.a,m.controlType="mat-input",m.autofilled=!1,m._disabled=!1,m._required=!1,m._type="text",m._readonly=!1,m._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter((function(e){return Object(b.e)().has(e)}));var h=m._elementRef.nativeElement;return m._inputValueAccessor=s||h,m._previousNativeValue=m.value,m.id=m.id,i.IOS&&u.runOutsideAngular((function(){e.nativeElement.addEventListener("keyup",(function(e){var t=e.target;t.value||t.selectionStart||t.selectionEnd||(t.setSelectionRange(1,1),t.setSelectionRange(0,0))}))})),m._isServer=!m._platform.isBrowser,m._isNativeSelect="select"===h.nodeName.toLowerCase(),m._isNativeSelect&&(m.controlType=h.multiple?"mat-native-select-multiple":"mat-native-select"),m}return _createClass(n,[{key:"ngOnInit",value:function(){var e=this;this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe((function(t){e.autofilled=t.isAutofilled,e.stateChanges.next()}))}},{key:"ngOnChanges",value:function(){this.stateChanges.next()}},{key:"ngOnDestroy",value:function(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement)}},{key:"ngDoCheck",value:function(){this.ngControl&&this.updateErrorState(),this._dirtyCheckNativeValue()}},{key:"focus",value:function(e){this._elementRef.nativeElement.focus(e)}},{key:"_focusChanged",value:function(e){e===this.focused||this.readonly&&e||(this.focused=e,this.stateChanges.next())}},{key:"_onInput",value:function(){}},{key:"_isTextarea",value:function(){return"textarea"===this._elementRef.nativeElement.nodeName.toLowerCase()}},{key:"_dirtyCheckNativeValue",value:function(){var e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}},{key:"_validateType",value:function(){if(E.indexOf(this._type)>-1)throw Error('Input type "'.concat(this._type,"\" isn't supported by matInput."))}},{key:"_isNeverEmpty",value:function(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}},{key:"_isBadInput",value:function(){var e=this._elementRef.nativeElement.validity;return e&&e.badInput}},{key:"setDescribedByIds",value:function(e){this._ariaDescribedby=e.join(" ")}},{key:"onContainerClick",value:function(){this.focused||this.focus()}},{key:"disabled",get:function(){return this.ngControl&&null!==this.ngControl.disabled?this.ngControl.disabled:this._disabled},set:function(e){this._disabled=Object(k.c)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}},{key:"id",get:function(){return this._id},set:function(e){this._id=e||this._uid}},{key:"required",get:function(){return this._required},set:function(e){this._required=Object(k.c)(e)}},{key:"type",get:function(){return this._type},set:function(e){this._type=e||"text",this._validateType(),!this._isTextarea()&&Object(b.e)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}},{key:"value",get:function(){return this._inputValueAccessor.value},set:function(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}},{key:"readonly",get:function(){return this._readonly},set:function(e){this._readonly=Object(k.c)(e)}},{key:"empty",get:function(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}},{key:"shouldLabelFloat",get:function(){if(this._isNativeSelect){var e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}return this.focused||!this.empty}}]),n}(T)).\u0275fac=function(e){return new(e||g)(o.Ob(o.l),o.Ob(b.a),o.Ob(m.h,10),o.Ob(m.k,8),o.Ob(m.e,8),o.Ob(A.a),o.Ob(I,10),o.Ob(j),o.Ob(o.A))},g.\u0275dir=o.Jb({type:g,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-input-element","mat-form-field-autofill-control"],hostVars:10,hostBindings:function(e,t){1&e&&o.cc("focus",(function(){return t._focusChanged(!0)}))("blur",(function(){return t._focusChanged(!1)}))("input",(function(){return t._onInput()})),2&e&&(o.Xb("disabled",t.disabled)("required",t.required),o.Db("id",t.id)("placeholder",t.placeholder)("readonly",t.readonly&&!t._isNativeSelect||null)("aria-describedby",t._ariaDescribedby||null)("aria-invalid",t.errorState)("aria-required",t.required.toString()),o.Fb("mat-input-server",t._isServer))},inputs:{id:"id",disabled:"disabled",required:"required",type:"type",value:"value",readonly:"readonly",placeholder:"placeholder",errorStateMatcher:"errorStateMatcher"},exportAs:["matInput"],features:[o.Bb([{provide:d.d,useExisting:g}]),o.zb,o.Ab]}),g),N=((v=function e(){_classCallCheck(this,e)}).\u0275mod=o.Mb({type:v}),v.\u0275inj=o.Lb({factory:function(e){return new(e||v)},providers:[A.a],imports:[[R,d.e],R,d.e]}),v),P=n("R1ws"),M=n("GU7r"),U=n("u47x"),q=["input"],D=function(){return{enterDuration:150}},V=["*"],z=new o.r("mat-checkbox-default-options",{providedIn:"root",factory:function(){return{color:"accent",clickAction:"check-indeterminate"}}}),F=new o.r("mat-checkbox-click-action"),B=0,X={provide:m.g,useExisting:Object(o.U)((function(){return Z})),multi:!0},G=function e(){_classCallCheck(this,e)},Y=Object(A.u)(Object(A.p)(Object(A.q)(Object(A.r)((function e(t){_classCallCheck(this,e),this._elementRef=t}))))),Z=((O=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,i,a,c,r,s,l,u){var m;return _classCallCheck(this,n),(m=t.call(this,e))._changeDetectorRef=i,m._focusMonitor=a,m._ngZone=c,m._clickAction=s,m._animationMode=l,m._options=u,m.ariaLabel="",m.ariaLabelledby=null,m._uniqueId="mat-checkbox-".concat(++B),m.id=m._uniqueId,m.labelPosition="after",m.name=null,m.change=new o.o,m.indeterminateChange=new o.o,m._onTouched=function(){},m._currentAnimationClass="",m._currentCheckState=0,m._controlValueAccessorChangeFn=function(){},m._checked=!1,m._disabled=!1,m._indeterminate=!1,m._options=m._options||{},m._options.color&&(m.color=m._options.color),m.tabIndex=parseInt(r)||0,m._focusMonitor.monitor(e,!0).subscribe((function(e){e||Promise.resolve().then((function(){m._onTouched(),i.markForCheck()}))})),m._clickAction=m._clickAction||m._options.clickAction,m}return _createClass(n,[{key:"ngAfterViewInit",value:function(){this._syncIndeterminate(this._indeterminate)}},{key:"ngAfterViewChecked",value:function(){}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this._elementRef)}},{key:"_isRippleDisabled",value:function(){return this.disableRipple||this.disabled}},{key:"_onLabelTextChange",value:function(){this._changeDetectorRef.detectChanges()}},{key:"writeValue",value:function(e){this.checked=!!e}},{key:"registerOnChange",value:function(e){this._controlValueAccessorChangeFn=e}},{key:"registerOnTouched",value:function(e){this._onTouched=e}},{key:"setDisabledState",value:function(e){this.disabled=e}},{key:"_getAriaChecked",value:function(){return this.checked?"true":this.indeterminate?"mixed":"false"}},{key:"_transitionCheckState",value:function(e){var t=this._currentCheckState,n=this._elementRef.nativeElement;if(t!==e&&(this._currentAnimationClass.length>0&&n.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(t,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){n.classList.add(this._currentAnimationClass);var i=this._currentAnimationClass;this._ngZone.runOutsideAngular((function(){setTimeout((function(){n.classList.remove(i)}),1e3)}))}}},{key:"_emitChangeEvent",value:function(){var e=new G;e.source=this,e.checked=this.checked,this._controlValueAccessorChangeFn(this.checked),this.change.emit(e)}},{key:"toggle",value:function(){this.checked=!this.checked}},{key:"_onInputClick",value:function(e){var t=this;e.stopPropagation(),this.disabled||"noop"===this._clickAction?this.disabled||"noop"!==this._clickAction||(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate):(this.indeterminate&&"check"!==this._clickAction&&Promise.resolve().then((function(){t._indeterminate=!1,t.indeterminateChange.emit(t._indeterminate)})),this.toggle(),this._transitionCheckState(this._checked?1:2),this._emitChangeEvent())}},{key:"focus",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"keyboard",t=arguments.length>1?arguments[1]:void 0;this._focusMonitor.focusVia(this._inputElement,e,t)}},{key:"_onInteractionEvent",value:function(e){e.stopPropagation()}},{key:"_getAnimationClassForCheckStateTransition",value:function(e,t){if("NoopAnimations"===this._animationMode)return"";var n="";switch(e){case 0:if(1===t)n="unchecked-checked";else{if(3!=t)return"";n="unchecked-indeterminate"}break;case 2:n=1===t?"unchecked-checked":"unchecked-indeterminate";break;case 1:n=2===t?"checked-unchecked":"checked-indeterminate";break;case 3:n=1===t?"indeterminate-checked":"indeterminate-unchecked"}return"mat-checkbox-anim-".concat(n)}},{key:"_syncIndeterminate",value:function(e){var t=this._inputElement;t&&(t.nativeElement.indeterminate=e)}},{key:"inputId",get:function(){return"".concat(this.id||this._uniqueId,"-input")}},{key:"required",get:function(){return this._required},set:function(e){this._required=Object(k.c)(e)}},{key:"checked",get:function(){return this._checked},set:function(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}},{key:"disabled",get:function(){return this._disabled},set:function(e){var t=Object(k.c)(e);t!==this.disabled&&(this._disabled=t,this._changeDetectorRef.markForCheck())}},{key:"indeterminate",get:function(){return this._indeterminate},set:function(e){var t=e!=this._indeterminate;this._indeterminate=Object(k.c)(e),t&&(this._transitionCheckState(this._indeterminate?3:this.checked?1:2),this.indeterminateChange.emit(this._indeterminate)),this._syncIndeterminate(this._indeterminate)}}]),n}(Y)).\u0275fac=function(e){return new(e||O)(o.Ob(o.l),o.Ob(o.h),o.Ob(U.e),o.Ob(o.A),o.Zb("tabindex"),o.Ob(F,8),o.Ob(P.a,8),o.Ob(z,8))},O.\u0275cmp=o.Ib({type:O,selectors:[["mat-checkbox"]],viewQuery:function(e,t){var n;1&e&&(o.Bc(q,!0),o.Bc(A.l,!0)),2&e&&(o.nc(n=o.dc())&&(t._inputElement=n.first),o.nc(n=o.dc())&&(t.ripple=n.first))},hostAttrs:[1,"mat-checkbox"],hostVars:12,hostBindings:function(e,t){2&e&&(o.Xb("id",t.id),o.Db("tabindex",null),o.Fb("mat-checkbox-indeterminate",t.indeterminate)("mat-checkbox-checked",t.checked)("mat-checkbox-disabled",t.disabled)("mat-checkbox-label-before","before"==t.labelPosition)("_mat-animation-noopable","NoopAnimations"===t._animationMode))},inputs:{disableRipple:"disableRipple",color:"color",tabIndex:"tabIndex",ariaLabel:["aria-label","ariaLabel"],ariaLabelledby:["aria-labelledby","ariaLabelledby"],id:"id",labelPosition:"labelPosition",name:"name",required:"required",checked:"checked",disabled:"disabled",indeterminate:"indeterminate",value:"value"},outputs:{change:"change",indeterminateChange:"indeterminateChange"},exportAs:["matCheckbox"],features:[o.Bb([X]),o.zb],ngContentSelectors:V,decls:17,vars:19,consts:[[1,"mat-checkbox-layout"],["label",""],[1,"mat-checkbox-inner-container"],["type","checkbox",1,"mat-checkbox-input","cdk-visually-hidden",3,"id","required","checked","disabled","tabIndex","change","click"],["input",""],["matRipple","",1,"mat-checkbox-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleRadius","matRippleCentered","matRippleAnimation"],[1,"mat-ripple-element","mat-checkbox-persistent-ripple"],[1,"mat-checkbox-frame"],[1,"mat-checkbox-background"],["version","1.1","focusable","false","viewBox","0 0 24 24",0,"xml","space","preserve",1,"mat-checkbox-checkmark"],["fill","none","stroke","white","d","M4.1,12.7 9,17.6 20.3,6.3",1,"mat-checkbox-checkmark-path"],[1,"mat-checkbox-mixedmark"],[1,"mat-checkbox-label",3,"cdkObserveContent"],["checkboxLabel",""],[2,"display","none"]],template:function(e,t){if(1&e&&(o.kc(),o.Ub(0,"label",0,1),o.Ub(2,"div",2),o.Ub(3,"input",3,4),o.cc("change",(function(e){return t._onInteractionEvent(e)}))("click",(function(e){return t._onInputClick(e)})),o.Tb(),o.Ub(5,"div",5),o.Pb(6,"div",6),o.Tb(),o.Pb(7,"div",7),o.Ub(8,"div",8),o.fc(),o.Ub(9,"svg",9),o.Pb(10,"path",10),o.Tb(),o.ec(),o.Pb(11,"div",11),o.Tb(),o.Tb(),o.Ub(12,"span",12,13),o.cc("cdkObserveContent",(function(){return t._onLabelTextChange()})),o.Ub(14,"span",14),o.xc(15,"\xa0"),o.Tb(),o.jc(16),o.Tb(),o.Tb()),2&e){var n=o.oc(1),i=o.oc(13);o.Db("for",t.inputId),o.Cb(2),o.Fb("mat-checkbox-inner-container-no-side-margin",!i.textContent||!i.textContent.trim()),o.Cb(1),o.lc("id",t.inputId)("required",t.required)("checked",t.checked)("disabled",t.disabled)("tabIndex",t.tabIndex),o.Db("value",t.value)("name",t.name)("aria-label",t.ariaLabel||null)("aria-labelledby",t.ariaLabelledby)("aria-checked",t._getAriaChecked()),o.Cb(2),o.lc("matRippleTrigger",n)("matRippleDisabled",t._isRippleDisabled())("matRippleRadius",20)("matRippleCentered",!0)("matRippleAnimation",o.mc(18,D))}},directives:[A.l,M.a],styles:["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.mat-checkbox.cdk-keyboard-focused .cdk-high-contrast-active .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"],encapsulation:2,changeDetection:0}),O),K=((C=function e(){_classCallCheck(this,e)}).\u0275mod=o.Mb({type:C}),C.\u0275inj=o.Lb({factory:function(e){return new(e||C)}}),C),J=((y=function e(){_classCallCheck(this,e)}).\u0275mod=o.Mb({type:y}),y.\u0275inj=o.Lb({factory:function(e){return new(e||y)},imports:[[A.m,A.d,M.c,K],A.d,K]}),y),Q=n("bTqV");function $(e,t){1&e&&(o.Ub(0,"mat-error"),o.xc(1,"Email has incorrect format"),o.Tb())}var W,H,ee,te=((W=function(){function e(t){_classCallCheck(this,e),this.fb=t,this.submitted=new o.o,this.form=t.group({name:null,email:[null,[m.m.email]],receiveNewsletter:null,targetedAds:null,trackVisits:null},{validators:this.atLeastOnePermissionRequiredValidator()})}return _createClass(e,[{key:"atLeastOnePermissionRequiredValidator",value:function(){return function(e){var t=e.value,n=t.receiveNewsletter,i=t.targetedAds,a=t.trackVisits;return n||i||a?null:{atLeastOnPermissionRequired:!0}}}},{key:"ngOnInit",value:function(){}},{key:"submit",value:function(){this.form.valid&&this.submitted.emit(this.form.value)}}]),e}()).\u0275fac=function(e){return new(e||W)(o.Ob(m.c))},W.\u0275cmp=o.Ib({type:W,selectors:[["app-give-consent-form"]],outputs:{submitted:"submitted"},decls:24,vars:3,consts:[["fxLayout","row","fxLayoutAlign","center center"],["fxLayout","column","fxLayoutGap","16px",1,"form-wrapper",3,"formGroup","ngSubmit"],["fxLayout","row","fxLayoutGap","8px","fxLayoutAlign","center center"],["appearance","outline"],["formControlName","name","matInput",""],["formControlName","email","matInput",""],[4,"ngIf"],["fxLayout","column"],["formControlName","receiveNewsletter"],["formControlName","targetedAds"],["formControlName","trackVisits"],["type","submit","mat-raised-button","","color","primary",3,"disabled"]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.Ub(1,"form",1),o.cc("ngSubmit",(function(){return t.submit()})),o.Ub(2,"div",2),o.Ub(3,"mat-form-field",3),o.Ub(4,"mat-label"),o.xc(5,"Name"),o.Tb(),o.Pb(6,"input",4),o.Tb(),o.Ub(7,"mat-form-field",3),o.Ub(8,"mat-label"),o.xc(9,"Email address"),o.Tb(),o.Pb(10,"input",5),o.wc(11,$,2,0,"mat-error",6),o.Tb(),o.Tb(),o.Ub(12,"div",0),o.xc(13,"I agree:"),o.Tb(),o.Ub(14,"div",7),o.Ub(15,"mat-checkbox",8),o.xc(16,"Receive newsletter"),o.Tb(),o.Ub(17,"mat-checkbox",9),o.xc(18,"Be shown targeted ads"),o.Tb(),o.Ub(19,"mat-checkbox",10),o.xc(20,"Contribute to anonymous visit statistic"),o.Tb(),o.Tb(),o.Ub(21,"div",0),o.Ub(22,"button",11),o.xc(23,"Give consent"),o.Tb(),o.Tb(),o.Tb(),o.Tb()),2&e&&(o.Cb(1),o.lc("formGroup",t.form),o.Cb(10),o.lc("ngIf",t.form.get("email").invalid),o.Cb(11),o.lc("disabled",!t.form.valid))},directives:[h.b,h.a,m.n,m.j,h.c,m.e,d.c,d.f,m.b,S,m.i,m.d,a.k,Z,Q.a,d.b],styles:[""],changeDetection:0}),W),ne=[{path:"",pathMatch:"full",component:(H=function(){function e(t){_classCallCheck(this,e),this.giveConsentService=t}return _createClass(e,[{key:"submit",value:function(e){this.giveConsentService.giveConsent(e)}}]),e}(),H.\u0275fac=function(e){return new(e||H)(o.Ob(u))},H.\u0275cmp=o.Ib({type:H,selectors:[["app-give-consent"]],decls:1,vars:0,consts:[[3,"submitted"]],template:function(e,t){1&e&&(o.Ub(0,"app-give-consent-form",0),o.cc("submitted",(function(e){return t.submit(e)})),o.Tb())},directives:[te],styles:[".form-wrapper[_ngcontent-%COMP%]{width:500px}"],changeDetection:0}),H)}],ie=((ee=function e(){_classCallCheck(this,e)}).\u0275mod=o.Mb({type:ee}),ee.\u0275inj=o.Lb({factory:function(e){return new(e||ee)},imports:[[a.c,c.c.forChild(ne)],c.c]}),ee),ae=n("d3UM");n("0EQZ");var ce,oe,re=((oe=function e(){_classCallCheck(this,e)}).\u0275mod=o.Mb({type:oe}),oe.\u0275inj=o.Lb({factory:function(e){return new(e||oe)},imports:[[A.m,A.d],A.d]}),oe),se=((ce=function e(){_classCallCheck(this,e)}).\u0275mod=o.Mb({type:ce}),ce.\u0275inj=o.Lb({factory:function(e){return new(e||ce)},imports:[[A.d],A.d]}),ce),le=n("tk/3");n("AytR");var ue,me,he={consentsManagement:Object(r.p)({error:null},Object(r.r)(l,(function(e,t){var n=t.payload;return Object.assign(Object.assign({},e),{error:n})})))},de=[],be=n("snw9"),ke=n("FpXt"),fe=n("eIep"),pe=n("7o/Q"),_e=function(){function e(t){_classCallCheck(this,e),this.value=t}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new xe(e,this.value))}}]),e}(),xe=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,i){var a;return _classCallCheck(this,n),(a=t.call(this,e)).value=i,a}return _createClass(n,[{key:"_next",value:function(e){this.destination.next(this.value)}}]),n}(pe.a),ve=n("JIr8"),ge=n("hLsf"),ye=n("LRne"),Ce=n("OAq+"),Oe=((me=function e(t,n){var i=this;_classCallCheck(this,e),this.actions$=t,this.consentsService=n,this.createConsent$=Object(be.c)((function(){return i.actions$.pipe(Object(be.d)(s.type),Object(fe.a)((function(e){var t,n=e.payload;return i.consentsService.createConsent(n).pipe((t=Object(ge.b)({payload:"Consent is created!"}),function(e){return e.lift(new _e(t))}),Object(ve.a)((function(e){return Object(ye.a)(l({payload:e.message}))})))})))}))}).\u0275fac=function(e){return new(e||me)(o.Yb(be.a),o.Yb(Ce.a))},me.\u0275prov=o.Kb({token:me,factory:me.\u0275fac}),me),we=((ue=function e(){_classCallCheck(this,e)}).\u0275mod=o.Mb({type:ue}),ue.\u0275inj=o.Lb({factory:function(e){return new(e||ue)},imports:[[a.c,ie,N,Q.b,ae.b,re,se,m.l,h.d,J,le.c,r.j.forFeature("giveConsent",he,{metaReducers:de}),be.b.forFeature([Oe]),ke.a]]}),ue)}}]);