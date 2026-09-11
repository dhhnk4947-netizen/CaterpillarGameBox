System.register("chunks:///_virtual/Hall",["./HallView.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/HallView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIView.ts","./tea.decorators.ts"],(function(t){var e,i,n,o,l,r,s,a,u,p,c,h,b,B;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.initializerDefineProperty},function(t){n=t.cclegacy,o=t._decorator,l=t.Node,r=t.Tween,s=t.tween,a=t.size,u=t.Quat,p=t.easing,c=t.UITransform},function(t){h=t.onMount,b=t.FullView},function(t){B=t.Path}],execute:function(){var d,y,f,g,m,w,N,C,T,H,S,z,E,k,O;n._RF.push({},"ba2e4Q3CJNKB6pf5gC5K2Kd","HallView",void 0);const{ccclass:v,property:A}=o;t("HallView",(d=v("HallView"),y=B("titleBase/title"),f=B("btns/OpenListBtn"),g=B("btns/QuitBtn"),m=B("btns/HelpBtn"),w=B("btns/SettingBtn"),N=B("Mask",c),d((H=e((T=class extends b{constructor(...t){super(...t),i(this,"titleNode",H,this),i(this,"openListBtn",S,this),i(this,"quitBtn",z,this),i(this,"helpBtn",E,this),i(this,"settingBtn",k,this),i(this,"animNode",O,this)}mount(){this.openListBtn.on(l.EventType.TOUCH_END,this.onClickOpenListBtn.bind(this)),this.quitBtn.on(l.EventType.TOUCH_END,this.onClickQuitBtn.bind(this)),this.helpBtn.on(l.EventType.TOUCH_END,this.onClickHelpBtn.bind(this)),this.settingBtn.on(l.EventType.TOUCH_END,this.onClickSettingBtn.bind(this))}onShow(){this.titleStartAnim()}onHide(){this.titleStopAnim()}onClickOpenListBtn(){r.stopAllByTarget(this.animNode),s(this.animNode).set({contentSize:a(2e3,2e3)}).to(.8,{contentSize:a(0,0)}).delay(1).call((()=>{r.stopAllByTarget(this.animNode),s(this.animNode).set({contentSize:a(0,0)}).to(1.2,{contentSize:a(2e3,2e3)}).start()})).start()}onClickQuitBtn(){}onClickSettingBtn(){}onClickHelpBtn(){}titleStartAnim(){r.stopAllByTarget(this.titleNode);const t=u.fromEuler(new u,40,6,0),e=u.fromEuler(new u,0,0,0);let i=s(this.titleNode).to(1.5,{rotation:t},{easing:p.bounceOut}).to(2,{rotation:e},{easing:p.bounceIn}).delay(.5);s(this.titleNode).set({rotation:e}).repeatForever(i).start()}titleStopAnim(){r.stopAllByTarget(this.titleNode);const t=u.fromEuler(new u,0,0,0);s(this.titleNode).set({rotation:t}).start()}}).prototype,"titleNode",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(T.prototype,"openListBtn",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=e(T.prototype,"quitBtn",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(T.prototype,"helpBtn",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=e(T.prototype,"settingBtn",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=e(T.prototype,"animNode",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),e(T.prototype,"mount",[h],Object.getOwnPropertyDescriptor(T.prototype,"mount"),T.prototype),C=T))||C));n._RF.pop()}}}));

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