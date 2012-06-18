// Generated by CoffeeScript 1.3.1
(function() {
  var RubyFauxApp;

  RubyFauxApp = (function() {

    RubyFauxApp.name = 'RubyFauxApp';

    function RubyFauxApp(debug) {
      var doc_id, doc_url, urlVars,
        _this = this;
      this.debug = debug;
      this.convertor = new Rundown.converter();
      this.current_menu = null;
      this.documentation_by_key = {};
      this.documentation_by_id = {};
      this.documentation = {
        all: [],
        methods: [],
        classes: [],
        scripts: [],
        documents: []
      };
      urlVars = getUrlVars();
      doc_url = urlVars['doc'] || 'doc.json';
      doc_id = urlVars['id'];
      $.getJSON(doc_url, function(data) {
        var doc, key;
        _this.doc_url = doc_url;
        for (key in data) {
          doc = data[key];
          doc.key = key;
          if (doc.path) {
            doc.id = id('api-' + doc['!'] + '-' + doc.path);
          } else {
            doc.id = 'metadata';
          }
          _this.documentation_by_key[doc.key] = doc;
          _this.documentation_by_id[doc.id] = doc;
          _this.documentation['all'].push(doc);
          switch (doc['!']) {
            case 'method':
              _this.documentation['methods'].push(doc);
              break;
            case 'class':
              _this.documentation['classes'].push(doc);
              break;
            case 'module':
              _this.documentation['classes'].push(doc);
              break;
            case 'document':
              _this.documentation['documents'].push(doc);
              break;
            case 'script':
              _this.documentation['scripts'].push(doc);
          }
        }
        _this.metadata = data['(metadata)'];
        _this.documentation['all'] = _this.documentation['all'].sort(compareNames);
        _this.documentation['methods'] = _this.documentation['methods'].sort(compareNames);
        _this.documentation['classes'] = _this.documentation['classes'].sort(comparePaths);
        $("#title").append(template("title", _this.metadata));
        $('#nav').append(template("navigation", _this.metadata));
        $('#copyright').append(template("copyright"), _this.metadata);
        $('#searchbox').append(template("searchbox", {}));
        return $.history.init(function(hash) {
          var anchor, id, x;
          if (hash === "") {
            return show(readme().id);
          } else {
            x = hash.split('/', 2);
            id = x[0];
            anchor = x[1];
            return show(id, anchor);
          }
        });
      });
    }

    RubyFauxApp.prototype.version = '2';

    RubyFauxApp.prototype.debug = function() {
      return this.debug;
    };

    RubyFauxApp.prototype.debugToggle = function() {
      if (this.debug) {
        return this.debug = false;
      } else {
        return this.debug = true;
      }
    };

    RubyFauxApp.prototype.current_menu = function() {
      return this.current_menu;
    };

    RubyFauxApp.prototype.doc_url = function() {
      return this.doc_url;
    };

    RubyFauxApp.prototype.metadata = function() {
      return this.metadata;
    };

    RubyFauxApp.prototype.documentation = function() {
      return this.documentation;
    };

    RubyFauxApp.prototype.documentation_by_key = function() {
      return this.documentation_by_key;
    };

    RubyFauxApp.prototype.documentation_by_id = function() {
      return this.documentation_by_id;
    };

    RubyFauxApp.prototype.readme = function() {
      var d, readme;
      readme = metadata['readme'];
      if (!readme) {
        for (d in documentation['documents']) {
          if (d.name.match(/^README/i)) {
            readme = d;
            break;
          }
        }
      }
      return readme;
    };

    RubyFauxApp.prototype.href = function(id, anchor) {
      if (anchor) {
        return '#' + id + '/' + anchor;
      } else {
        return '#' + id;
      }
    };

    RubyFauxApp.prototype.method_href = function(method) {
      var ns;
      ns = documentation_by_key[method.namespace];
      if (ns) {
        return href(ns.id, method.id);
      } else {
        console.debug('Cannot find method: ' + method.id);
        return '';
      }
    };

    RubyFauxApp.prototype.id = function(key) {
      key = key.replace(/\</g, "-l-");
      key = key.replace(/\>/g, "-g-");
      key = key.replace(/\=/g, "-e-");
      key = key.replace(/\?/g, "-q-");
      key = key.replace(/\!/g, "-x-");
      key = key.replace(/\~/g, "-t-");
      key = key.replace(/\[/g, "-b-");
      key = key.replace(/\]/g, "-k-");
      key = key.replace(/\#/g, "-h-");
      key = key.replace(/\./g, "-d-");
      key = key.replace(/\:\:/g, "-C-");
      key = key.replace(/\:/g, "-c-");
      key = key.replace(/[/]/g, "-s-");
      key = key.replace(/\W+/g, "-");
      key = key.replace(/\W+/g, "-");
      return key;
    };

    RubyFauxApp.prototype.compareNames = function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    };

    RubyFauxApp.prototype.comparePaths = function(a, b) {
      if (a.path < b.path) {
        return -1;
      }
      if (a.path > b.path) {
        return 1;
      }
      return 0;
    };

    RubyFauxApp.prototype.getUrlVars = function() {
      var h, hash, hashes, index, vars, _i, _len;
      vars = [];
      index = window.location.href.indexOf('?') + 1;
      hashes = window.location.href.slice(index).split('&');
      for (_i = 0, _len = hashes.length; _i < _len; _i++) {
        hash = hashes[_i];
        h = hash.split('=');
        vars.push(h[0]);
        vars[h[0]] = h[1];
      }
      return vars;
    };

    RubyFauxApp.prototype.show = function(id, anchor) {
      var doc, type;
      doc = documentation_by_id[id];
      console.debug(id);
      console.debug(doc);
      if (doc !== null) {
        type = doc['!'];
        if (type === 'module') {
          type = 'class';
        }
        $('#heading').empty().append(template(type + '-heading', doc));
        $('#content').empty().append(template(type + '-content', doc));
        $('#sidebar').empty().append(template(type + '-sidebar', doc));
        $('#content').find('pre code').each(function(i, e) {
          return hljs.highlightBlock(e, '  ');
        });
        if (anchor) {
          $('html, body').animate({
            scrollTop: $('#' + anchor).offset().top
          }, 500);
          $('.highlighted').removeClass('highlighted');
          $('#' + anchor).addClass('highlighted');
        }
        return hookQuickSearch();
      } else {
        $('#heading').empty();
        return $('#content').empty().append('<b>Not Found</b>');
      }
    };

    RubyFauxApp.prototype.divy_methods = function(methods) {
      var doc, list, s, v, x;
      s = 'instance';
      v = 'public';
      list = {
        "class": {
          "public": [],
          "protected": [],
          "private": []
        },
        instance: {
          "public": [],
          "protected": [],
          "private": []
        }
      };
      for (x in methods) {
        doc = documentation_by_key[x];
        if (doc.declarations.contains('class')) {
          s = 'class';
        } else {
          s = 'instance';
        }
        if (doc.declarations.contains('private')) {
          v = 'private';
        } else {
          if (doc.declarations.contains('protected')) {
            v = 'protected';
          } else {
            v = 'public';
          }
        }
        list[s][v].push(doc);
      }
      return list;
    };

    RubyFauxApp.prototype.markup = function(text, format) {
      return this.rendown.makeHtml(text);
    };

    RubyFauxApp.prototype.showSource = function(e) {
      var codeSections, target;
      target = e.target;
      return codeSections = $(target).parents('.method-detail').find('.method-source-code');
    };

    $(target).parents('.method-detail').find('.method-source-code').slideToggle('fast', function() {
      return $(this).find('pre').each(function(i, e) {
        return hljs.highlightBlock(e, '  ');
      });
    });

    RubyFauxApp.prototype.toggleSource = function(id) {
      return $(id).toogle();
    };

    RubyFauxApp.prototype.template = function(name, data) {
      return Handlebars.templates[name](data);
    };

    return RubyFauxApp;

  })();

  /*
    # Show and hide navigation dropdown menus.
    menuToggle: function(menuId,navClass) {
      if (navClass == null) { navClass='.nav' };
      if(  $(menuId).is(":visible") == true ){
        $(menuId).hide();
      }
      else{
        # $(navClass).hide();
        $(menuId).show();
      }
    },
  
    #function menuOn(menuId){
    #  if (navClass == null) { navClass='.nav' };
    #  $(menuId).show();
    #};
  
    #
    #
    #
    menuOn: function(menuId,navClass){
      if (navClass == null) { navClass='.nav-section' };
      $(navClass).hide();
      $(menuId).show();
      $('#search-section').show();
    },
  
    #
    #
    #
    menuOff: function(menuId,navClass){
      if (navClass == null) { navClass='.nav' };
      if(  $(menuId).is(":visible") == true ){
        $(navClass).hide();
      }
    },
  */


}).call(this);