System.register("chunks:///_virtual/main", ['./Main.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/Main.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, sys, assetManager, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sys = module.sys;
      assetManager = module.assetManager;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "479546N9mFLE6ivm6yjR9N5", "Main", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var VersionManifest = "version.manifest";
      var Main = exports('Main', (_dec = ccclass('Main'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Main, _Component);
        function Main() {
          return _Component.apply(this, arguments) || this;
        }
        var _proto = Main.prototype;
        _proto.start = function start() {
          var isApp = sys.platform == sys.Platform.ANDROID || sys.platform == sys.Platform.IOS;
          console.log("sys.platform ====>", sys.platform);
          globalThis.RemoteMD5 = {};
          isApp && this.getAppVersion();
          isApp || this.initGame();
        };
        _proto.initGame = function initGame() {
          var _this = this;
          var bundleName = "Common";
          var bundleUrl = bundleName;
          if (globalThis.RemoteMD5[bundleName] && globalThis.RemoteMD5[bundleName].length > 0) {
            var platform = sys.platform.toLowerCase();
            bundleUrl = "" + assetManager.downloader.remoteServerAddress + platform + "/" + globalThis.RemoteMD5[bundleName];
          }
          assetManager.loadBundle(bundleUrl, function (err, bundle) {
            if (err) {
              return console.error(err);
            }
            _this.node.addComponent("GameController");
          });
        };
        _proto.getAppVersion = function getAppVersion() {
          var _this2 = this;
          var url = assetManager.downloader.remoteServerAddress + VersionManifest;
          url += "?t=" + Date.now();
          console.log("getVersion ===>", url);
          this.file(url, function (res) {
            var json = JSON.parse(res);
            console.log("<-------------- getVersion -------------->");
            console.log(res);
            console.log(json.android);
            console.log(json.ios);
            sys.platform == sys.Platform.ANDROID && _this2.getBundleConfig(json.android);
            sys.platform == sys.Platform.IOS && _this2.getBundleConfig(json.ios);
          });
        };
        _proto.getBundleConfig = function getBundleConfig(version) {
          var _this3 = this;
          var platform = sys.platform.toLowerCase();
          var url = "" + assetManager.downloader.remoteServerAddress + platform + "/" + version + ".manifest";
          console.log("getBundleConfig ===>", url);
          this.file(url, function (res) {
            var json = JSON.parse(res);
            Object.keys(json.bundles).forEach(function (key) {
              globalThis.RemoteMD5[key] = json.bundles[key];
            });
            _this3.initGame();
          });
        };
        _proto.file = function file(url, sCb) {
          fetch(url, {
            cache: 'no-store',
            headers: {
              'Cache-Control': 'no-cache, no-store, max-age=0',
              'Pragma': 'no-cache',
              'Expires': '0'
            }
          }).then(function (response) {
            if (response.ok) {
              response.text().then(function (data) {
                sCb && sCb(data);
              });
            } else {
              console.error("FILE ERROR ==>", url);
            }
          })["catch"](function (error) {
            console.error("FILE ERROR ==>", url);
            console.error(error);
          });
        };
        return Main;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});