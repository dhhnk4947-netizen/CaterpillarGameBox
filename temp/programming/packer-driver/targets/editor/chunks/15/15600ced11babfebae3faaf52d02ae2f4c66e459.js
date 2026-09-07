System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Asset, AssetManager, assetManager, resources, AssetsManager, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Asset = _cc.Asset;
      AssetManager = _cc.AssetManager;
      assetManager = _cc.assetManager;
      resources = _cc.resources;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "244e85eCktMq4BMbuO+he67", "AssetsManager", undefined);

      __checkObsolete__(['Asset', 'AssetManager', 'assetManager', 'resources']);

      _export("default", AssetsManager = class AssetsManager {
        static load(path, abPackage, type, onProgress, onComplete) {
          var _params$type;

          let params = {
            path: path
          };

          if (type) {
            if (type.length === 3) {
              params.onProgress = type;
              params.onComplete = onProgress;

              if (typeof abPackage === 'string') {
                params.abPackage = abPackage;
              } else {
                params.type = abPackage;
              }
            } else if (type.length === 2) {
              params.onComplete = type;

              switch (typeof abPackage) {
                case 'function':
                  if (abPackage.length === 3) {
                    params.onProgress = abPackage;
                  } else {
                    params.type = abPackage;
                  }

                  break;

                case 'string':
                  params.abPackage = abPackage;
                  break;
              }
            } else {
              params.abPackage = abPackage;
              params.type = type;

              if (onComplete) {
                params.onProgress = onProgress;
                params.onComplete = onComplete;
              } else {
                params.onComplete = onProgress;
              }
            }
          } else {
            params.onComplete = abPackage;
          }

          params.type = (_params$type = params.type) != null ? _params$type : Asset;
          if (!params.onProgress) params.onProgress = (finish, total, item) => {};

          if (!params.abPackage || params.abPackage.length == 0) {
            resources.load(params.path, params.type, params.onProgress, params.onComplete);
            return;
          }

          if (params.abPackage in this.bundleCanche) {
            const bundle = this.bundleCanche[params.abPackage];
            bundle.load(params.path, params.type, params.onProgress, params.onComplete);
            return;
          }

          this.loadBundle(params.abPackage, bundle => {
            bundle.load(params.path, params.type, params.onProgress, params.onComplete);
          }, (err, res) => {
            params.onComplete(err, res);
          });
        }

        static preLoad(paths, abPackage, type, onProgress, onComplete) {
          var _params$type2;

          const params = {
            paths: paths
          };

          if (type) {
            if (type.length === 3) {
              params.onProgress = type;
              params.onComplete = onProgress;

              if (typeof abPackage === 'string') {
                params.abPackage = abPackage;
              } else {
                params.type = abPackage;
              }
            } else if (type.length === 2) {
              params.onComplete = type;

              switch (typeof abPackage) {
                case 'function':
                  if (abPackage.length === 3) {
                    params.onProgress = abPackage;
                  } else {
                    params.type = abPackage;
                  }

                  break;

                case 'string':
                  params.abPackage = abPackage;
                  break;
              }
            } else {
              params.abPackage = abPackage;
              params.type = type;

              if (onComplete) {
                params.onProgress = onProgress;
                params.onComplete = onComplete;
              } else {
                params.onComplete = onProgress;
              }
            }
          } else {
            params.onComplete = abPackage;
          }

          params.type = (_params$type2 = params.type) != null ? _params$type2 : Asset;

          if (!params.onProgress) {
            params.onProgress = (finish, total, item) => {};
          }

          if (!params.abPackage) {
            resources.preload(params.paths, params.type, params.onProgress, params.onComplete);
            return;
          }

          if (params.abPackage in this.bundleCanche) {
            const bundle = this.bundleCanche[params.abPackage];
            bundle.preload(params.paths, params.type, params.onProgress, params.onComplete);
            return;
          }

          this.loadBundle(params.abPackage, bundle => {
            bundle.preload(params.paths, params.type, params.onProgress, params.onComplete);
          }, (error, assets) => {
            params.onComplete(error, assets);
          });
        }

        static releaseAll(abPackage) {
          if (abPackage instanceof AssetManager.Bundle) {
            abPackage.releaseAll();
            return;
          }

          if (!(abPackage in this.bundleCanche)) return;
          const bundle = this.bundleCanche[abPackage];
          bundle.releaseAll();
        }

        static removeBundle(abPackage) {
          if (abPackage instanceof AssetManager.Bundle) {
            abPackage.releaseAll();
            assetManager.removeBundle(abPackage);
            return;
          }

          if (!(abPackage in this.bundleCanche)) return;
          const bundle = this.bundleCanche[abPackage];
          this.releaseAll(bundle);
          assetManager.removeBundle(bundle);
          delete this.bundleCanche[abPackage];
        }

        static release(path, abPackage, type) {
          const params = {
            path: path,
            type: Asset
          };

          if (typeof abPackage === 'string') {
            params.abPackage = abPackage;

            if (type) {
              params.type = type;
            }
          } else if (abPackage) {
            params.type = abPackage;
          }

          if (!params.abPackage) {
            resources.release(params.path, params.type);
            return;
          }

          if (params.abPackage in this.bundleCanche) {
            const bundle = this.bundleCanche[params.abPackage];
            bundle.release(params.path, params.type);
            return;
          }

          this.loadBundle(params.abPackage, bundle => {
            bundle.release(params.path, params.type);
          });
        }

        static loadDir(path, abPackage, type, onProgress, onComplete) {
          var _params$type3;

          const params = {
            path: path
          };

          if (type) {
            if (type.length === 3) {
              params.onProgress = type;
              params.onComplete = onProgress;

              if (typeof abPackage === 'string') {
                params.abPackage = abPackage;
              } else {
                params.type = abPackage;
              }
            } else if (type.length === 2) {
              params.onComplete = type;

              switch (typeof abPackage) {
                case 'function':
                  if (abPackage.length === 3) {
                    params.onProgress = abPackage;
                  } else {
                    params.type = abPackage;
                  }

                  break;

                case 'string':
                  params.abPackage = abPackage;
                  break;
              }
            } else {
              params.abPackage = abPackage;
              params.type = type;

              if (onComplete) {
                params.onProgress = onProgress;
                params.onComplete = onComplete;
              } else {
                params.onComplete = onProgress;
              }
            }
          } else {
            params.onComplete = abPackage;
          }

          params.type = (_params$type3 = params.type) != null ? _params$type3 : Asset;

          if (!params.onProgress) {
            params.onProgress = (finish, total, item) => {};
          }

          if (!params.abPackage) {
            resources.loadDir(params.path, params.type, params.onProgress, params.onComplete);
            return;
          }

          if (params.abPackage in this.bundleCanche) {
            const bundle = this.bundleCanche[params.abPackage];
            bundle.loadDir(params.path, params.type, params.onProgress, params.onComplete);
            return;
          }

          this.loadBundle(params.abPackage, bundle => {
            bundle.loadDir(params.path, params.type, params.onProgress, params.onComplete);
          }, (error, assets) => {
            params.onComplete(error, assets);
          });
        }

        static loadBundle(abPackage, succCb, failCb) {
          assetManager.loadBundle(abPackage, (err, bundle) => {
            if (err) {
              failCb && failCb(err, null);
              return;
            }

            this.bundleCanche[abPackage] = bundle;
            succCb && succCb(bundle);
          });
        }

        static getBundle(abPackage) {
          return new Promise((resolve, reject) => {
            if (abPackage in this.bundleCanche) {
              resolve(this.bundleCanche[abPackage]);
              return;
            }

            this.loadBundle(abPackage, bundle => {
              resolve(bundle);
            }, (error, assets) => {
              reject(error);
            });
          });
        }

        static preLoadDir(paths, abPackage, onProgress, onComplete) {
          let params = {
            paths: paths
          };

          if (typeof abPackage === 'string') {
            params.abPackage = abPackage;
          } else if (abPackage.length == 3) {
            params.onProgress = abPackage;
          } else {
            params.onComplete = abPackage;
          }

          if (onProgress && onProgress.length == 3) {
            params.onProgress = onProgress;
          } else if (onProgress && onProgress.length == 2) {
            params.onComplete = onProgress;
          }

          if (onComplete) {
            params.onComplete = onComplete;
          }

          if (!params.onProgress) {
            params.onProgress = (finish, total, item) => {};
          }

          let finishs = new Array(params.paths.length).fill(0);
          let totals = new Array(params.paths.length).fill(0);

          let onProgressFunc = (index, finish, total, item) => {
            finishs[index] = finish;
            totals[index] = total;
            params.onProgress(finishs.reduce((a, b) => a + b), totals.reduce((a, b) => a + b), item);
          };

          params.paths.forEach((path, index) => {
            this.loadDir(path, params.abPackage, (finish, total, item) => {
              onProgressFunc(index, finish, total, item);
            }, params.onComplete);
          });
        }

      });

      AssetsManager.bundleCanche = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=15600ced11babfebae3faaf52d02ae2f4c66e459.js.map