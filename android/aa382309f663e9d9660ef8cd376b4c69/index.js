System.register("chunks:///_virtual/Hall",["./HallView.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/HallView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./tea.decorators.ts","./UIView.ts"],(function(t){var e,n,i,o,l,r,s,a,u,c,p,h,B,b,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.initializerDefineProperty},function(t){i=t.cclegacy,o=t._decorator,l=t.Node,r=t.Tween,s=t.tween,a=t.size,u=t.game,c=t.Quat,p=t.easing,h=t.UITransform},function(t){B=t.Path},function(t){b=t.onMount,d=t.FullView}],execute:function(){var g,m,y,f,w,N,C,T,H,S,z,k,E,O,v;i._RF.push({},"ba2e4Q3CJNKB6pf5gC5K2Kd","HallView",void 0);const{ccclass:A,property:D}=o;t("HallView",(g=A("HallView"),m=B("titleBase/title"),y=B("btns/OpenListBtn"),f=B("btns/QuitBtn"),w=B("btns/HelpBtn"),N=B("btns/SettingBtn"),C=B("Mask",h),g((S=e((H=class extends d{constructor(...t){super(...t),n(this,"titleNode",S,this),n(this,"openListBtn",z,this),n(this,"quitBtn",k,this),n(this,"helpBtn",E,this),n(this,"settingBtn",O,this),n(this,"animNode",v,this)}mount(){this.openListBtn.on(l.EventType.TOUCH_END,this.onClickOpenListBtn.bind(this)),this.quitBtn.on(l.EventType.TOUCH_END,this.onClickQuitBtn.bind(this)),this.helpBtn.on(l.EventType.TOUCH_END,this.onClickHelpBtn.bind(this)),this.settingBtn.on(l.EventType.TOUCH_END,this.onClickSettingBtn.bind(this))}onShow(){this.titleStartAnim()}onHide(){this.titleStopAnim()}onClickOpenListBtn(){console.log("<-------- onClickOpenListBtn --------\x3e"),r.stopAllByTarget(this.animNode),s(this.animNode).set({contentSize:a(2e3,2e3)}).to(.8,{contentSize:a(0,0)}).delay(1).call((()=>{r.stopAllByTarget(this.animNode),s(this.animNode).set({contentSize:a(0,0)}).to(1.2,{contentSize:a(2e3,2e3)}).start()})).start()}onClickQuitBtn(){u.end()}onClickSettingBtn(){}onClickHelpBtn(){}titleStartAnim(){r.stopAllByTarget(this.titleNode);const t=c.fromEuler(new c,40,6,0),e=c.fromEuler(new c,0,0,0);let n=s(this.titleNode).to(1.5,{rotation:t},{easing:p.bounceOut}).to(2,{rotation:e},{easing:p.bounceIn}).delay(.5);s(this.titleNode).set({rotation:e}).repeatForever(n).start()}titleStopAnim(){r.stopAllByTarget(this.titleNode);const t=c.fromEuler(new c,0,0,0);s(this.titleNode).set({rotation:t}).start()}}).prototype,"titleNode",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=e(H.prototype,"openListBtn",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=e(H.prototype,"quitBtn",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(H.prototype,"helpBtn",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=e(H.prototype,"settingBtn",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=e(H.prototype,"animNode",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),e(H.prototype,"mount",[b],Object.getOwnPropertyDescriptor(H.prototype,"mount"),H.prototype),T=H))||T));i._RF.pop()}}}));

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