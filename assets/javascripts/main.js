function openCode( url )
{
  window.open( url, "SOURCE_CODE", "resizable=yes,scrollbars=yes,toolbar=no,status=no,height=480,width=750" ).focus();
}

function hookHighlightSyntax() {
  /* TODO: wrap code if not present? */
  $('pre:not(.code)').wrapInner('<code class="prettyprint"></code>');
  // $('pre:not(.code)').addClass('code');
  // $('pre.code').wrapInner('<code></code>');
/*  hljs.tabReplace = '    ';
  hljs.initHighlightingOnLoad('ruby', 'cpp'); */
  prettyPrint();
};

