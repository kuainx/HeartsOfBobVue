export const rawFocus = [{
    id: "0",
    label: "建立班级",
    turn: 1,
    description: "在新的一学年，学校一如往常的需要建立各个班级。在建立班级后即可任命班主任、教师和分配学生。",
    require: [],
    effect: [{
        type: "eduPoint",
        amount: 150
    }]
}, {
    id: "1",
    label: "举行班会",
    turn: 1,
    description: "通过举行班会，我们可以调整学习倾向，以便于更好地适应班级的当前情况。",
    require: [0],
    effect: [{
        type: "leader",
        name: "YET"
    }, {
        type: "stability",
        amount: 0.3
    }]
}, {
    id: "2",
    label: "任命教师",
    turn: 1,
    description: "在建立班级之后，我们必须组建我们的教学队伍，以保证我们能够和其他班级抗衡。",
    require: [0],
    effect: [{
        type: "spiritAdd",
        name: "学不死就往死里学",
        effect: {
            studySpeed: 0.3,
            studySupport: -0.2,
            stability: -0.05
        }
    }]
}, {
    id: "3",
    label: "任命教师",
    turn: 1,
    description: "在建立班级之后，我们必须组建我们的教学队伍，以保证我们能够和其他班级抗衡。",
    require: [0],
    effect: [{}]
}, {
    id: "4",
    label: "调整学习",
    turn: 1,
    description: "随着学校局势紧张的加剧，我们当前的学习倾向显然无法保护班级的利益。现在是时候彻底抛弃之前的学习倾向了。",
    require: [],
    effect: [{}]
}, {
    id: "5",
    label: "平稳学习",
    turn: 1,
    description: "日益严重的危机正是我们必须坚持自身根本的原因。我们将继续我们之前的学习倾向，而不是做出任何可能导致内部不稳的变化，这种变化我们负担不起。",
    require: [],
    effect: [{}]
}]
