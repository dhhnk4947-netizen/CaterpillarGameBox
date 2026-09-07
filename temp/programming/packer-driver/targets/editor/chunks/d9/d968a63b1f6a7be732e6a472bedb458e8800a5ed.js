System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, DEBUG, DEV, LogApiManager, _crd;

  function LogApi(target, key, descriptor) {
    if (DEV || DEBUG) {
      const fn = descriptor.value;

      descriptor.value = function (...args) {
        LogApiManager.method(target.constructor.name, key, ...args);
        return fn.apply(this, args);
      };
    }
  }

  _export({
    LogApiManager: void 0,
    LogApi: LogApi
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_ccEnv) {
      DEBUG = _ccEnv.DEBUG;
      DEV = _ccEnv.DEV;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51bd4ppU6dCgJ5gYRTMih7C", "LogApi", undefined);

      _export("LogApiManager", LogApiManager = class LogApiManager {
        static getObj(obj) {
          let result = {};

          for (let key in obj) {
            if (obj[key] === null || obj[key] === undefined) {
              obj[key] = "null";
              continue;
            }

            if (typeof obj[key] === "function") continue;

            if (typeof obj[key] === "object") {
              result[key] = `objName:${obj[key].name}`;
              obj[key].constructor && (result[key] = `${obj[key].constructor.name} ${result[key]}`);
              continue;
            }

            result[key] = obj[key];
          }

          return result;
        }

        static formatParams(params) {
          let str = "<========= content =========>\n";
          let len = params.length;
          params.forEach((param, index) => {
            if (typeof param === "object") {
              let obj = this.getObj(param);
              index !== 0 && (str += "\n");
              str += JSON.stringify(obj);
              len !== index + 1 && (str += "\n");
              return;
            }

            index !== 0 && (str += "\t");
            str += param;
          });
          return str.trim();
        }

        static getMethodPath() {
          var _Error$stack;

          const stack = ((_Error$stack = new Error().stack) == null ? void 0 : _Error$stack.split('\n')) || [];
          let result = ['anonymous', 'anonymous'];

          for (let i = 3; i < stack.length; i++) {
            var _match$;

            let callerLine = stack[i] || '';
            let match = callerLine.match(/at\s+(.*?)(\s|\(|$)/);
            let trimStr = (match == null || (_match$ = match[1]) == null ? void 0 : _match$.trim()) || 'anonymous';
            let location = trimStr.split('.');
            if (location.length < 0 || location[0].startsWith('http://') || location[0].startsWith('https://')) continue;
            result = location;
            (result[0] === 'set' || result[0] === 'get') && (result[1] = `${result[0]} ${callerLine.trim().split(' ')[2]}`, result[0] = 'anonymous');
            break;
          }

          return result;
        }

        static method(clazzName, methodName, ...params) {
          DEBUG && console.log(clazzName, methodName, "==========>", ...params);
          DEV && console.log("%c[%s]：%c%s\n%c%s", "color: #0500FF;font-weight: bold;", clazzName, "color: #8547FE;font-weight: bold;", methodName, "color: #00A5B0;", this.formatParams(params));
        }

        static log(clazzName, methodName, ...params) {
          DEBUG && console.log(clazzName, methodName, "==========>", ...params);
          DEV && console.log("%c[%s]：%c%s\n%c%s", "color: #588C02;font-weight: bold;", clazzName, "color: #00630E;font-weight: bold;", methodName, "color: #000000;", this.formatParams(params));
        }

        static error(clazzName, methodName, ...params) {
          DEBUG && console.error(clazzName, methodName, "==========>", ...params);
          DEV && console.error("%c[%s]：%c%s\n%c%s", "color: #FF0000;font-weight: bold;", clazzName, "color: #FF4949;font-weight: bold;", methodName, "color: #960000;", this.formatParams(params));
        }

        static warn(clazzName, methodName, ...params) {
          DEBUG && console.warn(clazzName, methodName, "==========>", ...params);
          DEV && console.warn("%c[%s]：%c%s\n%c%s", "color: #FF4D00;font-weight: bold;", clazzName, "color: #FF8A00;font-weight: bold;", methodName, "color: #7B4300;", this.formatParams(params));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d968a63b1f6a7be732e6a472bedb458e8800a5ed.js.map