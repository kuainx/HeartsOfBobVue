import {
    HOBSpirit,
    HOBEffect
} from './class.js'
import {
    RawData
} from './rawData.js'

let spirit = [];
for (var key in RawData.spirit) {
    let e = [],
        item = RawData.spirit[key];
    for (var key1 in item.effect) {
        let item1 = item.effect[key1];
        e[key1] = new HOBEffect(item1.type, item1.num, item1.once, item1.base);
    }
    spirit[key] = new HOBSpirit(item.name, e)
}

let leader={

};

let GameData = {
    tempEvent:[],
    baseData: RawData.baseData,
    spirit: spirit,
    leader:leader

}
console.log(GameData);

export {
    GameData
}
