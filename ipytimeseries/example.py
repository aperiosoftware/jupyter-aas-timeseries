import json
import ipywidgets as widgets
from traitlets import Unicode, Integer


@widgets.register
class TimeSeriesWidget(widgets.DOMWidget):

    """A widget for interactive time series."""

    _view_name = Unicode('TimeSeriesView').tag(sync=True)
    _model_name = Unicode('TimeSeriesModel').tag(sync=True)
    _view_module = Unicode('ipytimeseries').tag(sync=True)
    _model_module = Unicode('ipytimeseries').tag(sync=True)
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    _model_module_version = Unicode('^0.1.0').tag(sync=True)

    width = Integer(600).tag(sync=True)
    height = Integer(480).tag(sync=True)

    def __init__(self, filename):
        super(TimeSeriesWidget, self).__init__()
        self.load_vega(filename)

    def load_vega(self, filename):
        with open(filename, 'r') as f:
            data = json.load(f)
        self.send(data)
