import Component from '@ember/component';
import layout from '../templates/components/chart-container';

export default Component.extend({
  layout,

  chartOptions: {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Market Instruments traded'
    },
    xAxis: {
      categories: ['Indices', 'Forex', 'D100s']
    },
    yAxis: {
      title: {
        text: 'Times traded'
      }
    }
  },

  content: [{
    name: 'MJ',
    data: [10, 0, 40]
  }, {
    name: 'Tom',
    data: [50, 70, 30]
  }, {
    name: 'Stu',
    data: [40, 30, 70]
  }],

  // theme: defaultTheme,
});
