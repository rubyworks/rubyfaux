// rdoc convertor
var rundown = new Rundown.converter();  /* TODO: support other formats */

//
// @todo handle format
//
Handlebars.registerHelper('markup', function(text, format) {
  var ret = rundown.makeHtml(text); //Rubyfaux.markup(text, format);
  return new Handlebars.SafeString(ret);
});

//
// Capitalize word.
//
Handlebars.registerHelper('rubyfaux_version', function() {
  return Rubyfaux.version;
});

//
// Capitalize word.
//
Handlebars.registerHelper('capitalize', function(word) {
  if (word != undefined) {
    return word.capitalize();
  };
});

//
// Calcuate the documentation `id` given a `path`.
//
Handlebars.registerHelper('calc_id', function(path) {
  return Rubyfaux.id(path);
});


//
// Calculate the internal href given the documentaiton `id`.
//
Handlebars.registerHelper('calc_href', function(id) {
  return Rubyfaux.href(id);
});

//
// @todo Combine with above.
//
Handlebars.registerHelper('calc_method_href', function() {
 return Rubyfaux.method_href(this);
});

//
//
//
Handlebars.registerHelper('declares', function(term, options) {
 var out = '';
 if ($.inArray(term, this.declarations) != -1) {
   out = options.fn(this);
 };
 return out;
});

//
// If they the of documentation object is a `class`, then 
// render the given block.
//
Handlebars.registerHelper('if_class', function(options) {
  if (this['!'] == 'class') {
    return options.fn(this);
  } else {
    return '';
  };
});


//
// If the `comment` starts with a header, as indicated by a `=` or `#`,
// then do not render the given block.
//
Handlebars.registerHelper('unless_header', function(options) {
  if (! /^\s*[=#]/.test(this.comment)) {
    return options.fn(this);
  } else {
    return '';
  };
});

//
// If the type of the documentation entry (`!`) matches the given
// type name then render the block.
//
Handlebars.registerHelper('if_type', function(type, options) {
 if (this['!'] == type) {
    return options.fn(this);
  } else {
    return '';
  };
});


//
// This helper ensures there is a least one class or module for the
// given block to be rendered.
//
Handlebars.registerHelper('if_namespaces', function(options) {
 if (this.classes.length > 0 || this.modules.length > 0) {
   return options.fn(this);
 } else {
   return '';
 };
});

//
//
//
Handlebars.registerHelper('namespaces', function(options) {
  var list = modules.concat(classes).sort(Rubyfaux.compareNames)
  var out = '';
  var doc;

  for(var i=0, l=list.length; i<l; i++) {
    doc = Rubyfaux.documentation_by_key[list[i]];
    out = out + options.fn(doc);
  };
  return out;
});

//
// Iterate over each `list` entry, looking the item up in documentation,
// and rendering the given block with it.
//
Handlebars.registerHelper('doc', function(list, options) {
  var doc;
  var out = '';

  //modules.sort(Rubyfaux.compareNames)

  for(var i=0, l=list.length; i<l; i++) {
    doc = Rubyfaux.documentation_by_key[list[i]];
    if (doc != null) {
      out = out + options.fn(doc);
    } else {
      out = out + options.fn(this);
    };
  };

  return out;
});

//
//
//
Handlebars.registerHelper('with_doc', function(key, options) {
  var out = '';
  var doc = Rubyfaux.documentation_by_key[key];

  if (doc != null) {
    out = out + options.fn(doc);
  } else {
    out = out + options.fn(this);
  };

  return out;
});

//
// For use in the context of `#doc accessors`, this renders the block for a reader.
//
Handlebars.registerHelper('reader', function(options) {
  var doc = Rubyfaux.documentation_by_key[this];
  var out = '';
  if (doc != null) {
    out = options.fn(doc);
  };
  return out;
});

//
// For use in the context of `#doc accessors`, this renders the block for a writer.
//
Handlebars.registerHelper('writer', function(options) {
  var doc = Rubyfaux.documentation_by_key[this+'='];
  var out = '';
  if (doc != null) {
    out = options.fn(doc);
  };
  return out;
});

//
// This helper divides methods up by class/instance scope and public/private/protected
// visibility and then renders the given block with this.
//
Handlebars.registerHelper('methods_categorized', function(block) {
  var meths = Rubyfaux.divy_methods(this.methods);
  var scope = ['class','instance'];
  var sight = ['public','protected','private'];
  var out = '';
  var scope_methods;
  var sight_methods;

  if (this.methods.length > 0) {
    for (var i=0; i < scope.length; ++i) {
      scope_methods = meths[scope[i]];
      if (scope_methods == undefined) { continue };
      for (var j=0; j < sight.length; ++j) {
        sight_methods = scope_methods[sight[j]];
        if (sight_methods == undefined) { continue };
        if (sight_methods.length > 0) {
          sight_methods = sight_methods.sort(Rubyfaux.compareNames);
          out = out + "<h3>" + sight[j].capitalize() + " " + scope[i].capitalize() + " Methods</h3>\n";
          out = out + '<ul class="reference-list">' + "\n";
          for (k in sight_methods) {
            out = out + block(sight_methods[k]);
          };
          out = out + "\n</ul>";
        };
      };
    };    
  };
  return out;
});

//
// This helper makes sure there are methods with a given scope and visibility.
// If so it renders the given block with the current context.
// It is intended to be used in the context of `methods_categorized`.
//
Handlebars.registerHelper('if_methods_by', function(scope, visibility, options) {
  var out = '';

  if (this[scope][visibility].length > 0) {
    out = options.fn(this);
  };

  return out;
});


//
// This helper iterates over methods with a given scope and visibility.
// It is intended to be used in the context of `methods_categorized`.
//
Handlebars.registerHelper('methods_by', function(scope, visibility, options) {
  var meths = this[scope][visibility];
  var out = '';

  for(var i=0, l=meths.length; i<l; i++) {
    out = out + options.fn(meths[i]);
  };

  return out;
});


//
// List of alphabet.
//
// @deprecated Not used.
//
Handlebars.registerHelper('letters', function(block) {
  var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var ret = "";

  for (i=0;i<=25;i++) {
    sub = {letter: '' + abc[i]};
    ret = ret + block(sub);
  };

  return(ret);
});


// Register `method` partial.
Handlebars.registerPartial("method", Handlebars.templates.method);

// Register `document_sidebar` partial.
Handlebars.registerPartial("document_sidebar", Handlebars.templates.document_sidebar);

