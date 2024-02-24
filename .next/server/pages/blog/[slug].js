(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 1061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_BlogEditor)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Button/index.js
var Button = __webpack_require__(5542);
;// CONCATENATED MODULE: external "react-datepicker"
const external_react_datepicker_namespaceObject = require("react-datepicker");
var external_react_datepicker_default = /*#__PURE__*/__webpack_require__.n(external_react_datepicker_namespaceObject);
;// CONCATENATED MODULE: external "react-textarea-autosize"
const external_react_textarea_autosize_namespaceObject = require("react-textarea-autosize");
var external_react_textarea_autosize_default = /*#__PURE__*/__webpack_require__.n(external_react_textarea_autosize_namespaceObject);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: ./node_modules/react-datepicker/dist/react-datepicker.css
var react_datepicker = __webpack_require__(5994);
;// CONCATENATED MODULE: ./components/BlogEditor/index.js







const BlogEditor = ({ post , close , refresh  })=>{
    const { theme  } = (0,external_next_themes_.useTheme)();
    const { 0: currentTabs , 1: setCurrentTabs  } = (0,external_react_.useState)("BLOGDETAILS");
    const { 0: blogContent , 1: setBlogContent  } = (0,external_react_.useState)(post.content);
    const { 0: blogVariables , 1: setBlogVariables  } = (0,external_react_.useState)({
        date: post.date,
        title: post.title,
        tagline: post.tagline,
        preview: post.preview,
        image: post.image
    });
    const savePost = async ()=>{
        if (false) {} else {
            alert("This thing only works in development mode.");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `fixed z-10 w-screen h-screen overflow-auto top-0 flex flex-col items-center ${theme === "dark" ? "bg-black" : "bg-white"}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container my-20",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mt-10",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "z-10 sticky top-12",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-4xl",
                                        children: blogVariables.title
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                onClick: savePost,
                                                type: "primary",
                                                children: "Save"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                                onClick: close,
                                                children: "Close"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        onClick: ()=>setCurrentTabs("BLOGDETAILS")
                                        ,
                                        type: currentTabs === "BLOGDETAILS" && "primary",
                                        children: "Blog Details"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        onClick: ()=>setCurrentTabs("CONTENT")
                                        ,
                                        type: currentTabs === "CONTENT" && "primary",
                                        children: "Content"
                                    })
                                ]
                            })
                        ]
                    })
                }),
                currentTabs === "BLOGDETAILS" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mt-10",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mt-5 flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "w-full text-sx opacity-50",
                                    children: "Date"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((external_react_datepicker_default()), {
                                    selected: new Date(blogVariables.date),
                                    className: "w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",
                                    onChange: (date)=>{
                                        setBlogVariables({
                                            ...blogVariables,
                                            date: date.toISOString()
                                        });
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mt-5 flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "w-full text-sx opacity-50",
                                    children: "Title"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    value: blogVariables.title,
                                    onChange: (e)=>setBlogVariables({
                                            ...blogVariables,
                                            title: e.target.value
                                        })
                                    ,
                                    className: "w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",
                                    type: "text"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mt-5 flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "w-full text-sx opacity-50",
                                    children: "Tagline"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    value: blogVariables.tagline,
                                    onChange: (e)=>setBlogVariables({
                                            ...blogVariables,
                                            tagline: e.target.value
                                        })
                                    ,
                                    className: "w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",
                                    type: "text"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mt-5 flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "w-full text-sx opacity-50",
                                    children: "preview (SEO)"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                    value: blogVariables.preview,
                                    onChange: (e)=>setBlogVariables({
                                            ...blogVariables,
                                            preview: e.target.value
                                        })
                                    ,
                                    className: "w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",
                                    type: "text"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mt-5 flex flex-col items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    className: "w-full text-sx opacity-50",
                                    children: "Image"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    value: blogVariables.image,
                                    onChange: (e)=>setBlogVariables({
                                            ...blogVariables,
                                            image: e.target.value
                                        })
                                    ,
                                    className: "w-full mt-2 p-4 hover:border-blue-400 rounded-md shadow-lg border-2",
                                    type: "text"
                                })
                            ]
                        })
                    ]
                }),
                currentTabs === "CONTENT" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mt-10",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                className: "w-full text-sx opacity-50",
                                children: "Content"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((external_react_textarea_autosize_default()), {
                                className: "w-full h-auto mt-5 p-4 border hover:border-blue-400 rounded-xl shadow-xl",
                                value: blogContent,
                                onChange: (e)=>setBlogContent(e.target.value)
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_BlogEditor = (BlogEditor);


/***/ }),

/***/ 9183:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3135);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(727);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4794);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_markdown__WEBPACK_IMPORTED_MODULE_2__]);
react_markdown__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const CodeBlock = {
    code ({ node , inline , className , children , ...props }) {
        const match = /language-(\w+)/.exec(className || "");
        return !inline && match ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__.Prism, {
            style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__.dracula,
            language: match[1],
            PreTag: "div",
            ...props,
            children: String(children).replace(/\n$/, "")
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
            className: className,
            ...props,
            children: children
        });
    }
};
const ContentSection = ({ content  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
        components: CodeBlock,
        className: "markdown-class",
        children: content
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentSection);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8382);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2665);
/* harmony import */ var _components_ContentSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9183);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(558);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1353);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5542);
/* harmony import */ var _components_BlogEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1061);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Cursor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9617);
/* harmony import */ var _data_portfolio_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9954);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Header__WEBPACK_IMPORTED_MODULE_3__, _components_ContentSection__WEBPACK_IMPORTED_MODULE_4__]);
([_components_Header__WEBPACK_IMPORTED_MODULE_3__, _components_ContentSection__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const BlogPost = ({ post  })=>{
    const { 0: showEditor , 1: setShowEditor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const textOne = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const textTwo = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    (0,_utils__WEBPACK_IMPORTED_MODULE_7__/* .useIsomorphicLayoutEffect */ .LI)(()=>{
        (0,_animations__WEBPACK_IMPORTED_MODULE_8__/* .stagger */ .E)([
            textOne.current,
            textTwo.current
        ], {
            y: 30
        }, {
            y: 0
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Blog - " + post.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: post.preview
                    })
                ]
            }),
            _data_portfolio_json__WEBPACK_IMPORTED_MODULE_13__.showCursor && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Cursor__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `container mx-auto mt-10 ${_data_portfolio_json__WEBPACK_IMPORTED_MODULE_13__.showCursor && "cursor-none"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        isBlog: true
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-10 flex flex-col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "w-full h-96 rounded-lg shadow-lg object-cover",
                                src: post.image,
                                alt: post.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                ref: textOne,
                                className: "mt-10 text-4xl mob:text-2xl laptop:text-6xl text-bold",
                                children: post.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                ref: textTwo,
                                className: "mt-2 text-xl max-w-4xl text-darkgray opacity-50",
                                children: post.tagline
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ContentSection__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        content: post.content
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                ]
            }),
             false && /*#__PURE__*/ 0,
            showEditor && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BlogEditor__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                post: post,
                close: ()=>setShowEditor(false)
                ,
                refresh: ()=>router.reload(window.location.pathname)
            })
        ]
    });
};
async function getStaticProps({ params  }) {
    const post = (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__/* .getPostBySlug */ .zQ)(params.slug, [
        "date",
        "slug",
        "preview",
        "title",
        "tagline",
        "preview",
        "image",
        "content", 
    ]);
    return {
        props: {
            post: {
                ...post
            }
        }
    };
}
async function getStaticPaths() {
    const posts = (0,_utils_api__WEBPACK_IMPORTED_MODULE_2__/* .getAllPosts */ .Bd)([
        "slug"
    ]);
    return {
        paths: posts.map((post)=>{
            return {
                params: {
                    slug: post.slug
                }
            };
        }),
        fallback: false
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPost);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5994:
/***/ (() => {



/***/ }),

/***/ 1263:
/***/ ((module) => {

"use strict";
module.exports = require("custom-cursor-react");

/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 4287:
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ 1162:
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 727:
/***/ ((module) => {

"use strict";
module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ 4794:
/***/ ((module) => {

"use strict";
module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

"use strict";
module.exports = import("@headlessui/react");;

/***/ }),

/***/ 3135:
/***/ ((module) => {

"use strict";
module.exports = import("react-markdown");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664,835,134,3,382], () => (__webpack_exec__(4238)));
module.exports = __webpack_exports__;

})();