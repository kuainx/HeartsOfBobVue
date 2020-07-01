<template>
<div id="PartyPie"></div>
</template>
<script>
import {
	Chart
} from '@antv/g2';
export default {
	name: "PartyPie",
	data: () => ({
		chartDat: [{
			name: '文科主义',
			num: 6000
		}, {
			name: '理科主义',
			num: 3000
		}, {
			name: '中立主义',
			num: 600
		}, {
			name: '自由主义',
			num: 400
		}]
	}),
	mounted() {
		this.updateDat();
		const chart = new Chart({
			container: 'PartyPie',
			width: 86,
			height: 86,
		});
		chart.coordinate('theta')
		chart.legend(false);
		chart.tooltip({
			showTitle: false,
			showMarkers: false
		});
		chart.interaction('element-active');
		chart.interaction('element-highlight');
		chart.data(this.chartDat);
		chart
			.interval()
			.adjust('stack')
			.position('num')
			.color('name')
			.label('num', (num) => {
				return {
					content: (num / 100) + '%',
				};
			}, {
				offset: -20,
				style: {
					textAlign: 'center',
					shadowBlur: 2,
					shadowColor: 'rgba(0, 0, 0, .45)',
					fill: '#fff',
				},
				layout: {
					type: 'limitInShape',
				}
			})
			.tooltip('name*num', (name, num) => {
				num = (num / 100) + '%';
				return {
					name: name,
					value: num
				};
			});
		chart.render();
	},
	props: {
		dat: {
			type: Array,
			default: () => ([6000, 3000, 600, 400])
		}
	},
	watch: {
		dat: {
			handler() {
				this.updateDat();
			},
			deep: true
		}
	},
	methods: {
		updateDat() {
			for (let i = 0; i < this.dat.length; i++) {
				this.chartDat[i].num = this.dat[i];
			}
		}
	}
}
</script>
<style scoped>
</style>
