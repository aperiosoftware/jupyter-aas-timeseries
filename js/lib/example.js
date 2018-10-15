var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');

var TimeSeriesModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'TimeSeriesModel',
        _view_name : 'TimeSeriesView',
        _model_module : 'ipytimeseries',
        _view_module : 'ipytimeseries',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
    })
});


// Custom View. Renders the widget model.
var TimeSeriesView = widgets.DOMWidgetView.extend({
    render: function() {
        this.model.on('msg:custom', this.handle_custom_message, this);
    },

    handle_custom_message: function(msg) {
        this.el.textContent = JSON.stringify(msg);
    }
});


module.exports = {
    TimeSeriesModel : TimeSeriesModel,
    TimeSeriesView : TimeSeriesView
};
