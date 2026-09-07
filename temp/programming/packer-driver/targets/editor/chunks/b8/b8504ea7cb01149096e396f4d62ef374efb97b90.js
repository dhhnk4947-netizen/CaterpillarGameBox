System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, MainMapper, BundleName, ViewName, Autowired, UIPage, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, property, GameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMainMapper(extras) {
    _reporterNs.report("MainMapper", "./Tea/decorators/tea.decorators", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBundleName(extras) {
    _reporterNs.report("BundleName", "./tools/Tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "./tools/Tools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAutowired(extras) {
    _reporterNs.report("Autowired", "./Tea/Util/SingletonFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPage(extras) {
    _reporterNs.report("UIPage", "./Tea/UI/UIPage", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      MainMapper = _unresolved_2.MainMapper;
    }, function (_unresolved_3) {
      BundleName = _unresolved_3.BundleName;
      ViewName = _unresolved_3.ViewName;
    }, function (_unresolved_4) {
      Autowired = _unresolved_4.Autowired;
    }, function (_unresolved_5) {
      UIPage = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eac8etVNiVLX4pW09XjAo3W", "GameController", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = (_crd && MainMapper === void 0 ? (_reportPossibleCrUseOfMainMapper({
        error: Error()
      }), MainMapper) : MainMapper)({
        bundleName: (_crd && BundleName === void 0 ? (_reportPossibleCrUseOfBundleName({
          error: Error()
        }), BundleName) : BundleName).hall,
        uiPath: 'prefabs/view/',
        maxPage: 5,
        maxFullPage: 5,
        maxPopPage: 8
      }), _dec3 = (_crd && Autowired === void 0 ? (_reportPossibleCrUseOfAutowired({
        error: Error()
      }), Autowired) : Autowired)(_crd && UIPage === void 0 ? (_reportPossibleCrUseOfUIPage({
        error: Error()
      }), UIPage) : UIPage), _dec(_class = _dec2(_class = (_class2 = class GameController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "uiPage", _descriptor, this);

          this.mask = null;
        }

        start() {
          this.mask = this.node.getChildByName('mask');
          this.uiPage.init(this.GameStart.bind(this));
        }

        GameStart() {
          this.mask.setSiblingIndex(999);
          ResetTo((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
            error: Error()
          }), ViewName) : ViewName).HallView);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiPage", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b8504ea7cb01149096e396f4d62ef374efb97b90.js.map