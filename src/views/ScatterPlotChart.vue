<template>
  <div>
    <ScatterChart v-bind="scatterChartProps" />
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import { ScatterChart, useScatterChart } from 'vue-chart-3';
import { ref, computed, defineComponent } from 'vue';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { shuffle, random } from 'lodash';

Chart.register(...registerables);

export default defineComponent({
  name: 'Graph',
  components: {
    ScatterChart,
  },
  setup() {

    const scatterPlotDummyData = () => {
      const dummyData = ref([]);
      dummyData.value.push({
        label: 'チーム平均',
        data: [
          {
            x: Math.floor(Math.random() * 120).toFixed(2),
            y: Math.floor(Math.random() * 120).toFixed(2),
            userName: 'チーム平均',
          },
        ],
        backgroundColor: '#7FACE9',
        borderColor: '#005AD3',
      });

      for (let i = 1; i < 10; i++) {
        const labelName = Math.floor(Math.random() * 5000).toFixed(0);
        dummyData.value.push({
          label: `${i}_${labelName}`,
          data: [
            {
              x: Math.floor(Math.random() * 190).toFixed(2),
              y: Math.floor(Math.random() * 120).toFixed(2),
              userName: `${i}_${labelName}`,
            },
          ],
          backgroundColor: '#A1D19C',
          borderColor: '#4DAA3F',
        });
      }

      return dummyData.value;
    };

    let mainDataset = scatterPlotDummyData()


    const scatterChartData = computed(() => ({
      label: ['Scatter Dataset'],
      datasets: mainDataset,
    }));

    const { scatterChartProps, scatterChartRef } = useScatterChart({
      chartData: scatterChartData,
      plugins: [
        ChartDataLabels,
      ],
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'left',
            align: 'start',
            title: {
              display: true,
              text: 'Legend Title',
              position: 'start',
            },
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              pointStyleSize: 5,
              font: {
                size: 14,
              },
            },
          },
          title: {
            display: true,
            text: 'Scatter plot',
          },
          datalabels: {
            align: 'top',
            formatter: function (value, context) {
              return `ホーゲ ${value.userName}`;
            },
            backgroundColor: '#FFF',
            borderRadius: 3,
            borderColor: '#D2D5DA',
            borderWidth: 1,
            offset: 10,
            padding: {
              bottom: 2,
              top: 2,
              left: 6,
              right: 6,
            },
          },
          tooltip: {
            enabled: false,
          },
          filler: {
            propagate: true,
          },
        },
        backgroundColor: '#ff6384',
        scales: {
          y: {
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            position: 'right',
            ticks: {
              color: '#FF0000',
              stepSize: 10,
            },
            grid: {
              color: '#EDEFF1',
            },
            backgroundColor: 'white',
            title: 'asdasd',
            color: 'red',
          },

          x: {
            position: 'left',
            backgroundColor: 'white',
            ticks: {
              color: '#00FF00',
              stepSize: 10,
            },
            grid: {
              color: '#EDEFF1',
            },
            title: {
              display: true,
              text: 'asdasd',
              font: {
                size: 9,
                weight: '600',
              },
              align: 'end',
            },
          },
        },
      },
      onChartUpdate: (chart) => {
        chart.data.datasets = testData.value
        chart.update()
      }
    });

    return {
      scatterChartProps,
      scatterChartRef,
    };
  },
});
</script>
