/**
 * 地图数据解析类
 */
class MapDataParse {
    public static createMapData(val: number[]): void {
        var len: number = val.length;
        GameData.unmapnum = len; // 表示一共有len个方块在地图中是不显示的
        var index: number = 0;
        for(var i = 0; i < len; ++i) {
            index = val[i];
            // index表示第几个格子不可用，获取该格子的行和列
            var row: number = Math.floor(index/GameData.MaxCol);
            var col: number = index % GameData.MaxRow;
            // 在地图上标记出该方块不可用
            GameData.mapData[row][col] = -1;
        }
        GameData.currentElementNum = GameData.MaxRow * GameData.MaxCol - len;
    }
}