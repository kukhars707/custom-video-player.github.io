"use strict";
(self["webpackChunkvideo_player"] = self["webpackChunkvideo_player"] || []).push([[826],{

/***/ 7457:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js + 1 modules
var index_es = __webpack_require__(7625);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-brands-svg-icons/index.es.js
var free_brands_svg_icons_index_es = __webpack_require__(1417);
;// CONCATENATED MODULE: ./src/components/Navbar.jsx




var Navbar = function Navbar() {
  return /*#__PURE__*/react.createElement("header", {
    className: "flex justify-between items-center bg-slate-700 p-4 mb-4"
  }, /*#__PURE__*/react.createElement("div", {
    className: "text-white text-2xl"
  }, "Custom video player"), /*#__PURE__*/react.createElement("div", {
    className: "text-white"
  }, /*#__PURE__*/react.createElement("a", {
    href: "https://github.com/kukhars707/custom-video-player",
    target: "_blank",
    rel: "noreferrer",
    className: "text-2xl block"
  }, /*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G, {
    icon: free_brands_svg_icons_index_es/* faGithub */.zhw,
    size: "2x"
  }))));
};

/* harmony default export */ const components_Navbar = (Navbar);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(885);
// EXTERNAL MODULE: ./node_modules/react-player/lib/index.js
var lib = __webpack_require__(2004);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var free_solid_svg_icons_index_es = __webpack_require__(1436);
// EXTERNAL MODULE: ./node_modules/rc-slider/es/index.js + 30 modules
var es = __webpack_require__(1275);
// EXTERNAL MODULE: ./node_modules/rc-slider/assets/index.css
var assets = __webpack_require__(9276);
;// CONCATENATED MODULE: ./src/components/utils/timeFormat.js
var timeFormat = function timeFormat(seconds) {
  if (isNaN(seconds)) {
    return "00:00";
  }

  var date = new Date(seconds * 1000);
  var hh = date.getUTCHours();
  var mm = date.getUTCMinutes();
  var ss = date.getUTCSeconds().toString().padStart(2, '0');

  if (hh) {
    return "".concat(hh, ":").concat(mm.toString().padStart(2, '0'), ":").concat(ss);
  }

  return "".concat(mm, ":").concat(ss);
};
;// CONCATENATED MODULE: ./src/components/VideoPlayer/controls.jsx








var Controls = function Controls(_ref) {
  var onPlay = _ref.onPlay,
      play = _ref.play,
      onForward = _ref.onForward,
      onBackward = _ref.onBackward,
      isMuted = _ref.isMuted,
      isLoop = _ref.isLoop,
      onLoop = _ref.onLoop,
      onMute = _ref.onMute,
      progress = _ref.progress,
      onSliderChange = _ref.onSliderChange,
      currentTime = _ref.currentTime,
      duration = _ref.duration,
      showCongrols = _ref.showCongrols,
      isCustomLoop = _ref.isCustomLoop,
      onCustomLoop = _ref.onCustomLoop,
      onFullScreen = _ref.onFullScreen,
      loopRange = _ref.loopRange;
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "absolute top-0 bg-black p-4 w-full text-white opacity-90 transition-all duration-500 ".concat(showCongrols ? 'translate-y-0' : 'translate-y-[-50px]')
  }, "Header controls"), /*#__PURE__*/react.createElement("button", {
    className: "absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] w-24 h-24 rounded-full bg-black text-white flex justify-center items-center opacity-90 transition-all duration-500 ".concat(showCongrols ? 'block' : 'hidden'),
    onClick: onPlay
  }, /*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G, {
    icon: play ? free_solid_svg_icons_index_es/* faPause */.XQY : free_solid_svg_icons_index_es/* faPlay */.zc,
    size: "3x"
  })), /*#__PURE__*/react.createElement("div", {
    className: "absolute bottom-0 bg-black p-4 w-full text-white opacity-90 transition-all duration-500 ".concat(showCongrols ? 'translate-y-0' : 'translate-y-[50px]')
  }, /*#__PURE__*/react.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react.createElement("div", {
    className: "flex-none"
  }, /*#__PURE__*/react.createElement("button", {
    onClick: onPlay,
    className: "mr-2"
  }, /*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G, {
    icon: play ? free_solid_svg_icons_index_es/* faPause */.XQY : free_solid_svg_icons_index_es/* faPlay */.zc
  })), /*#__PURE__*/react.createElement("button", {
    onClick: onBackward,
    className: "mr-2"
  }, /*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G, {
    icon: free_solid_svg_icons_index_es/* faBackward */.DYF
  })), /*#__PURE__*/react.createElement("button", {
    onClick: onForward,
    className: "mr-2"
  }, /*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G, {
    icon: free_solid_svg_icons_index_es/* faForward */.irl
  })), /*#__PURE__*/react.createElement("button", {
    onClick: isCustomLoop ? null : onLoop,
    className: "mr-2"
  }, /*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G, {
    icon: free_solid_svg_icons_index_es/* faArrowsSpin */.zio,
    color: isLoop ? 'orange' : undefined
  })), /*#__PURE__*/react.createElement("button", {
    onClick: onCustomLoop
  }, /*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G, {
    icon: free_solid_svg_icons_index_es/* faHurricane */.yjX,
    color: isCustomLoop ? 'orange' : undefined
  }))), /*#__PURE__*/react.createElement("div", {
    className: "grow px-2"
  }, /*#__PURE__*/react.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/react.createElement("div", {
    className: "px-2 w-full"
  }, /*#__PURE__*/react.createElement(es/* default */.Z, {
    min: 0,
    range: isCustomLoop,
    max: 100,
    count: isCustomLoop ? 2 : 1,
    pushable: isCustomLoop && 1,
    value: isCustomLoop ? [loopRange.start, progress * 100, loopRange.end] : progress * 100,
    trackStyle: isCustomLoop ? [{
      backgroundColor: 'orange'
    }, {
      backgroundColor: '#fff'
    }] : {
      backgroundColor: '#fff'
    },
    onChange: onSliderChange
  })), /*#__PURE__*/react.createElement("div", {
    className: "flex"
  }, /*#__PURE__*/react.createElement("span", null, timeFormat(currentTime)), " /", ' ', /*#__PURE__*/react.createElement("span", null, timeFormat(duration))))), /*#__PURE__*/react.createElement("div", {
    className: "flex-none"
  }, /*#__PURE__*/react.createElement("button", {
    onClick: onMute,
    className: "mr-2"
  }, /*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G, {
    icon: isMuted ? free_solid_svg_icons_index_es/* faVolumeMute */.YLJ : free_solid_svg_icons_index_es/* faVolumeHigh */.AQZ
  })), /*#__PURE__*/react.createElement("button", {
    onClick: onFullScreen
  }, /*#__PURE__*/react.createElement(index_es/* FontAwesomeIcon */.G, {
    icon: free_solid_svg_icons_index_es/* faExpand */.TL5
  }))))));
};

Controls.propTypes = {
  onPlay: (prop_types_default()).func.isRequired,
  play: (prop_types_default()).bool.isRequired,
  onForward: (prop_types_default()).func.isRequired,
  onBackward: (prop_types_default()).func.isRequired,
  isMuted: (prop_types_default()).bool.isRequired,
  isLoop: (prop_types_default()).bool.isRequired,
  onLoop: (prop_types_default()).func.isRequired,
  onMute: (prop_types_default()).func.isRequired,
  progress: (prop_types_default()).number.isRequired,
  onSliderChange: (prop_types_default()).func.isRequired,
  currentTime: (prop_types_default()).number,
  duration: (prop_types_default()).number,
  showCongrols: (prop_types_default()).bool.isRequired,
  isCustomLoop: (prop_types_default()).bool.isRequired,
  onCustomLoop: (prop_types_default()).func.isRequired,
  onFullScreen: (prop_types_default()).func.isRequired,
  loopRange: (prop_types_default()).object
};
/* harmony default export */ const controls = (Controls);
// EXTERNAL MODULE: ./asset/resource/sky.mov
var sky = __webpack_require__(6621);
// EXTERNAL MODULE: ./node_modules/screenfull/index.js
var screenfull = __webpack_require__(7489);
;// CONCATENATED MODULE: ./src/components/VideoPlayer/index.js







var VideoPlayer = function VideoPlayer() {
  var videoRef = (0,react.useRef)(null);
  var timer = (0,react.useRef)(null);
  var container = (0,react.useRef)(null);
  var fullScreen = (0,react.useRef)(null);

  var _useState = (0,react.useState)(false),
      _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
      play = _useState2[0],
      setPlay = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
      isMuted = _useState4[0],
      setMute = _useState4[1];

  var _useState5 = (0,react.useState)(false),
      _useState6 = (0,slicedToArray/* default */.Z)(_useState5, 2),
      isLoop = _useState6[0],
      setLoop = _useState6[1];

  var _useState7 = (0,react.useState)(0),
      _useState8 = (0,slicedToArray/* default */.Z)(_useState7, 2),
      progress = _useState8[0],
      setProgress = _useState8[1];

  var _useState9 = (0,react.useState)(true),
      _useState10 = (0,slicedToArray/* default */.Z)(_useState9, 2),
      showCongrols = _useState10[0],
      setShowControls = _useState10[1];

  var _useState11 = (0,react.useState)(false),
      _useState12 = (0,slicedToArray/* default */.Z)(_useState11, 2),
      isCustomLoop = _useState12[0],
      setCustomLoop = _useState12[1];

  var _useState13 = (0,react.useState)({
    start: null,
    end: null
  }),
      _useState14 = (0,slicedToArray/* default */.Z)(_useState13, 2),
      loopRange = _useState14[0],
      setLoopRange = _useState14[1];

  var _useState15 = (0,react.useState)({
    start: null,
    progress: null,
    end: null
  }),
      _useState16 = (0,slicedToArray/* default */.Z)(_useState15, 2),
      loopRangeChangeValue = _useState16[0],
      setLoopRangeChangeValue = _useState16[1];

  var handlePlay = (0,react.useCallback)(function () {
    return setPlay(function (play) {
      return !play;
    });
  }, []);
  var handleForwardVideo = (0,react.useCallback)(function () {
    videoRef.current.seekTo(videoRef.current.getCurrentTime() + 5);
  }, []);
  var handleBackwardVideo = (0,react.useCallback)(function () {
    videoRef.current.seekTo(videoRef.current.getCurrentTime() - 5);
  }, []);
  var handleMute = (0,react.useCallback)(function () {
    return setMute(function (isMuted) {
      return !isMuted;
    });
  }, []);
  var handleLoop = (0,react.useCallback)(function () {
    return setLoop(function (isLoop) {
      return !isLoop;
    });
  }, []);
  var handleProgress = (0,react.useCallback)(function (_ref) {
    var played = _ref.played;
    setProgress(played);
  }, []);
  var handleSliderChange = (0,react.useCallback)(function (progress) {
    if (typeof progress === 'number') {
      setProgress(progress / 100);
      videoRef.current.seekTo(progress / 100);
    } else {
      setLoopRangeChangeValue({
        start: progress[0],
        progress: progress[1],
        end: progress[2]
      });
    }
  }, []);
  var handleShowControls = (0,react.useCallback)(function () {
    setShowControls(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(function () {
      setShowControls(false);
    }, 3000);
  }, []);
  var handleCustomLoop = (0,react.useCallback)(function () {
    setCustomLoop(function (isCustomLoop) {
      return !isCustomLoop;
    });
    setLoopRange({
      start: progress * 100,
      end: progress * 100 + 50
    });
  }, [progress]);
  var handleFullScreen = (0,react.useCallback)(function () {
    if (screenfull/* default.isEnabled */.Z.isEnabled) {
      screenfull/* default.toggle */.Z.toggle(fullScreen.current);
    }
  }, []);
  var currentTime = videoRef && videoRef.current ? videoRef.current.getCurrentTime() : Number('00:00');
  var duration = videoRef && videoRef.current ? videoRef.current.getDuration() : Number('00:00');
  (0,react.useEffect)(function () {
    container.current.addEventListener('mousemove', handleShowControls);
  }, [handleShowControls]);
  (0,react.useEffect)(function () {
    if (isCustomLoop && progress && progress * 100 > loopRange.end) {
      videoRef.current.seekTo(loopRange.start / 100);
      setProgress(loopRange.start / 100);
    }
  }, [isCustomLoop, loopRange, progress]);
  (0,react.useEffect)(function () {
    videoRef.current.seekTo(loopRangeChangeValue.progress / 100);
    setProgress(loopRangeChangeValue.progress / 100);
  }, [loopRangeChangeValue.progress]);
  (0,react.useEffect)(function () {
    setLoopRange({
      start: loopRangeChangeValue.start,
      end: loopRangeChangeValue.end
    });
    videoRef.current.seekTo(loopRangeChangeValue.start / 100);
    setProgress(loopRangeChangeValue.start / 100);
  }, [loopRangeChangeValue.start, loopRangeChangeValue.end]);
  return /*#__PURE__*/react.createElement("div", {
    className: "bg-slate-700 p-8"
  }, /*#__PURE__*/react.createElement("div", {
    ref: container,
    className: "bg-black w-full h-[calc(100vh-200px)] aspect-video relative overflow-hidden"
  }, /*#__PURE__*/react.createElement("div", {
    ref: fullScreen
  }, /*#__PURE__*/react.createElement(lib/* default */.Z, {
    playing: play,
    ref: videoRef,
    url: sky,
    muted: isMuted,
    loop: isLoop,
    width: "100%",
    height: "100%",
    fallback: /*#__PURE__*/react.createElement("div", null, "Loading"),
    onProgress: handleProgress
  }), /*#__PURE__*/react.createElement(controls, {
    onPlay: handlePlay,
    play: play,
    onForward: handleForwardVideo,
    onBackward: handleBackwardVideo,
    isMuted: isMuted,
    isLoop: isLoop,
    onMute: handleMute,
    onLoop: handleLoop,
    progress: progress,
    onSliderChange: handleSliderChange,
    currentTime: currentTime,
    duration: duration,
    showCongrols: showCongrols,
    onCustomLoop: handleCustomLoop,
    isCustomLoop: isCustomLoop,
    onFullScreen: handleFullScreen,
    loopRange: loopRange
  }))));
};

/* harmony default export */ const components_VideoPlayer = (VideoPlayer);
;// CONCATENATED MODULE: ./src/App.jsx




var App = function App() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(components_Navbar, null), /*#__PURE__*/react.createElement("div", {
    className: "px-4"
  }, /*#__PURE__*/react.createElement(components_VideoPlayer, null))));
};

/* harmony default export */ const src_App = (App);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./src/index.css
var cjs_js_src = __webpack_require__(2062);
;// CONCATENATED MODULE: ./src/index.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(cjs_js_src/* default */.Z, options);




       /* harmony default export */ const src = (cjs_js_src/* default */.Z && cjs_js_src/* default.locals */.Z.locals ? cjs_js_src/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/index.js




var root = document.getElementById('root');
react_dom.render( /*#__PURE__*/react.createElement(src_App, null), root);

/***/ }),

/***/ 2062:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "// extracted by mini-css-extract-plugin\nexport {};", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;QACQ,CAAA","sourcesContent":["// extracted by mini-css-extract-plugin\nexport {};"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6621:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01356b197f725bd141b3.mov";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [216], () => (__webpack_exec__(7457)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.cb8f913d6bffaf634fa6.bundle.js.map