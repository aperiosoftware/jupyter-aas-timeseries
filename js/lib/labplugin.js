var jupyter_aas_timeseries = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'jupyter-aas-timeseries',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'jupyter-aas-timeseries',
          version: jupyter_aas_timeseries.version,
          exports: jupyter_aas_timeseries
      });
  },
  autoStart: true
};
