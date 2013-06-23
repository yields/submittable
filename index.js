
/**
 * Check if the given `el` is submittable.
 *
 * @param {Element}
 * @return {Boolean}
 */

module.exports = function(el){
  return ! el.disabled
    && el.name
    && ! rtype.test(el.type)
    && rname.test(el.nodeName)
    && (!rcheck.test(el.type)
    || el.checked);
};

/**
 * expr's
 */

var rtype = /^(?:submit|button|image|reset|file)$/i;
var rname = /^(?:input|select|textarea|keygen)$/i;
var rcheck = /^(?:checkbox|radio)$/i;
