import {
    rawFocus
} from './focusRaw.js'
let connections = [];
rawFocus.foreach((val) => {
    val.require.foreach((index) => {
        connections.push({
            source: val.id,
            target: index,
        })
    })
})
export const focusData = {
    nodes: rawFocus,
    edges: connections
}
