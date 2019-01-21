jupyter_aas_timeseries
===============================

Jupyter Widget for the AAS Time Series project

Installation
------------

To install use pip:

    $ pip install jupyter-aas-timeseries
    $ jupyter nbextension enable --py --sys-prefix jupyter-aas-timeseries


Development workflow
--------------------

For a development installation (requires npm),

    $ git clone https://github.com/aperiosoftware/jupyter-aas-timeseries.git
    $ cd jupyter-aas-timeseries
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix jupyter-aas-timeseries
    $ jupyter nbextension enable --py --sys-prefix jupyter-aas-timeseries

If you make any changes to the Python code, you do not have to run these
commands again but you will need to restart the kernel from the notebook.

If you want to make changes to the javascript and want to avoid having to
re-install the widget, do the following in a new terminal:

    $ cd js
    $ npm run watch

Every time you save one of the javascript files, the modified files will be
re-bundled and updated in the widget. Refreshing the notebook page is enough
to reflect the new changes (no need to restart the kernel).
