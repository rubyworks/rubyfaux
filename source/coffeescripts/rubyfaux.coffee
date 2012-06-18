# Rubyfaux in CoffeeScript

class RubyFauxApp
  constructor: (debug) ->
    @debug     = debug
    @convertor = new Rundown.converter()

    @current_menu = null

    @documentation_by_key = {}
    @documentation_by_id  = {}

    @documentation =
      all: []
      methods: []
      classes: []
      scripts: []
      documents: []

    urlVars = getUrlVars()
    doc_url = urlVars['doc'] or 'doc.json'
    doc_id  = urlVars['id']

    $.getJSON(doc_url, (data) =>
      # the url is good
      @doc_url = doc_url

      # set up documentation
      for key, doc of data
        doc.key = key

        if doc.path
          doc.id = id('api-' + doc['!'] + '-' + doc.path)
        else
          doc.id = 'metadata'

        @documentation_by_key[doc.key] = doc
        @documentation_by_id[doc.id]   = doc

        @documentation['all'].push(doc)

        switch doc['!']
          when 'method'
            @documentation['methods'].push(doc)
          when 'class'
            @documentation['classes'].push(doc)
          when 'module'
            @documentation['classes'].push(doc)
          when 'document'
            @documentation['documents'].push(doc)
          when 'script'
            @documentation['scripts'].push(doc)

      @metadata = data['(metadata)']

      @documentation['all']     = @documentation['all'].sort(compareNames)
      @documentation['methods'] = @documentation['methods'].sort(compareNames)
      @documentation['classes'] = @documentation['classes'].sort(comparePaths)

      $("#title").append(template("title", @metadata))
      $('#nav').append(template("navigation", @metadata))
      $('#copyright').append(template("copyright"), @metadata)
      $('#searchbox').append(template("searchbox", {}))

      # routing
      $.history.init( (hash) ->
        if hash == ""
          show(readme().id)
        else
          x = hash.split('/',2)
          id = x[0]
          anchor = x[1]
          show(id,anchor)  # restore the state from hash
      )

      # hookHighlightSyntax();
      # hookSourceViews();
      # hookDebuggingToggle();
      # hookQuickSearch();
      # highlightLocationTarget();

      #$('ul.link-list a').bind("click", highlightClickTarget);
    )

  #
  #
  #
  version: '2'

  #
  # Developer mode.
  #
  debug: ->
    @debug

  #
  # Toggle debug flag.
  #
  debugToggle: ->
    if @debug
      @debug = false
    else
      @debug = true

  #
  #
  #
  current_menu: ->
    @current_menu

  #
  #
  #
  doc_url: ->
    @doc_url

  #
  #
  #
  metadata: ->
    @metadata

  #
  # Stores documentation categorized into groups by type.
  #
  documentation: ->
    @documentation

  #
  #
  #
  documentation_by_key: ->
    @documentation_by_key

  #
  #
  #
  documentation_by_id: ->
    @documentation_by_id

  #
  # Determine primary "readme" document. This function first attempts
  # to find the document specified by the metadata.readme property.
  # If this document does not exist it will search for a document with
  # a name matching /^README/.
  #
  readme: ->
    readme = metadata['readme']
    unless readme
      for d of documentation['documents']
        if d.name.match(/^README/i)
          readme = d
          break
    readme

  #
  # This function constructs a valid Rubyfaux URI.
  #
  href: (id,anchor) ->
    if anchor
      '#' + id + '/' + anchor
    else
      '#' + id

  #
  #
  #
  method_href: (method) ->
    ns = documentation_by_key[method.namespace]
    if ns
      href(ns.id, method.id)
    else
      console.debug('Cannot find method: ' + method.id)
      ''

  #
  #
  #
  id: (key) ->
    # key = encodeURIComponent(key);  DID NOT WORK
    key = key.replace(/\</g,  "-l-")
    key = key.replace(/\>/g,  "-g-")
    key = key.replace(/\=/g,  "-e-")
    key = key.replace(/\?/g,  "-q-")
    key = key.replace(/\!/g,  "-x-")
    key = key.replace(/\~/g,  "-t-")
    key = key.replace(/\[/g,  "-b-")
    key = key.replace(/\]/g,  "-k-")
    key = key.replace(/\#/g,  "-h-")
    key = key.replace(/\./g,  "-d-")
    key = key.replace(/\:\:/g,"-C-")
    key = key.replace(/\:/g,  "-c-")
    key = key.replace(/[/]/g, "-s-")
    key = key.replace(/\W+/g, "-")  # TOO GENERAL?
    key = key.replace(/\W+/g, "-")  # For GOOD MEASURE
    key

  #
  #
  #
  compareNames: (a, b) ->
    return -1 if a.name < b.name
    return  1 if a.name > b.name
    return  0

  #
  #
  #
  comparePaths: (a, b) ->
    return -1 if a.path < b.path
    return  1 if a.path > b.path
    return  0

  #
  #
  #
  getUrlVars: ->
    vars   = []
    index  = window.location.href.indexOf('?') + 1
    hashes = window.location.href.slice(index).split('&')
    for hash in hashes
      h = hash.split('=')
      vars.push(h[0])
      vars[h[0]] = h[1]
    vars

  #
  #
  #
  show: (id, anchor) ->
    doc = documentation_by_id[id]

    console.debug(id)
    console.debug(doc)

    if doc != null
      type = doc['!']

      type = 'class' if type == 'module'

      $('#heading').empty().append(template(type + '-heading', doc))
      $('#content').empty().append(template(type + '-content', doc))
      $('#sidebar').empty().append(template(type + '-sidebar', doc))

      $('#content').find('pre code').each( (i, e) -> hljs.highlightBlock(e, '  ') )

      if anchor
        $('html, body').animate({ scrollTop: $('#'+anchor).offset().top }, 500)
        #$('.method-description,.method-heading').click(Rubyfaux.showSource);
        $('.highlighted').removeClass('highlighted')
        $('#'+anchor).addClass('highlighted')

      hookQuickSearch()
    else
      $('#heading').empty()
      $('#content').empty().append('<b>Not Found</b>')

  #
  #
  #
  divy_methods: (methods) ->
    s = 'instance'
    v = 'public'

    list =
      class:
        public: []
        protected: []
        private: []
      instance: 
        public: []
        protected: []
        private: []

    for x of methods
      doc = documentation_by_key[x]

      if doc.declarations.contains('class')
        s = 'class'
      else
        s = 'instance'

      if doc.declarations.contains('private')
        v = 'private'
      else
        if doc.declarations.contains('protected')
          v = 'protected'
        else
          v = 'public'

      list[s][v].push(doc)

    list

  #
  # Convert RDoc/Markdown document to HTML.
  #
  # @todo Support other formats besides RDoc
  #
  markup: (text,format) -> 
    @rundown.makeHtml(text)

  #
  #
  #
  showSource: (e) ->
    target = e.target

    codeSections = $(target).
  	  parents('.method-detail').
      find('.method-source-code')

	  $(target).
		  parents('.method-detail').
      find('.method-source-code').
      slideToggle('fast', ->
        $(this).find('pre').each( (i, e) ->
          hljs.highlightBlock(e, '  ')
        )
      )

  #
  #
  #
  toggleSource: (id) ->
    $(id).toogle()

  #
  # @todo Replace with Eco template
  #
  template: (name, data) ->
    Handlebars.templates[name](data)



###
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
###

