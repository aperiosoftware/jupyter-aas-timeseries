var widgets = require('@jupyter-widgets/base');

var _ = require('lodash');

// Load the Javascript necessary for the TimeSeriess
require('./aas-time-series-js/resources/stuquery.js');
require('./aas-time-series-js/resources/graph.js');
require('./aas-time-series-js/resources/timeseries.js');


// We should have the resources at this point
console.log('Loaded TimeSeries resources',S,Graph,TimeSeries)


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

      width = this.model.get('width');
      height = this.model.get('height');
      console.log('size', width, height);

    	console.log('render',this,this.model,this.el);
      S(this.el).css({'width':width+'px','height':height+'px'});

    	// The problem here is that we can't render the widget *until*
    	// we have the JSON that defines the size

    	// Add a custom message callback
        this.model.on('msg:custom', this.handle_custom_message, this);
        this.model.on('change:width', this.size_changed, this);
        this.model.on('change:height', this.size_changed, this);

    },

    handle_custom_message: function(msg) {
    	console.log('handle_custom_message',msg)
    	// Make the instance of TimeSeries here
    	// this.el references the DOM object
    	var t = TimeSeries.create(msg,{fit:true});
    	t.initialize(this.el);
    },

    size_changed: function() {
      width = this.model.get('width');
      height = this.model.get('height');
      console.log('size changed', width, height);
    }

});


module.exports = {
    TimeSeriesModel : TimeSeriesModel,
    TimeSeriesView : TimeSeriesView
};
