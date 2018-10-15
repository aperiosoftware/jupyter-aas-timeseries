var ipytimeseries = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'ipytimeseries',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'ipytimeseries',
          version: ipytimeseries.version,
          exports: ipytimeseries
      });
  },
  autoStart: true
};

