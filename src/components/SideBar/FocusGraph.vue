<template>
<div id="FocusGraph"></div>
</template>
<script>
import G6 from '@antv/g6';
export default {
	name: "",
	data: () => ({

	}),
	mounted() {
		this.init();
	},
	methods: {
		init() {
			const data = window.assetsData.focus;
			G6.registerNode(
				'sql', {
					drawShape(cfg, group) {
						const rect = group.addShape('rect', {
							attrs: {
								x: -75,
								y: -25,
								width: 150,
								height: 50,
								radius: 10,
								stroke: '#5B8FF9',
								fill: '#C6E5FF',
								lineWidth: 3,
							},
							name: 'rect-shape',
						});
						if (cfg.name) {
							group.addShape('text', {
								attrs: {
									text: cfg.name,
									x: 0,
									y: 0,
									fill: '#00287E',
									fontSize: 14,
									textAlign: 'center',
									textBaseline: 'middle',
									fontWeight: 'bold',
								},
								name: 'text-shape',
							});
						}
						return rect;
					},
				},
				'single-node',
			);

			const width = document.getElementById('FocusGraph').scrollWidth;
			const height = document.getElementById('FocusGraph').scrollHeight || 500;
			const graph = new G6.Graph({
				container: 'FocusGraph',
				width,
				height,
				layout: {
					type: 'dagre',
					nodesepFunc: d => {
						if (d.id === '3') {
							return 500;
						}
						return 50;
					},
					ranksep: 70,
					controlPoints: true
				},
				defaultNode: {
					type: 'sql',
				},
				defaultEdge: {
					type: 'polyline',
					style: {
						radius: 20,
						offset: 45,
						endArrow: true,
						lineWidth: 2,
						stroke: '#C2C8D5',
					},
				},
				nodeStateStyles: {
					selected: {
						stroke: '#d9d9d9',
						fill: '#5394ef',
					}
				},
				modes: {
					default: [
        'drag-canvas',
        'zoom-canvas',
        'click-select',
						{
							type: 'tooltip',
							formatText(model) {
								const cfg = model.conf;
								const text = [];
								cfg.forEach(row => {
									text.push(row.label + ':' + row.value + '<br>');
								});
								return text.join('\n');
							},
							offset: 30
        },
      ],
				},
				fitView: true,
			});
			graph.data(data);
			graph.render();

		}
	}
}
</script>
<style scoped>
</style>
<style>
.g6-minimap {
	position: fixed;
	bottom: 0;
	right: 0;
	background-color: white;
}

.g6-minimap-container {
	border: 1px solid #e2e2e2;
}

.g6-minimap-viewport {
	border: 2px solid rgb(25, 128, 255);
}

.g6-tooltip {
	border-radius: 6px;
	font-size: 12px;
	color: #fff;
	background-color: #000;
	padding: 2px 8px;
	text-align: center;
}
</style>
