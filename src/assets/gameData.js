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

let GameData = {
    assets: {
        basicEduPoint: 2
    },
    base: {
        stability: 23,
        studySupport: 46
    },
    spirit: spirit
}
console.log(GameData);
// let e1 = new HOBEffect("eduPoint", -0.05, false)
// let e2 = new HOBEffect("stability", -0.05, false)
// let s = new HOBSpirit("印刷机损坏", [e1, e2]);

export {
    GameData
}
