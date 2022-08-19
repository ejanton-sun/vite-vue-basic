<template>
  <div id="app" style="width: 400px">
    <button @click="shuffleData">Shuffle</button>
    <!-- <BarChart v-bind="barChartProps" /> -->
    <ScatterChart v-bind="scatterChartProps" />
  </div>
</template>

<script>
import { Chart, registerables } from 'chart.js';
import {
  BarChart,
  useBarChart,
  ScatterChart,
  useScatterChart,
} from 'vue-chart-3';
import { ref, computed, defineComponent } from 'vue';
import { shuffle, random } from 'lodash';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(...registerables);
Chart.register(ChartDataLabels);

export default defineComponent({
  name: 'Graph',
  components: {
    BarChart,
    ScatterChart,
  },
  setup() {
    const data = ref([30, 40, 60, 70, 5]);
    const scatterData = ref([
      {
        x: random(-10, 10),
        y: random(-10, 10),
      },
      {
        x: random(-10, 10),
        y: random(-10, 10),
      },
      {
        x: -random(-10, 10),
        y: random(-10, 10),
      },
      {
        x: random(-10, 10),
        y: random(-10, 10),
      },
      {
        x: random(-10, 10),
        y: random(-10, 10),
      },
      {
        x: random(-10, 10),
        y: random(-10, 10),
      },
    ]);
    const scatterData2 = ref([
      {
        x: random(-10, 10),
        y: random(-10, 10),
      },
      {
        x: random(-7, 10),
        y: random(-10, 10),
      },
      {
        x: -random(-4, 10),
        y: random(-10, 10),
      },
      {
        x: random(-10, 10),
        y: random(-5, 10),
      },
      {
        x: random(-2, 10),
        y: random(-10, 10),
      },
      {
        x: random(-6, 10),
        y: random(-10, 10),
      },
    ]);
    const scatterData3 = ref([
      {
        x: random(-10, 10),
        y: random(-10, 10),
      },
      {
        x: random(-10, 10),
        y: random(-10, 10),
      },
      {
        x: -random(-10, 10),
        y: random(-10, 10),
      },
      {
        x: random(-10, 10),
        y: random(-10, 10),
      },
      {
        x: random(-10, 10),
        y: random(-10, 10),
      },
      {
        x: random(-10, 10),
        y: random(-10, 10),
      },
    ]);

    const chartData = computed(() => ({
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: data.value,
          backgroundColor: [
            '#77CEFF',
            '#0079AF',
            '#123E6B',
            '#97B0C4',
            '#A5C8ED',
          ],
        },
      ],
    }));

    const scatterChartData = computed(() => ({
      label: ['Scatter Dataset'],
      datasets: [
        {
          label: 'Dataset 1',
          data: scatterData.value,
          backgroundColor: '#77CEFF',
        },
        {
          label: 'Dataset 2',
          data: scatterData2.value,
          backgroundColor: '#FF0000',
        },
        {
          label: 'Dataset 3',
          data: scatterData3.value,
          backgroundColor: '#7700FF',
        },
      ],
    }));

    const { barChartProps, barChartRef } = useBarChart({
      chartData,
    });

    const { scatterChartProps, scatterChartRef } = useScatterChart({
      chartData: scatterChartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Scatter plot',
          },
          datalabels: {
            formatter: function (value, context) {
              return 'ホーゲ \n\n';
            },
          },
          tooltip: {
            enabled: false,
          },
        },

        scales: {
          y: {
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            position: 'left',
            ticks: {
              color: '#FF0000',
            },
            grid: {
              lineWidth: (context) => {
                return context.tick.value == 0 ? 5 : 1
              },
            },
          },
          x: {
            position: 'left',
            ticks: {
              color: '#00FF00',
            },
            grid: {
               lineWidth: (context) => {
                return context.tick.value == 0 ? 5 : 1
              },
            },
          },
        },
      },
    });

    function shuffleData() {
      data.value = shuffle(data.value);
    }

    return {
      shuffleData,
      barChartProps,
      barChartRef,
      scatterChartProps,
      scatterChartRef,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
