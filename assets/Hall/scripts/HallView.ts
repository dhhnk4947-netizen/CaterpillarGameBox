import { _decorator, Component, director, easing, game, Node, Quat, quat, size, tween, Tween, UITransform, v3 } from 'cc';
import { FullView, onMount } from '../../scripts/Tea/UI/UIView';
import { Path } from '../../scripts/Tea/decorators/tea.decorators';
const { ccclass, property } = _decorator;

@ccclass('HallView')
export class HallView extends FullView {
    @Path('titleBase/title')
    titleNode: Node = null;
    @Path('btns/OpenListBtn')
    openListBtn: Node = null;
    @Path('btns/QuitBtn')
    quitBtn: Node = null;
    @Path('btns/HelpBtn')
    helpBtn: Node = null;
    @Path('btns/SettingBtn')
    settingBtn: Node = null;
    @Path('Mask', UITransform)
    animNode: UITransform = null;
    @onMount
    mount() {
        this.openListBtn.on(Node.EventType.TOUCH_END, this.onClickOpenListBtn.bind(this));
        this.quitBtn.on(Node.EventType.TOUCH_END, this.onClickQuitBtn.bind(this));
        this.helpBtn.on(Node.EventType.TOUCH_END, this.onClickHelpBtn.bind(this));
        this.settingBtn.on(Node.EventType.TOUCH_END, this.onClickSettingBtn.bind(this));
    }

    onShow() {
        this.titleStartAnim();
    }

    onHide() {
        this.titleStopAnim();
    }

    onClickOpenListBtn() {
        Tween.stopAllByTarget(this.animNode);
        tween(this.animNode)
            .set({ contentSize: size(2000, 2000) })
            .to(0.8, { contentSize: size(0, 0) })
            .delay(1)
            .call(() => {
                Tween.stopAllByTarget(this.animNode);
                tween(this.animNode)
                    .set({ contentSize: size(0, 0) })
                    .to(1.2, { contentSize: size(2000, 2000) })
                    .start();
            })
            .start();
    }

    onClickQuitBtn() {
    }

    onClickSettingBtn() {
    }

    onClickHelpBtn() {
    }

    titleStartAnim() {
        Tween.stopAllByTarget(this.titleNode);
        const rotationStart = Quat.fromEuler(new Quat(), 40, 6, 0);
        const rotationEnd = Quat.fromEuler(new Quat(), 0, 0, 0);
        let t = tween(this.titleNode)
            .to(1.5, { rotation: rotationStart }, { easing: easing.bounceOut })
            .to(2, { rotation: rotationEnd }, { easing: easing.bounceIn })
            .delay(0.5)

        tween(this.titleNode)
            .set({ rotation: rotationEnd })
            .repeatForever(t)
            .start();
    }

    titleStopAnim() {
        Tween.stopAllByTarget(this.titleNode);
        const rotation = Quat.fromEuler(new Quat(), 0, 0, 0);
        tween(this.titleNode)
            .set({ rotation: rotation })
            .start();
    }
}