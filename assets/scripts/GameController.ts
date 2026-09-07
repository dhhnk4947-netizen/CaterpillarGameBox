import { _decorator, Component, Node } from 'cc';
import { MainMapper, Path } from './Tea/decorators/tea.decorators';
import { BundleName, ViewName } from './tools/Tools';
import { Autowired } from './Tea/Util/SingletonFactory';
import UIPage from './Tea/UI/UIPage';
const { ccclass, property } = _decorator;

@ccclass('GameController')
@MainMapper({ bundleName: BundleName.hall, uiPath: 'prefabs/view/', maxPage: 5, maxFullPage: 5, maxPopPage: 8 })
export class GameController extends Component {
    @Autowired(UIPage)
    uiPage: UIPage = null;
    mask: Node = null;
    protected start(): void {
        this.mask = this.node.getChildByName('mask');
        this.uiPage.init(this.GameStart.bind(this));
    }

    private GameStart() {
        this.mask.setSiblingIndex(999);
        ResetTo(ViewName.HallView);
    }
}