import { _decorator, Asset, assetManager, Component, sys } from 'cc';
const { ccclass, property } = _decorator;

const VersionManifest = "version.manifest";

@ccclass('Main')
export class Main extends Component {
    protected start(): void {
        const isApp = sys.platform == sys.Platform.ANDROID || sys.platform == sys.Platform.IOS;
        console.log("sys.platform ====>", sys.platform);
        globalThis.RemoteMD5 = {};
        isApp && this.getAppVersion();
        isApp || this.initGame();
    }

    initGame() {
        const bundleName = "Common";
        let bundleUrl = bundleName;

        if (globalThis.RemoteMD5[bundleName] && globalThis.RemoteMD5[bundleName].length > 0) {
            const platform = sys.platform.toLowerCase();
            bundleUrl = `${assetManager.downloader.remoteServerAddress}${platform}/${globalThis.RemoteMD5[bundleName]}`;
        }
        assetManager.loadBundle(bundleUrl, (err, bundle) => {
            if (err) {
                return console.error(err);
            }
            this.node.addComponent("GameController");
        });
    }

    getAppVersion() {
        let url = assetManager.downloader.remoteServerAddress + VersionManifest;
        url += `?t=${Date.now()}`;
        console.log("getVersion ===>", url);

        this.file(url, (res) => {
            const json = JSON.parse(res);
            console.log("<-------------- getVersion -------------->");
            console.log(res);
            console.log(json.android);
            console.log(json.ios);
            sys.platform == sys.Platform.ANDROID && this.getBundleConfig(json.android);
            sys.platform == sys.Platform.IOS && this.getBundleConfig(json.ios);
        });
    }

    getBundleConfig(version: string) {
        const platform = sys.platform.toLowerCase();
        const url = `${assetManager.downloader.remoteServerAddress}${platform}/${version}.manifest`;
        console.log("getBundleConfig ===>", url);

        this.file(url, (res) => {
            const json = JSON.parse(res);
            Object.keys(json.bundles).forEach(key => {
                globalThis.RemoteMD5[key] = json.bundles[key];
            })
            this.initGame();
        });
    }

    file(url, sCb) {
        fetch(url, {
            cache: 'no-store',
            headers: {
                'Cache-Control': 'no-cache, no-store, max-age=0',
                'Pragma': 'no-cache',
                'Expires': '0',
            },
        }).then(response => {
            if (response.ok) {
                response.text().then(data => {
                    sCb && sCb(data);
                })
            } else {
                console.error("FILE ERROR ==>", url);
            }
        }).catch(error => {
            console.error("FILE ERROR ==>", url);
            console.error(error);
        })
    }
}