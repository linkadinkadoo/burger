// Inside burger.js, import orm.js into burger.js

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
// Export at the end of the burger.js file.


let orm = require("../config/orm.js");

let burger = {
  selectAll: function(doIt) {
    orm.all("burgers", function(res) {
      doIt(res);
    });
  },
  
  insertOne: function(cols, vals, doIt) {
    orm.insertOne("burgers", cols, vals, function(res) {
      doIt(res);
    });
  },
  updateOne: function(objColVals, condition, doIt) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      doIt(res);
    });
  }
};

module.exports = burger;