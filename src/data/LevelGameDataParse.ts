class LevelGameDataParse {
    /**
     * 因为JSON加载进来后会变成Object，所以需要用Any类型
     */
    public static parseLevelGameData(val: any) {
        GameData.stepNum = val.step;
        GameData.levelStepNum = val.step;
        GameData.elementTypes = val.element;
        GameData.levelBackgroundImageName = val.levelbgimg;
        LevelGameDataParse.parseLevelReq(val.levelreq);
    }

    /**
     * 解析过关条件
     */
    private static parseLevelReq(val: any) {
        GameData.levelreq.openChange();
        var len: number = val.length;
        for(var i = 0; i < len; ++i) {
            GameData.levelreq.addElement(val[i].type, val[i].num);
        }
    }
}