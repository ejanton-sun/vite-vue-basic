export const AxisAverage = computed(() => ({
  xAve: xMedian.value,
  yAve: yMedian.value,
}));

export const horizontalAverageLine = {
  id: 'horizontalAverageLine ',
  beforeDatasetsDraw: (chart, args, options) => {
    const {
      ctx,
      chartArea: { top, right, bottom, left, width, height },
      scales: { x, y },
    } = chart;

    ctx.save();
    ctx.strokeStyle = '#797F8D';
    ctx.setLineDash([4, 2]);
    ctx.strokeRect(left, y.getPixelForValue(AxisAverage.value.yAve), width, 0);
    ctx.restore();
  },
};

export const verticalAverageLine = {
  id: 'verticalAverageLine ',
  beforeDatasetsDraw: (chart, args, options) => {
    const {
      ctx,
      chartArea: { top, right, bottom, left, width, height },
      scales: { x, y },
    } = chart;

    ctx.save();
    ctx.strokeStyle = '#797F8D';
    ctx.setLineDash([4, 2]);
    ctx.strokeRect(x.getPixelForValue(AxisAverage.value.xAve), top, 0, height);
    ctx.restore();
  },
};

export const custom_canvas_background_color = {
  id: 'custom_canvas_background_color',
  beforeDraw: (chart, args, options) => {
    const {
      ctx,
      chartArea: { top, right, bottom, left, width, height },
      scales: { x, y },
    } = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = '#FFF';
    ctx.fillRect(left, top, width, height);
    ctx.restore();
  },
};
