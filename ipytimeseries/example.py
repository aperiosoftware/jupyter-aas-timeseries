import ipywidgets as widgets
from traitlets import Unicode


@widgets.register
class TimeSeriesWidget(widgets.DOMWidget):
    """A widget for interactive time series."""
    _view_name = Unicode('TimeSeriesView').tag(sync=True)
    _model_name = Unicode('TimeSeriesModel').tag(sync=True)
    _view_module = Unicode('ipytimeseries').tag(sync=True)
    _model_module = Unicode('ipytimeseries').tag(sync=True)
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    _model_module_version = Unicode('^0.1.0').tag(sync=True)
