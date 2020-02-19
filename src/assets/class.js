//effect do type
// A：持续每回合，显示，一定时间消去//不改变基础值
// B：直接加，显示，可消去//不改变基础值
// C：直接加，不显示//改变基础值



export class HOBEffect {
    constructor(type, num = 0, last = 0, base = true) {
        this.type = type;
        this.num = num;
        this.last = last;
        this.base = base;
    }
}

export class HOBSpirit {
    constructor(name, effect) {
        this.name = name;
        this.effect = effect;
    }
}

export class HOBFocus {
    constructor(name, detail, day, front, against) {
        this.name = name;
        this.detail = detail;
        this.day = day ? day : 28;
        this.front = front;
        this.against = against;
    }
}

export class HOBChoice {
    constructor(name, effectArr) {
        this.name = name;
        this.effectArr = effectArr;
    }
}

export class HOBEventPop {
    constructor(headline, detail, choiceArr, type = 1) {
        //type：news(0)  /  choice(1)
        this.type = type;
        this.headline = headline;
        this.detail = detail;
        this.choiceArr = choiceArr;
    }

}

export class HOBNews extends HOBEventPop {
    constructor(headline, detail, choice) {
        let c = new HOBChoice(choice, []);
        super(headline, detail, [c], 0)
    }
}
