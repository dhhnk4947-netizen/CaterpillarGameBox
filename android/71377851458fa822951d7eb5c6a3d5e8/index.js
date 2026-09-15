System.register("chunks:///_virtual/Hall",["./HallView.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/HallView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./tea.decorators.ts","./UIView.ts"],(function(t){var e,n,i,o,l,r,s,a,u,p,c,h,b,B;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.initializerDefineProperty},function(t){i=t.cclegacy,o=t._decorator,l=t.Node,r=t.game,s=t.Tween,a=t.Quat,u=t.tween,p=t.easing,c=t.UITransform},function(t){h=t.Path},function(t){b=t.onMount,B=t.FullView}],execute:function(){var d,f,g,y,m,w,C,N,H,T,k,E,O,v,S;i._RF.push({},"ba2e4Q3CJNKB6pf5gC5K2Kd","HallView",void 0);const{ccclass:D,property:L}=o;t("HallView",(d=D("HallView"),f=h("titleBase/title"),g=h("btns/OpenListBtn"),y=h("btns/QuitBtn"),m=h("btns/HelpBtn"),w=h("btns/SettingBtn"),C=h("Mask",c),d((T=e((H=class extends B{constructor(...t){super(...t),n(this,"titleNode",T,this),n(this,"openListBtn",k,this),n(this,"quitBtn",E,this),n(this,"helpBtn",O,this),n(this,"settingBtn",v,this),n(this,"animNode",S,this)}mount(){this.openListBtn.on(l.EventType.TOUCH_END,this.onClickOpenListBtn.bind(this)),this.quitBtn.on(l.EventType.TOUCH_END,this.onClickQuitBtn.bind(this)),this.helpBtn.on(l.EventType.TOUCH_END,this.onClickHelpBtn.bind(this)),this.settingBtn.on(l.EventType.TOUCH_END,this.onClickSettingBtn.bind(this))}onShow(){this.titleStartAnim()}onHide(){this.titleStopAnim()}onClickOpenListBtn(){console.log("<-------- onClickOpenListBtn --------\x3e")}onClickQuitBtn(){r.end()}onClickSettingBtn(){}onClickHelpBtn(){}titleStartAnim(){s.stopAllByTarget(this.titleNode);const t=a.fromEuler(new a,40,6,0),e=a.fromEuler(new a,0,0,0);let n=u(this.titleNode).to(1.5,{rotation:t},{easing:p.bounceOut}).to(2,{rotation:e},{easing:p.bounceIn}).delay(.5);u(this.titleNode).set({rotation:e}).repeatForever(n).start()}titleStopAnim(){s.stopAllByTarget(this.titleNode);const t=a.fromEuler(new a,0,0,0);u(this.titleNode).set({rotation:t}).start()}}).prototype,"titleNode",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=e(H.prototype,"openListBtn",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(H.prototype,"quitBtn",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=e(H.prototype,"helpBtn",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=e(H.prototype,"settingBtn",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(H.prototype,"animNode",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),e(H.prototype,"mount",[b],Object.getOwnPropertyDescriptor(H.prototype,"mount"),H.prototype),N=H))||N));i._RF.pop()}}}));

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