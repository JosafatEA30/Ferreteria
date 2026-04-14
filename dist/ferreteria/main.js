"use strict";
(self["webpackChunkFerreteria"] = self["webpackChunkFerreteria"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _nav_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav/main/main.component */ 8559);
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ 6101);
/* harmony import */ var _views_page_view_page_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/page-view/page-view.component */ 6163);
/* harmony import */ var _views_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/catalog/catalog.component */ 5190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const routes = [
    {
        path: '',
        component: _nav_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            { path: 'dashboard', component: _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent },
            {
                path: 'catalogo/plomeria',
                component: _views_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_3__.CatalogComponent,
                data: { title: 'Catálogo — Plomería' },
            },
            {
                path: 'catalogo/electricidad',
                component: _views_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_3__.CatalogComponent,
                data: { title: 'Catálogo — Electricidad' },
            },
            {
                path: 'catalogo/pintura',
                component: _views_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_3__.CatalogComponent,
                data: { title: 'Catálogo — Pintura' },
            },
            {
                path: 'inventario',
                component: _views_page_view_page_view_component__WEBPACK_IMPORTED_MODULE_2__.PageViewComponent,
                data: { title: 'Inventario' },
            },
            {
                path: 'historico-inventario',
                component: _views_page_view_page_view_component__WEBPACK_IMPORTED_MODULE_2__.PageViewComponent,
                data: { title: 'Histórico de inventario' },
            },
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'Ferreteria';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _nav_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/sidenav/sidenav.component */ 4296);
/* harmony import */ var _nav_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/main/main.component */ 8559);
/* harmony import */ var _nav_uppernav_uppernav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/uppernav/uppernav.component */ 4723);
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ 6101);
/* harmony import */ var _views_page_view_page_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/page-view/page-view.component */ 6163);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _views_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/catalog/catalog.component */ 5190);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MAT_SELECT_CONFIG,
            useValue: { disableOptionCentering: true },
        },
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _nav_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_2__.SidenavComponent,
        _nav_main_main_component__WEBPACK_IMPORTED_MODULE_3__.MainComponent,
        _nav_uppernav_uppernav_component__WEBPACK_IMPORTED_MODULE_4__.UppernavComponent,
        _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.DashboardComponent,
        _views_page_view_page_view_component__WEBPACK_IMPORTED_MODULE_6__.PageViewComponent,
        _views_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_7__.CatalogComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltipModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule] }); })();


/***/ }),

/***/ 8559:
/*!********************************************!*\
  !*** ./src/app/nav/main/main.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sidenav/sidenav.component */ 4296);
/* harmony import */ var _uppernav_uppernav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../uppernav/uppernav.component */ 4723);




class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 6, vars: 0, consts: [[1, "app-shell"], [1, "app-shell__sidenav"], [1, "app-shell__main"], [1, "app-content"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-sidenav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-uppernav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_0__.SidenavComponent, _uppernav_uppernav_component__WEBPACK_IMPORTED_MODULE_1__.UppernavComponent], styles: [".app-shell[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  min-height: 100vh;\n  min-height: 100dvh;\n}\n\n.app-shell__sidenav[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  align-self: stretch;\n  min-height: 100vh;\n  min-height: 100dvh;\n}\n\n.app-shell__main[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  align-self: stretch;\n}\n\n.app-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow: auto;\n  background-color: var(--ferre-bg, #f9fafb);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxhQUFhO0VBQ2IsY0FBYztFQUNkLDBDQUEwQztBQUM1QyIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXNoZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtaW4taGVpZ2h0OiAxMDBkdmg7XG59XG5cbi5hcHAtc2hlbGxfX3NpZGVuYXYge1xuICBmbGV4LXNocmluazogMDtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcbn1cblxuLmFwcC1zaGVsbF9fbWFpbiB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbiAgbWluLWhlaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbn1cblxuLmFwcC1jb250ZW50IHtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZlcnJlLWJnLCAjZjlmYWZiKTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 4296:
/*!**************************************************!*\
  !*** ./src/app/nav/sidenav/sidenav.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidenavComponent": () => (/* binding */ SidenavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);




function SidenavComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23)(1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
function SidenavComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SidenavComponent_ul_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 28)(1, "li")(2, "a", 29)(3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Plomer\u00EDa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li")(6, "a", 30)(7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Electricidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li")(10, "a", 31)(11, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pintura");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} }
function SidenavComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32)(1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.loggedUserName);
} }
const _c0 = function () { return { exact: true }; };
class SidenavComponent {
    constructor() {
        this.collapsed = true;
        this.catalogExpanded = false;
        this.loggedUserName = 'Usuario demo';
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        if (this.collapsed) {
            this.catalogExpanded = false;
        }
    }
    toggleCatalog(event) {
        event.preventDefault();
        if (this.collapsed) {
            this.collapsed = false;
            this.catalogExpanded = true;
            return;
        }
        this.catalogExpanded = !this.catalogExpanded;
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(); };
SidenavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], decls: 46, vars: 17, consts: [[1, "sidenav"], [1, "sidenav__header"], ["type", "button", 1, "sidenav__collapse-btn", 3, "matTooltip", "click"], ["aria-hidden", "true", 1, "material-icons"], ["class", "sidenav__logo", 4, "ngIf"], ["class", "sidenav__logo-mini", "aria-hidden", "true", 4, "ngIf"], ["aria-label", "Secciones", 1, "sidenav__nav"], [1, "sidenav__list"], ["routerLink", "/dashboard", "routerLinkActive", "sidenav__link--active", 1, "sidenav__link", 3, "routerLinkActiveOptions"], ["aria-hidden", "true", 1, "material-icons", "sidenav__link-icon"], [1, "sidenav__link-text"], [1, "sidenav__group"], ["type", "button", 1, "sidenav__link", "sidenav__link--parent", 3, "click"], ["aria-hidden", "true", 1, "material-icons", "sidenav__chevron"], ["class", "sidenav__sublist", 4, "ngIf"], ["routerLink", "/inventario", "routerLinkActive", "sidenav__link--active", 1, "sidenav__link"], ["routerLink", "/historico-inventario", "routerLinkActive", "sidenav__link--active", 1, "sidenav__link"], [1, "sidenav__footer"], ["type", "button", 1, "sidenav__help", "btn", "btn-ferre-outline"], [1, "sidenav__help-text"], [1, "sidenav__user"], ["aria-hidden", "true", 1, "material-icons", "sidenav__user-icon"], ["class", "sidenav__user-info", 4, "ngIf"], [1, "sidenav__logo"], [1, "sidenav__logo-frame"], ["src", "assets/logo.svg", "alt", "Ferreter\u00EDa", "width", "160", "height", "90", 1, "sidenav__logo-img"], ["aria-hidden", "true", 1, "sidenav__logo-mini"], ["src", "assets/logo.svg", "alt", "", "width", "40", "height", "40", 1, "sidenav__logo-img-mini"], [1, "sidenav__sublist"], ["routerLink", "/catalogo/plomeria", "routerLinkActive", "sidenav__link--active", 1, "sidenav__link", "sidenav__link--sub"], ["routerLink", "/catalogo/electricidad", "routerLinkActive", "sidenav__link--active", 1, "sidenav__link", "sidenav__link--sub"], ["routerLink", "/catalogo/pintura", "routerLinkActive", "sidenav__link--active", 1, "sidenav__link", "sidenav__link--sub"], [1, "sidenav__user-info"], [1, "sidenav__user-label"], [1, "sidenav__user-name"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_2_listener() { return ctx.toggleCollapsed(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidenavComponent_div_5_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidenavComponent_div_6_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 6)(8, "ul", 7)(9, "li")(10, "a", 8)(11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11)(16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidenavComponent_Template_button_click_16_listener($event) { return ctx.toggleCatalog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cat\u00E1logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SidenavComponent_ul_23_Template, 13, 0, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li")(25, "a", 15)(26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "inventory_2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Inventario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li")(31, "a", 16)(32, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "history");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Hist\u00F3rico de inventario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "footer", 17)(37, "button", 18)(38, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "help_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Ayuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20)(43, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, SidenavComponent_div_45_Template, 5, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("sidenav--collapsed", ctx.collapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "Navegaci\u00F3n principal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.collapsed ? "Abrir men\u00FA" : "Cerrar men\u00FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.collapsed)("aria-label", ctx.collapsed ? "Expandir men\u00FA" : "Colapsar men\u00FA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.collapsed ? "chevron_right" : "chevron_left", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.collapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("sidenav__link--open", ctx.catalogExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.catalogExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.catalogExpanded ? "expand_less" : "expand_more", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.catalogExpanded && !ctx.collapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.collapsed);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__.MatTooltip], styles: ["[_nghost-%COMP%] {\n  display: block;\n  flex-shrink: 0;\n  align-self: stretch;\n  min-height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  height: 100%;\n  width: 280px;\n  max-width: 100%;\n  background-color: var(--ferre-surface, #ffffff);\n  border-right: 1px solid var(--ferre-border, rgba(158, 108, 69, 0.35));\n  transition: width 0.22s ease;\n  overflow: hidden;\n}\n\n.sidenav--collapsed[_ngcontent-%COMP%] {\n  width: 72px;\n}\n\n.sidenav__header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0.5rem 0.5rem 0.25rem;\n  box-sizing: border-box;\n}\n\n.sidenav--collapsed[_ngcontent-%COMP%]   .sidenav__header[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-left: 0.35rem;\n  padding-right: 0.35rem;\n}\n\n.sidenav__collapse-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  padding: 0;\n  border: none;\n  border-radius: var(--ferre-radius, 0.5rem);\n  background: var(--ferre-bg, #f9fafb);\n  color: var(--ferre-text, #3d2917);\n  cursor: pointer;\n  box-shadow: 0 1px 2px rgba(61, 41, 23, 0.12);\n  flex-shrink: 0;\n}\n\n.sidenav__collapse-btn[_ngcontent-%COMP%]:hover {\n  background: var(--ferre-surface-elevated, #ffffff);\n}\n\n.sidenav__collapse-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n\n.sidenav__logo[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 0.25rem 0.75rem 0.75rem;\n}\n\n.sidenav__logo-frame[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 16 / 9;\n  background: var(--ferre-bg, #f9fafb);\n  border: 1px solid var(--ferre-border, rgba(158, 108, 69, 0.35));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n\n.sidenav__logo-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  padding: 0.09rem;\n}\n\n.sidenav__logo-mini[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n  padding: 0.25rem 0.35rem 0.5rem;\n}\n\n.sidenav__logo-img-mini[_ngcontent-%COMP%] {\n  border-radius: var(--ferre-radius, 0.5rem);\n  object-fit: contain;\n}\n\n.sidenav__nav[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 0.25rem 0.5rem 0.75rem;\n}\n\n.sidenav__list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.sidenav__list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n\n.sidenav__link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  width: 100%;\n  padding: 0.55rem 0.65rem;\n  border-radius: var(--ferre-radius, 0.5rem);\n  color: var(--ferre-text, #3d2917);\n  text-decoration: none;\n  font-family: 'Manrope', system-ui, sans-serif;\n  font-weight: 500;\n  font-size: 0.95rem;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s ease, color 0.15s ease;\n}\n\n.sidenav__link[_ngcontent-%COMP%]:hover {\n  background: rgba(254, 113, 1, 0.12);\n  color: var(--ferre-text, #3d2917);\n}\n\n.sidenav__link--active[_ngcontent-%COMP%] {\n  background: rgba(254, 113, 1, 0.22);\n  color: var(--ferre-brown-deep, #4a3425);\n  font-weight: 600;\n}\n\n.sidenav__link--open[_ngcontent-%COMP%]:not(.sidenav__link--active) {\n  background: rgba(158, 108, 69, 0.1);\n}\n\n.sidenav__link-icon[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  flex-shrink: 0;\n}\n\n.sidenav__link-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.sidenav--collapsed[_ngcontent-%COMP%]   .sidenav__link-text[_ngcontent-%COMP%], .sidenav--collapsed[_ngcontent-%COMP%]   .sidenav__chevron[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.sidenav--collapsed[_ngcontent-%COMP%]   .sidenav__link[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 0.55rem 0.25rem;\n}\n\n.sidenav--collapsed[_ngcontent-%COMP%]   .sidenav__link--parent[_ngcontent-%COMP%]   .sidenav__link-icon[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.sidenav__link--parent[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.sidenav__chevron[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  margin-left: auto;\n  opacity: 0.85;\n}\n\n.sidenav__sublist[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0.15rem 0 0;\n  padding: 0 0 0 0.25rem;\n  border-left: 2px solid var(--ferre-border, rgba(158, 108, 69, 0.45));\n  margin-left: 1.6rem;\n}\n\n.sidenav__link--sub[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  padding: 0.4rem 0.5rem;\n  font-weight: 500;\n}\n\n.sidenav__footer[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 0.75rem 0.5rem;\n  border-top: 1px solid var(--ferre-border, rgba(158, 108, 69, 0.35));\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n}\n\n.sidenav__help[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 0.5rem;\n  width: 100%;\n  padding: 0.5rem 0.65rem;\n  font-weight: 600;\n}\n\n.sidenav__help[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n}\n\n.sidenav--collapsed[_ngcontent-%COMP%]   .sidenav__help-text[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.sidenav--collapsed[_ngcontent-%COMP%]   .sidenav__help[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n\n.sidenav__user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.65rem;\n  border-radius: var(--ferre-radius, 0.5rem);\n  background: rgba(158, 108, 69, 0.12);\n}\n\n.sidenav__user-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  color: var(--ferre-neutral, #9e6c45);\n  flex-shrink: 0;\n}\n\n.sidenav__user-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n\n.sidenav__user-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--ferre-text-muted, #6b4f38);\n}\n\n.sidenav__user-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: var(--ferre-text, #3d2917);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.sidenav--collapsed[_ngcontent-%COMP%]   .sidenav__user[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 0.35rem;\n}\n\n.sidenav--collapsed[_ngcontent-%COMP%]   .sidenav__user-info[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLCtDQUErQztFQUMvQyxxRUFBcUU7RUFDckUsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixZQUFZO0VBQ1osMENBQTBDO0VBQzFDLG9DQUFvQztFQUNwQyxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLDRDQUE0QztFQUM1QyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsb0NBQW9DO0VBQ3BDLCtEQUErRDtFQUMvRCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTztFQUNQLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLHdCQUF3QjtFQUN4QiwwQ0FBMEM7RUFDMUMsaUNBQWlDO0VBQ2pDLHFCQUFxQjtFQUNyQiw2Q0FBNkM7RUFDN0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyx1Q0FBdUM7RUFDdkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG9FQUFvRTtFQUNwRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsbUVBQW1FO0VBQ25FLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsMENBQTBDO0VBQzFDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNpZGVuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDI4MHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZlcnJlLXN1cmZhY2UsICNmZmZmZmYpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1mZXJyZS1ib3JkZXIsIHJnYmEoMTU4LCAxMDgsIDY5LCAwLjM1KSk7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuMjJzIGVhc2U7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zaWRlbmF2LS1jb2xsYXBzZWQge1xuICB3aWR0aDogNzJweDtcbn1cblxuLnNpZGVuYXZfX2hlYWRlciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDAuMjVyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5zaWRlbmF2LS1jb2xsYXBzZWQgLnNpZGVuYXZfX2hlYWRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDAuMzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDAuMzVyZW07XG59XG5cbi5zaWRlbmF2X19jb2xsYXBzZS1idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZmVycmUtcmFkaXVzLCAwLjVyZW0pO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1mZXJyZS1iZywgI2Y5ZmFmYik7XG4gIGNvbG9yOiB2YXIoLS1mZXJyZS10ZXh0LCAjM2QyOTE3KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSg2MSwgNDEsIDIzLCAwLjEyKTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5zaWRlbmF2X19jb2xsYXBzZS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1mZXJyZS1zdXJmYWNlLWVsZXZhdGVkLCAjZmZmZmZmKTtcbn1cblxuLnNpZGVuYXZfX2NvbGxhcHNlLWJ0biAubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi5zaWRlbmF2X19sb2dvIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC43NXJlbSAwLjc1cmVtO1xufVxuXG4uc2lkZW5hdl9fbG9nby1mcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBhc3BlY3QtcmF0aW86IDE2IC8gOTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZmVycmUtYmcsICNmOWZhZmIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mZXJyZS1ib3JkZXIsIHJnYmEoMTU4LCAxMDgsIDY5LCAwLjM1KSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2lkZW5hdl9fbG9nby1pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBwYWRkaW5nOiAwLjA5cmVtO1xufVxuXG4uc2lkZW5hdl9fbG9nby1taW5pIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuMzVyZW0gMC41cmVtO1xufVxuXG4uc2lkZW5hdl9fbG9nby1pbWctbWluaSB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWZlcnJlLXJhZGl1cywgMC41cmVtKTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLnNpZGVuYXZfX25hdiB7XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW0gMC43NXJlbTtcbn1cblxuLnNpZGVuYXZfX2xpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zaWRlbmF2X19saXN0ID4gbGkge1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xufVxuXG4uc2lkZW5hdl9fbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC42NXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNTVyZW0gMC42NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZmVycmUtcmFkaXVzLCAwLjVyZW0pO1xuICBjb2xvcjogdmFyKC0tZmVycmUtdGV4dCwgIzNkMjkxNyk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlLCBjb2xvciAwLjE1cyBlYXNlO1xufVxuXG4uc2lkZW5hdl9fbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU0LCAxMTMsIDEsIDAuMTIpO1xuICBjb2xvcjogdmFyKC0tZmVycmUtdGV4dCwgIzNkMjkxNyk7XG59XG5cbi5zaWRlbmF2X19saW5rLS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NCwgMTEzLCAxLCAwLjIyKTtcbiAgY29sb3I6IHZhcigtLWZlcnJlLWJyb3duLWRlZXAsICM0YTM0MjUpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2lkZW5hdl9fbGluay0tb3Blbjpub3QoLnNpZGVuYXZfX2xpbmstLWFjdGl2ZSkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE1OCwgMTA4LCA2OSwgMC4xKTtcbn1cblxuLnNpZGVuYXZfX2xpbmstaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4zNXJlbTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5zaWRlbmF2X19saW5rLXRleHQge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uc2lkZW5hdi0tY29sbGFwc2VkIC5zaWRlbmF2X19saW5rLXRleHQsXG4uc2lkZW5hdi0tY29sbGFwc2VkIC5zaWRlbmF2X19jaGV2cm9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNpZGVuYXYtLWNvbGxhcHNlZCAuc2lkZW5hdl9fbGluayB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjU1cmVtIDAuMjVyZW07XG59XG5cbi5zaWRlbmF2LS1jb2xsYXBzZWQgLnNpZGVuYXZfX2xpbmstLXBhcmVudCAuc2lkZW5hdl9fbGluay1pY29uIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc2lkZW5hdl9fbGluay0tcGFyZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2lkZW5hdl9fY2hldnJvbiB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG9wYWNpdHk6IDAuODU7XG59XG5cbi5zaWRlbmF2X19zdWJsaXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwLjE1cmVtIDAgMDtcbiAgcGFkZGluZzogMCAwIDAgMC4yNXJlbTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1mZXJyZS1ib3JkZXIsIHJnYmEoMTU4LCAxMDgsIDY5LCAwLjQ1KSk7XG4gIG1hcmdpbi1sZWZ0OiAxLjZyZW07XG59XG5cbi5zaWRlbmF2X19saW5rLS1zdWIge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgcGFkZGluZzogMC40cmVtIDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNpZGVuYXZfX2Zvb3RlciB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAwLjc1cmVtIDAuNXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWZlcnJlLWJvcmRlciwgcmdiYSgxNTgsIDEwOCwgNjksIDAuMzUpKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjY1cmVtO1xufVxuXG4uc2lkZW5hdl9faGVscCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZ2FwOiAwLjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW0gMC42NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNpZGVuYXZfX2hlbHAgLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1zaXplOiAxLjM1cmVtO1xufVxuXG4uc2lkZW5hdi0tY29sbGFwc2VkIC5zaWRlbmF2X19oZWxwLXRleHQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2lkZW5hdi0tY29sbGFwc2VkIC5zaWRlbmF2X19oZWxwIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC4yNXJlbTtcbn1cblxuLnNpZGVuYXZfX3VzZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDAuNjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWZlcnJlLXJhZGl1cywgMC41cmVtKTtcbiAgYmFja2dyb3VuZDogcmdiYSgxNTgsIDEwOCwgNjksIDAuMTIpO1xufVxuXG4uc2lkZW5hdl9fdXNlci1pY29uIHtcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xuICBjb2xvcjogdmFyKC0tZmVycmUtbmV1dHJhbCwgIzllNmM0NSk7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uc2lkZW5hdl9fdXNlci1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uc2lkZW5hdl9fdXNlci1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICBjb2xvcjogdmFyKC0tZmVycmUtdGV4dC1tdXRlZCwgIzZiNGYzOCk7XG59XG5cbi5zaWRlbmF2X191c2VyLW5hbWUge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWZlcnJlLXRleHQsICMzZDI5MTcpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnNpZGVuYXYtLWNvbGxhcHNlZCAuc2lkZW5hdl9fdXNlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjM1cmVtO1xufVxuXG4uc2lkZW5hdi0tY29sbGFwc2VkIC5zaWRlbmF2X191c2VyLWluZm8ge1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"] });


/***/ }),

/***/ 4723:
/*!****************************************************!*\
  !*** ./src/app/nav/uppernav/uppernav.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UppernavComponent": () => (/* binding */ UppernavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);



class UppernavComponent {
    constructor() { }
    ngOnInit() {
    }
}
UppernavComponent.ɵfac = function UppernavComponent_Factory(t) { return new (t || UppernavComponent)(); };
UppernavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UppernavComponent, selectors: [["app-uppernav"]], decls: 21, vars: 0, consts: [["aria-label", "Barra superior", 1, "uppernav"], [1, "uppernav-inner"], [1, "uppernav-search"], ["for", "uppernav-search-input", 1, "visually-hidden"], [1, "input-group", "uppernav-search-group"], ["aria-hidden", "true", 1, "input-group-text"], [1, "material-icons", "uppernav-icon"], ["id", "uppernav-search-input", "type", "search", "placeholder", "Buscar productos\u2026", "autocomplete", "off", 1, "form-control"], [1, "uppernav-actions"], ["type", "button", "mat-icon-button", "", "matTooltip", "Configuraci\u00F3n", "color", "primary", "aria-label", "Configuraci\u00F3n"], ["aria-hidden", "true", 1, "material-icons"], ["type", "button", "mat-icon-button", "", "matTooltip", "Notificaciones", "color", "primary", "aria-label", "Notificaciones"], [1, "uppernav-brand"], [1, "uppernav-title"], ["src", "assets/logo.svg", "width", "32", "height", "32", "alt", "Ferreter\u00EDa", 1, "uppernav-logo"]], template: function UppernavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "span", 5)(7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "button", 9)(12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11)(15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12)(18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ferreter\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__.MatTooltip], styles: [".uppernav[_ngcontent-%COMP%] {\n  background-color: var(--ferre-surface, #ffffff);\n  border-bottom: 1px solid var(--ferre-border, rgba(158, 108, 69, 0.35));\n  padding: 0.5rem 1rem;\n}\n\n.uppernav-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem 1rem;\n  max-width: 100%;\n}\n\n.uppernav-search[_ngcontent-%COMP%] {\n  flex: 1 1 220px;\n  min-width: min(100%, 200px);\n  max-width: 100%;\n}\n\n.uppernav-search-group[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\n  background-color: var(--ferre-surface, #ffffff);\n  border-color: var(--ferre-border-strong, #9e6c45);\n  color: var(--ferre-neutral, #9e6c45);\n}\n\n.uppernav-search-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border-color: var(--ferre-border-strong, #9e6c45);\n}\n\n.uppernav-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 1;\n  display: inline-flex;\n}\n\n.uppernav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.75rem 1rem;\n  flex: 0 1 auto;\n  margin-left: auto;\n}\n\n.uppernav-icon-btn[_ngcontent-%COMP%] {\n  min-width: 2.5rem;\n  min-height: 2.5rem;\n  padding: 0.25rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.uppernav-icon-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.uppernav-brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem 0.75rem;\n}\n\n.uppernav-title[_ngcontent-%COMP%] {\n  font-family: 'Manrope', system-ui, sans-serif;\n  font-weight: 700;\n  font-size: 1.35rem;\n  color: var(--ferre-text, #3d2917);\n  line-height: 1.2;\n  white-space: nowrap;\n}\n\n.uppernav-logo[_ngcontent-%COMP%] {\n  width:40px;\n  height: 40px;\n  flex-shrink: 0;\n  object-fit: contain;\n  border-radius: var(--ferre-radius, 0.5rem);\n}\n\n@media (max-width: 767.98px) {\n  .uppernav-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwcGVybmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBK0M7RUFDL0Msc0VBQXNFO0VBQ3RFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLCtDQUErQztFQUMvQyxpREFBaUQ7RUFDakQsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJ1cHBlcm5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwcGVybmF2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmVycmUtc3VyZmFjZSwgI2ZmZmZmZik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1mZXJyZS1ib3JkZXIsIHJnYmEoMTU4LCAxMDgsIDY5LCAwLjM1KSk7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xufVxuXG4udXBwZXJuYXYtaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAwLjc1cmVtIDFyZW07XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnVwcGVybmF2LXNlYXJjaCB7XG4gIGZsZXg6IDEgMSAyMjBweDtcbiAgbWluLXdpZHRoOiBtaW4oMTAwJSwgMjAwcHgpO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi51cHBlcm5hdi1zZWFyY2gtZ3JvdXAgLmlucHV0LWdyb3VwLXRleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mZXJyZS1zdXJmYWNlLCAjZmZmZmZmKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1mZXJyZS1ib3JkZXItc3Ryb25nLCAjOWU2YzQ1KTtcbiAgY29sb3I6IHZhcigtLWZlcnJlLW5ldXRyYWwsICM5ZTZjNDUpO1xufVxuXG4udXBwZXJuYXYtc2VhcmNoLWdyb3VwIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZlcnJlLWJvcmRlci1zdHJvbmcsICM5ZTZjNDUpO1xufVxuXG4udXBwZXJuYXYtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4udXBwZXJuYXYtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtIDFyZW07XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnVwcGVybmF2LWljb24tYnRuIHtcbiAgbWluLXdpZHRoOiAyLjVyZW07XG4gIG1pbi1oZWlnaHQ6IDIuNXJlbTtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udXBwZXJuYXYtaWNvbi1idG4gLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi51cHBlcm5hdi1icmFuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW0gMC43NXJlbTtcbn1cblxuLnVwcGVybmF2LXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEuMzVyZW07XG4gIGNvbG9yOiB2YXIoLS1mZXJyZS10ZXh0LCAjM2QyOTE3KTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnVwcGVybmF2LWxvZ28ge1xuICB3aWR0aDo0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1mZXJyZS1yYWRpdXMsIDAuNXJlbSk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAudXBwZXJuYXYtdGl0bGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 5190:
/*!****************************************************!*\
  !*** ./src/app/views/catalog/catalog.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogComponent": () => (/* binding */ CatalogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 9121);






class CatalogComponent {
    constructor() { }
    ngOnInit() {
    }
}
CatalogComponent.ɵfac = function CatalogComponent_Factory(t) { return new (t || CatalogComponent)(); };
CatalogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatalogComponent, selectors: [["app-catalog"]], decls: 68, vars: 0, consts: [[1, "catalog"], [1, "catalog-header"], [1, "header-buttons"], ["mat-raised-button", "", "color", "primary"], [1, "material-icons"], ["mat-raised-button", "", "color", "accent"], [1, "catalog-alerts"], [1, "info-card"], [1, "d-flex", "flex-row", "align-items-center", "gap-2"], [2, "color", "grey"], [1, "low-stock-card"], [1, "out-of-stock-card"], [1, "inventory-value-card"], [1, "d-flex", "flex-row", "align-items-center"], [1, "catalog-table"], [1, "catalog-table-header"], [1, "catalog-table-filters"], ["matInput", "", "type", "text"], ["value", "all"], ["value", "plomeria"], ["value", "electricidad"], ["value", "pintura"]], template: function CatalogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Cat\u00E1logo de productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Cat\u00E1logo de productos disponibles para la venta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2)(8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Agregar producto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Descargar CSV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "file_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6)(17, "div", 7)(18, "div", 8)(19, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Total de productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10)(26, "div", 8)(27, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Productos con stock bajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11)(34, "div", 8)(35, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Productos sin stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12)(42, "div", 13)(43, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Valor del inventario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "attach_money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "$100,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 14)(50, "div", 15)(51, "div", 16)(52, "mat-form-field")(53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field")(57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Categor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-select")(60, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Plomer\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Electricidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Pintura");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_4__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatOption], styles: [".catalog[_ngcontent-%COMP%]{\n    padding: 1rem;\n    gap: 1rem;\n    display: flex;\n    flex-direction: column;\n}\n\n.catalog-header[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.header-buttons[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    gap: 1rem;\n}\n\n.catalog-alerts[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    gap: 1rem;\n    flex-wrap: wrap;\n    align-items: center;\n}\n\n.info-card[_ngcontent-%COMP%] {\n    flex: 1;\n    background-color: var(--ferre-surface, #ffffff);\n    padding: 1rem;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);\n    div{\n        p:first{\n            font-size: 16pt;\n            color: grey;\n            margin-bottom: 0rem !important;\n        }\n    }\n    \n    p{\n        font-size: 14pt;\n        font-weight: 800;\n        color: black;\n        margin-bottom: 0rem !important;\n    }\n}\n\n.info-card[_ngcontent-%COMP%]:hover {\n    transition: all 0.3s ease;\n    transform: scale(1.008);\n}\n\n.low-stock-card[_ngcontent-%COMP%] {\n    flex: 1;\n    background-color: var(--ferre-surface, #ffffff);\n    padding: 1rem;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);\n    color: orange;\n    p{\n        font-size: 16pt;\n        color: grey;\n        margin-bottom: 0rem !important;\n    }\n    p:last-child {\n        font-size: 14pt;\n        font-weight: 800;\n        color: orange;\n        margin-bottom: 0rem !important;\n    }\n}\n\n.low-stock-card[_ngcontent-%COMP%]:hover {\n    transition: all 0.3s ease;\n    transform: scale(1.008);\n}\n\n.out-of-stock-card[_ngcontent-%COMP%] {\n    flex: 1;\n    background-color: var(--ferre-surface, #ffffff);\n    padding: 1rem;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);\n    color: red;\n    p{\n        font-size: 16pt;\n        color: grey;\n        margin-bottom: 0rem !important;\n    }\n    p:last-child {\n        font-size: 14pt;\n        font-weight: 800;\n        color: red;\n        margin-bottom: 0rem !important;\n    }\n}\n\n.out-of-stock-card[_ngcontent-%COMP%]:hover {\n    transition: all 0.3s ease;\n    transform: scale(1.008);\n}\n\n.inventory-value-card[_ngcontent-%COMP%] {\n    flex: 1;\n    background-color: var(--ferre-surface, #ffffff);\n    padding: 1rem;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);\n    color: green;\n    p{\n        font-size: 16pt;\n        color: grey;\n        margin-bottom: 0rem !important;\n    }\n    p:last-child {\n        font-size: 14pt;\n        font-weight: 800;\n        color: green;\n        margin-bottom: 0rem !important;\n    }\n}\n\n.inventory-value-card[_ngcontent-%COMP%]:hover {\n    transition: all 0.3s ease;\n    transform: scale(1.008);\n}\n\n.catalog-table[_ngcontent-%COMP%]{\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);\n    background-color: var(--ferre-surface, #ffffff);\n    padding: 1rem;\n    border-radius: 0.5rem;\n    \n    overflow: visible;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.catalog-table-header[_ngcontent-%COMP%]{\n    padding: .5rem;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.catalog-table-filters[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    gap: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCwrQ0FBK0M7SUFDL0MsYUFBYTtJQUNiLHlDQUF5QztJQUN6QztRQUNJO1lBQ0ksZUFBZTtZQUNmLFdBQVc7WUFDWCw4QkFBOEI7UUFDbEM7SUFDSjs7SUFFQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLDhCQUE4QjtJQUNsQztBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLE9BQU87SUFDUCwrQ0FBK0M7SUFDL0MsYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxhQUFhO0lBQ2I7UUFDSSxlQUFlO1FBQ2YsV0FBVztRQUNYLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsOEJBQThCO0lBQ2xDO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksT0FBTztJQUNQLCtDQUErQztJQUMvQyxhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLFVBQVU7SUFDVjtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsOEJBQThCO0lBQ2xDO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDViw4QkFBOEI7SUFDbEM7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsK0NBQStDO0lBQy9DLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsWUFBWTtJQUNaO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLDhCQUE4QjtJQUNsQztBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QywrQ0FBK0M7SUFDL0MsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix1R0FBdUc7SUFDdkcsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2IiLCJmaWxlIjoiY2F0YWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGFsb2d7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBnYXA6IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2F0YWxvZy1oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyLWJ1dHRvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmNhdGFsb2ctYWxlcnRze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDFyZW07XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbmZvLWNhcmQge1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmVycmUtc3VyZmFjZSwgI2ZmZmZmZik7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBkaXZ7XG4gICAgICAgIHA6Zmlyc3R7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLmluZm8tY2FyZDpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDA4KTtcbn1cblxuLmxvdy1zdG9jay1jYXJkIHtcbiAgICBmbGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZlcnJlLXN1cmZhY2UsICNmZmZmZmYpO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgY29sb3I6IG9yYW5nZTtcbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIHA6bGFzdC1jaGlsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgY29sb3I6IG9yYW5nZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgIH1cbn1cblxuLmxvdy1zdG9jay1jYXJkOmhvdmVyIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMDgpO1xufVxuXG4ub3V0LW9mLXN0b2NrLWNhcmQge1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmVycmUtc3VyZmFjZSwgI2ZmZmZmZik7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBjb2xvcjogcmVkO1xuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZwdDtcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgICB9XG4gICAgcDpsYXN0LWNoaWxkIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB0O1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4ub3V0LW9mLXN0b2NrLWNhcmQ6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwOCk7XG59XG5cbi5pbnZlbnRvcnktdmFsdWUtY2FyZCB7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mZXJyZS1zdXJmYWNlLCAjZmZmZmZmKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBwe1xuICAgICAgICBmb250LXNpemU6IDE2cHQ7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIHA6bGFzdC1jaGlsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uaW52ZW50b3J5LXZhbHVlLWNhcmQ6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAwOCk7XG59XG5cbi5jYXRhbG9nLXRhYmxle1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZlcnJlLXN1cmZhY2UsICNmZmZmZmYpO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIC8qIG92ZXJmbG93OmhpZGRlbiByb21wZSBlbCBjw6FsY3VsbyBkZSB2aWV3cG9ydCBkZWwgb3ZlcmxheSB5IGZhdm9yZWNlIHF1ZSBlbCBwYW5lbCBhYnJhIGhhY2lhIGFycmliYSAqL1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4uY2F0YWxvZy10YWJsZS1oZWFkZXJ7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2F0YWxvZy10YWJsZS1maWx0ZXJze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBnYXA6IDFyZW07XG59Il19 */"] });


/***/ }),

/***/ 6101:
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 108, vars: 0, consts: [[1, "dashboard"], [1, "main-cards"], [1, "d-flex", "flex-row", "gap-3"], [1, "card-info", "inventario"], [1, "card-info", "alerta"], [1, "card-actividad"], [1, "d-flex", "flex-row", "justify-content-between", "align-items-center"], ["routerLink", "/historico-inventario", 2, "font-size", "14pt"], [1, "d-flex", "flex-column", "gap-2"], [1, "card-actividad-reciente", "d-flex", "flex-row", "justify-content-between", "align-items-center"], [1, "d-flex", "flex-row", "gap-4"], [1, "icon-container"], [1, "material-icons"], [1, "card-actividad-content"], [1, "side-cards"], [1, "card-actividad", "d-flex", "flex-row", "justify-content-between", "align-items-center"], [1, "side-card-content"], [1, "card-actividad", "d-flex", "flex-column", "justify-content-between", "align-items-center"], [1, "d-flex", "mt-3", "flex-wrap", "gap-3"], [1, "accesos-directos"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Existencias del inventario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "1256");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Informaci\u00F3n extra...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4)(11, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Elementos que se est\u00E1n agotando");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "14");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "informaci\u00F3n extra...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5)(18, "div", 6)(19, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Actividad reciente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ver todo el historial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8)(24, "div", 9)(25, "div", 10)(26, "div", 11)(27, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "attach_money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13)(30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Informacion de actividad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Detalle de la actividad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div")(35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "2026-04-12 10:00:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9)(38, "div", 10)(39, "div", 11)(40, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "attach_money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13)(43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Informacion de actividad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Detalle de la actividad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div")(48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "2026-04-12 10:00:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9)(51, "div", 10)(52, "div", 11)(53, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "attach_money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13)(56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Informacion de actividad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Detalle de la actividad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div")(61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "2026-04-12 10:00:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 14)(64, "div", 15)(65, "div", 16)(66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Ventas diarias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "$32,434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 11)(71, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "attach_money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 15)(74, "div", 16)(75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Env\u00EDos pendientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 11)(80, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "local_shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 17)(83, "div", 16)(84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Accesos directos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 18)(88, "div", 19)(89, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "library_add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Agregar producto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 19)(94, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "check_box");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Auditar inventario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 19)(99, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "assignment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Reportes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 19)(104, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "barcode_reader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Escanear c\u00F3digo de barras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: [".dashboard[_ngcontent-%COMP%] {\n    padding: 1rem;\n    gap: 1rem;\n    display: flex;\n    flex-direction: row;\n}\n\n.main-cards[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    width: 75%;\n}\n\n.side-cards[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    width: 25%;\n}\n\n.card-info[_ngcontent-%COMP%] {\n    flex: 1;\n    background-color: inherit;\n    padding: 1rem;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);\n}\n\n.card-info[_ngcontent-%COMP%]:hover {\n    transition: all 0.3s ease;\n    transform: scale(1.01);\n}\n\n.card-actividad[_ngcontent-%COMP%] {\n    background-color: var(--ferre-surface, #ffffff);\n    padding: 1rem;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);\n}\n\n.card-actividad-reciente[_ngcontent-%COMP%] {\n    padding: .5rem;\n    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);\n}\n\n.card-actividad-reciente[_ngcontent-%COMP%]:hover{\n    transition: all 0.3s ease;\n    transform: scale(1.01);\n}\n\n.inventario[_ngcontent-%COMP%] {\n    background-color: var(--ferre-primary-500);\n    color: #fff;\n    h3, h4{\n        color: #fff;\n    }\n}\n\n.alerta[_ngcontent-%COMP%] {\n    background-color: #fbb2b2;\n    color: darkred;\n    h3, h4{\n        color: darkred;\n    }\n}\n\n.icon-container[_ngcontent-%COMP%] {\n    width: 45px;\n    height: 45px;\n    border-radius: 20%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--ferre-primary);\n    background-color: var(--ferre-primary-100);\n}\n\n.side-card-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    p:first-child {\n        font-size: 16pt;\n        font-weight: 600;\n        margin-bottom: 0rem !important;\n    }\n    p:last-child {\n        font-size: 14pt;\n        font-weight: 200;\n        margin-bottom: 0rem !important;\n    }\n}\n\n.card-actividad-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    p:first-child {\n        font-size: 12pt;\n        font-weight: 600;\n        margin-bottom: 0rem !important;\n    }\n    p:last-child {\n        font-size: 10pt;\n        font-weight: 200;\n        margin-bottom: 0rem !important;\n    }\n}\n\n.accesos-directos[_ngcontent-%COMP%]{\n    cursor: pointer;\n    flex: 1;\n    background-color: #ffffff;\n    padding: 1rem;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);\n    display: flex;\n    flex-direction: column;\n    justify-items: center;\n    align-items: center;\n    justify-content: center;\n    align-content: center;\n    text-align: center;\n}\n\n.accesos-directos[_ngcontent-%COMP%]:hover {\n    transition: all 0.3s ease;\n    background-color: #e9e9e9;\n    transform: scale(1.01);\n}\n\n.accesos-directos[_ngcontent-%COMP%]:active {\n    transition: all 0.3s ease;\n    background-color: #f3f3f3;\n    transform: scale(0.99);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksT0FBTztJQUNQLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLCtDQUErQztJQUMvQyxhQUFhO0lBQ2IseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksY0FBYztJQUNkLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsV0FBVztJQUNYO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkO1FBQ0ksY0FBYztJQUNsQjtBQUNKOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEI7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQiw4QkFBOEI7SUFDbEM7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEI7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtRQUNoQiw4QkFBOEI7SUFDbEM7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgZ2FwOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLm1haW4tY2FyZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJyZW07XG4gICAgd2lkdGg6IDc1JTtcbn1cblxuLnNpZGUtY2FyZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJyZW07XG4gICAgd2lkdGg6IDI1JTtcbn1cblxuLmNhcmQtaW5mbyB7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5jYXJkLWluZm86aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cblxuLmNhcmQtYWN0aXZpZGFkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mZXJyZS1zdXJmYWNlLCAjZmZmZmZmKTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uY2FyZC1hY3RpdmlkYWQtcmVjaWVudGUge1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5jYXJkLWFjdGl2aWRhZC1yZWNpZW50ZTpob3ZlcntcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMSk7XG59XG5cbi5pbnZlbnRhcmlvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mZXJyZS1wcmltYXJ5LTUwMCk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgaDMsIGg0e1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG59XG5cbi5hbGVydGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmIyYjI7XG4gICAgY29sb3I6IGRhcmtyZWQ7XG4gICAgaDMsIGg0e1xuICAgICAgICBjb2xvcjogZGFya3JlZDtcbiAgICB9XG59XG5cbi5pY29uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDQ1cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWZlcnJlLXByaW1hcnkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZlcnJlLXByaW1hcnktMTAwKTtcbn1cblxuLnNpZGUtY2FyZC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZwdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBwOmxhc3QtY2hpbGQge1xuICAgICAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5jYXJkLWFjdGl2aWRhZC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJwdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBwOmxhc3QtY2hpbGQge1xuICAgICAgICBmb250LXNpemU6IDEwcHQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDByZW0gIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5hY2Nlc29zLWRpcmVjdG9ze1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmbGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjY2Vzb3MtZGlyZWN0b3M6aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xufVxuXG4uYWNjZXNvcy1kaXJlY3RvczphY3RpdmUge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xufSJdfQ== */"] });


/***/ }),

/***/ 6163:
/*!********************************************************!*\
  !*** ./src/app/views/page-view/page-view.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageViewComponent": () => (/* binding */ PageViewComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function PageViewComponent_header_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 3)(1, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const title_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](title_r1);
  }
}
/** Vista genérica para rutas que comparten maquetación (título desde `route.data`). */


class PageViewComponent {
  constructor(route) {
    this.title$ = route.data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(d => d['title'] ?? ''));
  }

}

PageViewComponent.ɵfac = function PageViewComponent_Factory(t) {
  return new (t || PageViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
};

PageViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageViewComponent,
  selectors: [["app-page-view"]],
  decls: 4,
  vars: 3,
  consts: [["role", "main", 1, "page-view"], ["class", "page-view__header", 4, "ngIf"], [1, "page-view__body"], [1, "page-view__header"], [1, "page-view__title"]],
  template: function PageViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageViewComponent_header_1_Template, 3, 1, "header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.title$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  styles: [".page-view[_ngcontent-%COMP%] {\n  min-height: 100%;\n  padding: 1rem 1.25rem;\n}\n\n.page-view__header[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.page-view__title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: 'Manrope', system-ui, sans-serif;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--ferre-text, #3d2917);\n}\n\n.page-view__body[_ngcontent-%COMP%] {\n  min-height: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2Utdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCw2Q0FBNkM7RUFDN0MsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoicGFnZS12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS12aWV3IHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMXJlbSAxLjI1cmVtO1xufVxuXG4ucGFnZS12aWV3X19oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ucGFnZS12aWV3X190aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6ICdNYW5yb3BlJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWZlcnJlLXRleHQsICMzZDI5MTcpO1xufVxuXG4ucGFnZS12aWV3X19ib2R5IHtcbiAgbWluLWhlaWdodDogMnJlbTtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map