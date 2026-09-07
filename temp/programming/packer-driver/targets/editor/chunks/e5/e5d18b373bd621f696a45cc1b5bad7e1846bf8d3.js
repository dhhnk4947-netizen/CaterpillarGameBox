System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, ScrollView, FullView, Path, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, SelectLevelView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFullView(extras) {
    _reporterNs.report("FullView", "../../scripts/Tea/UI/UIView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPath(extras) {
    _reporterNs.report("Path", "../../scripts/Tea/decorators/tea.decorators", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
    }, function (_unresolved_2) {
      FullView = _unresolved_2.FullView;
    }, function (_unresolved_3) {
      Path = _unresolved_3.Path;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8778337RqNACLyRM+NWl8P2", "SelectLevelView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ScrollView']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SelectLevelView", SelectLevelView = (_dec = ccclass('SelectLevelView'), _dec2 = (_crd && Path === void 0 ? (_reportPossibleCrUseOfPath({
        error: Error()
      }), Path) : Path)('BackBtn'), _dec3 = (_crd && Path === void 0 ? (_reportPossibleCrUseOfPath({
        error: Error()
      }), Path) : Path)('ScrollView', ScrollView), _dec(_class = (_class2 = class SelectLevelView extends (_crd && FullView === void 0 ? (_reportPossibleCrUseOfFullView({
        error: Error()
      }), FullView) : FullView) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "backBtn", _descriptor, this);

          _initializerDefineProperty(this, "scrollView", _descriptor2, this);
        }

        onMount() {
          this.backBtn.on(Node.EventType.TOUCH_END, this.onClickBackBtn.bind(this));
        }

        onClickBackBtn(e) {
          this.back();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "backBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e5d18b373bd621f696a45cc1b5bad7e1846bf8d3.js.map