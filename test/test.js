
describe('submittable', function(){

  var submittable = require('submittable')
    , domify = require('domify');

  for (var i = 0; i < cases.length; ++i) {
    (function(i){
      describe(cases[i][0], function(){
        it(cases[i][1], function(){
          assert(cases[i][2] == submittable(domify(cases[i][0])));
        })
      });
    })(i);
  }

  function assert(expr, ms){
    if (!expr) throw new TypeError(ms || 'err');
  }
})
