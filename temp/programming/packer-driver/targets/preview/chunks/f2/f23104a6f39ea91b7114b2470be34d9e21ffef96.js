System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, UUID, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99caa0SHdRO7qaJzVJUHe1W", "UUID", undefined);

      _export("default", UUID = class UUID {
        static generateUUID() {
          var hexDigits = '0123456789abcdef';
          var s = Array(36).fill('');

          for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.charAt(Math.floor(Math.random() * 0x10));
          }

          s[14] = '4';
          s[19] = hexDigits.charAt(parseInt(s[19], 16) & 0x3 | 0x8);
          s[8] = s[13] = s[18] = s[23] = '-';
          return s.join('');
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f23104a6f39ea91b7114b2470be34d9e21ffef96.js.map