System.register("chunks:///_virtual/Hall",["./HallView.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/HallView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./tea.decorators.ts","./UIView.ts"],(function(t){var e,i,n,o,l,s,r,a,u,c,p,h,g,b,m,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.initializerDefineProperty},function(t){n=t.cclegacy,o=t._decorator,l=t.Node,s=t.Tween,r=t.tween,a=t.size,u=t.game,c=t.Quat,p=t.easing,h=t.UITransform,g=t.Mask},function(t){b=t.Path},function(t){m=t.onMount,d=t.FullView}],execute:function(){var B,y,f,w,k,N,T,C,z,H,S,v,E,M,O,A,D,L,_,U;n._RF.push({},"ba2e4Q3CJNKB6pf5gC5K2Kd","HallView",void 0);const{ccclass:V,property:Q}=o;t("HallView",(B=V("HallView"),y=b("titleBase/title"),f=b("btns/OpenListBtn"),w=b("btns/QuitBtn"),k=b("btns/HelpBtn"),N=b("btns/SettingBtn"),T=b("loading/Mask",h),C=b("loading/Mask",g),z=b("loading"),H=b("btns/HelpBtn"),B((E=e((v=class extends d{constructor(...t){super(...t),i(this,"titleNode",E,this),i(this,"openListBtn",M,this),i(this,"quitBtn",O,this),i(this,"helpBtn",A,this),i(this,"settingBtn",D,this),i(this,"animNode",L,this),i(this,"animMask",_,this),i(this,"loading",U,this)}mount(){this.openListBtn.on(l.EventType.TOUCH_END,this.onClickOpenListBtn.bind(this)),this.quitBtn.on(l.EventType.TOUCH_END,this.onClickQuitBtn.bind(this)),this.helpBtn.on(l.EventType.TOUCH_END,this.onClickHelpBtn.bind(this)),this.settingBtn.on(l.EventType.TOUCH_END,this.onClickSettingBtn.bind(this))}onShow(){this.titleStartAnim()}onHide(){this.titleStopAnim()}onClickOpenListBtn(){console.log("<-------- onClickOpenListBtn --------\x3e"),this.loading.active=!0,s.stopAllByTarget(this.animNode),s.stopAllByTarget(this.animMask),r(this.animMask).set({segments:30}).to(.8,{segments:3}).start(),r(this.animNode).set({contentSize:a(2e3,2e3)}).to(.8,{contentSize:a(0,0)}).delay(1).call((()=>{s.stopAllByTarget(this.animNode),s.stopAllByTarget(this.animMask),r(this.animMask).set({segments:3}).to(1.2,{segments:5}).start(),r(this.animNode).set({contentSize:a(0,0)}).to(1.2,{contentSize:a(2e3,2400)}).call((()=>{this.loading.active=!1})).start()})).start()}onClickQuitBtn(){u.end()}onClickSettingBtn(){}onClickHelpBtn(){}titleStartAnim(){s.stopAllByTarget(this.titleNode);const t=c.fromEuler(new c,40,6,0),e=c.fromEuler(new c,0,0,0);let i=r(this.titleNode).to(1.5,{rotation:t},{easing:p.bounceOut}).to(2,{rotation:e},{easing:p.bounceIn}).delay(.5);r(this.titleNode).set({rotation:e}).repeatForever(i).start()}titleStopAnim(){s.stopAllByTarget(this.titleNode);const t=c.fromEuler(new c,0,0,0);r(this.titleNode).set({rotation:t}).start()}}).prototype,"titleNode",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=e(v.prototype,"openListBtn",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=e(v.prototype,"quitBtn",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=e(v.prototype,"helpBtn",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=e(v.prototype,"settingBtn",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=e(v.prototype,"animNode",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=e(v.prototype,"animMask",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=e(v.prototype,"loading",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),e(v.prototype,"mount",[H,m],Object.getOwnPropertyDescriptor(v.prototype,"mount"),v.prototype),S=v))||S));n._RF.pop()}}}));

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