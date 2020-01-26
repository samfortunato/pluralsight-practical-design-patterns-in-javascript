const Module = {
  method: function() { },
  methodTwo: function() { },
};

const ModuleTwo = function(val) {
  const privateVar = val;

  return {
    method() { },
    methodTwo() { },
  };
};

const moduleTwo = new ModuleTwo('private val');
moduleTwo.methodTwo();

