class LevelRequire {
	public reqElements: LevelRequireElement[];
	
	public constructor() {
		this.reqElements = [];
	}

	/**
	 * 本关需要消除几种类型的方块
	 */
	public getLevelReqNum(): number {
		return this.reqElements.length;
	}

	/**
	 * 添加关卡元素
	 */
	public addElement(type: string, num: number) {
		var elem: LevelRequireElement = new LevelRequireElement();
		elem.num = num;
		elem.type = type;
		this.reqElements.push(elem);
	}

	/**
	 * 用户完成关卡后清理关卡数据
	 */
	public openChange() {
		this.reqElements = [];
	}

	/**
	 * 当玩家执行了一次消除动作时
	 * 修改当前关卡的过关条件
	 */
	public changeReqNum(type: string, num: number) {
		var l: number = this.getLevelReqNum();
		for(var i = 0; i < l; ++i) {
			if(this.reqElements[i].type == type) {
				this.reqElements[i].num -= num;
			}
		}
	}

	/**
	 * 判断玩家是否通关
	 */
	public isClear(): boolean {
		var l: number = this.getLevelReqNum();
		for(var i = 0; i < l; ++i) {
			if(this.reqElements[i].num > 0) {
				return false;
			}
		}
		return true;
	}
}