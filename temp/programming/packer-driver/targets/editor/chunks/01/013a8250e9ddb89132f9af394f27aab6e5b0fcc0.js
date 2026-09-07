System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UUID, EventBase, _crd;

  function _reportPossibleCrUseOfUUID(extras) {
    _reporterNs.report("UUID", "./UUID", _context.meta, extras);
  }

  _export("EventBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      UUID = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b57e1oWtfFPrZHLO4PqHMP5", "EventBase", undefined);

      _export("EventBase", EventBase = class EventBase {
        constructor() {
          this.event_cache = {};
        }

        on(key, cb, sort, target) {
          if (!this.event_cache[key]) this.event_cache[key] = [];
          let event = {
            cb: cb,
            once: false
          };

          if (typeof sort === 'number') {
            event.sort = sort;
            target && (event.target = target);
          } else {
            if (sort) event.target = sort;
          }

          let getEvent = this.event_cache[key].find(e => e.cb === event.cb && e.target === event.target);
          if (getEvent) return getEvent.id;
          event.id = `${key}_${(_crd && UUID === void 0 ? (_reportPossibleCrUseOfUUID({
            error: Error()
          }), UUID) : UUID).generateUUID()}`;
          this.event_cache[key].push(event);
          this.event_cache[key].sort((a, b) => {
            var _a$sort, _b$sort;

            return ((_a$sort = a.sort) != null ? _a$sort : 0) - ((_b$sort = b.sort) != null ? _b$sort : 0);
          });
          return event.id;
        }

        once(key, cb, sort, target) {
          if (!this.event_cache[key]) this.event_cache[key] = [];
          let event = {
            cb: cb,
            once: true
          };

          if (typeof sort === 'number') {
            event.sort = sort;
            target && (event.target = target);
          } else {
            if (sort) event.target = sort;
          }

          let getEvent = this.event_cache[key].find(e => e.cb === event.cb && e.target === event.target);
          if (getEvent) return getEvent.id;
          event.id = `${key}_${(_crd && UUID === void 0 ? (_reportPossibleCrUseOfUUID({
            error: Error()
          }), UUID) : UUID).generateUUID()}`;
          this.event_cache[key].push(event);
          this.event_cache[key].sort((a, b) => {
            var _a$sort2, _b$sort2;

            return ((_a$sort2 = a.sort) != null ? _a$sort2 : 0) - ((_b$sort2 = b.sort) != null ? _b$sort2 : 0);
          });
          return event.id;
        }

        off(key, param) {
          if (!this.event_cache[key]) return;

          if (typeof param === 'string') {
            this.removeEventById(key, param);
            return;
          }

          this.removeByCb(key, param);
        }

        removeEventById(key, id) {
          let index = this.event_cache[key].findIndex(e => e.id === id);
          if (index !== -1) this.event_cache[key].splice(index, 1);
        }

        removeByCb(key, cb) {
          this.event_cache[key] = this.event_cache[key].filter(e => e.cb !== cb);
        }

        clearEvent(key) {
          if (!this.event_cache[key]) return;
          delete this.event_cache[key];
        }

        trigger(key, ...args) {
          if (!this.event_cache[key]) return;
          const events = [...this.event_cache[key]];

          for (let i = 0; i < events.length; i++) {
            let target = events[i].target;
            let cb = events[i].cb;

            if (target) {
              cb.apply(target, args);
            } else {
              cb(...args);
            }
          }

          this.event_cache[key] = this.event_cache[key].filter(e => !e.once);
        }

        clearEventCache() {
          this.event_cache = {};
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=013a8250e9ddb89132f9af394f27aab6e5b0fcc0.js.map