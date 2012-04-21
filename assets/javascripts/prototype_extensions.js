
//
Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] == obj) {
            return true;
        }
    }
    return false;
}

//
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

