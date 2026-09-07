System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, UIRenderer, Component, Color, director, Director, Sprite, Label, DEV, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, executeInEditMode, requireComponent, menu, Palette;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      UIRenderer = _cc.UIRenderer;
      Component = _cc.Component;
      Color = _cc.Color;
      director = _cc.director;
      Director = _cc.Director;
      Sprite = _cc.Sprite;
      Label = _cc.Label;
    }, function (_ccEnv) {
      DEV = _ccEnv.DEV;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "08ea8EtMzRAioF67nYwqmM8", "Palette", undefined);

      __checkObsolete__(['_decorator', 'UIRenderer', 'Component', 'Color', 'clamp', 'director', 'Director', 'Sprite', 'Label']);

      ({
        ccclass,
        property,
        executeInEditMode,
        requireComponent,
        menu
      } = _decorator);

      _export("Palette", Palette = (_dec = requireComponent(UIRenderer), _dec2 = menu('Public/Palette'), _dec3 = property({
        displayName: DEV && 'LB'
      }), _dec4 = property({
        displayName: DEV && 'RB'
      }), _dec5 = property({
        displayName: DEV && 'LT'
      }), _dec6 = property({
        displayName: DEV && 'RT'
      }), ccclass(_class = executeInEditMode(_class = _dec(_class = _dec2(_class = (_class2 = class Palette extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_colorLB", _descriptor, this);

          _initializerDefineProperty(this, "_colorRB", _descriptor2, this);

          _initializerDefineProperty(this, "_colorLT", _descriptor3, this);

          _initializerDefineProperty(this, "_colorRT", _descriptor4, this);

          this.ur = null;
          this.hue = [1, 1, 1];
        }

        get colorLB() {
          return this._colorLB;
        }

        set colorLB(value) {
          this._colorLB = value;
          this.updateColor();
        }

        get colorRB() {
          return this._colorRB;
        }

        set colorRB(value) {
          this._colorRB = value;
          this.updateColor();
        }

        get colorLT() {
          return this._colorLT;
        }

        set colorLT(value) {
          this._colorLT = value;
          this.updateColor();
        }

        get colorRT() {
          return this._colorRT;
        }

        set colorRT(value) {
          this._colorRT = value;
          this.updateColor();
        }

        onLoad() {
          this.ur = this.node.getComponent(UIRenderer);

          if (!(this.ur instanceof Sprite || this.ur instanceof Label)) {
            WARN('Palette 需要一个 Sprite 或 Label');
            this.destroy();
            return;
          }

          this.ur['_useVertexOpacity'] = true;
        }

        onEnable() {
          director.once(Director.EVENT_AFTER_DRAW, this.updateColor, this);
        }

        onDisable() {
          if (!this.ur['_renderData']) return;
          let vb = this.ur['_renderData'].chunk.vb;
          let color = this.ur.color;
          vb[5] = vb[14] = vb[23] = vb[32] = color.r / 255;
          vb[6] = vb[15] = vb[24] = vb[33] = color.g / 255;
          vb[7] = vb[16] = vb[25] = vb[34] = color.b / 255;
          vb[8] = vb[17] = vb[26] = vb[35] = color.a / 255;
        }

        updateColor() {
          let vb = this.ur['_renderData'].chunk.vb;
          let lb = this._colorLB,
              rb = this._colorRB,
              lt = this._colorLT,
              rt = this._colorRT;
          let d = 1 / 255,
              h = this.hue,
              r = h[0] * d,
              g = h[1] * d,
              b = h[2] * d;
          vb[5] = lb.r * r;
          vb[6] = lb.g * g;
          vb[7] = lb.b * b;
          vb[8] = lb.a / 255;
          vb[14] = rb.r * r;
          vb[15] = rb.g * g;
          vb[16] = rb.b * b;
          vb[17] = rb.a / 255;
          vb[23] = lt.r * r;
          vb[24] = lt.g * g;
          vb[25] = lt.b * b;
          vb[26] = lt.a / 255;
          vb[32] = rt.r * r;
          vb[33] = rt.g * g;
          vb[34] = rt.b * b;
          vb[35] = rt.a / 255;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_colorLB", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color(255, 255, 255, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "colorLB", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "colorLB"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_colorRB", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color(255, 255, 255, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "colorRB", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "colorRB"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_colorLT", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color(255, 255, 255, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "colorLT", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "colorLT"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_colorRT", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color(255, 255, 255, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "colorRT", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "colorRT"), _class2.prototype)), _class2)) || _class) || _class) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6b59555042a9092ad18f700c6cfe2d9a6b357b3b.js.map