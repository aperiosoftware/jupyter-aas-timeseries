var widgets = require('@jupyter-widgets/base');

var _ = require('lodash');

// Load the Javascript necessary for the TimeSeriess
self.Big = require('./aas-time-series-js/resources/big.min.js');
require('./aas-time-series-js/resources/stuquery.js');
require('./aas-time-series-js/resources/graph.js');
require('./aas-time-series-js/resources/timeseries.js');
require('./aas-time-series-js/resources/timeseries.css');

// We should have the resources at this point
console.log('Loaded TimeSeries resources',S,Graph,TimeSeries)


var TimeSeriesModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'TimeSeriesModel',
        _view_name : 'TimeSeriesView',
        _model_module : 'jupyter-aas-timeseries',
        _view_module : 'jupyter-aas-timeseries',
        _model_module_version : '0.1.6',
        _view_module_version : '0.1.6',
    })
});


// Custom View. Renders the widget model.
var TimeSeriesView = widgets.DOMWidgetView.extend({

    render: function() {

		console.log('render');

		// Make the instance of TimeSeries here
		// this.el references the DOM object
		width = this.model.get('width');
		height = this.model.get('height');

		// We need to create an element
		var div = document.createElement('div');
		var id = 'timeseries-xxxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});

		// Set the ID of the div we've created
		div.id = id;

		// Add the div to the element (at this point JupyterWidgets
		// hasn't actually added it to the DOM; it does that after render)
		this.el.appendChild(div);

		// Parse the JSON from a string
		data = JSON.parse(this.model.get('vega_json'));

		// Add a custom message callback
		this.model.on('change:width', this.size_changed, this);
		this.model.on('change:height', this.size_changed, this);
		this.once('displayed', () => {

			console.log('displayed',id);

			var el = S('#'+id);

			// Set the width and height of the element
			el.css({'width':width+'px','height':height+'px'});

			// Create the TimeSeries and make it fit to the parent
			var t = TimeSeries.create(data,{'fit':false,'tooltip':{'theme':'aas-theme'}});

			// Attach the timeseries to the element
			t.initialize(el[0]);
		});

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
