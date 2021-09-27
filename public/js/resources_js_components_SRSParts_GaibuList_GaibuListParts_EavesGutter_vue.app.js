(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_SRSParts_GaibuList_GaibuListParts_EavesGutter_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SRSParts/GaibuList/GaibuListParts/EavesGutter.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SRSParts/GaibuList/GaibuListParts/EavesGutter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    var _ref;

    return _ref = {
      textureMaterial: null,
      kind: '軒樋',
      rowIndex: '7'
    }, _defineProperty(_ref, "textureMaterial", ''), _defineProperty(_ref, "textureColor", ''), _defineProperty(_ref, "texturesInAPI", []), _defineProperty(_ref, "defaultSelectedTextureInfo", {}), _ref;
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['UserInterface', 'PlanInfo'])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(['selectedItemsPrevious'])),
  mounted: function mounted() {
    try {
      this.$PlanData.preSelectedItem('7'); //set default

      this.texturesInAPI = this.$PlanData.texturesInAPI(this.$PlanData.itemIndex('7'));
      this.defaultSelectedTextureInfo = this.PlanInfo.SelectedItems[this.$PlanData.itemIndexInSelected('7')];

      switch (this.defaultSelectedTextureInfo.Material) {
        case 'なし':
        case 'その他':
          this.textureColor = this.defaultSelectedTextureInfo.Material;
          break;

        default:
          this.textureColor = this.defaultSelectedTextureInfo.JapaneseName;
          break;
      }
    } catch (_unused) {
      console.log('no texture defaults');
    }
  },
  methods: {
    saveTextureInfoASJSON: function saveTextureInfoASJSON(textureInfo, material, hasTexture) {
      textureInfo['RowIndex'] = this.rowIndex;
      textureInfo['Kind'] = this.kind;
      textureInfo['Material'] = material;
      this.$PlanData.addSelectedItems(textureInfo, hasTexture);

      if (this.textureColor == null || this.textureMaterial == null) {
        this.textureMaterial = '';
        this.textureColor = '';
        this.$PlanData.removeItemInSelected(this.$PlanData.itemIndexInSelected(this.rowIndex));
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/components/SRSParts/GaibuList/GaibuListParts/EavesGutter.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/SRSParts/GaibuList/GaibuListParts/EavesGutter.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EavesGutter_vue_vue_type_template_id_9ba8de6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EavesGutter.vue?vue&type=template&id=9ba8de6a& */ "./resources/js/components/SRSParts/GaibuList/GaibuListParts/EavesGutter.vue?vue&type=template&id=9ba8de6a&");
/* harmony import */ var _EavesGutter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EavesGutter.vue?vue&type=script&lang=js& */ "./resources/js/components/SRSParts/GaibuList/GaibuListParts/EavesGutter.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EavesGutter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EavesGutter_vue_vue_type_template_id_9ba8de6a___WEBPACK_IMPORTED_MODULE_0__.render,
  _EavesGutter_vue_vue_type_template_id_9ba8de6a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SRSParts/GaibuList/GaibuListParts/EavesGutter.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/SRSParts/GaibuList/GaibuListParts/EavesGutter.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/SRSParts/GaibuList/GaibuListParts/EavesGutter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EavesGutter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EavesGutter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SRSParts/GaibuList/GaibuListParts/EavesGutter.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EavesGutter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/SRSParts/GaibuList/GaibuListParts/EavesGutter.vue?vue&type=template&id=9ba8de6a&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/SRSParts/GaibuList/GaibuListParts/EavesGutter.vue?vue&type=template&id=9ba8de6a& ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EavesGutter_vue_vue_type_template_id_9ba8de6a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EavesGutter_vue_vue_type_template_id_9ba8de6a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EavesGutter_vue_vue_type_template_id_9ba8de6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EavesGutter.vue?vue&type=template&id=9ba8de6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SRSParts/GaibuList/GaibuListParts/EavesGutter.vue?vue&type=template&id=9ba8de6a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SRSParts/GaibuList/GaibuListParts/EavesGutter.vue?vue&type=template&id=9ba8de6a&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/SRSParts/GaibuList/GaibuListParts/EavesGutter.vue?vue&type=template&id=9ba8de6a& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "grey lighten-4 pa-2", attrs: { fluid: "" } },
    [
      _c(
        "v-simple-table",
        { staticClass: "tg", attrs: { width: "100%" } },
        [
          _c("tr", [
            _c(
              "td",
              {
                staticClass: "firstColumnWidth",
                attrs: { rowspan: _vm.texturesInAPI.length + 3 }
              },
              [_c("v-label", [_vm._v("軒樋")])],
              1
            )
          ]),
          _vm._v(" "),
          _vm._l(_vm.texturesInAPI, function(texture, textureIndex) {
            return [
              _vm.$PlanData.itemIndexTexture(
                _vm.texturesInAPI,
                texture.SortNo
              ) == 0
                ? _c("tr", { key: textureIndex }, [
                    _c(
                      "td",
                      [
                        _c("v-checkbox", {
                          staticClass: "shrink mt-0",
                          attrs: {
                            color: "orange",
                            "hide-details": "",
                            label: texture.JapaneseName,
                            value: texture.JapaneseName
                          },
                          on: {
                            change: function($event) {
                              return _vm.saveTextureInfoASJSON(
                                texture,
                                "",
                                true
                              )
                            }
                          },
                          model: {
                            value: _vm.textureColor,
                            callback: function($$v) {
                              _vm.textureColor = $$v
                            },
                            expression: "textureColor"
                          }
                        })
                      ],
                      1
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.$PlanData.itemIndexTexture(
                _vm.texturesInAPI,
                texture.SortNo
              ) > 0
                ? _c("tr", { key: textureIndex }, [
                    _c(
                      "td",
                      [
                        _c("v-checkbox", {
                          staticClass: "shrink mt-0",
                          attrs: {
                            color: "orange",
                            "hide-details": "",
                            label: texture.JapaneseName,
                            value: texture.JapaneseName
                          },
                          on: {
                            change: function($event) {
                              return _vm.saveTextureInfoASJSON(
                                texture,
                                "",
                                true
                              )
                            }
                          },
                          model: {
                            value: _vm.textureColor,
                            callback: function($$v) {
                              _vm.textureColor = $$v
                            },
                            expression: "textureColor"
                          }
                        })
                      ],
                      1
                    )
                  ])
                : _vm._e()
            ]
          }),
          _vm._v(" "),
          _c("tr", [
            _c(
              "td",
              [
                _c("v-checkbox", {
                  staticClass: "shrink mt-0",
                  attrs: {
                    color: "orange",
                    "hide-details": "",
                    label: "なし",
                    value: "なし"
                  },
                  on: {
                    change: function($event) {
                      return _vm.saveTextureInfoASJSON({}, "なし", false)
                    }
                  },
                  model: {
                    value: _vm.textureColor,
                    callback: function($$v) {
                      _vm.textureColor = $$v
                    },
                    expression: "textureColor"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("tr", [
            _c(
              "td",
              [
                _c("v-checkbox", {
                  staticClass: "shrink mt-0",
                  attrs: {
                    color: "orange",
                    "hide-details": "",
                    label: "その他",
                    value: "その他"
                  },
                  on: {
                    change: function($event) {
                      return _vm.saveTextureInfoASJSON({}, "その他", false)
                    }
                  },
                  model: {
                    value: _vm.textureColor,
                    callback: function($$v) {
                      _vm.textureColor = $$v
                    },
                    expression: "textureColor"
                  }
                })
              ],
              1
            )
          ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);