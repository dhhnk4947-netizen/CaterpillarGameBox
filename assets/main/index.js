System.register("chunks:///_virtual/main",["./Main.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/Main.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(o){var e,n,t,r,a,s;return{setters:[function(o){e=o.inheritsLoose},function(o){n=o.cclegacy,t=o._decorator,r=o.sys,a=o.assetManager,s=o.Component}],execute:function(){var i;n._RF.push({},"479546N9mFLE6ivm6yjR9N5","Main",void 0);var l=t.ccclass;t.property,o("Main",l("Main")(i=function(o){function n(){return o.apply(this,arguments)||this}e(n,o);var t=n.prototype;return t.start=function(){var o=r.platform==r.Platform.ANDROID||r.platform==r.Platform.IOS;console.log("sys.platform ====>",r.platform),globalThis.RemoteMD5={},o&&this.getAppVersion(),o||this.initGame()},t.initGame=function(){var o=this,e="Common",n=e;if(globalThis.RemoteMD5.Common&&globalThis.RemoteMD5.Common.length>0){var t=r.platform.toLowerCase();n=""+a.downloader.remoteServerAddress+t+"/"+globalThis.RemoteMD5.Common}a.loadBundle(n,(function(e,n){if(e)return console.error(e);o.node.addComponent("GameController")}))},t.getAppVersion=function(){var o=this,e=a.downloader.remoteServerAddress+"version.manifest";e+="?t="+Date.now(),console.log("getVersion ===>",e),this.file(e,(function(e){var n=JSON.parse(e);console.log("<-------------- getVersion --------------\x3e"),console.log(e),console.log(n.android),console.log(n.ios),r.platform==r.Platform.ANDROID&&o.getBundleConfig(n.android),r.platform==r.Platform.IOS&&o.getBundleConfig(n.ios)}))},t.getBundleConfig=function(o){var e=this,n=r.platform.toLowerCase(),t=""+a.downloader.remoteServerAddress+n+"/"+o+".manifest";console.log("getBundleConfig ===>",t),this.file(t,(function(o){var n=JSON.parse(o);Object.keys(n.bundles).forEach((function(o){globalThis.RemoteMD5[o]=n.bundles[o]})),e.initGame()}))},t.file=function(o,e){fetch(o,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store, max-age=0",Pragma:"no-cache",Expires:"0"}}).then((function(n){n.ok?n.text().then((function(o){e&&e(o)})):console.error("FILE ERROR ==>",o)})).catch((function(e){console.error("FILE ERROR ==>",o),console.error(e)}))},n}(s))||i);n._RF.pop()}}}));

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