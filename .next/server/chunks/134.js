"use strict";
exports.id = 134;
exports.ids = [134];
exports.modules = {

/***/ 1353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ stagger)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);

const stagger = (target, fromvVars, toVars)=>{
    return gsap__WEBPACK_IMPORTED_MODULE_0___default().fromTo(target, {
        opacity: 0,
        ...fromvVars
    }, {
        opacity: 1,
        ...toVars,
        stagger: 0.2,
        ease: gsap__WEBPACK_IMPORTED_MODULE_0__.Power3.easeOut
    });
};


/***/ }),

/***/ 558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KO": () => (/* binding */ ISOToDate),
/* harmony export */   "LI": () => (/* binding */ useIsomorphicLayoutEffect)
/* harmony export */ });
/* unused harmony export getRandomImage */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useIsomorphicLayoutEffect =  false ? 0 : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;
function ISOToDate(date) {
    if (date) {
        let convertDate = new Date(date);
        return convertDate.getFullYear() + "-" + (convertDate.getMonth() + 1) + "-" + convertDate.getDate();
    }
}
function getRandomImage() {
    const randomImageUrl = [
        "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "https://images.unsplash.com/photo-1638742385167-96fc60e12f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
        "https://images.unsplash.com/photo-1618367588411-d9a90fefa881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "https://images.unsplash.com/photo-1657295791913-5074c912398e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=996&q=80", 
    ];
    return randomImageUrl[Math.floor(Math.random() * randomImageUrl.length)];
}


/***/ })

};
;