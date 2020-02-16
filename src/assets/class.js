export class HOBEvent {
    constructor(type, headline, detail, choice) {
        this.type = type;
        this.headline = headline;
        this.detail = detail;
        this.choice = choice;
    }

}

// export class HOBEffect{
//     constructor(type,name,effect){
//         this.type=type;
//         this.name=name;
//         this.effect=effect;
//     }
//
// }

// export class HOBDailyEffect {
//     constructor() {
//
//     }
// }

//effect do type
// A：持续每回合，显示//不改变基础值
// B：直接加，显示，可消去//不改变基础值
// C：直接加，不显示//改变基础值


export class HOBEffect {
    constructor(type, num = 0, once = true, base = true) {
        this.type = type;
        this.num = num;
        this.once = once;
        this.base = base;
    }
}

export class HOBSpirit {
    constructor(name, effect) {
        this.name = name;
        this.effect = effect;
    }
}

export class HOBFocus{
    constructor(name,detail,day,front,against){
        this.name=name;
        this.detail=detail;
        this.day=day?day:28;
        this.front=front;
        this.against=against;
    }
}
