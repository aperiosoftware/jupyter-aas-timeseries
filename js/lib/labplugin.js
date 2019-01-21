var jupyter_aas_timeseries = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'jupyter_aas_timeseries',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'jupyter_aas_timeseries',
          version: jupyter_aas_timeseries.version,
          exports: jupyter_aas_timeseries
      });
  },
  autoStart: true
};

