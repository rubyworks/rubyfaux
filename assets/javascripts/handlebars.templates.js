(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['document'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, stack3, foundHelper, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<!-- template: document -->\n\n<div id=\"documentation\">\n  ";
  foundHelper = helpers.format;
  stack1 = foundHelper || depth0.format;
  foundHelper = helpers.text;
  stack2 = foundHelper || depth0.text;
  foundHelper = helpers.markup;
  stack3 = foundHelper || depth0.markup;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "markup", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\n</div>\n\n";
  return buffer;});
templates['file_stats'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <dt class=\"requires\">Requires</dt>\n    <dd class=\"requires\">\n      <ul>\n      ";
  foundHelper = helpers.requires;
  stack1 = foundHelper || depth0.requires;
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    </dd>\n    ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li>";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</li>\n      ";
  return buffer;}

  buffer += "<!-- template: file_stats -->\n\n<div id=\"file-stats-section\" class=\"section\" style=\"float: right; width: 300px;\">\n  <h3 class=\"section-header\">File Stats</h3>\n  <dl>\n    <dt class=\"modified-date\">Created</dt>\n    <dd class=\"modified-date\">";
  foundHelper = helpers.created;
  stack1 = foundHelper || depth0.created;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "created", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</dd>\n\n    <dt class=\"modified-date\">Last Modified</dt>\n    <dd class=\"modified-date\">";
  foundHelper = helpers.modified;
  stack1 = foundHelper || depth0.modified;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "modified", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</dd>\n\n    ";
  foundHelper = helpers.requires;
  stack1 = foundHelper || depth0.requires;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </dl>\n</div>\n\n";
  return buffer;});
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "\n    <div id=\"debugging-toggle\" style=\"float: right; margin-right: 5px;\">\n      <img src=\"assets/images/icons/bug.png\" alt=\"[Debug]\" height=\"16\" width=\"16\" />\n    </div>\n  ";}

  buffer += "<div id=\"validator-badges\">\n  ";
  foundHelper = helpers.Rebecca;
  stack1 = foundHelper || depth0.Rebecca;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.debug);
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <div style=\"float: right; margin-right: 5px;\">\n    Generated with <a href=\"http://rubyworks.github.com/shomen\">Shomen</a>\n                   <a href=\"http://rdocodile.github.com/rebecca\">Rebecca</a>\n                   v";
  foundHelper = helpers.Rebecca;
  stack1 = foundHelper || depth0.Rebecca;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.version);
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "Rebecca.version", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n    &nbsp;\n    <a href=\"http://validator.w3.org/check/referer\">\n      <img src=\"assets/images/icons/check.png\" alt=\"[Validate]\" height=\"16\" width=\"16\" />\n    </a>\n  </div>\n  <br/><br/> \n</div>\n\n";
  return buffer;});
templates['index'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div>\n    <h2>Documents</h2>\n    <div class=\"multi-column listing\">\n      ";
  foundHelper = helpers.documents;
  stack1 = foundHelper || depth0.documents;
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n  ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <div class=\"item file\">\n          <a href=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  foundHelper = helpers.calc_href;
  stack2 = foundHelper || depth0.calc_href;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "calc_href", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n        </div>\n      ";
  return buffer;}

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <div class=\"item ";
  foundHelper = helpers['!'];
  stack1 = foundHelper || depth0['!'];
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "!", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n        <a href=\"#";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.path;
  stack1 = foundHelper || depth0.path;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "path", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n      </div>\n    ";
  return buffer;}

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <div class=\"item ";
  foundHelper = helpers.singleton;
  stack1 = foundHelper || depth0.singleton;
  stack2 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(9, program9, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n        <a href=\"";
  foundHelper = helpers.calc_method_href;
  stack1 = foundHelper || depth0.calc_method_href;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "calc_method_href", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" title=\"";
  foundHelper = helpers.namespace;
  stack1 = foundHelper || depth0.namespace;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "namespace", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n      </div>\n    ";
  return buffer;}
function program7(depth0,data) {
  
  
  return "singleton";}

function program9(depth0,data) {
  
  
  return "method";}

  buffer += "<!-- template: index -->\n\n<!-- @scope Rebecca.documentation -->\n\n<div id=\"alphabetical-index\">\n  <h1>Alphabetical Index</h1>\n\n  ";
  foundHelper = helpers.documents;
  stack1 = foundHelper || depth0.documents;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <!-- CLASSES/MODULES -->\n  <div>\n    <h2>Class Index</h2>\n    <div class=\"multi-column listing\">\n    ";
  foundHelper = helpers.modules;
  stack1 = foundHelper || depth0.modules;
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <divl>\n  </div>\n\n  <!-- METHODS -->\n  <div>\n    <h2>Method Index</h2>\n    <div class=\"multi-column listing\">\n    ";
  foundHelper = helpers.methods;
  stack1 = foundHelper || depth0.methods;
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  </div>\n</div>\n\n";
  return buffer;});
templates['method'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "method-alias";}

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <span class=\"method-callseq\">";
  foundHelper = helpers.signature;
  stack1 = foundHelper || depth0.signature;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "signature", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span>\n    ";
  return buffer;}

function program5(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += "\n      ";
  foundHelper = helpers.format;
  stack1 = foundHelper || depth0.format;
  foundHelper = helpers.comment;
  stack2 = foundHelper || depth0.comment;
  foundHelper = helpers.markup;
  stack3 = foundHelper || depth0.markup;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "markup", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\n    ";
  return buffer;}

function program7(depth0,data) {
  
  
  return "\n      <p></p>\n    ";}

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"aliases\">\n    Also aliased as:\n    ";
  foundHelper = helpers.aliases;
  stack1 = foundHelper || depth0.aliases;
  tmp1 = self.program(10, program10, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  ";
  return buffer;}
function program10(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n      <a href=\"#";
  foundHelper = helpers.path;
  stack1 = foundHelper || depth0.path;
  foundHelper = helpers.calc_id;
  stack2 = foundHelper || depth0.calc_id;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "calc_id", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n    ";
  return buffer;}

  buffer += "<!-- template: method -->\n\n<div id=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"method-detail ";
  foundHelper = helpers.is_alias_for;
  stack1 = foundHelper || depth0.is_alias_for;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  <a name=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></a>\n\n  <div class=\"method-heading\" style=\"position: relative;\">\n    <!-- <span class=\"method-name\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span> -->\n    ";
  foundHelper = helpers.interfaces;
  stack1 = foundHelper || depth0.interfaces;
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <span class=\"method-click-advice\">click to toggle source</span>\n  </div>\n\n  <div class=\"method-description\">\n    ";
  foundHelper = helpers.comment;
  stack1 = foundHelper || depth0.comment;
  stack2 = helpers['if'];
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(7, program7, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <div class=\"method-source-code\" id=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "-source\">\n      <pre>\n        ";
  foundHelper = helpers.source;
  stack1 = foundHelper || depth0.source;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "source", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n      </pre>\n    </div>\n  </div>\n\n  ";
  foundHelper = helpers.aliases;
  stack1 = foundHelper || depth0.aliases;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);
  stack2 = helpers['if'];
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n";
  return buffer;});
templates['module'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, stack3, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <h1>";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</h1>\n    ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  <div id=\"parent-class-section\" class=\"section\">\n    <h3 class=\"section-header\">Parent</h3>\n    <ul>\n      ";
  foundHelper = helpers.superclass;
  stack1 = foundHelper || depth0.superclass;
  stack2 = helpers['if'];
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </div>\n  ";
  return buffer;}
function program4(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <li class=\"class\">\n          <!-- TODO: if id exists -->\n          <a href=\"#";
  foundHelper = helpers.superclass;
  stack1 = foundHelper || depth0.superclass;
  foundHelper = helpers.calc_id;
  stack2 = foundHelper || depth0.calc_id;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "calc_id", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.superclass;
  stack1 = foundHelper || depth0.superclass;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "superclass", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n        </li>\n      ";
  return buffer;}

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  <div id=\"namespace-list-section\" class=\"section\">\n    <h3 class=\"section-header\">Namespace</h3>\n    <ul class=\"link-list\">\n      ";
  foundHelper = helpers.modules;
  stack1 = foundHelper || depth0.modules;
  foundHelper = helpers.doc;
  stack2 = foundHelper || depth0.doc;
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      ";
  foundHelper = helpers.classes;
  stack1 = foundHelper || depth0.classes;
  foundHelper = helpers.doc;
  stack2 = foundHelper || depth0.doc;
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </div>\n  ";
  return buffer;}
function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"";
  foundHelper = helpers['!'];
  stack1 = foundHelper || depth0['!'];
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "!", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><a href=\"#";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></li>\n      ";
  return buffer;}

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"";
  foundHelper = helpers['!'];
  stack1 = foundHelper || depth0['!'];
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "!", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"><a href=\"#";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></li>\n      ";
  return buffer;}

function program11(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  <div id=\"includes-section\" class=\"section\">\n    <h3 class=\"section-header\">Included Modules</h3>\n    <ul class=\"link-list\">\n    ";
  foundHelper = helpers.includes;
  stack1 = foundHelper || depth0.includes;
  foundHelper = helpers.doc;
  stack2 = foundHelper || depth0.doc;
  tmp1 = self.program(12, program12, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </div>\n  ";
  return buffer;}
function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li><a href=\"#";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></li>\n    ";
  return buffer;}

function program14(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  <div id=\"extensions-section\" class=\"section\">\n    <h3 class=\"section-header\">Extension Modules</h3>\n    <ul class=\"link-list\">\n    ";
  foundHelper = helpers.extensions;
  stack1 = foundHelper || depth0.extensions;
  foundHelper = helpers.doc;
  stack2 = foundHelper || depth0.doc;
  tmp1 = self.program(15, program15, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </div>\n  ";
  return buffer;}
function program15(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <li><a href=\"#";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></li>\n    ";
  return buffer;}

function program17(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  <div id=\"constants-list\" class=\"section\">\n    <h3 class=\"section-header\">Constants</h3>\n    <dl>\n    ";
  foundHelper = helpers.constants;
  stack1 = foundHelper || depth0.constants;
  foundHelper = helpers.doc;
  stack2 = foundHelper || depth0.doc;
  tmp1 = self.program(18, program18, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </dl>\n  </div>\n  ";
  return buffer;}
function program18(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <dt><a name=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" href=\"#";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></dt>\n      <dd class=\"description\">";
  foundHelper = helpers.comment;
  stack1 = foundHelper || depth0.comment;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "comment", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</dd>\n    ";
  return buffer;}

function program20(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  <div id=\"attributes-list\" class=\"method-section section\">\n    <h3 class=\"section-header\">Attributes</h3>\n\n    ";
  foundHelper = helpers.accessors;
  stack1 = foundHelper || depth0.accessors;
  stack2 = helpers.each;
  tmp1 = self.program(21, program21, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  ";
  return buffer;}
function program21(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  foundHelper = helpers.reader;
  stack1 = foundHelper || depth0.reader;
  tmp1 = self.program(22, program22, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      ";
  foundHelper = helpers.writer;
  stack1 = foundHelper || depth0.writer;
  tmp1 = self.program(24, program24, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;}
function program22(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div id=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"method-detail\">\n          <a name=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></a>\n          <div class=\"method-heading\">\n            <a href=\"";
  foundHelper = helpers.calc_method_href;
  stack1 = foundHelper || depth0.calc_method_href;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "calc_method_href", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"method-name\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n          </div>\n          <div class=\"method-description\">\n            <p>";
  foundHelper = helpers.comment;
  stack1 = foundHelper || depth0.comment;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "comment", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</p>\n          </div>\n        </div>\n      ";
  return buffer;}

function program24(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <div id=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"method-detail\">\n          <a name=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\"></a>\n          <div class=\"method-heading\">\n            <a href=\"";
  foundHelper = helpers.calc_method_href;
  stack1 = foundHelper || depth0.calc_method_href;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "calc_method_href", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"method-name\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n          </div>\n          <div class=\"method-description\">\n            <p>";
  foundHelper = helpers.comment;
  stack1 = foundHelper || depth0.comment;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "comment", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</p>\n          </div>\n        </div>\n      ";
  return buffer;}

function program26(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += "\n  <div id=\"methods\" class=\"method-section section\">\n    ";
  stack1 = "public";
  stack2 = "class";
  foundHelper = helpers.if_methods_by;
  stack3 = foundHelper || depth0.if_methods_by;
  tmp1 = self.program(27, program27, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = "private";
  stack2 = "class";
  foundHelper = helpers.if_methods_by;
  stack3 = foundHelper || depth0.if_methods_by;
  tmp1 = self.program(30, program30, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = "protected";
  stack2 = "class";
  foundHelper = helpers.if_methods_by;
  stack3 = foundHelper || depth0.if_methods_by;
  tmp1 = self.program(33, program33, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = "public";
  stack2 = "instance";
  foundHelper = helpers.if_methods_by;
  stack3 = foundHelper || depth0.if_methods_by;
  tmp1 = self.program(36, program36, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = "private";
  stack2 = "instance";
  foundHelper = helpers.if_methods_by;
  stack3 = foundHelper || depth0.if_methods_by;
  tmp1 = self.program(39, program39, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = "protected";
  stack2 = "instance";
  foundHelper = helpers.if_methods_by;
  stack3 = foundHelper || depth0.if_methods_by;
  tmp1 = self.program(42, program42, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n  ";
  return buffer;}
function program27(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += "\n    <div id=\"public-class-method-details\" class=\"class-method-list\">\n      <h3 class=\"section-header\">Public Class Methods</h3>\n      ";
  stack1 = "public";
  stack2 = "class";
  foundHelper = helpers.methods_by;
  stack3 = foundHelper || depth0.methods_by;
  tmp1 = self.program(28, program28, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    ";
  return buffer;}
function program28(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.method, 'method', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program30(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += "\n    <div id=\"private-class-method-details\" class=\"class-method-list\">\n      <h3 class=\"section-header\">Private Class Methods</h3>\n      ";
  stack1 = "private";
  stack2 = "class";
  foundHelper = helpers.methods_by;
  stack3 = foundHelper || depth0.methods_by;
  tmp1 = self.program(31, program31, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    ";
  return buffer;}
function program31(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.method, 'method', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program33(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += "\n    <div id=\"protected-class-method-details\" class=\"class-method-list\">\n      <h3 class=\"section-header\">Protected Class Methods</h3>\n      ";
  stack1 = "protected";
  stack2 = "class";
  foundHelper = helpers.methods_by;
  stack3 = foundHelper || depth0.methods_by;
  tmp1 = self.program(34, program34, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    ";
  return buffer;}
function program34(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.method, 'method', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program36(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += "\n    <div id=\"public-instance-method-details\" class=\"instance-method-list\">\n      <h3 class=\"section-header\">Public Instance Methods</h3>\n      ";
  stack1 = "public";
  stack2 = "instance";
  foundHelper = helpers.methods_by;
  stack3 = foundHelper || depth0.methods_by;
  tmp1 = self.program(37, program37, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    ";
  return buffer;}
function program37(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.method, 'method', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program39(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += "\n    <div id=\"private-instance-method-details\" class=\"instance-method-list\">\n      <h3 class=\"section-header\">Private Instance Methods</h3>\n      ";
  stack1 = "private";
  stack2 = "instance";
  foundHelper = helpers.methods_by;
  stack3 = foundHelper || depth0.methods_by;
  tmp1 = self.program(40, program40, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    ";
  return buffer;}
function program40(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.method, 'method', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program42(depth0,data) {
  
  var buffer = "", stack1, stack2, stack3;
  buffer += "\n    <div id=\"protected-instance-method-details\" class=\"instance-method-list\">\n      <h3 class=\"section-header\">Protected Instance Methods</h3>\n      ";
  stack1 = "protected";
  stack2 = "instance";
  foundHelper = helpers.methods_by;
  stack3 = foundHelper || depth0.methods_by;
  tmp1 = self.program(43, program43, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack3, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n    ";
  return buffer;}
function program43(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.method, 'method', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;}

function program45(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <li class=\"file\">\n          ";
  foundHelper = helpers.uri;
  stack1 = foundHelper || depth0.uri;
  stack2 = helpers['if'];
  tmp1 = self.program(46, program46, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(48, program48, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </li>\n      ";
  return buffer;}
function program46(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <a href=\"";
  foundHelper = helpers.uri;
  stack1 = foundHelper || depth0.uri;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "uri", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" title=\"";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n              ";
  foundHelper = helpers.path;
  stack1 = foundHelper || depth0.path;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "path", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n            </a>\n          ";
  return buffer;}

function program48(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <a href=\"#";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" title=\"";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n              ";
  foundHelper = helpers.path;
  stack1 = foundHelper || depth0.path;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "path", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n            </a>\n          ";
  return buffer;}

  buffer += "<!-- template: module -->\n\n<div id=\"documentation\">\n\n  <div id=\"description\">\n    ";
  foundHelper = helpers.unless_header;
  stack1 = foundHelper || depth0.unless_header;
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  foundHelper = helpers.format;
  stack1 = foundHelper || depth0.format;
  foundHelper = helpers.comment;
  stack2 = foundHelper || depth0.comment;
  foundHelper = helpers.markup;
  stack3 = foundHelper || depth0.markup;
  if(typeof stack3 === functionType) { stack1 = stack3.call(depth0, stack2, stack1, { hash: {} }); }
  else if(stack3=== undef) { stack1 = helperMissing.call(depth0, "markup", stack2, stack1, { hash: {} }); }
  else { stack1 = stack3; }
  buffer += escapeExpression(stack1) + "\n  </div>\n\n  <!-- Parent Class -->\n  ";
  foundHelper = helpers.if_class;
  stack1 = foundHelper || depth0.if_class;
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <!-- Namespace Contents -->\n  ";
  foundHelper = helpers.if_namespaces;
  stack1 = foundHelper || depth0.if_namespaces;
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <!-- Included Modules -->\n  ";
  foundHelper = helpers.includes;
  stack1 = foundHelper || depth0.includes;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);
  stack2 = helpers['if'];
  tmp1 = self.program(11, program11, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <!-- Extension Modules -->\n  ";
  foundHelper = helpers.extensions;
  stack1 = foundHelper || depth0.extensions;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);
  stack2 = helpers['if'];
  tmp1 = self.program(14, program14, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <!-- Constants -->\n  ";
  foundHelper = helpers.constants;
  stack1 = foundHelper || depth0.constants;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);
  stack2 = helpers['if'];
  tmp1 = self.program(17, program17, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <!-- Attributes -->\n  ";
  foundHelper = helpers.accessors;
  stack1 = foundHelper || depth0.accessors;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);
  stack2 = helpers['if'];
  tmp1 = self.program(20, program20, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <!-- Methods -->\n  ";
  foundHelper = helpers.methods_categorized;
  stack1 = foundHelper || depth0.methods_categorized;
  tmp1 = self.program(26, program26, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <!-- In Files -->\n  <div id=\"file-list-section\" class=\"section\">\n    <h3 class=\"section-header\">In Files</h3>\n    <div class=\"section-body\">\n      <ul>\n      ";
  foundHelper = helpers.files;
  stack1 = foundHelper || depth0.files;
  foundHelper = helpers.doc;
  stack2 = foundHelper || depth0.doc;
  tmp1 = self.program(45, program45, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack2, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    </div>\n  </div>\n\n</div>\n";
  return buffer;});
templates['navigation'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <td id=\"fileindex-section\" class=\"section nav-section\">\n        <h3 class=\"section-header\">Documents</h3>\n        <ul>\n        ";
  foundHelper = helpers.documents;
  stack1 = foundHelper || depth0.documents;
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </ul>\n      </td>\n    ";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n          <li class=\"file\">\n            <a href=\"";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  foundHelper = helpers.calc_href;
  stack2 = foundHelper || depth0.calc_href;
  if(typeof stack2 === functionType) { stack1 = stack2.call(depth0, stack1, { hash: {} }); }
  else if(stack2=== undef) { stack1 = helperMissing.call(depth0, "calc_href", stack1, { hash: {} }); }
  else { stack1 = stack2; }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n          </li>\n        ";
  return buffer;}

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"";
  foundHelper = helpers['!'];
  stack1 = foundHelper || depth0['!'];
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "!", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">\n          <a href=\"#";
  foundHelper = helpers.id;
  stack1 = foundHelper || depth0.id;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "id", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.path;
  stack1 = foundHelper || depth0.path;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "path", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n        </li>\n      ";
  return buffer;}

function program6(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        <li class=\"";
  foundHelper = helpers.singleton;
  stack1 = foundHelper || depth0.singleton;
  stack2 = helpers['if'];
  tmp1 = self.program(7, program7, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(9, program9, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" style=\"clear: both;\">\n          <span class=\"method-parent-aside\">";
  foundHelper = helpers.namespace;
  stack1 = foundHelper || depth0.namespace;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "namespace", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span>\n          <a href=\"";
  foundHelper = helpers.calc_method_href;
  stack1 = foundHelper || depth0.calc_method_href;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "calc_method_href", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>\n        </li>\n      ";
  return buffer;}
function program7(depth0,data) {
  
  
  return "singleton";}

function program9(depth0,data) {
  
  
  return "method";}

  buffer += "<!-- template: navigation -->\n\n<!-- TODO: Maybe break this up into separate templates for each entry and move the bulk back to index.html.  -->\n\n<!-- @scope Rebecca.documentation -->\n\n<div class=\"button-list\">\n  <a href=\"index.html\">README</a>\n  <a href=\"index.html#alpha-index\">INDEX</a>\n  <button class=\"a\" onClick=\"Rebecca.menuToggle('#search-section');\">Search</button>: &nbsp;\n\n  <button onClick=\"Rebecca.menuOn('#fileindex-section');\">documents</button> &nbsp;\n  <button onClick=\"Rebecca.menuOn('#classindex-section');\">classes</button> &nbsp;\n  <button onClick=\"Rebecca.menuOn('#methodindex-section');\">methods</button> &nbsp;\n\n  <button onClick=\"Rebecca.menuOn('.code-section');\">. .</button> &nbsp;\n  <button onClick=\"Rebecca.menuOn('.nav-section');\">. . .</button> &nbsp;\n</div>\n\n<div id=\"search-section\" class=\"nav1\" style=\"display: none;\">\n  <table>\n  <tr>\n    <!-- FILES -->\n    ";
  foundHelper = helpers.documents;
  stack1 = foundHelper || depth0.documents;
  stack1 = (stack1 === null || stack1 === undefined || stack1 === false ? stack1 : stack1.length);
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <!-- CLASSES/MODULES -->\n    <td id=\"classindex-section\" class=\"section nav-section code-section\" width=\"40%\">\n      <h3 class=\"section-header\">Class Index\n        <span class=\"search-toggle\">\n          <img src=\"assets/images/icons/find.png\" height=\"16\" width=\"16\" alt=\"[+]\" title=\"show/hide quicksearch\" />\n        </span>\n      </h3>\n      <form action=\"#\" method=\"get\" accept-charset=\"utf-8\" class=\"initially-hidden\">\n      <fieldset>\n        <!-- <legend>Quicksearch</legend> -->\n        <input type=\"text\" name=\"quicksearch\" value=\"\" class=\"quicksearch-field\" />\n      </fieldset>\n      </form>\n\n      <ul>\n      ";
  foundHelper = helpers.modules;
  stack1 = foundHelper || depth0.modules;
  tmp1 = self.program(4, program4, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n      <div id=\"no-class-search-results\" style=\"display: none;\">No matching classes.</div>\n    </td>\n\n    <!-- METHODS -->\n    <td id=\"methodindex-section\" class=\"section nav-section code-section\" width=60%\">\n      <h3 class=\"section-header\">Method Index\n        <span class=\"search-toggle\">\n          <img src=\"assets/images/icons/find.png\" height=\"16\" width=\"16\" alt=\"[+]\" title=\"show/hide quicksearch\" />\n        </span>\n      </h3>\n      <form action=\"#\" method=\"get\" accept-charset=\"utf-8\" class=\"initially-hidden\">\n      <fieldset>\n        <!-- <legend>Quicksearch</legend> -->\n        <input type=\"text\" name=\"quicksearch\" value=\"\" class=\"quicksearch-field\" />\n      </fieldset>\n      </form>\n      <ul>\n      ";
  foundHelper = helpers.methods;
  stack1 = foundHelper || depth0.methods;
  tmp1 = self.program(6, program6, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  if(foundHelper && typeof stack1 === functionType) { stack1 = stack1.call(depth0, tmp1); }
  else { stack1 = blockHelperMissing.call(depth0, stack1, tmp1); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    </td>\n\n  </tr>\n  </table>\n</div>\n";
  return buffer;});
templates['script'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, stack2, foundHelper, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"scm-uri\">\n      <a target=\"_blank\" href=\"";
  foundHelper = helpers.uri;
  stack1 = foundHelper || depth0.uri;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "uri", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">Click here to view source code via repository</a>.\n    </div>\n  ";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <pre>\n  <code>\n    ";
  foundHelper = helpers.source;
  stack1 = foundHelper || depth0.source;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "source", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\n  </code>\n  </pre>\n  ";
  return buffer;}

  buffer += "<!-- template: script -->\n\n<div id=\"documentation\">\n  ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.file_stats, 'file_stats', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  <h2>";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</h2>\n  <br/>\n  ";
  foundHelper = helpers.uri;
  stack1 = foundHelper || depth0.uri;
  stack2 = helpers['if'];
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  ";
  foundHelper = helpers.source;
  stack1 = foundHelper || depth0.source;
  stack2 = helpers['if'];
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n";
  return buffer;});
templates['title'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<!-- template: title -->\n\n<h2><a href=\"index.html\">";
  foundHelper = helpers.title;
  stack1 = foundHelper || depth0.title;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "title", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></h2>\n<h1>\n  <img src=\"assets/images/icons/project.png\" align=\"absmiddle\">&nbsp;\n  <a href=\"index.html\">README</a>\n</h1>\n\n";
  return buffer;});
})();