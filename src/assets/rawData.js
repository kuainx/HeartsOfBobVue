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
    }],
    party: {
        prop: [.23, .64, .13, 0],
        name: ['文科主义', '理科主义', '中立主义', '无主义'],
        now: 1
    },
    stability: {
        val: .58,
        base: .58,
        effect: []
    },
    studySupport: {
        val: .56,
        base: .56
    },
    eduPoint: {
        val: 50
    },
    effect: [{
        name: '改进学习环境',
        effect: [{
            type: ''
        }]
    }]
}
