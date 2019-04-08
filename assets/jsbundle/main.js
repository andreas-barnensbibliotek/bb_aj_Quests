(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        main: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/main.js", "vendors~main" ]);
    return checkDeferredModules();
})({
    "./assets/js/Helper/Modal_plugin.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("const ModalHandler = () => {\n  let contcssID = '#bb_aj_GenericModalContainer';\n  let confirmbuttonID = '#bb_aj_confirm'; //cacheDom\n\n  let $bb_aj_GenericModalContainer = $(contcssID); // EVENT\n  // $bb_aj_GenericModalContainer.on('click', confirmbuttonID, Confirmfunction);\n\n  $bb_aj_GenericModalContainer.on('click', '#bb_aj_avbryt', closeModal);\n  $bb_aj_GenericModalContainer.on('click', '.bb_aj_closeModal', closeModal); // Functions\n\n  function openInModal() {\n    $bb_aj_GenericModalContainer.fadeIn('slow');\n    return false;\n  }\n\n  function closeModal(time) {\n    if (time) {\n      $bb_aj_GenericModalContainer.fadeOut(time);\n    } else {\n      $bb_aj_GenericModalContainer.fadeOut('slow');\n    }\n\n    return false;\n  } // function Confirmfunction() {\n  // \talert('comnfirmed: JA!');\n  // \treturn false;\n  // }\n\n\n  return {\n    open: openInModal,\n    close: closeModal,\n    modalContainer: contcssID,\n    modalconfirmbuttonID: confirmbuttonID\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (ModalHandler);\n\n//# sourceURL=webpack:///./assets/js/Helper/Modal_plugin.js?");
    },
    "./assets/js/appsettings.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("const appsettings = () => {\n  // Localhost\n  //let _apiserver = 'http://localhost:59015';\n  //let _dnnURL = 'http://localdev.kivdev.se';\n  // DEV1\n  let _apiserver = 'http://dev1.barnensbibliotek.se:8080';\n  let _dnnURL = 'http://dev1.barnensbibliotek.se'; //DEV NYTT SERVER\n  //let _apiserver = 'http://dev1.barnensbibliotek.se:8080';\n  //let _dnnURL = 'http://nytt.barnensbibliotek.se';\n  //Live SERVER\n  //let _apiserver = \"https://www2.barnensbibliotek.se\";\n  //let _dnnURL = \"https://www.barnensbibliotek.se\";\n\n  let _devkey = 'alf';\n\n  let _apidevkeyend = '/devkey/' + _devkey + '/?type=json';\n\n  let _localOrServerURL = '';\n  let _htmltemplateURL = '/desktopModules/bb_aj_Quests/htmltemplates/'; //// HANDLEBAR TEMPLATE\n\n  let _hb_Doquestinfo_template = _dnnURL + _htmltemplateURL + 'doquestTemplate.txt';\n\n  let _hb_DoInputquestinfo_template = _dnnURL + _htmltemplateURL + 'doInputQuestTemplate.txt';\n\n  let _fn_visasubquest = function _fn_visasubquest() {\n    return _apiserver + '/Api_v3.1/quest/typ/shhidQ' + _apidevkeyend;\n  };\n\n  let _fn_dosubquest = function _fn_dosubquest() {\n    return _apiserver + '/Api_v3.1/quest/typ/utSQ' + _apidevkeyend;\n  };\n\n  return {\n    apiserver: _apiserver,\n    dnnURL: _dnnURL,\n    localOrServerURL: _localOrServerURL,\n    htmltemplateurl: _dnnURL + _htmltemplateURL,\n    devkey: _devkey,\n    handlebartemplate: {\n      hb_Doquestinfo_tmp: _hb_Doquestinfo_template,\n      hb_doinputquest_tmp: _hb_DoInputquestinfo_template\n    },\n    api: {\n      questcommand: {\n        showQuest: _fn_visasubquest,\n        doQuest: _fn_dosubquest\n      },\n      devkeyend: _apidevkeyend\n    },\n    debug: 'false'\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (appsettings);\n\n//# sourceURL=webpack:///./assets/js/appsettings.js?");
    },
    "./assets/js/components/doquestEvent.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony import */ var _Helper_Modal_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Helper/Modal_plugin */ \"./assets/js/Helper/Modal_plugin.js\");\n/* harmony import */ var _components_doquestInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/doquestInfo */ \"./assets/js/components/doquestInfo.js\");\n\n\n\nconst doQuestEventHandler = userid => {\n  // bind functions\n  let qinfohandler = Object(_components_doquestInfo__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"])();\n  let mod = Object(_Helper_Modal_plugin__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])();\n  let hbtemplate = ''; //cacheDom\n\n  let $bb_aj_doQuest = $('#bb_aj_doQuest');\n  let ModalcontcssID = '#bb_aj_GenericModalContainer';\n  let $bb_aj_GenericModalContainer = $(ModalcontcssID); //bind events\n\n  $('body').on('click', '#bb_aj_doQuest', showquestmodal);\n  $bb_aj_GenericModalContainer.on('click', '#bb_aj_dosubquest', dothesubquest);\n  $bb_aj_GenericModalContainer.on('click', '#bb_aj_doinputsubquest', doInputsubquest); // functions\n\n  function showquestmodal() {\n    mod.open();\n    return false;\n  }\n\n  function showsubQuest(qid, Userid, triggerid, hbtmpl) {\n    hbtemplate = hbtmpl;\n    let option = {\n      Userid: Userid,\n      QuestID: qid,\n      QTriggerID: triggerid,\n      hbtmpl: hbtmpl\n    };\n\n    if (Userid > 0) {\n      qinfohandler.showDoQuest(option, data => {\n        if (data.Statuscode === 2) {\n          $bb_aj_doQuest.show();\n        } else {\n          $bb_aj_doQuest.hide();\n        }\n      });\n    } else {\n      console.log('ej inloggad');\n    }\n\n    return false;\n  }\n\n  function dothesubquest() {\n    let getval = $('#bb_aj_modalbody');\n    let option = {\n      Userid: getval.attr('data-userid'),\n      QuestID: getval.attr('data-questid'),\n      QTriggerID: getval.attr('data-triggerid'),\n      uQuestID: getval.attr('data-uquestid'),\n      Svar: getval.attr('data-svar')\n    };\n\n    if (option.Userid > 0) {\n      qinfohandler.DoTheQuest(option, () => {\n        setTimeout(() => {\n          mod.close();\n          showsubQuest(option.QuestID, option.Userid, option.QTriggerID, hbtemplate);\n        }, 3000);\n      });\n    }\n\n    return false;\n  }\n\n  function doInputsubquest() {\n    let getval = $('#bb_aj_modalbody');\n    let getinputval = $('#bb_aj_subquest');\n\n    if (getinputval.text() != '') {\n      let option = {\n        Userid: getval.attr('data-userid'),\n        QuestID: getval.attr('data-questid'),\n        QTriggerID: getval.attr('data-triggerid'),\n        uQuestID: getval.attr('data-uquestid'),\n        Svar: getinputval.text()\n      };\n\n      if (option.Userid > 0) {\n        qinfohandler.DoTheQuest(option, () => {\n          setTimeout(() => {\n            mod.close();\n          }, 3000);\n        });\n      }\n    } else {\n      let option = {\n        cssID: ModalcontcssID,\n        handlebartemplate: 'inputtmpl',\n        data: {\n          Userid: getval.attr('data-userid'),\n          QuestID: getval.attr('data-questid'),\n          QTriggerID: getval.attr('data-triggerid'),\n          uQuestID: getval.attr('data-uquestid'),\n          Svar: getval.attr('data-svar')\n        }\n      }; //TODO visa alert!\n    }\n\n    return false;\n  }\n\n  return {\n    showsubquest: showsubQuest\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (doQuestEventHandler);\n\n//# sourceURL=webpack:///./assets/js/components/doquestEvent.js?");
    },
    "./assets/js/components/doquestInfo.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var _components_serverRequestHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/serverRequestHandler */ "./assets/js/components/serverRequestHandler.js");\n/* harmony import */ var _appsettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appsettings */ "./assets/js/appsettings.js");\n\n\n\nconst questinfo = () => {\n  let appsettings = Object(_appsettings__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();\n  let requestHandler = Object(_components_serverRequestHandler__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();\n\n  function showDoQuest(options, callback) {\n    let usehbtmplate = appsettings.handlebartemplate.hb_Doquestinfo_tmp;\n\n    if (options.hbtmpl === \'gametmpl\') {\n      usehbtmplate = appsettings.handlebartemplate.hb_Doquestinfo_tmp;\n    }\n\n    if (options.hbtmpl === \'inputtmpl\') {\n      usehbtmplate = appsettings.handlebartemplate.hb_doinputquest_tmp;\n    }\n\n    let requestdata = {\n      apiurl: appsettings.api.questcommand.showQuest(),\n      handlebartemplate: usehbtmplate,\n      cssID: \'#bb_aj_GenericModalContainer\',\n      postdata: {\n        Userid: options.Userid,\n        QuestID: options.QuestID,\n        QTriggerID: options.QTriggerID\n      }\n    };\n    render(requestdata, callback);\n  }\n\n  function DoTheQuest(options, callback) {\n    let requestdata = {\n      apiurl: appsettings.api.questcommand.doQuest(),\n      postdata: {\n        Userid: options.Userid,\n        QuestID: options.QuestID,\n        QTriggerID: options.QTriggerID,\n        uQuestID: options.uQuestID,\n        Svar: options.Svar\n      }\n    };\n    requestHandler.chkpost(requestdata, callback);\n  }\n\n  function render(getdata, callback) {\n    requestHandler.doPost(getdata, data => {\n      callback(data);\n    });\n  }\n\n  return {\n    showDoQuest: showDoQuest,\n    DoTheQuest: DoTheQuest\n  };\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (questinfo);\n\n//# sourceURL=webpack:///./assets/js/components/doquestInfo.js?');
    },
    "./assets/js/components/serverRequestHandler.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var _service_serviceApiHandler_2_0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/serviceApiHandler.2.0 */ "./assets/js/service/serviceApiHandler.2.0.js");\n/* harmony import */ var _handlebar_handlebarTemplateHandler_2_0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handlebar/handlebarTemplateHandler.2.0 */ "./assets/js/handlebar/handlebarTemplateHandler.2.0.js");\n\n\n\nconst serverRequesthandler = () => {\n  let servce = Object(_service_serviceApiHandler_2_0__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();\n  let handlebar = Object(_handlebar_handlebarTemplateHandler_2_0__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();\n\n  function renderPost(getdata, callback) {\n    servce.postjsondata(getdata.apiurl, getdata.postdata, data => {\n      handlebar.injectTemplate(getdata.cssID, getdata.handlebartemplate, data, () => {\n        console.log(\'api kört!\');\n        callback(data);\n      });\n    });\n  }\n\n  function chkPost(getdata, callback) {\n    servce.postjsondata(getdata.apiurl, getdata.postdata, data => {\n      console.log(\'api kört!\');\n      callback(data);\n    });\n  }\n\n  function showHbTempl(showdata, callback) {\n    handlebar.injectTemplate(showdata.cssID, showdata.handlebartemplate, showdata.data, () => {\n      console.log(\'api kört!\');\n      callback(data);\n    });\n  }\n\n  return {\n    doPost: renderPost,\n    chkpost: chkPost,\n    showhbtmpl: showHbTempl\n  };\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (serverRequesthandler);\n\n//# sourceURL=webpack:///./assets/js/components/serverRequestHandler.js?');
    },
    "./assets/js/handlebar/handlebarHelpers.js": function(module, exports) {
        eval('//var _ = require("lodash");\n//var $ = require("jquery");\n//var appsettingsobject = require("./../appsettings.js");\n//var appsettings = appsettingsobject.config;\nmodule.exports = {\n  init: function init() {\n    Handlebars.registerHelper(\'userRegQuest\', function (questcompleted, uppdrag) {\n      let retobj = \'\';\n\n      switch (questcompleted) {\n        case -1:\n          retobj = \'<i class="icon-plus" style="color:#ccc;"></i> \' + uppdrag;\n          break;\n\n        case 0:\n          retobj = \'<i class="icon-ok-circle" style="color:orange;"></i> \' + uppdrag;\n          break;\n\n        case 1:\n          retobj = \'<i class="icon-ok" style="color:green;"></i> \' + uppdrag + \' <span style="color:green;"> - KLART</span>\';\n          break;\n\n        default:\n      }\n\n      return retobj;\n    });\n    Handlebars.registerHelper(\'userRegQuestlist\', function (questcompleted, uppdrag) {\n      let retobj = \'\';\n\n      switch (questcompleted) {\n        case 1:\n          retobj = \'<i class="icon-ok" style="color:green;"></i> \' + uppdrag + \' <span style="color:green;"> - KLART</span>\';\n          break;\n\n        default:\n          retobj = \'<i class="icon-ok-circle" style="color:#666;"></i> \' + uppdrag;\n          break;\n      }\n\n      return retobj;\n    });\n    Handlebars.registerHelper(\'userRegQuestInfo\', function (questcompleted) {\n      let retobj = \'\';\n\n      switch (questcompleted) {\n        case -1:\n          retobj = \'<i class="icon-plus" style="color:#ccc;"></i> Inte registrerat!\';\n          break;\n\n        case 0:\n          retobj = \'<i class="icon-ok-circle" style="color:orange;"></i> Inte klart!\';\n          break;\n\n        case 1:\n          retobj = \'<span style="color:green;"> <i class="icon-ok"></i> Klart!</span>\';\n          break;\n      }\n\n      return retobj;\n    });\n    Handlebars.registerHelper(\'regUnreg\', function (quid, questcompleted) {\n      let retobj = \'\';\n\n      switch (questcompleted) {\n        case -1:\n          retobj = \'<button id="bb_aj_confirm" data-questid="\' + quid + \'">Registrera uppdrag</button>\';\n          break;\n\n        case 0:\n          retobj = \'<button id="bb_aj_unconfirm" data-questid="\' + quid + \'">Avregistrera uppdrag</button>\';\n          break;\n\n        case 1:\n          retobj = \'<div class="bb_aj_questFormCompleted"><h4>Uppdraget \' + String.fromCharCode(228) + \'r klart!</h4></div>\';\n          break;\n      }\n\n      return retobj;\n    });\n  }\n};\n\n//# sourceURL=webpack:///./assets/js/handlebar/handlebarHelpers.js?');
    },
    "./assets/js/handlebar/handlebarTemplateHandler.2.0.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('//var appsettingsobject = require("./../appsettings.js");\nvar handelbarhelpers = __webpack_require__(/*! ./handlebarHelpers.js */ "./assets/js/handlebar/handlebarHelpers.js");\n\nconst InjecthtmlTemplate = () => {\n  function inject(targetClass, usetemplateName, currentdata, callback) {\n    handelbarhelpers.init();\n    $.get(usetemplateName, function (data) {\n      var temptpl = Handlebars.compile(data);\n      $(targetClass).html(temptpl(currentdata));\n      callback();\n    }, \'html\');\n  }\n\n  return {\n    injectTemplate: inject\n  };\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (InjecthtmlTemplate);\n\n//# sourceURL=webpack:///./assets/js/handlebar/handlebarTemplateHandler.2.0.js?');
    },
    "./assets/js/main.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _components_doquestEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/doquestEvent */ \"./assets/js/components/doquestEvent.js\");\n\n$(function () {\n  let init = () => {\n    let questhandler = Object(_components_doquestEvent__WEBPACK_IMPORTED_MODULE_0__[/* default */ \"a\"])(); ///TODO ändra till class istället för id för att man skall kunna loopa igenom alla quest på sidan som visas\n\n    let userid = $('#barnensbiblCurrentUserid').html();\n    let $bb_aj_doQuest = $('#bb_aj_doQuest');\n    let QuestID = $bb_aj_doQuest.attr('data-questid');\n    let QTriggerID = $bb_aj_doQuest.attr('data-triggerid');\n    let hbTmpl = $bb_aj_doQuest.attr('data-hbTempl'); // hbTmpl = 'inputtmpl';\n\n    $bb_aj_doQuest.hide();\n    questhandler.showsubquest(QuestID, userid, QTriggerID, hbTmpl);\n  };\n\n  init(); /// javascript API f�r andra script att ansluta!\n\n  global.showsubquest = function () {\n    function Questshowsubquest(QuestID, userid, QTriggerID, hbTmpl) {\n      questhandler.showsubquest(QuestID, userid, QTriggerID, hbTmpl);\n    }\n\n    function test(value) {\n      if (value) {\n        alert('Ropar denna debugtext: ' + value);\n      } else {\n        alert('ropar utan debugtext!');\n      }\n    }\n\n    return {\n      questshowsubquet: Questshowsubquest,\n      test: test\n    };\n  };\n});\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    },
    "./assets/js/service/serviceApiHandler.2.0.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("const apiHandler = () => {\n  function test() {\n    alert('test');\n  }\n\n  function getjsondata(url, callback) {\n    if (!url) {\n      return false;\n    } else {\n      //console.log(\"Searchservicen hämtar Arrangemangdata\");\n      $.ajax({\n        async: true,\n        type: 'get',\n        dataType: 'jsonp',\n        url: url,\n        success: function success(data) {\n          console.log('Search Detalj arrangemang hämtat: ');\n          callback(data);\n        },\n        error: function error(xhr, ajaxOptions, thrownError) {\n          alert('Nått blev fel vid hämtning av arrangemang!');\n        }\n      });\n    }\n  }\n\n  function postjsondata(url, postdata, callback) {\n    if (!url) {\n      return false;\n    } else {\n      //console.log(\"Searchservicen hämtar Arrangemangdata\");\n      $.ajax({\n        async: true,\n        type: 'post',\n        url: url,\n        data: postdata,\n        success: function success(data) {\n          console.log('Hämtar Data: ');\n          callback(data);\n        },\n        error: function error(xhr, ajaxOptions, thrownError) {\n          alert('Nått blev fel vid hämtning av POST json!');\n        }\n      });\n    }\n  }\n\n  return {\n    test: test,\n    getjsondata: getjsondata,\n    postjsondata: postjsondata\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (apiHandler);\n\n//# sourceURL=webpack:///./assets/js/service/serviceApiHandler.2.0.js?");
    }
});