var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cd) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cd(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },

  deleteOne: function(condition, cd) {
    orm.deleteOne("burgers", condition, function(res) {
      cd(res);
    });
  }
};

module.exports = burger;
