---
layout: post  
title:  "A quick fix for some IPython notebook IOErrors"
description: "It says some files are missing, like a custom.js."
date:   2015-09-04 16:00:00
tags: [linux, ubuntu, python, ipython, notebook]
categories: programming
math: false
comments: true
image:
    feature: night_sunset.jpg
---

I had a working version of IPython running in Ubuntu 14.04, but today I found an
error when starting a notebook from it.

The error is pretty simple and has a quick fix for it:

{% highlight console %}
$ ipython notebook
Traceback (most recent call last):
  File "/usr/local/bin/ipython", line 11, in <module>
    sys.exit(start_ipython())
  File "/usr/local/lib/python2.7/dist-packages/IPython/__init__.py", line 118, in start_ipython
    return launch_new_instance(argv=argv, **kwargs)
  File "/usr/local/lib/python2.7/dist-packages/traitlets/config/application.py", line 591, in launch_instance
    app.initialize(argv)
  File "<string>", line 2, in initialize
  File "/usr/local/lib/python2.7/dist-packages/traitlets/config/application.py", line 75, in catch_config_error
    return method(app, *args, **kwargs)
  File "/usr/local/lib/python2.7/dist-packages/IPython/terminal/ipapp.py", line 305, in initialize
    super(TerminalIPythonApp, self).initialize(argv)
  File "<string>", line 2, in initialize
  File "/usr/local/lib/python2.7/dist-packages/traitlets/config/application.py", line 75, in catch_config_error
    return method(app, *args, **kwargs)
  File "/usr/local/lib/python2.7/dist-packages/IPython/core/application.py", line 386, in initialize
    self.parse_command_line(argv)
  File "/usr/local/lib/python2.7/dist-packages/IPython/terminal/ipapp.py", line 300, in parse_command_line
    return super(TerminalIPythonApp, self).parse_command_line(argv)
  File "<string>", line 2, in parse_command_line
  File "/usr/local/lib/python2.7/dist-packages/traitlets/config/application.py", line 75, in catch_config_error
    return method(app, *args, **kwargs)
  File "/usr/local/lib/python2.7/dist-packages/traitlets/config/application.py", line 487, in parse_command_line
    return self.initialize_subcommand(subc, subargv)
  File "<string>", line 2, in initialize_subcommand
  File "/usr/local/lib/python2.7/dist-packages/traitlets/config/application.py", line 75, in catch_config_error
    return method(app, *args, **kwargs)
  File "/usr/local/lib/python2.7/dist-packages/traitlets/config/application.py", line 425, in initialize_subcommand
    self.subapp.initialize(argv)
  File "<string>", line 2, in initialize
  File "/usr/local/lib/python2.7/dist-packages/traitlets/config/application.py", line 75, in catch_config_error
    return method(app, *args, **kwargs)
  File "/usr/local/lib/python2.7/dist-packages/notebook/notebookapp.py", line 1001, in initialize
    super(NotebookApp, self).initialize(argv)
  File "<string>", line 2, in initialize
  File "/usr/local/lib/python2.7/dist-packages/traitlets/config/application.py", line 75, in catch_config_error
    return method(app, *args, **kwargs)
  File "/usr/local/lib/python2.7/dist-packages/jupyter_core/application.py", line 243, in initialize
    self.migrate_config()
  File "/usr/local/lib/python2.7/dist-packages/jupyter_core/application.py", line 169, in migrate_config
    migrate()
  File "/usr/local/lib/python2.7/dist-packages/jupyter_core/migrate.py", line 230, in migrate
    if migrate_static_custom(custom_src, custom_dst):
  File "/usr/local/lib/python2.7/dist-packages/jupyter_core/migrate.py", line 152, in migrate_static_custom
    with open(custom_js) as f:
IOError: [Errno 2] No such file or directory: '/home/allan/.ipython/profile_default/static/custom/custom.js'
{% endhighlight %}

The error message in the last line is pretty clear.

The problem is I don't want to use any custom Javascript, so a dirty hack was to create
an empty file with the name Ipython wanted:

{% highlight console %}
$ touch /home/allan/.ipython/profile_default/static/custom/custom.js
{% endhighlight %}


That fixed this first exception problem, but then it complained about another file:

{% highlight console %}
$ ipython notebook
Traceback (most recent call last):
  File "/usr/local/bin/ipython", line 11, in <module>
    sys.exit(start_ipython())
  File "/usr/local/lib/python2.7/dist-packages/IPython/__init__.py", line 118, in start_ipython
    return launch_new_instance(argv=argv, **kwargs)
  File "/usr/local/lib/python2.7/dist-packages/traitlets/config/application.py", line 591, in launch_instance
    app.initialize(argv)
  File "<string>", line 2, in initialize
  File "/usr/local/lib/python2.7/dist-packages/traitlets/config/application.py", line 75, in catch_config_error
    return method(app, *args, **kwargs)
  File "/usr/local/lib/python2.7/dist-packages/IPython/terminal/ipapp.py", line 305, in initialize
    super(TerminalIPythonApp, self).initialize(argv)
  File "<string>", line 2, in initialize
  File "/usr/local/lib/python2.7/dist-packages/traitlets/config/application.py", line 75, in catch_config_error
    return method(app, *args, **kwargs)
  File "/usr/local/lib/python2.7/dist-packages/IPython/core/application.py", line 386, in initialize
    self.parse_command_line(argv)
  File "/usr/local/lib/python2.7/dist-packages/IPython/terminal/ipapp.py", line 300, in parse_command_line
    return super(TerminalIPythonApp, self).parse_command_line(argv)
  File "<string>", line 2, in parse_command_line
  File "/usr/local/lib/python2.7/dist-packages/traitlets/config/application.py", line 75, in catch_config_error
    return method(app, *args, **kwargs)
  File "/usr/local/lib/python2.7/dist-packages/traitlets/config/application.py", line 487, in parse_command_line
    return self.initialize_subcommand(subc, subargv)
  File "<string>", line 2, in initialize_subcommand
  File "/usr/local/lib/python2.7/dist-packages/traitlets/config/application.py", line 75, in catch_config_error
    return method(app, *args, **kwargs)
  File "/usr/local/lib/python2.7/dist-packages/traitlets/config/application.py", line 425, in initialize_subcommand
    self.subapp.initialize(argv)
  File "<string>", line 2, in initialize
  File "/usr/local/lib/python2.7/dist-packages/traitlets/config/application.py", line 75, in catch_config_error
    return method(app, *args, **kwargs)
  File "/usr/local/lib/python2.7/dist-packages/notebook/notebookapp.py", line 1001, in initialize
    super(NotebookApp, self).initialize(argv)
  File "<string>", line 2, in initialize
  File "/usr/local/lib/python2.7/dist-packages/traitlets/config/application.py", line 75, in catch_config_error
    return method(app, *args, **kwargs)
  File "/usr/local/lib/python2.7/dist-packages/jupyter_core/application.py", line 243, in initialize
    self.migrate_config()
  File "/usr/local/lib/python2.7/dist-packages/jupyter_core/application.py", line 169, in migrate_config
    migrate()
  File "/usr/local/lib/python2.7/dist-packages/jupyter_core/migrate.py", line 230, in migrate
    if migrate_static_custom(custom_src, custom_dst):
  File "/usr/local/lib/python2.7/dist-packages/jupyter_core/migrate.py", line 152, in migrate_static_custom
    with open(custom_css) as f:
IOError: [Errno 2] No such file or directory: '/home/allan/.ipython/profile_default/static/custom/custom.css'
{% endhighlight %}

That simple hack worked again:

{% highlight console %}
$ touch /home/allan/.ipython/profile_default/static/custom/custom.css
{% endhighlight %}

Now I have Ipython notebook up and running without further problems.
