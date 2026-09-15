System.register("chunks:///_virtual/Hall",["./HallView.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/HallView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./tea.decorators.ts","./UIView.ts"],(function(t){var e,n,i,o,l,r,s,a,u,p,c,h,b;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.initializerDefineProperty},function(t){i=t.cclegacy,o=t._decorator,l=t.Node,r=t.Tween,s=t.Quat,a=t.tween,u=t.easing,p=t.UITransform},function(t){c=t.Path},function(t){h=t.onMount,b=t.FullView}],execute:function(){var B,f,d,g,y,m,w,C,N,H,T,k,E,O,v;i._RF.push({},"ba2e4Q3CJNKB6pf5gC5K2Kd","HallView",void 0);const{ccclass:S,property:D}=o;t("HallView",(B=S("HallView"),f=c("titleBase/title"),d=c("btns/OpenListBtn"),g=c("btns/QuitBtn"),y=c("btns/HelpBtn"),m=c("btns/SettingBtn"),w=c("Mask",p),B((H=e((N=class extends b{constructor(...t){super(...t),n(this,"titleNode",H,this),n(this,"openListBtn",T,this),n(this,"quitBtn",k,this),n(this,"helpBtn",E,this),n(this,"settingBtn",O,this),n(this,"animNode",v,this)}mount(){this.openListBtn.on(l.EventType.TOUCH_END,this.onClickOpenListBtn.bind(this)),this.quitBtn.on(l.EventType.TOUCH_END,this.onClickQuitBtn.bind(this)),this.helpBtn.on(l.EventType.TOUCH_END,this.onClickHelpBtn.bind(this)),this.settingBtn.on(l.EventType.TOUCH_END,this.onClickSettingBtn.bind(this))}onShow(){this.titleStartAnim()}onHide(){this.titleStopAnim()}onClickOpenListBtn(){console.log("<-------- onClickOpenListBtn --------\x3e")}onClickQuitBtn(){}onClickSettingBtn(){}onClickHelpBtn(){}titleStartAnim(){r.stopAllByTarget(this.titleNode);const t=s.fromEuler(new s,40,6,0),e=s.fromEuler(new s,0,0,0);let n=a(this.titleNode).to(1.5,{rotation:t},{easing:u.bounceOut}).to(2,{rotation:e},{easing:u.bounceIn}).delay(.5);a(this.titleNode).set({rotation:e}).repeatForever(n).start()}titleStopAnim(){r.stopAllByTarget(this.titleNode);const t=s.fromEuler(new s,0,0,0);a(this.titleNode).set({rotation:t}).start()}}).prototype,"titleNode",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=e(N.prototype,"openListBtn",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=e(N.prototype,"quitBtn",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(N.prototype,"helpBtn",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=e(N.prototype,"settingBtn",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=e(N.prototype,"animNode",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),e(N.prototype,"mount",[h],Object.getOwnPropertyDescriptor(N.prototype,"mount"),N.prototype),C=N))||C));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/Hall', 'chunks:///_virtual/Hall'); 
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