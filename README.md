# Rubyfaux

[Website](http://rubyworks.github.com/rubyfaux) &middot;
[Development](http://github.com/rubyworks/rubyfaux)


## Welcome

Rubyfaux is a Shomen-based documentation browser with an old-school
ruby-lang.org style.


## Features

* Old-school ruby-lang.org style gives documentation an offical look-and-feel.
* Quicksearch sidebar makes it easy to locate classes and methods.
* Built on JQuery, JQuery Templates and other well supported Javascript tools.


## How To Use

Generate a shomen `.json` file for you project.

    $ cd ..
    $ shomen rdoc > site/foo-1.0.0.json

See Shomen project to learn more about this.

To locally view your documentation, clone this repo to your project's
webite directory (or `gh-pages` branch if you are crazy like that).

    $ cd myproject
    $ git clone http://rubyworks.github.com/rubyfaux.git site
    $ cd site
    $ rm -rf .git

By default it will look for `doc.json` so you can link that to 
the latest documentation file.

    $ ln -s foo-1.0.0.json doc.json

Now fire up local directory webserver. The `shomen` command provides
one (must have `sinatra` installed):

    $ shomen server

You can also view the files directly if your browser supports local
ajax calls (Firefox works. Chrome? Not so much).

    $ firefox index.html

Now then, customize that template to your little hearts desire!

To view you documentation remotely, firs publish you Shomen .json
file, presumably to your website, but it can be anywhere on the
internet that will accept loading via ajax.

Now navigate over to the Rubyfaux site setting the `doc` property
in the URL to the location of the file, e.g.

    http://rubyworks.github.com/rubyfaux?doc=http://myorg.github.com/myapp/myapp-1.0.0.json

And there you are.

Note that if the documented project is large so too will be the Shomen `.json` file.
In which case it take a moment for the browser to load the file. For large projects
as such it is a good idea to divide documentation into a set of smaller files, rather 
than one big file.


## Legalease

Copyright (c) 2011 Thomas Sawyer

Available according to the terms of the *BSD-2-Clause* license.

External libraries used:

* [jQuery](http://jquery.org)
* [jQuery-tmpl](http://github.com/jquery/jquery-tmpl)
* [Quicksearch](http://github.com/riklomas/quicksearch)
* [Highlight](http://github.com/isagalaev/highlight.js)
* [Showdown](http://github.com/coreyti/showdown)
* [Rundown](http://github.com/rubyworks/rundown)
* [Keymaster](http://github.com/madrobby/keymaster)
* [Mousewheel](http://plugins.jquery.com/project/mousewheel)

