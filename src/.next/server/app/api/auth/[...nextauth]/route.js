"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Csamya%5COneDrive%5CDesktop%5Cfreelance-project%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csamya%5COneDrive%5CDesktop%5Cfreelance-project%5Csrc&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Csamya%5COneDrive%5CDesktop%5Cfreelance-project%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csamya%5COneDrive%5CDesktop%5Cfreelance-project%5Csrc&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/../node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/../node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/../node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_samya_OneDrive_Desktop_freelance_project_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\samya\\\\OneDrive\\\\Desktop\\\\freelance-project\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_samya_OneDrive_Desktop_freelance_project_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyLmpzP25hbWU9YXBwJTJGYXBpJTJGYXV0aCUyRiU1Qi4uLm5leHRhdXRoJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZS50cyZhcHBEaXI9QyUzQSU1Q1VzZXJzJTVDc2FteWElNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNmcmVlbGFuY2UtcHJvamVjdCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDc2FteWElNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNmcmVlbGFuY2UtcHJvamVjdCU1Q3NyYyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDb0Q7QUFDakk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vP2ZkYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcc2FteWFcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxmcmVlbGFuY2UtcHJvamVjdFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcc2FteWFcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxmcmVlbGFuY2UtcHJvamVjdFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Csamya%5COneDrive%5CDesktop%5Cfreelance-project%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csamya%5COneDrive%5CDesktop%5Cfreelance-project%5Csrc&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/../node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/user.model */ \"(rsc)/./models/user.model.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/../node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/../node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/../node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/../node_modules/next-auth/providers/google.js\");\n\n\n\n\n\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        strategy: \"jwt\"\n    },\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                email: {},\n                password: {}\n            },\n            async authorize (credentials) {\n                try {\n                    await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                    const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                        email: credentials?.email\n                    });\n                    if (!user) {\n                        throw new Error(\"\");\n                    }\n                    const isValidPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compare(credentials?.password ?? \"\", user.password);\n                    if (!isValidPassword) {\n                        throw new Error(\"\");\n                    }\n                    return user;\n                } catch  {\n                    return null;\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async signIn ({ account, profile }) {\n            if (account?.provider === \"github\") {\n                await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                const existingUser = await _models_user_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                    email: profile?.email\n                });\n                if (!existingUser) {\n                    await _models_user_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n                        name: profile?.name,\n                        email: profile?.email\n                    });\n                }\n            }\n            return true;\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n                token.email = user.email;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user = {\n                    email: token.email,\n                    name: token.name,\n                    image: token.picture\n                };\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/sign-in\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNnQjtBQUNPO0FBQzFCO0FBQ29DO0FBQ2xCO0FBQ1E7QUFFeEQsTUFBTU8sVUFBVVAsZ0RBQVFBLENBQUM7SUFDckJRLFNBQVM7UUFDTEMsVUFBVTtJQUNkO0lBQ0FDLFdBQVc7UUFDUEosc0VBQWNBLENBQUM7WUFDWEssVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CO1FBQ2xEO1FBRUFYLHNFQUFNQSxDQUFDO1lBQ0hNLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0ksU0FBUztZQUMvQkYsY0FBY0gsUUFBUUMsR0FBRyxDQUFDSyxhQUFhO1FBQzNDO1FBQ0FkLDJFQUFtQkEsQ0FBQztZQUNoQmUsTUFBTTtZQUNOQyxhQUFhO2dCQUNUQyxPQUFPLENBQUM7Z0JBQ1JDLFVBQVUsQ0FBQztZQUNmO1lBQ0EsTUFBTUMsV0FBVUgsV0FBVztnQkFDdkIsSUFBSTtvQkFDQSxNQUFNbEIsd0RBQWlCQTtvQkFDdkIsTUFBTXNCLE9BQU8sTUFBTXZCLDBEQUFJQSxDQUFDd0IsT0FBTyxDQUFDO3dCQUFFSixPQUFPRCxhQUFhQztvQkFBTTtvQkFDNUQsSUFBSSxDQUFDRyxNQUFNO3dCQUNQLE1BQU0sSUFBSUUsTUFBTTtvQkFDcEI7b0JBQ0EsTUFBTUMsa0JBQWtCLE1BQU14Qix1REFBYyxDQUN4Q2lCLGFBQWFFLFlBQVksSUFBSUUsS0FBS0YsUUFBUTtvQkFFOUMsSUFBSSxDQUFDSyxpQkFBaUI7d0JBQ2xCLE1BQU0sSUFBSUQsTUFBTTtvQkFDcEI7b0JBQ0EsT0FBT0Y7Z0JBQ1gsRUFDQSxPQUFNO29CQUNGLE9BQU87Z0JBQ1g7WUFDSjtRQUNKO0tBRUg7SUFDREssV0FBVztRQUNQLE1BQU1DLFFBQU8sRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUU7WUFDN0IsSUFBSUQsU0FBU0UsYUFBYSxVQUFVO2dCQUNoQyxNQUFNL0Isd0RBQWlCQTtnQkFDdkIsTUFBTWdDLGVBQWUsTUFBTWpDLDBEQUFJQSxDQUFDd0IsT0FBTyxDQUFDO29CQUFFSixPQUFPVyxTQUFTWDtnQkFBTTtnQkFDaEUsSUFBSSxDQUFDYSxjQUFjO29CQUNmLE1BQU1qQywwREFBSUEsQ0FBQ2tDLE1BQU0sQ0FBQzt3QkFDZGhCLE1BQU1hLFNBQVNiO3dCQUNmRSxPQUFPVyxTQUFTWDtvQkFDcEI7Z0JBQ0o7WUFDSjtZQUNBLE9BQU87UUFDWDtRQUVBLE1BQU1lLEtBQUksRUFBRUMsS0FBSyxFQUFFYixJQUFJLEVBQUU7WUFDckIsSUFBSUEsTUFBTTtnQkFDTmEsTUFBTUMsRUFBRSxHQUFHZCxLQUFLYyxFQUFFO2dCQUNsQkQsTUFBTWhCLEtBQUssR0FBR0csS0FBS0gsS0FBSztZQUM1QjtZQUNBLE9BQU9nQjtRQUNYO1FBQ0EsTUFBTTdCLFNBQVEsRUFBRUEsT0FBTyxFQUFFNkIsS0FBSyxFQUFFO1lBQzVCLElBQUlBLE9BQU87Z0JBQ1A3QixRQUFRZ0IsSUFBSSxHQUFHO29CQUNYSCxPQUFPZ0IsTUFBTWhCLEtBQUs7b0JBQ2xCRixNQUFNa0IsTUFBTWxCLElBQUk7b0JBQ2hCb0IsT0FBT0YsTUFBTUcsT0FBTztnQkFDeEI7WUFDSjtZQUNBLE9BQU9oQztRQUNYO0lBRUo7SUFDQWlDLE9BQU87UUFDSFgsUUFBUTtJQUNaO0lBQ0FZLFFBQVE5QixRQUFRQyxHQUFHLENBQUM4QixlQUFlO0FBSXZDO0FBQzJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/YzhhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uLy4uLy4uL21vZGVscy91c2VyLm1vZGVsXCI7XG5pbXBvcnQgY29ubmVjdFRvRGF0YWJhc2UgZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9tb25nb2RiXCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBHaXRodWIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCI7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aCh7XG4gICAgc2Vzc2lvbjoge1xuICAgICAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgICB9LFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCBhcyBzdHJpbmcsXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUIGFzIHN0cmluZ1xuICAgICAgICB9KSxcblxuICAgICAgICBHaXRodWIoe1xuICAgICAgICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCBhcyBzdHJpbmcsXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQgYXMgc3RyaW5nLFxuICAgICAgICB9KSxcbiAgICAgICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICAgICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICAgICAgICAgIGVtYWlsOiB7fSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDoge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgY29ubmVjdFRvRGF0YWJhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBjcmVkZW50aWFscz8uZW1haWwgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdXNlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNWYWxpZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFscz8ucGFzc3dvcmQgPz8gXCJcIiwgdXNlci5wYXNzd29yZCBhcyBzdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkUGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgXSxcbiAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgYXN5bmMgc2lnbkluKHsgYWNjb3VudCwgcHJvZmlsZSB9KSB7XG4gICAgICAgICAgICBpZiAoYWNjb3VudD8ucHJvdmlkZXIgPT09IFwiZ2l0aHViXCIpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBjb25uZWN0VG9EYXRhYmFzZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBwcm9maWxlPy5lbWFpbCB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWV4aXN0aW5nVXNlcikge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBVc2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9maWxlPy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHByb2ZpbGU/LmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xuICAgICAgICAgICAgICAgIHRva2VuLmVtYWlsID0gdXNlci5lbWFpbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgICAgIHNlc3Npb24udXNlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRva2VuLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0b2tlbi5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogdG9rZW4ucGljdHVyZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgICAgICB9XG5cbiAgICB9LFxuICAgIHBhZ2VzOiB7XG4gICAgICAgIHNpZ25JbjogXCIvc2lnbi1pblwiLFxuICAgIH0sXG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVRcblxuXG5cbn0pO1xuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiVXNlciIsImNvbm5lY3RUb0RhdGFiYXNlIiwiYmNyeXB0IiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIkdpdGh1YiIsIkdvb2dsZVByb3ZpZGVyIiwiaGFuZGxlciIsInNlc3Npb24iLCJzdHJhdGVneSIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIkdJVEhVQl9JRCIsIkdJVEhVQl9TRUNSRVQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwidXNlciIsImZpbmRPbmUiLCJFcnJvciIsImlzVmFsaWRQYXNzd29yZCIsImNvbXBhcmUiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJhY2NvdW50IiwicHJvZmlsZSIsInByb3ZpZGVyIiwiZXhpc3RpbmdVc2VyIiwiY3JlYXRlIiwiand0IiwidG9rZW4iLCJpZCIsImltYWdlIiwicGljdHVyZSIsInBhZ2VzIiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGO;\nconsole.log(\"Environment check:\");\nconsole.log(\"NODE_ENV:\", \"development\");\nconsole.log(\"MONGO:\", process.env.MONGO);\nconsole.log(\"All env vars:\", Object.keys(process.env).filter((key)=>key.includes(\"MONGO\")));\nif (!MONGODB_URI) {\n    throw new Error(\" please define mongo environment variable\");\n}\nasync function connectToDatabase() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 1) {\n        return (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\n    }\n    const opts = {\n        bufferCommands: false\n    };\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts);\n    return (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDatabase);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBK0I7QUFFL0IsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDQyxLQUFLO0FBRXJDQyxRQUFRQyxHQUFHLENBQUM7QUFDWkQsUUFBUUMsR0FBRyxDQUFDLGFBTFo7QUFNQUQsUUFBUUMsR0FBRyxDQUFDLFVBQVVKLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBSztBQUN2Q0MsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkMsT0FBT0MsSUFBSSxDQUFDTixRQUFRQyxHQUFHLEVBQUVNLE1BQU0sQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsUUFBUSxDQUFDO0FBSWpGLElBQUksQ0FBQ1YsYUFBYTtJQUNkLE1BQU0sSUFBSVcsTUFBTztBQUNyQjtBQUVBLGVBQWVDO0lBQ1gsSUFBSWIsNERBQW1CLENBQUNlLFVBQVUsS0FBSyxHQUFHO1FBQ3RDLE9BQU9mLGlEQUFRQTtJQUNuQjtJQUNBLE1BQU1nQixPQUFPO1FBQ1RDLGdCQUFnQjtJQUNwQjtJQUNBLE1BQU1qQix1REFBZ0IsQ0FBQ0MsYUFBY2U7SUFDckMsT0FBT2hCLGlEQUFRQTtBQUNuQjtBQUVBLGlFQUFlYSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvbW9uZ29kYi50cz8wNWJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSdcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HTztcblxuY29uc29sZS5sb2coXCJFbnZpcm9ubWVudCBjaGVjazpcIik7XG5jb25zb2xlLmxvZyhcIk5PREVfRU5WOlwiLCBwcm9jZXNzLmVudi5OT0RFX0VOVik7XG5jb25zb2xlLmxvZyhcIk1PTkdPOlwiLCBwcm9jZXNzLmVudi5NT05HTyk7XG5jb25zb2xlLmxvZyhcIkFsbCBlbnYgdmFyczpcIiwgT2JqZWN0LmtleXMocHJvY2Vzcy5lbnYpLmZpbHRlcihrZXkgPT4ga2V5LmluY2x1ZGVzKCdNT05HTycpKSk7XG5cblxuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yIChcIiBwbGVhc2UgZGVmaW5lIG1vbmdvIGVudmlyb25tZW50IHZhcmlhYmxlXCIpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RUb0RhdGFiYXNlKCkge1xuICAgIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIG1vbmdvb3NlO1xuICAgIH1cbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXG4gICAgfVxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkkhLCBvcHRzKTtcbiAgICByZXR1cm4gbW9uZ29vc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RUb0RhdGFiYXNlOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIk1PTkdPIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImtleXMiLCJmaWx0ZXIiLCJrZXkiLCJpbmNsdWRlcyIsIkVycm9yIiwiY29ubmVjdFRvRGF0YWJhc2UiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./models/user.model.ts":
/*!******************************!*\
  !*** ./models/user.model.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: false\n    }\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdXNlci5tb2RlbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkQ7QUFTN0QsTUFBTUMsYUFBNEIsSUFBSUQsd0RBQWUsQ0FBQztJQUNwREcsTUFBTTtRQUNKQyxNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQUMsT0FBTztRQUNMSCxNQUFNQztRQUNOQyxVQUFVO1FBQ1ZFLFFBQVE7SUFDVjtJQUNBQyxVQUFVO1FBQ1JMLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtBQUNGO0FBRUEsTUFBTUksT0FDSlYsd0RBQWUsQ0FBQ1UsSUFBSSxJQUFJVixxREFBYyxDQUFRLFFBQVFDO0FBRXhELGlFQUFlUyxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kZWxzL3VzZXIubW9kZWwudHM/YWQ2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgRG9jdW1lbnQsIE1vZGVsLCBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuaW50ZXJmYWNlIElVc2VyIGV4dGVuZHMgRG9jdW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xufVxuXG5jb25zdCBVc2VyU2NoZW1hOiBTY2hlbWE8SVVzZXI+ID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIG5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIGVtYWlsOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgIHVuaXF1ZTogdHJ1ZSxcbiAgfSxcbiAgcGFzc3dvcmQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICB9LFxufSk7XG5cbmNvbnN0IFVzZXI6IE1vZGVsPElVc2VyPiA9XG4gIG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsPElVc2VyPihcIlVzZXJcIiwgVXNlclNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJVc2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJVc2VyIiwibW9kZWxzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./models/user.model.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/bcryptjs","vendor-chunks/preact","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/../node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5Csamya%5COneDrive%5CDesktop%5Cfreelance-project%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Csamya%5COneDrive%5CDesktop%5Cfreelance-project%5Csrc&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();