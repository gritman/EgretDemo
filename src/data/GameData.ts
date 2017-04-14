/**
 * 游戏运行时数据
 */
class GameData {
    
    public static mapData: number[][]; // 地图数据
    public static currentElementNum: number = 0; // 可用的地图块数量
    public static unmapnum: number = 0; // 不可用的地图块的数量

    public static stepNum: number = 0; // 当前玩家剩余步数
    public static levelStepNum: number = 0; // 当前关卡要求的步数
    public static elementTypes: number[]; // 当前关卡出现的方块类型
    public static levelreq: LevelRequire; // 当前关卡的通关条件
    
    public static elements: GameElement[]; // 游戏方块元素对象池
    public static unusedElements: number[]; // 未使用方块的ID
    public static levelBackgroundImageName: string = ""; // 当前关卡背景图
    public static MaxRow: number = 8; // 地图的最大行
    public static MaxCol: number = 8; // 地图的最大列
    
    public static stageW: number = 0; // 舞台的宽度
    public static stageH: number = 0; // 舞台的高度

    /**
     * 初始化所有数据
     */
    public static initData() {
        GameData.mapData = [];
        for(var i = 0; i < GameData.MaxRow; ++i) {
            var arr: number[] = [];
            for(var j = 0; j < GameData.MaxCol; ++j) {
                arr.push(-2);
            }
            GameData.mapData.push(arr);
        }

        GameData.levelreq = new LevelRequire();
        
        GameData.elements = [];
        GameData.unusedElements = [];
        var len: number = GameData.MaxRow = GameData.MaxCol;
        for(var q = 0; q < len; ++q) {
            var elem: GameElement = new GameElement();
            elem.id = q;
            GameData.elements.push(elem);
            GameData.unusedElements.push(q);
        }

        GameData.stageW = egret.MainContext.instance.stage.stageWidth;
        GameData.stageH = egret.MainContext.instance.stage.stageHeight;

    }


}