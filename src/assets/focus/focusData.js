import {
    rawFocus
} from './focusRaw.js'
let connections = [];
for (let val of rawFocus) {
    for (let index of val.require) {
        connections.push({
            source: String(index),
            target: val.id,
        })
    }
}
export const focusData = {
    nodes: rawFocus,
    edges: connections
}
