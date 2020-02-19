export let RawData = {
    baseData: {
        eduPoint: 50,
        stability: .75,
        studySupport: .56,
        studyPoint: 66547,
        schoolTension: .02,
    },
    spirit: [{
        name: "凝聚力",
        effect: [{
            type: "stability",
            num: 0.15,
            base: false,
            once: false
        }]
    }, {
        name: "损坏的印刷机",
        effect: [{
            type: "studyPoint",
            num: -0.15,
            base: false,
            once: false
        }]
    }]


}
