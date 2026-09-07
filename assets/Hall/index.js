System.register("chunks:///_virtual/Hall",["./HallView.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/HallView.ts",["./rollupPluginModLoBabelHelpers.js","cc","./UIView.ts","./tea.decorators.ts"],(function(t){var e,n,i,o,r,l,a,s,u,c,p,f,h,b,B,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,l=t._decorator,a=t.Node,s=t.Tween,u=t.tween,c=t.size,p=t.Quat,f=t.easing,h=t.UITransform},function(t){b=t.onMount,B=t.FullView},function(t){d=t.Path}],execute:function(){var y,g,m,w,N,v,T,C,z,H,S,E,k,O,A;r._RF.push({},"ba2e4Q3CJNKB6pf5gC5K2Kd","HallView",void 0);var D=l.ccclass;l.property,t("HallView",(y=D("HallView"),g=d("titleBase/title"),m=d("btns/OpenListBtn"),w=d("btns/QuitBtn"),N=d("btns/HelpBtn"),v=d("btns/SettingBtn"),T=d("Mask",h),y((H=e((z=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return e=t.call.apply(t,[this].concat(r))||this,i(e,"titleNode",H,o(e)),i(e,"openListBtn",S,o(e)),i(e,"quitBtn",E,o(e)),i(e,"helpBtn",k,o(e)),i(e,"settingBtn",O,o(e)),i(e,"animNode",A,o(e)),e}n(e,t);var r=e.prototype;return r.mount=function(){this.openListBtn.on(a.EventType.TOUCH_END,this.onClickOpenListBtn.bind(this)),this.quitBtn.on(a.EventType.TOUCH_END,this.onClickQuitBtn.bind(this)),this.helpBtn.on(a.EventType.TOUCH_END,this.onClickHelpBtn.bind(this)),this.settingBtn.on(a.EventType.TOUCH_END,this.onClickSettingBtn.bind(this))},r.onShow=function(){this.titleStartAnim()},r.onHide=function(){this.titleStopAnim()},r.onClickOpenListBtn=function(){var t=this;s.stopAllByTarget(this.animNode),u(this.animNode).set({contentSize:c(2e3,2e3)}).to(.8,{contentSize:c(0,0)}).delay(1).call((function(){s.stopAllByTarget(t.animNode),u(t.animNode).set({contentSize:c(0,0)}).to(1.2,{contentSize:c(2e3,2e3)}).start()})).start()},r.onClickQuitBtn=function(){},r.onClickSettingBtn=function(){},r.onClickHelpBtn=function(){},r.titleStartAnim=function(){s.stopAllByTarget(this.titleNode);var t=p.fromEuler(new p,40,6,0),e=p.fromEuler(new p,0,0,0),n=u(this.titleNode).to(1.5,{rotation:t},{easing:f.bounceOut}).to(2,{rotation:e},{easing:f.bounceIn}).delay(.5);u(this.titleNode).set({rotation:e}).repeatForever(n).start()},r.titleStopAnim=function(){s.stopAllByTarget(this.titleNode);var t=p.fromEuler(new p,0,0,0);u(this.titleNode).set({rotation:t}).start()},e}(B)).prototype,"titleNode",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=e(z.prototype,"openListBtn",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(z.prototype,"quitBtn",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=e(z.prototype,"helpBtn",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=e(z.prototype,"settingBtn",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=e(z.prototype,"animNode",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),e(z.prototype,"mount",[b],Object.getOwnPropertyDescriptor(z.prototype,"mount"),z.prototype),C=z))||C));r._RF.pop()}}}));

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