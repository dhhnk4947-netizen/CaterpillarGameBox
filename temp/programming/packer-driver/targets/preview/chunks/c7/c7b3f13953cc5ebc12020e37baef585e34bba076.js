System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ReqHttp, _crd, ContentType;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15246KTAqpLj6cg6KiHAcX5", "ReqHttp", undefined);

      _export("default", ReqHttp = class ReqHttp {
        static post(url, params, sCb, fCb, type) {
          if (fCb === void 0) {
            fCb = null;
          }

          if (type === void 0) {
            type = ContentType.FORM;
          }

          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': type
            },
            body: type === ContentType.FORM ? new URLSearchParams(params).toString() : JSON.stringify(params)
          }).then(response => {
            if (response.ok) {
              response.json().then(data => {
                sCb && sCb(data);
              });
            } else {
              fCb && fCb();
            }
          }).catch(error => {
            fCb && fCb();
            ERROR("POST ERROR");
            ERROR(error);
          });
        }

        static get(url, params, sCb, fCb) {
          if (fCb === void 0) {
            fCb = null;
          }

          fetch(url + this.analyzeParams(params)).then(response => {
            if (response.ok) {
              response.json().then(data => {
                sCb && sCb(data);
              });
            } else {
              fCb && fCb();
            }
          }).catch(error => {
            fCb && fCb();
            ERROR("GET ERROR");
            ERROR(error);
          });
        }
        /**拼接参数列表 */


        static analyzeParams(params) {
          if (Object.keys(params).length == 0) return "";
          var analyzeStr = "?";
          Object.keys(params).forEach((key, index) => {
            if (index > 0) analyzeStr += '&';
            analyzeStr = analyzeStr + key + "=" + params[key];
          });
          return analyzeStr;
        }

      });

      ContentType = /*#__PURE__*/function (ContentType) {
        ContentType["JSON"] = "application/json";
        ContentType["FORM"] = "application/x-www-form-urlencoded";
        return ContentType;
      }(ContentType || {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c7b3f13953cc5ebc12020e37baef585e34bba076.js.map